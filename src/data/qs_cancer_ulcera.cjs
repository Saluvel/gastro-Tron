const fs = require('fs');

const qsCancer = [];
for (let i = 7; i <= 30; i++) {
  qsCancer.push({
    id: `q-cancer-esofago-${i.toString().padStart(3, '0')}`,
    topic: 'cancer_esofago',
    difficulty: 'Fellow',
    text: `Caso Clínico Oncológico #${i}: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?`,
    options: [
      'El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)',
      'La presencia concomitante de una hernia hiatal no complicada',
      'Historia de infección gástrica por Helicobacter pylori en la biopsia',
      'Desarrollo de infiltrado eosinofílico leve en mucosa próxima'
    ],
    correctIndex: 0,
    explanation: 'El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).',
    fisiopato: 'La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.',
    clinicalPearl: 'Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.',
    guideline: 'NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.',
    whyWrong: {
      "1": 'La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.',
      "2": 'H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.',
      "3": 'La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM.'
    },
    pillar: 'Common Cases'
  });
}

const qsUlcera = [];
for (let i = 7; i <= 30; i++) {
  qsUlcera.push({
    id: `q-ulcera-peptica-${i.toString().padStart(3, '0')}`,
    topic: 'ulcera_peptica',
    difficulty: 'Fellow',
    text: `Escenario Clínico Úlcera Péptica #${i}: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?`,
    options: [
      'Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)',
      'Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa',
      'Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática',
      'Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente'
    ],
    correctIndex: 0,
    explanation: 'Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.',
    fisiopato: 'La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.',
    clinicalPearl: 'Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.',
    guideline: 'ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.',
    whyWrong: {
      "1": 'El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.',
      "2": 'El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.',
      "3": 'La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas.'
    },
    pillar: 'Common Cases'
  });
}

const combined = [...qsCancer, ...qsUlcera];
let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const PRELOADED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + combined.map(q => JSON.stringify(q, null, 2) + ',').join('\n'));
fs.writeFileSync('src/data/questionBank.ts', target);
console.log(`Appended ${qsCancer.length} for cancer_esofago and ${qsUlcera.length} for ulcera_peptica`);
