const fs = require('fs');
const content = fs.readFileSync('src/data/questionBank.ts', 'utf8');

// Use a regex to extract text, explanation, and fisiopato
const regex = /text:\s*"([^"]+)",[\s\S]*?explanation:\s*"([^"]+)",[\s\S]*?fisiopato:\s*"([^"]+)"/g;
let match;
let questions = [];

while ((match = regex.exec(content)) !== null) {
  // Normalize the text by removing the "Escenario Periendoscópico #1. " prefix or similar so we can find functional duplicates
  let rawText = match[1];
  let normalizedText = rawText.replace(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+ #\d+\.\s*/, '');
  questions.push({
    raw: rawText,
    norm: normalizedText,
    exp: match[2],
    fisio: match[3]
  });
}

// Group by normalized text
const unique = new Map();
questions.forEach(q => {
  if (!unique.has(q.norm)) {
    unique.set(q.norm, {
        rawText: q.raw,
        count: 1,
        exp: q.exp,
        fisio: q.fisio
    });
  } else {
    unique.get(q.norm).count++;
  }
});

console.log(`Total questions matched: ${questions.length}`);
console.log(`Unique fundamental questions: ${unique.size}`);

// Print the first 5 unique questions completely to audit
let i = 0;
for (let [norm, data] of unique) {
  if (i < 5) {
    console.log(`\n--- Question ${i + 1} (Repeated ${data.count} times) ---`);
    console.log(`Text: ${data.rawText}`);
    console.log(`Explanation: ${data.exp}`);
    console.log(`Fisiopato: ${data.fisio}`);
  }
  i++;
}

// Write the full list of unique questions to a file so we can view them
const output = Array.from(unique.values()).map((q, idx) => `Q${idx+1}: ${q.rawText}\nFisio: ${q.fisio}`).join('\n\n');
fs.writeFileSync('unique_audit.json', JSON.stringify(Array.from(unique.values()), null, 2));

