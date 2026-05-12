import { PRELOADED_QUESTIONS } from './src/data/questionBank.js';
import { SEED_QUESTIONS } from './src/data/seedQuestions.js';
import * as fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const normalizeText = (text: string) => {
  return text.toLowerCase()
    .replace(/^.*?#\d+:?\s*/g, '')
    .replace(/^.*?caso(\s+clínico)?\s*\d*:?\s*/gi, '')
    .replace(/[^a-z0-9]/g, '');
};

async function generateReplacement(topicId: string, count: number): Promise<any[]> {
  const prompt = `Genera ${count} preguntas NUEVAS, complejas y de nivel Fellow/Board sobre el tema de gastroenterología ID "${topicId}". Diferentes a cualquier cosa básica. Formato JSON:
[
  {
    "id": "new_id_here",
    "topic": "${topicId}",
    "difficulty": "Fellow",
    "text": "...",
    "options": ["correcta", "D1", "D2", "D3"],
    "correctIndex": 0,
    "explanation": "...",
    "fisiopato": "...",
    "clinicalPearl": "...",
    "guideline": "..."
  }
]
`;
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
            guideline: { type: Type.STRING }
          },
          required: ["id", "topic", "difficulty", "text", "options", "correctIndex", "explanation", "fisiopato", "clinicalPearl", "guideline"]
        }
      }
    }
  });
  return JSON.parse(response.text || "[]");
}

async function processFile(filePath: string, varName: string, items: any[]) {
  const uniqueItems: any[] = [];
  const seenTexts = new Set();
  const replacedCountByTopic: Record<string, number> = {};

  for (const q of items) {
    const norm = normalizeText(q.text);
    if (!seenTexts.has(norm)) {
      seenTexts.add(norm);
      uniqueItems.push(q);
    } else {
      console.log(`Duplicate found in ${filePath}: [${q.topic}] -> ${q.text.substring(0, 50)}...`);
      replacedCountByTopic[q.topic] = (replacedCountByTopic[q.topic] || 0) + 1;
    }
  }

  let finalItems = [...uniqueItems];

  for (const [topic, count] of Object.entries(replacedCountByTopic)) {
    console.log(`Generating ${count} replacements for ${topic}...`);
    try {
      const newQs = await generateReplacement(topic, count);
      for (const nq of newQs) {
        nq.id = Math.random().toString(36).substring(7) + '_' + Date.now();
      }
      finalItems = finalItems.concat(newQs);
      console.log(`Generated ${newQs.length} new questions for ${topic}`);
    } catch(err) {
      console.error(`Failed replacement for ${topic}: `, err);
    }
  }

  if (Object.keys(replacedCountByTopic).length > 0) {
    console.log(`Rewriting ${filePath}...`);
    // read the file as string, replace the export
    let dbContent = fs.readFileSync(filePath, 'utf-8');
    const regex = new RegExp(`(export const ${varName}: Question\\[\\] = )\\[([\\s\\S]*?)\\];`);
    dbContent = dbContent.replace(regex, `$1${JSON.stringify(finalItems, null, 2)};`);
    fs.writeFileSync(filePath, dbContent);
  } else {
    console.log(`No duplicates in ${filePath}.`);
  }
}

async function run() {
  await processFile('src/data/questionBank.ts', 'PRELOADED_QUESTIONS', PRELOADED_QUESTIONS);
  await processFile('src/data/seedQuestions.ts', 'SEED_QUESTIONS', SEED_QUESTIONS);
}

run();
