const fs = require('fs');

const questions = [
  {
    id: 'q-diarrea-cronica-010',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'Un paciente de 45 años con antecedente de radioterapia pélvica por cáncer de próstata hace 5 años presenta diarrea crónica, urgencia fecal y rectorragia ocasional. La endoscopia revela telangiectasias y palidez de la mucosa rectal. ¿Cuál es el tratamiento de primera línea respaldado por mayor evidencia para el sangrado persistente en esta condición?',
    options: ['Coagulación con argón plasma (APC)', 'Enemas de hidrocortisona', 'Mesalazina oral', 'Oxigenoterapia hiperbárica'],
    correctIndex: 0,
    explanation: 'La rectopatía actínica crónica con sangrado persistente responde adecuadamente a la termocoagulación endoscópica con argón plasma (APC), siendo el estándar terapéutico en la mayoría de las guías.',
    fisiopato: 'La radiación induce endarteritis obliterante, isquemia submucosa y neovascularización anómala, originando telangiectasias muy friables que sangran fácilmente.',
    clinicalPearl: 'Rectopatía post-radioterapia = Telangiectasias rectales pálidas y friables. Tratamiento de primera línea ante sangrado: APC.',
    guideline: 'ASGE Clinical Guideline: Radiation proctitis.',
    whyWrong: {
      1: 'Los enemas de esteroides aportan poco beneficio y no logran detener el sangrado de las telangiectasias superficiales.',
      2: 'La mesalazina se utiliza para EII y ha demostrado escasa o nula eficacia en la proctopatía por radiación.',
      3: 'El oxígeno hiperbárico es útil para proctopatía refractaria u osteorradionecrosis, pero no es la primera línea antes de intentar métodos endoscópicos.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-011',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'Una paciente de 55 años, en tratamiento con antidepresivos inhibidores de la recaptación de serotonina (Sertralina), AINEs para osteoartritis y Lansoprazol, consulta por diarrea acuosa profunda crónica sin pérdida de peso. La colonoscopia es macroscópicamente normal. ¿Qué hallazgo histológico confirmaría una Colitis Linfocítica?',
    options: ['Infiltrado con >20 linfocitos intraepiteliales por cada 100 células epiteliales', 'Engrosamiento de la banda de colágeno subepitelial mayor a 10 micrómetros', 'Criptitis severa con distorsión arquitectural y ulceraciones superficiales', 'Linfocitosis en la lámina propia con presencia de granulomas no caseificantes'],
    correctIndex: 0,
    explanation: 'La colitis linfocítica forma parte del espectro de las colitis microscópicas y se define histológicamente por más de 20 linfocitos intraepiteliales por cada 100 células luminales.',
    fisiopato: 'A diferencia de la EII típica, en la colitis microscópica no hay alteración de la arquitectura de las criptas. Los linfocitos T citotóxicos intraepiteliales inducen fuga de cloruro e inhiben la absorción de fluidos (diarrea acuosa).',
    clinicalPearl: 'Diarrea crónica, mujer de mediana edad con colonoscopia normal + uso de medicamentos como Sertralina, Lansoprazol o AINEs = sospecha altísima de Colitis Microscópica. Indicar biopsias escalonadas.',
    guideline: 'AGA Clinical Guidelines on the Medical Management of Microscopic Colitis.',
    whyWrong: {
      1: 'El engrosamiento de la banda colágena es el sello diagnóstico de la Colitis Colágena, la otra variante microscópica.',
      2: 'La criptitis severa y la alteración de la arquitectura criptal sugieren fuertemente Colitis Ulcerosa o EII, no enfermedad microscópica.',
      3: 'La presencia de granulomas no caseificantes sugiere Enfermedad de Crohn o cuadros infecciosos crónicos.'
    },
    pillar: 'Board Prep'
  },
  {
    id: 'q-diarrea-cronica-012',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'En el contexto de un tumor neuroendocrino secretor de VIP (VIPoma), el paciente suele presentar de manera abrumadora el Síndrome de Verner-Morrison. ¿Qué triada analítica o clínica patognomónica caracteriza clásicamente a este cuadro además de la refractariedad al ayuno?',
    options: ['Diarrea acuosa masiva, Hipopotasemia severa y Aclorhidria (Síndrome WDHA)', 'Diarrea secretora, Hiperglucemia grave y Acidosis láctica', 'Diarrea osmótica, Hipocalcemia y Esteatorrea', 'Diarrea secretora indolora, Hipernatremia extrema y Alcalosis metabólica'],
    correctIndex: 0,
    explanation: 'El VIPoma se conoce históricamente por el Síndrome WDHA: Watery Diarrhea (diarrea acuosa), Hypokalemia (hipopotasemia severa) y Achlorhydria (aclorhidria/hipoclorhidria).',
    fisiopato: 'El VIP se une a receptores en enterocitos estimulando masivamente la producción de AMPc, induciendo intensa secreción de cloruro y potasio, e inhibiendo directamente las células parietales gástricas (aclorhidria).',
    clinicalPearl: 'Ante una diarrea profusa (>3 L/día) refractaria al ayuno con hipopotasemia severa desproporcionada y debilidad muscular generalizada, buscar siempre un tumor pancreático neuroendocrino (VIPoma).',
    guideline: 'NCCN Guidelines for Neuroendocrine and Adrenal Tumors.',
    whyWrong: {
      1: 'No se produce acidosis láctica típicamente. La gran pérdida de bicarbonato suele producir acidosis hiperclorémica, o rara vez alcalosis si predomina el vómito o hipopotasemia severa.',
      2: 'La diarrea del VIPoma es secretora, no osmótica. Tampoco tiene un componente predominante primario de esteatorrea.',
      3: 'La deshidratación intensa por la diarrea secretora podría inducir alteraciones del sodio, pero la triada definitoria requiere aclorhidria e hipopotasemia, no alcalosis primaria como signo.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-013',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'Al estudiar a un adulto con persistente distensión abdominal y diarrea de predominio postprandial al consumir lácteos, se sospecha intolerancia a la lactosa severa. Si determinamos el pH de una muestra fecal acuosa inmediatamente tras la ingesta de leche en medio de una crisis, ¿qué valor esperaríamos encontrar y por qué?',
    options: ['pH ácido (menor a 6.0), derivado de la fermentación bacteriana de la lactosa que genera ácidos grasos de cadena corta (AGCC)', 'pH francamente alcalino (mayor a 8.0), por el exceso de calcio libre en el colon', 'pH neutro (cercano a 7.0), dado que el colon compensa la llegada de azúcares con secreción de bicarbonato', 'Cualquier modificación es indetectable porque la microbiota reabsorbe de inmediato todo ácido luminal'],
    correctIndex: 0,
    explanation: 'La malabsorción de carbohidratos, como la lactosa, causa diarrea osmótica. Los disacáridos no absorbidos son rápidamente fermentados en el colon por bacterias, lo que produce grandes cantidades de ácidos grasos de cadena corta y gas, acidificando marcadamente las heces.',
    fisiopato: 'La fermentación bacteriana anaerobia de carbohidratos transforma azúcares en ácido butírico, acético y propiónico, liberando iones de hidrógeno, lo cual disminuye drásticamente el pH intraluminal hídrico.',
    clinicalPearl: 'Diarrea de causa osmótica por azúcares (Lactosa, Fructosa) no solo cede con el ayuno, sino que clásicamente cursa con un pH fecal fuertemente ácido y eritema/irritación perianal.',
    guideline: 'AGA Clinical Practice Update on the Management of Malabsorption.',
    whyWrong: {
      1: 'El calcio no alcaliniza el colon y no se encuentra sustancialmente en forma libre activa sin unirse a otros aniones ni domina el medio iónico local tras la fermentación.',
      2: 'El bicarbonato colónico no es suficientemente rápido ni capaz de amortiguar y neutralizar el volumen brutal de AGCC agudos producidos en una intolerancia franca activa.',
      3: 'Las reacciones de acidificación microbiana colónica superan con creces cualquier capacidad buffer normal, lo que resulta en heces líquidas detectables y persistentemente irritativas de forma aguda.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-014',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'A un paciente hospitalizado se le solicita el cálculo del Brecha Osmótica Fecal (Fecal Osmotic Gap) ante una diarrea misteriosa crónica. Al aplicar la fórmula [290 - 2 × (Na+ focal + K+ fecal)], obtiene un valor de 30 mOsm/kg. Frente a su sospecha diagnóstica inicial, si se sometiera al paciente a 48 horas de ayuno estricto con hidratación intravenosa, ¿qué comportamiento presentaría la diarrea?',
    options: ['El cuadro diarreico persistiría francamente volumétrico y sin mejoría, al corresponder a una diarrea secretora pura', 'La diarrea cedería y desaparecería por completo durante las horas de ayuno absoluto, indicando un componente osmótico', 'La distensión se agravaría progresivamente sin cambios en el volumen, confirmando un síndrome dismotilidad', 'Las deposiciones cambiarían a melena pura, un hallazgo indicativo de isquemia colónica reactiva'],
    correctIndex: 0,
    explanation: 'Un Gap Osmótico Fecal bajo (<50 mOsm/kg) define típicamente a la diarrea secretora (toxinas mediadas por AMPc, VIP, malabsorción severa de ácidos biliares). Por definición, este tipo de diarreas son independientes de los contenidos alimenticios y no ceden con el ayuno.',
    fisiopato: 'Los enterocitos están constitutivamente activados por segundos mensajeros (AMPc, GMPc o Calcio), empujando activamente agua, cloro y sodio a la luz intestinal (lo que hace que la suma 2x(Na+K) explique todo el osmole luminal, acercando el gap a 0).',
    clinicalPearl: 'Gap fecal < 50 mOsm/kg = Diarrea Secretora que no responde al ayuno. Gap fecal > 100 mOsm/kg = Diarrea Osmótica que se resuelve con el ayuno.',
    guideline: 'AGA Clinical Practice Guideline on the Evaluation of Chronic Diarrhea.',
    whyWrong: {
      1: 'Las diarreas que ceden y desaparecen de forma tajante durante el ayuno estricto son las diarreas osmóticas, las cuales exigen por tanto un gap osmolar mayor a 100 mOsm/kg, contrario al dato aportado en el caso clínico.',
      2: 'La dismotilidad provoca cuadros fluctuantes donde domina el dolor y el tránsito; un gap secretor puro orienta a enterotoxinas u hormonas secretagogas endócrinas y no a motilidad exclusivamente neural.',
      3: 'Una diarrea secretora no se transforma en hemorrágica por un estímulo dietético en ayunas; la presencia de melena o hematoquecia implicaría isquemia, daño estructural, o úlcera superior subyacente independiente de las osmolalidades fecales locales.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-015',
    topic: 'diarrea_cronica',
    difficulty: 'Subspecialist',
    text: 'Un hombre de 62 años secundario a una duodenopancreatectomía cefálica de Whipple hace seis meses presenta diarrea severa, pérdida de peso, y esteatorrea franca. Al iniciar la Terapia de Reemplazo Enzimático Pancreático (PERT, por sus siglas en inglés), ¿cuál es la técnica y temporalidad universalmente recomendada para asegurar el éxito digestivo de los suplementos orales?',
    options: ['Las cápsulas microencapsuladas deben ingerirse al inicio, y fraccionadamente durante la comida sólida rica en nutrientes', 'Las enzimas deben consumirse dos horas antes de las comidas principales para pre-acondicionar el quimo ácido', 'El paciente debe triturar y pulverizar cada cápsula en la comida antes de ingerir para asegurar rápida absorción', 'Las dosis deben instalarse de forma exclusiva al momento de dormir para un ritmo circadiano constante y absorción lenta'],
    correctIndex: 0,
    explanation: 'El reemplazo exocrino pancreático requiere obligatoriamente estar físicamente mezclado con el quimo alimenticio ingerido. Tomar las píldoras junto con el primer bocado y, en grandes porciones, agregar más a la mitad del plato, optimiza radicalmente la digestión.',
    fisiopato: 'Las microesferas requieren del bolo y del cambio de pH para disolver su capa entérica, sincronizando la exposición de su carga total de lipasa exógena directamente contra las grasas luminalmente retenidas desde su formación en el estómago hasta el yeyuno proximal.',
    clinicalPearl: 'La principal causa del fracaso continuo y refractario de un PERT diagnosticado en esteatorrea es una técnica ineficaz: triturar o ingerir demasiado alejado de la ventana de ingestión de alimento activo principal.',
    guideline: 'ACG Clinical Guideline Update on the Diagnosis and Management of Chronic Pancreatitis.',
    whyWrong: {
      1: 'Al tomarlas horas antes de cualquier alimento, las enzimas llegarán al ID desincronizadas, vacías sin nutrientes basales y perderán viabilidad con el nulo entorno digestivo basal.',
      2: 'Triturar o masticar cápsulas de cubierta entérica destruye su revestimiento y expone a las lipasas a degradación ácida irremediable en el reservorio gástrico inhabilitándolas de por vida previo al pasaje o quimo.',
      3: 'Las enzimas inyectadas o nocturnas fuera de cualquier tiempo y marco nutricional activo son completamente inútiles al estar diseñadas solo para la digestión en contacto directo con comida masiva luminal.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-016',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'La principal diferencia sintomatológica entre la intoxicación crónica por laxantes estimulantes antraquinónicos (como la cáscara sagrada o sena) y un tumor secretor franco, descansa en el hallazgo endoscópico rutinario oscuro. Durante su exploración de colon, usted visualiza una mucosa tapizada de un pigmento marcadamente parduzco, atigrado, y liso a lo largo de todo el trayecto sigmoideo y colon descendente. ¿Cuál es la entidad patognomónica responsable de esta presentación macro e histológica?',
    options: ['Melanosis Coli, derivada de acumulación de lipofuscina y restos apoptóticos en macrófagos colónicos', 'Carcinosis melanómica difusa secundaria a diseminación basal y agresiva sistémica celular', 'Rectopatía isquémica crónica que ha cicatrizado formando extensos islotes negros cicatriciales colosales e irreparables', 'Falsa tinción secundaria al consumo exclusivo profundo dietético alimentario férrico basal o sulfatos férricos por vía oral por largo tiempo'],
    correctIndex: 0,
    explanation: 'La Melanosis Coli es un sello definitivo caracterizado por depósito y coloración oscura y marronácea difusa en las paredes colónicas a causa del abuso crónico de laxantes antranoideos por largo tiempo.',
    fisiopato: 'Al ser muy irritantes para los epitelios, estos laxantes estimulantes aumentan contundentemente la apoptosis y destrucción celular, lo cual recluta macrófagos tisulares mucosos que fagocitan los remanentes celulares, formando un masivo pigmento inerte secundario similar funcional a la lipofuscina en el subepitelio.',
    clinicalPearl: 'A pesar que su nombre es tétrico ("melanosis"), el pigmento NO es melanina y no confiere riesgo alguno oncogénico basal, la mucosa endoscópica oscura en piel de serpiente asiste firmemente en diagnóstico por interrogatorios negados sobre excesivo de uso laxativo constante.',
    guideline: 'ACG Guideline: Evaluation of Chronic Diarrhea and laxative abuse workup.',
    whyWrong: {
      1: 'El melanoma invasor masivo intestinal desarrollaría sólidas masas nodulares ulceradas focales localizados letales obstructivas y dolorosos, per se de nódulos asimétricos polipoides, y no todo el brillo tapizando la base extendida endoscópica difusa plana.',
      2: 'Las secuelas o estigmas de colitis isquémica se muestran formándose atrofia blanquecinas subyacentes, severas estenosis fibróticas constrictivas y con áreas rígidas o francamente nodulares necróticas de no regeneración de asintomáticos a oscurecidos basal.',
      3: 'El sulfato oral y el hierro suplementario en altas dosis alteran ciertamente el color de las heces, logrando ser las evacuaciones deposicionales de negro oscuro puro consistencia pesadas pastosas melénicas en sí y no a las paredes focales celulares colónicas estables.'
    },
    pillar: 'Common Cases'
  }
];

let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const SEED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + questions.map(q => JSON.stringify(q, null, 2) + ',').join('\n'));
fs.writeFileSync('src/data/questionBank.ts', target);
console.log('Appended qs 10-16 for diarrea_cronica');
