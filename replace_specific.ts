import fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import { PRELOADED_QUESTIONS } from './src/data/questionBank.js';
import { SEED_QUESTIONS } from './src/data/seedQuestions.js';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const toReplace = [
  { id: 'q-222', file: 'src/data/questionBank.ts', topic: 'eii_avanzada', var: 'PRELOADED_QUESTIONS', items: PRELOADED_QUESTIONS },
  { id: 'q-219', file: 'src/data/questionBank.ts', topic: 'cirrosis', var: 'PRELOADED_QUESTIONS', items: PRELOADED_QUESTIONS },
  { id: 'q-216', file: 'src/data/questionBank.ts', topic: 'masld', var: 'PRELOADED_QUESTIONS', items: PRELOADED_QUESTIONS },
  { id: 'q-164', file: 'src/data/questionBank.ts', topic: 'erge', var: 'PRELOADED_QUESTIONS', items: PRELOADED_QUESTIONS },
  { id: 'q-53', file: 'src/data/questionBank.ts', topic: 'cancer_esofago', var: 'PRELOADED_QUESTIONS', items: PRELOADED_QUESTIONS },
  { id: 'seed_44', file: 'src/data/seedQuestions.ts', topic: 'motilidad', var: 'SEED_QUESTIONS', items: SEED_QUESTIONS }
];

async function generateReplacement(topicId: string, oldText: string): Promise<any> {
  const prompt = `Genera 1 pregunta NUEVA, compleja y de nivel Fellow/Board sobre el tema "${topicId}". 
  Debe ser TOTALMENTE DIFERENTE a esta pregunta que estoy reemplazando: "${oldText}".
  Formato JSON estricto:
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
  return JSON.parse(response.text || "[]")[0];
}

async function run() {
  const filesCache: any = {
    'src/data/questionBank.ts': { var: 'PRELOADED_QUESTIONS', items: [...PRELOADED_QUESTIONS], changed: false },
    'src/data/seedQuestions.ts': { var: 'SEED_QUESTIONS', items: [...SEED_QUESTIONS], changed: false }
  };

  for (const item of toReplace) {
    console.log(`Replacing ${item.id} for topic ${item.topic}...`);
    const qIndex = filesCache[item.file].items.findIndex((q: any) => q.id === item.id);
    if (qIndex > -1) {
       const oldQ = filesCache[item.file].items[qIndex];
       const newQ = await generateReplacement(item.topic, oldQ.text);
       newQ.id = Math.random().toString(36).substring(7) + '_' + Date.now();
       
       filesCache[item.file].items[qIndex] = newQ;
       filesCache[item.file].changed = true;
       console.log(` -> Success. New text: ${newQ.text.substring(0,60)}...`);
    } else {
       console.log(` -> Not found in ${item.file}`);
    }
  }

  for (const [filePath, data] of Object.entries(filesCache)) {
     if ((data as any).changed) {
       console.log(`Writing changes to ${filePath}...`);
       let dbContent = fs.readFileSync(filePath, 'utf-8');
       const varName = (data as any).var;
       const regex = new RegExp(`(export const ${varName}: Question\\[\\] = )\\[([\\s\\S]*?)\\];`);
       dbContent = dbContent.replace(regex, `$1${JSON.stringify((data as any).items, null, 2)};`);
       fs.writeFileSync(filePath, dbContent);
     }
  }
}

run();
