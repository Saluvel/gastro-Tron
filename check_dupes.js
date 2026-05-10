import fs from 'fs';
import { PRELOADED_QUESTIONS } from './src/data/questionBank.js';

const diarreaQs = PRELOADED_QUESTIONS.filter(q => q.topic === 'diarrea_cronica');
console.log(`Found ${diarreaQs.length} questions for diarrea_cronica`);

diarreaQs.forEach((q, i) => {
    console.log(`\n[${i}] ID: ${q.id} - Difficulty: ${q.difficulty}`);
    console.log(`Text: ${q.text.substring(0, 100)}...`);
    console.log(`Options: ${q.options[0].substring(0, 40)}...`);
});
