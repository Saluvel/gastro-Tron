import { Question, Difficulty } from "../types/quiz";

export async function generateQuestions(topicId: string, topicName: string, difficulty: Difficulty, count: number = 3): Promise<Question[]> {
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
      
      const response = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          topicId, 
          topicName, 
          difficulty, 
          count: currentBatchCount,
          focusArea: focus
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.statusText}`);
      }

      const batch = await response.json();
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
    console.error("Error al generar preguntas vía API:", error);
    throw error;
  }
}
