const fs = require('fs');
let text = fs.readFileSync('src/data/questionBank.ts', 'utf-8');
text = text.replace(/difficulty: 'Board'/g, "difficulty: 'Subspecialist'");
fs.writeFileSync('src/data/questionBank.ts', text);
