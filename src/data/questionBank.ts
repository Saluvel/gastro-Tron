import { Question } from '../types/quiz';

/**
 * BANCO DE PREGUNTAS CURADAS (MODO HÍBRIDO)
 * Si hay preguntas aquí para el tema y dificultad seleccionados, se usarán primero.
 * Si se agotan, entra la IA a generar más siguiendo este mismo estándar.
 */
export const PRELOADED_QUESTIONS: Question[] = [
  // --- DOLOR ABDOMINAL ---
  {
    id: 'da-001',
    topic: 'dolor_abdominal',
    difficulty: 'Fellow',
    text: 'Un paciente de 65 años consulta por dolor abdominal súbito, desproporcionado al examen físico, con antecedentes de fibrilación auricular. ¿Cuál es el diagnóstico más probable según el Manual Chileno 2025?',
    options: ['Pancreatitis aguda grave', 'Isquemia mesentérica aguda', 'Perforación de víscera hueca', 'Aneurisma de aorta abdominal roto'],
    correctIndex: 1,
    explanation: 'La tríada de dolor súbito, factores de riesgo embólico (FA) y disociación entre intensidad del dolor y hallazgos físicos es patognomónica de isquemia mesentérica aguda.',
    fisiopato: 'La interrupción del flujo arterial conlleva a hipoxia celular, paso de metabolismo aeróbico a anaeróbico y rápida necrosis transmural si no se interviene en las primeras 6 horas.',
    clinicalPearl: 'En isquemia mesentérica, el tiempo es intestino. El AngioTAC es el estándar de oro inicial.',
    guideline: 'Manual Chileno de Gastroenterología 2025 - Urgencias Vasculares.',
    whyWrong: { 0: 'Pancreatitis suele tener dolor en banda.', 2: 'Perforación tiene signos peritoneales desde el inicio.', 3: 'Aneurisma roto asocia masa pulsátil y choque.' },
    pillar: 'Must-Know'
  },
  
  // --- DIARREA AGUDA ---
  {
    id: 'dag-001',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: 'Paciente con diarrea acuosa profusa tras consumo de mariscos crudos. Presenta deshidratación severa. ¿Cuál es el agente etiológico más probable si se sospecha un mecanismo secretor puro?',
    options: ['Vibrio cholerae', 'Salmonella Enteritidis', 'Shigella sonnei', 'Campylobacter jejuni'],
    correctIndex: 0,
    explanation: 'El cólera es el prototipo de diarrea secretora mediada por toxinas que activan la adenilato ciclasa.',
    fisiopato: 'La toxina colérica se une al receptor GM1, activa la proteína Gs y eleva el AMPc, provocando la apertura de canales de Cloro (CFTR) y salida masiva de agua.',
    clinicalPearl: 'La hidratación precoz es la piedra angular; los antibióticos solo reducen la duración.',
    guideline: 'Guía IDSA de diarrea infecciosa.',
    whyWrong: { 1: 'Salmonella suele ser inflamatoria.', 2: 'Shigella es el prototipo de disentería.', 3: 'Campylobacter produce dolor abdominal intenso y disentería.' },
    pillar: 'Common Cases'
  },

  // --- HEMORRAGIA DIGESTIVA ALTA (HDA) ---
  {
    id: 'hda-001',
    topic: 'hda',
    difficulty: 'Fellow',
    text: 'En una endoscopia por HDA se observa una úlcera con un vaso visible no sangrante. Según la clasificación de Forrest, ¿qué grado es y cuál es su riesgo de resangrado sin terapia?',
    options: ['Forrest Ia - 90%', 'Forrest Ib - 70%', 'Forrest IIa - 50%', 'Forrest IIb - 30%'],
    correctIndex: 2,
    explanation: 'El grado IIa corresponde a un vaso visible no sangrante, con un riesgo de resangrado cercano al 50% sin tratamiento endoscópico.',
    fisiopato: 'El vaso visible representa una interrupción de la submucosa donde el coágulo no es lo suficientemente estable como para prevenir la recidiva ante cambios de presión.',
    clinicalPearl: 'Toda úlcera Forrest IIa debe recibir terapia combinada (ej: adrenalina + clips/termo).',
    guideline: 'Consenso Internacional de HDA no varicosa.',
    whyWrong: { 0: 'Ia es sangrado en chorro.', 1: 'Ib es sangrado en napa.', 3: 'IIb es coágulo adherido (riesgo ~30%).' },
    pillar: 'Must-Know'
  },

  // --- ERGE ---
  {
    id: 'erge-001',
    topic: 'erge',
    difficulty: 'Staff',
    text: 'Según los criterios de Lyon 2.0, ¿cuál de los siguientes hallazgos se considera evidencia DEFINITIVA de ERGE?',
    options: ['Esofagitis grado A de Los Ángeles', 'Tiempo de exposición ácida (AET) de 4.5%', 'Esofagitis grado C de Los Ángeles', 'Recuento de rupturas de la barrera mucosa > 5'],
    correctIndex: 2,
    explanation: 'Lyon 2.0 establece que la esofagitis C y D, el esófago de Barrett y la estenosis péptica son evidencia concluyente de ERGE.',
    fisiopato: 'El daño estructural (grado C/D) refleja un fracaso total de los mecanismos de defensa epitelial ante el reflujo crónico.',
    clinicalPearl: 'El grado A ya no se considera diagnóstico de ERGE por sí solo.',
    guideline: 'Lyon Consensus 2.0 (2023).',
    whyWrong: { 0: 'Se encuentra en voluntarios sanos.', 1: 'Es una zona gris (4-6% es limítrofe).', 3: 'No es un criterio diagnóstico principal.' },
    pillar: 'Board Prep'
  },

  // --- CIRROSIS ---
  {
    id: 'cir-001',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: 'En el manejo de la ascitis grado 2, ¿cuál es la relación recomendada de Espironolactona:Furosemida para mantener la normopotasemia?',
    options: ['50mg : 20mg', '100mg : 40mg', '200mg : 80mg', '40mg : 100mg'],
    correctIndex: 1,
    explanation: 'La relación 100:40 (ej: 100mg espironolactona y 40mg furosemida) es el estándar para balancear el efecto sobre el potasio.',
    fisiopato: 'La espironolactona inhibe el hiperaldosteronismo secundario (ahorra K) mientras la furosemida actúa en el asa de Henle (tira K).',
    clinicalPearl: 'No superar los 400mg de espironolactona.',
    guideline: 'AASLD Guidelines on Ascites.',
    whyWrong: { 0: 'Relación correcta pero dosis subterapéutica inicial.', 2: 'Dosis alta, se prefiere escalar desde 100/40.', 3: 'Relación invertida, causaría hipopotasemia severa.' },
    pillar: 'Staff Level'
  },

  // --- PERFIL HEPÁTICO (MASTERCLASS FINAL EXPANSION) ---
  {
    id: 'ph-011',
    topic: 'perfil_hepatico',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el valor del gradiente de albúmina suero-ascitis (GASA) que indica hipertensión portal con una precisión del 97%?',
    options: ['< 1.1 g/dL', '>= 1.1 g/dL', '>= 2.5 g/dL', '< 0.5 g/dL'],
    correctIndex: 1,
    explanation: 'Un GASA >= 1.1 indica que la ascitis se debe a hipertensión portal (transudado mecánico).',
    fisiopato: 'La presión hidrostática aumentada en los sinusoides hepáticos "filtra" líquido pobre en proteínas pero mantiene el gradiente osmótico de la albúmina.',
    clinicalPearl: 'Si el GASA es >= 1.1 pero las proteínas totales en ascitis son > 2.5, sospeche insuficiencia cardíaca o Budd-Chiari.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Indica causas no relacionadas con hipertensión portal (ej: cáncer, TBC).', 2: 'Indica proteínas altas, no el gradiente.', 3: 'Inespecífico.' },
    pillar: 'Mastery'
  },
  {
    id: 'ph-012',
    topic: 'perfil_hepatico',
    difficulty: 'Staff',
    text: '¿Qué patrón de enzimas hepáticas sugiere una lesión por fármacos de tipo colestásico (ej: Amoxicilina-Clavulánico)?',
    options: ['R ratio > 5', 'R ratio < 2', 'R ratio entre 2 y 5', 'Elevación aislada de bilirrubina'],
    correctIndex: 1,
    explanation: 'El R ratio (ALT/ULN / FA/ULN) < 2 define el patrón colestásico en toxicidad por fármacos (DILI).',
    fisiopato: 'Refleja daño predominante en los transportadores canaliculares o colangiocitos sobre el parénquima.',
    clinicalPearl: 'La Amoxi-Clav es la causa más frecuente de DILI colestásico a nivel mundial.',
    guideline: 'Manual Chileno 2025 / Guías ACG DILI.',
    whyWrong: { 0: 'Indica patrón hepatocelular.', 2: 'Indica patrón mixto.', 3: 'Inespecífico.' },
    pillar: 'Board Prep'
  },
  {
    id: 'ph-013',
    topic: 'perfil_hepatico',
    difficulty: 'Fellow',
    text: 'En un paciente con colestasis crónica, ¿qué vitamina liposoluble suele ser la primera en deficitarse y debe monitorizarse?',
    options: ['Vitamina C', 'Vitamina A', 'Vitamina D', 'Vitamina K'],
    correctIndex: 2,
    explanation: 'La vitamina D es sensible a la malabsorción de sales biliares crónica.',
    fisiopato: 'La ausencia de sales biliares en el lumen impide la formación de micelas necesarias para absorber vitaminas liposolubles (A, D, E, K).',
    clinicalPearl: 'La osteopenia/osteoporosis es una complicación frecuente de la Cirrosis Biliar Primaria (CBP).',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Es hidrosoluble.', 1: 'Se deficita pero suele ser posterior a D.', 3: 'Importante pero D es más constante en colestasis crónica.' },
    pillar: 'Common Cases'
  },
  {
    id: 'ph-014',
    topic: 'perfil_hepatico',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la utilidad del aclaramiento de Verde de Indocianina en el preoperatorio de grandes resecciones hepáticas?',
    options: ['Medir la masa de hepatocitos funcionantes y el flujo sanguíneo', 'Diagnosticar hepatitis autoinmune', 'Estadificar el grado de esteatosis', 'Predecir la respuesta a quimioterapia'],
    correctIndex: 0,
    explanation: 'Mide la reserva funcional sistémica del hígado.',
    fisiopato: 'El verde de indocianina se excreta exclusivamente por el hígado sin circulación enterohepática; su tasa de eliminación correlaciona con la función residual.',
    clinicalPearl: 'Indispensable en pacientes con cirrosis Child A que van a hepatectomía por hepatocarcinoma.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 1: 'Sin rol.', 2: 'Sin rol.', 3: 'Sin rol.' },
    pillar: 'Mastery'
  },
  {
    id: 'ph-015',
    topic: 'perfil_hepatico',
    difficulty: 'Staff',
    text: 'Un paciente presenta elevación persistente de aminotransferasas (AST/ALT ~1.5) y Ferritina de 1200 ng/mL con Saturación de Transferrina del 65%. ¿Qué estudio genético solicita?',
    options: ['Mutación C282Y del gen HFE', 'Mutación en ATP7B', 'Anticuerpos LKM1', 'Alfa-1 antitripsina fenotipo'],
    correctIndex: 0,
    explanation: 'La saturación de transferrina > 45% y ferritina alta sugieren Hemocromatosis Hereditaria.',
    fisiopato: 'Déficit de hepcidina que genera absorción intestinal de hierro descontrolada y depósito en hepatocitos, páncreas y corazón.',
    clinicalPearl: 'El tratamiento de elección son las flebotomías seriadas.',
    guideline: 'Manual Chileno 2025 / Guías AASLD.',
    whyWrong: { 1: 'Para Wilson (Cobre).', 2: 'Para Hepatitis Autoinmune tipo 2.', 3: 'Para Déficit de A1AT.' },
    pillar: 'Board Prep'
  },

  // --- EII AVANZADA (MASTERCLASS FINAL EXPANSION) ---
  {
    id: 'eii-011',
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo de acción del Risankizumab, aprobado para Crohn moderado-grave?',
    options: ['Inhibidor de la subunidad p40 (IL-12/23)', 'Bloqueador selectivo de la subunidad p19 de la IL-23', 'Inhibidor de la PDE4', 'Antagonista de S1P'],
    correctIndex: 1,
    explanation: 'El Risankizumab es un anti-IL-23 selectivo (p19).',
    fisiopato: 'La IL-23 es clave en el mantenimiento de la respuesta Th17 patogénica en el intestino.',
    clinicalPearl: 'Ha demostrado superioridad en la inducción de remisión endoscópica comparado con Ustekinumab.',
    guideline: 'ECCO Guidelines 2024.',
    whyWrong: { 0: 'Es el mecanismo de Ustekinumab.', 2: 'Mecanismo de Apremilast.', 3: 'Mecanismo de Ozanimod.' },
    pillar: 'Mastery'
  },
  {
    id: 'eii-012',
    topic: 'eii_avanzada',
    difficulty: 'Staff',
    text: 'En un paciente con Crohn ileal con estenosis fibro-estenótica sintomática (sin inflamación activa), ¿cuál es el manejo de elección?',
    options: ['Aumentar dosis de biológico', 'Dilatación endoscópica o cirugía (Estenosoplastia)', 'Corticoides en dosis altas', 'Dieta elemental exclusivamente'],
    correctIndex: 1,
    explanation: 'La fibrosis no responde a antiinflamatorios; requiere manejo mecánico.',
    fisiopato: 'El depósito crónico de colágeno en la submucosa genera una cicatriz fija e irreversible.',
    clinicalPearl: 'La eco-endoscopia o entero-RM ayudan a diferenciar edema (inflamatorio) de fibrosis.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Inútil en fibrosis.', 2: 'Sin efecto en tejido cicatricial.', 3: 'Solo manejo de soporte.' },
    pillar: 'Staff Level'
  },
  {
    id: 'eii-013',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: '¿Qué hallazgo histológico es patognomónico de la Enfermedad de Crohn (aunque solo aparezca en un 30% de las muestras)?',
    options: ['Abscesos criptas', 'Granulomas no caseificantes', 'Distorsión de la arquitectura colónica', 'Metaplasia de células de Paneth'],
    correctIndex: 1,
    explanation: 'Los granulomas no caseificantes son el sello distintivo del Crohn y reflejan su naturaleza granulomatosa.',
    fisiopato: 'Agrupación de macrófagos epitelioides en respuesta a un estímulo antigénico crónico desconocido.',
    clinicalPearl: 'Su ausencia no descarta Crohn, pero su presencia lo confirma.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Se ve en ambas (CU y Crohn).', 2: 'Inespecífico de EII activa.', 3: 'Signo de cronicidad no específico.' },
    pillar: 'Must-Know'
  },
  {
    id: 'eii-014',
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el riesgo principal del uso crónico de Tofacitinib en pacientes mayores de 50 años con factores de riesgo cardiovascular?',
    options: ['Falla renal aguda', 'Eventos tromboembólicos venosos y eventos MACE', 'Anemia hemolítica', 'Hiperplasia gingival'],
    correctIndex: 1,
    explanation: 'La FDA y EMA alertan sobre el riesgo de trombosis y eventos cardiacos mayores con inhibidores de JAK.',
    fisiopato: 'Alteración de las vías de señalización de citoquinas que modulan la coagulación y la inflamación vascular.',
    clinicalPearl: 'Evite Tofacitinib si el paciente tiene antecedentes de TVP o TEP.',
    guideline: 'Safety alerts 2023 - JAK inhibitors.',
    whyWrong: { 0: 'No es el riesgo principal.', 2: 'No se asocia.', 3: 'Efecto de la ciclosporina.' },
    pillar: 'Mastery'
  },
  {
    id: 'eii-015',
    topic: 'eii_avanzada',
    difficulty: 'Staff',
    text: 'En el monitoreo de pacientes con biológicos, ¿qué se define como "Remisión Profunda" en EII?',
    options: ['Remisión clínica y química (CRP normal)', 'Remisión clínica y endoscópica (Curación mucosa)', 'Bilirrubina normal', 'Ausencia de fístulas externas únicamente'],
    correctIndex: 1,
    explanation: 'El objetivo actual (Treat-to-Target) es la curación de la mucosa.',
    fisiopato: 'La ausencia de úlceras visibles en la endoscopia predice un menor riesgo de colectomía y complicaciones a largo plazo.',
    clinicalPearl: 'La calprotectina < 50 ug/g es un buen "proxy" de curación mucosa.',
    guideline: 'Consenso STRIDE-II.',
    whyWrong: { 0: 'Es un objetivo intermedio, no profundo.', 2: 'Sin relación.', 3: 'Incompleto.' },
    pillar: 'Board Prep'
  },

  // --- DIARREA CRÓNICA ---
  {
    id: 'dcr-001',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: '¿Cuál es el examen inicial más adecuado para el tamizaje de esteatorrea en un paciente con sospecha de malabsorción?',
    options: ['Test de Van de Kamer (72h)', 'Sudán III en deposiciones', 'Elastasa fecal-1', 'Cápsula endoscópica'],
    correctIndex: 1,
    explanation: 'El Sudán III es una prueba cualitativa rápida y costo-efectiva para detectar grasa en heces.',
    fisiopato: 'La presencia de gotas de grasa teñidas indica que no hubo una digestión/absorción adecuada de triglicéridos.',
    clinicalPearl: 'Un Sudán III negativo no descarta esteatorrea leve; si la sospecha persiste, use Van de Kamer.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Es el estándar de oro pero engorroso para tamizaje.', 2: 'Evalúa función exocrina pancreática específicamente.', 3: 'No evalúa malabsorción de grasa.' },
    pillar: 'Common Cases'
  },

  // --- HEMORRAGIA DIGESTIVA BAJA (HDB) ---
  {
    id: 'hdb-001',
    topic: 'hdb',
    difficulty: 'Fellow',
    text: 'Paciente de 80 años con Rectorragia masiva indolora. Hemodinámicamente estable. ¿Cuál es la causa más frecuente de HDB masiva en el adulto mayor?',
    options: ['Hemorroides internas', 'Angiodisplasias', 'Enfermedad Diverticular', 'Cáncer de Colon'],
    correctIndex: 2,
    explanation: 'Los divertículos son la causa número uno de sangrado digestivo bajo masivo en la población geriátrica.',
    fisiopato: 'La erosión de la vasa recta en el cuello o domo del divertículo provoca un sangrado arterial súbito.',
    clinicalPearl: 'El 75% de los sangrados diverticulares ceden espontáneamente.',
    guideline: 'ACG Guidelines on Management of LGI Bleeding.',
    whyWrong: { 0: 'Sangrado escaso.', 1: 'Suelen dar sangrado crónico o en napa.', 3: 'Raramente masivo.' },
    pillar: 'Must-Know'
  },

  // --- H. PYLORI ---
  {
    id: 'hp-001',
    topic: 'h_pylori',
    difficulty: 'Staff',
    text: '¿Cuál es el esquema de erradicación de primera línea recomendado en Chile (2025) ante el aumento de la resistencia a claritromicina?',
    options: ['Terapia Triple con Claritromicina', 'Terapia Cuádruple con Bismuto', 'Terapia Dual con Amoxicilina dosis alta', 'Terapia Triple con Levofloxacino'],
    correctIndex: 1,
    explanation: 'La terapia cuádruple con bismuto (IBP, Bismuto, Metronidazol, Tetraciclina) es preferida en zonas de alta resistencia.',
    fisiopato: 'El bismuto tiene efectos bactericidas directos y sinergismo con antibióticos, superando la resistencia a claritromicina.',
    clinicalPearl: 'Siempre verifique la erradicación con Test de Aire o Antígeno en Deposiciones 4 semanas después de terminar.',
    guideline: 'Manual Chileno 2025 / Consenso de Maastricht VI.',
    whyWrong: { 0: 'No recomendada si resistencia >15%.', 2: 'Prometedora pero aún no estándar general.', 3: 'Solo para rescate.' },
    pillar: 'Board Prep'
  },

  // --- CELIACA ---
  {
    id: 'cel-001',
    topic: 'celiaca',
    difficulty: 'Staff',
    text: 'En un paciente con déficit de IgA, ¿cuál es el seromarcador de elección para diagnosticar Enfermedad Celiaca?',
    options: ['Antitransglutaminasa (tTG-IgA)', 'Anticuerpos Anti-endomisio (EMA-IgA)', 'Anticuerpos Anti-DGP IgG', 'HLA-DQ2/DQ8'],
    correctIndex: 2,
    explanation: 'En pacientes con déficit selectivo de IgA, las pruebas basadas en IgA darán falsos negativos; se debe usar IgG (DGP o tTG-IgG).',
    fisiopato: 'La respuesta inmune al gluten produce anticuerpos tanto de clase IgA como IgG.',
    clinicalPearl: 'Solicite siempre IgA Total al iniciar estudio de celiaquía.',
    guideline: 'ESPGHAN/ACG Celiac Guidelines.',
    whyWrong: { 0: 'Falso negativo.', 1: 'Falso negativo.', 3: 'Solo tiene valor predictivo negativo.' },
    pillar: 'Staff Level'
  },

  // --- PANCREATITIS ---
  {
    id: 'pan-001',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es el mejor predictor de severidad precoz (primeras 24-48h) en Pancreatitis Aguda según el Manual Chileno 2025?',
    options: ['Niveles de Amilasa/Lipasa', 'Marcadores inflamatorios (PCR > 150)', 'Presencia de necrosis en TAC inicial', 'Escala de Ranson al ingreso'],
    correctIndex: 1,
    explanation: 'La PCR > 150mg/L a las 48h es un predictor clásico de severidad.',
    fisiopato: 'La magnitud de la respuesta de fase aguda refleja la extensión de la respuesta inflamatoria sistémica y el riesgo de falla orgánica.',
    clinicalPearl: 'No pida TAC antes de las 72h a menos que sospeche complicación aguda; la necrosis tarda en aparecer.',
    guideline: 'Atlanta Classification 2012 / Manual Chileno 2025.',
    whyWrong: { 0: 'No se correlacionan con severidad.', 2: 'TAC precoz subestima la extensión de la necrosis.', 3: 'Requiere 48h para completarse y es menos dinámica que PCR/BUN.' },
    pillar: 'Must-Know'
  },

  // --- MASLD (Hígado Graso) ---
  {
    id: 'masld-001',
    topic: 'masld',
    difficulty: 'Staff',
    text: '¿Cuál es el score no invasivo preferido para descartar fibrosis avanzada en pacientes con MASLD en la práctica clínica ambulatoria?',
    options: ['FIB-4 Index', 'APRI Score', 'NFS (NAFLD Fibrosis Score)', 'FibroScan (VCTE)'],
    correctIndex: 0,
    explanation: 'El FIB-4 es ampliamente recomendado por su simplicidad (Edad, AST, ALT, Plaquetas) y alto valor predictivo negativo.',
    fisiopato: 'Refleja la alteración en el metabolismo celular y el atrapamiento plaquetario en el bazo producto de la hipertensión portal incipiente.',
    clinicalPearl: 'Un FIB-4 < 1.3 tiene un VPN > 90% para fibrosis avanzada.',
    guideline: 'AASLD/EASL MASLD Practice Guidance 2024.',
    whyWrong: { 1: 'Más útil en Hepatitis C.', 2: 'Más complejo de calcular, pero válido.', 3: 'Es una técnica elastográfica, no un score bioquímico simple.' },
    pillar: 'Board Prep'
  },

  // --- HEPATITIS ---
  {
    id: 'hep-001',
    topic: 'hepatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es el marcador serológico que indica inmunidad contra el virus de la Hepatitis B tras la vacunación exitosa?',
    options: ['HBsAg negativo', 'Anti-HBs positivo (>10 mIU/mL)', 'Anti-HBc total positivo', 'HBeAg negativo'],
    correctIndex: 1,
    explanation: 'La presencia aislada de anticuerpos contra el antígeno de superficie (Anti-HBs) es el sello de la inmunidad por vacuna.',
    fisiopato: 'La vacuna contiene antígeno S recombinante; el sistema inmune genera anticuerpos neutralizantes sin haber estado expuesto al core del virus.',
    clinicalPearl: 'Si el Anti-HBc también es positivo, la inmunidad es por infección natural, no por vacuna.',
    guideline: 'CDC / Manual Chileno 2025.',
    whyWrong: { 0: 'Solo indica ausencia de infección activa.', 2: 'Indica contacto con el virus real (core).', 3: 'Indica ausencia de replicación viral activa.' },
    pillar: 'Must-Know'
  },

  // --- VÍAS BILIARES ---
  {
    id: 'vb-001',
    topic: 'vias_biliares',
    difficulty: 'Staff',
    text: 'En un paciente con Coledocolitiasis sospechada, ¿cuál es el examen de mayor rendimiento diagnóstico antes de considerar una CPRE terapéutica?',
    options: ['Ecografía Abdominal', 'TAC de abdomen con contraste', 'Colangioresonancia (CPRM)', 'Ecografía Endoscópica (USE)'],
    correctIndex: 3,
    explanation: 'Tanto la CPRM como la USE tienen un rendimiento excelente (>90%), pero la USE es superior para cálculos pequeños (<5mm).',
    fisiopato: 'La proximidad del transductor endoscópico al colédoco distal permite una resolución espacial inalcanzable por métodos transabdominales o magnéticos.',
    clinicalPearl: 'Use CPRE solo para tratamiento, no para diagnóstico primario, debido a su riesgo de complicaciones (pancreatitis).',
    guideline: 'Guías ASGE / ESGE de manejo de coleidocolitiasis.',
    whyWrong: { 0: 'Baja sensibilidad para cálculos en colédoco distal.', 1: 'Mal rendimiento para cálculos de colesterol.', 2: 'Excelente, pero ligeramente inferior a USE para micro-litos.' },
    pillar: 'Staff Level'
  },
  
  // --- SECTOR: CIRROSIS (EXPANDIDO 2 - STAFF & ULTRA) ---
  {
    id: 'cir-005',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: '¿Cuál es el mejor manejo para la encefalopatía hepática recurrente a pesar del uso de Lactulosa?',
    options: ['Aumentar la dosis de lactulosa hasta diarrea líquida', 'Añadir Rifaximina 550mg cada 12 horas', 'Realizar un TIPS urgente', 'Dieta hipoproteica estricta'],
    correctIndex: 1,
    explanation: 'La rifaximina reduce la recurrencia y las hospitalizaciones por encefalopatía.',
    fisiopato: 'Antibiótico no absorbible que modula la microbiota productora de amonio.',
    clinicalPearl: 'NUNCA use dietas hipoproteicas permanentes; la sarcopenia empeora la encefalopatía.',
    guideline: 'Manual Chileno 2025 / Guías AASLD.',
    whyWrong: { 0: 'Riesgo de deshidratación y falla renal.', 2: 'TIPS puede empeorar la encefalopatía.', 3: 'Obsoleto y peligroso.' },
    pillar: 'Staff Level'
  },
  {
    id: 'cir-006',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el criterio para realizar profilaxis primaria de Peritonitis Bacteriana Espontánea (PBE) en cirrosis con ascitis?',
    options: ['Cualquier paciente con ascitis', 'Proteínas en líquido ascítico < 1.5 g/dL + disfunción renal o Child-Pugh >= 9', 'Solo si ya tuvo un episodio previo', 'Si la Bilirrubina es > 5 mg/dL'],
    correctIndex: 1,
    explanation: 'Se reserva para pacientes con alto riesgo identificado por niveles bajos de proteínas.',
    fisiopato: 'Bajas proteínas en líquido ascítico indican baja actividad opsónica y mayor riesgo de traslocación bacteriana.',
    clinicalPearl: 'La Ciprofloxacina o Norfloxacina son los fármacos de elección.',
    guideline: 'EASL Decompensated Cirrhosis Guidelines 2024.',
    whyWrong: { 0: 'Induciría resistencia.', 2: 'Eso es profilaxis secundaria.', 3: 'Es un factor pero no el criterio definitorio.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ERGE (EXPANDIDO) ---
  {
    id: 'erge-002',
    topic: 'erge',
    difficulty: 'Fellow',
    text: '¿Cuál es el síntoma extraesofágico con mayor asociación a ERGE según el consenso de Montreal?',
    options: ['Laringitis crónica', 'Tos crónica', 'Asma bronquial', 'Desgaste dental'],
    correctIndex: 1,
    explanation: 'La tos crónica tiene una asociación establecida con el reflujo gastroesofágico.',
    fisiopato: 'Mediante microaspiración directa o reflejo esofagobronquial mediado por el vago.',
    clinicalPearl: 'No asuma que la tos es ERGE sin descartar causas pulmonares primero.',
    guideline: 'Montreal Consensus on GERD.',
    whyWrong: { 0: 'Asociación probable pero menos constante.', 2: 'Relación bidireccional compleja.', 3: 'Se asocia pero es más tardío.' },
    pillar: 'Common Cases'
  },
  {
    id: 'erge-003',
    topic: 'erge',
    difficulty: 'Subspecialist',
    text: '¿Qué parámetro de la pH-metría es el mejor predictor de respuesta a la cirugía antirreflujo (Funduplicatura)?',
    options: ['Número total de episodios de reflujo', 'Tiempo de exposición ácida (AET) > 6%', 'Presencia de reflujo alcalino', 'DeMeester Score < 14.7'],
    correctIndex: 1,
    explanation: 'Un AET patológico (>6%) es el marcador de éxito quirúrgico.',
    fisiopato: 'Indica una carga de ácido estructural que la cirugía puede corregir restaurando la competencia del esfínter inferior.',
    clinicalPearl: 'Si el AET es < 4%, la cirugía suele fracasar en aliviar los síntomas.',
    guideline: 'Lyon 2.0 Consensus.',
    whyWrong: { 0: 'Menos específico.', 2: 'Definición controvertida.', 3: 'Indica normalidad.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DIARREA AGUDA (EXPANDIDO) ---
  {
    id: 'dag-002',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: '¿Cuál es el antibiótico de primera elección para el tratamiento empírico de la diarrea del viajero grave o febril en adultos?',
    options: ['Ciprofloxacino', 'Azitromicina', 'Amoxicilina', 'Metronidazol'],
    correctIndex: 1,
    explanation: 'La azitromicina es preferida por la creciente resistencia de Campylobacter a las quinolonas.',
    fisiopato: 'Inhibe la síntesis proteica bacteriana uniéndose a la subunidad 50S del ribosoma.',
    clinicalPearl: 'Especialmente recomendada para viajeros a Asia (Tailandia) por alta resistencia a Cipro.',
    guideline: 'Manual Chileno 2025 / Guías IDSA.',
    whyWrong: { 0: 'Alta tasa de resistencia actual.', 2: 'Sin rol.', 3: 'Solo si sospecha Giardia o C. diff.' },
    pillar: 'Must-Know'
  },
  {
    id: 'dag-003',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: 'En un paciente con diarrea sanguinolenta y sospecha de E. coli enterohemorrágica (O157:H7), ¿por qué están contraindicados los antibióticos?',
    options: ['Aumentan el riesgo de Síndrome Hemolítico Urémico (SHU)', 'Producen diarrea por C. difficile', 'Retrasan la curación espontánea', 'No tienen efecto sobre la bacteria'],
    correctIndex: 0,
    explanation: 'Los antibióticos inducen la liberación masiva de toxina Shiga por el fago bacteriano.',
    fisiopato: 'La fragmentación bacteriana libera la toxina que daña el endotelio glomerular y activa la cascada de coagulación.',
    clinicalPearl: 'Ante una disentería sin fiebre alta, piense en EHEC y evite antibióticos.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 1: 'Poco relevante comparado con el SHU.', 2: 'Secundario.', 3: 'Sí tienen efecto pero el resultado es deletéreo.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: HDA (EXPANDIDO) ---
  {
    id: 'hda-002',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál es el objetivo de hemoglobina recomendado para la transfusión en HDA no varicosa según guías actuales (Estrategia restrictiva)?',
    options: ['Hgb > 10 g/dL', 'Hgb > 7 g/dL', 'Hgb > 12 g/dL', 'Hgb > 9 g/dL'],
    correctIndex: 1,
    explanation: 'La estrategia restrictiva (< 7) reduce el resangrado y la mortalidad.',
    fisiopato: 'Sobre-transfundir aumenta la presión portal y esplácnica, rompiendo la hemostasia local.',
    clinicalPearl: 'En pacientes con cardiopatía isquémica activa, el umbral sube a 8-9 g/dL.',
    guideline: 'Villanueva et al. / Consenso HDA.',
    whyWrong: { 0: 'Aumenta mortalidad.', 2: 'Peligrosamente alto.', 3: 'Usado en situaciones específicas pero no es el estándar general.' },
    pillar: 'Must-Know'
  },
  {
    id: 'hda-003',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: 'Ante una HDA varicosa masiva que no responde a terapia endoscópica inicial ni fármacos vasoactivos, ¿cuál es el puente recomendado?',
    options: ['Cirugía de derivación portosistémica', 'Sonda de Sengstaken-Blakemore o Prótesis esofágica autoexpandible (Danis)', 'Escleroterapia ciega', 'Lactulosa enemas'],
    correctIndex: 1,
    explanation: 'Son balones o prótesis que comprimen mecánicamente las várices para control temporal.',
    fisiopato: 'Hemostasia mecánica directa por presión.',
    clinicalPearl: 'Máximo 24h para el balón de Sengstaken por riesgo de necrosis esofajica.',
    guideline: 'Manual Chileno 2025 / Baveno VII.',
    whyWrong: { 0: 'Morbimortalidad excesiva en agudo.', 2: 'Obsoleto/Peligroso por ceguera.', 3: 'No detiene el sangrado.' },
    pillar: 'Mastery'
  },
  {
    id: 'da-003',
    topic: 'dolor_abdominal',
    difficulty: 'Staff',
    text: 'En un paciente con dolor abdominal crónico y sospecha de Porfiria Intermitente Aguda, ¿cuál es el hallazgo bioquímico clave durante la crisis?',
    options: ['Elevación de ALA y PBG urinario', 'Coproporfirinas fecales elevadas', 'Anemia hemolítica marcada', 'Hiperbilirrubinemia directa'],
    correctIndex: 0,
    explanation: 'La elevación de ácido delta-aminolevulínico (ALA) y porfobilinógeno (PBG) en orina durante el dolor es diagnóstica.',
    fisiopato: 'Déficit de PBG-desaminasa que genera acumulación de precursores neurotóxicos.',
    clinicalPearl: 'La orina puede oscurecerse al exponerse a la luz solar.',
    guideline: 'Guías internacionales de Porfiria / Manual Chileno 2025.',
    whyWrong: { 1: 'Poco específico en crisis aguda.', 2: 'No es característica de porfiria hepática aguda.', 3: 'No es un marcador de porfiria.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: CIRROSIS (EXPANDIDO - STAFF & ULTRA) ---
  {
    id: 'cir-002',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: 'Según Baveno VII, ¿cuál es el umbral de elastografía hepática (FibroScan) para considerar que un paciente tiene Hipertensión Portal Clínicamente Significativa (HPCS)?',
    options: ['> 10 kPa', '> 15 kPa', '> 20-25 kPa', '> 75 kPa'],
    correctIndex: 2,
    explanation: 'Baveno VII establece que valores >20-25 kPa tienen alta probabilidad de HPCS (Gradiente > 10 mmHg).',
    fisiopato: 'La rigidez hepática correlaciona con la resistencia intrahepática al flujo venoso portal.',
    clinicalPearl: 'Si el paciente tiene < 20 kPa y plaquetas > 150.000, el riesgo de várices de alto riesgo es < 5%.',
    guideline: 'Consenso Baveno VII (2022).',
    whyWrong: { 0: 'Indica fibrosis avanzada únicamente.', 1: 'Umbral para compensada avanzada.', 3: 'Valor máximo de la máquina, no un umbral de HPCS.' },
    pillar: 'Staff Level'
  },
  {
    id: 'cir-003',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo de acción de la Terlipresina en el tratamiento del Síndrome Hepatorrenal tipo 1 (SHR-AKI)?',
    options: ['Antagonista de la Aldosterona', 'Agonista V1 de vasopresina portosistémico', 'Inhibidor de la óxido nítrico sintasa', 'Vasodilatador renal directo'],
    correctIndex: 1,
    explanation: 'La terlipresina actúa sobre receptores V1 produciendo vasoconstricción esplácnica potente.',
    fisiopato: 'Reduce la vasodilatación arterial esplácnica mediada por NO, lo que aumenta la resistencia vascular sistémica y mejora la perfusión renal.',
    clinicalPearl: 'Vigilar saturación de O2: la terlipresina puede causar edema pulmonar e isquemia coronaria.',
    guideline: 'EASL Guidelines on Decompensated Cirrhosis.',
    whyWrong: { 0: 'Efecto de la espironolactona.', 2: 'Mecanismo no utilizado en SHR.', 3: 'El SHR se caracteriza por vasoconstricción renal extrema; se requiere lo opuesto: vasoconstricción sistémica.' },
    pillar: 'Mastery'
  },
  {
    id: 'cir-004',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: 'En la patogenia de la Encefalopatía Hepática, ¿cómo afecta el amoníaco a los astrocitos cerebrales?',
    options: ['Hipertrofia y aumento de la sinapsis', 'Edema por acumulación de Glutamina intracelular', 'Necrosis por apoptosis mediada por Caspasa-3', 'Desmielinización de la sustancia blanca'],
    correctIndex: 1,
    explanation: 'El amoníaco es convertido en glutamina por la glutamina sintetasa en el astrocito, generando estrés osmótico.',
    fisiopato: 'La glutamina es un osmolito potente; su acumulación atrae agua al interior del astrocito, provocando edema cerebral y disfunción neurotransmisora.',
    clinicalPearl: 'El edema cerebral severo es más frecuente en falla hepática aguda que en crónica.',
    guideline: 'AASLD/EASL Hepatic Encephalopathy Guidelines.',
    whyWrong: { 0: 'Ocurre lo contrario (disfunción).', 2: 'El mecanismo es osmótico, no primariamente necrótico.', 3: 'Mecanismo de otras patologías neurodegenerativas.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: PERFIL HEPÁTICO (MASTERCLASS) ---
  {
    id: 'ph-002',
    topic: 'perfil_hepatico',
    difficulty: 'Fellow',
    text: '¿Qué hallazgo en el perfil hepático sugiere colestasis extrahepática obstructiva aguda por coledocolitiasis?',
    options: ['Elevación aislada de GGT', 'Elevación marcada de transaminasas inicial (>500) que cae rápido', 'Fosfatasa alcalina normal con Bilirrubina de 15 mg/dl', 'AST/ALT > 5'],
    correctIndex: 1,
    explanation: 'En las primeras horas de una obstrucción biliar súbita (paso de cálculo), las transaminasas pueden elevarse por "golpe enzimático".',
    fisiopato: 'El aumento súbito de la presión hidrostática en los canalículos biliares regurgita enzimas a los sinusoides hepáticos.',
    clinicalPearl: 'Ante una elevación súbita de transaminasas que baja en 24-48h, piense en coledocolitiasis, no en hepatitis viral.',
    guideline: 'Manual Chileno de Gastroenterología 2025.',
    whyWrong: { 0: 'Poco específico.', 2: 'En colestasis obstructiva la FA siempre se eleva posteriormente.', 3: 'Sugiere alcoholismo o isquemia.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'ph-003',
    topic: 'perfil_hepatico',
    difficulty: 'Subspecialist',
    text: 'Un paciente presenta elevación aislada de Fosfatasa Alcalina de origen óseo. ¿Cómo se confirma este origen usando solo el hepatograma estándar?',
    options: ['La GGT será normal', 'La Bilirrubina será > 2 mg/dl', 'La Albúmina estará baja', 'La LDH estará el doble de lo normal'],
    correctIndex: 0,
    explanation: 'La GGT es específica del árbol biliar. Si la FA está elevada pero la GGT es normal, el origen suele ser óseo.',
    fisiopato: 'La FA se produce en osteoblastos y colangiocitos, pero la GGT no se expresa en el tejido óseo.',
    clinicalPearl: 'Especialmente útil en adolescentes en crecimiento o pacientes con enfermedad de Paget.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 1: 'No tiene relación con el origen de la FA.', 2: 'Indica síntesis hepática.', 3: 'Indica recambio celular general.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ENFERMEDAD INFLAMATORIA INTESTINAL (EXPANDIDO) ---
  {
    id: 'eii-002',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: '¿Cuál es el hallazgo endoscópico más característico de la Enfermedad de Crohn que la diferencia de la Colitis Ulcerosa?',
    options: ['Afectación rectal constante', 'Lesiones "en parches" (skip lesions)', 'Pseudopólipos difusos', 'Sangrado fácil al roce (friabilidad)'],
    correctIndex: 1,
    explanation: 'La Enfermedad de Crohn se caracteriza por áreas inflamadas alternadas con mucosa sana.',
    fisiopato: 'Es una inflamación transmural que puede afectar cualquier segmento del tubo digestivo, desde la boca hasta el ano.',
    clinicalPearl: 'Si el recto está respetado y hay compromiso ileal, sospeche Crohn con alta probabilidad.',
    guideline: 'Manual Chileno 2025 / Guías ECCO.',
    whyWrong: { 0: 'Es típico de CU.', 2: 'Se ve en ambas pero es más común en CU activa crónica.', 3: 'Característica clásica de la proctitis ulcerosa.' },
    pillar: 'Common Cases'
  },
  {
    id: 'eii-003',
    topic: 'eii_avanzada',
    difficulty: 'Staff',
    text: 'En el manejo de la Colitis Ulcerosa Grave (Criterios de Truelove-Witts), ¿cuál es el plazo de tiempo recomendado para evaluar la respuesta a corticoides endovenosos antes de considerar terapia de rescate?',
    options: ['24 horas', '3 a 5 días', '7 a 10 días', '2 semanas'],
    correctIndex: 1,
    explanation: 'Se debe evaluar la respuesta (índice de Oxford o similar) entre el día 3 y el día 5.',
    fisiopato: 'La persistencia de una respuesta inflamatoria sistémica severa tras 72h de esteroides indica una falla al manejo médico inicial y alto riesgo de colectomía.',
    clinicalPearl: 'Más de 8 deposiciones al día o PCR > 45 al tercer día predice falla a corticoides en un 85%.',
    guideline: 'Manual Chileno 2025 - EII Grave.',
    whyWrong: { 0: 'Muy pronto para ver efecto.', 2: 'Demasiado tarde; aumenta el riesgo de complicaciones quirúrgicas.', 3: 'Inaceptable en un cuadro grave.' },
    pillar: 'Board Prep'
  },
  {
    id: 'eii-004',
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo de acción del Upadacitinib, recientemente aprobado para CU moderada-grave?',
    options: ['Antagonista de la Interleucina 12/23', 'Inhibidor selectivo de JAK-1', 'Bloqueador de la integrina alfa-4-beta-7', 'Anticuerpo monoclonal anti-TNF'],
    correctIndex: 1,
    explanation: 'El Upadacitinib es una pequeña molécula que inhibe de forma selectiva a JAK-1.',
    fisiopato: 'Bloquea la vía de señalización JAK-STAT, impidiendo la transcripción de múltiples citoquinas proinflamatorias.',
    clinicalPearl: 'A diferencia de los biológicos, es oral y no genera anticuerpos anti-fármaco.',
    guideline: 'ECCO / AGA Practice Update 2024.',
    whyWrong: { 0: 'Es el mecanismo del Ustekinumab.', 2: 'Mecanismo del Vedolizumab.', 3: 'Mecanismo de Infliximab/Adalimumab.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DIARREA (EXPANDIDO) ---
  {
    id: 'dcr-002',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'Un paciente presenta diarrea crónica que cede por completo con el ayuno. El hiato osmótico fecal (Osmotic Gap) es de 160 mOsm/kg. ¿Qué tipo de diarrea es?',
    options: ['Diarrea Secretora', 'Diarrea Osmótica', 'Diarrea Exudativa', 'Diarrea Motora'],
    correctIndex: 1,
    explanation: 'Un hiato osmótico > 100 y la respuesta al ayuno son típicos de la diarrea osmótica.',
    fisiopato: 'La presencia de solutos no absorbidos en la luz intestinal retrae agua por gradiente osmótico.',
    clinicalPearl: 'Piense en intolerancia a lactosa o uso subrepticio de laxantes magnésicos.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'No cede con ayuno y tiene gap < 50.', 2: 'Suele tener sangre/pus.', 3: 'Relacionada con neuropatías o hipertiroidismo.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'dcr-003',
    topic: 'diarrea_cronica',
    difficulty: 'Staff',
    text: '¿Cuál es la utilidad principal de la Calprotectina Fecal en el estudio de diarrea crónica?',
    options: ['Sustituir a la colonoscopia en todos los casos', 'Diferenciar diarrea funcional (SII) de diarrea orgánica inflamatoria', 'Diagnosticar mala absorción de sales biliares', 'Detectar infección por Clostridioides difficile'],
    correctIndex: 1,
    explanation: 'Es un marcador con alto valor predictivo negativo para inflamación intestinal.',
    fisiopato: 'La calprotectina es una proteína liberada por los neutrófilos cuando migran a la mucosa intestinal inflamada.',
    clinicalPearl: 'Valores < 50 ug/g hacen muy improbable una EII activa.',
    guideline: 'Guías AGA sobre biomarcadores en EII / Manual Chileno 2025.',
    whyWrong: { 0: 'Nunca sustituye a la biopsia si hay síntomas de alarma.', 2: 'Para eso se usa el SeHCAT o prueba terapéutica.', 3: 'Inespecífico para C. diff, aunque puede elevarse.' },
    pillar: 'Staff Level'
  },

  // --- SECTOR: PÁNCREAS (EXPANDIDO) ---
  {
    id: 'pan-002',
    topic: 'pancreatitis',
    difficulty: 'Staff',
    text: '¿Cuál es el momento óptimo para realizar un drenaje de una necrosis pancreática amurallada (WON) infectada?',
    options: ['Inmediatamente al diagnóstico de infección', 'A las 72h del inicio del cuadro', 'Después de las 4 semanas (fase tardía)', 'Solo si hay choque séptico refractario'],
    correctIndex: 2,
    explanation: 'El dogma actual es el "delayed approach"; esperar a que la necrosis se delimite y amuralle (WON).',
    fisiopato: 'Esperar 4 semanas permite que se forme una pared fibrosa, facilitando el drenaje transmural endoscópico y reduciendo el riesgo de sangrado o perforación.',
    clinicalPearl: 'El abordaje "Step-up" (drenaje percutáneo/endoscópico antes que cirugía) es el estándar.',
    guideline: 'Manual Chileno 2025 / Guías IAP-APA.',
    whyWrong: { 0: 'Aumenta morbi-mortalidad significativamente.', 1: 'La necrosis aún es líquida y no delimitada.', 3: 'Para entonces puede ser tarde; el criterio es la amurallación, no solo el choque.' },
    pillar: 'Staff Level'
  },
  {
    id: 'pan-003',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la mutación genética más frecuentemente asociada a Pancreatitis Hereditaria con herencia autosómica dominante?',
    options: ['CFTR', 'PRSS1', 'SPINK1', 'CASR'],
    correctIndex: 1,
    explanation: 'La mutación en el gen del tripsinógeno catiónico (PRSS1) es la causa clásica de pancreatitis hereditaria.',
    fisiopato: 'La mutación impide la autoinactivación de la tripsina intracecinar, gatillando una cascada de autodigestión pancreática recurrente.',
    clinicalPearl: 'Estos pacientes tienen un riesgo acumulado de cáncer de páncreas de hasta el 40% a los 70 años.',
    guideline: 'Manual Chileno 2025 - Genética en Páncreas.',
    whyWrong: { 0: 'Asociada a fibrosis quística y pancreatitis idiopática (recidivante).', 2: 'Es un inhibidor de la tripsina; sus mutaciones suelen ser más complejas/recesivas.', 3: 'Relacionada con el sensor de calcio.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: H. PYLORI (EXPANDIDO 2) ---
  {
    id: 'hp-004',
    topic: 'h_pylori',
    difficulty: 'Fellow',
    text: '¿Cuál es el factor de virulencia de H. pylori más fuertemente asociado con el desarrollo de adenocarcinoma gástrico?',
    options: ['Ureasa', 'Oncoproteína CagA', 'Flagelina', 'VacA'],
    correctIndex: 1,
    explanation: 'CagA (Cytotoxin-associated gene A) se inyecta en la célula gástrica y altera las vías de señalización de crecimiento.',
    fisiopato: 'Provoca una respuesta inflamatoria intensa y desregulación del citoesqueleto celular, favoreciendo la transformación neoplásica.',
    clinicalPearl: 'CagA positivo es un marcador de cepas "agresivas".',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Supervivencia, no oncogénesis primaria.', 2: 'Movilidad.', 3: 'Produce vacuolización pero CagA es el principal oncogén.' },
    pillar: 'Phatophysiology'
  },
  {
    id: 'hp-005',
    topic: 'h_pylori',
    difficulty: 'Staff',
    text: 'En una paciente embarazada con dispepsia y H. pylori confirmado, ¿cuál es la conducta recomendada?',
    options: ['Tratar inmediatamente con esquema cuádruple', 'Diferir el tratamiento hasta después del parto y lactancia', 'Tratar solo con Amoxicilina', 'Realizar endoscopia mensual de control'],
    correctIndex: 1,
    explanation: 'La erradicación no es una urgencia y los antibióticos (especialmente tetraciclinas y bismuto) están contraindicados o son riesgosos.',
    fisiopato: 'Riesgo de teratogenicidad o efectos secundarios fetales innecesarios.',
    clinicalPearl: 'Use IBP de ser estrictamente necesario para síntomas, aunque con precaución.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Peligroso por tetraciclina/bismuto.', 2: 'Ineficaz como monoterapia.', 3: 'Innecesario.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'hp-006',
    topic: 'h_pylori',
    difficulty: 'Fellow',
    text: '¿Cuánto tiempo debe haber pasado desde el fin del tratamiento antibiótico para realizar un test de aire espirado confiable?',
    options: ['1 semana', '2 semanas', '4 semanas', '2 meses'],
    correctIndex: 2,
    explanation: 'Se requieren 4 semanas post-antibiótico y 2 semanas post-IBP para evitar falsos negativos.',
    fisiopato: 'Permite que la carga bacteriana residual (si la hay) se recupere a niveles detectables por la ureasa.',
    clinicalPearl: 'Nunca use serología para confirmar erradicación.',
    guideline: 'Maastricht VI.',
    whyWrong: { 0: 'Muy pronto.', 1: 'Intervalo para IBP, no para antibiótico.', 3: 'Excesivo, aunque seguro.' },
    pillar: 'Common Cases'
  },
  {
    id: 'hp-007',
    topic: 'h_pylori',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el rol del Vonoprazan en la nueva terapia para H. pylori?',
    options: ['Es un nuevo antibiótico macrólido', 'Es un bloqueador de ácido competitivo de potasio (P-CAB) con efecto más rápido y duradero', 'Es un probiótico específico', 'Es un quelante de sales biliares'],
    correctIndex: 1,
    explanation: 'Vonoprazan logra un pH gástrico > 6 de forma más estable que los IBP tradicionales.',
    fisiopato: 'H. pylori es más sensible a los antibióticos cuando no está en fase estacionaria, lo cual ocurre a pH alto.',
    clinicalPearl: 'Especialmente útil en pacientes con metabolización rápida de IBP (CYP2C19).',
    guideline: 'Manual Chileno 2025 / FDA Approval 2023.',
    whyWrong: { 0: 'Falso.', 2: 'Falso.', 3: 'Falso.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CELIACA (EXPANDIDO 2) ---
  {
    id: 'cel-002',
    topic: 'celiaca',
    difficulty: 'Staff',
    text: '¿Cuál de los siguientes cereales está PERMITIDO en la dieta de un paciente celiaco?',
    options: ['Trigo', 'Cebada', 'Centeno', 'Arroz'],
    correctIndex: 3,
    explanation: 'El arroz, maíz, quinoa y amaranto no contienen las prolaminas tóxicas para el celiaco.',
    fisiopato: 'No contienen gliadina (trigo), hordeína (cebada) ni secalina (centeno).',
    clinicalPearl: 'Cuidado con la avena: debe estar certificada "libre de gluten" por riesgo de contaminación cruzada.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Prohibido.', 1: 'Prohibido.', 2: 'Prohibido.' },
    pillar: 'Must-Know'
  },
  {
    id: 'cel-003',
    topic: 'celiaca',
    difficulty: 'Fellow',
    text: '¿Qué hallazgo en la biopsia duodenal define el grado Marsh 3a?',
    options: ['Aumento de linfocitos intraepiteliales solamente', 'Hiperplasia de criptas con vellosidades normales', 'Atrofia vellositaria parcial con hiperplasia de criptas', 'Atrofia vellositaria total'],
    correctIndex: 2,
    explanation: 'Marsh 3 se divide en a (parcial), b (subtotal) y c (total).',
    fisiopato: 'La respuesta infiltrativa progresa a hiperplásica y finalmente a destructiva por la respuesta citotóxica al gluten.',
    clinicalPearl: 'Se requieren al menos 4 a 6 biopsias (incluyendo bulbo) para un diagnóstico correcto.',
    guideline: 'Classificación de Marsh-Oberhuber.',
    whyWrong: { 0: 'Marsh 1.', 1: 'Marsh 2.', 3: 'Marsh 3c.' },
    pillar: 'Board Prep'
  },
  {
    id: 'cel-004',
    topic: 'celiaca',
    difficulty: 'Subspecialist',
    text: 'En un paciente con síntomas persistentes a pesar de dieta estricta, ¿qué sugiere el hallazgo de linfocitos intraepiteliales con fenotipo aberrante (CD3+, CD8-, CD4-)?',
    options: ['Celiaquía refractaria tipo 1', 'Celiaquía refractaria tipo 2 (RCD2)', 'Linfoma de células T asociado a enteropatía (EATL)', 'Intolerancia a la lactosa asociada'],
    correctIndex: 1,
    explanation: 'La pérdida de marcadores de superficie CD8 y CD4 en los LIE es sello de la RCD2.',
    fisiopato: 'Representa una expansión clonal premaligna de linfocitos T.',
    clinicalPearl: 'La RCD2 tiene un alto riesgo de progresión a linfoma de células T.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Fenotipo normal pero sin respuesta clínica.', 2: 'Ya es la neoplasia establecida (masa/B-symptoms).', 3: 'Sin relación histológica.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ESÓFAGO (MOTORES Y CÁNCER) ---
  {
    id: 'mot-001',
    topic: 'motores_esofago',
    difficulty: 'Subspecialist',
    text: 'Según la Clasificación de Chicago 4.0, ¿cuál es el criterio manométrico indispensable para el diagnóstico de Acalasia Tipo III (Espástica)?',
    options: ['IRP elevado y 100% de peristalsis fallida', 'IRP elevado y >=20% de contracciones prematuras (DL < 4.5s)', 'IRP normal con ondas de gran amplitud', 'Ausencia total de contractilidad'],
    correctIndex: 1,
    explanation: 'La acalasia tipo III se define por la obstrucción al flujo de la unión EG (IRP elevado) y la presencia de espasmo distal.',
    fisiopato: 'Se produce por una pérdida de la inhibición nitrérgica que genera contracciones terciarias simultáneas y prematuras en el cuerpo esofágico.',
    clinicalPearl: 'El POEM es la terapia de elección para la Acalasia Tipo III debido a que permite una miotomía más extensa del cuerpo esofágico.',
    guideline: 'Chicago Classification v4.0.',
    whyWrong: { 0: 'Criterio general de acalasia pero no define el subtipo.', 2: 'El IRP debe estar elevado.', 3: 'Define la aperistalsis ausente (Tipo I).' },
    pillar: 'Mastery'
  },
  {
    id: 'ces-001',
    topic: 'cancer_esofago',
    difficulty: 'Staff',
    text: 'En el seguimiento de un paciente con Esófago de Barrett con displasia de bajo grado confirmada por dos patólogos, ¿cuál es la conducta recomendada?',
    options: ['Seguimiento endoscópico cada 3 meses', 'Esofaguectomía distal', 'Ablación por radiofrecuencia (RFA)', 'Dosis doble de IBP y control en 1 año'],
    correctIndex: 2,
    explanation: 'La ablación endoscópica es preferida sobre el seguimiento para reducir el riesgo de progresión a adenocarcinoma.',
    fisiopato: 'La radiofrecuencia elimina el epitelio metaplásico y displásico, permitiendo la re-epitelización con tejido escamoso normal.',
    clinicalPearl: 'La displasia SIEMPRE debe ser confirmada por un segundo patólogo experto en GI antes de tomar conductas invasivas.',
    guideline: 'Manual Chileno 2025 / Guías ASGE.',
    whyWrong: { 0: 'Opción válida anteriormente, pero hoy se prefiere erradicar.', 1: 'Morbilidad excesiva para una displasia de bajo grado.', 3: 'No elimina el riesgo de progresión.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: ESTÓMAGO (ÚLCERA Y CÁNCER) ---
  {
    id: 'ulp-001',
    topic: 'ulcera_peptica',
    difficulty: 'Fellow',
    text: 'Paciente usuario crónico de AINES presenta úlcera gástrica. ¿Cuál es el mecanismo principal por el cual los AINES no selectivos (COX-1/2) inducen daño gastroduodenal?',
    options: ['Aumento de la secreción de ácido clorhídrico', 'Inhibición de la síntesis de prostaglandinas protectores (PGE2)', 'Efecto cáustico directo por el pH ácido del fármaco', 'Inhibición del factor intrínseco'],
    correctIndex: 1,
    explanation: 'Las prostaglandinas son fundamentales para el flujo sanguíneo y la secreción de moco/bicarbonato.',
    fisiopato: 'Al inhibir la COX-1, se reduce la PGE2 gástrica, lo que disminuye la barrera de moco y sensibiliza a la mucosa ante el ácido y la pepsina.',
    clinicalPearl: 'El uso de IBP profiláctico es mandatorio en usuarios de AINES con factores de riesgo (edad > 65, antecedentes de úlcera).',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Los AINES no aumentan el ácido per se.', 2: 'Es un efecto menor e irrelevante comparado con el sistémico.', 3: 'No tiene relación.' },
    pillar: 'Common Cases'
  },
  {
    id: 'cag-001',
    topic: 'cancer_gastrico',
    difficulty: 'Staff',
    text: 'Según el Manual Chileno 2025, ¿cuál es el objetivo primordial del protocolo de biopsias de Sídney modificado en el tamizaje de cáncer gástrico?',
    options: ['Diagnosticar H. pylori únicamente', 'Estadificar la extensión de la Atrofia y Metaplasia Intestinal (OLGA/OLGIM)', 'Detectar linfoma MALT', 'Evaluar la presencia de esofagitis eosinofílica'],
    correctIndex: 1,
    explanation: 'El sistema OLGA/OLGIM permite identificar pacientes de alto riesgo (Estadios III/IV) que requieren vigilancia estrecha.',
    fisiopato: 'La cascada de Correa (Gastritis -> Atrofia -> Metaplasia -> Displasia -> Cáncer) es el sustrato para el desarrollo del tipo intestinal.',
    clinicalPearl: 'Chile tiene una de las tasas más altas de cáncer gástrico; el tamizaje oportuno salva vidas.',
    guideline: 'Manual Chileno de Gastroenterología 2025.',
    whyWrong: { 0: 'Es parte del proceso pero no el único fin.', 2: 'Menos frecuente.', 3: 'Se evalúa en el esófago, no con Sídney.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: PANCREATITIS (EXPANDIDO) ---
  {
    id: 'pan-004',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es la causa más frecuente de Pancreatitis Aguda a nivel mundial y en Chile?',
    options: ['Alcohol', 'Litiasis Biliar', 'Hipertrigliceridemia', 'Fármacos'],
    correctIndex: 1,
    explanation: 'La litiasis biliar representa más del 60-70% de los casos en Chile.',
    fisiopato: 'El paso de un cálculo micro o macroscópico por la papila genera obstrucción del conducto pancreático e hipertensión ductal.',
    clinicalPearl: 'Toda pancreatitis sin causa clara debe tener una ecografía abdominal para buscar colelitiasis.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Segunda causa.', 2: 'Causa importante si triglicéridos > 1000.', 3: 'Poco frecuente.' },
    pillar: 'Common Cases'
  },
  {
    id: 'pan-005',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: '¿En qué caso está indicado el uso profiláctico de antibióticos en Pancreatitis Aguda?',
    options: ['Necrosis pancreática > 30%', 'Pancreatitis aguda grave de entrada', 'En ningún caso de forma profiláctica', 'Si la amilasa es > 3000'],
    correctIndex: 2,
    explanation: 'Las guías actuales (IAP/APA/Atlanta) NO recomiendan antibióticos profilácticos, incluso en necrosis extensa.',
    fisiopato: 'No previenen la infección de la necrosis y aumentan el riesgo de infecciones fúngicas.',
    clinicalPearl: 'Solo use antibióticos si hay sospecha clínica o confirmación de necrosis infectada.',
    guideline: 'Manual Chileno 2025 / Guías de la IAP.',
    whyWrong: { 0: 'Obsoleto.', 1: 'Obsoleto.', 3: 'Sin relación.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: EII (EXPANDIDO) ---
  {
    id: 'eii-gen-002',
    topic: 'eii',
    difficulty: 'Staff',
    text: '¿Cuál es la principal diferencia histológica entre la Colitis Ulcerosa y la Enfermedad de Crohn?',
    options: ['La profundidad de la inflamación (Transmural vs Mucosa)', 'La presencia de abscesos de criptas', 'La distorsión arquitectural', 'La presencia de moco'],
    correctIndex: 0,
    explanation: 'La CU es una enfermedad de la mucosa/submucosa superficial, mientras que el Crohn afecta toda la pared (transmural).',
    fisiopato: 'La inflamación transmural del Crohn explica su tendencia a formar fístulas y estenosis.',
    clinicalPearl: 'Las biopsias endoscópicas a veces no ven la transmuralidad; la clínica es clave.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 1: 'En ambas.', 2: 'En ambas crónicas.', 3: 'Inespecífico.' },
    pillar: 'Board Prep'
  },
  {
    id: 'eii-gen-003',
    topic: 'eii',
    difficulty: 'Fellow',
    text: '¿Cuál es el tratamiento de mantención de primera línea para la Colitis Ulcerosa leve a moderada?',
    options: ['Corticoides orales', '5-ASA (Mesalazina) oral y rectal', 'Azatioprina', 'Infliximab'],
    correctIndex: 1,
    explanation: 'Los aminosalicilatos (5-ASA) son el pilar del tratamiento en CU leve/moderada.',
    fisiopato: 'Actúan localmente en la mucosa modulando mediadores de la inflamación.',
    clinicalPearl: 'La terapia combinada (oral + tópica) es superior a la oral sola, incluso en enfermedad extensa.',
    guideline: 'Manual Chileno 2025 / Guías AGA.',
    whyWrong: { 0: 'No sirven para mantención.', 2: 'Para casos refractarios o dependientes de corticoides.', 3: 'Para enfermedad moderada-grave.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: BIOLOGÍA Y GENÉTICA ---
  {
    id: 'bio-001',
    topic: 'biologia',
    difficulty: 'Subspecialist',
    text: 'En el Síndrome de Lynch (HNPCC), ¿cuál es el mecanismo genético subyacente que predispone al cáncer colorrectal?',
    options: ['Mutación en el gen supresor tumoral APC', 'Defecto en los genes de reparación de desajustes del ADN (MMR)', 'Mutación activadora en el protooncogén KRAS', 'Amplificación del gen HER2/neu'],
    correctIndex: 1,
    explanation: 'El Síndrome de Lynch se debe a mutaciones germinales en genes como MLH1, MSH2, MSH6 o PMS2.',
    fisiopato: 'La falla en la reparación de errores de replicación (MMR) genera inestabilidad de microsatélites (MSI-H) y rápida progresión tumoral.',
    clinicalPearl: 'Siga los criterios de Ámsterdam II para identificar familias con sospecha de Lynch.',
    guideline: 'Manual Chileno 2025 / Guías de Oncogenética.',
    whyWrong: { 0: 'Mecanismo de la Poliposis Adenomatosa Familiar (FAP).', 2: 'Ocurre en la progresión tumoral pero no es la causa hereditaria inicial.', 3: 'Asociado a cáncer de mama o gástrico avanzado.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: NUTRICIÓN E INMUNOLOGÍA ---
  {
    id: 'nut-001',
    topic: 'nutricion',
    difficulty: 'Staff',
    text: '¿Cuál es el sitio anatómico de mayor absorción de la Vitamina B12 (Cobalamina) a través de su unión con el Factor Intrínseco?',
    options: ['Duodeno', 'Yeyuno proximal', 'Íleon distal', 'Colon ascendente'],
    correctIndex: 2,
    explanation: 'El íleon distal posee receptores específicos (cubilina) para el complejo B12-Factor Intrínseco.',
    fisiopato: 'La absorción requiere de pH ácido gástrico, factor intrínseco, enzimas pancreáticas y un íleon terminal sano.',
    clinicalPearl: 'En pacientes con resección ileal > 60cm, la suplementación intramuscular de B12 es obligatoria de por vida.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Se absorbe Hierro.', 1: 'Se absorbe Ácido Fólico.', 3: 'Solo absorbe agua y electrolitos.' },
    pillar: 'Board Prep'
  },
  
  // --- SECTOR: MASLD (EXPANDIDO) ---
  {
    id: 'masld-002',
    topic: 'masld',
    difficulty: 'Fellow',
    text: '¿Cuál es el pilar fundamental del manejo de la esteatosis hepática metabólica?',
    options: ['Vitamina E', 'Baja de peso y cambios en estilo de vida', 'Metformina', 'Ácido Ursodesoxicólico'],
    correctIndex: 1,
    explanation: 'La pérdida de peso del 7-10% es la única medida que ha demostrado revertir la fibrosis.',
    fisiopato: 'Disminuye la lipotoxicidad y el estrés oxidativo hepatocelular.',
    clinicalPearl: 'La dieta mediterránea es la más recomendada.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Solo en casos seleccionados.', 2: 'No tiene rol en MASLD.', 3: 'Sin beneficio.' },
    pillar: 'Common Cases'
  },
  {
    id: 'masld-003',
    topic: 'masld',
    difficulty: 'Staff',
    text: '¿Cuál es la principal causa de muerte en pacientes con MASLD?',
    options: ['Hepatocarcinoma', 'Cirrosis descompensada', 'Enfermedad Cardiovascular', 'Hemorragia varicosa'],
    correctIndex: 2,
    explanation: 'Aunque el daño hepático es importante, la mayoría de los pacientes fallece por causas cardiovasculares.',
    fisiopato: 'El MASLD es la manifestación hepática del síndrome metabólico, compartiendo factores pro-aterogénicos.',
    clinicalPearl: 'Siempre evalúe el riesgo cardiovascular (Framingham/SCORE) en estos pacientes.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Aumentado pero no es la causa #1.', 1: 'Solo en estadios avanzados.', 3: 'Complicación de cirrosis.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: VÍAS BILIARES (EXPANDIDO) ---
  {
    id: 'vb-002',
    topic: 'vias_biliares',
    difficulty: 'Fellow',
    text: '¿Cuál es la tríada de Charcot?',
    options: ['Dolor, Ictericia, Masa palpable', 'Fiebre, Ictericia, Dolor HD', 'Vómitos, Dolor, Ictericia', 'Fiebre, Sepsis, Choque'],
    correctIndex: 1,
    explanation: 'Fiebre, ictericia y dolor en hipocondrio derecho definen la tríada de Charcot para colangitis.',
    fisiopato: 'Refleja la infección de la bilis estancada bajo presión.',
    clinicalPearl: 'La péntada de Reynolds añade choque y compromiso de conciencia.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Sugerente de cáncer.', 2: 'Inespecífico.', 3: 'Partes de la péntada.' },
    pillar: 'Must-Know'
  },
  {
    id: 'vb-003',
    topic: 'vias_biliares',
    difficulty: 'Staff',
    text: 'En un paciente con colecistitis aguda y riesgo quirúrgico prohibitivo, ¿cuál es la alternativa terapéutica?',
    options: ['Antibióticos indefinidos', 'Colecistostomía percutánea', 'Litotricia extracorpórea', 'CPRE'],
    correctIndex: 1,
    explanation: 'La colecistostomía drena la vesícula y resuelve el cuadro infeccioso agudo.',
    fisiopato: 'Descompone el órgano inflamado sin necesidad de cirugía mayor.',
    clinicalPearl: 'Es una medida de puente hacia la cirugía o definitiva en pacientes muy frágiles.',
    guideline: 'Tokyo Guidelines 2018.',
    whyWrong: { 0: 'Riesgo de recurrencia y sepsis.', 2: 'No se usa en colecistitis.', 3: 'No drena la vesícula.' },
    pillar: 'Staff Level'
  },

  // --- SECTOR: HEPATITIS (EXPANDIDO) ---
  {
    id: 'hep-002',
    topic: 'hepatitis',
    difficulty: 'Fellow',
    text: '¿Qué marcador indica infección crónica por Hepatitis B con alta replicación viral y alta infectividad?',
    options: ['Anti-HBs', 'HBsAg (+) y HBeAg (+)', 'Anti-HBc IgM', 'Anti-HBe (+)'],
    correctIndex: 1,
    explanation: 'El antígeno e (HBeAg) es el marcador de replicación activa.',
    fisiopato: 'Es una proteína soluble producida durante la replicación viral intensa.',
    clinicalPearl: 'El paso de HBeAg (+) a Anti-HBe (+) se llama seroconversión e indica mejor control inmune.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Indica inmunidad.', 2: 'Indica infección aguda.', 3: 'Indica baja replicación.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: HDB (EXPANDIDO) ---
  {
    id: 'hdb-002',
    topic: 'hdb',
    difficulty: 'Fellow',
    text: '¿Cuál es el examen de primera línea ante una HDB hemodinámicamente estable?',
    options: ['AngioTAC de abdomen', 'Colonoscopia', 'Cápsula endoscópica', 'Arteriografía'],
    correctIndex: 1,
    explanation: 'La colonoscopia permite diagnóstico y eventual tratamiento.',
    fisiopato: 'Visualización directa de la mucosa colónica.',
    clinicalPearl: 'Una buena preparación es clave para el éxito de la colonoscopia en sangrado.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Se usa si hay inestabilidad o sangrado masivo activo.', 2: 'Para estudio de intestino delgado.', 3: 'Solo terapéutica si el sangrado es masivo.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: BIOLOGÍA (EXPANDIDO) ---
  // --- SECTOR: TRASTORNOS MOTORES (EXPANDIDO) ---
  {
    id: 'mot-001',
    topic: 'motores_esofago',
    difficulty: 'Fellow',
    text: '¿Cuál es el hallazgo manométrico indispensable para el diagnóstico de Acalasia según Chicago 4.0?',
    options: ['Ausencia de peristalsis', 'Presión de relajación integrada (IRP) elevada', 'Contracciones prematuras', 'Espasmo esofágico'],
    correctIndex: 1,
    explanation: 'La relajación incompleta del esfínter esofágico inferior (IRP elevado) es el requisito sine qua non.',
    fisiopato: 'Se produce por la pérdida de neuronas inhibidoras en el plexo mientérico de Auerbach.',
    clinicalPearl: 'Si el IRP es normal, no puede ser acalasia clásica.',
    guideline: 'Chicago Classification 4.0.',
    whyWrong: { 0: 'Se ve en acalasia pero no es lo que define la falla de relajación.', 2: 'Define acalasia tipo III.', 3: 'Otra entidad.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: CÁNCER ESÓFAGO (EXPANDIDO) ---
  {
    id: 'ce-001',
    topic: 'cancer_esofago',
    difficulty: 'Staff',
    text: '¿Cuál es el principal factor de riesgo para el Adenocarcinoma de esófago?',
    options: ['Tabaco y alcohol', 'Reflujo gastroesofágico crónico y Esófago de Barrett', 'Ingesta de cáusticos', 'Acalasia de larga data'],
    correctIndex: 1,
    explanation: 'La secuencia metaplasia-displasia-adenocarcinoma es la vía principal vinculada al ERGE.',
    fisiopato: 'La exposición ácida crónica induce el cambio de epitelio escamoso a columnar especializado (Barrett).',
    clinicalPearl: 'El adenocarcinoma es hoy más frecuente que el escamoso en países occidentales.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Factores principales para el carcinoma escamoso.', 2: 'Aumenta riesgo de escamoso.', 3: 'Aumenta riesgo de escamoso.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: CÁNCER GÁSTRICO (EXPANDIDO) ---
  {
    id: 'cg-001',
    topic: 'cancer_gastrico',
    difficulty: 'Subspecialist',
    text: '¿Qué significa un score OLGA III o IV en una biopsia gástrica?',
    options: ['Presencia de H. pylori activo', 'Alto riesgo de desarrollar cáncer gástrico por atrofia severa', 'Metaplasia intestinal de tipo incompleto', 'Displasia de alto grado'],
    correctIndex: 1,
    explanation: 'OLGA evalúa la extensión y severidad de la atrofia gástrica.',
    fisiopato: 'La atrofia glandular es un paso avanzado en la cascada de Correa.',
    clinicalPearl: 'Pacientes con OLGA III/IV requieren vigilancia endoscópica estrecha cada 1-2 años.',
    guideline: 'Sistemas de estadificación OLGA/OLGIM.',
    whyWrong: { 0: 'No mide actividad bacteriana.', 2: 'OLGIM mide metaplasia.', 3: 'Displasia no es atrofia.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ÚLCERA PÉPTICA (EXPANDIDO) ---
  {
    id: 'up-001',
    topic: 'ulcera_peptica',
    difficulty: 'Fellow',
    text: '¿Cuál es la localización más frecuente de la úlcera péptica secundaria a AINES?',
    options: ['Fundus gástrico', 'Cuerpo gástrico', 'Antro gástrico', 'Bulbo duodenal'],
    correctIndex: 2,
    explanation: 'Los AINES dañan principalmente el antro por efectos tópicos y sistémicos.',
    fisiopato: 'Inhibición de la COX-1 que reduce la síntesis de prostaglandinas protectoras.',
    clinicalPearl: 'La úlcera por AINES suele ser silenciosa hasta que sangra.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Poco frecuente.', 1: 'Poco frecuente.', 3: 'Más típico de H. pylori.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: CIRROSIS (MÁS PREGUNTAS) ---
  {
    id: 'cir-011',
    topic: 'cirrosis',
    difficulty: 'Fellow',
    text: '¿Cuál es el tratamiento de primera línea para la Peritonitis Bacteriana Espontánea (PBE)?',
    options: ['Ciprofloxacino oral', 'Cefotaxima o Ceftriaxona EV', 'Amoxicilina/Ácido Clavulánico', 'Vancomicina'],
    correctIndex: 1,
    explanation: 'Cefalosporinas de 3ra generación cubren los gérmenes entéricos más frecuentes.',
    fisiopato: 'Traslocación bacteriana desde el intestino al líquido ascítico.',
    clinicalPearl: 'Siempre use albúmina (1.5g/kg día 1 y 1.0g/kg día 3) para prevenir síndrome hepatorrenal.',
    guideline: 'Guías AASLD/EASL.',
    whyWrong: { 0: 'Usado para profilaxis, no tratamiento de elección inicial en PBE grave.', 2: 'Menor espectro/evidencia.', 3: 'Cubre Gram (+), no es el primer paso.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: HDA (MÁS PREGUNTAS) ---
  // --- SECTOR: CIRROSIS (EXPANDIDO 2) ---
  {
    id: 'cir-012',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el vasopresor de elección actual para el tratamiento del Síndrome Hepatorrenal tipo 1 (HRS-AKI)?',
    options: ['Norepinefrina', 'Terlipresina', 'Dopamina', 'Octreotide/Midodrina'],
    correctIndex: 1,
    explanation: 'La Terlipresina ha demostrado superioridad en la reversión del SHR en ensayos controlados recientes (CONFIRM trial).',
    fisiopato: 'Actúa sobre los receptores V1 induciendo vasoconstricción esplácnica potente, lo que reduce la presión portal y mejora el flujo renal.',
    clinicalPearl: 'Cuidado con la hipoxemia; la terlipresina puede causar edema pulmonar en pacientes predispuestos.',
    guideline: 'Manual Chileno 2025 / Guías EASL-SHR.',
    whyWrong: { 0: 'Alternativa válida si no hay terlipresina, pero requiere vía central.', 2: 'Contraindicado en cirrosis.', 3: 'Mucho menos efectivo.' },
    pillar: 'Mastery'
  },
  {
    id: 'cir-013',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: 'En un paciente con encefalopatía hepática recurrente a pesar de lactulosa, ¿qué fármaco debe añadirse?',
    options: ['Neomicina', 'Rifaximina', 'Metronidazol', 'Probióticos'],
    correctIndex: 1,
    explanation: 'La Rifaximina reduce significativamente las hospitalizaciones por encefalopatía.',
    fisiopato: 'Antibiótico no absorbible que modula la microbiota productora de amoníaco.',
    clinicalPearl: 'La dosis estándar es 550mg cada 12 horas.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Riesgo de ototoxicidad/nefrotoxicidad.', 2: 'Toxicidad neurológica a largo plazo.', 3: 'Sin evidencia sólida como terapia única.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: HDA (EXPANDIDO 2) ---
  {
    id: 'hda-005',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál es el manejo inicial crítico de un paciente con sospecha de HDA varicosa?',
    options: ['Endoscopia inmediata', 'Reposición de volumen, Antibióticos (Ceftriaxona) y Terlipresina/Somatostatina', 'Transfusión masiva de glóbulos rojos', 'Sonda de Sengstaken-Blakemore'],
    correctIndex: 1,
    explanation: 'La estabilización hemodinámica y el inicio de drogas vasoactivas/antibióticos antes de la endoscopia mejora la sobrevida.',
    fisiopato: 'Los antibióticos previenen la PBE y el resangrado precoz al reducir la presión portal.',
    clinicalPearl: 'El antibiótico es mandatorio en todo cirrótico que sangra.',
    guideline: 'Baveno VII.',
    whyWrong: { 0: 'Primero se estabiliza.', 2: 'Riesgo de aumentar presión portal (ver meta restrictiva).', 3: 'Solo como rescate extremo.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: ERGE (EXPANDIDO 2) ---
  {
    id: 'erge-004',
    topic: 'erge',
    difficulty: 'Subspecialist',
    text: '¿Qué hallazgo en la pH-impedanciometría de 24h confirma el diagnóstico de ERGE en un paciente con síntomas típicos y endoscopia normal?',
    options: ['Tiempo de exposición ácida (AET) > 6%', 'Número de reflujos > 40', 'Presión del EEI < 10 mmHg', 'Hernia hiatal de 2 cm'],
    correctIndex: 0,
    explanation: 'Un AET > 6% es el estándar de oro para confirmar reflujo patológico.',
    fisiopato: 'Refleja la falla de los mecanismos de barrera y aclaramiento esofágico.',
    clinicalPearl: 'Un AET < 4% se considera normal.',
    guideline: 'Consenso de Lyon 2.0 (2023).',
    whyWrong: { 1: 'Sugerente pero no diagnóstico por sí solo.', 2: 'Mide motilidad, no reflujo.', 3: 'Hallazgo anatómico, no funcional.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DOLOR ABDOMINAL (EXPANDIDO 2) ---
  {
    id: 'da-006',
    topic: 'dolor_abdominal',
    difficulty: 'Staff',
    text: '¿Qué signo clínico es más predictivo de Apendicitis Aguda?',
    options: ['Signo de Blumberg', 'Migración del dolor desde epigastrio a FID', 'Fiebre > 39°C', 'Vómitos profusos'],
    correctIndex: 1,
    explanation: 'La cronología de Murphy (migración) es altamente específica en la historia clínica.',
    fisiopato: 'La distensión apendicular inicial produce dolor visceral (epigastrio) y la inflamación del peritoneo parietal produce dolor somático (FID).',
    clinicalPearl: 'En ancianos, estos signos pueden ser muy sutiles.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Indica peritonitis, pero no es específico de apéndice.', 2: 'Suele ser febrícula; fiebre alta sugiere complicación.', 3: 'Inespecífico.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: CIRROSIS (AVANZADO - AASLD/EASL) ---
  {
    id: 'cir-014',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el criterio para el diagnóstico de Fallo Hepático Agudo sobre Crónico (ACLF) según la escala EASL-CLIF?',
    options: ['Presencia de ictericia y ascitis únicamente', 'Fallo de al menos un órgano (renal, cerebral, coagulación, circulatorio, respiratorio o hepático) con mortalidad >15% a 28 días', 'MELD > 30', 'Presencia de várices esofágicas sangrantes'],
    correctIndex: 1,
    explanation: 'El ACLF se define por fallo orgánico sistémico e inflamación intensa en un paciente con cirrosis previa.',
    fisiopato: 'Se gatilla por un evento precipitante (infección, alcohol, sangrado) que genera una "tormenta de citoquinas" y daño multiorgánico.',
    clinicalPearl: 'El fallo renal (creatinina > 2.0) es el fallo de órgano más frecuente en ACLF.',
    guideline: 'EASL-CLIF Consortium / CANONIC Study.',
    whyWrong: { 0: 'Eso es cirrosis descompensada simple.', 2: 'El MELD mide severidad pero no define ACLF per se.', 3: 'Es un gatillo, no la definición del síndrome.' },
    pillar: 'Mastery'
  },
  {
    id: 'cir-015',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: 'En un paciente con cirrosis y várices esofágicas pequeñas que nunca han sangrado, ¿cuál es la recomendación de Baveno VII para iniciar profilaxis primaria con Betabloqueadores No Selectivos (BBNS)?',
    options: ['Solo si el paciente es Child-Pugh C', 'Si las várices presentan "puntos rojos" o el paciente es Child-Pugh B/C', 'A todo paciente con diagnóstico de cirrosis independientemente del tamaño', 'Solo si el gradiente de presión portal es > 20 mmHg'],
    correctIndex: 1,
    explanation: 'Várices pequeñas con signos rojos o en hígados más descompensados (B/C) tienen alto riesgo de sangrado.',
    fisiopato: 'Los BBNS (Carvedilol preferido) reducen el flujo portal por bloqueo beta-2 (vasoconstricción esplácnica) y beta-1 (baja gasto cardiaco).',
    clinicalPearl: 'Carvedilol es más potente que Propranolol en reducir el gradiente de presión portal.',
    guideline: 'Baveno VII Consensus.',
    whyWrong: { 0: 'Demasiado restrictivo.', 2: 'No indicado si no hay várices o si son pequeñas sin riesgo.', 3: 'No es práctico medir gradiente en todos.' },
    pillar: 'Common Cases'
  },
  {
    id: 'cir-016',
    topic: 'cirrosis',
    difficulty: 'Fellow',
    text: '¿Cuál es la conducta recomendada ante un paciente con cirrosis que presenta un nódulo de 1.5 cm en una ecografía de screening?',
    options: ['Biopsia percutánea inmediata', 'AngioTAC o Resonancia con contraste dinámico (4 fases)', 'Repetir ecografía en 3 meses', 'Medir Alfa-fetoproteína y si es normal, ignorar'],
    correctIndex: 1,
    explanation: 'El diagnóstico de Hepatocarcinoma (HCC) en cirrosis es radiológico si cumple criterios LI-RADS 5.',
    fisiopato: 'El HCC tiene una vascularización arterial predominante (wash-in) y lavado venoso (wash-out) característico.',
    clinicalPearl: 'Si el TAC/RM no son concluyentes, se debe realizar el otro examen o considerar biopsia.',
    guideline: 'AASLD / EASL Hepatocellular Carcinoma Guidelines.',
    whyWrong: { 0: 'Riesgo de siembra y no es necesaria si la imagen es típica.', 2: 'Retrasa el diagnóstico de una lesión potencialmente curable.', 3: 'La AFP normal no descarta HCC.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: PANCREATITIS (AVANZADO - IAP/APA) ---
  {
    id: 'pan-006',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es la estrategia nutricional preferida en un paciente con pancreatitis aguda grave?',
    options: ['Nutrición parenteral total precoz (primeras 24h)', 'Régimen cero absoluto hasta que la amilasa sea normal', 'Nutrición enteral por sonda nasoyeyunal o nasogástrica precoz', 'Dieta blanda líquida a tolerancia desde el ingreso'],
    correctIndex: 2,
    explanation: 'La nutrición enteral precoz mantiene la barrera intestinal y reduce la traslocación bacteriana.',
    fisiopato: 'El ayuno prolongado atrofia las vellosidades intestinales, facilitando que las bacterias entéricas infecten la necrosis pancreática.',
    clinicalPearl: 'La sonda nasogástrica es tan segura y efectiva como la nasoyeyunal.',
    guideline: 'IAP/APA Evidence-based guidelines.',
    whyWrong: { 0: 'Aumenta el riesgo de infecciones y complicaciones metabólicas.', 1: 'Aumenta el riesgo de infección de la necrosis.', 3: 'Puede no ser tolerada en cuadros graves iniciales.' },
    pillar: 'Board Prep'
  },
  {
    id: 'pan-007',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: 'Un paciente con pancreatitis presenta al día 21 fiebre, leucocitosis y gas en una colección peripancreática en el TAC. ¿Cuál es el microorganismo más frecuentemente aislado?',
    options: ['Staphylococcus aureus', 'Escherichia coli', 'Bacteroides fragilis', 'Candida albicans'],
    correctIndex: 1,
    explanation: 'Los bacilos gramnegativos entéricos (E. coli, Klebsiella) son los principales patógenos de la necrosis infectada.',
    fisiopato: 'La traslocación bacteriana desde el colon es la ruta principal de infección del tejido necrótico.',
    clinicalPearl: 'El uso preventivo de probióticos no ha demostrado reducir esta complicación y puede ser peligroso.',
    guideline: 'IAP/APA Guidelines / Manual Chileno 2025.',
    whyWrong: { 0: 'Menos común (asociado a catéteres).', 2: 'Se encuentra pero menos frecuente que E. coli.', 3: 'Suele ser una sobreinfección tras antibióticos prolongados.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HEPATITIS B (AVANZADO - AASLD/EASL) ---
  {
    id: 'hep-003',
    topic: 'hepatitis',
    difficulty: 'Subspecialist',
    text: 'Según las guías AASLD 2024, ¿en qué paciente con Hepatitis B crónica Inmunotolerante (Fase 1: HBeAg+, carga viral alta, ALT normal) se justifica iniciar tratamiento?',
    options: ['En todos los pacientes independientemente de la edad', 'En mayores de 30-35 años o con antecedentes familiares de HCC', 'Solo si la carga viral supera los 10 millones de UI/mL', 'Nunca se trata en esta fase'],
    correctIndex: 1,
    explanation: 'La edad avanzada y el riesgo familiar aumentan la probabilidad de daño histológico silente.',
    fisiopato: 'La integración del ADN viral en el genoma del hepatocito puede ocurrir incluso con ALT normal, predisponiendo a oncogénesis.',
    clinicalPearl: 'El objetivo es reducir la incidencia de HCC a largo plazo.',
    guideline: 'AASLD 2024 Hepatitis B Update.',
    whyWrong: { 0: 'En niños y jóvenes suele haber baja tasa de progresión.', 2: 'La carga viral sola no define el inicio si no hay daño.', 3: 'Existe una flexibilización reciente hacia el tratamiento más precoz.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: VÍAS BILIARES (AVANZADO - TOKYO) ---
  {
    id: 'vb-004',
    topic: 'vias_biliares',
    difficulty: 'Staff',
    text: 'De acuerdo a los Criterios de Tokyo 2018, ¿qué hallazgo define a una Colecistitis Aguda Grado II (Moderada)?',
    options: ['Falla orgánica (ej: hipotensión que requiere vasopresores)', 'Leucocitos > 18.000, Masa palpable en HD, o Duración síntomas > 72h', 'Dolor abdominal leve sin masa ni fiebre', 'Presencia de colelitiasis sin Murphy'],
    correctIndex: 1,
    explanation: 'El grado II se asocia a una mayor inflamación local que dificulta la colecistectomía.',
    fisiopato: 'La inflamación hidrópica o gangrenosa marcada genera una anatomía dificultosa y más riesgo de lesiones de vía biliar.',
    clinicalPearl: 'Pacientes Grado II se benefician de colecistectomía temprana por cirujanos expertos.',
    guideline: 'Tokyo Guidelines 2018 (TG18).',
    whyWrong: { 0: 'Eso es Grado III (Severa).', 2: 'Grado I (Leve).', 3: 'No cumple criterios de colecistitis.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: MASLD (AVANZADO - CONSENSO 2023) ---
  {
    id: 'masld-004',
    topic: 'masld',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el criterio diagnóstico para MASLD según la nueva nomenclatura multilingüe de 2023?',
    options: ['Esteatosis hepática + al menos un factor de riesgo cardiometabólico', 'Esteatosis hepática de cualquier origen', 'Esteatosis + consumo de alcohol > 30g/día', 'Solo presencia de obesidad'],
    correctIndex: 0,
    explanation: 'El cambio de NAFLD a MASLD busca eliminar el estigma y enfatizar el origen metabólico.',
    fisiopato: 'La resistencia a la insulina es el eje que conduce a la acumulación de triglicéridos en el hepatocito.',
    clinicalPearl: 'Si no hay factores metabólicos y hay esteatosis, se cataloga como "Criptogénica".',
    guideline: 'Multi-society Delphi Consensus on NAFLD nomenclature (2023).',
    whyWrong: { 1: 'Muy vago; excluye causas secundarias.', 2: 'Eso sería MetALD (consumo mixto).', 3: 'Factor de riesgo, no definición.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: EII (AVANZADO - ECCO/AGA) ---
  {
    id: 'eii-016',
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: 'En un paciente con Colitis Ulcerosa en tratamiento con Infliximab que presenta pérdida secundaria de respuesta, ¿cuál es el primer paso recomendado?',
    options: ['Cambiar inmediatamente a otro biológico (ej: Vedolizumab)', 'Medir niveles valle del fármaco y anticuerpos anti-Infliximab', 'Aumentar la dosis a 10mg/kg empíricamente', 'Reiniciar corticoides de forma indefinida'],
    correctIndex: 1,
    explanation: 'El TDM (Therapeutic Drug Monitoring) guía el ajuste racional de la terapia.',
    fisiopato: 'La pérdida de respuesta puede ser por inmunogenicidad (anticuerpos) o por consumo acelerado del fármaco (niveles bajos).',
    clinicalPearl: 'Niveles de Infliximab > 5-7 ug/mL suelen ser protectores.',
    guideline: 'Guías de Monitoreo Terapéutico de Fármacos (TDM).',
    whyWrong: { 0: 'Inadecuado sin racionalizar; puede perderse un fármaco útil.', 2: 'Más caro y menos preciso que monitorizar primero.', 3: 'Error grave en el manejo a largo plazo.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HDA (AVANZADO - BAVENO VII) ---
  {
    id: 'hda-006',
    topic: 'hda',
    difficulty: 'Staff',
    text: '¿Cuál es el rol del TIPS precoz (Early-TIPS) en el manejo de la hemorragia varicosa según Baveno VII?',
    options: ['En todos los cirróticos que sangran', 'En pacientes de alto riesgo (Child B con sangrado activo o Child C < 14 puntos) dentro de las 72h', 'Solo como terapia de rescate tras falla de segunda endoscopia', 'Está contraindicado en la fase aguda'],
    correctIndex: 1,
    explanation: 'El TIPS precoz ha demostrado reducir significativamente el resangrado y la mortalidad en grupos de alto riesgo.',
    fisiopato: 'Descomprime de forma inmediata el sistema portal, eliminando la causa mecánica del sangrado.',
    clinicalPearl: 'No confunda "Precoz" con "Urgencia/Rescate". El precoz se hace preventivo tras la primera estabilización.',
    guideline: 'Baveno VII / EASL Guidelines.',
    whyWrong: { 0: 'Excesivo; muchos responden bien a bandas.', 2: 'Eso es TIPS de rescate.', 3: 'Es el momento ideal para los de alto riesgo.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: CELIACA (AVANZADO - ACG/ESPGHAN) ---
  {
    id: 'cel-005',
    topic: 'celiaca',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la conducta recomendada en un paciente adulto con sospecha de Enfermedad Celiaca, Anti-tTG IgA > 10 veces el límite superior normal y Anti-Endomisio positivo, según las guías ACG recientes?',
    options: ['Iniciar dieta libre de gluten sin biopsia', 'Realizar biopsia duodenal obligatoriamente para confirmar', 'Realizar estudio genético HLA-DQ2/DQ8', 'Repetir la serología en 3 meses'],
    correctIndex: 1,
    explanation: 'A diferencia de las guías pediátricas (ESPGHAN), en adultos la ACG sigue recomendando la biopsia para confirmar el diagnóstico.',
    fisiopato: 'La biopsia permite establecer la severidad (Marsh) y sirve de base para evaluar la recuperación mucosa futura.',
    clinicalPearl: 'El diagnóstico "no-biopsy" en adultos sigue siendo controvertido y no es el estándar general.',
    guideline: 'ACG Clinical Guidelines: Diagnosis and Management of Celiac Disease (2023).',
    whyWrong: { 0: 'Solo aceptado en pediatría bajo criterios estrictos.', 2: 'Innecesario si la serología es positiva; tiene valor predictivo negativo.', 3: 'Retrasa el diagnóstico.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: INTESTINO DELGADO (SIBO) ---
  {
    id: 'sibo-001',
    topic: 'intestino_delgado',
    difficulty: 'Fellow',
    text: '¿Cuál es el valor de corte para el diagnóstico de SIBO usando el Test de Aliento con Lactulosa según el consenso de América del Norte?',
    options: ['Aumento de Hidrógeno >= 20 ppm sobre el basal en los primeros 90 min', 'Aumento de Metano >= 50 ppm en cualquier momento', 'Aumento de Hidrógeno >= 10 ppm a los 120 min', 'Cualquier presencia de Metano al inicio'],
    correctIndex: 0,
    explanation: 'Un aumento precoz de H2 indica la presencia de bacterias en el intestino delgado.',
    fisiopato: 'La fermentación bacteriana prematura del sustrato (lactulosa) antes de llegar al colon genera el pico de gas detectable.',
    clinicalPearl: 'Si hay metano >= 10 ppm en cualquier momento, se diagnostica IMO (Intestinal Methanogen Overgrowth).',
    guideline: 'North American Breath Test Consensus.',
    whyWrong: { 1: 'Punto de corte excesivo.', 2: 'Demasiado tarde; puede ser fermentación colónica normal.', 3: 'El corte de metano es 10 ppm.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PÁNCREAS (TUMORES QUÍSTICOS - FUKUOKA/AGA) ---
  {
    id: 'pan-008',
    topic: 'pancreatitis',
    difficulty: 'Staff',
    text: 'En un Neoplasia Mucinosa Papilar Intraductal (IPMN), ¿cuál de los siguientes se considera un "Estigma de Alta Sospecha" (High-risk stigmata) de malignidad según Fukuoka 2017?',
    options: ['Quiste > 3 cm', 'Pared del quiste engrosada', 'Nódulo mural sólido con realce >= 5 mm o conducto pancreático principal >= 10 mm', 'Linfadenopatía de 1 cm'],
    correctIndex: 2,
    explanation: 'Los estigmas de alta sospecha obligan a considerar la cirugía inmediata.',
    fisiopato: 'Reflejan la transformación de un epitelio displásico a un adenocarcinoma invasor.',
    clinicalPearl: 'El tamaño de 3cm es una "Worrisome feature", no un estigma de alta sospecha per se.',
    guideline: 'International Association of Pancreatology (IAP) - Fukuoka Criteria.',
    whyWrong: { 0: 'Es "worrisome feature".', 1: 'Es "worrisome feature".', 3: 'Inespecífico.' },
    pillar: 'Staff Level'
  },

  // --- SECTOR: NUTRICIÓN (AVANZADO - ESPEN) ---
  {
    id: 'nut-002',
    topic: 'nutricion',
    difficulty: 'Subspecialist',
    text: 'En un paciente con cirrosis descompensada y sarcopenia, ¿cuál es el aporte proteico diario recomendado por las guías ESPEN?',
    options: ['0.8 g/kg/día', '1.2 - 1.5 g/kg/día', '2.0 g/kg/día', 'Proteínas restringidas a 0.5 g/kg si hay encefalopatía'],
    correctIndex: 1,
    explanation: 'Los pacientes cirróticos están en un estado hipercatabólico y requieren mayor aporte proteico.',
    fisiopato: 'La falta de síntesis hepática y la resistencia anabólica muscular obligan a suministrar más aminoácidos para prevenir el balance nitrogenado negativo.',
    clinicalPearl: 'La restricción proteica en encefalopatía es un error histórico que aumenta la mortalidad.',
    guideline: 'ESPEN guidelines on clinical nutrition in liver disease.',
    whyWrong: { 0: 'Insuficiente para cirróticos.', 2: 'Excesivo, difícil de tolerar y sin evidencia de beneficio extra.', 3: 'Aumenta sarcopenia y empeora el pronóstico.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CIRROSIS (EXPANDIDO 3 - REBORN) ---
  {
    id: 'cir-017',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: 'En un paciente con cirrosis y ascitis refractaria, ¿cuál es el nivel de sodio urinario que sugiere una respuesta adecuada a diuréticos?',
    options: ['NaU < 10 mEq/L', 'NaU > 78 mEq/L', 'NaU entre 20-40 mEq/L', 'NaU indetectable'],
    correctIndex: 1,
    explanation: 'Un sodio urinario > 78 mEq/L (en recolección de 24h) indica que el paciente está eliminando la carga de sodio dietética estándar (88 mEq).',
    fisiopato: 'Refleja que el sistema RAA no está máximamente activado y que el túbulo renal aún responde al bloqueo de aldosterona.',
    clinicalPearl: 'Si el NaU > 78 y el paciente no baja de peso, el problema es la dieta (no adherencia).',
    guideline: 'Manual Chileno 2025 / Guías AASLD Ascites.',
    whyWrong: { 0: 'Indica avidez extrema por el sodio, falla de diuréticos.', 2: 'Infraterapéutico.', 3: 'Indica insuficiencia renal pre-renal severa.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'cir-018',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el "Punto Cero" hemodinámico para definir Hipertensión Portal Clínicamente Significativa (HPCS) según Baveno VII?',
    options: ['GPVH >= 5 mmHg', 'GPVH >= 10 mmHg', 'GPVH >= 12 mmHg', 'Presión portal absoluta > 20 mmHg'],
    correctIndex: 1,
    explanation: 'Un Gradiente de Presión Venosa Hepática >= 10 mmHg es el predictor más fuerte de desarrollo de várices y descompensación.',
    fisiopato: 'Este umbral marca la falla de los mecanismos de compensación vascular intrahepática y el inicio de la formación de colaterales portosistémicas.',
    clinicalPearl: 'El diagnóstico de HPCS se puede hacer de forma no invasiva con Elastografía Hepática (>25 kPa).',
    guideline: 'Baveno VII Practice Guidelines.',
    whyWrong: { 0: 'Límite superior normal.', 2: 'Umbral clásico para ruptura de várices, pero la HPCS empieza en 10.', 3: 'La presión absoluta no es útil sin restar la presión de la vena cava (gradiente).' },
    pillar: 'Mastery'
  },
  {
    id: 'cir-019',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: 'En un paciente cirrótico con Na sérico de 122 mEq/L persistente, ¿cuál es el manejo de elección según el Consenso EASL?',
    options: ['Uso de Tolvaptán a dosis altas', 'Restricción de líquidos (< 1000cc/día) y retiro de diuréticos', 'Reposición agresiva con Cloruro de Sodio 3%', 'Administración de Albúmina 1g/kg/día'],
    correctIndex: 1,
    explanation: 'La hiponatremia dilucional en cirrosis se maneja principalmente con restricción hídrica.',
    fisiopato: 'Es causada por una secreción no osmótica de ADH secundaria a la vasodilatación esplácnica extrema.',
    clinicalPearl: 'El Tolvaptán está aprobado pero su uso es limitado por costo y riesgo de hepatotoxicidad; la restricción es el pilar.',
    guideline: 'EASL Clinical Practice Guidelines: Management of decompensated cirrhosis.',
    whyWrong: { 0: 'Solo casos refractarios selectos.', 2: 'Peligro de mielinolisis pontina y aumento de ascitis.', 3: 'No corrige la causa dilucional.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: EII (EXPANDIDO 3 - REBORN) ---
  {
    id: 'eii-017',
    topic: 'eii',
    difficulty: 'Fellow',
    text: '¿Qué marcador fecal es el más sensible para predecir una recaída clínica en un paciente con Enfermedad de Crohn en remisión aparente?',
    options: ['Calprotectina Fecal', 'Lactoferrina', 'Sangre oculta en deposiciones', 'Coprocultivo'],
    correctIndex: 0,
    explanation: 'La calprotectina refleja la migración de neutrófilos a la mucosa y precede a los síntomas.',
    fisiopato: 'Es una proteína de unión al calcio resistente a la degradación proteolítica, proporcional a la actividad inflamatoria intestinal.',
    clinicalPearl: 'Valores > 150-250 ug/g sugieren inflamación activa significativa.',
    guideline: 'STRIDE-II Consensus ECCO.',
    whyWrong: { 1: 'Útil pero menos estandarizada que calprotectina.', 2: 'Inespecífica.', 3: 'Evalúa infección, no actividad basal.' },
    pillar: 'Must-Know'
  },
  {
    id: 'eii-018',
    topic: 'eii',
    difficulty: 'Subspecialist',
    text: 'En el algoritmo STRIDE-II, ¿cuál es el objetivo terapéutico de Largo Plazo (Ultimate Goal) en EII?',
    options: ['Remisión clínica (sin síntomas)', 'Remisión profunda (Clínica + Endoscópica + Histológica/Transmural)', 'Normalización de la Proteína C Reactiva', 'Ausencia de necesidad de cirugía'],
    correctIndex: 1,
    explanation: 'La curación mucosa y la normalización de la calidad de vida son las metas finales para evitar daño estructural.',
    fisiopato: 'La inflamación subclínica persistente conduce a fibrosis, estenosis y mayor riesgo de cáncer colorrectal.',
    clinicalPearl: 'No se conforme con que el paciente "se sienta bien"; busque la remisión endoscópica.',
    guideline: 'STRIDE-II Consensus (2021).',
    whyWrong: { 0: 'Meta a corto plazo.', 2: 'Meta intermedia.', 3: 'Resultado de una meta bien lograda.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HDA (EXPANDIDO 3) ---
  {
    id: 'hda-007',
    topic: 'hda',
    difficulty: 'Staff',
    text: '¿Cuál es el manejo endoscópico de elección para una úlcera con estigma de Forrest IIa (Vaso visible)?',
    options: ['Solo inyección de Adrenalina', 'Esclerosis con alcohol absoluto', 'Terapia combinada (Adrenalina + clip o termocoagulación)', 'Observación y manejo con IBP EV solo'],
    correctIndex: 2,
    explanation: 'La terapia dual reduce significativamente el riesgo de resangrado en comparación con la monoterapia.',
    fisiopato: 'La adrenalina genera vasoconstricción y taponamiento mecánico temporal, mientras que el clip o calor proporcionan hemostasia definitiva.',
    clinicalPearl: 'Nunca use adrenalina como terapia única.',
    guideline: 'ESGE Guidelines / Manual Chileno 2025.',
    whyWrong: { 0: 'Alta tasa de resangrado.', 1: 'Riesgo de perforación gástrica.', 3: 'Riesgo de sangrado masivo inminente.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PANCREATITIS (EXPANDIDO 3) ---
  {
    id: 'pan-010',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es el mejor predictor temprano de gravedad en Pancreatitis Aguda a las 24 horas del ingreso?',
    options: ['Nivel de Amilasa sérica', 'BUN > 20 mg/dL o su incremento', 'Puntaje de Ranson al ingreso', 'Presencia de náuseas'],
    correctIndex: 1,
    explanation: 'El aumento del BUN refleja falla en la resucitación con fluidos y es un marcador de hipoperfusión orgánica.',
    fisiopato: 'La hemoconcentración y el daño renal incipiente son predictores de falla multiorgánica persistente.',
    clinicalPearl: 'Un BUN que no baja con fluidos sugiere mal pronóstico.',
    guideline: 'ACG Guideline: Management of Acute Pancreatitis.',
    whyWrong: { 0: 'No tiene valor pronóstico.', 2: 'Solo se completa a las 48h (retrospectivo).', 3: 'Inespecífico.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: HEPATITIS VIRAL (EXPANDIDO 3 - AASLD) ---
  {
    id: 'hep-004',
    topic: 'hepatitis',
    difficulty: 'Subspecialist',
    text: 'En una paciente con Hepatitis B crónica que desea embarazo y tiene carga viral > 200,000 UI/mL, ¿cuál es la conducta recomendada?',
    options: ['Iniciar Tenofovir en el tercer trimestre (28 semanas)', 'Contraindicar el embarazo', 'Iniciar tratamiento solo después del parto', 'Indicar cesárea obligatoria'],
    correctIndex: 0,
    explanation: 'Tenofovir (TDF) reduce la carga viral y disminuye el riesgo de transmisión vertical al feto.',
    fisiopato: 'La alta carga viral materna es el principal factor de riesgo para falla de la inmunoprofilaxis neonatal (vacuna + IG).',
    clinicalPearl: 'El TDF es seguro durante la lactancia.',
    guideline: 'AASLD 2024 Hepatitis B Guidelines.',
    whyWrong: { 1: 'No hay razón para contraindicar.', 2: 'Riesgo de transmisión vertical muy alto.', 3: 'El parto vaginal no está contraindicado si la carga viral está controlada.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ERGE (EXPANDIDO 3 - LYON 2.0) ---
  {
    id: 'erge-005',
    topic: 'erge',
    difficulty: 'Staff',
    text: '¿Cuál es el diagnóstico en un paciente con pirosis que no responde a IBP, tiene endoscopia normal y pH-impedanciometría con AET < 4%, pero con asociación sintomática positiva?',
    options: ['ERGE verdadera', 'Esofagitis Eosinofílica', 'Esófago Hipersensible', 'Pirosis funcional'],
    correctIndex: 2,
    explanation: 'El esófago hipersensible tiene reflujo fisiológico pero el paciente percibe los eventos como dolorosos.',
    fisiopato: 'Existe una sensibilización periférica de los nociceptores esofágicos ante estímulos ácidos o mecánicos normales.',
    clinicalPearl: 'Estos pacientes responden mejor a neuromoduladores (ISRS/tricíclicos) que a IBP.',
    guideline: 'Consenso de Lyon 2.0.',
    whyWrong: { 0: 'AET sería > 6%.', 1: 'Diagnóstico histológico.', 3: 'Asociación sintomática sería negativa.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: H. PYLORI (EXPANDIDO 4 - MAASTRICHT VI) ---
  {
    id: 'hp-008',
    topic: 'h_pylori',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la terapia de primera línea recomendada por Maastricht VI en regiones con alta resistencia (>15%) a Claritromicina?',
    options: ['Terapia Triple clásica (IBP+Amoxi+Clari)', 'Terapia Cuádruple con Bismuto', 'Terapia Dual (IBP+Amoxi)', 'Monoterapia con Vonoprazan'],
    correctIndex: 1,
    explanation: 'La terapia cuádruple con bismuto evade la resistencia a macrólidos y es altamente efectiva.',
    fisiopato: 'El bismuto tiene un efecto bactericida directo y rompe el biofilm bacteriano.',
    clinicalPearl: 'Si no hay bismuto disponible, se recomienda la terapia cuádruple concomitante (sin bismuto).',
    guideline: 'Maastricht VI / Florence Consensus Report.',
    whyWrong: { 0: 'No se recomienda si la resistencia es > 15%.', 2: 'Solo en protocolos específicos de alta dosis.', 3: 'Aún no es estándar de primera línea mundial única.' },
    pillar: 'Mastery'
  },
  {
    id: 'hp-009',
    topic: 'h_pylori',
    difficulty: 'Staff',
    text: '¿Qué prueba diagnóstica es de elección para confirmar la erradicación de H. pylori?',
    options: ['Serología IgG', 'Test de aliento con C13 o Antígeno en deposiciones (monoclonal)', 'Endoscopia con biopsia obligatoria', 'PCR en saliva'],
    correctIndex: 1,
    explanation: 'Ambos test funcionales son altamente sensibles y específicos para confirmar el éxito del tratamiento.',
    fisiopato: 'Detectan la presencia de bacterias viables o sus productos metabólicos activos.',
    clinicalPearl: 'Recuerde esperar 4 semanas tras antibióticos y 2 tras IBP.',
    guideline: 'Manual Chileno 2025 / Maastricht VI.',
    whyWrong: { 0: 'Permanece positiva por meses/años tras erradicación.', 2: 'Innecesariamente invasivo si no hay otra indicación.', 3: 'No validado clínicamente.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: CELIACA (EXPANDIDO 4 - ACG 2023) ---
  {
    id: 'cel-006',
    topic: 'celiaca',
    difficulty: 'Subspecialist',
    text: 'En un paciente con sospecha de Celiaquía y déficit de IgA total, ¿qué marcador serológico debe solicitarse?',
    options: ['Anti-tTG IgA', 'Anti-tTG IgG o Anti-DGP IgG', 'Anti-Endomisio IgA', 'HLA-DQ2 solamente'],
    correctIndex: 1,
    explanation: 'En déficit de IgA, los marcadores basados en IgA darán falsos negativos.',
    fisiopato: 'La deficiencia de IgA es 10-15 veces más frecuente en celiacos que en la población general.',
    clinicalPearl: 'Siempre pida niveles de IgA total al tamizar por celiaquía.',
    guideline: 'ACG Clinical Guidelines 2023.',
    whyWrong: { 0: 'Falso negativo.', 2: 'Falso negativo.', 3: 'Solo sugiere susceptibilidad, no enfermedad activa.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: PERFIL HEPÁTICO (EXPANDIDO 2 - EASL) ---
  {
    id: 'ph-030',
    topic: 'perfil_hepatico',
    difficulty: 'Staff',
    text: 'Un paciente presenta elevación aislada de GGT. ¿Cuál es la causa no hepática más frecuente?',
    options: ['Consumo de alcohol o fármacos inductores (ej: Anticonvulsivantes)', 'Infección urinaria', 'Ejercicio extenuante', 'Consumo excesivo de carnes rojas'],
    correctIndex: 0,
    explanation: 'La GGT es muy sensible pero poco específica, siendo inducida por alcohol y varios medicamentos.',
    fisiopato: 'La inducción enzimática en el retículo endoplásmico liso aumenta su expresión sin necesariamente haber daño celular.',
    clinicalPearl: 'Si la FA es normal y la GGT alta, sospecha inducción por alcohol/fármacos.',
    guideline: 'EASL guidelines on liver enzymes.',
    whyWrong: { 1: 'Sin relación.', 2: 'Aumenta las transaminasas (CK/GOT).', 3: 'Sin relación.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'ph-031',
    topic: 'perfil_hepatico',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el valor del cociente AST/ALT (Ritis) que orienta clásicamente a Hepatitis Alcohólica?',
    options: ['AST/ALT > 2', 'AST/ALT < 1', 'AST/ALT = 1', 'AST/ALT > 10'],
    correctIndex: 0,
    explanation: 'En el daño alcohólico, la AST suele duplicar a la ALT debido al déficit de piridoxina (B6).',
    fisiopato: 'La ALT requiere B6 como cofactor más críticamente que la AST; el alcoholismo agota la B6.',
    clinicalPearl: 'Transaminasas > 500 rara vez son por alcohol solo; sospecha isquemia o toxinas.',
    guideline: 'Manual Chileno 2025 / AASLD Alcohol-associated Liver Disease.',
    whyWrong: { 1: 'Típico de hepatitis viral crónica o MASLD.', 2: 'Inespecífico.', 3: 'Sugerente de daño muscular o isquemia masiva.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: PANCREATITIS (EXPANDIDO 4) ---
  {
    id: 'pan-011',
    topic: 'pancreatitis',
    difficulty: 'Staff',
    text: '¿Cuál es el manejo de elección de un pseudoquiste pancreático asintomático de 5 cm?',
    options: ['Drenaje percutáneo inmediato', 'Drenaje endoscópico (Cistogastrostomía)', 'Observación clínica e imagenológica', 'Cirugía de resección'],
    correctIndex: 2,
    explanation: 'La mayoría de los pseudoquistes asintomáticos resuelven espontáneamente o no complican.',
    fisiopato: 'Es una colección de líquido rodeada por tejido de granulación (sin epitelio propio) que requiere tiempo para madurar.',
    clinicalPearl: 'Solo drene si hay dolor, infección o efecto de masa (obstrucción).',
    guideline: 'IAP/APA guidelines.',
    whyWrong: { 0: 'Riesgo de infección y fístula.', 1: 'Solo si es sintomático.', 3: 'Demasiado invasivo para lesión benigna.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: VÍAS BILIARES (EXPANDIDO 3 - TOKYO 2018) ---
  {
    id: 'vb-005',
    topic: 'vias_biliares',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el manejo de elección para una coledocolitiasis de 8 mm detectada por ecografía en un paciente con ictericia moderada?',
    options: ['Colecistectomía laparoscópica sola', 'CPRE seguida de Colecistectomía', 'Observación', 'Ácido Ursodesoxicólico'],
    correctIndex: 1,
    explanation: 'La limpieza de la vía biliar (CPRE) es prioritaria antes de la cirugía vesicular en pacientes con ictericia activa.',
    fisiopato: 'La obstrucción biliar genera estasis y riesgo de colangitis bacteriana ascendente.',
    clinicalPearl: 'En centros expertos, se puede realizar exploración laparoscópica de la vía biliar en el mismo tiempo que la colecistectomía.',
    guideline: 'ASGE/ESGE Guidelines on Choledocholithiasis.',
    whyWrong: { 0: 'Riesgo de persistencia de cálculo en coledoco y pancreatitis post-op.', 2: 'Riesgo de colangitis.', 3: 'Ineficaz para cálculos de este tamaño.' },
    pillar: 'Mastery'
  },
  {
    id: 'vb-006',
    topic: 'vias_biliares',
    difficulty: 'Staff',
    text: '¿Qué hallazgo ecográfico es el más sugerente de Adenomiomatosis Vesicular?',
    options: ['Paredes finas y lisas', 'Artefacto en "cola de cometa" por cristales de colesterol en senos de Rokitansky-Aschoff', 'Pólipo pediculado de 12 mm', 'Barro biliar'],
    correctIndex: 1,
    explanation: 'Los senos de Rokitansky-Aschoff son invaginaciones del epitelio que atrapan bilis y cristales.',
    fisiopato: 'Es una proliferación benigna del epitelio y la capa muscular de la vesícula.',
    clinicalPearl: 'Generalmente es un hallazgo incidental que no requiere cirugía a menos que cause síntomas o sea segmental.',
    guideline: 'Manual Chileno 2025 / Radiología Abdominal Avanzada.',
    whyWrong: { 0: 'Normalidad.', 2: 'Sugerente de pólipo verdadero o adenoma.', 3: 'Inespecífico.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: MASLD (EXPANDIDO 5- MASH) ---
  {
    id: 'masld-005',
    topic: 'masld',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el único fármaco aprobado recientemente (2024) específicamente para el tratamiento de la Esteatohepatitis (MASH) con fibrosis moderada-severa?',
    options: ['Semaglutida', 'Resmetirom', 'Pioglitazona', 'Vitamina E'],
    correctIndex: 1,
    explanation: 'Resmetirom es un agonista selectivo del receptor de hormona tiroidea beta (THR-beta) en el hígado.',
    fisiopato: 'Aumenta la oxidación de ácidos grasos y reduce la lipotoxicidad directa.',
    clinicalPearl: 'Es el primer fármaco con aprobación FDA (Accelerated Approval) para MASH.',
    guideline: 'FDA Approval March 2024 / MAESTRO-NASH trial.',
    whyWrong: { 0: 'En estudio clínico avanzado pero no aprobado formalmente para MASH sola.', 2: 'Útil fuera de ficha (off-label) pero no aprobado específicamente.', 3: 'Solo para no diabéticos, menor potencia.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CANCER GASTRICO (EXPANDIDO 3) ---
  {
    id: 'cg-002',
    topic: 'cancer_gastrico',
    difficulty: 'Staff',
    text: '¿Cuál es el margen de seguridad recomendado para una resección endoscópica de un cáncer gástrico incipiente según las guías japonesas?',
    options: ['1 mm', '5 mm', '2 cm', 'No requiere margen si es incipiente'],
    correctIndex: 1,
    explanation: 'Se considera un margen de 5mm para asegurar la resección R0 del tumor delimitado.',
    fisiopato: 'El crecimiento horizontal suele superar ligeramente el área visible endoscópicamente.',
    clinicalPearl: 'La cromoendoscopia (NBI/LCI) es vital para delimitar bordes.',
    guideline: 'JGCA (Japanese Gastric Cancer Association) guidelines.',
    whyWrong: { 0: 'Insuficiente.', 2: 'Excesivo para endoscopia.', 3: 'Riesgo de recurrencia local.' },
    pillar: 'Staff Level'
  },

  // --- SECTOR: MUERTE SÚBITA Y EMERGENCIAS (NUEVO) ---
  {
    id: 'ms-001',
    topic: 'muerte_subita',
    difficulty: 'Fellow',
    text: 'Durante una colonoscopia bajo sedación profunda con Propofol, el paciente presenta súbitamente apnea y bradicardia extrema seguida de asistolia. ¿Cuál es la primera acción a realizar?',
    options: ['Administrar Adrenalina 1mg EV', 'Suspender el procedimiento, pedir ayuda e iniciar compresiones torácicas de alta calidad', 'Realizar una laringoscopia directa', 'Administrar Flumazenil'],
    correctIndex: 1,
    explanation: 'El inicio precoz del RCP de alta calidad es el factor determinante de sobrevida en el paro intra-procedimiento.',
    fisiopato: 'La sedación profunda puede inducir depresión respiratoria que progresa a hipoxia miocárdica y paro cardiaco.',
    clinicalPearl: 'C-A-B: Compresiones, Vía aérea, Ventilaciones.',
    guideline: 'AHA ACLS Guidelines 2020 / ESGE Sedation Guidelines.',
    whyWrong: { 0: 'Se hace después de iniciar compresiones.', 2: 'Dificulta el inicio de RCP si no hay vía aérea asegurada, pero las compresiones son prioridad.', 3: 'El propofol no tiene antagonista.' },
    pillar: 'Must-Know'
  },
  {
    id: 'ms-002',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: '¿Cuál es el ritmo de paro cardiaco más frecuente asociado a trastornos electrolíticos graves (como hiperkalemia) en un paciente con insuficiencia renal y cirrosis?',
    options: ['Fibrilación Ventricular', 'Actividad Eléctrica sin Pulso (AESP) / Asistolia', 'Taquicardia Ventricular Monomórfica', 'Flutter Auricular'],
    correctIndex: 1,
    explanation: 'La hiperkalemia severa progresa típicamente de cambios en el ECG a bradicardia extrema y finalmente AESP o asistolia.',
    fisiopato: 'El exceso de potasio extracelular disminuye el potencial de reposo de la membrana, inactivando los canales de sodio y bloqueando la conducción.',
    clinicalPearl: 'El gluconato de calcio es el primer fármaco para estabilizar la membrana miocárdica.',
    guideline: 'ACLS 2020 / Renal Emergencies.',
    whyWrong: { 0: 'Menos común como evento primario en hiperkalemia pura.', 2: 'Suele ser polimórfica si ocurre.', 3: 'No es un ritmo de paro.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO (NUEVO) ---
  {
    id: 'ps-001',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: 'Escenario de Simulación: Usted es el líder de una unidad de endoscopia. Un paciente con HDA masiva entra en shock hipovolémico grado IV. Su equipo está confundido. ¿Cuál es la mejor estrategia de liderazgo en este momento?',
    options: ['Realizar la endoscopia usted mismo mientras da órdenes', 'Asumir el rol de líder de flujo, delegar tareas específicas (vías, monitoreo, fármacos) y mantener una visión global (situational awareness)', 'Esperar a que llegue el intensivista para tomar decisiones', 'Gritar para que el equipo reaccione rápido'],
    correctIndex: 1,
    explanation: 'El CRM (Crisis Resource Management) enfatiza que el líder no debe "ensuciarse las manos" con tareas técnicas si el equipo requiere coordinación.',
    fisiopato: 'El estrés agudo disminuye el desempeño individual; el liderazgo estructurado optimiza el uso de recursos.',
    clinicalPearl: 'Use comunicación de "lazo cerrado" (Closed-loop communication).',
    guideline: 'Crisis Resource Management in Healthcare.',
    whyWrong: { 0: 'Pierde la visión global del paciente.', 2: 'Retrasa el manejo crítico.', 3: 'Deteriora el clima y la seguridad del paciente.' },
    pillar: 'Mastery'
  },
  {
    id: 'ps-002',
    topic: 'protocolo_simulacro',
    difficulty: 'Staff',
    text: 'En un simulacro de perforación esofágica post-dilatación, ¿cuál es el tiempo máximo aceptable para la administración de antibióticos de amplio espectro para optimizar el pronóstico?',
    options: ['Dentro de la primera hora', 'A las 6 horas', 'Cuando aparezcan signos de mediastinitis en el TAC', 'Al día siguiente'],
    correctIndex: 0,
    explanation: 'La precocidad en el inicio de antibióticos y el control de la fuente es vital en perforaciones esofágicas.',
    fisiopato: 'La contaminación del mediastino con contenido gástrico y saliva genera una respuesta inflamatoria sistémica fulminante.',
    clinicalPearl: 'Sospecha de perforación = Antibióticos + Régimen Cero + Evaluación quirúrgica/endoscópica inmediata.',
    guideline: 'WSES Guidelines on Esophageal Perforation.',
    whyWrong: { 1: 'Aumenta mortalidad.', 2: 'Demasiado tarde.', 3: 'Error fatal.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: CIRROSIS (EXPANDIDO 4 - WORLD CLASS) ---
  {
    id: 'cir-020',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo fisiopatológico principal de la vasodilatación esplácnica en la cirrosis avanzada?',
    options: ['Exceso de Angiotensina II', 'Producción excesiva local de Óxido Nítrico (NO) y endocannabinoides', 'Aumento del tono simpático central', 'Déficit de Prostaglandinas'],
    correctIndex: 1,
    explanation: 'La hipertensión portal induce la liberación sistémica y local de potentes vasodilatadores para compensar la resistencia intrahepática.',
    fisiopato: 'El NO generado por la eNOS sobreactivada relaja el músculo liso vascular esplácnico, llevando a hipovolemia arterial efectiva.',
    clinicalPearl: 'Esta vasodilatación es la que activa el sistema RAA, llevando a retención de sodio y ascitis.',
    guideline: 'Sanyal et al. / Hepatology Textbooks.',
    whyWrong: { 0: 'La Angiotensina II termina estando elevada para compensar, pero es vasoconstrictora.', 2: 'El tono simpático es compensatorio elevado.', 3: 'Las prostaglandinas están aumentadas en este escenario.' },
    pillar: 'Mastery'
  },
  {
    id: 'cir-021',
    topic: 'cirrosis',
    difficulty: 'Fellow',
    text: '¿Qué mide el score MELD-Na y para qué se utiliza principalmente?',
    options: ['Severidad de la ascitis; para guiar dosis de diuréticos', 'Riesgo de mortalidad a 3 meses; para priorización en lista de trasplante hepático', 'Función de síntesis; para diagnosticar cirrosis', 'Riesgo de hemorragia; para indicar betabloqueo'],
    correctIndex: 1,
    explanation: 'El MELD-Na incluye Creatinina, Bilirrubina, INR y Sodio para predecir sobrevida.',
    fisiopato: 'El sodio refleja la severidad de la hipertensión portal y la disfunción circulatoria.',
    clinicalPearl: 'Un MELD-Na > 15 suele ser el umbral para considerar trasplante.',
    guideline: 'UNOS / OPTN Policy.',
    whyWrong: { 0: 'Inespecífico para ascitis.', 2: 'La cirrosis es histológica/clínica.', 3: 'Varon mide eso mejor.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: HDA (EXPANDIDO 4 - ESGE/ASGE) ---
  {
    id: 'hda-008',
    topic: 'hda',
    difficulty: 'Staff',
    text: 'En un paciente con HDA por úlcera péptica y uso concomitante de Clopidogrel, ¿cuál es la conducta recomendada respecto al antiagregante?',
    options: ['Suspenderlo por 30 días', 'Mantenerlo si el riesgo cardiovascular es alto, previa hemostasia endoscópica exitosa', 'Cambiar a Aspirina inmediatamente', 'Suspenderlo solo si la úlcera es Forrest III'],
    correctIndex: 1,
    explanation: 'La suspensión prolongada de Clopidogrel en pacientes con Stents coronarios recientes conlleva alto riesgo de trombosis.',
    fisiopato: 'El balance entre riesgo de resangrado y riesgo isquémico debe ser individualizado.',
    clinicalPearl: 'La hemostasia endoscópica efectiva permite reanudar antiagregantes precozmente en la mayoría.',
    guideline: 'ESGE/ESC Joint Position Statement.',
    whyWrong: { 0: 'Riesgo cardiovascular inaceptable.', 2: 'La aspirina también tiene riesgo GI.', 3: 'Decisión clínica, no solo por Forrest.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: EII (EXPANDIDO 4 - TERAPIAS NUEVAS) ---
  {
    id: 'eii-019',
    topic: 'eii',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo de acción del Upadacitinib en el tratamiento de la Colitis Ulcerosa?',
    options: ['Anti-TNF alfa', 'Inhibidor selectivo de JAK-1', 'Anti-Integrina alfa-4-beta-7', 'Anti-IL 12/23'],
    correctIndex: 1,
    explanation: 'Upadacitinib es una pequeña molécula oral que bloquea la señalización de múltiples citoquinas proinflamatorias.',
    fisiopato: 'Al inhibir JAK-1, interrumpe la vía STAT, reduciendo la expresión de genes inflamatorios.',
    clinicalPearl: 'Eficaz en casos refractarios a Anti-TNF.',
    guideline: 'U-ACHIEVE / U-ACCOMPLISH trials.',
    whyWrong: { 0: 'Infliximab/Adalimumab.', 2: 'Vedolizumab.', 3: 'Ustekinumab.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HDB (EXPANDIDO 3 - OAKLAND SCORE) ---
  {
    id: 'hdb-003',
    topic: 'hdb',
    difficulty: 'Fellow',
    text: '¿Para qué se utiliza el Score de Oakland en el contexto de la Hemorragia Digestiva Baja?',
    options: ['Para predecir la necesidad de cirugía de urgencia', 'Para identificar pacientes de bajo riesgo que pueden ser manejados de forma segura como ambulatorios', 'Para diagnosticar la causa exacta del sangrado', 'Para predecir la mortalidad a 1 año'],
    correctIndex: 1,
    explanation: 'Un puntaje <= 8 en el Score de Oakland tiene una alta probabilidad de egreso seguro desde urgencias.',
    fisiopato: 'Evalúa variables clínicas (edad, sexo, previo ingreso por HDB, frecuencia cardiaca, presión arterial, hemoglobina) para estratificar riesgo.',
    clinicalPearl: 'Es el score recomendado por las guías británicas (BSG) y americanas (ACG).',
    guideline: 'BSG / ACG Guidelines on Acute LGIB.',
    whyWrong: { 0: 'No es su objetivo primario.', 2: 'Es un predictor pronóstico, no diagnóstico.', 3: 'Mide riesgo a corto plazo.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: HEPATITIS VIRAL (EXPANDIDO 4 - VHC) ---
  {
    id: 'hep-005',
    topic: 'hepatitis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el esquema pangenotípico de elección actual para el tratamiento de la Hepatitis C (VHC) en un paciente sin cirrosis?',
    options: ['Interferón + Ribavirina por 48 semanas', 'Sofosbuvir/Velpatasvir por 12 semanas o Glecaprevir/Pibrentasvir por 8 semanas', 'Monoterapia con Sofosbuvir', 'Boceprevir + Telaprevir'],
    correctIndex: 1,
    explanation: 'Los antivirales de acción directa (AAD) logran tasas de curación (RVS) > 95%.',
    fisiopato: 'Bloquean proteínas no estructurales del virus (NS3/4A, NS5A, NS5B) impidiendo su replicación de forma selectiva.',
    clinicalPearl: 'Antes de iniciar, siempre descarte coinfección con VHB por riesgo de reactivación.',
    guideline: 'Manual Chileno 2025 / Guías EASL/AASLD VHC.',
    whyWrong: { 0: 'Obsoleto y tóxico.', 2: 'Ineficaz como monoterapia.', 3: 'DAA de primera generación, ya no se usan.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MASLD (EXPANDIDO 6 - FIB-4) ---
  {
    id: 'masld-006',
    topic: 'masld',
    difficulty: 'Staff',
    text: '¿Cuál es el valor de corte inferior del Score FIB-4 para descartar fibrosis avanzada en MASLD?',
    options: ['< 1.30 (< 2.0 en mayores de 65 años)', '< 3.25', '> 2.67', '< 0.5'],
    correctIndex: 0,
    explanation: 'Un FIB-4 bajo tiene un alto valor predictivo negativo para fibrosis avanzada.',
    fisiopato: 'Utiliza la edad, AST, ALT y Recuento de Plaquetas como subrogados bioquímicos de la fibrosis hepática.',
    clinicalPearl: 'Es la primera herramienta de tamizaje recomendada en atención primaria y endocrinología.',
    guideline: 'Manual Chileno 2025 / AGA Clinical Practice Update.',
    whyWrong: { 1: 'Corte superior para alta probabilidad de fibrosis.', 2: 'Punto de corte intermedio.', 3: 'Demasiado bajo.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: PANCREATITIS CRÓNICA (NUEVO) ---
  {
    id: 'pan-012',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el test de función pancreática exocrina más utilizado en la práctica clínica por su facilidad y disponibilidad?',
    options: ['Test de Secretina-Colecistoquinina', 'Elastasa fecal-1', 'Grasa en deposiciones de 72 horas (Van de Kamer)', 'Prueba de aliento con triglicéridos marcados'],
    correctIndex: 1,
    explanation: 'La elastasa fecal-1 es estable en las deposiciones y refleja la producción enzimática acinar.',
    fisiopato: 'En la pancreatitis crónica, la destrucción del parénquima disminuye la secreción de pro-enzimas.',
    clinicalPearl: 'Un valor < 200 ug/g es sugerente de insuficiencia, y < 100 ug/g es severo.',
    guideline: 'United European Gastroenterology (UEG) guidelines.',
    whyWrong: { 0: 'Estándar de oro pero muy invasivo y complejo.', 2: 'Engorroso y poco aceptado por pacientes.', 3: 'Poco disponible fuera de centros de investigación.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MUERTE SÚBITA / EMERGENCIAS (EXPANDIDO) ---
  {
    id: 'ms-003',
    topic: 'muerte_subita',
    difficulty: 'Fellow',
    text: 'Paciente con antecedente de QT largo congénito entra en Torsades de Pointes durante su endoscopia. ¿Cuál es el tratamiento farmacológico de elección inmediato?',
    options: ['Amiodarona 300mg EV', 'Sulfato de Magnesio 2g EV', 'Lidocaína 1% EV', 'Verapamilo'],
    correctIndex: 1,
    explanation: 'El magnesio estabiliza la membrana y acorta el intervalo QT funcionalmente.',
    fisiopato: 'La hipomagnesemia o fármacos que prolongan el QT favorecen la post-despolarización temprana.',
    clinicalPearl: 'Desfíbrila si el paciente está inestable o en FV.',
    guideline: 'ACLS 2020.',
    whyWrong: { 0: 'Puede prolongar más el QT en casos de Torsades.', 2: 'Segunda línea si el magnesio falla.', 3: 'Contraindicado; empeora la inestabilidad.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: DIARREA AGUDA (EXPANDIDO) ---
  {
    id: 'da-007',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: '¿Cuál es el patógeno más probable en un brote de diarrea acuosa profusa en un crucero?',
    options: ['Norovirus', 'Salmonella', 'Vibrio cholerae', 'Shigella'],
    correctIndex: 0,
    explanation: 'El Norovirus es la causa más común de brotes de gastroenteritis en entornos cerrados o concurridos.',
    fisiopato: 'Ataca los enterocitos del intestino delgado, causando una mala absorción transitoria por pérdida de borde en cepillo.',
    clinicalPearl: 'El lavado de manos con alcohol gel es menos efectivo que con agua y jabón para Norovirus.',
    guideline: 'CDC / ACG Guidelines.',
    whyWrong: { 1: 'Suele ser por alimentos contaminados (huevo/aves).', 2: 'Endémico en ciertas áreas, raro en cruceros modernos.', 3: 'Causa diarrea inflamatoria/disentérica.' },
    pillar: 'Common Cases'
  },
  {
    id: 'da-008',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: 'En un paciente con diarrea disentérica y sospecha de Colitis por C. difficile, ¿cuál es el test inicial de mayor sensibilidad?',
    options: ['Coprocultivo para anaerobios', 'NAAT (PCR) para genes de toxina', 'Ensayo de toxinas A/B por ELISA', 'Colonoscopia'],
    correctIndex: 1,
    explanation: 'La PCR (NAAT) es altamente sensible para detectar la presencia de cepas toxigénicas.',
    fisiopato: 'Detecta la secuencia de ADN del gen tcdB que codifica la toxina.',
    clinicalPearl: 'Un NAAT positivo con ELISA de toxinas negativo puede indicar colonización; correlacione con la clínica.',
    guideline: 'IDSA/SHEA Guidelines 2021.',
    whyWrong: { 0: 'Lento y no distingue cepas toxigénicas.', 2: 'Menos sensible que la PCR.', 3: 'Reservado para casos dudosos o sospecha de perforación/isquemia.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: ERGE (EXPANDIDO 4 - TRATAMIENTO) ---
  {
    id: 'erge-006',
    topic: 'erge',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la cirugía de elección para el tratamiento del ERGE refractario con hernia hiatal confirmada?',
    options: ['Gastrectomía en manga', 'Funduplicatura de Nissen (360°)', 'Bypass gástrico en Y de Roux', 'Esofaguectomía distal'],
    correctIndex: 1,
    explanation: 'La funduplicatura de Nissen restaura la competencia del EEI y reduce la hernia.',
    fisiopato: 'Crea una válvula mecánica al envolver el fundus gástrico alrededor del esófago distal.',
    clinicalPearl: 'En pacientes obesos con ERGE, el Bypass gástrico es preferible al Nissen.',
    guideline: 'SAGES / ACG Guidelines.',
    whyWrong: { 0: 'Puede empeorar el reflujo significativamente.', 2: 'De elección en obesidad mórbida con ERGE.', 3: 'Procedimiento extremo para ERGE simple.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MOTORES ESÓFAGO (EXPANDIDO 3 - ACALASIA) ---
  {
    id: 'mot-002',
    topic: 'motores_esofago',
    difficulty: 'Staff',
    text: '¿Qué tipo de Acalasia (Clasificación de Chicago) presenta el mejor pronóstico de respuesta al tratamiento farmacológico o quirúrgico?',
    options: ['Tipo I (Clásica)', 'Tipo II (Con compresión panesofágica)', 'Tipo III (Espástica)', 'Tipo IV'],
    correctIndex: 1,
    explanation: 'El Tipo II suele responder mejor a la miotomía o dilatación neumática en comparación con el Tipo I y III.',
    fisiopato: 'La presurización panesofágica indica que aún hay reserva muscular para generar presión, a diferencia del Tipo I (atonal) o III (espasmos caóticos).',
    clinicalPearl: 'El Tipo III suele requerir miotomías más largas (POEM).',
    guideline: 'Chicago Classification 4.0.',
    whyWrong: { 0: 'Respuesta intermedia.', 2: 'Peor pronóstico y manejo más complejo.', 3: 'No existe el tipo IV en Chicago.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: DISPEPSIA (NUEVO) ---
  {
    id: 'dys-001',
    topic: 'ulcera_peptica',
    difficulty: 'Fellow',
    text: 'Según los criterios de Roma IV, ¿cuál es la definición de Dispepsia Funcional?',
    options: ['Dolor epigástrico que mejora con la defecación', 'Presencia de plenitud postprandial, saciedad precoz o dolor epigástrico sin causa orgánica evidente', 'Pirosis retroesternal persistente', 'Diarrea y dolor abdominal'],
    correctIndex: 1,
    explanation: 'Se divide en Síndrome de Distrés Postprandial y Síndrome de Dolor Epigástrico.',
    fisiopato: 'Involucra hipersensibilidad visceral, acomodación gástrica alterada y disfunción del eje cerebro-intestino.',
    clinicalPearl: 'Síntomas deben estar presentes al menos 3 días por semana en los últimos 3 meses.',
    guideline: 'Rome IV criteria.',
    whyWrong: { 0: 'Sugerente de Intestino Irritable.', 2: 'Define ERGE.', 3: 'Inespecífico.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: CANCER ESOFAGO (EXPANDIDO 3 - BARRETT) ---
  {
    id: 'ce-002',
    topic: 'cancer_esofago',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el intervalo de vigilancia endoscópica recomendado para un Esófago de Barrett sin displasia confirmado en dos endoscopias?',
    options: ['Anual', 'Cada 3 a 5 años', 'Cada 10 años', 'No requiere más vigilancia'],
    correctIndex: 1,
    explanation: 'El bajo riesgo de progresión anual (< 0.5%) justifica intervalos largos.',
    fisiopato: 'El Barrett es una condición premaligna pero la mayoría de los pacientes no progresarán a adenocarcinoma.',
    clinicalPearl: 'Asegúrese de usar el protocolo de Seattle (biopsias en 4 cuadrantes cada 2 cm).',
    guideline: 'ACG Clinical Guideline: Diagnosis and Management of Barrett’s Esophagus.',
    whyWrong: { 0: 'Excesivo para ausencia de displasia.', 2: 'Inseguro; podría pasar por alto una progresión.', 3: 'Error clínico; el riesgo persiste.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CANCER GASTRICO (EXPANDIDO 4 - OLGA) ---
  {
    id: 'cg-003',
    topic: 'cancer_gastrico',
    difficulty: 'Staff',
    text: '¿Qué evalúa el sistema OLGA en el estudio de la gastritis crónica?',
    options: ['Solo la presencia de H. pylori', 'El estadio de atrofia gástrica basado en la localización y severidad histológica', 'La presencia de metaplasia intestinal únicamente', 'El riesgo de linfoma MALT'],
    correctIndex: 1,
    explanation: 'OLGA (Operative Link for Gastritis Assessment) correlaciona la extensión de la atrofia con el riesgo de cáncer gástrico.',
    fisiopato: 'La cascada de Correa (Gastritis -> Atrofia -> Metaplasia -> Displasia) es el eje de la carcinogénesis gástrica distal.',
    clinicalPearl: 'Estadios III y IV de OLGA/OLGIM requieren vigilancia endoscópica estrecha.',
    guideline: 'MAPS II guidelines (ESGE).',
    whyWrong: { 0: 'Es un factor gatillante, no lo que mide OLGA.', 2: 'Eso lo mide OLGIM.', 3: 'Relacionado pero no es el foco del sistema OLGA.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: CELIACA (EXPANDIDO 5 - MARSH) ---
  {
    id: 'cel-007',
    topic: 'celiaca',
    difficulty: 'Fellow',
    text: 'Un paciente presenta una biopsia duodenal con linfocitosis intraepitelial (>25/100 enterocitos) pero con vellosidades normales. ¿A qué clasificación de Marsh corresponde?',
    options: ['Marsh 0', 'Marsh 1', 'Marsh 2', 'Marsh 3a'],
    correctIndex: 1,
    explanation: 'Marsh 1 se define por el aumento de LIEs sin cambios arquitecturales (atrofia o hiperplasia de criptas).',
    fisiopato: 'Es la respuesta inflamatoria inicial al gluten, inespecífica pero característica de la fase temprana o potencial de la enfermedad.',
    clinicalPearl: 'Marsh 1 no es diagnóstico exclusivo de Celiaquía; considere SIBO, AINES o alergias alimentarias.',
    guideline: 'Modified Marsh Classification.',
    whyWrong: { 0: 'Mucosa normal.', 2: 'Incluye hiperplasia de criptas.', 3: 'Incluye atrofia vellositaria parcial.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: BIOLOGÍA Y GENÉTICA (EXPANDIDO) ---
  {
    id: 'bio-002',
    topic: 'biologia',
    difficulty: 'Subspecialist',
    text: '¿Qué mutación genética es la causa más frecuente del Síndrome de Lynch (Cáncer Colorrectal Hereditario No Polipósico)?',
    options: ['APC', 'MLH1 y MSH2', 'KRAS', 'p53'],
    correctIndex: 1,
    explanation: 'El Síndrome de Lynch se debe a defectos en los genes de reparación de errores de emparejamiento (MMR).',
    fisiopato: 'La pérdida de función de MMR lleva a inestabilidad de microsatélites (MSI) y acumulación de mutaciones.',
    clinicalPearl: 'El tamizaje universal en piezas quirúrgicas de CCR se recomienda actualmente.',
    guideline: 'Manchester Guidelines / NCCN.',
    whyWrong: { 0: 'Causa Poliposis Adenomatosa Familiar (FAP).', 2: 'Mutación somática común en CCR esporádico.', 3: 'Gen supresor de tumores afectado en fases tardías.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: NUTRICIÓN (EXPANDIDO 3) ---
  {
    id: 'nut-003',
    topic: 'nutricion',
    difficulty: 'Staff',
    text: '¿Cuál es el micronutriente cuya deficiencia se asocia clásicamente a la "Acropatía Enteropática" en pacientes con mala absorción severa?',
    options: ['Vitamina B12', 'Zinc', 'Hierro', 'Selenio'],
    correctIndex: 1,
    explanation: 'El zinc es vital para la integridad de la piel y mucosas; su déficit causa lesiones vesículo-ampollosas periorificiales.',
    fisiopato: 'El zinc actúa como cofactor en más de 300 enzimas de síntesis de proteínas y división celular.',
    clinicalPearl: 'Sospeche déficit de zinc en pacientes con diarrea crónica y dermatitis persistente.',
    guideline: 'Manual Chileno 2025 / Clinical Nutrition in GI disease.',
    whyWrong: { 0: 'Causa anemia megaloblástica y neuropatía.', 2: 'Causa anemia ferropénica.', 3: 'Causa miocardiopatía (Enfermedad de Keshan).' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: VÍAS BILIARES (EXPANDIDO 4 - COLANGITIS) ---
  {
    id: 'vb-007',
    topic: 'vias_biliares',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la triada de Charcot y para qué patología es sugerente?',
    options: ['Dolor, ictericia y fiebre; sugiere Colangitis Aguda', 'Dolor, masa palpable y Murphy; sugiere Colecistitis', 'Ascitis, edema y telangiectasias; sugiere Cirrosis', 'Vómitos, diarrea y dolor; sugiere Gastroenteritis'],
    correctIndex: 0,
    explanation: 'La triada de Charcot es clásica de la colangitis por obstrucción biliar e infección.',
    fisiopato: 'La estasis biliar permite el sobrecrecimiento bacteriano y la translocación hacia el sistema venoso y linfático.',
    clinicalPearl: 'Si se suma shock y compromiso de conciencia, se llama Pentada de Reynolds.',
    guideline: 'Tokyo Guidelines 2018.',
    whyWrong: { 1: 'Sugerente de colecistitis complicada.', 2: 'Estigmas de enfermedad hepática crónica.', 3: 'Inespecífico.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: PERFIL HEPÁTICO (EXPANDIDO 3 - PATRONES) ---
  {
    id: 'ph-032',
    topic: 'perfil_hepatico',
    difficulty: 'Fellow',
    text: 'Un paciente presenta una elevación de Bilirrubina Indirecta (No conjugada) del 90%, con Hemoglobina y Reticulocitos normales, y enzimas hepáticas normales. ¿Cuál es el diagnóstico más probable?',
    options: ['Síndrome de Gilbert', 'Síndrome de Crigler-Najjar tipo I', 'Hepatitis Aguda', 'Hemólisis intravascular'],
    correctIndex: 0,
    explanation: 'El Síndrome de Gilbert es una deficiencia parcial de la enzima glucuroniltransferasa (UGT1A1) que se manifiesta ante estrés o ayuno.',
    fisiopato: 'La captación o conjugación defectuosa de la bilirrubina libre genera una hiperbilirrubinemia leve persistente.',
    clinicalPearl: 'Es una condición benigna que no requiere tratamiento, solo tranquilidad al paciente.',
    guideline: 'Manual Chileno 2025 / Hepatology Essentials.',
    whyWrong: { 1: 'Presentación neonatal con niveles de bilirrubina altísimos (> 20 mg/dL).', 2: 'Habría elevación de transaminasas.', 3: 'Habría anemia y reticulocitosis.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: H. PYLORI (EXPANDIDO 5 - RESISTENCIA) ---
  {
    id: 'hp-010',
    topic: 'h_pylori',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo de resistencia bacteriana de H. pylori a la Claritromicina?',
    options: ['Producción de Beta-lactamasas', 'Mutaciones puntuales en el gen del ARNr 23S', 'Bombas de eflujo inespecíficas', 'Modificación del precursor del peptidoglicano'],
    correctIndex: 1,
    explanation: 'Las mutaciones en el dominio V del ARNr 23S impiden la unión del macrólido al ribosoma bacteriano.',
    fisiopato: 'La alteración del sitio de unión estructural anula la capacidad del fármaco para detener la síntesis proteica.',
    clinicalPearl: 'La resistencia a Claritromicina es el principal factor de falla terapéutica en occidente.',
    guideline: 'Maastricht VI.',
    whyWrong: { 0: 'Mecanismo de resistencia a penicilinas.', 2: 'Presente en otros fármacos pero no es el principal para macrólidos en H. pylori.', 3: 'Mecanismo para Vancomicina.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HDA (EXPANDIDO 5 - MANEJO PRE-ENDOSCÓPICO) ---
  {
    id: 'hda-009',
    topic: 'hda',
    difficulty: 'Staff',
    text: '¿Cuál es el rol de la Eritromicina endovenosa en el manejo de la HDA aguda?',
    options: ['Antibiótico profiláctico', 'Proquinético para mejorar la visualización endoscópica al vaciar el estómago de coágulos', 'Hemostático directo', 'Tratamiento para várices'],
    correctIndex: 1,
    explanation: 'La eritromicina actúa sobre los receptores de motilina, induciendo contracciones gástricas fuertes.',
    fisiopato: 'El vaciamiento gástrico de sangre y restos permite una endoscopia más rápida, segura y efectiva.',
    clinicalPearl: 'Se administra una dosis única de 250mg EV unos 30-60 minutos antes del procedimiento.',
    guideline: 'ESGE Guidelines on Upper GI Bleeding.',
    whyWrong: { 0: 'No se usa con ese fin (se prefiere ceftriaxona en cirróticos).', 2: 'No tiene efecto sobre la coagulación.', 3: 'Sin efecto vascular.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO / MUERTE SÚBITA (FINAL) ---
  {
    id: 'ps-003',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: 'Durante un código azul en el área de recuperación de endoscopia, se utiliza un Desfibrilador Externo Automático (DEA). El DEA indica "Descarga no aconsejada". ¿Cuál es el siguiente paso?',
    options: ['Apagar el DEA y esperar al equipo de trauma', 'Reiniciar inmediatamente compresiones torácicas por 2 minutos', 'Verificar el pulso por 1 minuto', 'Administrar un golpe precordial'],
    correctIndex: 1,
    explanation: 'Si el ritmo no es desfibrilable (Asistolia o AESP), se debe minimizar la interrupción de las compresiones.',
    fisiopato: 'La perfusión coronaria cae drásticamente cada segundo que no hay compresiones.',
    clinicalPearl: 'No pierda tiempo revisando el pulso si el DEA no recomienda descarga a menos que haya signos claros de vida.',
    guideline: 'AHA BLS/ACLS 2020.',
    whyWrong: { 0: 'Error crítico; el paciente sigue en paro.', 2: 'Demasiado tiempo perdido.', 3: 'Maniobra obsoleta y no recomendada.' },
    pillar: 'Mastery'
  },
  {
    id: 'ms-004',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: 'En un paciente con Hemorragia Digestiva Varicosa y paro cardiaco concurrente, ¿cuál es la prioridad según los algoritmos de soporte vital avanzado?',
    options: ['Instalar un balón de Sengstaken-Blakemore inmediatamente', 'Manejo del paro cardiaco (RCP/Desfibrilación) siguiendo protocolos ACLS estándar', 'Realizar endoscopia de urgencia durante las compresiones', 'Administrar Terlipresina'],
    correctIndex: 1,
    explanation: 'La reanimación cardiopulmonar (RCP) y la restauración de la circulación espontánea son siempre la prioridad sobre el control de la fuente del sangrado en el paro activo.',
    fisiopato: 'Sin flujo sistémico generado por RCP, cualquier maniobra hemostática es inútil.',
    clinicalPearl: 'Maneje el "C" (Circulación) del paro primero, luego el sangrado.',
    guideline: 'ACLS 2020.',
    whyWrong: { 0: 'Dificulta la RCP y el manejo de la vía aérea.', 2: 'Técnicamente imposible y no prioritario.', 3: 'Fármaco secundario en el contexto de paro.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: ERGE (EXPANDIDO 5 - COMPLICACIONES) ---
  {
    id: 'erge-007',
    topic: 'erge',
    difficulty: 'Staff',
    text: '¿Cuál es la conducta recomendada ante una estenosis esofágica péptica confirmada por endoscopia?',
    options: ['Dilatación endoscópica (bujías o balón) + IBP a dosis altas', 'Cirugía de resección esofágica', 'Solo tratamiento con IBP', 'Stent esofágico autoexpandible como primera línea'],
    correctIndex: 0,
    explanation: 'La dilatación es efectiva para restaurar el calibre luminal, y el IBP previene la recurrencia.',
    fisiopato: 'La inflamación crónica por ácido genera fibrosis transmural que reduce el lumen esofágico.',
    clinicalPearl: 'Asegúrese de tomar biopsias para descartar malignidad en toda estenosis.',
    guideline: 'ASGE Guideline: Role of endoscopy in GERD.',
    whyWrong: { 1: 'Demasiado agresivo como inicio.', 2: 'Insuficiente para resolver la disfagia mecánica.', 3: 'Reservado para estenosis malignas o refractarias/benignas muy complejas.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: DIARREA CRÓNICA (EXPANDIDO 3 - MALA ABSORCIÓN) ---
  {
    id: 'dc-004',
    topic: 'diarrea_cronica',
    difficulty: 'Subspecialist',
    text: 'En un paciente con sospecha de mala absorción de ácidos biliares, ¿cuál es el test de oro (aunque poco disponible) para el diagnóstico?',
    options: ['SeHCAT (Ácido tauroselcólico marcado con Se75)', 'Elastasa fecal', 'D-Xilosa', 'Test de aliento con Lactulosa'],
    correctIndex: 0,
    explanation: 'El SeHCAT mide la retención de ácidos biliares; una retención < 10-15% a los 7 días es diagnóstica.',
    fisiopato: 'La falla en la circulación enterohepática (ileon terminal) lleva a que los ácidos biliares lleguen al colon, induciendo secreción de agua.',
    clinicalPearl: 'Muchas veces se realiza una prueba terapéutica con Colestiramina ante la sospecha.',
    guideline: 'BSG Guidelines on chronic diarrhoea.',
    whyWrong: { 1: 'Mide función pancreática.', 2: 'Mide absorción en intestino delgado proximal.', 3: 'Mide SIBO.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ÚLCERA PÉPTICA (EXPANDIDO 2 - AINES) ---
  {
    id: 'up-003',
    topic: 'ulcera_peptica',
    difficulty: 'Staff',
    text: '¿Cuál es el mecanismo por el cual los AINES inducen daño en la mucosa gástrica?',
    options: ['Inhibición de la síntesis de prostaglandinas vía COX-1', 'Aumento directo de la secreción de ácido clorhídrico', 'Destrucción de las células parietales', 'Bloqueo de los receptores H2'],
    correctIndex: 0,
    explanation: 'Las prostaglandinas son vitales para la secreción de moco, bicarbonato y el flujo sanguíneo mucoso.',
    fisiopato: 'Al inhibir la COX-1, se pierden los mecanismos de defensa citoprotectores, permitiendo el daño por ácido y pepsina.',
    clinicalPearl: 'Los inhibidores de COX-2 (Coxibs) tienen menor riesgo GI pero mayor riesgo cardiovascular.',
    guideline: 'Manual Chileno 2025 / ACG Guidelines.',
    whyWrong: { 1: 'No es su efecto primario.', 2: 'No causan lisis celular directa.', 3: 'Efecto de los fármacos antiácidos.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: MUERTE SÚBITA / EMERGENCIAS (VÍA AÉREA) ---
  {
    id: 'ms-005',
    topic: 'muerte_subita',
    difficulty: 'Fellow',
    text: '¿Cuál es el dispositivo de vía aérea supraglótico de elección para manejo de emergencia inicial por personal no anestesiólogo en la sala de endoscopia?',
    options: ['Máscara Laríngea (LMA)', 'Tubo Endotraqueal', 'Cánula de Guedel solamente', 'Mascarilla facial simple'],
    correctIndex: 0,
    explanation: 'La LMA es fácil de insertar y proporciona una ventilación efectiva en situaciones de rescate.',
    fisiopato: 'Sella la laringe por arriba de las cuerdas vocales, permitiendo el paso de oxígeno a presión positiva moderada.',
    clinicalPearl: 'No protege totalmente contra la aspiración, a diferencia del tubo con manguito.',
    guideline: 'Difficult Airway Society (DAS) guidelines.',
    whyWrong: { 1: 'Requiere más entrenamiento y destreza.', 2: 'No asegura vía aérea si hay obstrucción o apnea severa.', 3: 'Mínima eficacia en paro.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: H. PYLORI (EXPANDIDO 6 - VONOPRAZAN) ---
  {
    id: 'hp-011',
    topic: 'h_pylori',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la ventaja principal del Vonoprazan (P-CAB) sobre los IBP tradicionales en la terapia de erradicación de H. pylori?',
    options: ['Es más barato', 'Logra un bloqueo ácido más rápido, potente y estable, sin depender de la activación por el canalículo parietal', 'Tiene menos efectos secundarios', 'No interactúa con antibióticos'],
    correctIndex: 1,
    explanation: 'Los P-CAB (Potassium-Competitive Acid Blockers) bloquean la bomba de protones de forma reversible y competitiva con el potasio.',
    fisiopato: 'Al mantener un pH gástrico > 6 de forma constante, permite que los antibióticos (Amoxicilina/Claritromicina) alcancen su máxima estabilidad y eficacia bactericida.',
    clinicalPearl: 'Especialmente útil en metabolizadores rápidos de IBP (polimorfismo CYP2C19).',
    guideline: 'Maastricht VI / PHALCON-EE trials.',
    whyWrong: { 0: 'Actualmente es más costoso por ser nuevo.', 2: 'Perfil de seguridad similar.', 3: 'No es su ventaja principal.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: VÍAS BILIARES (EXPANDIDO 5 - COLANGITIS ESCLEROSANTE) ---
  {
    id: 'vb-008',
    topic: 'vias_biliares',
    difficulty: 'Subspecialist',
    text: '¿Qué hallazgo en la Colangiorresonancia es patognomónico de la Colangitis Esclerosante Primaria (CEP)?',
    options: ['Imagen en "cuentas de rosario" (estenosis multifocales y dilataciones segmentarias)', 'Dilatación masiva de la vía biliar extrahepática', 'Vesícula en porcelana', 'Cálculo impactado en el cístico'],
    correctIndex: 0,
    explanation: 'La CEP afecta tanto los conductos intra como extrahepáticos de forma parcheada.',
    fisiopato: 'La inflamación crónica fibrosante obliterativa genera una anatomía biliar distorsionada.',
    clinicalPearl: 'Altamente asociado a Colitis Ulcerosa (70-80% de los casos).',
    guideline: 'AASLD guidelines: Primary Sclerosing Cholangitis.',
    whyWrong: { 1: 'Sugerente de obstrucción distal o Quiste de Colédoco.', 2: 'Factor de riesgo para cáncer de vesícula.', 3: 'Manejo de colecistitis.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MOTORES ESÓFAGO (EXPANDIDO 4 - JACKHAMMER) ---
  {
    id: 'mot-003',
    topic: 'motores_esofago',
    difficulty: 'Fellow',
    text: 'En la manometría de alta resolución, ¿cuál es el criterio diagnóstico para un Esófago en Martillo Neumático (Jackhammer Esophagus)?',
    options: ['DCI (Integral de Contracciones Distales) > 8000 mmHg.s.cm en al menos el 20% de las degluciones', 'DCI < 450 en todas las degluciones', 'Presión de reposo del EEI > 40 mmHg', 'Ondas peristálticas normales'],
    correctIndex: 0,
    explanation: 'El Jackhammer se caracteriza por contracciones de vigor extremo y prolongadas.',
    fisiopato: 'Existe una hipercontractilidad del músculo liso esofágico, a menudo asociada a hipertrofia muscular.',
    clinicalPearl: 'Puede causar dolor torácico severo que simula origen cardiaco.',
    guideline: 'Chicago Classification 4.0.',
    whyWrong: { 1: 'Define motilidad inefectiva.', 2: 'Sugerente de hipertensión del EEI pero no define Jackhammer por sí solo.', 3: 'No es martillo neumático.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: MASLD (EXPANDIDO 7 - MASH FIBROSIS) ---
  {
    id: 'masld-007',
    topic: 'masld',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mejor predictor no invasivo de mortalidad cardiovascular en pacientes con MASLD?',
    options: ['Nivel de ALT', 'Presencia y estadio de fibrosis hepática (F3-F4)', 'Tamaño de la esteatosis por ecografía', 'Nivel de triglicéridos'],
    correctIndex: 1,
    explanation: 'La fibrosis es el factor histológico más importante correlacionado con desenlaces a largo plazo, incluyendo eventos cardiovasculares.',
    fisiopato: 'La fibrosis refleja una inflamación sistémica crónica y se asocia a mayor rigidez arterial y disfunción endotelial.',
    clinicalPearl: 'MASLD es una enfermedad multisistémica; el hígado es solo una parte del problema.',
    guideline: 'Consenso Multidisciplinario MASLD 2023.',
    whyWrong: { 0: 'Pobre correlación con daño histológico serio.', 2: 'La esteatosis aislada tiene buen pronóstico.', 3: 'Factor de riesgo, no predictor de mortalidad directa.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CIRROSIS (EXPANDIDO 5 - HEPATOPULMONAR) ---
  {
    id: 'cir-022',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la triada diagnóstica del Síndrome Hepatopulmonar (SHP)?',
    options: ['Enfermedad hepática, gradiente alvéolo-arterial de O2 aumentado y vasodilataciones intrapulmonares', 'Cirrosis, ascitis e hidrotórax', 'Hipertensión portal, ictericia y disnea', 'Hipoxemia, anemia y ascitis'],
    correctIndex: 0,
    explanation: 'El SHP se caracteriza por hipoxemia debida a shunts intrapulmonares en presencia de hipertensión portal.',
    fisiopato: 'La producción excesiva de NO intrapulmonar genera dilatación capilar, dificultando la difusión de O2 hacia el centro del capilar (desequilibrio ventilación-perfusión).',
    clinicalPearl: 'Busque platipnea y ortodesoxia (disnea y desaturación al estar de pie).',
    guideline: 'Manual Chileno 2025 / AASLD Guidelines.',
    whyWrong: { 1: 'Define hidrotórax hepático.', 2: 'Inespecífico.', 3: 'No define el síndrome fisiopatológicamente.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: PERFIL HEPÁTICO (EXPANDIDO 4 - WILSON) ---
  {
    id: 'ph-033',
    topic: 'perfil_hepatico',
    difficulty: 'Fellow',
    text: 'En un paciente joven con hepatitis aguda fulminante, ¿qué hallazgo bioquímico sugiere fuertemente Enfermedad de Wilson?',
    options: ['FA muy baja o indetectable y relación FA/Bilirrubina < 4', 'Transaminasas > 5000', 'Bilirrubina Indirecta normal', 'Hiperalbuminemia'],
    correctIndex: 0,
    explanation: 'La liberación masiva de cobre interfiere con la actividad de la fosfatasa alcalina y causa hemólisis Coombs negativa.',
    fisiopato: 'El cobre libre inhibe competitivamente a la FA y daña la membrana del eritrocito.',
    clinicalPearl: 'Wilson fulminante suele tener una relación AST/ALT > 2.',
    guideline: 'EASL Wilson’s disease guidelines.',
    whyWrong: { 1: 'Sugerente de isquemia o paracetamol.', 2: 'Habría mucha bilirrubina indirecta por hemólisis.', 3: 'Incompatible con daño agudo severo.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: H. PYLORI (EXPANDIDO 7 - MANEJO DE FALLAS) ---
  {
    id: 'hp-012',
    topic: 'h_pylori',
    difficulty: 'Subspecialist',
    text: 'En un paciente que ha fallado a una terapia cuádruple con bismuto y a una terapia con claritromicina, ¿cuál es la mejor opción de rescate según Maastricht VI?',
    options: ['Repetir la terapia cuádruple con bismuto doblando la dosis', 'Terapia basada en Levofloxacino (IBP+Amoxi+Levo) o Rifabutina', 'Monoterapia con Metronidazol', 'Suspender tratamiento por 1 año'],
    correctIndex: 1,
    explanation: 'El uso de quinolonas o rifabutina son las estrategias de rescate estándar tras múltiples fallas.',
    fisiopato: 'La rifabutina inhibe la ARN polimerasa bacteriana y tiene una tasa de resistencia primaria muy baja en H. pylori.',
    clinicalPearl: 'Cuidado con la mielosupresión asociada a la Rifabutina.',
    guideline: 'Maastricht VI / Florence Consensus.',
    whyWrong: { 0: 'No se recomienda repetir el mismo esquema sin antibiograma.', 2: 'Ineficaz (resistencia inducida).', 3: 'Condena al paciente a complicaciones crónicas.' },
    pillar: 'Mastery'
  },
  {
    id: 'hp-013',
    topic: 'h_pylori',
    difficulty: 'Fellow',
    text: '¿Cuál es la recomendación actual sobre la biopsia gástrica para H. pylori si el paciente requiere una endoscopia por otra razón?',
    options: ['Solo biopsiar si hay úlcera visible', 'Biopsia obligatoria (protocolo de Sydney) en todo paciente con dispepsia o screening de cáncer, salvo contraindicación', 'No biopsiar si tiene un test de aire previo negativo', 'Solo biopsiar el antro'],
    correctIndex: 1,
    explanation: 'El protocolo de Sydney (cuerpo y antro) maximiza la sensibilidad y permite evaluar atrofia/metaplasia.',
    fisiopato: 'H. pylori puede tener una distribución parcheada, por lo que biopsias múltiples de distintas zonas son necesarias.',
    clinicalPearl: 'Asegúrese de suspender el IBP 2 semanas antes para no falsear la histología.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Detecta infección pero pierde el beneficio del screening de cáncer.', 2: 'El test de aire puede ser falso negativo (ej: toma de IBP).', 3: 'Insuficiente para mapear la extensión de la gastritis.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: CIRROSIS (EXPANDIDO 6 - INFECCIONES) ---
  {
    id: 'cir-023',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: 'En un paciente cirrótico con ascitis y hemorragia digestiva alta, ¿por qué es mandatorio iniciar profilaxis con Ceftriaxona?',
    options: ['Para tratar una posible neumonía', 'Porque reduce la tasa de infecciones bacterianas, el resangrado y la mortalidad', 'Para prevenir la endocarditis bacteriana', 'Por efecto vasoconstrictor directo'],
    correctIndex: 1,
    explanation: 'La hemorragia digestiva induce traslocación bacteriana y falla inmune transitoria.',
    fisiopato: 'El paso de bacterias desde la luz intestinal al torrente sanguíneo bajo estrés aumenta la presión portal y las citoquinas inflamatorias.',
    clinicalPearl: 'La dosis estándar es 1g/día por 7 días.',
    guideline: 'Manual Chileno 2025 / Baveno VII.',
    whyWrong: { 0: 'Efecto secundario beneficioso, pero no el objetivo primario.', 2: 'Extremadamente raro en este contexto.', 3: 'Los antibióticos no son vasosactivos.' },
    pillar: 'Must-Know'
  },
  {
    id: 'cir-024',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el valor diagnóstico de Gradiente Albúmina Suero-Ascitis (GASA) que indica Hipertensión Portal?',
    options: ['GASA < 1.1 g/dL', 'GASA >= 1.1 g/dL', 'GASA = 0', 'GASA > 2.5 g/dL'],
    correctIndex: 1,
    explanation: 'Un gradiente elevado indica que la ascitis es por transudado secundario a presión hidrostática.',
    fisiopato: 'La diferencia de presión osmótica (albúmina) equilibra la presión hidrostática portal elevada.',
    clinicalPearl: 'Si el GASA es >= 1.1 pero las proteínas totales en ascitis son > 2.5, sospeche causas post-sinusoidales (ej: falla cardiaca).',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Sugerente de procesos inflamatorios/malignos peritonaeles.', 2: 'Imposible fisiológicamente.', 3: 'Umbral muy alto e inespecífico.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: PANCREATITIS (EXPANDIDO 5 - COMPLICACIONES) ---
  {
    id: 'pan-013',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es el manejo inicial recomendado para una necrosis pancreática amurallada (WON) de 8 cm que causa compresión gástrica y vómitos?',
    options: ['Drenaje quirúrgico abierto inmediato', 'Drenaje transmural guiado por endosonografía (EUS) con prótesis de aposición luminal (LAMS)', 'Aspiración por aguja fina (FNA) simple', 'Colocación de sonda nasogástrica y esperar 6 meses'],
    correctIndex: 1,
    explanation: 'El "Step-up approach" endoscópico es hoy el estándar para colecciones sintomáticas.',
    fisiopato: 'La prótesis permite el drenaje continuo y puede servir como puerta de entrada para una necrosectomía endoscópica.',
    clinicalPearl: 'Solo intervenga si hay síntomas o sospecha de infección.',
    guideline: 'IAP/APA Evidence-based guidelines.',
    whyWrong: { 0: 'Mayor morbilidad que el abordaje mínimamente invasivo.', 2: 'Alta tasa de recurrencia e infección.', 3: 'Poco probable que resuelva el efecto de masa.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: MUERTE SÚBITA / PROTOCOLO SIMULACRO (FENÓMENOS VÍA AÉREA) ---
  {
    id: 'ms-006',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: 'Durante una ERE (CPRE), el paciente comienza con estridor inspiratorio y signos de lucha respiratoria tras el uso de Midazolam/Fentanilo. ¿Cuál es la sospecha inmediata?',
    options: ['Broncoespasmo severo', 'Laringoespasmo', 'Edema agudo de pulmón', 'Infarto agudo al miocardio'],
    correctIndex: 1,
    explanation: 'El laringoespasmo es una complicación temida de la sedación que impide la ventilación.',
    fisiopato: 'Cierre reflejo de las cuerdas vocales ante un estímulo irritativo en la vía aérea glótica.',
    clinicalPearl: 'Maniobra de Larson (presión en escotadura mandibular) y presión positiva son los primeros pasos.',
    guideline: 'Difficult Airway Management during Sedation.',
    whyWrong: { 0: 'Tendría sibilancias espiratorias, no estridor.', 2: 'Causa estertores y disnea pero no estridor súbito post-sedación.', 3: 'Dolor o cambios en ECG.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'ps-004',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: 'Escenario: Se rompe una várice esofágica masiva "en chorro" durante el primer intento de ligadura. La visión es nula por la sangre. ¿Cuál es la siguiente maniobra correcta?',
    options: ['Retirar el endoscopio y enviar a cirugía', 'Insuflar aire masivamente y lavar con agua; si no funciona, intentar ligar a ciegas en el cardias', 'Colocar un balón de Sengstaken-Blakemore inmediatamente para estabilizar y luego re-intentar', 'Administrar adrenalina en el esófago'],
    correctIndex: 2,
    explanation: 'El uso del balón es una medida de puente salvadora en el sangrado varicoso incoercible.',
    fisiopato: 'El taponamiento mecánico directo sobre la unión gastroesofágica detiene el flujo hacia el plexo submucoso varicoso.',
    clinicalPearl: 'No deje el balón inflado más de 24 horas por riesgo de necrosis esofágica.',
    guideline: 'Baveno VII.',
    whyWrong: { 0: 'Mortalidad altísima en agudo sin estabilidad.', 1: 'Garantiza una falla y posible aspiración.', 3: 'Ineficaz para sangrado venoso portal.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CELIACA (EXPANDIDO 6 - REFRACTARIA) ---
  {
    id: 'cel-008',
    topic: 'celiaca',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la característica inmunofenotípica de los linfocitos intraepiteliales (LIE) que define a la Enfermedad Celiaca Refractaria Tipo II?',
    options: ['Presencia de CD3 y CD8 en superficie', 'Pérdida de CD3 y CD8 en superficie (linfocitos aberrantes)', 'Aumento de CD4 únicamente', 'Presencia de marcadores B (CD20)'],
    correctIndex: 1,
    explanation: 'La Refractaria Tipo II se considera un linfoma intraepitelial críptico.',
    fisiopato: 'La expansión de clones de LIEs con reordenamiento del receptor de células T y fenotipo aberrante (sCD3-, cCD3+, CD8-) tiene alto riesgo de progresión masiva.',
    clinicalPearl: 'El Tipo II tiene un pronóstico mucho peor y riesgo de Linfoma de Células T asociado a Enteropatía (EATL).',
    guideline: 'Manual Chileno 2025 / ESsCD guidelines.',
    whyWrong: { 0: 'Fenotipo normal/Marsh.', 2: 'No es típico de LIEs celiacos.', 3: 'Sugerente de linfoma B, no celiaca.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HDA (EXPANDIDO 6 - VÁRICES GÁSTRICAS) ---
  {
    id: 'hda-010',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: 'En un paciente con Hemorragia por Várices Gástricas fúndicas (GOV2 o IGV1), ¿cuál es el agente de inyección endoscópica de elección?',
    options: ['Adrenalina 1:10.000', 'Cianoacrilato', 'Polidocanol', 'Suero fisiológico'],
    correctIndex: 1,
    explanation: 'El cianoacrilato ("pegamento") es más efectivo que la ligadura para várices fúndicas debido al flujo mayor.',
    fisiopato: 'Se polimeriza instantáneamente al contacto con la sangre, obliterando el vaso de gran calibre.',
    clinicalPearl: 'Asegúrese de usar una técnica de inyección rápida y lavar el canal para no dañar el endoscopio.',
    guideline: 'Baveno VII / ASGE Guidelines.',
    whyWrong: { 0: 'Ineficaz y peligroso en várices.', 2: 'Usado en várices esofágicas pequeñas pero menos efectivo en fondo.', 3: 'No tiene efecto hemostático.' },
    pillar: 'Mastery'
  },
  {
    id: 'hda-011',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál es el umbral de Hemoglobina recomendado para transfundir a un paciente con HDA aguda sin comorbilidades cardiovasculares graves?',
    options: ['Hb < 10 g/dL', 'Hb < 7 g/dL', 'Hb < 9 g/dL', 'Transfusión profiláctica siempre'],
    correctIndex: 1,
    explanation: 'La estrategia restrictiva mejora los desenlaces y evita el aumento de la presión portal en cirróticos.',
    fisiopato: 'La sobre-expansión de volumen aumenta la presión en el sistema venoso, favoreciendo el resangrado varicoso.',
    clinicalPearl: 'El objetivo tras la transfusión es mantener Hb entre 7 y 9 g/dL.',
    guideline: 'Villanueva et al. / NEJM / Manual Chileno 2025.',
    whyWrong: { 0: 'Estrategia liberal asociada a mayor resangrado.', 2: 'Reservado para pacientes con enfermedad coronaria inestable.', 3: 'Error clínico grave.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PERFIL HEPÁTICO (EXPANDIDO 5 - AUTOINMUNE) ---
  {
    id: 'ph-034',
    topic: 'perfil_hepatico',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el anticuerpo más específico para el diagnóstico de Hepatitis Autoinmune (HAI) Tipo 2?',
    options: ['ANA (Anticuerpos antinucleares)', 'Anti-LKM1 (Antimicrosoma de hígado y riñón tipo 1)', 'SMA (Anticuerpo antimúsculo liso)', 'Anticuerpos antimitocondriales (AMA)'],
    correctIndex: 1,
    explanation: 'La HAI tipo 2 es más frecuente en niños y adultos jóvenes, y se define por Anti-LKM1 o Anti-LC1.',
    fisiopato: 'Pérdida de la tolerancia inmunológica contra el citocromo P450 2D6 del hepatocito.',
    clinicalPearl: 'La HAI tipo 1 es la más común en adultos y se asocia a ANA y SMA.',
    guideline: 'AASLD guidelines: Autoimmune Hepatitis.',
    whyWrong: { 0: 'Inespecífico; presente en Tipo 1.', 2: 'Típico de Tipo 1.', 3: 'Típico de Cirrosis Biliar Primaria (CBP).' },
    pillar: 'Mastery'
  },

  // --- SECTOR: VÍAS BILIARES (EXPANDIDO 6 - TUMORES) ---
  {
    id: 'vb-009',
    topic: 'vias_biliares',
    difficulty: 'Staff',
    text: '¿Cuál es la clasificación utilizada para describir la extensión anatómica del Colangiocarcinoma Hiliar (Tumor de Klatskin)?',
    options: ['Clasificación de Bismuth-Corlette', 'Clasificación de Child-Pugh', 'Clasificación de Forrest', 'Clasificación de Hinchey'],
    correctIndex: 0,
    explanation: 'Define la afectación de la confluencia biliar y los conductos hepáticos derechos/izquierdos.',
    fisiopato: 'La localización determina la posibilidad de resección quirúrgica y el tipo de drenaje biliar necesario.',
    clinicalPearl: 'Tipo IV implica afectación de ambos conductos secundarios o confluencia múltiple, sugiriendo irresecabilidad.',
    guideline: 'Manual Chileno 2025 /外科学 text.',
    whyWrong: { 1: 'Mide reserva funcional hepática.', 2: 'Mide riesgo de sangrado en úlceras.', 3: 'Mide severidad de diverticulitis.' },
    pillar: 'Staff Level'
  },

  // --- SECTOR: MASLD (EXPANDIDO 8 - FIBROSIS AVANZADA) ---
  {
    id: 'masld-008',
    topic: 'masld',
    difficulty: 'Subspecialist',
    text: 'En un paciente con MASLD y FIB-4 de 2.1, ¿cuál es el siguiente paso recomendado para la estratificación de riesgo según las guías AGA/AASLD?',
    options: ['Biopsia hepática inmediata', 'Prueba de rigidez hepática (LSM) por elastografía (VCTE)', 'Repetir FIB-4 en 1 mes', 'Iniciar tratamiento con estatinas únicamente'],
    correctIndex: 1,
    explanation: 'El FIB-4 entre 1.3 y 2.67 se considera una "zona gris" que requiere un segundo test no invasivo.',
    fisiopato: 'La elastografía por transigencia vibracional (FibroScan) mide la rigidez del parénquima, correlacionándose con el grado de fibrosis.',
    clinicalPearl: 'Un valor de LSM < 8.0 kPa descarta razonablemente fibrosis avanzada en este grupo.',
    guideline: 'AGA Clinical Practice Update 2022 / Manual Chileno 2025.',
    whyWrong: { 0: 'Muy invasivo para screening inicial.', 2: 'No aporta nueva información diagnóstica.', 3: 'Manejo lipídico necesario pero no estratifica el hígado.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: PANCREATITIS (EXPANDIDO 6 - INSUFICIENCIA EXOCRINA) ---
  {
    id: 'pan-014',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es la dosis inicial de Terapia de Reemplazo de Enzimas Pancreáticas (PERT) recomendada en las comidas principales para un adulto con insuficiencia exocrina por pancreatitis crónica?',
    options: ['10,000 unidades de lipasa', '25,000 - 50,000 unidades de lipasa', '100,000 unidades de lipasa', 'Solo se indica si hay esteatorrea visible'],
    correctIndex: 1,
    explanation: 'Dosis menores a 25,000 unidades suelen ser ineficaces para digerir una comida completa.',
    fisiopato: 'Se requiere al menos un 10% de la secreción pancreática normal de lipasa para evitar la malabsorción de grasas.',
    clinicalPearl: 'Las enzimas deben tomarse *durante* o justo al iniciar la comida, no después.',
    guideline: 'UEG Evidence-based guidelines on chronic pancreatitis.',
    whyWrong: { 0: 'Dosis pediátrica o insuficiente.', 2: 'Dosis de rescate/ajuste, no inicial estándar.', 3: 'La malabsorción subclínica también causa déficit de vitaminas liposolubles.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: ERGE (EXPANDIDO 6 - ESOFAGO DE BARRETT) ---
  {
    id: 'erge-008',
    topic: 'erge',
    difficulty: 'Subspecialist',
    text: 'En un paciente con Esófago de Barrett y displasia de bajo grado confirmada por dos patólogos expertos, ¿cuál es la conducta preferida actualmente?',
    options: ['Endoscopia cada 6 meses indefinidamente', 'Ablación por radiofrecuencia (RFA) o vigilancia estrecha', 'Esofaguectomía', 'Duplicar dosis de IBP y no vigilar'],
    correctIndex: 1,
    explanation: 'La ablación reduce significativamente el riesgo de progresión a adenocarcinoma en comparación con la vigilancia.',
    fisiopato: 'La eliminación del epitelio metaplásico/displásico permite la re-epitelización con tejido escamoso normal.',
    clinicalPearl: 'La decisión debe ser compartida con el paciente, explicando riesgos de progresión vs riesgos del procedimiento.',
    guideline: 'ACG 2022 / ESGE guidelines.',
    whyWrong: { 0: 'Aceptable anteriormente, pero la RFA es superior hoy.', 2: 'Demasiado agresivo para displasia de bajo grado.', 3: 'Error clínico; la displasia requiere intervención o vigilancia activa.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: EII (EXPANDIDO 5 - TERAPIAS AVANZADAS) ---
  {
    id: 'eii-020',
    topic: 'eii',
    difficulty: 'Fellow',
    text: '¿Cuál de los siguientes biológicos está específicamente indicado para el tratamiento de la enfermedad de Crohn fistulizante perianal refractaria?',
    options: ['Vedolizumab', 'Infliximab', 'Ustekinumab', 'Guselkumab'],
    correctIndex: 1,
    explanation: 'El Infliximab es el biológico con mayor evidencia y recomendación de primera línea para Crohn fistulizante.',
    fisiopato: 'Su potente efecto anti-TNF sistémico y tisular favorece el cierre de trayectos fistulosos y reduce la secreción.',
    clinicalPearl: 'Suele requerir niveles valle más altos (> 10 ug/mL) para el cierre de fístulas.',
    guideline: 'ECCO Guidelines / Manual Chileno 2025.',
    whyWrong: { 0: 'Efecto intestinal selectivo; menos eficaz en fístulas complejas.', 2: 'Eficaz pero con menos peso de evidencia que IFX en este escenario.', 3: 'En estudio para EII.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: MUERTE SÚBITA / EMERGENCIAS (FARMACOLOGÍA) ---
  {
    id: 'ms-007',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: 'En el contexto de un paro cardiaco por Fibrilación Ventricular refractaria a 3 descargas, ¿cuál es la dosis de Amiodarona recomendada?',
    options: ['150 mg EV bolo', '300 mg EV bolo', '1 mg EV bolo', '10 mg/kg'],
    correctIndex: 1,
    explanation: 'La primera dosis de amiodarona en FV/TVSP es de 300 mg bolo.',
    fisiopato: 'Es un antiarrítmico de clase III que prolonga el potencial de acción y el periodo refractario, bloqueando canales de sodio, potasio y calcio.',
    clinicalPearl: 'La segunda dosis es de 150 mg.',
    guideline: 'ACLS 2020.',
    whyWrong: { 0: 'Dosis inicial insuficiente (es la segunda dosis).', 2: 'Dosis de adrenalina.', 3: 'No es la dosificación estándar en paro adulto.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO (GESTIÓN DE CRISIS) ---
  {
    id: 'ps-005',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: 'En un simulacro de perforación colónica tras polipectomía difícil, ¿cuál es el primer paso recomendado si la perforación mide < 10 mm y se detecta inmediatamente?',
    options: ['Cierre endoscópico inmediato con clips mecánicos', 'Enviar a cirugía de urgencia sin intentar cierre', 'Solo tratamiento antibiótico y observación', 'Insuflar con CO2 al máximo para ver mejor'],
    correctIndex: 0,
    explanation: 'El cierre endoscópico inmediato (Through-the-scope clips) es altamente efectivo en perforaciones pequeñas detectadas precozmente.',
    fisiopato: 'Evita la salida masiva de contenido colónico al peritoneo, reduciendo el riesgo de peritonitis química y bacteriana.',
    clinicalPearl: 'El uso de insuflación con CO2 es mandatorio para reducir la tensión del neumoperitoneo.',
    guideline: 'ESGE Position Statement: Iatrogenic endoscopic perforations.',
    whyWrong: { 1: 'La cirugía se reserva para fallas del cierre endoscópico o sepsis.', 2: 'Riesgo de peritonitis severa.', 3: 'El CO2 se absorbe más rápido, pero no debe ser a presión máxima sin control.' },
    pillar: 'Mastery'
  },
  {
    id: 'ps-006',
    topic: 'protocolo_simulacro',
    difficulty: 'Staff',
    text: 'Escenario: Falla el equipo de electrocirugía en medio de una disección submucosa (DSE) con sangrado activo. ¿Qué principio del CRM (Crisis Resource Management) se aplica aquí?',
    options: ['Fijación en la tarea (Task fixation)', 'Anticipación y planificación (Previsión de equipos de respaldo)', 'Liderazgo autocrático', 'Ignorar la alarma del equipo'],
    correctIndex: 1,
    explanation: 'La seguridad del paciente depende de tener planes de respaldo (redundancia) ante fallas técnicas.',
    fisiopato: 'El estrés técnico aumenta la probabilidad de errores humanos en cadena.',
    clinicalPearl: 'Siempre verifique el equipo y tenga una alternativa (ej: clips) antes de iniciar un procedimiento complejo.',
    guideline: 'Patient Safety in Endoscopy.',
    whyWrong: { 0: 'Es un error común a evitar.', 2: 'El liderazgo debe ser colaborativo.', 3: 'Pone en riesgo la vida del paciente.' },
    pillar: 'Staff Level'
  },

  // --- SECTOR: MUERTE SÚBITA (REANIMACIÓN AVANZADA) ---
  {
    id: 'ms-008',
    topic: 'muerte_subita',
    difficulty: 'Fellow',
    text: '¿Cuál es el capnógrafo (EtCO2) mínimo sugerido durante la RCP que indica que las compresiones son de calidad y que hay chances de retorno a la circulación espontánea?',
    options: ['> 5 mmHg', '> 10-15 mmHg', '> 40 mmHg', 'No se requiere capnografía'],
    correctIndex: 1,
    explanation: 'Un EtCO2 > 10-15 mmHg refleja un gasto cardiaco generado por las compresiones suficiente para eliminar CO2.',
    fisiopato: 'El CO2 espirado es un subrogado directo del flujo sanguíneo pulmonar y sistémico durante el paro.',
    clinicalPearl: 'Si el EtCO2 cae súbitamente bajo 10, revise la calidad de las compresiones.',
    guideline: 'AHA ACLS 2020.',
    whyWrong: { 0: 'Indica RCP inefectiva o muerte celular.', 2: 'Es el valor normal en ventilación espontánea.', 3: 'Es un estándar de cuidado en RCP avanzada.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: HDA (ESTRATIFICACIÓN Y COAGULACIÓN) ---
  {
    id: 'hda-012',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: 'En un paciente cirrótico con HDA y un INR de 2.5, ¿cuál es la recomendación actual respecto al uso de Plasma Fresco Congelado (PFC)?',
    options: ['Transfundir PFC hasta normalizar el INR', 'No se recomienda el uso rutinario de PFC para "corregir" el INR antes de la endoscopia', 'Administrar Vitamina K únicamente', 'Suspender la endoscopia hasta que el INR sea < 1.5'],
    correctIndex: 1,
    explanation: 'El INR en cirrosis no refleja fielmente el riesgo de sangrado debido al déficit paralelo de factores pro y anticoagulantes.',
    fisiopato: 'El PFC aumenta la sobrecarga de volumen y la presión portal, lo que puede empeorar activamente el sangrado varicoso.',
    clinicalPearl: 'Corrija solo si hay una coagulopatía de consumo clara o si el paciente no es cirrótico y toma anticoagulantes.',
    guideline: 'Baveno VII / AASLD Guidelines.',
    whyWrong: { 0: 'Aumenta mortalidad y resangrado.', 2: 'Lenta e ineficaz en agudo.', 3: 'La endoscopia debe ser precoz independiente del INR en cirróticos.' },
    pillar: 'Mastery'
  },
  {
    id: 'hda-013',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál de los siguientes fármacos es un inhibidor de la bomba de protones (IBP) que puede ser administrado en bolo seguido de infusión continua para el manejo de la úlcera péptica Forrest IA?',
    options: ['Omeprazol', 'Pantoprazol', 'Esomeprazol', 'Todos los anteriores según disponibilidad de formulación EV'],
    correctIndex: 3,
    explanation: 'Cualquier IBP EV potente es eficaz si se mantiene el pH gástrico > 6 para estabilizar el coágulo.',
    fisiopato: 'La pepsina degrada el coágulo en medio ácido; la inhibición profunda del ácido previene esta fibrinólisis.',
    clinicalPearl: 'El esquema clásico es 80mg bolo y 8mg/h por 72 horas.',
    guideline: 'ESGE / ACG Guidelines.',
    whyWrong: { 0: 'Válido.', 1: 'Válido.', 2: 'Válido.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: HEPATITIS VIRAL (EXPANDIDO 5 - VHB AVANZADO) ---
  {
    id: 'hep-006',
    topic: 'hepatitis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el significado clínico de la presencia de anticuerpos Anti-HBc totales positivos con HBsAg negativo y Anti-HBs negativo (Core solo)?',
    options: ['Infección aguda temprana', 'Infección pasada (ventana), infección crónica de baja replicación u ocultismo, o un falso positivo', 'Inmunización por vacuna exitosa', 'Curación total definitiva'],
    correctIndex: 1,
    explanation: 'El patrón de "Core solo" requiere una evaluación cuidadosa, especialmente si el paciente recibirá inmunosupresión.',
    fisiopato: 'Puede representar la fase de ventana en recuperación, una infección crónica donde el HBsAg cayó por debajo del límite de detección, o inmunidad antigua debilitada.',
    clinicalPearl: 'En pacientes que van a recibir Anti-CD20 (Rituximab), este patrón obliga a profilaxis antibiótica.',
    guideline: 'AASLD 2024 / Manual Chileno 2025.',
    whyWrong: { 0: 'HBsAg sería positivo.', 2: 'Solo el Anti-HBs sería positivo.', 3: 'Anti-HBs debería ser positivo (> 10 UI/ml).' },
    pillar: 'Mastery'
  },
  {
    id: 'hep-007',
    topic: 'hepatitis',
    difficulty: 'Fellow',
    text: 'En un paciente con Hepatitis B crónica, ¿qué marcador es el mejor predictor de la probabilidad de lograr la "Cura Funcional" (aclaramiento de HBsAg)?',
    options: ['Carga viral (ADN VHB)', 'Niveles cuantitativos de HBsAg (qHBsAg)', 'Nivel de ALT', 'Presencia de HBeAg'],
    correctIndex: 1,
    explanation: 'El descenso en el qHBsAg durante el tratamiento (especialmente con Interferón) predice el éxito de la terapia.',
    fisiopato: 'Refleja la actividad transcripcional del cccDNA (ADN circular cerrado covalentemente) en el núcleo del hepatocito.',
    clinicalPearl: 'Valores < 1000 UI/ml sugieren una mejor respuesta inmunológica del huésped.',
    guideline: 'EASL / AASLD Guidelines.',
    whyWrong: { 0: 'Refleja replicación, pero no necesariamente la carga de cccDNA.', 2: 'Mide daño celular, no control viral.', 3: 'Mide estado del sistema E, no aclaramiento de superficie.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: EII (EXPANDIDO 6 - OPTIMIZACIÓN) ---
  {
    id: 'eii-021',
    topic: 'eii',
    difficulty: 'Subspecialist',
    text: 'Paciente con Colitis Ulcerosa en tratamiento con Adalimumab presenta pérdida de respuesta secundaria. El nivel valle es de 2 ug/ml y los anticuerpos anti-droga son negativos. ¿Cuál es la conducta recomendada?',
    options: ['Cambiar a otra clase de biológico (ej: Ustekinumab)', 'Intensificar la dosis de Adalimumab (ej: semanal) para alcanzar niveles adecuados', 'Añadir corticoides sistémicos de por vida', 'Suspender toda terapia biológica'],
    correctIndex: 1,
    explanation: 'Cuando hay niveles bajos sin anticuerpos, la intensificación de dosis suele recuperar la respuesta.',
    fisiopato: 'La pérdida de respuesta es farmacocinética no mediada por inmunogenicidad (ej: aumento del aclaramiento por inflamación severa).',
    clinicalPearl: 'Busque niveles de Adalimumab > 7.5 ug/ml para una mejor remisión.',
    guideline: 'AGA Clinical Practice Update on TDM.',
    whyWrong: { 0: 'Se reserva para falla biológica con niveles adecuados o falla inmunogénica irreversible.', 2: 'Los corticoides son solo puente.', 3: 'Lleva a recaída grave.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MUERTE SÚBITA (SITUACIONES ESPECIALES) ---
  {
    id: 'ms-009',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: '¿Cuál es la profundidad de las compresiones torácicas recomendada en un adulto durante la RCP de alta calidad?',
    options: ['Al menos 2 cm', 'Al menos 5 cm (pero sin exceder 6 cm)', 'Al menos 10 cm', 'No importa la profundidad si es rápido'],
    correctIndex: 1,
    explanation: 'Una profundidad adecuada asegura un gasto cardiaco suficiente para perfundir órganos vitales.',
    fisiopato: 'La compresión mecánica del corazón entre el esternón y la columna genera el flujo sistólico necesario.',
    clinicalPearl: 'Permita el retroceso completo del tórax entre compresiones.',
    guideline: 'AHA ACLS 2020.',
    whyWrong: { 0: 'Insuficiente para generar flujo.', 2: 'Riesgo excesivo de fracturas costales, daño pulmonar y hepático.', 3: 'Error crítico de formación.' },
    pillar: 'Must-Know'
  },
  {
    id: 'ms-010',
    topic: 'muerte_subita',
    difficulty: 'Fellow',
    text: 'En un paro cardiaco intrahospitalario durante una endoscopia, ¿cuál es el tiempo meta para realizar la primera desfibrilación en ritmos desfibrilables (FV/TVSP)?',
    options: ['< 3 minutos', '< 10 minutos', 'En los primeros 30 segundos obligatoriamente', 'Cuando llegue el cardiólogo'],
    correctIndex: 0,
    explanation: 'La rapidez de la desfibrilación es el determinante más crítico de sobrevida emocional y neurológica.',
    fisiopato: 'La FV es un estado de consumo atp miocárdico extremo; la descarga eléctrica reinicia el sistema de conducción.',
    clinicalPearl: 'Tenga el desfibrilador siempre cargado o a mano en salas de sedación profunda.',
    guideline: 'AHA / ERC Guidelines.',
    whyWrong: { 1: 'Sobrevida cae drásticamente después de 5 minutos.', 2: 'Idealmente sí, pero el estándar de calidad hospitalaria es < 3 min.', 3: 'La endoscopia debe ser liderada por el equipo presente.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO (DSE / ENDOSCOPIA AVANZADA) ---
  {
    id: 'ps-007',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: 'Durante una Disección Submucosa Endoscópica (DSE) de una lesión gástrica, el paciente desarrolla un neumoperitoneo a tensión con compromiso ventilatorio. ¿Cuál es la maniobra de emergencia inmediata?',
    options: ['Suspender el procedimiento y esperar', 'Descompresión percutánea inmediata con una aguja de grueso calibre (ej: 14G) en el abdomen', 'Aumentar la presión de la ventilación mecánica', 'Intubar al paciente si no lo estaba'],
    correctIndex: 1,
    explanation: 'El neumoperitoneo a tensión en endoscopia se maneja como una emergencia quirúrgica/descompresiva inmediata.',
    fisiopato: 'El aire atrapado desplaza el diafragma y colapsa el retorno venoso, comprometiendo la hemodinamia.',
    clinicalPearl: 'Se realiza en el punto de máxima tensión o en fosa iliaca derecha/hipocondrios.',
    guideline: 'ESGE Position Statement on Complications.',
    whyWrong: { 0: 'El paciente entrará en paro respiratorio.', 2: 'Puede empeorar el atrapamiento de aire si hay fístula abierta.', 3: 'No resuelve la causa mecánica abdominal.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO (SANGRE Y FUEGO) ---
  {
    id: 'ps-008',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: 'Escenario: Durante una endoscopia terapéutica con argón plasma (APC) en un paciente con traqueostomía y O2 al 100%, se produce una deflagración (fuego) en la vía aérea. ¿Cuál es la primera acción?',
    options: ['Lanzar agua con la jeringa de irrigación', 'Retirar inmediatamente el suministro de oxígeno y el endoscopio', 'Activar la alarma de incendios del hospital', 'Administrar corticoides EV'],
    correctIndex: 1,
    explanation: 'El fuego en vía aérea es una emergencia catastrófica; cortar el triángulo del fuego (comburente O2 + chispa APC) es vital.',
    fisiopato: 'El O2 al 100% crea una atmósfera altamente inflamable; el APC proporciona la energía de activación.',
    clinicalPearl: 'Prevenga usando FiO2 < 30% si va a usar electrocirugía cerca de la vía aérea.',
    guideline: 'ASA Practice Advisory on Operating Room Fires.',
    whyWrong: { 0: 'Útil después de retirar el O2, pero no es la primera medida salvadora.', 2: 'Importante, pero secundaria a la extinción inmediata.', 3: 'Manejo diferido de la lesión.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MUERTE SÚBITA (ETIOLOGÍAS) ---
  {
    id: 'ms-011',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: '¿Cuál es la causa más común de muerte súbita de origen no cardiaco en un paciente cirrótico hospitalizado?',
    options: ['Embolia pulmonar masiva', 'Hemorragia digestiva varicosa incoercible y shock hipovolémico', 'Encefalopatía hepática grado IV', 'Peritonitis bacteriana espontánea'],
    correctIndex: 1,
    explanation: 'La hemorragia por várices es la emergencia más letal y súbita en la historia natural de la cirrosis.',
    fisiopato: 'La ruptura de várices de gran calibre bajo alta presión portal genera una hipovolemia crítica en minutos.',
    clinicalPearl: 'El manejo preventivo con betabloqueantes y ligadura es clave.',
    guideline: 'Baveno VII.',
    whyWrong: { 0: 'Posible pero menos frecuente que el sangrado.', 2: 'Causa muerte por falla orgánica, no súbita generalmente.', 3: 'Proceso infeccioso de evolución más lenta.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: HDB (EXPANDIDO 4 - ANGIODISPLASIAS) ---
  {
    id: 'hdb-004',
    topic: 'hdb',
    difficulty: 'Subspecialist',
    text: 'En un paciente con sangrado recurrente por angiodisplasias de intestino delgado (obscure GI bleeding), ¿qué fármaco ha demostrado utilidad en reducir la necesidad transfusional?',
    options: ['Octreotide de liberación prolongada o Talidomida', 'Aspirina a dosis bajas', 'Omeprazol', 'Vitamina K'],
    correctIndex: 0,
    explanation: 'El octreotide y la talidomida inhiben el factor de crecimiento endotelial vascular (VEGF).',
    fisiopato: 'Las angiodisplasias son malformaciones vasculares dependientes de angiogénesis descontrolada.',
    clinicalPearl: 'Use octreotide si el manejo endoscópico no es factible o es recurrente.',
    guideline: 'ACG Guidelines on Small Bowel Bleeding.',
    whyWrong: { 1: 'Empeora el sangrado.', 2: 'No tiene efecto sobre vasos malformados.', 3: 'Inútil si no hay déficit de factores.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DIARREA CRÓNICA (EXPANDIDO 4 - SIBO) ---
  {
    id: 'dc-005',
    topic: 'diarrea_cronica',
    difficulty: 'Staff',
    text: '¿Cuál es el valor de corte para considerar positivo un test de aliento con Lactulosa o Glucosa para Sobrecrecimiento Bacteriano del Intestino Delgado (SIBO) según el Consenso de Norteamérica?',
    options: ['Aumento de Hidrógeno >= 20 ppm dentro de los primeros 90 minutos', 'Aumento de Hidrógeno > 5 ppm al final del test', 'Presencia de Metano > 1 ppm', 'Cualquier aumento de Hidrógeno'],
    correctIndex: 0,
    explanation: 'Un aumento precoz indica que las bacterias en el intestino delgado están fermentando el sustrato.',
    fisiopato: 'La fermentación bacteriana prematura produce gas (H2) que se absorbe al torrente y se exhala.',
    clinicalPearl: 'El metano >= 10 ppm en cualquier punto define IMO (Intestinal Methanogen Overgrowth).',
    guideline: 'North American Breath Testing Consensus.',
    whyWrong: { 1: 'Umbral insuficiente.', 2: 'El corte para metano es >= 10 ppm.', 3: 'Inespecífico.' },
    pillar: 'Must-Know'
  },
  {
    id: 'dc-006',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'En un paciente con diarrea crónica, esteatorrea y antecedente de bypass gástrico hace 10 años, ¿cuál es la causa más probable de su cuadro?',
    options: ['Insuficiencia pancreática relativa por asincronía digestiva o SIBO', 'Enfermedad de Crohn tardía', 'Celiaquía de novo', 'Linfoma intestinal'],
    correctIndex: 0,
    explanation: 'La anatomía post-bypass favorece el estancamiento (asa ciega) y la mala mezcla de enzimas y comida.',
    fisiopato: 'El SIBO es muy común en asas aferentes largas, y la descarga pancreática puede no coincidir con el quimo alimentario.',
    clinicalPearl: 'Trate con Rifaximina y suplementos enzimáticos si hay sospecha clínica alta.',
    guideline: 'Manual Chileno 2025 / Clinical Nutrition.',
    whyWrong: { 1: 'Menos probable que complicaciones mecánicas/funcionales del bypass.', 2: 'Raro.', 3: 'Raro.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: HDA (EXPANDIDO 7 - TIPS PRECOZ) ---
  {
    id: 'hda-014',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: 'En un paciente cirrótico Child-Pugh C (< 14 puntos) con HDA varicosa, ¿cuál es el tiempo recomendado para realizar un TIPS de rescate preventivo (Pre-emptive TIPS)?',
    options: ['En las primeras 24-72 horas post-endoscopia exitosa', 'Inmediatamente si hay sangrado', 'A los 30 días de seguimiento', 'Solo si vuelve a sangrar'],
    correctIndex: 0,
    explanation: 'El TIPS precoz reduce el resangrado y la mortalidad en pacientes con alto riesgo de falla al tratamiento médico/endoscópico.',
    fisiopato: 'Al reducir la presión portal de forma definitiva, se elimina el motor hemodinámico del sangrado varicoso.',
    clinicalPearl: 'No se recomienda en Child C >= 14 puntos por riesgo de falla hepática fulminante.',
    guideline: 'Baveno VII / Manual Chileno 2025.',
    whyWrong: { 1: 'Se llama TIPS de rescate si el sangrado es incoercible; el preventivo es post-estabilización.', 2: 'Se pierde el beneficio de sobrevida.', 3: 'Ese es el manejo estándar antiguo.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CIRROSIS (EXPANDIDO 7 - ENCEFALOPATÍA) ---
  {
    id: 'cir-025',
    topic: 'cirrosis',
    difficulty: 'Fellow',
    text: '¿Cuál es el mecanismo de acción de la Rifaximina en el tratamiento de la Encefalopatía Hepática recurrente?',
    options: ['Antibiótico no absorbible que reduce la microbiota productora de amoniaco', 'Laxante osmótico', 'Aumenta la excreción urinaria de urea', 'Bloquea los receptores GABA'],
    correctIndex: 0,
    explanation: 'Al actuar solo en la luz intestinal, reduce la carga bacteriana uricolítica.',
    fisiopato: 'Menores niveles de amoniaco (NH3) luminal significan menor paso a la circulación portal y menor edema de astrocitos.',
    clinicalPearl: 'Se usa combinada con Lactulosa para prevenir recurrencias (estudio de Bajaj).',
    guideline: 'AASLD guidelines: Hepatic Encephalopathy.',
    whyWrong: { 1: 'Mecanismo de la lactulosa.', 2: 'Inexistente.', 3: 'Mecanismo propuesto para el flumazenil, pero de utilidad limitada.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: EII (EXPANDIDO 7 - EMBARAZO) ---
  {
    id: 'eii-022',
    topic: 'eii',
    difficulty: 'Subspecialist',
    text: 'En una paciente con Enfermedad de Crohn estable en tratamiento con Infliximab que desea embarazarse, ¿cuál es la recomendación correcta?',
    options: ['Suspender el biológico inmediatamente por teratogenicidad', 'Mantener el tratamiento, ya que el riesgo de recaída es mayor que el riesgo del fármaco', 'Cambiar a metotrexato', 'Solo usar corticoides'],
    correctIndex: 1,
    explanation: 'La mayoría de los anti-TNF son seguros en el embarazo; la actividad de la enfermedad es el mayor riesgo para el feto.',
    fisiopato: 'Los anticuerpos IgG1 (como IFX) cruzan la placenta activamente solo en el segundo y tercer trimestre.',
    clinicalPearl: 'Considere programar la última dosis unas semanas antes del parto para reducir niveles en el recién nacido.',
    guideline: 'Toronto Consensus / ECCO Guidelines.',
    whyWrong: { 0: 'Aumenta riesgo de recaída y pérdida gestacional.', 2: 'El metotrexato es absolutamente teratogénico y contraindicado.', 3: 'Los corticoides no mantienen remisión a largo plazo.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MUERTE SÚBITA (VENTILACIÓN SEGUNDA LÍNEA) ---
  {
    id: 'ms-012',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: 'Durante la RCP, se opta por una vía aérea avanzada (intubación). ¿Cuál es la frecuencia ventilatoria recomendada una vez el tubo está instalado?',
    options: ['1 ventilación cada 2-3 segundos', '1 ventilación cada 6 segundos (10 por minuto)', '2 ventilaciones después de cada 30 compresiones', '30 ventilaciones por minuto'],
    correctIndex: 1,
    explanation: 'Evitar la hiperventilación es clave para no aumentar la presión intratorácica y no disminuir el retorno venoso.',
    fisiopato: 'La presión positiva excesiva colapsa las venas cavas, reduciendo drásticamente la eficacia de la RCP.',
    clinicalPearl: 'Use capnografía para asegurar la posición del tubo.',
    guideline: 'AHA ACLS 2020.',
    whyWrong: { 0: 'Hiperventilación severa.', 2: 'Frecuencia para RCP sin vía aérea avanzada.', 3: 'Peligroso.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO (EMBOLIA GASEOSA) ---
  {
    id: 'ps-009',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: 'Durante una CPRE compleja, el paciente presenta un colapso cardiovascular súbito tras una esfinterotomía con abundante sangrado e insuflación de aire (no CO2). ¿Cuál es la sospecha diagnóstica más grave?',
    options: ['Infarto de miocardio', 'Embolia gaseosa sistémica/portal', 'Perforación retroperitoneal', 'Reacción al medio de contraste'],
    correctIndex: 1,
    explanation: 'La entrada de aire a las venas biliares o hepáticas abiertas puede causar un bloqueo mecánico en el corazón derecho.',
    fisiopato: 'El aire viaja al ventrículo derecho, formando un "air lock" que impide el paso de sangre hacia la arteria pulmonar.',
    clinicalPearl: 'Posicione al paciente en decúbito lateral izquierdo y Trendelenburg (maniobra de Durant).',
    guideline: 'Safety in Advanced Endoscopy.',
    whyWrong: { 0: 'Posible pero el contexto de CPRE + aire favorece la embolia.', 2: 'Causa dolor e inflamación pero no colapso cardiovascular "relámpago".', 3: 'Anafilaxia es posible pero menos común que el riesgo mecánico del aire.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DOLOR ABDOMINAL (EXPANDIDO 6 - ISQUEMIA) ---
  {
    id: 'da-006',
    topic: 'dolor_abdominal',
    difficulty: 'Subspecialist',
    text: 'Un paciente de 70 años con antecedentes de tabaquismo presenta dolor abdominal post-prandial severo ("angina abdominal"), baja de peso significativa y miedo a comer. ¿Cuál es el estudio de elección sospechando Isquemia Mesentérica Crónica?',
    options: ['Angio-TAC de abdomen y pelvis', 'Colonoscopia', 'Ecografía Doppler de vasos mesentéricos', 'Endoscopia Digestiva Alta'],
    correctIndex: 0,
    explanation: 'El Angio-TAC permite visualizar la anatomía arterial y detectar estenosis en el tronco celíaco o arteria mesentérica superior.',
    fisiopato: 'La aterosclerosis reduce el flujo sanguíneo abdominal, el cual se vuelve insuficiente ante la demanda metabólica de la digestión.',
    clinicalPearl: 'Suele requerir el compromiso de al menos 2 de los 3 vasos principales para ser sintomático.',
    guideline: 'ESVS Guidelines on Chronic Mesenteric Ischemia.',
    whyWrong: { 1: 'Detecta colitis isquémica, pero no la causa arterial principal.', 2: 'Útil como screening pero operador dependiente y menos preciso para planificación quirúrgica.', 3: 'No visualiza vasos mesentéricos.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DIARREA AGUDA (EXPANDIDO 6 - C. DIFFICILE) ---
  {
    id: 'dag-011',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: '¿Cuál es el tratamiento de primera línea recomendado para el primer episodio de infección por Clostridioides difficile (no grave) según las guías actuales?',
    options: ['Fidaxomicina o Vancomicina oral', 'Metronidazol oral', 'Ciprofloxacino', 'Trasplante de microbiota fecal inmediato'],
    correctIndex: 0,
    explanation: 'La fidaxomicina y la vancomicina han demostrado superioridad sobre el metronidazol en tasas de curación y reducción de recurrencias.',
    fisiopato: 'La fidaxomicina es un antibiótico macrocíclico que inhibe la ARN polimerasa con mínimo impacto en la microbiota normal.',
    clinicalPearl: 'El metronidazol solo se reserva si las otras opciones no están disponibles.',
    guideline: 'IDSA/SHEA 2021 Update / Manual Chileno 2025.',
    whyWrong: { 1: 'Ya no se considera primera línea por mayores tasas de falla.', 2: 'Ineficaz contra C. difficile.', 3: 'Reservado para recurrencias múltiples.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: ERGE (EXPANDIDO 7 - MANOMETRÍA) ---
  {
    id: 'erge-009',
    topic: 'erge',
    difficulty: 'Fellow',
    text: 'En la Manometría de Alta Resolución, ¿qué hallazgo es mandatorio para descartar un trastorno motor mayor en un paciente con ERGE refractario antes de una cirugía antirreflujo?',
    options: ['Asegurar un peristaltismo ausente', 'Verificar la integridad de la bomba peristáltica esofágica y descartar Acalasia', 'Medir solo la presión del EEI', 'No se requiere manometría previa a la cirugía'],
    correctIndex: 1,
    explanation: 'La acalasia puede simular síntomas de ERGE; operarla con una funduplicatura causaría una disfagia catastrófica.',
    fisiopato: 'La funduplicatura aumenta la resistencia al vaciamiento; si no hay peristalsis efectiva, el bolo se detiene en el esófago.',
    clinicalPearl: 'Un 10-15% de los pacientes derivados a cirugía por ERGE tienen un diagnóstico manométrico diferente.',
    guideline: 'Chicago Classification 4.0 / Lyon Consensus 2.0.',
    whyWrong: { 0: 'La ausencia de peristalsis es una contraindicación relativa para funduplicatura total.', 2: 'Insuficiente para evaluar el cuerpo esofágico.', 3: 'Error de praxis estándar.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PERFIL HEPÁTICO (EXPANDIDO 6 - ALCOHOL) ---
  {
    id: 'ph-035',
    topic: 'perfil_hepatico',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el puntaje de Maddrey (Discriminant Function) que indica severidad y necesidad de corticoides en la Hepatitis Alcohólica aguda?',
    options: ['> 12', '> 32', '> 100', '> 20'],
    correctIndex: 1,
    explanation: 'Un Maddrey >= 32 identifica pacientes con alta mortalidad a corto plazo que se benefician de Prednisolona.',
    fisiopato: 'El puntaje utiliza la Bilirrubina y el Tiempo de Protrombina para estimar el grado de inflamación sistémica y falla hepática.',
    clinicalPearl: 'Recuerde descartar infección activa y hemorragia antes de iniciar corticoides.',
    guideline: 'AASLD / EASL Alcohol-related liver disease.',
    whyWrong: { 0: 'Umbral muy bajo.', 2: 'Escala no llega a ese rango funcionalmente.', 3: 'No es el punto de corte validado.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HDA (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'hda-015',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál es el manejo inicial de elección para la Hemorragia Digestiva Alta por lesiones de Dieulafoy?',
    options: ['Inyección de adrenalina pura', 'Combinación de terapia mecánica (clips o ligadura) y térmica o inyección', 'Solo observación', 'Cirugía de resección urgente'],
    correctIndex: 1,
    explanation: 'La lesión de Dieulafoy es una arteria submucosa de gran calibre; la terapia mecánica es superior para controlar el vaso arterial.',
    fisiopato: 'Debido al flujo pulsátil, la inyección sola suele ser insuficiente y tiene alto riesgo de resangrado.',
    clinicalPearl: 'Suelen ubicarse en el tercio proximal de la curvatura menor gástrica.',
    guideline: 'ASGE Guidelines on Upper GI Bleeding.',
    whyWrong: { 0: 'Insuficiente para un vaso de ese calibre.', 2: 'Riesgo de muerte por exanguinación.', 3: 'La endoscopia resuelve > 90% de los casos.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: EII (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'eii-023',
    topic: 'eii',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la meta terapéutica ideal ("STRIDE-II") en el manejo a largo plazo de la Enfermedad Inflamatoria Intestinal?',
    options: ['Remisión clínica (ausencia de síntomas)', 'Curación transmural (o radiológica) y normalización de la calidad de vida', 'Normalización de la Calprotectina fecal únicamente', 'Evitar corticoides'],
    correctIndex: 1,
    explanation: 'El concepto de "Treat-to-Target" ha evolucionado hacia la curación profunda y el bienestar bio-psico-social.',
    fisiopato: 'La curación de la mucosa y capas profundas detiene la progresión del daño estructural (estenosis/fístulas).',
    clinicalPearl: 'La remisión clínica es el primer paso, pero no garantiza la ausencia de progresión silente.',
    guideline: 'STRIDE-II Consensus Statement.',
    whyWrong: { 0: 'Insuficiente; hay un "gap" entre síntomas e inflamación.', 2: 'Es un subrogado, no la meta final.', 3: 'Es un componente, no la meta global.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MUERTE SÚBITA (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'ms-013',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: 'En el contexto de un paro cardiaco por sospecha de TEP masivo en la sala de endoscopia, ¿qué fármaco se debe considerar si la RCP falla inicialmente?',
    options: ['Fibrinolíticos (Tenecteplasa/Alteplasa)', 'Vitamina K', 'Atropina masiva', 'Suero fisiológico a chorro únicamente'],
    correctIndex: 0,
    explanation: 'En paros presenciados con alta sospecha de embolia pulmonar, la fibrinolisis durante la RCP puede ser salvadora.',
    fisiopato: 'Intenta disolver el trombo obstructivo en la arteria pulmonar para restaurar el flujo cardiaco derecho.',
    clinicalPearl: 'La RCP debe continuarse al menos 60-90 minutos tras la administración de fibrinolíticos.',
    guideline: 'AHA / ESC Guidelines on Pulmonary Embolism.',
    whyWrong: { 1: 'Tarda horas en actuar.', 2: 'Inespecífica.', 3: 'Ineficaz contra la obstrucción mecánica.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'ps-010',
    topic: 'protocolo_simulacro',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el rol del "Checklist de Verificación" antes de una endoscopia compleja en la prevención de eventos adversos?',
    options: ['Solo cumple un rol administrativo', 'Estandariza la comunicación, verifica equipos de rescate y confirma la identidad/riesgos del paciente', 'Retrasa innecesariamente el procedimiento', 'Es opcional según el médico'],
    correctIndex: 1,
    explanation: 'El checklist es una herramienta de seguridad que reduce errores de omisión y mejora el trabajo en equipo.',
    fisiopato: 'Reduce la entropía organizacional y el error humano bajo presión.',
    clinicalPearl: 'Debe incluir la verificación de disponibilidad de clips, adrenalina y dispositivos de vía aérea.',
    guideline: 'WHO Surgical Safety Checklist / ESGE Safety Guidelines.',
    whyWrong: { 0: 'Minimiza su importancia vital.', 2: 'Solo toma 2 minutos y salva vidas.', 3: 'Es un estándar de calidad.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: HDB (EXPANDIDO) ---
  {
    id: 'hdb-007',
    topic: 'hdb',
    difficulty: 'Fellow',
    text: '¿Cuál es el hallazgo angiográfico clásico en una Hemangioma Intestinal?',
    options: ['Llenado precoz de venas eferentes dilatadas y lagos vasculares', 'Estenosis arterial segmentaria', 'Fístula arterio-portal', 'Oclusión completa de la mesentérica superior'],
    correctIndex: 0,
    explanation: 'Los hemangiomas son malformaciones vasculares con alto flujo venoso.',
    fisiopato: 'La estructura cavernosa permite el estancamiento de contraste en lagunas vasculares que drenan rápidamente.',
    clinicalPearl: 'A menudo se asocian a síndromes como Blue Rubber Bleb Nevus.',
    guideline: 'Radiology of GI Bleeding.',
    whyWrong: { 1: 'Sugerente de isquemia mesentérica.', 2: 'Causa de hipertensión portal segmentaria.', 3: 'Causa isquemia crónica.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MOTORES ESÓFAGO (EXPANDIDO) ---
  {
    id: 'mot-005',
    topic: 'motores_esofago',
    difficulty: 'Subspecialist',
    text: 'En un paciente con Acalasia Tipo III (Espástica), ¿qué tratamiento ha demostrado mejores tasas de respuesta clínica?',
    options: ['Miotomía de Heller con Funduplicatura', 'POEM (Miotomía Endoscópica Peroral)', 'Dilatación neumática con balón de 30mm', 'Inyección de toxina botulínica'],
    correctIndex: 1,
    explanation: 'El POEM permite una miotomía más larga hacia el cuerpo esofágico, necesaria para tratar el componente espástico del Tipo III.',
    fisiopato: 'La acalasia tipo III se caracteriza por contracciones prematuras y vigorosas en el cuerpo distal.',
    clinicalPearl: 'El POEM es la terapia de elección para el Tipo III según el consenso de Estocolmo.',
    guideline: 'ISDE guidelines for achalasia.',
    whyWrong: { 0: 'Dificultad para extender la miotomía quirúrgica muy arriba en el tórax.', 2: 'Menor respuesta en tipos espásticos.', 3: 'Efecto transitorio.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CANCER ESOFAGO (EXPANDIDO) ---
  {
    id: 'ce-004',
    topic: 'cancer_esofago',
    difficulty: 'Staff',
    text: '¿Cuál es la técnica de estadiaje más sensible para evaluar la profundidad de invasión (T) y la presencia de linfonodos regionales (N) en cáncer de esófago?',
    options: ['TAC de tórax y abdomen', 'Endosonografía (EUS)', 'PET-CT', 'Esofagograma con bario'],
    correctIndex: 1,
    explanation: 'La EUS permite visualizar las capas de la pared esofágica con alta resolución.',
    fisiopato: 'Permite diferenciar lesiones T1a (mucosa) de T1b (submucosa), clave para decidir terapia endoscópica vs quirúrgica.',
    clinicalPearl: 'La EUS es el pilar para el T y N local, pero el PET-CT es mejor para metástasis M.',
    guideline: 'NCCN Guidelines.',
    whyWrong: { 0: 'Poca resolución para capas de la pared.', 2: 'Excelente para M, pero menos preciso que EUS para T.', 3: 'Estudio puramente morfológico luminal.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: ÚLCERA PÉPTICA (EXPANDIDO) ---
  {
    id: 'up-005',
    topic: 'ulcera_peptica',
    difficulty: 'Fellow',
    text: '¿Qué hallazgo histológico es característico de una úlcera asociada al uso crónico de AINES en ausencia de H. pylori?',
    options: ['Gastritis antral severa con muchos polimorfonucleares', 'Gastropatía reactiva con foveolas tortuosas y mínima inflamación', 'Metaplasia intestinal completa', 'Atrofia glandular extensa'],
    correctIndex: 1,
    explanation: 'La gastropatía por AINES es un daño químico directo y sistémico, no inmunológico.',
    fisiopato: 'El daño se manifiesta como hiperplasia foveolar y edema de la lámina propia sin el infiltrado denso de la gastritis por H. pylori.',
    clinicalPearl: 'A menudo se ve una "gastritis química" o reactiva.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 0: 'Patrón clásico de H. pylori.', 2: 'Factor de riesgo para cáncer, no específico de AINES.', 3: 'Asociado a gastritis autoinmune o H. pylori crónico.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DOLOR ABDOMINAL (EXPANDIDO) ---
  {
    id: 'da-008',
    topic: 'dolor_abdominal',
    difficulty: 'Staff',
    text: 'Un paciente diabético presenta dolor abdominal, náuseas y saciedad precoz. La endoscopia muestra restos de comida tras 12 horas de ayuno. ¿Cuál es el diagnóstico más probable?',
    options: ['Gastroparesia diabética', 'Estenosis pilórica neoplásica', 'Úlcera duodenal obstructiva', 'Acalasia'],
    correctIndex: 0,
    explanation: 'La neuropatía autonómica diabética afecta el vaciamiento gástrico.',
    fisiopato: 'Daño en las células intersticiales de Cajal y en el nervio vago retarda la motilidad antral.',
    clinicalPearl: 'El test de vaciamiento gástrico con sólidos es el estándar de oro.',
    guideline: 'ACG Clinical Guideline: Gastroparesis.',
    whyWrong: { 1: 'Causaría obstrucción mecánica, pero la gastroparesia es funcional.', 2: 'Causa diagnóstica diferencial, pero la diabetes es un factor clave.', 3: 'Causa disfagia, no típicamente saciedad precoz y restos gástricos.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: CANCER GÁSTRICO (EXPANDIDO) ---
  {
    id: 'cg-007',
    topic: 'cancer_gastrico',
    difficulty: 'Subspecialist',
    text: 'En el cáncer gástrico precoz (Early Gastric Cancer), ¿cuál es el criterio absoluto para intentar una Resección Endoscópica de la Mucosa (EMR)?',
    options: ['Lesión < 2 cm, elevada, sin ulceración, histología diferenciada', 'Cualquier lesión menor a 5 cm', 'Lesiones con invasión a la submucosa profunda', 'Lesiones de tipo difuso'],
    correctIndex: 0,
    explanation: 'Estos criterios aseguran un riesgo de metástasis ganglionar cercano al 0%.',
    fisiopato: 'Al estar limitado a la mucosa y ser diferenciado, el riesgo de compromiso linfático es mínimo.',
    clinicalPearl: 'La Disección Submucosa (DSE) permite ampliar estos criterios (Criterios Expandidos).',
    guideline: 'Japanese Gastric Cancer Treatment Guidelines.',
    whyWrong: { 1: 'Demasiado grandes para EMR con seguridad.', 2: 'Requieren cirugía.', 3: 'Riesgo de metástasis ganglionar muy alto.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CELIACA (EXPANDIDO) ---
  {
    id: 'cel-009',
    topic: 'celiaca',
    difficulty: 'Fellow',
    text: '¿Cuál es la utilidad del tipaje HLA-DQ2/DQ8 en la enfermedad celiaca?',
    options: ['Confirmar el diagnóstico en todo paciente', 'Elevado valor predictivo negativo para descartar la enfermedad en casos dudosos', 'Predecir la severidad de la atrofia', 'Monitorear la adherencia a la dieta'],
    correctIndex: 1,
    explanation: 'Casi el 100% de los celiacos son positivos para HLA-DQ2 o DQ8; ser negativo descarta la enfermedad casi por completo.',
    fisiopato: 'Estas moléculas HLA son necesarias para presentar los péptidos de la gladina a los linfocitos T.',
    clinicalPearl: 'No sirve para confirmar diagnóstico porque mucha población sana también es positiva.',
    guideline: 'Manual Chileno 2025 / ACG Celiac Guidelines.',
    whyWrong: { 0: 'Causa falsos positivos diagnósticos.', 2: 'No correlaciona con fenotipo.', 3: 'Para eso se usa la serología o biopsia.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: BIOLOGÍA (EXPANDIDO) ---
  {
    id: 'bio-004',
    topic: 'biologia',
    difficulty: 'Fellow',
    text: '¿Cuál es el principal transportador de fructosa en la membrana apical del enterocito?',
    options: ['SGLT-1', 'GLUT-5', 'GLUT-2', 'Bombas Na/K ATPasa'],
    correctIndex: 1,
    explanation: 'GLUT-5 es un transportador de difusión facilitada específico para fructosa.',
    fisiopato: 'Su capacidad limitada explica por qué dosis altas de fructosa causan diarrea osmótica en muchas personas.',
    clinicalPearl: 'La fructosa se absorbe mejor si se consume junto con glucosa (vía GLUT-2).',
    guideline: 'Physiology of the Gastrointestinal Tract.',
    whyWrong: { 0: 'Transportador de Glucosa/Galactosa (dependiente de Sodio).', 2: 'Transportador basal de todos los monosacáridos.', 3: 'Genera el gradiente de sodio, no transporta hexosas directamente.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: NUTRICIÓN (EXPANDIDO) ---
  {
    id: 'nut-005',
    topic: 'nutricion',
    difficulty: 'Staff',
    text: '¿Qué déficit vitamínico es más común tras una Gastrectomía en Y de Roux?',
    options: ['Vitamina B12', 'Vitamina C', 'Vitamina K', 'Vitamina B6'],
    correctIndex: 0,
    explanation: 'Requiere factor intrínseco (estómago) y un pH ácido para liberarse de las proteínas.',
    fisiopato: 'La exclusión del estómago y el duodeno altera drásticamente la cascada de absorción de la cianocobalamina.',
    clinicalPearl: 'Todo paciente bariátrico debe recibir suplemento intramuscular o sublingual de B12 de por vida.',
    guideline: 'ASMBS Integrated Health Nutritional Guidelines.',
    whyWrong: { 1: 'Raro si hay ingesta de frutas.', 2: 'Posible pero menos frecuente que B12/Hierro.', 3: 'Menos común como déficit aislado.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: HDB (EXPANDIDO 2) ---
  {
    id: 'hdb-008',
    topic: 'hdb',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la causa más frecuente de hemorragia digestiva baja severa en el paciente pediátrico?',
    options: ['Divertículo de Meckel', 'Pólipos juveniles', 'Enfermedad Inflamatoria Intestinal', 'Invaginación intestinal'],
    correctIndex: 0,
    explanation: 'El divertículo de Meckel contiene mucosa gástrica ectópica que produce ácido y ulcera el íleon adyacente.',
    fisiopato: 'La ulceración péptica en el íleon es la causa del sangrado, a menudo indoloro y masivo.',
    clinicalPearl: 'La gammagrafía con pertecnetato de Tc-99m ("Meckel scan") es la prueba diagnóstica clásica.',
    guideline: 'Pediatric Gastrointestinal and Liver Disease.',
    whyWrong: { 1: 'Causa sangrado pero raramente masivo.', 2: 'Suele presentarse en adolescentes y con diarrea/dolor.', 3: 'Causa obstrucción y dolor severo, con heces en "jalea de grosella".' },
    pillar: 'Mastery'
  },
  {
    id: 'hdb-009',
    topic: 'hdb',
    difficulty: 'Fellow',
    text: 'En un paciente con HDB aguda, ¿qué puntaje de riesgo se recomienda para decidir el alta precoz vs hospitalización?',
    options: ['Puntaje de Oakland', 'Escala de Glasgow-Blatchford', 'Puntaje de Rockall', 'Escala de Child-Pugh'],
    correctIndex: 0,
    explanation: 'La escala de Oakland evalúa la probabilidad de un "desenlace seguro" (no requerir intervención).',
    fisiopato: 'Utiliza edad, sexo, antecedentes, FC, PAS, Hb y tacto rectal para estratificar el riesgo.',
    clinicalPearl: 'Un puntaje <= 8 tiene una alta probabilidad de egreso seguro desde urgencias.',
    guideline: 'BSG/ESGE Guidelines on Lower GI Bleeding.',
    whyWrong: { 1: 'Específica para HDA.', 2: 'Específica para pronóstico post-endoscopia en HDA.', 3: 'Mide reserva funcional hepática.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: MOTORES ESÓFAGO (EXPANDIDO 2) ---
  {
    id: 'mot-006',
    topic: 'motores_esofago',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el hallazgo manométrico que define la Obstrucción del Flujo de Salida de la Unión Esofagogástrica (EGJOO)?',
    options: ['IRP (Presión de Relajación Integrada) elevada con peristalsis preservada o fragmentada', 'IRP normal con ausencia de peristalsis', 'DCI > 8000', 'Presión basal del EEI < 10 mmHg'],
    correctIndex: 0,
    explanation: 'La EGJOO se caracteriza por una relajación incompleta del EEI que no cumple criterios de acalasia.',
    fisiopato: 'Puede ser idiopática, secundaria a hernia hiatal, estenosis mecánica o uso de opioides.',
    clinicalPearl: 'Siempre descarte una causa mecánica (ej: tumor) mediante TAC o EUS antes de llamarla funcional.',
    guideline: 'Chicago Classification 4.0.',
    whyWrong: { 1: 'Sugerente de acalasia si hay aperistalsis.', 2: 'Define esófago Jackhammer.', 3: 'EEI hipotensivo.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CANCER ESOFAGO (EXPANDIDO 2) ---
  {
    id: 'ce-005',
    topic: 'cancer_esofago',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el beneficio de la Quimiorradioterapia Neoadyuvante (Esquema CROSS) en pacientes con cáncer de esófago resecable?',
    options: ['Aumenta la tasa de resección R0 y mejora la sobrevida global', 'Solo sirve para paliación de la disfagia', 'Reduce el riesgo de complicaciones postoperatorias', 'No ha demostrado beneficio sobre la cirugía sola'],
    correctIndex: 0,
    explanation: 'El estudio CROSS demostró que la neoadyuvancia mejora el control local y sistémico antes de la cirugía.',
    fisiopato: 'Reduce el volumen tumoral (downstaging) y trata micrometástasis tempranas.',
    clinicalPearl: 'Se usa tanto en adenocarcinoma como en carcinoma escamoso.',
    guideline: 'CROSS Trial / NCCN Guidelines.',
    whyWrong: { 1: 'Su objetivo es curativo en este contexto.', 2: 'La radioterapia puede aumentar las complicaciones técnicas, pero el beneficio en sobrevida compensa.', 3: 'Falso.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CANCER GÁSTRICO (EXPANDIDO 2) ---
  {
    id: 'cg-008',
    topic: 'cancer_gastrico',
    difficulty: 'Staff',
    text: '¿Cuál es el marcador tumoral más utilizado para el seguimiento (no diagnóstico) del cáncer gástrico?',
    options: ['CEA (Antígeno Carcionoembrionario)', 'AFP (Alfa-fetoproteína)', 'CA 15-3', 'PSA'],
    correctIndex: 0,
    explanation: 'El CEA y el CA 19-9 pueden elevarse en cáncer gástrico y son útiles para detectar recurrencia.',
    fisiopato: 'La expresión de glicoproteínas fetales por las células neoplásicas permite su detección sérica.',
    clinicalPearl: 'Ningún marcador tumoral es suficientemente sensible o específico para screening.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 1: 'Usado en hepatocarcinoma.', 2: 'Usado en cáncer de mama.', 3: 'Usado en cáncer de próstata.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: CELIACA (EXPANDIDO 2) ---
  {
    id: 'cel-010',
    topic: 'celiaca',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el hallazgo endoscópico clásico de la enfermedad celiaca en el duodeno?',
    options: ['Patrón en empedrado', 'Atrofia mucosa, festoneado (scalloping) de los pliegues y patrón en mosaico', 'Nódulos blanquecinos (linfagiectasia)', 'Úlceras lineales profundas'],
    correctIndex: 1,
    explanation: 'Estos signos reflejan la pérdida de las vellosidades y la distorsión de la arquitectura mucosa.',
    fisiopato: 'La inflamación crónica destruye la superficie de absorción, aplanando la mucosa duodenal.',
    clinicalPearl: 'La ausencia de estos signos no descarta la enfermedad; siempre tome biopsias.',
    guideline: 'ESGE Guidelines: Endoscopy in Celiac Disease.',
    whyWrong: { 0: 'Típico de Enfermedad de Crohn.', 2: 'Sugerente de mala absorción de grasas/Déficit proteico.', 3: 'Típico de Crohn o infecciones.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: BIOLOGÍA (EXPANDIDO 2) ---
  {
    id: 'bio-005',
    topic: 'biologia',
    difficulty: 'Staff',
    text: '¿Qué tipo de epitelio recubre la mayor parte del esófago normal?',
    options: ['Epitelio escamoso estratificado no queratinizado', 'Epitelio colunar simple', 'Epitelio pseudoestratificado ciliado', 'Epitelio de transición'],
    correctIndex: 0,
    explanation: 'Es un epitelio resistente a la fricción pero sensible al ácido.',
    fisiopato: 'Su estructura de múltiples capas planas protege contra el daño mecánico de los alimentos.',
    clinicalPearl: 'La transformación a epitelio colunar se denomina metaplasia intestinal (Barrett).',
    guideline: 'Histology for Pathologists.',
    whyWrong: { 1: 'Recubre el estómago e intestino.', 2: 'Típico de la vía respiratoria.', 3: 'Típico de la vía urinaria.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: NUTRICIÓN (EXPANDIDO 2) ---
  {
    id: 'nut-006',
    topic: 'nutricion',
    difficulty: 'Fellow',
    text: '¿Cuál es la causa principal del Síndrome de Dumpling tardío tras una cirugía gástrica?',
    options: ['Hiperinsulinemia reactiva ante una carga rápida de glucosa', 'Paso de contenido hiperosmolar al intestino', 'Déficit de hierro', 'Infección por H. pylori'],
    correctIndex: 0,
    explanation: 'La hiperinsulinemia exagerada causa una hipoglucemia post-prandial (1-3 horas después).',
    fisiopato: 'La llegada brusca de carbohidratos simples al yeyuno estimula una secreción masiva de insulina.',
    clinicalPearl: 'Se maneja fraccionando las comidas y evitando azúcares simples.',
    guideline: 'ESPEN Guidelines.',
    whyWrong: { 1: 'Causa el Dumping precoz (síntomas vasomotores inmediatos).', 2: 'Causa anemia, no dumping.', 3: 'Sin relación directa.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: DIARREA AGUDA (EXPANDIDO 2) ---
  {
    id: 'dag-012',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: '¿Cuál es el agente patógeno más probable en una diarrea del viajero que presenta disentería (sangre y pus) tras un viaje al Sudeste Asiático?',
    options: ['Campylobacter jejuni', 'Salmonella typhi', 'Giardia lamblia', 'Norovirus'],
    correctIndex: 0,
    explanation: 'Campylobacter es una causa frecuente de diarrea inflamatoria y se asocia a menudo con resistencia a quinolonas en esa región.',
    fisiopato: 'Invasión directa de la mucosa colónica e ileal, produciendo una respuesta inflamatoria aguda.',
    clinicalPearl: 'Considere Azitromicina como tratamiento de elección ante sospecha de resistencia.',
    guideline: 'CDC Yellow Book / IDSA Guidelines.',
    whyWrong: { 1: 'Causa fiebre tifoidea (cuadro sistémico), no típicamente disentería aguda.', 2: 'Causa diarrea esteatorreica y prolongada, no disentería.', 3: 'Causa brotes de diarrea acuosa explosiva.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: DIARREA CRÓNICA (EXPANDIDO 5) ---
  {
    id: 'dc-007',
    topic: 'diarrea_cronica',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo fisiopatológico de la diarrea en el Síndrome de Zollinger-Ellison?',
    options: ['Inactivación de las enzimas pancreáticas por el bajo pH duodenal', 'Efecto osmótico de la gastrina', 'Invasión bacteriana', 'Pérdida de superficie de absorción'],
    correctIndex: 0,
    explanation: 'El exceso de ácido clorhídrico en el duodeno precipita los ácidos biliares e inactiva la lipasa pancreática.',
    fisiopato: 'La hipersecreción de gastrina por un tumor neuroendocrino (gastrinoma) genera una carga ácida masiva.',
    clinicalPearl: 'La diarrea puede ser el único síntoma antes de que aparezcan úlceras refractarias.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 1: 'La gastrina no es osmóticamente activa.', 2: 'No es el mecanismo primario.', 3: 'Ocurre solo si hay complicaciones anatómicas asociadas.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ERGE (EXPANDIDO 8) ---
  {
    id: 'erge-010',
    topic: 'erge',
    difficulty: 'Fellow',
    text: '¿Qué hallazgo en la pH-impedanciometría de 24 horas define la "Hipersensibilidad al Reflujo"?',
    options: ['Exposición ácida total normal pero asociación sintomática positiva con eventos de reflujo', 'Exposición ácida total elevada', 'Asociación sintomática negativa', 'Reflujo puramente alcalino'],
    correctIndex: 0,
    explanation: 'El paciente tiene una percepción exagerada de eventos de reflujo fisiológico.',
    fisiopato: 'Existe un procesamiento central alterado de los estímulos esofágicos en el contexto de una barrera mucosa indemne.',
    clinicalPearl: 'Estos pacientes se benefician más de neuromoduladores que de cirugía antirreflujo.',
    guideline: 'Lyon Consensus 2.0.',
    whyWrong: { 1: 'Define ERGE verdadero.', 2: 'Sugerente de Pirois Funcional si la exposición ácida es normal.', 3: 'El reflujo no ácido es común, pero el concepto de hipersensibilidad requiere asociación clínica.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: MASLD (EXPANDIDO 9) ---
  {
    id: 'masld-009',
    topic: 'masld',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el primer fármaco aprobado por la FDA específicamente para el tratamiento de la NASH (MASH) con fibrosis significativa (F2-F3)?',
    options: ['Resmetirom', 'Pioglitazona', 'Vitamina E', 'Semaglutida'],
    correctIndex: 0,
    explanation: 'El Resmetirom es un agonista selectivo del receptor de hormona tiroidea beta (THR-beta).',
    fisiopato: 'Aumenta el metabolismo de los lípidos en el hígado y reduce la lipotoxicidad.',
    clinicalPearl: 'Aprobado en 2024 tras los resultados del estudio MAESTRO-NASH.',
    guideline: 'AASLD 2024 Practice Guidance.',
    whyWrong: { 1: 'Usado off-label con buena evidencia, pero no con indicación específica aprobada.', 2: 'Usado en no diabéticos, pero con evidencia limitada en fibrosis avanzada.', 3: 'Eficaz para pérdida de peso y resolución de MASH, pero aprobación específica para fibrosis está en curso.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HEPATITIS VIRAL (EXPANDIDO 8) ---
  {
    id: 'hep-008',
    topic: 'hepatitis',
    difficulty: 'Staff',
    text: '¿Cuál es el objetivo principal del tratamiento de la Hepatitis C en la era de los Antivirales de Acción Directa (AAD)?',
    options: ['Respuesta Viral Sostenida (RVS) a las 12 semanas de finalizar el tratamiento', 'Reducción de la carga viral a la mitad', 'Aclaramiento del HBsAg', 'Normalización de las transaminasas únicamente'],
    correctIndex: 0,
    explanation: 'La RVS12 equivale a la curación virológica definitiva en > 95% de los casos.',
    fisiopato: 'Al ser un virus ARN que no se integra al genoma, su eliminación de la sangre implica erradicación del huésped.',
    clinicalPearl: 'La RVS reduce drásticamente el riesgo de cirrosis y hepatocarcinoma.',
    guideline: 'EASL Recommendations on Treatment of Hepatitis C.',
    whyWrong: { 1: 'Insuficiente; el objetivo es indetectabilidad persistente.', 2: 'Objetivo de la Hepatitis B, no C.', 3: 'Es un efecto secundario de la cura, no el marcador principal.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PANCREATITIS (EXPANDIDO 7) ---
  {
    id: 'pan-015',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es el signo radiológico en el TAC que sugiere una Pancreatitis Autoinmune Tipo 1?',
    options: ['Páncreas en "salchicha" (agrandamiento difuso) con cápsula halo periférica', 'Calcificaciones masivas difusas', 'Dilatación moniliforme del conducto de Wirsung', 'Pseudoquistes múltiples'],
    correctIndex: 0,
    explanation: 'La PAI tipo 1 se asocia a niveles elevados de IgG4 y compromiso multisistémico.',
    fisiopato: 'Infiltración linfoplasmocitaria densa que borra los surcos pancreáticos normales.',
    clinicalPearl: 'Responde espectacularmente a los corticoides.',
    guideline: 'International Consensus Diagnostic Criteria (ICDC) for AIP.',
    whyWrong: { 1: 'Típico de pancreatitis crónica alcohólica.', 2: 'Sugerente de neoplasia o pancreatitis crónica avanzada.', 3: 'Complicación de pancreatitis aguda necrotizante.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: CIRROSIS (EXPANDIDO 8) ---
  {
    id: 'cir-026',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el criterio para diagnosticar una Insuficiencia Hepática Aguda sobre Crónica (ACLF) según el consenso de la EASL-CLIF?',
    options: ['Presencia de falla multiorgánica (puntuación CLIF-C OF) en un paciente con cirrosis descompensada', 'Bilirrubina > 10 mg/dL únicamente', 'Ascitis refractaria', 'Encefalopatía grado I'],
    correctIndex: 0,
    explanation: 'La ACLF se define por la falla de órganos sistémicos y se asocia a una mortalidad muy alta a corto plazo.',
    fisiopato: 'Una respuesta inflamatoria sistémica severa (SIRS) gatillada por infección o alcohol daña órganos distantes (riñón, pulmón, cerebro).',
    clinicalPearl: 'El pronóstico depende del número de fallas orgánicas (Grado 1, 2 o 3).',
    guideline: 'EASL-CLIF Consortium guidelines on ACLF.',
    whyWrong: { 1: 'Es un componente de la falla, no la definición per se.', 2: 'Es una descompensación clásica, no necesariamente ACLF.', 3: 'No define el síndrome de falla multiorgánica.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: H. PYLORI (EXPANDIDO 8) ---
  {
    id: 'hp-014',
    topic: 'h_pylori',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el rol de la Amoxicilina en dosis altas (> 3g/día) o fraccionada en la terapia de erradicación de H. pylori?',
    options: ['Superar la baja permeabilidad gástrica y mantener niveles por encima de la CIM durante todo el día', 'Aumentar la resistencia bacteriana', 'Prevenir la diarrea', 'No tiene beneficio demostrado'],
    correctIndex: 0,
    explanation: 'La amoxicilina es un antibiótico tiempo-dependiente; mantener niveles constantes es clave para la lisis bacteriana.',
    fisiopato: 'H. pylori se replica lentamente; la exposición prolongada al beta-lactámico en fase de división es necesaria.',
    clinicalPearl: 'Se usa a menudo en la "Terapia Dual" de dosis altas con IBP.',
    guideline: 'Maastricht VI.',
    whyWrong: { 1: 'La resistencia a amoxicilina es extremadamente rara.', 2: 'Al contrario, puede aumentarla por dosis altas.', 3: 'Falso.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: VÍAS BILIARES (EXPANDIDO 7) ---
  {
    id: 'vb-010',
    topic: 'vias_biliares',
    difficulty: 'Fellow',
    text: 'En un paciente con sospecha de coledocolitiasis y riesgo intermedio (según ASGE), ¿cuál es el siguiente paso más costo-efectivo?',
    options: ['Colangiorresonancia (CPRM) o Endosonografía (EUS)', 'CPRE directa', 'Colecistectomía con colangiografía intraoperatoria', 'Observación'],
    correctIndex: 0,
    explanation: 'Evita los riesgos de una CPRE innecesaria (pancreatitis) en pacientes donde la probabilidad de cálculo es moderada.',
    fisiopato: 'La CPRM y EUS tienen una sensibilidad > 90% para detectar cálculos en la vía biliar.',
    clinicalPearl: 'Si la sospecha es muy alta (cálculo visto en eco + bilirrubina > 4), vaya directo a CPRE.',
    guideline: 'ASGE Guideline: Role of endoscopy in the evaluation of suspected choledocholithiasis.',
    whyWrong: { 1: 'Riesgo innecesario de complicaciones si no hay cálculo.', 2: 'Aceptable, pero la CPRM/EUS son preferidas para evitar re-intervenciones o cirugías complejas.', 3: 'Riesgo de colangitis.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: EII AVANZADA (EXPANDIDO 6) ---
  {
    id: 'eii-av-006',
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el mecanismo de acción del Upadacitinib en la Colitis Ulcerosa?',
    options: ['Inhibidor selectivo de JAK-1', 'Antagonista de la integrina alfa-4-beta-7', 'Inhibidor de la IL-23 p19', 'Bloqueador de TNF-alfa'],
    correctIndex: 0,
    explanation: 'Upadacitinib es una pequeña molécula oral que bloquea la vía de señalización intracelular de múltiples citoquinas proinflamatorias.',
    fisiopato: 'Al inhibir JAK-1, se detiene la transcripción mediada por STAT, reduciendo la activación linfocitaria.',
    clinicalPearl: 'Muy eficaz en inducción rápida, incluso en fallas a anti-TNF.',
    guideline: 'U-ACHIEVE clinical trials / FDA approval.',
    whyWrong: { 1: 'Mecanismo de Vedolizumab.', 2: 'Mecanismo de Risankizumab o Guselkumab.', 3: 'Mecanismo de Infliximab/Adalimumab.' },
    pillar: 'Mastery'
  },
  {
    id: 'eii-av-007',
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: 'En el monitoreo de pacientes con EII bajo biológicos, ¿qué significa un "Clearance" (aclaramiento) aumentado del fármaco?',
    options: ['El fármaco se elimina más rápido debido a una alta carga inflamatoria (consumo en el tejido)', 'El fármaco no funciona por mutación genética', 'El riñón está filtrando proteínas', 'El paciente no se está inyectando'],
    correctIndex: 0,
    explanation: 'La inflamación severa produce pérdida de proteínas (incluyendo biológicos) por el intestino y mayor proteólisis.',
    fisiopato: 'La "fuga" del biológico hacia la luz intestinal y el consumo por el exceso de citoquinas reducen su vida media.',
    clinicalPearl: 'En colitis ulcerosa aguda grave, el aclaramiento de Infliximab es altísimo.',
    guideline: 'Therapeutic Drug Monitoring in IBD.',
    whyWrong: { 1: 'No es por mutación, es por dinámica de inflamación.', 2: 'No es la causa principal en EII.', 3: 'Describe falta de adherencia, no aclaramiento biológico.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MUERTE SÚBITA (EXPANDIDO 9) ---
  {
    id: 'ms-014',
    topic: 'muerte_subita',
    difficulty: 'Staff',
    text: '¿Cuál es la causa más probable de choque obstructivo que lleva a paro cardiaco en un paciente sometido a una endoscopia bajo ventilación a presión positiva?',
    options: ['Neumotórax a tensión', 'Taponamiento cardiaco', 'Embolia gaseosa', 'Infarto agudo'],
    correctIndex: 0,
    explanation: 'La presión positiva en la vía aérea puede exacerbar una fístula pleuropulmonar o un daño alveolar agudo.',
    fisiopato: 'El aire atrapado en el espacio pleural comprime el corazón y los grandes vasos, anulando el precarga.',
    clinicalPearl: 'Sospeche si hay desviación traqueal y ausencia de murmullo unilateral súbito.',
    guideline: 'ACLS 2020.',
    whyWrong: { 1: 'Raro en endoscopia digestiva pura.', 2: 'Menos común que el neumotórax si hay ventilación mecánica agresiva.', 3: 'Causa choque cardiogénico, no obstructivo primario.' },
    pillar: 'Clinical Logic'
  },

  // --- SECTOR: PROTOCOLO SIMULACRO (EXPANDIDO 7) ---
  {
    id: 'ps-011',
    topic: 'protocolo_simulacro',
    difficulty: 'Fellow',
    text: 'Se produce una reacción anafiláctica alérgica tras la administración de Propofol. ¿Cuál es el tratamiento de primera línea?',
    options: ['Adrenalina 0.3 - 0.5 mg Intramuscular', 'Corticoides EV', 'Antihistamínicos EV', 'Suero fisiológico'],
    correctIndex: 0,
    explanation: 'La adrenalina es el único fármaco que detiene la cascada de degranulación de mastocitos en agudo.',
    fisiopato: 'Estimula receptores alfa-1 (vasoconstricción) y beta-2 (broncodilatación y estabilización de membrana).',
    clinicalPearl: 'No pierda tiempo con corticoides; la adrenalina salva la vida en segundos.',
    guideline: 'World Allergy Organization (WAO) Anaphylaxis Guidelines.',
    whyWrong: { 1: 'Tardan horas en actuar (previenen fase tardía).', 2: 'Efecto coadyuvante menor.', 3: 'Soporte de volumen únicamente.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: HDA (EXPANDIDO 4) ---
  {
    id: 'hda-016',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál es el manejo inicial recomendado para un paciente con HDA por sospecha de várices esofágicas antes de la endoscopia?',
    options: ['Tratamiento antibiótico (Ceftriaxona) y drogas vasoactivas (Terlipresina o Somatostatina)', 'Instalación de sonda Sengstaken-Blakemore de entrada', 'Laringoscopia directa', 'Vitamina K aislada'],
    correctIndex: 0,
    explanation: 'Los antibióticos reducen la mortalidad y el resangrado en el paciente cirrótico con HDA.',
    fisiopato: 'La traslocación bacteriana es frecuente durante el sangrado; la vasoactividad reduce la presión portal y facilita la hemostasia.',
    clinicalPearl: 'La Ceftriaxona es superior al Norfloxacino en pacientes con cirrosis avanzada.',
    guideline: 'Baveno VII Consensus.',
    whyWrong: { 1: 'Solo como puente si falla la endoscopia.', 2: 'No tiene rol aquí.', 3: 'No corrige la coagulopatía ni la presión portal.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: ERGE (EXPANDIDO 9) ---
  {
    id: 'erge-011',
    topic: 'erge',
    difficulty: 'Subspecialist',
    text: 'En un paciente con ERGE refractario a IBP y pH-impedanciometría confirma reflujo ácido persistente, ¿cuál es el rol de la evaluación de la contractilidad de reserva (ej: Maniobra de Tragos Múltiples)?',
    options: ['Predecir el riesgo de disfagia postoperatoria tras una funduplicatura', 'Medir el tamaño de la hernia hiatal', 'Diagnosticar acalasia únicamente', 'No tiene utilidad clínica'],
    correctIndex: 0,
    explanation: 'Si el esófago tiene baja reserva contráctil, una funduplicatura total (Nissen) podría causar disfagia severa.',
    fisiopato: 'La maniobra de tragos múltiples evalúa la capacidad del cuerpo esofágico de aumentar su fuerza ante un reto.',
    clinicalPearl: 'Si no hay reserva, se prefiere una funduplicatura parcial (Toupet).',
    guideline: 'Chicago Classification 4.0.',
    whyWrong: { 1: 'Se mide mejor por endoscopia o imágenes.', 2: 'Se diagnostica con el IRP y peristalsis básica.', 3: 'Es un estándar de alta resolución moderno.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: HDB (EXPANDIDO 3) ---
  {
    id: 'hdb-010',
    topic: 'hdb',
    difficulty: 'Staff',
    text: '¿Cuál es la causa más frecuente de Rectorragia indolora en el adulto mayor de 60 años?',
    options: ['Diverticulosis colónica', 'Angiodisplasia', 'Hemorroides internas', 'Cáncer colorrectal'],
    correctIndex: 0,
    explanation: 'La diverticulosis es la causa #1 de sangrado masivo e indoloro en este grupo etario.',
    fisiopato: 'Herniación de la mucosa a través de los vasos rectos que se estiran y rompen.',
    clinicalPearl: 'El 75% de los sangrados diverticulares se autolimitan.',
    guideline: 'Manual Chileno 2025.',
    whyWrong: { 1: 'Causa sagrado venoso/capilar, suele ser menos masivo y más crónico.', 2: 'Suele causar hematoquecia tras el esfuerzo defecatorio, no rectorragia masiva.', 3: 'Suele ser oculto o cambios en el hábito, no típicamente hemorragia aguda masiva.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: MOTORES ESÓFAGO (EXPANDIDO 3) ---
  {
    id: 'mot-007',
    topic: 'motores_esofago',
    difficulty: 'Fellow',
    text: 'En la Manometría de Alta Resolución, ¿cómo se define el "Espasmo Esofágico Distal"?',
    options: ['DL (Latencia Distal) < 4.5 segundos en al menos 20% de los tragos', 'DCI > 8000', 'IRP elevado', 'Aneristalsis completa'],
    correctIndex: 0,
    explanation: 'La latencia distal corta indica una contracción prematura y desorganizada.',
    fisiopato: 'Falla en la inhibición nitrérgica del cuerpo esofágico distal.',
    clinicalPearl: 'El síntoma cardinal es el dolor torácico no cardiaco asociado a disfagia.',
    guideline: 'Chicago Classification 4.0.',
    whyWrong: { 1: 'Define Jackhammer.', 2: 'Define obstrucción de flujo.', 3: 'Define acalasia si el IRP está elevado.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: CELIACA (EXPANDIDO 3) ---
  {
    id: 'cel-011',
    topic: 'celiaca',
    difficulty: 'Staff',
    text: '¿Cuál es el anticuerpo más sensible y específico para el diagnóstico inicial de Enfermedad Celiaca con niveles de IgA normales?',
    options: ['Anti-transglutaminasa tisular IgA (tTG-IgA)', 'Anti-gliadina deaminada IgG', 'Anti-endomisio IgA', 'Anti-reticulina'],
    correctIndex: 0,
    explanation: 'La tTG IgA es el test de elección inicial por su excelente rendimiento balanceado.',
    fisiopato: 'La transglutaminasa es la enzima que modifica la gliadina, convirtiéndola en un antígeno potente.',
    clinicalPearl: 'Siempre pida niveles de IgA total; si están bajos, debe usar anticuerpos IgG.',
    guideline: 'ACG Guidelines / Manual Chileno 2025.',
    whyWrong: { 1: 'Útil si hay déficit de IgA.', 2: 'Muy específico pero operador dependiente y más caro.', 3: 'Obsoleto.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: DIARREA CRÓNICA (EXPANDIDO 6) ---
  {
    id: 'dc-008',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: '¿Cuál es el tratamiento de elección para el sobrecrecimiento bacteriano de intestino delgado (SIBO) en pacientes con predominio de Metano?',
    options: ['Rifaximina sola', 'Rifaximina + Neomicina (o Metronidazol)', 'Amoxicilina', 'Probióticos en dosis altas'],
    correctIndex: 1,
    explanation: 'El metano es producido por arqueas (M. smithii) que requieren una combinación de antibióticos.',
    fisiopato: 'El metano reduce el tránsito intestinal (causa constipación) y es resistente a la rifaximina sola.',
    clinicalPearl: 'El test de hidrógeno/metano en aire espirado es clave para decidir el esquema.',
    guideline: 'ACG Clinical Guideline: Small Intestinal Bacterial Overgrowth.',
    whyWrong: { 0: 'Eficaz para SIBO por Hidrógeno.', 2: 'Poca evidencia comparativa.', 3: 'Pueden empeorar el SIBO en algunos casos.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: BIOLOGÍA (EXPANDIDO 3) ---
  {
    id: 'bio-006',
    topic: 'biologia',
    difficulty: 'Subspecialist',
    text: '¿Qué citoquina es la principal mediadora de la fase aguda y del desarrollo de granulomas en la Enfermedad de Crohn?',
    options: ['TNF-alfa', 'IL-10', 'IL-1ra', 'TGF-beta'],
    correctIndex: 0,
    explanation: 'El TNF-alfa activa macrófagos y promueve la inflamación transmural.',
    fisiopato: 'Su bloqueo con biológicos es el pilar del tratamiento de la enfermedad fistulizante y estenosante.',
    clinicalPearl: 'La formación de granulomas no caseificantes ayuda a diferenciar Crohn de Colitis Ulcerosa histológicamente.',
    guideline: 'Pathophysiology of IBD.',
    whyWrong: { 1: 'Es antiinflamatoria.', 2: 'Es un receptor antagonista protector.', 3: 'Relacionada con fibrosis.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: NUTRICIÓN (EXPANDIDO 3) ---
  {
    id: 'nut-007',
    topic: 'nutricion',
    difficulty: 'Staff',
    text: '¿Cuál de los siguientes es un marcador bioquímico temprano de realimentación (Refeeding Syndrome)?',
    options: ['Hipofosfemia e hipopotasemia', 'Hiperglicemia masiva', 'Hipercalcemia', 'Hipoalbuminemia'],
    correctIndex: 0,
    explanation: 'La insulina mueve el fósforo y potasio al espacio intracelular tras una carga de glucosa en pacientes desnutridos.',
    fisiopato: 'La falla en los niveles de fósforo puede causar insuficiencia cardiaca y muerte súbita.',
    clinicalPearl: 'Reponga electrolitos ANTES de iniciar la nutrición calórica completa.',
    guideline: 'ASPEN/ESPEN Guidelines.',
    whyWrong: { 1: 'Puede ocurrir pero no define el síndrome.', 2: 'No es característico.', 3: 'Marcador de desnutrición crónica pero no agudo de realimentación.' },
    pillar: 'Emergency'
  },

  // --- SECTOR: HDB (EXPANDIDO 4) ---
  {
    id: 'hdb-011',
    topic: 'hdb',
    difficulty: 'Fellow',
    text: '¿Cuál es el manejo inicial de elección para una Angiodisplasia colónica que causa sangrado crónico recurrente y anemia ferropénica?',
    options: ['Argón plasma (APC) o electrocoagulación monopolar', 'Resección quirúrgica del segmento', 'Suplementación de hierro únicamente', 'Talidomida'],
    correctIndex: 0,
    explanation: 'La ablación endoscópica es efectiva para controlar los vasos superficiales.',
    fisiopato: 'Las angiodisplasias son dilataciones ectásicas de vénulas y capilares en la mucosa y submucosa.',
    clinicalPearl: 'A menudo se asocian a estenosis aórtica (Síndrome de Heyde) o insuficiencia renal crónica.',
    guideline: 'Manual Chileno 2025 / ACG HDB.',
    whyWrong: { 1: 'Solo si la terapia endoscópica falla y el sangrado es masivo/incontrolable.', 2: 'No previene nuevos sangrados de otras lesiones.', 3: 'Reservado para casos refractarios pero con efectos adversos significativos.' },
    pillar: 'Board Prep'
  },
  {
    id: 'hdb-012',
    topic: 'hdb',
    difficulty: 'Subspecialist',
    text: '¿Qué hallazgo en una Angio-TAC sugiere un sangrado de origen diverticular versus uno por angiodisplasia?',
    options: ['Extravasación de contraste en la luz del divertículo', 'Imagen en penacho (tuft) vascular', 'Engrosamiento de la pared intestinal segmentaria', 'Presencia de aire libre'],
    correctIndex: 0,
    explanation: 'La localización del "pool" de contraste dentro del saco diverticular es patognomónica.',
    fisiopato: 'La ruptura capilar o arterial intramural vierte la sangre directamente al lumen diverticular.',
    clinicalPearl: 'La angiodisplasia suele mostrar vasos tortuosos y llenado venoso temprano.',
    guideline: 'Radiology of Acute GI Bleed.',
    whyWrong: { 1: 'Sugerente de angiodisplasia.', 2: 'Inespecífico para la fuente del sangrado arterial agudo.', 3: 'Indica perforación, complicación diferente.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MOTORES ESÓFAGO (EXPANDIDO 4) ---
  {
    id: 'mot-008',
    topic: 'motores_esofago',
    difficulty: 'Fellow',
    text: 'En la Manometría de Alta Resolución, ¿qué define un "Esófago Jackhammer" (Esófago hipercontráctil)?',
    options: ['Al menos 2 tragos con DCI > 8000 mmHg.s.cm', 'DL < 4.5 s', 'Ausencia de peristalsis', 'IRP > 15'],
    correctIndex: 0,
    explanation: 'El vigor contráctil es extremadamente alto pero coordinado.',
    fisiopato: 'Excesiva estimulación colinérgica o sensibilidad muscular aumentada.',
    clinicalPearl: 'Puede asociarse a obstrucción del flujo de salida (EGJOO).',
    guideline: 'Chicago Classification 4.0.',
    whyWrong: { 1: 'Define espasmo distal.', 2: 'Define aperistalsis.', 3: 'Define obstrucción de flujo de salida.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: EII AVANZADA (EXPANDIDO 7) ---
  {
    id: 'eii-av-008',
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la dosis recomendada de Infliximab para la inducción en una Colitis Ulcerosa Aguda Grave (CUAG) según protocolos de rescate?',
    options: ['5 mg/kg semanas 0, 2 y 6', '10 mg/kg en dosis acelerada (ej: 0, 1 y 4 semanas)', '100 mg dosis fija', '2.5 mg/kg'],
    correctIndex: 1,
    explanation: 'En CUAG hay un alto aclaramiento del fármaco, por lo que dosis más altas y precoces mejoran la respuesta.',
    fisiopato: 'La carga inflamatoria y la pérdida proteica intestinal obligan a maximizar la concentración sérica inicial.',
    clinicalPearl: 'La decisión de rescate con Infliximab debe tomarse al día 3-5 de corticoides fallidos.',
    guideline: 'ECCO Guidelines for UC.',
    whyWrong: { 0: 'Esquema estándar para casos moderados.', 2: 'Dosis insuficiente.', 3: 'Dosis sub-terapéutica.' },
    pillar: 'Mastery'
  },
  {
    id: 'eii-av-009',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: '¿Cuál es el rol del testeo de anticuerpos anti-fármaco (ej: anti-Infliximab) en la pérdida secundaria de respuesta?',
    options: ['Permite diferenciar falla mecánica de falla inmunológica y guiar el cambio de terapia', 'Confirma el diagnóstico de EII', 'Mide la inflamación de la mucosa', 'No se recomienda'],
    correctIndex: 0,
    explanation: 'Si hay anticuerpos altos, el cambio de clase es mandatorio.',
    fisiopato: 'La formación de anticuerpos neutraliza el fármaco y acelera su eliminación.',
    clinicalPearl: 'Si el nivel de fármaco es bajo sin anticuerpos, se debe escalar la dosis.',
    guideline: 'AGA Clinical Practice Guideline on TDM.',
    whyWrong: { 1: 'No es una prueba diagnóstica de la enfermedad.', 2: 'Para eso se usa la calprotectina.', 3: 'Es el estándar en el manejo avanzado actual.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: ERGE (EXPANDIDO 10) ---
  {
    id: 'erge-012',
    topic: 'erge',
    difficulty: 'Staff',
    text: '¿Cuál es la cirugía antirreflujo de elección en un paciente con ERGE severo y Obesidad Mórbida (IMC > 35)?',
    options: ['Bypass gástrico en Y de Roux', 'Funduplicatura de Nissen', 'Manga gástrica (Sleeve)', 'Procedimiento de LINX'],
    correctIndex: 0,
    explanation: 'El bypass gástrico reduce el peso y elimina la producción ácida del remanente gástrico distal.',
    fisiopato: 'La manga gástrica puede exacerbar el reflujo debido al aumento de la presión intragástrica.',
    clinicalPearl: 'El bypass es la mejor opción antirreflujo en el obeso severo.',
    guideline: 'ASMBS / SAGES Guidelines.',
    whyWrong: { 1: 'Menor éxito en obesos comparado con Bypass.', 2: 'Frecuentemente empeora el reflujo.', 3: 'Contraindicación relativa en IMC muy alto.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: H. PYLORI (EXPANDIDO 4) ---
  {
    id: 'hp-015',
    topic: 'h_pylori',
    difficulty: 'Staff',
    text: '¿Cuál es la prueba no invasiva de elección para confirmar la erradicación de H. pylori?',
    options: ['Test de aire espirado con urea marcada (C-13)', 'Serología IgG', 'Antígeno en deposiciones (monoclonal)', 'A y C son correctas'],
    correctIndex: 3,
    explanation: 'Tanto el test de aliento como el antígeno monoclonal en heces detectan infección activa.',
    fisiopato: 'La serología puede permanecer positiva meses o años después de la curación.',
    clinicalPearl: 'Asegúrese de suspender IBP al menos 2 semanas antes de la prueba.',
    guideline: 'Maastricht VI.',
    whyWrong: { 1: 'No distingue entre infección pasada y presente.', 3: 'Ambas son válidas y recomendadas.' },
    pillar: 'Must-Know'
  },

  // --- SECTOR: PANCREATITIS (EXPANDIDO 8) ---
  {
    id: 'pan-016',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la indicación de necrosectomía en pancreatitis aguda necrotizante?',
    options: ['Necrosis infectada con deterioro clínico progresivo pese a manejo médico', 'Necrosis estéril inicial', 'Presencia de burbujas de gas tras 24 horas', 'Amilasa > 5000'],
    correctIndex: 0,
    explanation: 'Se prefiere el abordaje "Step-up" (drenaje percutáneo primero) y solo cirugía si no hay mejoría.',
    fisiopato: 'La infección de la necrosis aumenta drásticamente la mortalidad y requiere control de foco.',
    clinicalPearl: 'Retrase la intervención quirúrgica lo más posible (idealmente > 4 semanas).',
    guideline: 'IAP/APA Evidence-based guidelines for management of acute pancreatitis.',
    whyWrong: { 1: 'La necrosis estéril no requiere cirugía.', 2: 'Indica infección, pero si el paciente está estable, se puede intentar drenaje percutáneo inicialmente.', 3: 'No indica severidad de necrosis ni necesidad de cirugía.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: VÍAS BILIARES (EXPANDIDO 8) ---
  {
    id: 'vb-011',
    topic: 'vias_biliares',
    difficulty: 'Fellow',
    text: '¿Cuál es el factor de riesgo más importante para el desarrollo de Colangiocarcinoma en pacientes con Colangitis Esclerosante Primaria (CEP)?',
    options: ['Presencia de varonía y edad avanzada', 'Tabaquismo', 'Duración de la enfermedad y presencia de enfermedad inflamatoria intestinal asociada', 'Niveles bajos de fosfatasa alcalina'],
    correctIndex: 2,
    explanation: 'El riesgo de colangiocarcinoma es del 1-2% anual en pacientes con CEP.',
    fisiopato: 'La inflamación crónica y la proliferación biliar ductal aumentan el riesgo de mutaciones oncogénicas.',
    clinicalPearl: 'Se recomienda screening anual con ecografía o resonancia.',
    guideline: 'EASL Guidelines: Management of PSC.',
    whyWrong: { 0: 'Aumentan riesgo, pero la asociación con EII es un marcador biológico más potente.', 1: 'Factor menor comparado con la inflamación ductal.', 3: 'Niveles altos son los que preocupan.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: HEPATITIS VIRAL (EXPANDIDO 9) ---
  {
    id: 'hep-009',
    topic: 'hepatitis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es el significado de un Anti-HBc (anticore) positivo asilado?',
    options: ['Infección pasada resuelta, infección crónica oculta o falso positivo', 'Inmunidad por vacuna', 'Infección aguda temprana', 'Curación definitiva con inmunidad'],
    correctIndex: 0,
    explanation: 'Requiere evaluación cuidadosa, a veces carga viral para descartar infección oculta.',
    fisiopato: 'El anticore es el primer anticuerpo en aparecer y el que más tiempo persiste.',
    clinicalPearl: 'En pacientes que van a recibir quimioterapia, un anticore (+) requiere profilaxis aunque el HBsAg sea (-).',
    guideline: 'AASLD Hepatitis B Guidance.',
    whyWrong: { 1: 'La vacuna solo produce Anti-HBs positivo.', 2: 'Sería HBsAg (+) e IgM Anti-HBc (+).', 3: 'Requiere Anti-HBs (+) para confirmar inmunidad.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: MASLD (EXPANDIDO 10) ---
  {
    id: 'masld-011',
    topic: 'masld',
    difficulty: 'Staff',
    text: '¿Cuál es la intervención más efectiva para la resolución de la esteatohepatitis (MASH) en el largo plazo?',
    options: ['Pérdida de peso > 10% del peso corporal total', 'Uso de Estatinas', 'Terapia con probióticos', 'Cirugía de vesícula'],
    correctIndex: 0,
    explanation: 'Una pérdida de peso significativa logra remisión de la inflamación y mejoría de la fibrosis en muchos casos.',
    fisiopato: 'Reduce la resistencia a la insulina y el flujo de ácidos grasos libres al hígado.',
    clinicalPearl: 'Es el pilar fundamental del tratamiento (dieta y ejercicio).',
    guideline: 'Manual Chileno 2025 / AASLD.',
    whyWrong: { 1: 'Protegen el corazón y son seguras, pero no curan el MASH per se.', 2: 'Evidencia aún preliminar.', 3: 'No tiene relación con el metabolismo graso hepático.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: CANCER ESOFAGO (EXPANDIDO 3) ---
  {
    id: 'ce-006',
    topic: 'cancer_esofago',
    difficulty: 'Fellow',
    text: '¿Cuál es el factor pronóstico más importante en el cáncer de esófago resecable?',
    options: ['Estado de los linfonodos (N)', 'Tamaño tumoral', 'Grado de diferenciación', 'Edad del paciente'],
    correctIndex: 0,
    explanation: 'El compromiso ganglionar es el predictor más fuerte de sobrevida y recurrencia.',
    fisiopato: 'La rica red linfática submucosa del esófago facilita la diseminación temprana incluso en tumores pequeños.',
    clinicalPearl: 'El número de linfonodos positivos correlaciona directamente con el pronóstico post-esofagectomía.',
    guideline: 'AJCC Cancer Staging Manual.',
    whyWrong: { 1: 'Importante, pero menos decisivo que el N.', 2: 'Factor relevante pero secundario al estadio TNM.', 3: 'No es un factor pronóstico primario independiente.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: ÚLCERA PÉPTICA (EXPANDIDO 4) ---
  {
    id: 'up-006',
    topic: 'ulcera_peptica',
    difficulty: 'Staff',
    text: '¿Cuál es la localización más frecuente de una úlcera péptica por estrés en un paciente crítico en la UCI?',
    options: ['Cuerpo y fondo gástrico', 'Antro gástrico', 'Bulbo duodenal', 'Esófago distal'],
    correctIndex: 0,
    explanation: 'Las úlceras de estrés (de Curling o Cushing) suelen ser múltiples y se ubican en el territorio de mayor secreción ácida.',
    fisiopato: 'La hipoperfusión esplácnica reduce la producción de moco y bicarbonato, dejando la mucosa vulnerable.',
    clinicalPearl: 'La profilaxis con IBP o antagonistas H2 se reserva para pacientes con factores de riesgo (ej: ventilación mecánica > 48h o coagulopatía).',
    guideline: 'Surviving Sepsis Campaign Guidelines.',
    whyWrong: { 1: 'Menos común para úlceras de estrés puro.', 2: 'Localización principal de la úlcera duodenal crónica, no de estrés.', 3: 'Raro en este contexto.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: CANCER GÁSTRICO (EXPANDIDO 3) ---
  {
    id: 'cg-009',
    topic: 'cancer_gastrico',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la mutación germinal asociada al Cáncer Gástrico Difuso Hereditario?',
    options: ['CDH1 (E-cadherina)', 'APC', 'MSH2', 'BRCA1'],
    correctIndex: 0,
    explanation: 'La pérdida de la proteína E-cadherina altera la adhesión celular, produciendo el fenotipo de células en anillo de sello.',
    fisiopato: 'La falta de cohesión celular permite la infiltración difusa a través de las capas de la pared gástrica (linitis plástica).',
    clinicalPearl: 'Pacientes portadores de mutación CDH1 tienen indicación de gastrectomía profiláctica.',
    guideline: 'International Gastric Cancer Linkage Consortium (IGCLC).',
    whyWrong: { 1: 'Asociado a Poliposis Adenomatosa Familiar.', 2: 'Asociado a Síndrome de Lynch.', 3: 'Asociado a cáncer de mama/ovario.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DIARREA CRÓNICA (EXPANDIDO 7) ---
  {
    id: 'dc-009',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: '¿Cuál es el hallazgo histopatológico definitorio de la Colitis Colágena?',
    options: ['Banda de colágeno subepitelial > 10 micras', 'Infiltrado linfocítico intraepitelial > 20 por 100 células', 'Granulomas no caseificantes', 'Abscesos de criptas'],
    correctIndex: 0,
    explanation: 'Es una de las dos formas principales de colitis microscópica.',
    fisiopato: 'Depósito anómalo de colágeno que altera la función de barrera y absorción de agua.',
    clinicalPearl: 'Se presenta como diarrea acuosa crónica en mujeres de mediana edad; la endoscopia suele ser normal.',
    guideline: 'AGA Clinical Practice Guidelines on Microscopic Colitis.',
    whyWrong: { 1: 'Define Colitis Linfocítica.', 2: 'Sugerente de Crohn.', 3: 'Sugerente de Colitis Ulcerosa o Crohn.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: DOLOR ABDOMINAL (EXPANDIDO 8) ---
  {
    id: 'da-009',
    topic: 'dolor_abdominal',
    difficulty: 'Staff',
    text: '¿Cuál es la causa más frecuente de Isquemia Mesentérica Aguda embólica?',
    options: ['Fibrilación auricular', 'Aterosclerosis aórtica', 'Vasospasmo por cocaína', 'Disección aórtica'],
    correctIndex: 0,
    explanation: 'Los trombos auriculares se desprenden y ocluyen típicamente la Arteria Mesentérica Superior.',
    fisiopato: 'La anatomía de la AMS, con su ángulo de salida agudo, favorece la entrada de émbolos cardiacos.',
    clinicalPearl: 'Presenta un dolor "desproporcionado al examen físico".',
    guideline: 'Manual Chileno 2025 / WSES Guidelines.',
    whyWrong: { 1: 'Suele causar isquemia mesentérica crónica o trombosis in situ, no embolia abrupta.', 2: 'Causa isquemia no oclusiva.', 3: 'Causa isquemia pero es menos frecuente que la FA.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: CIRROSIS (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'cir-027',
    topic: 'cirrosis',
    difficulty: 'Fellow',
    text: 'En un paciente cirrótico con ascitis moderada (grado 2) de reciente diagnóstico, ¿cuál es el abordaje terapéutico de primera línea?',
    options: ['Restricción de sodio dietético (2 g/día) y diuréticos (aldosterónicos solos o con furosemida)', 'Paracentesis evacuadora total', 'TIPS (Derivación portosistémica intrahepática transyugular)', 'Restricción hídrica profiláctica'],
    correctIndex: 0,
    explanation: 'El manejo inicial de la ascitis no tensa se basa en balance negativo de sodio. Los diuréticos son el pilar farmacológico.',
    fisiopato: 'El hiperaldosteronismo secundario en la cirrosis obliga al uso de bloqueadores del receptor de aldosterona como fármaco basal.',
    clinicalPearl: 'La dosis máxima recomendada habitualmente es Espironolactona 400 mg y Furosemida 160 mg al día.',
    guideline: 'EASL Clinical Practice Guidelines on the management of decompensated cirrhosis.',
    whyWrong: { 1: 'Reservada para ascitis grado 3 (tensa o refractaria).', 2: 'Tratamiento de rescate para ascitis refractaria o sangrado por várices.', 3: 'Solo se indica restricción hídrica si hay hiponatremia dilucional severa (< 125 mEq/L).' },
    pillar: 'Must-Know'
  },
  {
    id: 'cir-028',
    topic: 'cirrosis',
    difficulty: 'Staff',
    text: '¿Cuál es la complicación más frecuente y temprana post-inserción de un TIPS en un paciente cirrótico?',
    options: ['Encefalopatía hepática', 'Trombosis del stent', 'Insuficiencia cardiaca derecha aguda', 'Sangrado intraabdominal'],
    correctIndex: 0,
    explanation: 'El TIPS desvía la sangre portal llena de amonio y toxinas directamente a la circulación sistémica, bypasseando los hepatocitos.',
    fisiopato: 'Al reducir drásticamente el flujo portal al hígado, se reduce el aclaramiento de toxinas nitrogenadas de origen intestinal.',
    clinicalPearl: 'A mayor diámetro del stent (ej: 10mm vs 8mm), mayor riesgo de encefalopatía.',
    guideline: 'AASLD Practice Guidance on the use of TIPS.',
    whyWrong: { 1: 'Es una complicación a largo plazo, menos común con los stents recubiertos de PTFE actuales.', 2: 'Posible pero menos frecuente que la encefalopatía (que ocurre en ~30-50%).', 3: 'Complicación técnica rara.' },
    pillar: 'Common Cases'
  },
  {
    id: 'cir-029',
    topic: 'cirrosis',
    difficulty: 'Subspecialist',
    text: 'Paciente con cirrosis que cursa con Peritonitis Bacteriana Espontánea (PBE). Presenta Bilirrubina 4.5 mg/dL y Creatinina 1.2 mg/dL. ¿Cuál es el manejo preventivo indicado?',
    options: ['Albúmina intravenosa 1.5 g/kg el día 1 y 1.0 g/kg el día 3', 'Terlipresina en infusión continua', 'Transfusión de plasma fresco congelado', 'Solo Ceftriaxona por 5 días'],
    correctIndex: 0,
    explanation: 'La albúmina está indicada en pacientes con PBE que tengan alto riesgo de desarrollar síndrome hepatorrenal (BUN > 30, Creatinina > 1.0, o Bilirrubina > 4.0).',
    fisiopato: 'La PBE exacerba la vasodilatación esplácnica; la albúmina previene la reducción del volumen arterial efectivo y protege la función renal.',
    clinicalPearl: 'El uso temprano de albúmina en este subgrupo reduce la incidencia de SHR del 30% a menos del 10%.',
    guideline: 'EASL Clinical Practice Guidelines on decompensated cirrhosis.',
    whyWrong: { 1: 'Se usa para el tratamiento del Síndrome Hepatorrenal ya establecido o sangrado variceal.', 2: 'No mejora el volumen arterial efectivo a largo plazo ni previene SHR.', 3: 'No previene la disfunción renal en PBE.' },
    pillar: 'Mastery'
  },
  {
    id: 'cir-030',
    topic: 'cirrosis',
    difficulty: 'Fellow',
    text: '¿Cuál es la primera alteración hemodinámica que desencadena toda la cascada de retención hidrosalina en la cirrosis?',
    options: ['Vasodilatación esplácnica', 'Hiperaldosteronismo secundario', 'Aumento de la hormona antidiurética (ADH)', 'Vasoconstricción renal'],
    correctIndex: 0,
    explanation: 'La vasodilatación del lecho esplácnico (mediada por óxido nítrico) reduce el volumen arterial efectivo, lo que los barorreceptores perciben como hipovolemia.',
    fisiopato: 'Al disminuir la resistencia vascular sistémica, se activan los sistemas neurohumorales (SRAA, SNS, ADH) para intentar restaurar la perfusión.',
    clinicalPearl: 'El objetivo de drogas como la Terlipresina es precisamente revertir esta vasodilatación esplácnica inicial.',
    guideline: 'Pathophysiology of Portal Hypertension.',
    whyWrong: { 1: 'Es una consecuencia (fase eferente), no el gatillo.', 2: 'Es una respuesta tardía a la hipovolemia efectiva leve/severa.', 3: 'Es una respuesta compensatoria al rescate de volumen.' },
    pillar: 'Board Prep'
  },

  // --- SECTOR: PANCREATITIS (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'pan-017',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál es el patógeno más comúnmente aislado en la necrosis pancreática infectada?',
    options: ['Escherichia coli (y otros Gram negativos intestinales)', 'Staphylococcus aureus', 'Candida albicans', 'Pseudomonas aeruginosa'],
    correctIndex: 0,
    explanation: 'La infección de la necrosis pancreática ocurre clásicamente por traslocación bacteriana desde el tracto gastrointestinal adyacente.',
    fisiopato: 'El íleo adinámico y la disfunción de barrera mucosa permiten que las bacterias entéricas colonicen el tejido necrótico peripancreático.',
    clinicalPearl: 'Por esto, el antibiótico empírico (ej. Carbapenémicos) debe cubrir principalmente enterobacterias y anaerobios.',
    guideline: 'ACG Clinical Guideline: Acute Pancreatitis.',
    whyWrong: { 1: 'Típicamente causa infecciones de piel o dispositivos, no por traslocación entérica.', 2: 'Suele ser una sobreinfección tardía o post-quirúrgica prolongada.', 3: 'Ocurre en brotes hospitalarios pero es menos común como agente primario de traslocación.' },
    pillar: 'Must-Know'
  },
  {
    id: 'pan-018',
    topic: 'pancreatitis',
    difficulty: 'Staff',
    text: 'Señale el criterio fundamental que define una pseudoquiste pancreático versus una colección aguda de fluido peripancreático (APFC).',
    options: ['La presencia de una pared madura (tejido de granulación o fibroso), que usualmente tarda > 4 semanas en formarse', 'El tamaño mayor a 5 cm', 'La presencia de necrosis en su interior', 'La ubicación extrapancreática'],
    correctIndex: 0,
    explanation: 'La clasificación de Atlanta revisada basa la madurez de la colección en el tiempo; una colección sin pared madura (< 4 semanas) es un APFC.',
    fisiopato: 'El páncreas requiere de una respuesta inflamatoria crónica para formar una "cápsula" fibrosa sin epitelio de recubrimiento verdadero.',
    clinicalPearl: 'No intente drenar un APFC de forma percutánea a menos que haya infección, pues rara vez madurará adecuadamente ni fistulizará al tracto GI.',
    guideline: 'Revised Atlanta Classification.',
    whyWrong: { 1: 'El tamaño no define la madurez anatómica.', 2: 'Si hay necrosis, se denomina Walled-Off Necrosis (WON), no pseudoquiste.', 3: 'Ambos pueden ser extrapancreáticos.' },
    pillar: 'Common Cases'
  },
  {
    id: 'pan-019',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: '¿Qué marcador genético confiere un alto riesgo predisponente para el desarrollo de Pancreatitis Crónica hereditaria, habitualmente de inicio en la infancia?',
    options: ['Mutación PRSS1', 'Mutación CFTR', 'Mutación SPINK1', 'Mutación NOD2'],
    correctIndex: 0,
    explanation: 'La mutación del gen PRSS1 ( tripsinógeno catiónico) causa una ganancia de función, activando la tripsina dentro del páncreas de forma espontánea.',
    fisiopato: 'Al activarse prematuramente, la tripsina lanza una cascada proteolítica intrapancreática que vence los mecanismos inhibidores naturales.',
    clinicalPearl: 'Estos pacientes tienen un riesgo >40% de cáncer de páncreas a lo largo de su vida, justificando screening intensivo.',
    guideline: 'Pancreatitis Genetics: ACG.',
    whyWrong: { 1: 'Se relaciona a Fibrosis Quística pero afecta el canal de cloro (secreción ductal), mecanismo diferente.', 2: 'Es una mutación modificadora de riesgo (inhibidor), pero la causa primaria autosómica dominante clásica es PRSS1.', 3: 'Relacionado a Enfermedad de Crohn.' },
    pillar: 'Mastery'
  },
  {
    id: 'pan-020',
    topic: 'pancreatitis',
    difficulty: 'Staff',
    text: 'Femenina de 60 años con antecedente reciente de CPRE presenta dolor abdominal y amilasemia elevada 18 horas después. ¿Cuál es el factor periprocedural que más reduce el riesgo de Pancreatitis Post-CPRE?',
    options: ['Instalación de STENT pancreático profiláctico y supositorios de AINEs (Indometacina/Diclofenaco)', 'Uso de Cefazolina profiláctica IV', 'Dilatación en lugar de esfinterotomía', 'Ayuno estricto post-procedimiento por 48h'],
    correctIndex: 0,
    explanation: 'La combinación de AINEs rectales (para modular la cascada inflamatoria inicial del ácido araquidónico) e instalación de stent (para asegurar el drenaje ductal) son altamente efectivos.',
    fisiopato: 'Los AINEs rectales inhiben la fosfolipasa A2 y prostaglandinas, deteniendo la injuria acinar temprana.',
    clinicalPearl: 'Siempre se deben administrar los AINEs rectales INMEDIATAMENTE ANTES o DESPUÉS del procedimiento en todo paciente sin contraindicación.',
    guideline: 'ESGE Guidelines for prophylaxis of Post-ERCP Pancreatitis.',
    whyWrong: { 1: 'No previene la injuria química/mecánica inicial de la pancreatitis.', 2: 'Al contrario, la dilatación papilar con balón de gran tamaño SIN esfinterotomía puede aumentar el riesgo.', 3: 'No hay evidencia de que prevenir la alimentación oral evite el PEP.' },
    pillar: 'Board Prep'
  },
  {
    id: 'pan-021',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: '¿Cuál es la prueba diagnóstica funcional de referencia (Gold Standard histórico aunque de difícil acceso clínico) para evaluar la Insuficiencia Exocrina Pancreática?',
    options: ['Test de Secretina-Colecistoquinina (estimulación directa e intubación duodenal)', 'Elastasa fecal', 'Quimotripsina en heces', 'Resonancia con Secretina'],
    correctIndex: 0,
    explanation: 'Es el test más sensible, pero altamente invasivo y reservado para centros de excelencia o investigación.',
    fisiopato: 'Mide la cantidad exacta de bicarbonato y enzimas vertidas al duodeno tras estímulo hormonal máximo.',
    clinicalPearl: 'En la práctica clínica habitual, la Elastasa fecal es el test más usado y práctico.',
    guideline: 'UEG Guidelines for CP.',
    whyWrong: { 1: 'Es el test de uso clínico más frecuente, pero menos sensible para enfermedad leve.', 2: 'Menos específico que la elastasa.', 3: 'Es una prueba de imagen y morfología ductal, no una medición cuantitativa funcional directa en el lumen.' },
    pillar: 'Mastery'
  },
  {
    id: 'pan-022',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: '¿Cuál de los siguientes es el mejor momento estimado para iniciar nutrición enteral en un paciente con pancreatitis aguda severa pronosticada?',
    options: ['Dentro de las primeras 24-48 horas tras el ingreso', 'A los 7 días de reposo gástrico', 'Cuando inicie tránsito intestinal positivo', 'Al resolver el dolor abdominal'],
    correctIndex: 0,
    explanation: 'La nutrición enteral temprana mejora la barrera intestinal y reduce la traslocación bacteriana.',
    fisiopato: 'El reposo intestinal atrofia los enterocitos y debilita las uniones estrechas, abriendo paso a la sepsis de origen entérico.',
    clinicalPearl: 'Use sonda nasogástrica o nasoyeyunal tempranamente si el paciente no tolera p.o.',
    guideline: 'AGA Clinical Guidelines on Management of Acute Pancreatitis.',
    whyWrong: { 1: 'Asociado a mayor riesgo de infección de la necrosis.', 2: 'Criterio arcaico; los ruidos no son necesarios para nutrir.', 3: 'El dolor no prohíbe la alimentación enteral.' },
    pillar: 'Must-Know'
  },
  {
    id: 'pan-023',
    topic: 'pancreatitis',
    difficulty: 'Subspecialist',
    text: 'Ante un paciente con Cáncer de Páncreas avanzado en la cabeza (irresecable) que cursa con ictericia obstructiva indolora, ¿qué prótesis endoscópica biliar se recomienda preferentemente para el manejo paliativo?',
    options: ['Stent metálico autoexpandible (SEMS) recubierto o parcialmente recubierto', 'Stent plástico 10 French', 'Colangiostomía percutánea externa', 'Derivación bilio-digestiva quirúrgica'],
    correctIndex: 0,
    explanation: 'En paliación a largo plazo (sobrevida esperada > 3-4 meses), los SEMS tienen menor tasa de oclusión y necesidad de re-intervención.',
    fisiopato: 'El amplio diámetro (10mm) retrasa la formación de biofilm biliar en comparación con los 3mm (10 Fr) del stent plástico.',
    clinicalPearl: 'Los plásticos solo se prefieren si la sobrevida esperada es muy corta (< 3 meses) o si es pre-quirúrgico inmediato.',
    guideline: 'ESGE Guidelines: Biliary stenting.',
    whyWrong: { 1: 'Alta tasa de oclusión y colangitis a repetición temprana.', 2: 'Reduce calidad de vida, solo se usa en falla endoscópica.', 3: 'Mórbido e innecesario dado el éxito de la vía endoscópica actual.' },
    pillar: 'Mastery'
  },
  {
    id: 'pan-024',
    topic: 'pancreatitis',
    difficulty: 'Staff',
    text: 'En ultrasonido endoscópico (EUS), la lesión quística mucinosa de la cola pancreática se caracteriza clásicamente por presentarse en mujeres, no comunicar con el conducto principal y poseer un estroma análogo ¿a qué tejido?',
    options: ['Estroma de tipo ovárico', 'Estroma mieloide', 'Epitelio pseudoestratificado', 'Estroma hepático'],
    correctIndex: 0,
    explanation: 'El Cistadenoma Mucinoso se define histológicamente por la presencia de tejido estromal de tipo ovárico rico en receptores hormonales.',
    fisiopato: 'Tiene potencial pre-maligno a diferencia del cistadenoma seroso.',
    clinicalPearl: 'Casi exclusivamente se da en mujeres (99%) de mediana edad, ubicadas en cuerpo o cola de páncreas.',
    guideline: 'International consensus guidelines 2012 / Fukuoka on IPMN/MCN.',
    whyWrong: { 1: 'No hallado en neoplasias quísticas mucinosas.', 2: 'No es estromal.', 3: 'Irrelevante.' },
    pillar: 'Must-Know'
  },
  {
    id: 'pan-025',
    topic: 'pancreatitis',
    difficulty: 'Fellow',
    text: 'El hallazgo de una masa en la cabeza del páncreas con dilatación del conducto de Wirsung (signo del doble conducto asociado) y elevación de CA 19-9 a > 1000 U/mL en un adulto mayor sugiere fuertemente:',
    options: ['Adenocarcinoma ductal de páncreas', 'Pancreatitis autoinmune tipo 1', 'Cistadenoma seroso', 'Tumor neuroendocrino de páncreas'],
    correctIndex: 0,
    explanation: 'El adenocarcinoma ductal (85% de los tumores pancreáticos malignos) causa característicamente invasión local precoz y desmoplasia estenosante.',
    fisiopato: 'Al obstruir la desembocadura de los conductos intrapancreáticos en el ámpula, dilata en forma retrógrada tanto el Wirsung como el colédoco ("Doble conducto").',
    clinicalPearl: 'CA 19-9 puede elevarse discretamente (ej. < 100) en colestasia, pero valores extremos asientan el diagnóstico neoplásico.',
    guideline: 'NCCN Guidelines: Pancreatic Adenocarcinoma.',
    whyWrong: { 1: 'Puede simular una masa, pero CA 19-9 no suele cruzar los > 1000 U/mL, y presenta IgG4 alta.', 2: 'Es una masa multiquística pequeña "en panal de abejas", benigna.', 3: 'Suelen ser masas hipervasculares, bien delineadas, sin "doble conducto" típico.' },
    pillar: 'Board Prep'
  },
  {
    id: 'pan-026',
    topic: 'pancreatitis',
    difficulty: 'Staff',
    text: 'Durante la reanimación inicial por Pancreatitis Aguda severa en las primeras 24 hrs, ¿cuál meta de Ringer Lactato se considera "terapia fluídica dirigida por objetivos" (Goal-directed fluid therapy)?',
    options: ['Diuresis > 0.5 - 1 ml/kg/h, disminución del BUN (nitrógeno ureico) y PAM > 65 mmHg', 'Infusión ciega de 10 litros al día', 'Mantener una frecuencia cardíaca < 60 lpm', 'Diuresis de 3 ml/kg/h'],
    correctIndex: 0,
    explanation: 'La fluidoterapia agresiva pero balanceada debe revertir la hemoconcentración microvascular inicial sin causar edema pulmonar (sobrecarga de volumen excesiva).',
    fisiopato: 'El atrapamiento de volumen (tercer espacio) en el lecho peripancreático exige reanimación, pero el páncreas carente de cápsula verdadera se "edematiza" al igual que el pulmón si el aporte es excesivo.',
    clinicalPearl: 'Ringer Lactato es preferido sobre solución fisiológica pues causa menos acidosis hiperclorémica, que podría exacerbar el SIRS.',
    guideline: 'ACG/IAP Guidelines for Pancreatitis Fluid Resuscitation.',
    whyWrong: { 1: 'Ha demostrado aumentar el distrés respiratorio (SDRA) y presión intraabdominal.', 2: 'No es una meta fisiológica realista para hipovolemia por SIRS.', 3: 'Mucha orina sugiere sobrecarga masiva.' },
    pillar: 'Emergency'
  },

  // --- SECTOR: HDA (EXPANDIDO) ---
  {
    id: 'hda-017',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál es el tiempo máximo recomendado (ventana ideal) para realizar una endoscopia digestiva alta en un paciente con sangrado no variceal hemodinámicamente estable tras resucitación?',
    options: ['Primeros 24 horas', 'Primeras 6 horas', 'A las 72 horas', 'En la primera hora (ultra-precoz)'],
    correctIndex: 0,
    explanation: 'La endoscopia dentro de las 24 horas mejora los desenlaces. Hacerla de manera "ultra precoz" (< 6 horas) o en la primera hora no mejora la mortalidad y puede ser inseguro si el paciente no está bien reanimado.',
    fisiopato: 'La reanimación hemodinámica (volumen, transfusión) restaura la perfusión y es más urgente que la inspección del lumen gástrico.',
    clinicalPearl: 'Estabilice primero. La endoscopia en un paciente en shock hipovolémico severo sin vía aérea asegurada es altamente letal.',
    guideline: 'ACG Guidelines for Upper GI Bleeding.',
    whyWrong: { 1: 'Endoscopia precoz (<24h) es buena, pero la meta estricta de <6h no muestra superioridad poblacional.', 2: 'Tardío, aumenta riesgo de resangrado silente.', 3: 'Se asocia a mayores complicaciones asociadas a la sedación/hipovolemia en agudo.' },
    pillar: 'Must-Know'
  },
  {
    id: 'hda-018',
    topic: 'hda',
    difficulty: 'Staff',
    text: 'En el manejo de una úlcera péptica Forrest Ib (sangrado en napa), ¿cuál de las siguientes terapias es el estándar actual?',
    options: ['Terapia combinada: Epinefrina (inyección) + Terapia mecánica (clip) o térmica (coagulación)', 'Solo terapia mecánica con clip', 'Solo terapia térmica', 'Inyección aislada de epinefrina'],
    correctIndex: 0,
    explanation: 'La inyección de epinefrina logra hemostasia transitoria inicial, facilitando el despliegue del clip o del catéter térmico definitivo.',
    fisiopato: 'La epinefrina produce vasoconstricción y taponamiento físico por volumen submucoso, pero su efecto desaparece rápídamente.',
    clinicalPearl: 'NUNCA deje una úlcera sangrante activa solo con inyección de epinefrina.',
    guideline: 'ASGE: The role of endoscopy in the management of non-variceal upper GI bleeding.',
    whyWrong: { 1: 'Adecuada, pero a menudo la sangre dificulta la visualización; la epinefrina es un coadyuvante muy útil.', 2: 'Difícil bajo pozos de sangre activa.', 3: 'Tasa de resangrado inaceptablemente alta si se usa como monoterapia.' },
    pillar: 'Must-Know'
  },
  {
    id: 'hda-019',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: '¿Qué marcador clínico/endoscópico define la "Hemorragia Oculta de Origen Oscuro"?',
    options: ['Sangre microscópica en heces o anemia ferropénica sin síntomas visibles, con endoscopia alta y baja iniciales negativas', 'Melena recurrente', 'Vómitos en borra de café', 'Hemorroides sangrantes sin dolor'],
    correctIndex: 0,
    explanation: 'El término requiere que no haya sangrado visible para el paciente y que los estudios de endoscopia estándar sean normales.',
    fisiopato: 'Frecuentemente el origen está en el intestino delgado (ej. angiodisplasias, tumor estromal gastrointestinal, enfermedad de Crohn intestinal).',
    clinicalPearl: 'El siguiente paso diagnóstico suele ser una cápsula endoscópica.',
    guideline: 'ACG Clinical Guideline: Small Bowel Bleeding.',
    whyWrong: { 1: 'Es hemorragia macroscópica u "Overt".', 2: 'HDA manifiesta.', 3: 'Diagnóstico colónico bajo evidente.' },
    pillar: 'Board Prep'
  },
  {
    id: 'hda-020',
    topic: 'hda',
    difficulty: 'Fellow',
    text: 'Paciente con HDA severa (melena masiva, hipotensión). Su nivel de Hemoglobina al ingreso es de 13 g/dL. ¿Cómo se interpreta este laboratorio?',
    options: ['Es un falso reconfortante; la caída de la Hb tarda 24-72 hrs en equilibrarse tras reanimación hídrica', 'Indica que el sangrado ya se detuvo', 'Descarta una hemorragia masiva', 'Sugiere hemoconcentración por deshidratación leve'],
    correctIndex: 0,
    explanation: 'En el sangrado agudo, se pierde sangre total (plasma y glóbulos rojos). La concentración inicial (Hb) no cambia hasta que los fluidos extravasculares (o los aportados en resucitación) diluyen la sangre restante.',
    fisiopato: 'El hematocrito y la Hb no son marcadores directos del volumen de pérdida en la primera hora de una hemorragia mayor.',
    clinicalPearl: 'No retrase la transfusión en un paciente en shock hemorrágico solo porque la Hb inicial es "normal".',
    guideline: 'ATLS / Gastroenterology Core Principles.',
    whyWrong: { 1: 'Falso.', 2: 'Falso, puede estar en shock exanguinante.', 3: 'La pérdida de sangre total no produce hemoconcentración típica.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'hda-021',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: 'Tras el fracaso de dos intentos de endoscopia terapéutica para el control de un sangrado ulceroso masivo, ¿cuál es la medida de rescate actual preferida?',
    options: ['Angiografía percutánea con embolización transcatéter', 'Cirugía de urgencia (gastrectomía parcial o sobrecostura)', 'Escleroterapia masiva', 'Uso de un stent metálico esofágico autoexpandible'],
    correctIndex: 0,
    explanation: 'La embolización por radiología intervencional tiene tasas de éxito altas con menor morbimortalidad que la cirugía abierta de urgencia en pacientes lábiles.',
    fisiopato: 'Se utiliza la oclusión arterial selectiva o supraselectiva (ej. arteria gastroduodenal) mediante coils o partículas.',
    clinicalPearl: 'Siempre considere mantener al paciente estabilizado con bolos de hemoderivados mientras se organiza la angiografía.',
    guideline: 'International consensus recommendations on the management of patients with nonvariceal upper gastrointestinal bleeding.',
    whyWrong: { 1: 'Históricamente era la opción, hoy se relega a cuando falla la embolización.', 2: 'Riesgo inaceptable de perforación y necrosis de la pared.', 3: 'Aprobado para várices esofágicas, no para úlceras duodenales o gástricas (el antro no permite su anclaje).' },
    pillar: 'Emergency'
  },

  // --- SECTOR: DIARREA AGUDA (EXPANDIDO) ---
  {
    id: 'dag-013',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: '¿Cuál es el mecanismo fisiopatológico principal de la diarrea acuosa masiva en el cólera (Vibrio cholerae)?',
    options: ['La toxina CTx estimula irreversiblemente a la adenilato ciclasa (vía proteína Gs), aumentando el AMPc intracelular', 'Destrucción directa del enterocito', 'Inflamación de la submucosa (granulomas)', 'Inactivación de las vellosidades intestinales (atrofia)'],
    correctIndex: 0,
    explanation: 'El exceso de AMPc provoca una apertura permanente de los canales de cloro (CFTR) y la inhibición de la absorción de sodio.',
    fisiopato: 'El paso masivo de Cl- a la luz intestinal arrastra Na+ y agua por gradiente osmótico y eléctrico (diarrea secretora pura).',
    clinicalPearl: 'La mucosa intestinal se mantiene histológicamente normal (sin invasión patógena).',
    guideline: 'Infectious Diseases / CDC.',
    whyWrong: { 1: 'Ningún daño estructural.', 2: 'Es una diarrea no inflamatoria.', 3: 'Mecanismo del rotavirus o enfermedad celiaca.' },
    pillar: 'Must-Know'
  },
  {
    id: 'dag-014',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: 'En una infección por Salmonella enterica serotipo no tifoidea en un paciente inmunocompetente que cursa con diarrea leve a moderada sin fiebre, ¿cuál es el manejo antibiótico recomendado?',
    options: ['No se recomienda tratamiento antibiótico de rutina', 'Ciprofloxacino por 5 días', 'Ceftriaxona intravenosa', 'Metronidazol oral'],
    correctIndex: 0,
    explanation: 'La gastroenteritis por Salmonella no tifoidea en adultos sanos es generalmente autolimitada.',
    fisiopato: 'El uso de antibióticos en casos no complicados puede prologar el estado de portador fecal (excreción de la bacteria).',
    clinicalPearl: 'Se reserva antibióticos para: inmunodeprimidos, >50 años con enfermedad vascular severa severa, o bacteriemia sospechada.',
    guideline: 'IDSA Guidelines for the Diagnosis and Management of Infectious Diarrhea.',
    whyWrong: { 1: 'Aumenta el carrier state en casos leves.', 2: 'Para casos severos de bacteriemia o tifoidea.', 3: 'Para Giardia o C. difficile, ineficaz.' },
    pillar: 'Common Cases'
  },
  {
    id: 'dag-015',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: 'De los siguientes factores asociados con la patogénesis de la infección por Clostridioides difficile, ¿cuál explica mejor la recurrencia frecuente de la enfermedad tras completar la terapia con vancomicina oral?',
    options: ['Persistencia de esporas en el microbiota intestinal', 'Resistencia antimicrobiana a la Vancomicina', 'Toxinas encapsuladas', 'Transmisión vertical'],
    correctIndex: 0,
    explanation: 'C. difficile forma esporas altamente resistentes a los antibióticos y a los desinfectantes alcohólicos.',
    fisiopato: 'Cuando el antibiótico inhibe las formas vegetativas, las esporas sobreviven. Cuando el nivel de antibiótico cae, germinan si la microbiota sana aún no ha repoblado el colon.',
    clinicalPearl: 'La vancomicina oral cura el 80% del primer episodio, pero 20-25% van a recurrir por la germinación de esporas.',
    guideline: 'IDSA/SHEA Guidelines on CDI.',
    whyWrong: { 1: 'La resistencia estricta in vivo es muy rara actualmente.', 2: 'Las toxinas no se encapsulan, son proteínas secretadas que se degradan.', 3: 'Vía de transmisión fecal-oral externa, no intra-huésped.' },
    pillar: 'Must-Know'
  },
  {
    id: 'dag-016',
    topic: 'diarrea_aguda',
    difficulty: 'Subspecialist',
    text: 'En el Síndrome Hemolítico Urémico (SHU) secundario a E. coli productora de toxina Shiga (STEC / EHEC O157:H7), ¿cuál de las siguientes terapias antimicrobianas está recomendada?',
    options: ['El uso de antibióticos está generalmente contraindicado', 'Fluoroquinolonas', 'Macrólidos de amplia penetración', 'Aminoglucósidos solos'],
    correctIndex: 0,
    explanation: 'El tratamiento con inhibidores de síntesis de ADN (como quinolonas) o lisis celular favorece la liberación masiva del bacteriófago asociado a la toxina Shiga.',
    fisiopato: 'Al sentirse en estado de estrés (por el antibiótico), la bacteria aumenta la producción y diseminación de la toxina, empeorando el riesgo de daño renal (SHU).',
    clinicalPearl: 'Manejo es terapia de soporte y diálisis temprana si procede.',
    guideline: 'Infectious Diarrhea Management (IDSA).',
    whyWrong: { 1: 'Peligrosas (empeoran STEC).', 2: 'Empeoran pronóstico renal.', 3: 'Contraindicación empírica.' },
    pillar: 'Emergency'
  },
  {
    id: 'dag-017',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: 'Un joven que desayunó ensalada de patata y mayonesa presenta vómitos explosivos severos y calambres abdominales solo 3 horas después de comer. No tiene fiebre significativa. ¿Cuál es el agente etiológico más congruente con este modo de inicio fulminante?',
    options: ['Staphylococcus aureus (Intoxicación alimentaria por enterotoxina preformada)', 'E. coli enterotoxigénica (ETEC)', 'Norovirus', 'Shigella sonnei'],
    correctIndex: 0,
    explanation: 'Los periodos de incubación muy cortos (< 6 horas) son patognomónicos de intoxicación por toxinas preformadas en los alimentos.',
    fisiopato: 'S. aureus (y Bacillus cereus en arroz frito) produce enterotoxinas estables al calor; la toxina estimula directamente el centro del vómito del SNC vagomiméticamente.',
    clinicalPearl: 'El cuadro es eminentemente alto (náuseas/vómitos de inicio brusco) más que diarrea exudativa.',
    guideline: 'CDC Foodborne Outbreak guidelines.',
    whyWrong: { 1: 'Incubación > 1-3 días (diarrea del viajero).', 2: 'Incubación 1-2 días (brotes virales en cruceros).', 3: 'Diarrea inflamatoria/disentería, incubación de días.' },
    pillar: 'Common Cases'
  },

  // --- SECTOR: HDA (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'hda-022',
    topic: 'hda',
    difficulty: 'Fellow',
    text: '¿Cuál de los siguientes fármacos procinéticos se recomienda usar 30 a 120 minutos antes de la endoscopia en un paciente con sangrado digestivo alto agudo intenso, para mejorar la visualización?',
    options: ['Eritromicina intravenosa (250 mg)', 'Metoclopramida', 'Domperidona', 'Butilescopolamina'],
    correctIndex: 0,
    explanation: 'La eritromicina actúa como agonista del receptor de motilina, induciendo contracciones gástricas fuertes que vacían la sangre y coágulos del estómago al duodeno.',
    fisiopato: 'Altera el complejo motor migratorio, produciendo un barrido mecánico del lumen gástrico.',
    clinicalPearl: 'Estudios muestran que reduce significativamente la necesidad de una segunda endoscopia por mala visualización.',
    guideline: 'ACG/ASGE Guidelines for Non-Variceal Upper GI Bleeding.',
    whyWrong: { 1: 'Menos potente que la eritromicina para este fin específico.', 2: 'Procinético oral débil, sin rol en sangrado agudo.', 3: 'Es un antiespasmódico, empeoraría la estasis gástrica.' },
    pillar: 'Must-Know'
  },
  {
    id: 'hda-023',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: 'Un paciente cirrótico tratado profilácticamente con betabloqueadores no selectivos presenta una hemorragia variceal aguda con hipotensión. ¿Qué se debe hacer con el betabloqueador (ej. Propranolol)?',
    options: ['Suspenderlo inmediatamente durante el episodio de sangrado agudo y reanimación', 'Mantener la misma dosis para prevenir resangrado', 'Aumentar la dosis para reducir más la presión portal', 'Cambiar inmediatamente a Carvedilol'],
    correctIndex: 0,
    explanation: 'En el contexto de shock hipovolémico o inestabilidad hemodinámica, los betabloqueadores anulan la respuesta simpática taquicárdica compensatoria.',
    fisiopato: 'Impiden que el corazón aumente su gasto en respuesta a la hipovolemia severa, aumentando la mortalidad aguda.',
    clinicalPearl: 'Una vez pasada la crisis (ventana típica de 2-5 días) y lograda la estabilidad, deben ser reiniciados con titulación cautelosa.',
    guideline: 'Baveno VII Consensus.',
    whyWrong: { 1: 'Altamente letal en shock.', 2: 'Letal.', 3: 'El Carvedilol tiene aún más efecto hipotensor sistémico (anti alfa-1).' },
    pillar: 'Emergency'
  },
  {
    id: 'hda-024',
    topic: 'hda',
    difficulty: 'Staff',
    text: 'En la clasificación de Forrest, ¿cómo se clasifica una úlcera con un vaso visible no sangrante, y cuál es su riesgo de resangrado si no se trata?',
    options: ['Forrest IIa; riesgo ~40-50%', 'Forrest Ib; riesgo ~55%', 'Forrest IIb; riesgo ~20%', 'Forrest III; riesgo <5%'],
    correctIndex: 0,
    explanation: 'El vaso visible protruyente o "protuberancia pigmentada" amerita tratamiento endoscópico debido a su alto riesgo de re-ruptura a corto plazo.',
    fisiopato: 'El vaso está taponado por un coágulo inestable u ocluido temporalmente por espasmo, que cede con la reactivación gástrica.',
    clinicalPearl: 'Frecuentemente el vaso "visible" es en realidad el pseudoaneurisma del vaso original en el piso de la úlcera.',
    guideline: 'Stigmata of recent hemorrhage (SRH) consensus.',
    whyWrong: { 1: 'Ib es sangrado activo en napa.', 2: 'IIb es coágulo adherente.', 3: 'III es úlcera con base limpia.' },
    pillar: 'Must-Know'
  },
  {
    id: 'hda-025',
    topic: 'hda',
    difficulty: 'Fellow',
    text: 'Tras el control endoscópico exitoso de una úlcera péptica sangrante Forrest IIa, ¿cuál es el régimen recomendado de Inhibidores de Bomba de Protones?',
    options: ['Bolo IV de 80 mg seguido de infusión de 8 mg/hr por 72 horas (o dosis altísimas intermitentes equivalentes)', 'Pantoprazol 40 mg VO al día', 'Omeprazol 20 mg VO al día', 'Infusión continua por 24 horas y alta'],
    correctIndex: 0,
    explanation: 'Las terapias endoscópicas son vulnerables a la digestión ácida del trombo; la inhibición profunda del ácido (pH > 6 constante) estabiliza el coágulo.',
    fisiopato: 'La pepsina es inactiva a pH superior a 6, lo que previene la disolución prematura de las plaquetas del piso ulceroso.',
    clinicalPearl: 'La terapia oral en dosis altas (ej. 40 mg c/12h VO) está ganando evidencia como no inferior, pero el estándar histórico es la dosis IV.',
    guideline: 'ACG Guideline for Non-Variceal Upper GI Hemorrhage.',
    whyWrong: { 1: 'Insuficiente inhibición de ácido inicial.', 2: 'Dosis estándar de mantención, no de crisis.', 3: 'El mayor riesgo de resangrado es las primeras 72 horas.' },
    pillar: 'Board Prep'
  },
  {
    id: 'hda-026',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: '¿Cuál de los siguientes hallazgos define el Síndrome de Mallory-Weiss atípico o complicado que sí requiere terapia endoscópica?',
    options: ['Desgarro con sangrado activo a chorro o vaso visible', 'Desgarro en la unión escamocolumnar con base limpia (fibrina)', 'Desgarro que se extiende superficialmente', 'Desgarro múltiple pero sin estigmas de sangrado'],
    correctIndex: 0,
    explanation: 'Aunque ~90% de los desgarros de Mallory-Weiss se autolimitan y no requieren nada, aquellos con sangrado arterial activo requieren hemostasia (clip o inyección/térmica).',
    fisiopato: 'La laceración longitudinal atraviesa la mucosa hasta la submucosa, donde puede seccionar la red vascular.',
    clinicalPearl: 'Los clips metálicos son los más seguros para este síndrome debido a la delgadez de la pared esofágica en la unión.',
    guideline: 'Endoscopic management of GI bleeding.',
    whyWrong: { 1: 'No requiere terapia.', 2: 'Si no sangra y no es profundo, no se toca.', 3: 'Mismo caso.' },
    pillar: 'Common Cases'
  },
  {
    id: 'hda-027',
    topic: 'hda',
    difficulty: 'Fellow',
    text: 'En pacientes con fístula aorto-entérica, ¿cuál es la presentación clínica clásica ("Sangrado Heraldo")?',
    options: ['Un sangrado digestivo abrupto que se detiene espontáneamente, seguido de una exanguinación masiva horas o días después', 'Dolor abdominal cólico sin hemorragia evidente', 'Sangrado oculto con ferropenia a lo largo de los años', 'Vómitos de alimento no digerido'],
    correctIndex: 0,
    explanation: 'Es crucial reconocer el sangrado heraldo para operar al paciente antes del episodio exanguinante letal.',
    fisiopato: 'El aneurisma aórtico (o la prótesis vascular) erosiona la tercera porción del duodeno; un coágulo sella temporalmente la pequeña primera fisura.',
    clinicalPearl: 'Todo paciente con HDA y antecedente de prótesis aórtica abdominal tiene fístula aortoentérica hasta demostrar lo contrario.',
    guideline: 'Vascular Surgery / GI Bleeding emergencies.',
    whyWrong: { 1: 'Suele haber hematoquecia/melena masiva seguida transitoriamente por shock.', 2: 'Es una catástrofe aguda, no crónica silente.', 3: 'No encaja en fisiopatología.' },
    pillar: 'Emergency'
  },
  {
    id: 'hda-028',
    topic: 'hda',
    difficulty: 'Staff',
    text: 'Ante el hallazgo incidental en una endoscopia de un coágulo adherente firme sobre una úlcera (Forrest IIb), tras lavarlo vigorosamente y no desprenderse, ¿qué conducta se prefiere hoy en centros especializados?',
    options: ['Remover el coágulo con un asa/guillotina fina e inspeccionar la base para aplicar terapia, si el coágulo no sale con lavado abundante', 'No tocarlo y solo dar IBP altas dosis', 'Aplicar argón plasma encima del coágulo', 'Realizar inyección de epinefrina directamente dentro del coágulo sin removerlo'],
    correctIndex: 0,
    explanation: 'Aunque históricamente no se tocaban, la remoción cuidadosa del coágulo (a menudo tras pre-inyectar epinefrina en la base) permite tratar el vaso oculto y reduce la tasa real de resangrado a <5%.',
    fisiopato: 'Un coágulo "fresco" protege, pero a menudo oculta una arteria pulsátil que sangrará al degradarse el coágulo.',
    clinicalPearl: 'Si decide no removerlo, el paciente debe quedarse estrictamente en IBP altas dosis, ya que el riesgo basal de resangrado supera el 20-30%.',
    guideline: 'International Consensus (Barkun et al).',
    whyWrong: { 1: 'Recomendable solo si el médico no es experto; si se tiene el expertise, removerlo y tratar es superior.', 2: 'El coágulo es un aislante; quemarlo por arriba no coagulará el vaso subyacente.', 3: 'No trata eficazmente el vaso ni coagula mecánicamente.' },
    pillar: 'Mastery'
  },
  {
    id: 'hda-029',
    topic: 'hda',
    difficulty: 'Fellow',
    text: 'El "Rockall Score" se utiliza para estratificar riesgo en HDA. ¿A diferencia del score de Glasgow-Blatchford, qué elemento clave incorpora el Rockall clínico (post-endoscópico)?',
    options: ['Los estigmas endoscópicos de sangrado y tipo de lesión encontrados (ej. cáncer, úlcera)', 'Los niveles de BUN séricos', 'La presentación con melena vs hematemesis', 'El nivel de hemoglobina'],
    correctIndex: 0,
    explanation: 'El score de Rockall completo calcula la probabilidad de resangrado y muerte incluyendo la propia endoscopia, mientras que Glasgow-Blatchford evalúa la necesidad de la endoscopia/intervención misma ex-ante.',
    fisiopato: 'El riesgo real del paciente depende inherentemente de si la HDA es por un cáncer sangrante vs una úlcera con base limpia.',
    clinicalPearl: 'Use el Blatchford pre-endoscopia (Urgencias) y el Rockall para decidir cuándo dar de alta de hospitalización post-endoscopia.',
    guideline: 'BSG UPPER GI BLEEDING.',
    whyWrong: { 1: 'Propio de Glasgow-Blatchford y AIMS65.', 2: 'Propio de Glasgow-Blatchford.', 3: 'Propio de Glasgow-Blatchford.' },
    pillar: 'Board Prep'
  },
  {
    id: 'hda-030',
    topic: 'hda',
    difficulty: 'Subspecialist',
    text: 'La lesión de Cameron es una causa frecuentemente subdiagnosticada de anemia y sangrado oculto. ¿Dónde se localiza y cuál es su etiología?',
    options: ['Son erosiones o úlceras lineales en el cuello de un saco de hernia hiatal, causadas por trauma mecánico respiratorio', 'Son malformaciones arteriovenosas en el antro gástrico', 'Son úlceras duodenales en la pared posterior', 'Es tejido gástrico ectópico en el esófago cervical (Inlet Patch) que cursa con esofagitis'],
    correctIndex: 0,
    explanation: 'Durante el ciclo respiratorio, la fricción crónica del estómago deslizando a través del estrecho hiato diafragmático erosiona la mucosa.',
    fisiopato: 'Este trauma isquémico/mecánico crónico causa microhemorragias asintomáticas (anemia).',
    clinicalPearl: 'Suelen pasarse por alto en la retrovisión a menos que la hernia hiatal se inspeccione cuidadosamente.',
    guideline: 'Atlas of Gastrointestinal Endoscopy.',
    whyWrong: { 1: 'Esa descripción corresponde a GAVE (Watermelon stomach) o Dieulafoy dependiendo de la presentación.', 2: 'No se relaciona a la hernia hiatal.', 3: 'El Inlet Patch puede sangrar/doler, pero no se llama lesión de Cameron.' },
    pillar: 'Mastery'
  },

  // --- SECTOR: DIARREA AGUDA (CIERRE 30 PREGUNTAS TOTALES) ---
  {
    id: 'dag-018',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: 'Un brote de gastroenteritis aguda cursa con diarrea secretora intensa e inmediata que se resuelve en 48 horas en un grupo de pasajeros de crucero. ¿Cuál es el patógeno viral más probable y su método de evasión?',
    options: ['Norovirus; sobrevive bien en superficies inertes y resiste el congelamiento y muchos desinfectantes comunes', 'Rotavirus; evasión por mutación rápida de la espícula, típico en adultos mayores', 'Astrovirus; se transmite por mosquitos en el barco', 'Adenovirus; causa primariamente síntomas respiratorios graves antes de la diarrea'],
    correctIndex: 0,
    explanation: 'Norovirus causa más del 90% de los brotes epidémicos no bacterianos de gastroenteritis en todo el mundo.',
    fisiopato: 'Su altísima infectividad (<20 partículas virales requeridas) y estabilidad ambiental facilitan el ciclo oral-fecal o por vómitos aerosolizados.',
    clinicalPearl: 'En recintos cerrados (residencias, barcos), un paciente vomitando en áreas comunes produce altas tasas de ataque secundario.',
    guideline: 'CDC: Norovirus Clinical Overview.',
    whyWrong: { 1: 'Ocurre más en niños menores de 5 años.', 2: 'Transmisión fecal-oral, no vector.', 3: 'Los serotipos GI causan fiebre y diarrea prolongada (días) en niños principalmente.' },
    pillar: 'Common Cases'
  },
  {
    id: 'dag-019',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: '¿Cuál es el antibiótico de elección para la profilaxis de Diarrea del Viajero en pacientes estrictamente necesarios (ej. Inmunodeprimidos severos, EII activa) que visitan áreas de altísimo riesgo?',
    options: ['Rifaximina', 'Ciprofloxacino en dosis semanales', 'Amoxicilina-Clavulánico', 'Bismuto subsalicilato como único agente validado'],
    correctIndex: 0,
    explanation: 'Si se justifica profilaxis estricta, la rifaximina no se absorbe, alterando mínimamente la flora sistémica mientras suprime E. coli.',
    fisiopato: 'Inhibe la síntesis de ARN bacteriano solo en el tracto GI.',
    clinicalPearl: 'Sin embargo, el consejo universal más recomendado en pacientes inmunocompetentes NO es la profilaxis antibiótica, sino el tratamiento empírico de auto-cuidado si enferman.',
    guideline: 'ISTM / ACG Travel Guidelines.',
    whyWrong: { 1: 'Aumenta el riesgo de portación de cepas multirresistentes.', 2: 'Altera severamente el microbioma y predispone a C. difficile.', 3: 'El Bismuto se puede usar (Pepto-Bismol profiláctico), pero es quimioprofilaxis blanda, no antibiótica profiláctica per se.' },
    pillar: 'Must-Know'
  },
  {
    id: 'dag-020',
    topic: 'diarrea_aguda',
    difficulty: 'Subspecialist',
    text: 'En la infección aguda por Giardia lamblia, ¿cuál es el mecanismo principal de la esteatorrea que observan algunos pacientes prolongadamente?',
    options: ['Aplanamiento de las microvellosidades del intestino proximal (duodeno/yeyuno) que bloquea la absorción de grasas', 'Destrucción directa del páncreas exocrino', 'Producción de una lipasa bacteriana inactivadora', 'Invasión transmural que daña los linfáticos (Quilomicrones bloqueados)'],
    correctIndex: 0,
    explanation: 'El trofozoíto de la Giardia se adhiere firmemente a la mucosa duodenal mediante su disco suctor, reduciendo la superficie celular disponible y alterando las enzimas del ribete en cepillo.',
    fisiopato: 'Aunque no invade la capa submucosa (no es disentería), puede causar inflamación leve que altera la absorción de grasas y lactosa secundariamente.',
    clinicalPearl: 'Fuerte asociación en pacientes con deficit de IgA (agammaglobulinemia) ya que la IgA mucosa las repele normalmente.',
    guideline: 'Parasitology - Pathogenesis of Giardiasis.',
    whyWrong: { 1: 'La giardia no invade el tejido ni ataca el páncreas.', 2: 'Mecanismo falso.', 3: 'Mecanismo propio de la Enfermedad de Whipple o linfoma.' },
    pillar: 'Mastery'
  },
  {
    id: 'dag-021',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: '¿Cuál de los siguientes patógenos entéricos se asocia clásicamente con una de las mayores frecuencias de Síndrome de Guillain-Barré postinfeccioso?',
    options: ['Campylobacter jejuni', 'Listeria monocytogenes', 'Shigella dysenteriae', 'Clostridioides difficile'],
    correctIndex: 0,
    explanation: 'Se postula que 1 de cada 1000 casos de Campylobacter jejuni desarrolla esta neuropatía por mimetismo molecular.',
    fisiopato: 'Los anticuerpos producidos contra el lipooligosacárido del Campylobacter atacan a los gangliósidos de los nervios periféricos del paciente.',
    clinicalPearl: 'A menudo el paciente se presenta en urgencia por parálisis ascendente arrefléxica y relata haber tenido diarrea "hace una semana o dos".',
    guideline: 'Neurology / Infectious Diseases consensus on GBS triggers.',
    whyWrong: { 1: 'Causa meningitis aguda / listeriosis en embarazadas.', 2: 'Causa Síndrome Hemolítico Urémico (al igual que EHEC), pero menos GBS.', 3: 'Se asocia a megacolon tóxico y colitis pseudomembranosa.' },
    pillar: 'Common Cases'
  },
  {
    id: 'dag-022',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: 'En un paciente en la unidad de cuidados intensivos para nutrición enteral crónica, ¿cuál es el factor desencadenante más frecuente de diarrea "aguda" adquirida en el hospital, descartando infección?',
    options: ['Diarrea osmótica por formulación enteral hiperosmolar y/o intolerancia a los carbohidratos sumada al uso de antibióticos empíricos alterando la flora', 'Intoxicación aguda por vitamina A en la dieta', 'Exceso de amilasa intravenosa o falla pancreática de novo', 'Isquemia mesentérica transitoria'],
    correctIndex: 0,
    explanation: 'El tubo digestivo de un paciente en UCI a menudo tiene pérdida funcional, atrofiando el ribete en cepillo y bajando la lactasa/sacarasa, haciéndolos intolerantes a cargas hiperosmolares repentinas.',
    fisiopato: 'Además, los excipientes líquidos de las medicaciones (ej. sorbitol en jarabes administrados por SNG) actúan como catárticos.',
    clinicalPearl: 'Antes de diagnosticar C. diff, verifique siempre la cantidad de sorbitol en las medicinas líquidas orales que recibe el paciente.',
    guideline: 'ASPEN/ESPEN Guidelines on Enteral Nutrition.',
    whyWrong: { 1: 'Toxicidad rara en aguda.', 2: 'Mecanismo inventado.', 3: 'Diagnóstico severo mucho menos frecuente que la alteración osmótica pura.' },
    pillar: 'Board Prep'
  },
  {
    id: 'dag-023',
    topic: 'diarrea_aguda',
    difficulty: 'Subspecialist',
    text: '¿Cual de las siguientes terapias suplementarias ha demostrado en metaanálisis acortar levemente la duración de la diarrea aguda infecciosa pediátrica, y está incluida en las recomendaciones de la OMS?',
    options: ['Suplementación con Zinc', 'Vitamina C a altas dosis', 'Loperamida profiláctica', 'Vitamina D'],
    correctIndex: 0,
    explanation: 'El zinc acorta la duración del episodio y reduce el volumen de deposiciones en niños en áreas endémicas.',
    fisiopato: 'El zinc promueve la regeneración del epitelio intestinal dañado y aumenta las enzimas del ribete en cepillo.',
    clinicalPearl: 'Se da por 10 a 14 días incluso después de que cese la diarrea para restaurar las reservas corporales.',
    guideline: 'WHO Guidelines for the clinical management of childhood diarrhoea.',
    whyWrong: { 1: 'No tiene evidencia fuerte.', 2: 'La Loperamida está estrictamente contraindicada en diarrea aguda en la infancia (riesgo de megacolon, íleo o toxicidad de SNC).', 3: 'No acorta la diarrea aguda (aunque es importante en inmunidad general a largo plazo).' },
    pillar: 'Must-Know'
  },
  {
    id: 'dag-024',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: 'El examen directo "Leucocitos Fecales" fue tradicionalmente utilizado para diferenciar diarreas inflamatorias de las no inflamatorias. ¿Por qué ha sido progresivamente reemplazado en panel clínico avanzado?',
    options: ['Por la Lactoferrina y la Calprotectina fecal debido a su mayor estabilidad y sensibilidad a la neutrofilia intestinal', 'Porque todas las diarreas agudas son de manejo igual', 'Por el coprocultivo que lo desplazó en urgencia', 'Porque el test de Guayaco los reemplazó'],
    correctIndex: 0,
    explanation: 'Los leucocitos en las heces se degradan muy rápido (mala sensibilidad), requiriendo lectura casi inmediata al microscopio.',
    fisiopato: 'La calprotectina y lactoferrina son proteínas estructurales estables de los gránulos de los neutrófilos, lo que permite detección ELISA independiente de células intactas.',
    clinicalPearl: 'Hoy en día, un panel PCR múltiplex gastrointestinal reemplaza frecuentemente el screening de disentería vs acuoso en pacientes hospitalizados.',
    guideline: 'ACG Guidelines: Infectious Diarrhea diagnostics.',
    whyWrong: { 1: 'Terapia difiere para evitar sepsis u SHU.', 2: 'El coprocultivo demora 72 hrs, inútil para screening rápido.', 3: 'El guayaco detecta sangre oculta, no leucocitos (aunque se solapan en la colitis).' },
    pillar: 'Board Prep'
  },
  {
    id: 'dag-025',
    topic: 'diarrea_aguda',
    difficulty: 'Staff',
    text: 'Ante un paciente con diagnóstico reciente de SIDA (con CD4 <50) que cursa con diarrea acuosa profunda e intratable (litros al día), ¿cuál es el diagnóstico oportunista más temido en el intestino delgado?',
    options: ['Infección por Cryptosporidium parvum o Cystoisospora belli', 'Colitis por CMV aislada en yeyuno', 'Histoplasmosis gástrica', 'Infección por P. jirovecii intestinal'],
    correctIndex: 0,
    explanation: 'Los coccidios intestinales como Cryptosporidium causan diarreas severas, crónicas o refractarias parecidas al cólera en pacientes con deterioro inmunológico.',
    fisiopato: 'En pacientes sanos forman cuadros autolimitados de 1-2 semanas, pero sin CD4 no hay aclaración parasitaria del enterocito.',
    clinicalPearl: 'El diagnóstico se hace pidiendo Baciloscopia seriada de heces con Tinción de Ziehl-Neelsen modificada.',
    guideline: 'HIV / Opportunistic Infections guidelines (NIH).',
    whyWrong: { 1: 'CMV ataca primariamente el colon (ulceraciones/sangrado) y excepcionalmente el eśofago, menos típico diarrea acuosa alta primaria.', 2: 'Suele ser diseminada pulmonar primero.', 3: 'Solo afecta tracto respiratorio en VIH.' },
    pillar: 'Mastery'
  },
  {
    id: 'dag-026',
    topic: 'diarrea_aguda',
    difficulty: 'Subspecialist',
    text: 'Paciente sano presenta un cuadro disentérico agudo (sangre, mucosidad, gran pujo y tenesmo). Se detecta Entamoeba histolytica. Si no se trata, ¿cuál es la complicación extraintestinal clásica más frecuente?',
    options: ['Absceso hepático amebiano', 'Meningoencefalitis amebiana primaria', 'Miopatía severa de extremidades inferiores', 'Neumonía eosinofílica'],
    correctIndex: 0,
    explanation: 'Los trofozoítos de E. histolytica invaden la submucosa, ingresan al sistema venoso portal y viajan al hígado.',
    fisiopato: 'Producen proteasas y lisan neutrófilos, licuefaciendo el tejido hepático y creando el clásico absceso que contiene pus color "pasta de anchoas".',
    clinicalPearl: 'El absceso amebiano hepático suele curarse con Metronidazol y RARA VEZ debe puncionarse para drenaje.',
    guideline: 'Infectious Diseases / Tropical Medicine.',
    whyWrong: { 1: 'Causada por Naegleria fowleri, no E. histolytica.', 2: 'Complicación de parasitosis tisulares como Triquinosis, no la ameba.', 3: 'Más común en nematodos como Ascaris (Sd. de Loeffler).' },
    pillar: 'Common Cases'
  },
  {
    id: 'dag-027',
    topic: 'diarrea_aguda',
    difficulty: 'Fellow',
    text: 'Durante la preparación pre-operatoria de un paciente hospitalizado, desarrolla fiebre, dolor cólico y leucocitosis (25.000) seguida por diarrea. La toxina C. difficile es positiva. Un TAC muestra dilatación de colon transverso de 9 cm. Esto indica:',
    options: ['Megacolon Tóxico, y existe riesgo inminente de perforación colónica', 'Un cuadro pre-tóxico esperable, manejable con Loperamida', 'Que debemos iniciar colonoscopia para confirmar el diagnóstico y descomprimir el colon', 'Una variante leve de la C. diff'],
    correctIndex: 0,
    explanation: 'El Megacolon Tóxico es una emergencia quirúrgica. Combinado temporalmente con signos de shock sepsis impone consulta al cirujano (colectomía total o subtotal).',
    fisiopato: 'La inflamación paralisa el músculo liso y adelgaza la pared dilatándola al máximo, con altísimo riesgo de ruptura.',
    clinicalPearl: 'La colectomía nunca debe retrasarse intentando un manejo o descompresión si el paciente presenta inestabilidad progresiva o peritonitis inminente.',
    guideline: 'ASCRS Guidelines for the management of C. difficile infection.',
    whyWrong: { 1: 'La Loperamida puede emporar la parálisis muscular y acelerar la pared e íleo y el tóxico.', 2: 'Una colonoscopia en un megacolon tóxico está CONTRAINDICADA por el enorme riesgo de perforación por insuflación de gas.', 3: 'Es la variante fulminante de C. diff, fatalidad altísima.' },
    pillar: 'Emergency'
  }
];
