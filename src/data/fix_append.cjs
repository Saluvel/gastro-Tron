const fs = require('fs');

const searchString = 'export const PRELOADED_QUESTIONS: Question[] = [';

function appendQuestions(file) {
  let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
  let data = fs.readFileSync(file, 'utf8');
  // It is a script that has `const questions = [...]` 
  // We can just extract the JSON array.
  const regex = /const questions = (\[.*\]);/s;
  const match = data.match(regex);
  if (match) {
    let questionsText = match[1];
    // Remove the starting '['
    questionsText = questionsText.replace(/^\[\s*/, '');
    // Remove the ending ']'
    questionsText = questionsText.replace(/\s*\]$/, '');

    // Now insert
    target = target.replace(searchString, searchString + '\n' + questionsText + ',');
    fs.writeFileSync('src/data/questionBank.ts', target);
    console.log('Appended from', file);
  } else {
      // what about qs_motores?
      const qsRegex = /const qs = (\[.*\]);/s;
      const qsmatch = data.match(qsRegex);
      if (qsmatch) {
          // wait, qs_motores uses a loop to build an array, so its file doesn't literally have the array as string.
          // let's just evaluate it.
      }
  }
}

appendQuestions('src/data/qs_diarrea_1.cjs');
appendQuestions('src/data/qs_diarrea_2.cjs');
appendQuestions('src/data/qs_diarrea_3.cjs');
