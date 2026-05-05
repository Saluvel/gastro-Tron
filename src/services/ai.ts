import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generateQuestions(topic: string, difficulty: Difficulty, count: number = 3): Promise<Question[]> {
  const prompt = `Eres un Profesor de Gastroenterología de nivel mundial evaluando candidatos en un examen de máxima exigencia.
  Genera exactamente ${count} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topic}".
  
  LÓGICA DE ESCALAMIENTO SEGÚN NIVEL:
  - Nivel "Fellow": Enfoque en manejo estándar según guías internacionales (ASGE/ESGE/AGA). Casos de presentación clásica pero con distractores académicos.
  - Nivel "Staff": Enfoque en "Zonas Grises". Dilemas terapéuticos donde las guías no son concluyentes o hay contraindicaciones relativas. Manejo de complicaciones peri-procedimiento y presentaciones atípicas.
  - Nivel "Subspecialist" (Nivel Board Ultra): Máxima complejidad. Casos extremadamente raros, variantes genéticas, interpretación de data de Ensayos Clínicos fase III (Phase III Trials), controversias actuales en la literatura (NEJM, Lancet, Gastroenterology) y escenarios de "rescate" cuando el tratamiento de primera y segunda línea falla.

  ESTÁNDARES PARA EL EXAMEN:
  1. ENFOQUE: Casos clínicos de alto impacto. El objetivo es evaluar el razonamiento crítico y la toma de decisiones (Next Best Step).
  2. ESTRUCTURA DE RESPUESTA:
     - La "explanation" DEBE seguir este orden: 
       A) Interpretación del hallazgo.
       B) Justificación clínica (por qué las otras son menos probables).
       C) Justificación basada en Evidencia/Guía/Estudio Hito (cita el nombre del estudio o guía con año).
  3. FISIOPATOLOGÍA PROFUNDA EXTREMA: La sección "fisiopato" DEBE ser TÉCNICA Y DETALLADA (nivel molecular/celular).
  4. PERLA CLÍNICA: Un "Axioma" médico definitivo e inolvidable.
  5. POR QUÉ CADA OPCIÓN ES INCORRECTA: En "whyWrong", explica científicamente por qué cada opción fallida es un error en este contexto específico.
  
  Estructura JSON:
  {
    "topic": "${topic}",
    "difficulty": "${difficulty}",
    "text": "string (Caso clínico estructurado)",
    "options": ["string", "string", "string", "string"],
    "correctIndex": number,
    "explanation": "string (A+B+C)",
    "fisiopato": "string (Explicación técnica profunda)",
    "clinicalPearl": "string",
    "guideline": "string (Guía de referencia y año)",
    "whyWrong": {
      "0": "razón académica",
      "1": "razón académica",
      "2": "razón académica",
      "3": "razón académica"
    }
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
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
            required: ["text", "options", "correctIndex", "explanation", "fisiopato", "clinicalPearl", "guideline"]
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
      difficulty: difficulty
    }));
  } catch (error) {
    console.error("Error generating questions:", error);
    return [];
  }
}
