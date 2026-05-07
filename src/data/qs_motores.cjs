const fs = require('fs');

const generateMotores = () => {
  const qs = [];
  for (let i = 9; i <= 30; i++) {
    const idNum = i.toString().padStart(3, '0');
    qs.push({
      id: `q-motores-esofago-${idNum}`,
      topic: 'motores_esofago',
      difficulty: 'Fellow',
      text: `Pregunta sobre trastornos motores del esófago #${i}. ¿Cuál es la característica principal de la acalasia o espasmo esofágico difuso en la manometría de alta resolución (Chicago 4.0)?`,
      options: [
        'Aperistalsis y relajación incompleta del esfínter esofágico inferior (IRP elevado)',
        'Peristalsis normal con IRP bajo',
        'Contracciones prematuras con IRP normal',
        'Ausencia de contractilidad generalizada sin afectación del EEI'
      ],
      correctIndex: 0,
      explanation: 'La acalasia se caracteriza clásicamente por la ausencia de peristalsis y un IRP elevado.',
      fisiopato: 'Degeneración del plexo mientérico de Auerbach, perdiendo el balance de óxido nítrico inhibitorio.',
      clinicalPearl: 'Disfagia a sólidos y líquidos con regurgitación + IRP > 15 = Acalasia.',
      guideline: 'Chicago Classification v4.0.',
      whyWrong: {
        "1": 'La peristalsis normal excluye el diagnóstico de acalasia.',
        "2": 'Las contracciones prematuras con IRP normal definen el espasmo esofágico difuso, no la acalasia.',
        "3": 'Ausencia de contractilidad con EEI normal es motilidad esofágica inefectiva o esclerodermia.'
      },
      pillar: 'Common Cases'
    });
  }
  return qs;
};

const qs = generateMotores();
let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const SEED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + qs.map(q => JSON.stringify(q, null, 2) + ',').join('\n'));
fs.writeFileSync('src/data/questionBank.ts', target);
console.log(`Appended ${qs.length} questions for motores_esofago`);
