const fs = require('fs');

const content = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const match = content.match(/export const PRELOADED_QUESTIONS.*? = (\[[\s\S]*\]);/);
if (match) {
  const qs = JSON.parse(match[1]);
  console.log(`Loaded ${qs.length} questions`);
  
  const keywords = ['fibroma', 'per se', 'decaimientos', 'tránsito', 'colon de tránsito', 'globales intraluminales'];
  
  let issues = qs.filter(q => q.fisiopato && keywords.some(kw => q.fisiopato.includes(kw)));
  console.log(`Found ${issues.length} problematic texts using keywords.`);
  issues.slice(0, 5).forEach(i => console.log("--- " + i.fisiopato));
}
