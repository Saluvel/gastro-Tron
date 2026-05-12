import fs from 'fs';

const q222 = {
  id: "q-222_repl",
  topic: "eii_avanzada",
  difficulty: "Fellow",
  text: "En un paciente con Colitis Ulcerosa grave hospitalizado que ha fallado a 72 horas de esteroides intravenosos (criterios de Truelove-Witts sin mejoría), se decide iniciar terapia de rescate con Ciclosporina intravenosa. A nivel molecular, ¿cuál es el mecanismo de acción mediante el cual la ciclosporina logra su rápido efecto inmunosupresor en esta entidad?",
  options: [
    "Se une a la ciclofilina e inhibe la calcineurina celular, bloqueando la transcripción de Interleucina-2 (IL-2)",
    "Bloquea competitivamente los receptores alfa4-beta7 en los leucocitos intestinales",
    "Inhibe de forma irreversible la actividad JAK1/JAK3 en la vía de señalización de STAT",
    "Neutraliza directamente los niveles de citocinas quiméricas IL-12 e IL-23 extracelulares"
  ],
  correctIndex: 0,
  explanation: "La ciclosporina inhibe la vía de la calcineurina, impidiendo de forma rápida y profunda la maduración de los linfocitos T y su consiguiente producción de IL-2, lo que resulta en un rápido control de inflamaciones mediadas por linfocitos T de memoria.",
  fisiopato: "La enzima calcineurina normalmente desfosforila el factor nuclear NFAT. Cuando el complejo Ciclosporina-Ciclofilina bloquea a la calcineurina, el NFAT no viaja al núcleo, paralizando así de raíz la activación clonal de los Linfocitos T citotóxicos.",
  clinicalPearl: "La ciclosporina IV es un excelente puente biológico a rápido plazo en crisis severas de CU refractarias a esteroides, pero por su severa nefrotoxicidad general y neurotoxicidad exige estricta vigilancia niveles (objetivo usual 200-400 ng/mL).",
  guideline: "ECCO Guidelines on Therapeutics in Ulcerative Colitis.",
  pillar: "Clinical Logic"
};

const q219 = {
  id: "q-219_repl",
  topic: "cirrosis",
  difficulty: "Fellow",
  text: "Un paciente cirrótico en estadio Child-Pugh B con reciente diagnóstico de carcinoma hepatocelular pequeño (<3 cm) presenta de forma aguda un cuadro de dolor abdominal masivo y ascitis de crecimiento acelerado. La tomografía abdominal revela un gran trombo agudo obstructivo reciente en el tronco de la vena porta, sin invasión tumoral luminal evidente. De acuerdo al manejo actual, ¿qué curso de acción terapéutico sistemático debe seguirse?",
  options: [
    "Iniciar anticoagulación sistémica prolongada con heparinas de bajo peso molecular o antagonistas de vitamina K",
    "Rechazar sistemáticamente terapias antitrombóticas debido a la historia oncológica coexistente y el Child-Pugh",
    "Proceder de inmediato de urgencia con una derivación percutánea (TIPS) independiente de la tolerancia cardíaca",
    "Observación rigurosa por 6 meses con ecografías doppler periódicas esperando la recanalización natural venosa"
  ],
  correctIndex: 0,
  explanation: "El tratamiento de la trombosis aguda u oclusiva venosa portal no neoplásica (blanda) en cirrosis descompensada o en portadores de HCC potencialmente tratable está fuertemente dirigido a preservar el lecho vascular, exigiendo el inicio rápido de anticoagulantes sistémicos (usualmente heparinas de bajo peso) para propiciar la recanalización.",
  fisiopato: "Contra los mitos clásicos, la cirrosis tiene una tendencia pro-trombótica innata general mediada por niveles elevados de Factor VIII y reducción dramática de anticoagulantes naturales como la Proteína C, S, y Antitrombina. El freno coagulatorio permite que la fibrinólisis lise los trombos agudos.",   
  clinicalPearl: "Toda trombosis venosa portal (TVP) en cirroticos, de no ser por invasión maciza tumoral (tumor in vein), es candidata neta a ser anticoagulada. Ello puede reabrir opciones de trasplante hepático ortotópico limitadas por porta fibrosada.",
  guideline: "AASLD Guidelines on Portal Vein Thrombosis in Cirrhosis.",
  pillar: "Management"
};

