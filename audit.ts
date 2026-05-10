import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

// This script audits the explanation and fisiopato fields of all questions and fixes weird syntax or bad translations.

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const model = "gemini-2.5-pro";

const content = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const match = content.match(/export const PRELOADED_QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);

async function runAudit() {
  if (!match) {
    console.error("Could not parse PRELOADED_QUESTIONS");
    return;
  }
  
  const qs = JSON.parse(match[1]);
  console.log(`Starting audit of ${qs.length} questions...`);

  // We will process in batches of 20 to avoid exceeding context or rate limits too quickly.
  // We'll prompt the model to RETURN AN ARRAY of the same length containing JUST the fixed 'explanation' and 'fisiopato'.

  for (let i = 0; i < qs.length; i += 30) {
    const batch = qs.slice(i, i + 30);
    const simplifiedBatch = batch.map((q, idx) => ({ id: idx, explanation: q.explanation, fisiopato: q.fisiopato || "" }));
    
    console.log(`Processing batch ${i} to ${i + batch.length - 1}...`);
    
    const prompt = `
Eres un editor médico experto en gastroenterología.
Revisa las siguientes explicaciones ("explanation" y "fisiopato") de una serie de preguntas de gastroenterología.
Busca errores de traducción automática grave, palabras como "fibroma sus glóbulos acinares", redacción torpe o gramática anómala.
Corrige CUALQUIER texto que suene extraño, artificial o mal redactado ("spanglish"), usando lenguaje médico pulido, riguroso y en español neutro (estilo Elsevier o Guías Clínicas AGA/AASLD).
Mantén el significado original de la información médica. Si el texto original está bien redactado, déjalo igual.

Respóndeme ÚNICAMENTE con un JSON válido de un array de objetos (uno por cada elemento original) siguiendo esta estructura:
[
  { "id": 0, "explanation": "Texto corregido", "fisiopato": "Texto corregido" },
  ...
]
No incluyas formato Markdown fuera del array JSON. El array debe tener exactamente la misma longitud (${batch.length}).

A continuación los elementos a corregir:
${JSON.stringify(simplifiedBatch)}
`;

    try {
      const resp = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
            temperature: 0.2,
            responseMimeType: "application/json"
        }
      });
      
      const text = resp.text;
      const fixedBatch = JSON.parse(text);
      
      for (let j = 0; j < fixedBatch.length; j++) {
        const item = fixedBatch[j];
        if (item.explanation) batch[j].explanation = item.explanation;
        if (item.fisiopato) batch[j].fisiopato = item.fisiopato;
      }
      
    } catch(e) {
      console.error(`Error in batch ${i}:`, e.message);
    }
  }

  // Save changes
  const newContent = content.replace(
      /export const PRELOADED_QUESTIONS: Question\[\] = \[[\s\S]*\];/, 
      `export const PRELOADED_QUESTIONS: Question[] = ${JSON.stringify(qs, null, 2)};`
  );
  fs.writeFileSync('src/data/questionBank.ts', newContent);
  console.log("Audit complete and saved!");
}

runAudit();
