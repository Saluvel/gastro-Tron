import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const model = "gemini-2.5-pro";

const requirements = {
  endoscopia_anticoagulados: 15,
  eii_avanzada: 10,
  muerte_subita: 10,
  protocolo_simulacro: 10,
  cancer_gastrico: 12,
  celiaca: 10
};

// Start generation per topic
async function generateForTopic(topic: string, count: number) {
  console.log(`Generating ${count} questions for ${topic}...`);
  if (count <= 0) return [];
  
  const systemPrompt = `Eres un profesor experto en Gastroenterología y Hepatología, responsable de evaluar a Fellows de primer año.
Tu tarea es crear un archivo JSON con una lista de exactamente ${count} preguntas de opción múltiple INÉDITAS Y AVANZADAS sobre el tema: "${topic}".
REGLAS ESTRICTAS:
1) Las preguntas deben ser creadas con la más alta calidad y estar perfectamente redactadas.
2) El nivel debe ser Fellow de primer año de gastroenterología. DEBEN basarse en guías clínicas (ACG, AGA, ASGE, EASL, AASLD).
3) La fisiopatología explicada en "fisiopato" DEBE ser rigurosamente correcta y académica.
4) Formato JSON ESPERADO de un array de objetos con esta estructura exacta:
[
  {
    "text": "Escenario clínico detallado y pregunta...",
    "options": ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    "correctIndex": 0, /* índice numérico de 0 a 3 */
    "explanation": "Explicación de por qué es la correcta y qué guías la sustentan...",
    "fisiopato": "Explicación profunda de la fisiopatología subyacente...",
    "topic": "${topic}"
  }
]
Asegúrate de NO incluir caracteres de markdown \`\`\`json u otra cosa fuera del JSON válido.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: "Por favor, devuelve el JSON con las preguntas.",
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error(`Failed generation for ${topic}:`, error.message);
    return [];
  }
}

async function main() {
  let allNewQuestions = [];
  for (const [topic, count] of Object.entries(requirements)) {
    const qs = await generateForTopic(topic, count as number);
    allNewQuestions = allNewQuestions.concat(qs);
  }

  // Load existing
  let content = fs.readFileSync('src/data/questionBank.ts', 'utf8');
  // Hacky way to inject
  const match = content.match(/export const PRELOADED_QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);
  if (match) {
    const existing = JSON.parse(match[1]);
    const finalArray = existing.concat(allNewQuestions);
    const newContent = `import { Question } from '../types';\n\nexport const PRELOADED_QUESTIONS: Question[] = ${JSON.stringify(finalArray, null, 2)};\n`;
    fs.writeFileSync('src/data/questionBank.ts', newContent);
    console.log(`Saved! Bank length went from ${existing.length} to ${finalArray.length}`);
  }
}

main();
