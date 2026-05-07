const fs = require('fs');
const content = fs.readFileSync('src/data/questionBank.ts', 'utf-8');
const topics = [
  'dolor_abdominal', 'diarrea_aguda', 'diarrea_cronica', 'hda', 'hdb',
  'erge', 'motores_esofago', 'cancer_esofago', 'h_pylori', 'ulcera_peptica',
  'cancer_gastrico', 'celiaca', 'eii', 'hepatitis', 'masld', 'cirrosis',
  'pancreatitis', 'vias_biliares', 'biologia', 'nutricion', 'perfil_hepatico',
  'eii_avanzada', 'muerte_subita', 'protocolo_simulacro', 'endoscopia_anticoagulados'
];

let totalCount = 0;
for (const topic of topics) {
  // need global flag, single or double quotes, quotes around key or not
  const regex = new RegExp(`["']?topic["']?\\s*:\\s*["']${topic}["']`, 'g');
  const matches = content.match(regex);
  const count = matches ? matches.length : 0;
  totalCount += count;
  console.log(`${topic}: ${count}`);
}
console.log('Total:', totalCount);