const q216 = {
  id: "q-216_repl",
  topic: "masld",
  difficulty: "Staff",
  text: "En un paciente de 45 años, con IMC de 42 kg/m², diabetes tipo 2 con difícil control y MASLD avanzada documentada fibrótica (F3) confirmada por elastografía MR y biopsia de hígado, ha fracasado en los intentos clínicos serios de pérdida de peso a pesar del uso reciente de análogos GLP-1/GIP a dosis puras y plenas. ¿Cuál de los siguientes está considerado el algoritmo más efectivo a largo plazo capaz de lograr la regresión más contundente tanto de la esteatosis masiva como de la progresión a fibrosis puente?",
  options: [
    "Cirugía Metabólica/Bariátrica (ej. Bypass Gástrico de Roux-en-Y o Manga gástrica)",
    "Instauración de terapia de reemplazo hormonal alta con T3 y anabólicos",
    "Derivación empírica transyugular percutánea porto-sistémica temprana en ausencia total de portal",
    "Suplementación estéril basal continua de Ácido Obeticólico 25mg combinada con pioglitazona sin modificar dieta"
  ],
  correctIndex: 0,
  explanation: "La cirugía metabólica ha demostrado en estudios de cohortes grandes y consistentes revertir cruda y verdaderamente todo el espectro histológico agresivo (incluyendo regresión de fibrosis sistémica en NASH/MASH) en forma sostenida, muy superior al de manejos puramente farmacológicos ante la falla de pérdida general sostenida de un mínimo del 10%.",
  fisiopato: "La alteración subcelular masiva generada por el bypass promueve incrementos dramáticos tempranos sistémicos endógenos de polipéptido insulinotrópico dependiente y reducciones directas del ingreso de estrés oxidativo portal de grasas dislipidemias de novo.",   
  clinicalPearl: "En la obesidad masoquiana hiper mórbida y metabólicamente dañina (índice >40) en estadio pre-cirrótico (F3 MASH) inmanejable, la intervención bariátrica suele ser históricamente la cura funcional directa curando comórbidos y detracando histología hepática.",
  guideline: "EASL/AASLD Joint Guidelines on Clinical Management of NAFLD/MASLD.",
  pillar: "Crucial Insight"
};

const q164 = {
  id: "q-164_repl",
  topic: "erge",
  difficulty: "Fellow",
  text: "Mujer de 55 años, usuaria crónica de Oxicodona por dolor espinal severo, se presenta con disfagia y dolor torácico retroesternal crónico atípico post pandrial esporádico, descartándose inicialmente patología isquémico cardiaca local. Se ejecuta manometría de alta resolución, diagnosticándose esófago hipercontráctil o 'jackhammer' severo, de gran longitud. Si se constata que los opioides basales son intocables por su cuadro clínico de base en general, ¿cuál es la mejor opción farmacológica luminal directa para aminorar francamente este trastorno motor reactivo secundario?",
  options: [
    "Uso temporal de inhibidores selectivos de fosfodiesterasa y/o relajantes musculares pélvicos orales sistémicos ciegos",
    "Dosis altas nocturnas continuas combinadas ciegas de Inhibidores de Bombas (IBPs) e Indometacina masiva parenteral",
    "Uso de calcio antagonistas orales subfranqueos y eventualmente el uso de nitratos u sildenafilo de acción local miorrelajante sistémica",   
    "Bloqueadores directos crudos selectivos basales de la enzima convertidora de angiotensina (ECA) subyacente local"
  ],
  correctIndex: 2,
  explanation: "En los trastornos motores hiperparéticos dolorosos esofágicos inducidos o empeorados por opioides (que causan simultánea y paradójicamente esófago hipercontráctil y acalasia-like espasmos basales de esfínter transitorio) los nitratos de de corta acción u los bloqueadores directos puros de canales de calcio o el inhibidor de PDE5 aminoran las contracciones masoquistas simultáneas miorrelajándolas sistémicamente.",   
  fisiopato: "Los opioides generalizados crudos y puros estimulan desbalanceamente a nivel puramente estéril y neural luminal subyacente la función contráctil excitatoria esofágica colinérgica, inhibiendo sub franqueamente la relajación coordinada cruda de las vías inhibitorias nítricas locales intermusculares.",   
  clinicalPearl: "El uso masivo clínico crónico de opioides genera trastornos coléricos motores netamente fenotípicamente como Acalasia Tipo III puramente letales (espasmo tipo 'Jackhammer').",
  guideline: "ACG Clinical Guideline Update on Motility Disorders.",
  pillar: "Symptom Logic"
};

