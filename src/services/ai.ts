import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";

const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : ({} as GoogleGenAI);

async function fetchBatch(topic: string, difficulty: string, count: number): Promise<Question[]> {
  const prompt = `Eres un Profesor de Gastroenterología de nivel mundial evaluando candidatos en un examen de máxima exigencia.
  Genera exactamente ${count} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topic}".
  
  LÓGICA DE ESCALAMIENTO SEGÚN NIVEL:
  - Nivel "Fellow": Enfoque en manejo estándar según guías internacionales (ASGE/ESGE/AGA). Casos de presentación clásica pero con distractores académicos.
  - Nivel "Staff": Enfoque en "Zonas Grises". Dilemas terapéuticos donde las guías no son concluyentes o hay contraindicaciones relativas. Manejo de complicaciones peri-procedimiento y presentaciones atípicas.
  - Nivel "Subspecialist" (Nivel Board Ultra): Máxima complejidad. Casos extremadamente raros, variantes genéticas, interpretación de data de Ensayos Clínicos fase III, controversias actuales en la literatura.

  ESTÁNDARES PARA EL EXAMEN:
  1. ENFOQUE: Casos clínicos de alto impacto. El objetivo es evaluar el razonamiento crítico y la toma de decisiones.
  2. ESTRUCTURA DE RESPUESTA:
     A) Interpretación del hallazgo.
     B) Justificación clínica.
     C) Justificación basada en Evidencia/Guía/Estudio Hito.
  3. FISIOPATOLOGÍA PROFUNDA EXTREMA: La sección "fisiopato" DEBE ser técnica y detallada.
  4. PERLA CLÍNICA: Un "Axioma" médico definitivo.
  5. POR QUÉ CADA OPCIÓN ES INCORRECTA: Define por qué fallan en "whyWrong".
  
  Estructura JSON:
  {
    "topic": "${topic}",
    "difficulty": "${difficulty}",
    "text": "string (Caso clínico estructurado)",
    "options": ["string", "string", "string", "string"],
    "correctIndex": number,
    "explanation": "string (A+B+C)",
    "fisiopato": "string (Explicación técnica)",
    "clinicalPearl": "string",
    "guideline": "string",
    "whyWrong": { "0": "razón", "1": "razón", "2": "razón", "3": "razón" }
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro-latest",
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

  // To prevent token truncation or timeout errors, chunk the requests into batches
  const BATCH_SIZE = 4;
  const batches: number[] = [];
  let remaining = count;
  while (remaining > 0) {
    batches.push(Math.min(remaining, BATCH_SIZE));
    remaining -= BATCH_SIZE;
  }

  // Fetch batches in parallel
  const results = await Promise.all(
    batches.map(batchCount => fetchBatch(topic, difficulty, batchCount))
  );

  return results.flat();
}
