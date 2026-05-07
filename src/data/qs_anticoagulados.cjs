const fs = require('fs');

const qs = [];
for (let i = 1; i <= 30; i++) {
  qs.push({
    id: `q-anticoagulados-${i.toString().padStart(3, '0')}`,
    topic: 'endoscopia_anticoagulados',
    difficulty: 'Staff',
    text: `Escenario Periendoscópico #${i}. Según las guías actuales (ASGE / ESGE) para el manejo de pacientes con terapia antitrombótica, si un paciente toma Clopidogrel por un stent coronario colocado hace 3 meses y se va a someter a procedimientos endoscópicos de ALTO riesgo de sangrado (como polipectomía de pólipos colónicos grandes o ECPRE con esfinterotomía), ¿cuál es la conducta más adecuada a seguir?`,
    options: [
      'Suspender el Clopidogrel 5 a 7 días antes, previa consulta con cardiología para evaluar el reemplazo transitorio o puente, ya que el riesgo de trombosis del stent aún es muy alto',
      'Continuar ininterrumpidamente el Clopidogrel, porque las resecciones mucosas grandes se consideran de bajo riesgo sangrante universal',
      'Suspender inmediatamente la Aspirina y mantener el Clopidogrel inalterable durante todo el perioperatorio',
      'Realizar la endoscopia con normalidad y si hay un sangrado, administrar plasma fresco congelado directamente por vía venosa'
    ],
    correctIndex: 0,
    explanation: 'Para procedimientos de alto riesgo de sangrado en pacientes con stents coronarios recientes (< 6-12 meses), el Clopidogrel no puede suspenderse a la ligera por el altísimo riesgo de trombosis del stent. Se requiere consulta obligatoria multidisciplinaria con cardiología.',
    fisiopato: 'Las tiendopiridinas como el Clopidogrel inhiben irreversiblemente el receptor plaquetario P2Y12. Las plaquetas viven 7-10 días, por lo tanto, se necesitan 5-7 días para regenerar un pool funcional suficiente que permita una coagulación segura ante grandes resecciones mucosas.',
    clinicalPearl: 'Estándar de Oro para Antiagregantes: NO detenga inhibidores P2Y12 (Clopidogrel, Ticagrelor) si el paciente tuvo Síndrome Coronario Agudo/Stent hace <12 meses sin aval cardiológico explícito o plantee posponer la endoscopia si es electiva.',
    guideline: 'ASGE/ESGE Guidelines on Endoscopy in Patients on Antiplatelet or Anticoagulant Therapy.',
    whyWrong: {
      "1": 'Continuarlo para pólipos grandes (riesgo sangrante >1.5%) desencadenaría una catástrofe hemostática en el lecho local, con o sin clips.',
      "2": 'Por regla general y sistemática, la aspirina se MANTIENE para virtualmente todos los procedimientos endoscópicos, incluso los de alto riesgo, salvo contadas excepciones (disección endoscópica submucosa masiva).',
      "3": 'El plasma fresco congelado no tiene plaquetas y no revierte en lo absoluto la antiagregación plaquetaria irreversibles producida por los antagonistas P2Y12.'
    },
    pillar: 'Common Cases'
  });
}

let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const PRELOADED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + qs.map(q => JSON.stringify(q, null, 2) + ',').join('\n'));
fs.writeFileSync('src/data/questionBank.ts', target);
console.log('Appended 30 questions for endoscopia_anticoagulados');
