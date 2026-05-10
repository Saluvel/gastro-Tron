import { PRELOADED_QUESTIONS } from './src/data/questionBank';
import * as fs from 'fs';

const filtered = PRELOADED_QUESTIONS.filter(q => {
  if (!q.id) {
    console.log("Removing missing ID question:", q.text.substring(0, 50));
    return false;
  }
  if (q.id === 'q-64') {
    console.log("Removing q-64 (too basic):", q.text);
    return false;
  }
  
  // also let's check for very short questions
  if (q.text.length < 80 && !q.text.toLowerCase().includes("cuál")) {
    // just looking intuitively
  }

  return true;
});

const content = fs.readFileSync('src/data/questionBank.ts', 'utf-8');
const newContent = content.replace(
  /(export const PRELOADED_QUESTIONS: Question\[] = )\[([\s\S]*?)\];/,
  `$1${JSON.stringify(filtered, null, 2)};`
);
fs.writeFileSync('src/data/questionBank.ts', newContent);
console.log(`Cleaned up questions. Old length: ${PRELOADED_QUESTIONS.length}, New length: ${filtered.length}.`);
