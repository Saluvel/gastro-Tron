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
  }
];
