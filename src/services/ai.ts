import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types/quiz";
import { PRELOADED_QUESTIONS } from "../data/questionBank";

export async function generateQuestions(topicId: string, topicName: string, difficulty: Difficulty, count: number = 3): Promise<Question[]> {
  // 1. Intentar obtener de las preguntas precargadas primero
  const preloaded = PRELOADED_QUESTIONS.filter(q => q.topic === topicId && q.difficulty === difficulty)
    .sort(() => Math.random() - 0.5);

  const selectedPreloaded = preloaded.slice(0, count);
  const remainingCount = count - selectedPreloaded.length;

  // Si ya tenemos suficientes preguntas, las devolvemos
  if (remainingCount <= 0) {
    return selectedPreloaded;
  }

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
    const aiQuestions: Question[] = [];
    
    let remaining = remainingCount;
    let focusIdx = 0;

    // Instrucción para el oráculo sobre sus fuentes (Basado en lo solicitado por el usuario)
    const systemSourceInstruction = `Utiliza como fuente principal el MANUAL CHILENO DE GASTROENTEROLOGÍA (2025) y guías internacionales de sociedades acreditadas (AGA, ACG, ESGE, AASLD).`;

    while (remaining > 0) {
      const currentBatchCount = Math.min(remaining, BATCH_SIZE);
      const focus = shuffledFocus[focusIdx % shuffledFocus.length];
      
      console.log(`Llamando al oráculo de GAS-TRON para lote de ${currentBatchCount} preguntas adicionales (${focus})...`);
      
      const prompt = `${systemSourceInstruction}
      Genera ${currentBatchCount} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topicName}".
      Contexto específico: ${focus || 'General'}
      
      IMPORTANTE: Las explicaciones deben ser técnicas y detalladas.
      - 'fisiopato': Explicación profunda del mecanismo.
      - 'clinicalPearl': Una perla de oro para el consultorio o el board.
      - 'guideline': Cita la guía o el capítulo del manual correspondiente.
      - 'whyWrong': Explica por qué cada una de las otras 3 opciones es incorrecta.
      
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
        model: "gemini-flash-latest",
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
              },
              required: ["id", "topic", "difficulty", "text", "options", "correctIndex", "explanation"]
            }
          }
        }
      });

      const text = response.text;
      if (!text) {
        throw new Error("El modelo no devolvió texto.");
      }

      let cleanText = text.trim();
      if (cleanText.startsWith('```json')) {
        cleanText = cleanText.substring(7);
        if (cleanText.endsWith('```')) cleanText = cleanText.substring(0, cleanText.length - 3);
      } else if (cleanText.startsWith('```')) {
        cleanText = cleanText.substring(3);
        if (cleanText.endsWith('```')) cleanText = cleanText.substring(0, cleanText.length - 3);
      }
      
      const batch = JSON.parse(cleanText);
      aiQuestions.push(...batch);
      
      remaining -= currentBatchCount;
      focusIdx++;
    }

    const finalQuestions = [...selectedPreloaded, ...aiQuestions.map(q => ({
      ...q,
      id: q.id || Math.random().toString(36).substr(2, 9),
      topic: topicId,
      difficulty: difficulty as Difficulty
    }))];

    return finalQuestions.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error al generar preguntas vía IA:", error);
    throw error;
  }
}
