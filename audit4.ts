import { PRELOADED_QUESTIONS } from './src/data/questionBank.js';
import * as fs from 'fs';

const unique = new Map();
const duplicates = [];

PRELOADED_QUESTIONS.forEach(q => {
  // Normalize
  const norm = q.text.replace(/^.*?(#\d+\.\s*)/, '');
  if (!unique.has(norm)) {
    unique.set(norm, {
      raw: q.text,
      count: 1,
      fisio: q.fisiopato,
      exp: q.explanation,
      options: q.options,
      correct: q.correctIndex,
      topic: q.topic
    });
  } else {
    unique.get(norm).count++;
    duplicates.push(q);
  }
});

console.log(`Total questions in bank: ${PRELOADED_QUESTIONS.length}`);
console.log(`Unique fundamental questions: ${unique.size}`);
console.log(`Total duplicates: ${duplicates.length}`);

fs.writeFileSync('duplicates.json', JSON.stringify(duplicates, null, 2));
fs.writeFileSync('unique_audit.json', JSON.stringify(Array.from(unique.values()), null, 2));

