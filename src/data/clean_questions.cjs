const fs = require('fs');

const file = 'src/data/questionBank.ts';
let content = fs.readFileSync(file, 'utf-8');

// The file is a module exporting a single array.
// I can just evaluate it, filter the bad IDs, and then dump it back. 
// But since it's TS, evaluating it directly might be tricky due to type annotations.
// However, looking at the file, the only TS syntax is at the top.
// "export const SEED_QUESTIONS: Question[] = ["

// Let's use regex to surgically remove specific bad questions.
const badCeliacaIds = ['012','013','014','015','016','017','018','019'].map(n => `q-celiaca-${n}`);
const badEiiIds = ['020','021','022','023','024','025','026','027','028','029','030'].map(n => `q-eii-avanzada-${n}`);

const toRemoveIds = [...badCeliacaIds, ...badEiiIds];

for (const id of toRemoveIds) {
  // match from { id: '...', up to the next },
  const regex = new RegExp(`\\{\\s*id:\\s*'${id}'[\\s\\S]*?\\n\\s*\\},?`, 'g');
  content = content.replace(regex, '');
}

// Clean up any stray commas/spaces at the end of the array
content = content.replace(/,\s*];/, '\n];');
content = content.replace(/,\s*\n\s*\];/, '\n];');

fs.writeFileSync(file, content);
console.log('Cleaned bad questions');
