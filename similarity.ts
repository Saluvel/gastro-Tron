import fs from 'fs';
import { PRELOADED_QUESTIONS } from './src/data/questionBank.js';
import { SEED_QUESTIONS } from './src/data/seedQuestions.js';

// basic Levenshtein
function levenshtein(a: string, b: string): number {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

const allQuestions = [...PRELOADED_QUESTIONS, ...SEED_QUESTIONS];
const groups = [];

for (let i = 0; i < allQuestions.length; i++) {
  const normA = allQuestions[i].text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
  for (let j = i + 1; j < allQuestions.length; j++) {
    if (allQuestions[i].topic !== allQuestions[j].topic) continue; // Only same topic
    const normB = allQuestions[j].text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const dist = levenshtein(normA, normB);
    const maxLen = Math.max(normA.length, normB.length);
    if (dist < maxLen * 0.4) { // 60% similarity across whole string
      console.log(`Similar inside [${allQuestions[i].topic}]:`);
      console.log(`Q1 [${allQuestions[i].id}]: ${allQuestions[i].text}`);
      console.log(`Q2 [${allQuestions[j].id}]: ${allQuestions[j].text}`);
      console.log('---');
    }
  }
}