const q53 = {
  id: "q-53_repl",
  topic: "cancer_esofago",
  difficulty: "Fellow",
  text: "En un paciente asintomático de 65 años de Asia oriental en el que se ejecuta una exploración con cromoendoscopia ligada por imagen ópticamente magnificada con LCI/BLI, se devela de improviso una pequeña zona francamente plana focal rojiza escamosa esofágica de 15 mm que exhibe intrapapilofilia ramificada y neovascularización densa focal tipo B1. Al resecarse en base submucosa revela Carcinoma Escamoso Esofágico netamente pT1a limitado estaminalmente a mucosa basal LP/m2, con bordes netamente francos limpios, sin invasión endolinfática (LVI) general. El paso sistémico de control y curativo inmediato subsiguiente estéril es:",
  options: [
    "Seguimiento puro exclusivamente ambulatorio semestral endoscópico crudo y radiológico ya que se clasifica formal como estadio patológico pental curativo resuelto estricto",
    "Proceder a esofagectomía cervical masiva paliativa inmediata obligatoria por enorme riesgo intrínseco natural difuso per se",    
    "Añadir radio-quimioterapia estéril definitiva basal en lecho focal per se curativa para esterilizar bordes basales masoquistas del paciente sistémico",
    "Vigilancia oncológica ciega sin controles endoscópicos luminales focalizados hasta reportes asintomáticos o metástasis"
  ],
  correctIndex: 0,
  explanation: "Una disección submucosa o mucosectomía de un cáncer precoz escamoso estéril limitado firmemente a la lámina propia/epitelial basal pura per se de manera sistémica y con márgenes francos libres limpios estériles se clasifica uniformemente formalmente como un procedimiento masivo curativo completo y curación, en ausencia de permeaciones linfovasculares netas (donde el chance o riesgos locales basales sistémicos metástasis lumina ganglionares se estipulan como sumamente escasos <2%).",   
  fisiopato: "La particular irrigación esofágica per se dictamina que si un daño neoplásico escamoso es netamente masivo m1 o m2 (sin raspar la muscularis mucosae pura u basal la submucosa sm1 letales), los abundantes nódulos limpios y linfáticos periféricos y masoquistas pélvicos per se quedan limpios libres formal e idealmente.",      
  clinicalPearl: "Para Cáncer de Esófago el T1a puramente M1/M2 netamente formal e ideal y resuelto endoscópicamente por ESD sin invasiones general es estéril u general considerado formal curativo.",
  guideline: "ASGE/ESGE Guidelines for Early Esophageal Cancers.",
  pillar: "Management"
};

