import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";

const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : ({} as GoogleGenAI);

async function fetchBatch(topic: string, difficulty: string, count: number, focusArea?: string): Promise<Question[]> {
  const prompt = `Eres un Profesor de Gastroenterología de nivel mundial evaluando candidatos en un examen de máxima exigencia.
  Genera exactamente ${count} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topic}".
  ${focusArea ? `IMPORTANTE: Para este lote, prioriza el área de enfoque: "${focusArea}" asegurando que las preguntas sean variadas dentro de este nicho.` : ''}
  
  LÓGICA DE ESCALAMIENTO SEGÚN NIVEL:
  - Nivel "Fellow": Enfoque en manejo estándar según guías internacionales (ASGE/ESGE/AGA). Casos de presentación clásica pero con distractores académicos.
  - Nivel "Staff": Enfoque en "Zonas Grises". Dilemas terapéuticos donde las guías no son concluyentes o hay contraindicaciones relativas. Manejo de complicaciones peri-procedimiento y presentaciones atípicas.
  - Nivel "Subspecialist" (Nivel Board Ultra): Máxima complejidad. Casos extremadamente raros, variantes genéticas, interpretación de data de Ensayos Clínicos fase III, controversias actuales en la literatura.

  ESTÁNDARES PARA EL EXAMEN:
  1. ENFOQUE: Casos clínicos de alto impacto. El objetivo es evaluar el razonamiento crítico y la toma de decisiones.
  2. MÁXIMA VARIEDAD OBLIGATORIA: Para el tema "${topic}", debes cubrir un espectro de 360 grados. NO te centres en un solo patógeno o condición. Si el tema es general (ej. Diarrea Aguda), debes incluir:
     - Virus (Norovirus, Rotavirus).
     - Bacterias (Salmonella, Campylobacter, Shigella, Yersinia, Vibrio).
     - Parásitos (Giardia, Cryptosporidium).
     - Causas no infecciosas (Fármacos, Autoinmune, Isquemia).
     - Manejo de electrolitos y sepsis.
     - NO permitas que más del 15% de las preguntas de este lote traten sobre la misma entidad específica (ej. C. diff).
  3. ESTRUCTURA DE RESPUESTA:
     A) Interpretación del hallazgo.
     B) Justificación clínica.
     C) Justificación basada en Evidencia/Guía/Estudio Hito.
  3. FISIOPATOLOGÍA PROFUNDA EXTREMA: La sección "fisiopato" DEBE ser técnica y detallada.
  4. PERLA CLÍNICA: Un "Axioma" médico definitivo.
  5. ANÁLISIS DE DISTRACTORES (MANDATORIO): En el objeto "whyWrong", debes proporcionar una justificación fisiopatológica o clínica corta y precisa de POR QUÉ cada opción incorrecta es falsa en este escenario específico. Los distractores deben ser "plausibles" pero incorrectos por una razón científica clara.
  
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
    "Patógenos Virales y Parasitarios (Norovirus, Giardia, Amoeba, Cryptosporidium)",
    "Bacterias Invasivas y Citotóxicas (Shigella, Campylobacter, Yersinia, Salmonella)",
    "Diarrea No Infecciosa (Isquemia, Fármacos, Colitis Microscópica, Enfermedad Inflamatoria)",
    "Manejo de Complicaciones Críticas (Sepsis, Desequilibrio Hidroelectrolítico, Megacolon)",
    "Epidemiología en Poblaciones Especiales (Ancianos, Inmunosuprimidos, Viajeros)",
    "Diagnóstico Avanzado y Novedades (PCR Multiplex, Interpretación de Bio-marcadores)"
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
