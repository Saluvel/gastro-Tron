import { PRELOADED_QUESTIONS } from './src/data/questionBank';
import * as fs from 'fs';

const uniqueQuestions: any[] = [];
const seenTexts = new Set();

const normalizeText = (text: string) => {
  // remove anything like "Escenario Clínico...", "Caso Clínico...", "Pregunta #X"
  return text.toLowerCase()
    .replace(/^.*?#\d+:?\s*/g, '') // Removes "Escenario Clínico #7:" 
    .replace(/^.*?[0-9]+\s*:\s*/g, '') 
    .replace(/[^a-z0-9]/g, '');
};

for (const q of PRELOADED_QUESTIONS) {
  const norm = normalizeText(q.text);
  if (!seenTexts.has(norm)) {
    seenTexts.add(norm);
    uniqueQuestions.push(q);
  } else {
    console.log(`Duplicate found: ${q.id} -> ${q.text.substring(0, 50)}...`);
  }
}

console.log(`\nOriginal count: ${PRELOADED_QUESTIONS.length}`);
console.log(`Unique count: ${uniqueQuestions.length}`);
console.log(`Removed ${PRELOADED_QUESTIONS.length - uniqueQuestions.length} duplicates.`);

const dbContent = fs.readFileSync('src/data/questionBank.ts', 'utf-8');
const importRegex = /(export const PRELOADED_QUESTIONS: Question\[] = )\[([\s\S]*?)\];/;
const newContent = dbContent.replace(importRegex, `$1${JSON.stringify(uniqueQuestions, null, 2)};`);
fs.writeFileSync('src/data/questionBank.ts', newContent);
