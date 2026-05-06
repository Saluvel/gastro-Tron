import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";

const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : ({} as GoogleGenAI);

async function fetchBatch(topic: string, difficulty: string, count: number, focusArea?: string): Promise<Question[]> {
  const specialPrompts: Record<string, string> = {
    'perfil_hepatico': `
      ESTE ES UN MÓDULO ESPECIAL DE INTERPRETACIÓN DE HEPATOGRAMA. 
      Las preguntas DEBEN ser casos clínicos con valores de laboratorio (ALT, AST, FA, GGT, Bilirrubinas, Albúmina, TP).
      El usuario debe deducir el patrón (Hepatocelular, Colestásico, Infiltrativo, Disociado) y la causa más probable basándose en relaciones enzimáticas (ej. AST/ALT > 2) y contexto clínico.
    `,
    'eii_avanzada': `
      ESTE ES UN MÓDULO ESPECIAL DE EII AVANZADA (Manejo, RAM y Fallas). 
      Enfócate en algoritmos de decisión: ¿Cuándo optimizar dosis? ¿Cuándo cambiar de familia de biológico?
      Diferencia claramente Falla Primaria (No respuesta inicial) vs Falla Secundaria (Pérdida de respuesta).
      Incluye monitoreo terapéutico de fármacos (TDM), anticuerpos y manejo de efectos adversos (RAM).
    `
  };

  const topicSpecificPrompt = specialPrompts[topic] || "";

  const prompt = `Eres un Profesor de Gastroenterología de nivel mundial evaluando candidatos en un examen de máxima exigencia.
  ${topicSpecificPrompt}
  Genera exactamente ${count} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema ESTRICTO: "${topic}".
  CUALQUIER PREGUNTA QUE NO ESTÉ ESTRECHAMENTE RELACIONADA AL TEMA "${topic}" SERÁ RECHAZADA Y CAUSARÁ EL FRACASO DE LA EVALUACIÓN. SI EL TEMA ES "Diarrea Aguda", NO DEBES HABLAR DE INFECCIONES O PATOLOGÍAS CRÓNICAS QUE NO CAUSEN PRINCIPALMENTE DIARREA AGUDA (e.g. no EII crónica, no falla secundaria de biológicos, a menos que el tema sea Específicamente EII).
  
  ${focusArea ? `IMPORTANTE: Para este lote, centra el contexto (dentro del tema "${topic}") en: "${focusArea}"` : ''}
  
  LÓGICA DE ESCALAMIENTO SEGÚN NIVEL:
  - Nivel "Fellow": Enfoque en manejo estándar según guías internacionales (ASGE/ESGE/AGA). Casos de presentación clásica pero con distractores académicos.
  - Nivel "Staff": Enfoque en "Zonas Grises". Dilemas terapéuticos donde las guías no son concluyentes o hay contraindicaciones relativas. Manejo de complicaciones peri-procedimiento y presentaciones atípicas.
  - Nivel "Subspecialist" (Nivel Board Ultra): Máxima complejidad. Casos extremadamente raros, variantes genéticas, interpretación de data de Ensayos Clínicos fase III, controversias actuales en la literatura.

  ESTÁNDARES PARA EL EXAMEN:
  1. ENFOQUE: Casos clínicos de alto impacto centrados EXCLUSIVAMENTE en pacientes ADULTOS. 
     - PROHIBICIÓN: Queda terminantemente prohibido incluir casos pediátricos (neonatos, niños, adolescentes) o patologías exclusivas de la infancia. El examen es para especialistas de adultos.
  2. DIRECTRICES DE CONOCIMIENTO (PILARES DEL PREGUNTADO): Las preguntas deben estar pensadas e inspiradas en lo siguiente:
     - "Must-Know": Urgencias absolutas, "Red flags", pautas de supervivencia clínica y decisiones de vida o muerte (ej. manejo de HDA, megacolon tóxico, sepsis biliar).
     - "Board Prep": Patrones clásicos, criterios diagnósticos (Roma IV, Baveno, etc), y algoritmos estándar.
     - "Mastery": Detalles fisiopatológicos precisos, "trampas" diagnósticas comunes que engañan a los novatos, y "Perlas" de subespecialistas.
     IMPORTANTE: La propiedad "pillar" en el JSON debe ser EXACTAMENTE uno de estos 3 valores ("Must-Know", "Board Prep", "Mastery").

  3. MÁXIMA VARIEDAD OBLIGATORIA: Para el tema "${topic}", debes cubrir un espectro de 360 grados. 
     - PROHIBICIÓN: No permitas que más del 10% de las preguntas traten sobre el mismo patógeno específico.
     - DISTRIBUCIÓN: Debes incluir obligatoriamente una mezcla de:
       * Epidemiología en ADULTOS y causas más frecuentes según comorbilidades.
       * Fisiopatología y diagnóstico diferencial (Causas no infecciosas como isquemia o fármacos).
       * Manejo terapéutico basado en guías recientes (ACG, AGA, EASL).
       * Complicaciones críticas y criterios de hospitalización en el adulto.
  4. ESTRUCTURA DE EXPLICACIÓN (En la propiedad "explanation" del JSON):
     A) Interpretación del hallazgo.
     B) Justificación clínica.
     C) Justificación basada en Evidencia/Guía/Estudio Hito.
  5. FISIOPATOLOGÍA PROFUNDA EXTREMA: La sección "fisiopato" DEBE ser técnica y detallada.
  6. PERLA CLÍNICA: Un "Axioma" médico definitivo.
  7. ANÁLISIS DE DISTRACTORES (MANDATORIO): En el objeto "whyWrong", debes proporcionar una justificación fisiopatológica o clínica corta y precisa de POR QUÉ cada opción incorrecta es falsa en este escenario específico. Los distractores deben ser "plausibles" pero incorrectos por una razón científica clara.

  
  Estructura JSON requerida (DEBES DEVOLVER UNA MATRIZ JSON DE EXACTAMENTE ${count} OBJETOS DIFERENTES, repitiendo esta estructura para cada pregunta):
  [
    {
      "topic": "${topic}",
      "difficulty": "${difficulty}",
      "text": "string (Caso clínico estructurado)",
      "options": ["string", "string", "string", "string"],
      "correctIndex": 0,
      "explanation": "string (A+B+C)",
      "fisiopato": "string (Explicación técnica)",
      "clinicalPearl": "string",
      "guideline": "string",
      "pillar": "Must-Know | Board Prep | Mastery",
      "whyWrong": { "0": "razón", "1": "razón", "2": "razón", "3": "razón" }
    },
    // ... DEBES INCLUIR LAS ${count} PREGUNTAS AQUÍ
  ]`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              topic: { type: Type.STRING },
              difficulty: { type: Type.STRING },
              text: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctIndex: { type: Type.NUMBER },
              explanation: { type: Type.STRING },
              fisiopato: { type: Type.STRING },
              clinicalPearl: { type: Type.STRING },
              guideline: { type: Type.STRING },
              whyWrong: { 
                type: Type.OBJECT,
                properties: {
                  "0": { type: Type.STRING },
                  "1": { type: Type.STRING },
                  "2": { type: Type.STRING },
                  "3": { type: Type.STRING }
                }
              }
            },
            required: ["text", "options", "correctIndex", "explanation", "fisiopato", "clinicalPearl", "guideline", "whyWrong"]
          }
        }
      }
    });

    const text = response.text || '[]';
    const questions = JSON.parse(text) as Question[];
    return questions.map(q => ({
      ...q,
      id: q.id || Math.random().toString(36).substr(2, 9),
      topic: topic,
      difficulty: difficulty as Difficulty
    }));
  } catch (error) {
    console.error("Error generating questions batch:", error);
    return [];
  }
}

