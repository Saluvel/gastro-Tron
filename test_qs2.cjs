const fs = require('fs');

const content = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const match = content.match(/export const PRELOADED_QUESTIONS.*? = (\[[\s\S]*\]);/);
if (match) {
  const qs = JSON.parse(match[1]);
  const strangeWords = ['fibroma', 'decaimientos', 'bruscamente', 'per se', 'inalterada', 'daña al tono', 'compensatoriamente', 'globales intraluminales'];
  
  let issues = qs.filter(q => q.fisiopato && strangeWords.some(w => q.fisiopato.includes(w)));
  
  issues.forEach(i => {
    console.log("ID:", qs.indexOf(i));
    console.log("Fis:", i.fisiopato);
  });
}
