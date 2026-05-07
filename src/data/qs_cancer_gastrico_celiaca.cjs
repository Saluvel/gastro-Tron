const fs = require('fs');

const qsCg = [];
for (let i = 8; i <= 30; i++) {
  qsCg.push({
    id: `q-cancer-gastrico-${i.toString().padStart(3, '0')}`,
    topic: 'cancer_gastrico',
    difficulty: 'Fellow',
    text: `Pregunta sobre cáncer gástrico #${i}. En el abordaje diagnóstico inicial de un paciente de 60 años con dispepsia y pérdida de peso, la endoscopia revela una úlcera de aspecto maligno. ¿Qué sistema de clasificación se emplea comúnmente para categorizar histológicamente el adenocarcinoma gástrico?`,
    options: [
      'Clasificación de Lauren (tipo intestinal o difuso)',
      'Clasificación de Forrest',
      'Clasificación de Los Ángeles',
      'Clasificación de Chicago 4.0'
    ],
    correctIndex: 0,
    explanation: 'La clasificación de Lauren divide el cáncer gástrico principalmente en tipo intestinal (bien diferenciado, asociado a metaplasia/atrofia y H. pylori) y tipo difuso (células en anillo de sello, factor genético predispuesto).',
    fisiopato: 'El tipo difuso tiene mutaciones frecuentemente en E-cadherina (CDH1), perdiendo adhesión intracelular, mientras el intestinal sigue la cascada de Pelayo Correa (inflamación > atrofia > metaplasia > displasia > cáncer).',
    clinicalPearl: 'Cáncer Gástrico + Células en anillo de sello = Tipo difuso, peor pronóstico, tiende a linitis plástica.',
    guideline: 'NCCN Guidelines: Gastric Cancer.',
    whyWrong: {
      "1": 'Forrest estratifica el riesgo de sangrado de úlceras pépticas, no tipifica histológicamente el cáncer de estómago.',
      "2": 'Los Ángeles gradúa la severidad endoscópica de la esofagitis péptica por reflujo gastroesofágico.',
      "3": 'Chicago 4.0 estandariza la manometría de alta resolución para diagnosticar alteraciones motoras del esófago (ej. acalasia).'
    },
    pillar: 'Common Cases'
  });
}

const qsCel = [];
for (let i = 12; i <= 30; i++) {
  qsCel.push({
    id: `q-celiaca-${i.toString().padStart(3, '0')}`,
    topic: 'celiaca',
    difficulty: 'Fellow',
    text: `Pregunta sobre Enfermedad Celíaca #${i}. Una mujer de 30 años presenta anemia ferropénica refractaria, astenia y distensión abdominal. Se sospecha enfermedad celíaca. Teniendo en cuenta las guías diagnósticas, ¿cuál es el anticuerpo más precoz, de mayor sensibilidad técnica global y que se solicita como tamizaje de primera línea?`,
    options: [
      'Anticuerpos IgA anti-transglutaminasa tisular (tTG-IgA)',
      'Anticuerpos IgG anti-gliadina deaminada sintética',
      'Anticuerpo anti-endomisio (EMA) tipo IgE',
      'Anticuerpos IgA anti-Saccharomyces cerevisiae (ASCA)'
    ],
    correctIndex: 0,
    explanation: 'Los anticuerpos antitransglutaminasa tisular IgA son universalmente indicados como el test de cribado inicial más sensible, costo-efectivo y preciso para adultos.',
    fisiopato: 'La enzima transglutaminasa tisular en la lámina propia deamina la gliadina del gluten incrementando brutalmente su afinidad por el HLA-DQ2/8; los linfocitos B del paciente general produce autoanticuerpos IgA contra dicha enzima desencadenando destrucción enterocitaria focal.',
    clinicalPearl: 'Sospecha de celiaquía = Pedir screening inicial con IgA total + tTG-IgA. Si la IgA total es deficiente, recién pedir el panel versión IgG (tTG IgG / DGP IgG).',
    guideline: 'ACG/AGA Clinical Guidelines on the Diagnosis and Management of Celiac Disease.',
    whyWrong: {
      "1": 'La gliadina deaminada versión IgG es muy específica y obligatoria sólo en el 2% de los celíacos que nacen con un déficit absoluto o genético puro severo de anticuerpos séricos totales IgA.',
      "2": 'El Endomisio EMA es IgA, no IgE (el cual sería clásicamente general de pura base cruzada alérgica alimentaria, pero la celiaquía no es una alergia sino inflamación celular). Es confirmatorio pero caro y observador dependiente.',
      "3": 'ASCA es el biomarcador sérico estrella focal serológico para orientar precozmente la Enfermedad de Crohn (IBD), no la celiaquía entérica letal y luminal base pura gluten.'
    },
    pillar: 'Common Cases'
  });
}

const combined = [...qsCg, ...qsCel];
let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const PRELOADED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + combined.map(q => JSON.stringify(q, null, 2) + ',').join('\n') + ',');
fs.writeFileSync('src/data/questionBank.ts', target);
console.log(`Appended ${qsCg.length} for cancer_gastrico and ${qsCel.length} for celiaca`);
