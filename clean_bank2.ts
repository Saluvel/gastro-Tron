import { PRELOADED_QUESTIONS } from './src/data/questionBank';
import * as fs from 'fs';

const toRemove = ['q-228', 'q-68', 'q-102'];

const filtered = PRELOADED_QUESTIONS.filter(q => !toRemove.includes(q.id));

const content = fs.readFileSync('src/data/questionBank.ts', 'utf-8');
const newContent = content.replace(
  /(export const PRELOADED_QUESTIONS: Question\[] = )\[([\s\S]*?)\];/,
  `$1${JSON.stringify(filtered, null, 2)};`
);
fs.writeFileSync('src/data/questionBank.ts', newContent);
console.log(`Cleaned up questions. Old length: ${PRELOADED_QUESTIONS.length}, New length: ${filtered.length}.`);
