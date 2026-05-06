import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";

export async function generateQuestions(topicId: string, topicName: string, difficulty: Difficulty, count: number = 3): Promise<Question[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("La variable de entorno GEMINI_API_KEY no está configurada. Por favor, asegúrate de que esté configurada en los ajustes del proyecto.");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const focusAreas = [
      "Epidemiología, etiología y causas más frecuentes en la población adulta.",
      "Fisiopatología y diagnóstico diferencial.",
      "Casos clínicos comunes y atípicos.",
      "Manejo terapéutico y guías internacionales.",
      "Complicaciones y urgencias."
    ];

    const shuffledFocus = [...focusAreas].sort(() => Math.random() - 0.5);
    const BATCH_SIZE = 5;
    const allQuestions: Question[] = [];
    
    let remaining = count;
    let focusIdx = 0;

    while (remaining > 0) {
      const currentBatchCount = Math.min(remaining, BATCH_SIZE);
      const focus = shuffledFocus[focusIdx % shuffledFocus.length];
      
      console.log(`Llamando al oráculo de GAS-TRON para lote de ${currentBatchCount} preguntas (${focus})...`);
      
      const prompt = `Genera ${currentBatchCount} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topicName}".
      Contexto específico: ${focus || 'General'}
      
      Devuelve un JSON con este formato:
      [
        {
          "id": "unique_id",
          "topic": "${topicId}",
          "difficulty": "${difficulty}",
          "text": "...",
          "options": ["...", "...", "...", "..."],
          "correctIndex": 0,
          "explanation": "...",
          "fisiopato": "...",
          "clinicalPearl": "...",
          "guideline": "...",
          "pillar": "Must-Know",
          "whyWrong": { "0": "...", "1": "...", "2": "...", "3": "..." }
        }
      ]`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
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
                correctIndex: { type: Type.INTEGER },
                explanation: { type: Type.STRING },
                fisiopato: { type: Type.STRING },
                clinicalPearl: { type: Type.STRING },
                guideline: { type: Type.STRING },
                pillar: { type: Type.STRING },
                whyWrong: { 
                  type: Type.OBJECT, 
                  properties: {
                    "0": { type: Type.STRING },
                    "1": { type: Type.STRING },
                    "2": { type: Type.STRING },
                    "3": { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      });

      const text = response.text;
      if (!text) {
        throw new Error("El modelo no devolvió texto.");
      }

      const batch = JSON.parse(text);
      allQuestions.push(...batch);
      
      remaining -= currentBatchCount;
      focusIdx++;
    }

    return allQuestions.map(q => ({
      ...q,
      id: q.id || Math.random().toString(36).substr(2, 9),
      topic: topicId,
      difficulty: difficulty as Difficulty
    })).sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error al generar preguntas vía IA:", error);
    throw error;
  }
}
