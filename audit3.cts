import { PRELOADED_QUESTIONS } from './src/data/questionBank';

const unique = new Map();
PRELOADED_QUESTIONS.forEach(q => {
  // Normalize
  const norm = q.text.replace(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+ #\d+\.\s*/, '');
  if (!unique.has(norm)) {
    unique.set(norm, {
      raw: q.text,
      count: 1,
      fisio: q.fisiopato,
      exp: q.explanation,
      options: q.options,
      correct: q.correctIndex
    });
  } else {
    unique.get(norm).count++;
  }
});

console.log(`Total questions in bank: ${PRELOADED_QUESTIONS.length}`);
console.log(`Unique fundamental questions: ${unique.size}`);

import * as fs from 'fs';
fs.writeFileSync('unique_audit.json', JSON.stringify(Array.from(unique.values()), null, 2));
