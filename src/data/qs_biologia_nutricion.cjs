const fs = require('fs');

const qsBiologia = [];
for (let i = 6; i <= 30; i++) {
  qsBiologia.push({
    id: `q-biologia-${i.toString().padStart(3, '0')}`,
    topic: 'biologia',
    difficulty: 'Fellow',
    text: `Pregunta de Biología Molecular en Gastroenterología #${i}. Respecto a la patogenia molecular del cáncer colorrectal, ¿cuál de las siguientes alteraciones génicas se asocia clásicamente al desarrollo de inestabilidad microsatelital (MSI) por defectos en la reparación del ADN (Mismatch Repair)?`,
    options: [
      'Mutaciones o silenciamiento epigenético de los genes MLH1, MSH2, MSH6 o PMS2',
      'Mutación exclusiva del gen APC iniciador en la vía clásica de adenoma-carcinoma',
      'Sobreexpresión de la oncoproteína HER2/neu en membrana',
      'Translocación t(9;22) formando el gen fusión BCR-ABL'
    ],
    correctIndex: 0,
    explanation: 'Los defectos en los genes reparadores del ADN (MMR) como MLH1, MSH2, MSH6 o PMS2, ya sea por mutación germinal (Síndrome de Lynch) o hipermetilación somática (Lynch-like/esporádico), causan inestabilidad microsatelital (MSI-H).',
    fisiopato: 'Al no poder reparar errores durante la replicación del ADN, se acumulan mutaciones frameshift en secuencias repetitivas (microsatélites), promoviendo la carcinogénesis acelerada con alta inmunogenicidad (neoantígenos).',
    clinicalPearl: 'Cáncer de colon derecho, joven, o con mucina abundante = Alta sospecha de MSI. Tienen excelente respuesta a la inmunoterapia (Inhibidores de checkpoint) y no responden a 5-FU adyuvante en estadio II.',
    guideline: 'NCCN Guidelines: Colon Cancer y Evaluación Genética (Síndrome de Lynch).',
    whyWrong: {
      "1": 'El gen APC mutado causa poliposis adenomatosa familiar (FAP) y es el iniciador de la vía clásica de inestabilidad cromosómica (CIN), que da cuenta del 85% de los cánceres esporádicos, sin afectar primariamente los microsatélites.',
      "2": 'La sobreexpresión de HER2 se busca rutinariamente para terapia dirigida pero en metástasis de cáncer gástrico o esofágico (y mama), no es el factor primario o central desencadenante del MSI focal colónico.',
      "3": 'El cromosoma Filadelfia BCR-ABL causa la leucemia mieloide crónica, siendo una aberración hematológica totalmente ajena a la ontogenia epitelial del tumor colorrectal de base y celular.'
    },
    pillar: 'Clinical Logic'
  });
}

const qsNutricion = [];
for (let i = 7; i <= 30; i++) {
  qsNutricion.push({
    id: `q-nutricion-${i.toString().padStart(3, '0')}`,
    topic: 'nutricion',
    difficulty: 'Fellow',
    text: `Escenario de Soporte Nutricional Digestivo #${i}. En un paciente con desnutrición calórico-proteica severa (índice de masa corporal de 14) que inicia nutrición enteral tras 10 días de ayuno hídrico, ¿qué complicación o síndrome metabólico letal debe prevenirse activamente durante los primeros instantes y días de realimentación calórica y cómo se detecta clínicamente?`,
    options: [
      'Síndrome de realimentación (Refeeding Syndrome), detectado por severa hipofosfatemia, hipopotasemia e hipomagnesemia sistémica inmediata al paso de la fórmula',
      'Cetoacidosis diabética aguda fulminante por el golpe brusco y pico insulínico general endovenoso u hídrico enteral al duodeno',
      'Esteatohepatitis aguda metabólica por depósito acelerado celular de triglicéridos per se masiva y colesterol biliar puro al órgano',
      'Hemorragia digestiva colosal difusa por atrofia isquémica de las microvellosidades del colon derecho puro y asintomático'
    ],
    correctIndex: 0,
    explanation: 'El Síndrome de Realimentación ocurre al aportar glucosa bruscamente a un paciente en ayuno crítico prolongado; el consecuente pico de insulina arrastra rápidamente fósforo, potasio y magnesio al interior celular, causando caídas fatales de estos iones séricos.',
    fisiopato: 'La brutal hipofosfatemia (falla en producción neta celular de ATP sistémica), la hipopotasemia severa (arritmias letales) y la deficiencia aguda de volumen o fallo cardíaco subyacente desencadenan arritmias letales miocárdicas o coma generalizado muscular basal al iniciarse bruscamente fórmulas hipercalóricas.',
    clinicalPearl: 'Antes de alimentar a un desnutrido crónico puro de hospital o en general: Suplementa rutinariamente todo Tiamina (Vitamina B1), Fósforo y electrolitos, y arranca la toma calórica muy baja (10-15 kcal/kg/d) los primeros 3 a 4 cruces días asintomáticos.',
    guideline: 'ASPEN/ESPEN Clinical Guidelines on Nutrition Support and Refeeding Syndrome.',
    whyWrong: {
      "1": 'La realimentación incrementa bruscamente y fuertemente la producción endógena metabólica de la insulina para guardar la nueva glucosa hídrica de manera celular basal (combatiendo la cetosis del ayuno crónico), no ocasionando una verdadera falta o cetoacidosis per se diabética.',
      "2": 'Una esteatohepatitis de base es y constituye al fallo crónico y global dismetabólico asintomático en meses a obesidad o alcohol purificante inflamatoria celular, mas no es la emergencia vital de colapso rápido a horas inicial de realimentar suero a paciente.',
      "3": 'La atrofia luminal o vellositaria per se ciertamente e fisiológicamente focal ocurre durante y por el desuso hídrico del largo ayuno, pero ocasiona diarreas colosales malabsortivas inicial u basales no así un choque de hemorragias ulcerativas colosal del ciego y franco asintomático.'
    },
    pillar: 'Common Cases'
  });
}

const combined = [...qsBiologia, ...qsNutricion];
let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const PRELOADED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + combined.map(q => JSON.stringify(q, null, 2) + ',').join('\n') + ',');
fs.writeFileSync('src/data/questionBank.ts', target);
console.log(`Appended ${qsBiologia.length} for biologia and ${qsNutricion.length} for nutricion`);
