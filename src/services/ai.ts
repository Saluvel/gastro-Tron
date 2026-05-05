import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generateQuestions(topic: string, difficulty: Difficulty, count: number = 3): Promise<Question[]> {
  const prompt = `Eres un Profesor de Gastroenterología evaluando a un Fellow de primer año en su EXAMEN ORAL de certificación.
  Genera exactamente ${count} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topic}".
  
  ESTÁNDARES PARA EL EXAMEN ORAL:
  1. ENFOQUE: Casos clínicos de "pasillo" y "tablero". El objetivo es evaluar el razonamiento clínico y la toma de decisiones (Next Best Step).
  2. ESTRUCTURA DE RESPUESTA:
     - La "explanation" DEBE seguir este orden: 
       A) Interpretación del hallazgo.
       B) Justificación clínica.
       C) Justificación basada en Guía/Estudio Hito (cita el nombre del estudio si aplica).
  3. FISIOPATOLOGÍA PROFUNDA EXTREMA: La sección "fisiopato" es tu oportunidad de lucirte. DEBE ser MUY DETALLADA a nivel molecular, celular o hemodinámico. Por ejemplo, en porfiria no digas solo "acúmulo de ALA y PBG", explica QUÉ PASA con el grupo Hem, qué enzimas se bloquean exactamente, y POR QUÉ esa molécula específica es neurotóxica (ej: daño neuronal directo vs vasoespasmo). Se busca una nivel de detalle digno de un tratado de medicina interna.
  4. PERLA CLÍNICA: Al final (en clinicalPearl), danos un "Axioma" médico definitivo que no se le pueda olvidar a un gastroenterólogo sobre este tema.
  
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