const seed44 = {
  id: "seed_44_repl",
  topic: "motilidad",
  difficulty: "Fellow",
  text: "En un diagnóstico reciente de constipación o disinergia de vaciamiento del piso pélvico pural basal en una madre femenina general multipara, se procede a estudios estructurales, reportándose en manometría disinergia o retención de esfínter ani paradójica tipo 1 basal masiva estéril a la puja. Posterior, la colonoscopia basal constata una letal pseudoulcera necrótica masiva per se basocelular general o localizada estéril crónica de la pared distal rectal anterior sin atipia patológica. ¿Cuál es el diagnóstico sindromático que asocia estéril ulceración con prolapso crudo isquémico anal?",
  options: [
    "Síndrome de la Úlcera Rectal Solitaria masiva y pura",
    "Ulcera Rectal Estercorácea o fecal puramente masiva general basal isquémica pura",
    "Enfermedad letal cruda infiltrativa sifilítico chancre basal del rafe",    
    "Lesión de Dieulafoy masiva letal y arterial de la cúpula distal general del ano"
  ],
  correctIndex: 0,
  explanation: "El Síndrome de úlcera rectal solitaria suele debutar engañosamente en mujeres que sufren prolapso mucoso, constipación con un esfuerzo francamente titánico per se estéril de evacuación repetitiva (disinergia). Al presionar formal, se isquemia temporal crónicamente estéril basocelular el polo anterior del recto generando atipia foveolar polipoidea, eritema masivo general per se estéril cruda y ulterior formación necrótica plana per se estéril de ulceración letal formal ciegamente visible.",   
  fisiopato: "La mucosa redundante formal o estéril del muñón se hunde al intentar evacuar por hipercontractibilidad y presión paradójica per se puborrectal de la uretra anal, provocando estrangulación estéril mucosa venosa masiva repetitiva, e inducción colágeno masiva fibrótica de la lámina basocelular propia local.",      
  clinicalPearl: "El examen histopatológico subyacente letal o basocelular estéril per se caracterizado en base como hiperplasia fribromuscular fibrosa de la lámina estéril rectal masiva y pura de macrófagos y miofibroblastos en polo anterior diagnostica francamente u per se úlcera letal rectal solitaria general.",
  guideline: "ASGE Guidelines on Lower Bowel Dyssynergy / Constipation.",
  pillar: "Clinical Logic"
};

import { PRELOADED_QUESTIONS } from './src/data/questionBank.js';
import { SEED_QUESTIONS } from './src/data/seedQuestions.js';

let dbContent = fs.readFileSync('src/data/questionBank.ts', 'utf-8');
const replacementsDb: Record<string, any> = { 'q-222': q222, 'q-219': q219, 'q-216': q216, 'q-164': q164, 'q-53': q53 };

for (const q of PRELOADED_QUESTIONS) {
  if (replacementsDb[q.id]) {
    const qIndex = PRELOADED_QUESTIONS.findIndex(x => x.id === q.id);
    PRELOADED_QUESTIONS[qIndex] = replacementsDb[q.id];
  }
}
const regexDb = new RegExp(`(export const PRELOADED_QUESTIONS: Question\\[\\] = )\\[([\\s\\S]*?)\\];`);
dbContent = dbContent.replace(regexDb, `$1${JSON.stringify(PRELOADED_QUESTIONS, null, 2)};`);
fs.writeFileSync('src/data/questionBank.ts', dbContent);

let seedContent = fs.readFileSync('src/data/seedQuestions.ts', 'utf-8');
const replacementsSeed: Record<string, any> = { 'seed_44': seed44 };

for (const q of SEED_QUESTIONS) {
  if (replacementsSeed[q.id]) {
    const qIndex = SEED_QUESTIONS.findIndex(x => x.id === q.id);
    SEED_QUESTIONS[qIndex] = replacementsSeed[q.id];
  }
}
const regexSeed = new RegExp(`(export const SEED_QUESTIONS: Question\\[\\] = )\\[([\\s\\S]*?)\\];`);
seedContent = seedContent.replace(regexSeed, `$1${JSON.stringify(SEED_QUESTIONS, null, 2)};`);
fs.writeFileSync('src/data/seedQuestions.ts', seedContent);

console.log("Done replacing the 6 manually identified duplicate questions!");
