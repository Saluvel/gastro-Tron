const fs = require('fs');
let text = fs.readFileSync('src/data/questionBank.ts', 'utf8');
text = text.replace(/"Attending"/g, '"Staff"');
text = text.replace(/'Attending'/g, "'Staff'");
fs.writeFileSync('src/data/questionBank.ts', text);
console.log('Fixed Attending to Staff');
