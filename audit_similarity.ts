import { PRELOADED_QUESTIONS } from './src/data/questionBank';

const getWords = (text: string) => new Set(text.toLowerCase().replace(/[^a-z0-9áéíóúüñ\s]/g, '').split(/\s+/).filter(w => w.length > 3));

const duplicates: any[] = [];
for (let i = 0; i < PRELOADED_QUESTIONS.length; i++) {
  const q1 = PRELOADED_QUESTIONS[i];
  const words1 = getWords(q1.text);
  if (words1.size < 5) continue;

  for (let j = i + 1; j < PRELOADED_QUESTIONS.length; j++) {
    const q2 = PRELOADED_QUESTIONS[j];
    const words2 = getWords(q2.text);
    if (words2.size < 5) continue;

    let overlap = 0;
    for (const w of words1) {
      if (words2.has(w)) overlap++;
    }
    
    // intersection over union
    const union = new Set([...words1, ...words2]).size;
    const sim = overlap / union;
    
    if (sim > 0.60 && q1.topic === q2.topic) { // 60% overlap
      duplicates.push({ 
        ids: [q1.id, q2.id], 
        sim: sim.toFixed(2), 
        topic: q1.topic,
        text1: q1.text, 
        text2: q2.text 
      });
    }
  }
}

console.log(`Found ${duplicates.length} highly similar pairs (same topic).`);
for (const d of duplicates.slice(0, 10)) {
  console.log(`\nSIMILARITY: ${d.sim} - Topic: ${d.topic}`);
  console.log(`1 [${d.ids[0]}]: ${d.text1.substring(0, 150)}...`);
  console.log(`2 [${d.ids[1]}]: ${d.text2.substring(0, 150)}...`);
}
