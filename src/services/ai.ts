import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generateQuestions(topic: string, difficulty: Difficulty, count: number = 3): Promise<Question[]> {
  const prompt = `Eres un Profesor de Gastroenterología de alto nivel preparando a Residentes Senior y Fellows para sus exámenes de certificación (Board).
  Genera exactamente ${count} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topic}".
  
  ESTÁNDARES DE CALIDAD EXIGIDOS:
  1. Si dificultad es "Fellow" o "Staff":
     - EVITA definiciones simples. ENFÓCATE en: Manejo de complicaciones complejas, algoritmos de decisión de segunda línea y fisiopatología molecular/celular relevante.
     - La sección "explanation" DEBE dividirse mentalmente en: Hallazgo Clínico + Explicación Fisiopatológica + Justificación de la respuesta correcta.
  2. Cada pregunta debe incluir una "clinicalPearl" que sea un "mecanismo de memoria" o dato clave para el examen de certificación.
  3. La sección "fisiopato" es CRÍTICA: Explica el mecanismo biológico subyacente (ej: cascada de citoquinas en Crohn, hemodinámica portal en cirrosis).
  4. Los distractores (opciones incorrectas) deben ser plausibles y representar errores comunes en la práctica clínica.
  
  Estructura JSON:
  {
    "id": "string",
    "topic": "${topic}",
    "difficulty": "${difficulty}",
    "text": "string (Caso clínico detallado)",
    "options": ["string", "string", "string", "string"],
    "correctIndex": number,
    "explanation": "string",
    "fisiopato": "string",
    "clinicalPearl": "string",
    "guideline": "string",
    "whyWrong": {
      "0": "explicación de por qué es incorrecta",
      "1": "explicación de por qué es incorrecta",
      "2": "explicación de por qué es incorrecta",
      "3": "explicación de por qué es incorrecta"
    }
  }`;

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