export async function generateQuestions(topic: string, difficulty: Difficulty, count: number = 3): Promise<Question[]> {
  if (!apiKey) {
    console.warn("Falta la API Key de Gemini: No se puede conectar con el modelo.");
    throw new Error("MISSING_API_KEY");
  }

  // To prevent rate limits and model truncation, chunk the requests into smaller batches
  const BATCH_SIZE = 5;
  const batches: { count: number; focus: string }[] = [];
  
  const focusAreas = [
    "Epidemiología, etiología y causas más frecuentes en la población adulta.",
    "Fisiopatología, mecanismos de enfermedad y diagnóstico diferencial exhaustivo.",
    "Presentación en casos clínicos de la vida real (clásica y atípica).",
    "Manejo terapéutico, algoritmos de decisión basados en guías y farmacología clínica.",
    "Complicaciones, criterios de hospitalización y situaciones de urgencia/emergencia gastroenterológica."
  ];

  let remaining = count;
  let focusIdx = 0;
  // Mezclar focusAreas para cada sesión
  const shuffledFocus = [...focusAreas].sort(() => Math.random() - 0.5);

  while (remaining > 0) {
    const currentBatchCount = Math.min(remaining, BATCH_SIZE);
    batches.push({ 
      count: currentBatchCount, 
      focus: shuffledFocus[focusIdx % shuffledFocus.length] 
    });
    remaining -= currentBatchCount;
    focusIdx++;
  }

  // Fetch batches in parallel
  const resultsArr = await Promise.all(
    batches.map(batch => fetchBatch(topic, difficulty, batch.count, batch.focus))
  );

  const flatResults = resultsArr.flat();
  
  // Shuffle all questions before returning to avoid thematic grouping
  return flatResults.sort(() => Math.random() - 0.5);
}
