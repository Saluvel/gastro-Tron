import * as fs from 'fs';
import { PRELOADED_QUESTIONS } from './src/data/questionBank.js';

const unique = new Map();
const duplicates = [];

const uniqueQuestions = [];

PRELOADED_QUESTIONS.forEach(q => {
  // Normalize
  const norm = q.text.replace(/^.*?(#\d+\.\s*)/, '');
  if (!unique.has(norm)) {
    unique.set(norm, q);
    uniqueQuestions.push(q);
  } else {
    duplicates.push(q);
  }
});

const fileContent = `import { Question } from '../types';

export const PRELOADED_QUESTIONS: Question[] = ${JSON.stringify(uniqueQuestions, null, 2)};
`;

fs.writeFileSync('src/data/questionBank.ts', fileContent);

const topicCounts = {};
duplicates.forEach(q => {
  topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
});

console.log("Deleted duplicates by topic:");
console.log(topicCounts);
