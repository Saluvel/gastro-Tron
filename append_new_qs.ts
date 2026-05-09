import * as fs from 'fs';

const newQs = JSON.parse(fs.readFileSync('new_qs.json', 'utf8'));

// Read current bank
let content = fs.readFileSync('src/data/questionBank.ts', 'utf8');

// Regex to extract the array
const match = content.match(/export const PRELOADED_QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);
if (match) {
  const existing = JSON.parse(match[1]);
  const finalArray = existing.concat(newQs);
  const newContent = `import { Question } from '../types';\n\nexport const PRELOADED_QUESTIONS: Question[] = ${JSON.stringify(finalArray, null, 2)};\n`;
  fs.writeFileSync('src/data/questionBank.ts', newContent);
  console.log(`Successfully added ${newQs.length} new questions. Total is now ${finalArray.length}`);
} else {
  console.error("Could not parse question bank!");
}
