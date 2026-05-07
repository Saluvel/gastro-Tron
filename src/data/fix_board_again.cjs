const fs = require('fs');
let text = fs.readFileSync('src/data/questionBank.ts', 'utf8');
text = text.replace(/"Board"/g, '"Attending"');
text = text.replace(/'Board'/g, "'Attending'");
fs.writeFileSync('src/data/questionBank.ts', text);
console.log('Fixed Board to Attending');
