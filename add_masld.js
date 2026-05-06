const fs = require('fs');

const questions = `
  {
    id: 'q-masld-011',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'Un paciente de 52 años, varón, con historia de Diabetes Mellitus de 8 años de evolución, hipertensión y obesidad G1, es derivado a Hepatología por elevación leve crónica de ALT y ecografía con "hígado graso incipiente". El consumo de alcohol es nulo. Para confirmar el diagnóstico de MASLD (Metabolic Dysfunction-Associated Steatotic Liver Disease) y descartar otras entidades subyacentes, ¿cuál de los siguientes criterios define la nueva nomenclatura de MASLD?',
    options: ['Presencia de esteatosis hepática más al menos un criterio metabólico (ej. diabetes, hipertensión o IMC >25)', 'Exclusión obligatoria de cualquier grado de consumo de alcohol simultáneo', 'Biopsia hepática que demuestre balonización e infiltrado lobular macrovesicular', 'Elevación de transaminasas mayor a tres veces su límite superior normal en dos periodos'],
    correctIndex: 0,
    explanation: 'El concepto de MASLD (previamente NAFLD) requiere la evidencia de esteatosis (por imagen o lab) y la presencia de al menos uno de los criterios rectores de disfunción cardiometabólica: Diabetes tipo 2, sobrepeso/obesidad o parámetros de riesgo metabólico alterado o desregularizado.',
    fisiopato: 'Al cambiar de una definición de exclusión (NAFLD) a una definición de inclusión, se reconoce el rol patogénico directo de la inflamación crónica adipocitaria y resistencia a la insulina liderando la peroxidación de los lípidos locales del hepatocito, a diferencia de ser un mero diagnóstico idiopático o de "descarte".',
    clinicalPearl: 'MASLD es un diagnóstico POSITIVO: Esteatosis + 1 criterio cardiometabólico. Ya no se exigen niveles "0" de alcohol para su bautizo primario, introduciendo el concepto metALD (cuando confluyen el consumo significativo de OH y la disfunción metabólica).',
    guideline: 'AASLD/EASL/ALEH 2023 Multisociety consensus nomenclature for steatotic liver disease',
    whyWrong: { 1: 'La nueva nomenclatura reconoce explícitamente a los pacientes "MetALD" si consumen OH semanal superior (140g mujeres/210g hombres) concurrentemente.', 2: 'La biopsia es para MASH. MASLD en su estado base es solo "esteatosis".', 3: 'Para MASLD las transaminasas no influyen; de hecho, puede haber MASLD avanzada con GPT y GOT estrictamente normales en el 40% de cirróticos esteatósicos.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-012',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'En el algoritmo de screening y tamizaje primario no invasivo (NITs) para detectar fibrosis en un centro de atención primaria de un diabético tipo 2 con sospecha de MASLD, ¿cuál es el primer paso diagnóstico preferido y más costo-efectivo avalado por todas las guías recientes para descartar fibrosis avanzada (F3-F4)?',
    options: ['Cálculo basal del índice FIB-4 sérico', 'Solicitud inmediata de Resonancia Magnética (MRE)', 'FibroScan o Elastografía Transitoria Vibratoria Controlada (VCTE)', 'Biopsia Hepática Percutánea Eco-dirigida a CIEGAS'],
    correctIndex: 0,
    explanation: 'El FIB-4 (compuesto por Edad, AST, ALT y Plaquetas) es la herramienta inicial recomendada por su universalidad y valor predictivo negativo extremadamente alto (> 90%) para excluir F3-F4. Permite estratificar al paciente en bajo riesgo o ameritar derivar a evaluación especializada.',
    fisiopato: 'La caída paulatina hepática de la eliminación de transaminasas cambia el radio AST/ALT mientras simultáneamente la hipertensión portal subaguda y disminución de trombopoyetina desgarra las plaquetas. Esto hace de las calculadoras bioquímicas tempranas el algoritmo primario frente a colágeno.',
    clinicalPearl: 'Regla del FIB-4: < 1.3 (< 2.0 si el paciente tiene > 65 años) significa "Bajo Riesgo". Alta al paciente cardiólogo. Si es > 2.67 indica alto riesgo, ameritando VCTE y biopsia urgente. Indeterminado se deriva a elastografía/MRE.',
    guideline: 'AASLD Practice Guidelines: Clinical Assessment and Management of MASLD 2023',
    whyWrong: { 1: 'MRE es el gold standard de las imágenes pero es sumamente costoso e incosteable/tardío como tamizaje primario universal MUNDIAL.', 2: 'VCTE / FibroScan es para el paso DOS, tras un FIB-4 intermedio o alto.', 3: 'Biopsia es el juez final, no el tamizaje poblacional de 30% del planeta.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-masld-013',
    topic: 'masld',
    difficulty: 'Staff',
    text: 'Una paciente femenina de 49 años acude por diagnóstico confirmado por FibroScan de MASH (Esteatohepatitis) no cirrótica, y fibrosis en estadío F2. Su HbA1c está en 8.2% a pesar del tratamiento con metformina. Refiere desear algún medicamento que ataque el problema metabólico mientras beneficia directamente sus scores de resolución de esteatohepatitis histológica. ¿Qué medicamento agonista antidiabético inyectable goza de mayor respaldo y aprobación en el espectro del MASLD?',
    options: ['Semaglutida (Agonista GLP-1)', 'Liraglutida (Agonista GLP-1)', 'Inhibidores DPP-4 (Sitagliptina)', 'Sulfonilureas (Glibenclamida IV)'],
    correctIndex: 0,
    explanation: 'La Semaglutida, un potente RA-GLP1 inyectable semanal u oral, ha demostrado en ensayos clínicos de fase 2/3 altas tasas de resolución de la esteatohepatitis sin empeoramiento de la fibrosis (~59% en MASH contra 17% placebo).',
    fisiopato: 'Los análogos GLP-1 disminuyen el peso corporal en un 10-15%, activando la beta-oxidación de ácidos grasos viscerales, y bloqueando la lipogénesis hepática de novo inducida periféricamente. La enorme reducción del flujo extrahepático calórico desinflama al hígado directamente.',
    clinicalPearl: 'Opciones de combate MASH clásico: En pacientes diabéticos las Pioglitazonas o Semaglutidas son Reyes; si no hay diabetes la Vitamina E a 800 UI o Semaglutidas siguen reinando con el beneficio extra potente cardiovascular masivo en cardiopatas.',
    guideline: 'AASLD Guidance for Therapy in MASLD and MASH',
    whyWrong: { 1: 'Liraglutida requiere uso diario y pierde ampliamente con Semaglutida y Tirzepatida en los MASH endpoints y peso final.', 2: 'Inhibidores DPP-4 son débiles de perfil hepático en evidencia MASH.', 3: 'Las sulfonilureas causan GANANCIA pélvica de peso y agotan el páncreas sin desinflamar el hígado.' },
    pillar: 'Must-Know'
  },
  {
    id: 'q-masld-014',
    topic: 'masld',
    difficulty: 'Fellow',
    text: '¿Cuál es la causa de mortalidad número uno para la inmensa mayoría de los pacientes diagnosticados tempranamente con MASLD / Esteatosis Hepática subaguda a través de los años (sin llegar al estadio terminal de cirrosis descompensada)?',
    options: ['Enfermedad Cardiovascular Isquémica', 'Carcinoma Hepatocelular Temprano o Sorpresivo', 'Fallo Renal Crónico en diálisis', 'Hemorragia Variceal Masiva'],
    correctIndex: 0,
    explanation: 'La Causa número 1 de muerte en pacientes con NAFLD/MASLD es la patología cardiovascular (Infarto al miocardio o ACV), y no específicamente desastres de falla de la célula hepática subyacente o cáncer.',
    fisiopato: 'La inflamación sistémica vascular que desencadena MASLD exacerba el perfil aterogénico severo (placas coronarias, LDL oxidado, hipertensión), haciendo que estos pacientes mueran precozmente de ateroesclerosis trombótica en 15-20 años antes de que el hígado desarrolle una necrosis completa letal pura.',
    clinicalPearl: 'Tratar un MASLD es tratar un corazón enfermo. Si tu paciente tiene MASLD, derivar o prescribir estatinas si aplica, no hay miedo y las estatinas ESTÁN validadas y son seguras en pacientes con MASLD hepático.',
    guideline: 'American Heart Association (AHA) and AASLD Scientific Statement: NAFLD/MASLD 2022',
    whyWrong: { 1: 'El HCC puede ocurrir pero con menor tasa poblacional que un infarto aterogénico puro mortal.', 2: 'Fallo renal ocurre pero la causa lider macro vascular mata antes.', 3: 'Hemorragia por várices es típicamente un evento post-cirrótico hepatorrenal puro a diferencia de este caso particular general.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-masld-015',
    topic: 'masld',
    difficulty: 'Staff',
    text: 'Paciente varón de 48 años diagnosticado con MASH (Metabolic Dysfunction-Associated Steatohepatitis) y fibrosis avanzada en grado F2-F3 por elastografía MRE. En marzo del reciente año, un fármaco agonista del receptor ß de hormona tiroidea, específico al receptor hepático THRA (THR-beta) logró la aprobación de la FDA para ser el primer fármaco en el mundo indicado estructuralmente para el tratamiento directo formal de MASH F2-F3 no cirrótico en adultos. ¿Cuál es este agente revolucionario?',
    options: ['Resmetirom', 'Obeticholic Acid (OCA)', 'Lanifibranor (Pan-PPAR)', 'Aspirina oral dosis baja de mantención'],
    correctIndex: 0,
    explanation: 'El Resmetirom es el primer medicamento autorizado específicamente por la FDA estadounidense (Marzo 2024) para usarse a largo plazo junto a dieta y ejercicio formal para pacientes adultos que sufren MASLD/MASH puro con grado de fibrosis intermedio a grave (F2 o F3).',
    fisiopato: 'Resmetirom es un agonista selectivo oral que imita exclusivamente los efectos benéficos del receptor de hormona tiroidea beta (THR-β) hallado vitalmente en el hígado adulto de mamíferos. Incrementando en forma exponencial la beta-oxidación de las grasas locales del hígado sin causar taquicardia cardíaca asociada a (THR-alfa).',
    clinicalPearl: 'RESMETIROM es el primer y en la actualidad "único" fármaco primario Aprobado FDA por y para MASH intermedio F2/F3, un hito esperado tras 25 años de fallas en fases III moleculares.',
    guideline: 'FDA Approval Press Release for Rezdiffra (Resmetirom) March 2024 & AASLD Guidance Updates',
    whyWrong: { 1: 'El ácido obeticólico (OCA) reducía la fibrosis, pero fue RECHAZADO por la FDA por efectos secundarios (prurito intenso crónico intratable y alteraciones peligrosas de HDL/LDL subagudo).', 2: 'Lanifibranor sigue en FASE clínica 3 final.', 3: 'La aspirina es buena opción subyacente profiláctica de cáncer pero "no" revierte la necrosis o fibrosis del MASH como tratamiento central sistémico F2/F3 aprobado.' },
    pillar: 'Must-Know'
  },
  {
    id: 'q-masld-016',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'Señale cuál es la afirmación clínica correcta y más importante respecto al riesgo de generar un Cáncer (Carcinoma Hepatocelular, CHC) en el espectro del MASLD (Hígado graso metabólico):',
    options: ['Aproximadamente un 20 a 30% de los Carcinomas Hepatocelulares por MASLD ocurren en pacientes SIN requerir una cirrosis hepática previa documentada.', 'El tamizaje o cribado ecosonográfico para HCC debe realizarse en TODO paciente MASLD diagnosticado, sin importar si su fibrosis es F1, F2 o F4.', 'Los genotipos puros TM6SF1 son un factor absolutamente protector frente al posible CHC.', 'El MASLD requiere OBLIGATORIAMENTE un nódulo displásico de hiperregeneración cirrótica previa al desarrollo de CHC.'],
    correctIndex: 0,
    explanation: 'Es una característica sombría y particular del MASLD el poseer el riesgo e informar consistentemente el desarrollo de tejido de Carcinoma Hepatocelular puro (CHC) SIN el prerrequisito clásico de un ambiente puramente fibrótico F4 o el endurecimiento franco propio de la cirrosis subaguda, a diferencia casi completa de VHC.',
    fisiopato: 'La lipotoxicidad persistente genera un estado de estrés oxidativo y DNA-daño mitótico crónico profundo en los lóbulos en combinación al efecto de la hiperresistencia de insulina proliferando las señales oncogénicas del sistema IGF-1.',
    clinicalPearl: 'Alarma de Consulta: En MASLD MASH el CHC "Se salta el paso cirrótico" F4 en un 20%-30% de las muertes oncológicas reportadas; pero debido a la gran masa poblacional, todavía el Tamizaje universal ECOGRAFÍCO sólo se reserva legal y pragmáticamente para pacientes con cirrosis comprobada o F3 severamente en declive F4.',
    guideline: 'AASLD guidelines on Hepatocellular Carcinoma (HCC).',
    whyWrong: { 1: 'El tamizaje no puede hacerse universalmente a causa de la prevalencia masiva en F1/F2 (30% humanidad mundial de ultrasonidos costaría trillones de dinero); solo screening CHC guiado en etapas F3 muy tardías/ F4 de MASH comprobado o alta sospecha clínica.', 2: 'Las variantes de riesgo MASLD son PNP y TMG6 que EMPEORAN genéticamente la enfermedad (variante PNP I148M).', 3: 'Falso, no necesitan nódulos focales previos, saltando a cáncer masivo directamente lobular de esteatosis local.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-017',
    topic: 'masld',
    difficulty: 'Board',
    text: 'Varón de 40 años diagnosticado con MASH e hiperinsulinemia severa en las caderas y abdomen. Se le recomendó "vitamina E" de farmacia debido a que los inhibidores agonistas GLP1 le causaron náuseas intratables y carece de hiperglucemia diabética. Respecto a la Vitamina E indicada a dosis de 800 IU/día en el gran ensayo PIVENS para revertir la histología del MASH sin cirrosis ni diabetes. ¿Cuál es el riesgo a largo plazo fuertemente asociado (y debatido interhospitalariamente) por el uso a altas dosis en poblaciones añosas de este tratamiento suplementario antioxidante?',
    options: ['Aumento leve estadístico en el riesgo de cáncer de Próstata severo y Accidente Cerebrovascular Hemorrágico masivo.', 'Hepatotoxicidad farmacológica y falla hepática fulminante por necrosis tubular.', 'Cataratas bilaterales cortisonales', 'Atrofia severa del epitelio esofágico y cáncer oral a repetición.'],
    correctIndex: 0,
    explanation: 'La Vitamina E ha sido reportada con ligeros pero estadísticamente presentes riesgos incrementados para el cáncer de próstata en hombres con largas dosis suplementarias fuertes, así como un incremento debatido de sangrados hemorrágicos cerebrales subagudos al interferir secundariamente en agregación plaquetaria general.',
    fisiopato: 'Vitamina E a dosis grandes rompe la barrera biológica como anticoagulante natural bloqueando la absorción de la Filoquinona de la Vitamina K para la producción coagulante de factores subagudos. Por lo que requiere una charla formal pre-indicación clínica en hombres grandes de edad con antecedentes genéticos isquémicos prostáticos.',
    clinicalPearl: 'Ensayo PIVENS (N Engl J Med 2010; 362:1675-1685): Vit E resolvió MASH mejor que placebo. Se usa SI y SÓLO SI no hay DM tipo 2, no es cirrótico y excluyendo de su indicación a los varones geriátricos grandes portadores de riesgos u oncológicos prostáticos y ACVs previos.',
    guideline: 'PIVENS Trial analysis & AASLD Guidance updates on MASH supplementation 2023',
    whyWrong: { 1: 'No daña el hígado la Vitamina E (es más bien un antioxidante masivo general).', 2: 'No influye a cataratas cortisonales.', 3: 'No daña el esófago subagudamente u a repetición franca.' },
    pillar: 'Must-Know'
  },
  {
    id: 'q-masld-018',
    topic: 'masld',
    difficulty: 'Staff',
    text: '¿A qué pacientes portadores del diagnóstico MASLD con Obesidad extrema y fallas farmacológicas repetidas de un programa general dietético debe recomendarse de forma agresiva o sugerirse con fervor referirlos a una Cirugía Bariátrica o Metabólica pura para tratar el fallo hepático silencioso histológico o la esteatonecrosis subaguda?',
    options: ['A los pacientes Obesos con un IMC > 35 kg/m2 o un IMC > 30 kg/m2 con morbilidades y grado comprobado de MASLD que busquen la mayor tasa conocida de resolución curativa para el MASLD en la actualidad.', 'Solamente aquellos pacientes MASH que hayan llegado a una etapa severa del colapso cirrótico o F4 variceal descompensado sangrante en puerta de urgencia clínica.', 'Únicamente a los pre-obesos que requieran una reducción dietética masiva cosmética menor al rango del GLP1 semanal puro.', 'La Cirugía bariátrica está contraindicada e inválida globalmente en todo proceso documentado científicamente de falla hepática MASLD subyacente.'],
    correctIndex: 0,
    explanation: 'La cirugía bariátrica sigue siendo, para muchos expertos, la intervención "curativa natural mecánica" más dramática y real respecto a eficacia y sostenibilidad estadística si la indicación encaja (IMC > 35 kg/m2 o >30 con comorbilidades como diabetes). Resolve el MASH en ~80% y reduce fibrosis progresiva en >60%.',
    fisiopato: 'Al desestructurar el bypass alimenticio, el vaciado en el intestino bajo o la restricción gástrica gatillan un reinicio total brutal crónico y sostenido en el sistema incretínico central (GLP-1 natural) eliminando la fábrica visceral o depósitos metabólicos sistémicos en un par de meses naturales sin medicación constante química.',
    clinicalPearl: 'En MASH obesos GII/GIII que no mejoran ni un milímetro, referirlos a Cirugía. Pero PRECAUCION ABSOLUTA: Si el paciente ya formó CIRROSIS puramente descompensada clínica (várices y ascitis), la cirugía bariátrica puede provocarles muerte hepática abrupta operatoria por hipercatabolismo colapsante terminal!',
    guideline: 'AGA/AASLD/EASL updates on Bariatric Surgery usage in MASH 2022',
    whyWrong: { 1: 'No en cirrosis DESCOMPENSADA letal variceal aguda; altísima mortalidad operatoria. MASH requiere evaluación temprana, NO en etapa terminal donde solo aplica trasplante quirúrgico puro.', 2: 'Los inyectables pierden su efecto y sus costos tras abandonarlos bruscamente, a diferencia de la cirugía.', 3: 'Sísmicamente falso.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-masld-019',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'Si le realizamos una biopsia hepática a un familiar asiática con peso magro impecable de IMC de 23, glucosa subyacente de 103, transaminasas repetidamente levemente en el borde y encontramos que de una u otra manera padece MASLD en su estadio precoz puro (El fenotipo "Lean MASLD"). ¿Qué variable de impacto fisiopatólogica molecular juega un mayor estragos causales oculto profundo frente a la enfermedad no clásica?',
    options: ['Una predisposición génica de Variantes Genéticas letales o polimorfismos como TM6SF2 o el PNPLA3 patogénicos locales en sus lobulaciones.', 'Es secundario a su dieta vegetariana rica en fructooligosacáridos o exceso de proteínas crónicas.', 'No se trata de MASLD, debe ser a la de a fuerza otra hepatitis crónica de depósito como el cobre subagudo en sus ganglios.', 'El alcohol pasivo por aire crónico produce un falso "lean MASLD" genético.'],
    correctIndex: 0,
    explanation: 'El MASLD Magro o "Lean MASLD" afecta al 10-20% de diagnosticados (y altísimo en raza asiático-hindú). Estos fenotipos carecen del tejido sub cutáneo inflado tradicional, pero su genotipo profundo mutado patogénico (p.e. polimorfismo PNPLA3 rs738409 o I148M) es altamente causante de trabar los lípidos hepáticos internamente genéticos.',
    fisiopato: 'En PNPLA3 el hígado es incapaz de movilizar los triglicéridos lipídicos hacia las VLDL de transporte, por lo cual todas los acopios lipídicos crónicos se oxidan intracelularmente independientemente del peso total corporal general obeso global; creando una grasa visceral magra.',
    clinicalPearl: '"Lean MASLD" (MASLD de paciente magro): El fenotipo asiático (o genes mediterráneos latinos originarios mutados PNPLA3) de riesgo genotípico que poseen la misma mortalidad cardiaca sistémica y complicaciones hepáticas descompensantes tempranas que el estadio macro-obesidad general estadounidense.',
    guideline: 'AASLD Lean NAFLD Clinical guidelines statement.',
    whyWrong: { 1: 'La dieta contribuye pero es la mutación génica lo diferencial para la "rareza fenotípica magra" en sí que los marca diferencial.', 2: 'Existe la forma patológica de MASLD en el IMC de 21 comprobado históricamente genotípicamente y de depósito primariamente.', 3: 'Sin sustento científico del aire crónico global y hepático causal.' },
    pillar: 'Must-Know'
  },
  {
    id: 'q-masld-020',
    topic: 'masld',
    difficulty: 'Board',
    text: 'Identifique cuál de estas alteraciones metabólicas y hallazgos bioquímicos paraclínicos forma Criterio Cardinal para etiquetar la categoría MASLD según la nueva nomenclatura multiseccional Consenso del 2023 si un paciente presenta confirmada la presencia de Esteatosis Hepática subaguda mediante imágenes ecográficas crónicas:',
    options: ['Glucosa Plasmática en Ayunas mayor o igual a 100 mg/dL ó HbA1c mayor o igual a 5.7 o bajo tratamiento hiperglucémico crónico general.', 'Disminución abrupta y prolongada marcada de los niveles de Ferritina plasmática menores a 10 ugL u otro estado carencial anémico celular.', 'Proteína C reactiva ultrasensible negativa crónicamente plana de respuesta en meses agudos.', 'Aumento o Presencia Crónica diagnosticada del Ácido Úrico por arriba de 25 mg/dL intermensual agudos.'],
    correctIndex: 0,
    explanation: 'El panel de diagnóstico Criterios de Disfunción Cardiometabólica de MASLD incluye: Glucosa basal ≥100 mg/dL, o HbA1c ≥ 5.7%, o Diabetes 2; IMC ≥25 (en asiáticos ≥23) o circunferencia de cintura aumentada; Presión Arterial ≥ 130/85; Triglicéridos ≥ 150 mg/dL; o HDL bajo ( <40 en hombres, <50 en mujeres). Con la presencia de cualquiera 1 de estos en paciente esteatósico, el diagnóstico MASLD queda oficialmente comprobado clínicamente.',
    fisiopato: 'La tríada clásica del síndrome metabólico endotelial (Resistencia insulina, inflamación vascular endotelial, obesidad del mesenterio abdominal). La ferritina usualmente SUBO no baja por ser un reactante fase aguda que el hígado intoxicado escupe en NAFLD masivo secundario.',
    clinicalPearl: 'Nuevos Criterios MASLD: Esteatosis Hepática ecográfica + [IMC elevado O Hemoglobina glicosilada limite 5.7 O Presión Arterial 130/85 O Dislipidemia de Trigliceridos]. Es oficial, conciso y definitivo de nombramiento subyacente.',
    guideline: 'AASLD, EASL, ALEH nomenclature consensus for MASLD criteria 2023',
    whyWrong: { 1: 'MASLD Típicamente "aumenta" o eleva radical e inflamatoriamente los marcadores de Ferritina (causando a veces engañoso diagnóstico de pseudocromatosis o pseudohierro sistémico alto).', 2: 'A nivel del ácido úrico no pertenece a la clasificación madre de 5 criterios de oro del consenso si bien daña internamente subagudo endotelios renales crónicos.', 3: 'El CRP está clásicamente en el percentil superior constante activo por la gran tormenta sistémica de adipocinas y esteatoquinas.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-021',
    topic: 'masld',
    difficulty: 'Fellow',
    text: '¿Cuál es el valor umbral de "rigidez hepática" (Live Stiffness Measurement - LSM) típicamente reportado por VCTE (Fibroscan o Elastografía Transitoria Vibracional térmica y aguda) que marca un ALTO RIESGO de Fibrosis Avanzada o Cirrosis establecida (estadio F3 o F4 puros) y justifica el tamizaje endoscópico rutinario si las plaquetas apoyaran hipertensión del bazo?',
    options: ['Un umbral consistentemente mayor a 12.0 - 15.0 kPa.', 'Un umbral puramente en 1.5 a 4.0 kPa constantes y crónicos.', 'Fijamente en 2.0 y 5.5 kPa repetitivos diarios mecánicos crónicos.', 'Generalmente al chocar un muro acústico inferior de 1.0 kPa sostenidos blandos y ecográficos de seguimiento crónico.'],
    correctIndex: 0,
    explanation: 'Un nivel de kVp o kPa superior a los 12 - 15 kilopascales (kPa) de forma consistente es altamente sugestivo y confirmatorio en poblaciones generalizadas de Fibrosis Avanzada y de un hígado transformado cirrótico, donde ameritará rastreo o screening endoscópico inicial gástrico.',
    fisiopato: 'La onda de cizalladura o shear wave que tira el sensor M-probe o XL-probe del aparato rebota exponencialmente mas veloz sobre lechos que han sido sustituidos rígidamente por matrices moleculares abultadas de miofibroblastos y macrófagos formadores de fibrosis reticular crónicos, elevando la medida de los decibeles de impacto a más de doce kPa.',
    clinicalPearl: 'Regla del Elastógrafo VCTE: Hígados sanos son como esponjas dóciles (~4-5 kPa).  Hígado inflamado F2 (~8 kPa). Y un Hígado cirrótico MASH es una roca pétrea dura (>> 12 - 15 kPa constantes verdaderos). Y regla baveno VII, si las plaquetas varían >150,000 en 15 kPa es bajo riesgo variceal, pero superior de 20 Kpa todo se desmorona y amerita ver el fondo gástrico en la OES endoscópica obligatoriamente agudo.',
    guideline: 'Baveno VII guidelines. Elastography cutoff criteria from AASLD.',
    whyWrong: { 1: 'Valores abajo de 6 kPa son sanos absolutos.', 2: 'Los umbrales en 2 o 4 o 5.5 son población normal basal ideal y blanda no f3 puros.', 3: 'De ninguna manera baja 1 kpc, no es físicamente representativo tisularmente orgánico en una onda en seres biológicos puros.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-022',
    topic: 'masld',
    difficulty: 'Staff',
    text: 'Durante la realización del manejo de la reducción ponderal general guiada. ¿Qué porcentaje aproximado de PÉRDIDA de Peso Corporal global del paciente necesita o recomienda formalmente las guías recientes para lograr en él una RESOLUCIÓN estadísticamente probada y profunda de la Fibrosis Hepática o MESH avanzado inflamatorio?',
    options: ['Requiere lograr por lo menos y sostenidamente de 7% al 10% puro de la pérdida lograda del peso metabólica basal.', 'Requiere bajar solo de plano el equivalente masivo al 1% al 3% cosmético agudo.', 'Una sola gran purificación en un fin de semana termostático en la dieta de verano para perder fluidos sistémicos rápidos aguda reticular de 4%.', 'Necesita erradicar más del astronómico puro del 40% a 50% de la grasa celular local intermedio para notarlo hepatológicamente subaguda de peso.'],
    correctIndex: 0,
    explanation: 'El MASH hepático exhibe una respuesta Dosis-Dependiente a favor de la quema masiva de energía en base a la balanza del descenso calórico: \n 3 a 5% de peso alivia Esteatosis pura. \n 7 a 10%  resuelve la Inflamación Lobular y la Balonización en el microscopio. \n Y SÓLO si la pérdida o superávit es >10% entonces se reduce contundentemente la FIBROSIS MASH subyacente.',
    fisiopato: 'Todo depósito celular subagudo inflamatorio tiene una memoria física biológica; deprimir la balanza del peso obliga a los hepatocitos depletados a autocanibalizar la grasa y frenar las quimioquinas del miofibroblasto hepático fibromodulador con al menos un 10 porciento purísimo crónico estructural intermensual.',
    clinicalPearl: 'Escalón de Peso: Pérdida >5%: Disminuye grasa esteatótica hepática general eco-trombótica. Pérdida >7-10%: Resolvemos MASH (inflamación histológica basal). Pérdida Sostenida >10%: REVERTIMOS la odiosa Fibrosis perisinusoidal. Objetivo de clínica de hígado mundial puro de MASH: Logre bajar un décimo 1/10 de usted.',
    guideline: 'AASLD MASLD Guideline statement on Diet and Exercise Management.',
    whyWrong: { 1: 'Pérdidas del 1 al 3 puras e instantáneas son de aguas subagudas reticulares y glucógeno temporal natural que rebotará en un par de días agudos, o semanas de fallo compensado y cosmético; no resuelve la cascada macro-inmunológica profunda ni las colágenas.', 2: '40% al 50% es utópico y es solo para super obesidad clase 4 bariátrica que ya caen en fallas proteicas peligrosas si es global o extremo en personas 120 kg sanas intermedio crónico.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-023',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'De las distintas variedades o vertientes subyacentes clínicas en MASLD/MASH puro diagnosticado histológicamente a base crónica microscópico histológico (Enfermedad Esteatósica Metabólica general lobular pura subaguda). Cuál de los presentes síndromes sistémicos patológicos ES una complicación y hallazgo común extrahepático en el adulto mayor asociándose paralelamente al curso del avance fibrogénico MASLD general clínico?',
    options: ['Síndrome de Apnea Obstructiva del Sueño (SAOS) y Poliquistosis Ovárica (SOP) puros clínicos crónicos hiperinsulinémicos.', 'Enfermedad Inflamatoria Intestinal (EII) crónica autoinmune global granulomatosa de afectación perianal puro terminal intermensuales.', 'Atrofia cerebelosa letal idiopática y el envenenamiento autólogo plúmbico agudo intercelular neurológico crónico.', 'Lupus discoide aislado y penfigo severo profundo autoinmunes dermatológicos de descamación puros y exclusivos del estado hepático MASLD.'],
    correctIndex: 0,
    explanation: 'El MASLD es la cara hepática subaguda general metabólica general de un desastre multiorgánico inflamatorio agudo del "Síndrome Metabólico" general. Comorbilidades asociadas extrahepáticas intrincadamente conectadas y prevalentes incluyen: SAHOS (50-80%), Síndrome Ovario Poliquístico, Hipotiroidismo clínico clásico crónico intermensual, Osteoporosis y disfunción renal purísima sistémica.',
    fisiopato: 'La hipoxia intermitente letal nocturna global en el SAOS dispara picos masivos catecolaminérgicos que profundizan la Resistencia Insulínica inflamatoria e hígado de shock isquémico hepático lobular agudo acelerando la balonización y la cascada necroinflamatoria lipotóxica MASH del individuo desvelado somnoliento crónico extremo.',
    clinicalPearl: 'El Paciente MASH obeso G2 que cuenta que "Ronca horrible en general crónicamente", debe y amerita de obligatoriedad un estudio de sueño o Poli-somnografía referenciada rápida aguda intermensual: Tratarle el SAOS respiratorio crónico de noche reduce de contundente el MASH de su transaminasa basal por cese temporal agudo endotelial inflamatorio de oxígeno basal de presión celular del tejido celular hepático perisinusoidal agudo general puro!',
    guideline: 'AASLD guidelines MASLD Multisystem manifestations section',
    whyWrong: { 1: 'EII no es derivado o generado agudamente intermensual del daño esteatogénico sino por otro lado autoinmune puros terminal gástricos micro inflados crónicos puramente distintos genos. O mutaciones del NOD2 clásicos o mímicos infecciosos sistémicos intestinales del tracto digestivo.', 2: 'Atrofia cerebelosa es genética degeneración subaguda paraneoplásica y no inter-relacionada primariamente.', 3: 'Penfigo vulgaris puramente es autoinmune acantolítico primario puro clínico independiente.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-masld-024',
    topic: 'masld',
    difficulty: 'Staff',
    text: 'A partir de qué grado de score de Fibrosis o escala F clásica en MASH comprobado se considera en el paciente varón el inicio o "punto de ramaje de alarma clínica oncológica y varicosa de hipertensión crónica" para activar los seguimientos semestrales rigurosos de ecosonografía hepatocelular de Hepatocarcinoma y cribado varicoso en seguimiento de urgencia clínica endoscópico general (AASLD)?',
    options: ['Estadio de Fibrosis Avanzada estadío F3 a F4 (Cirrosis pre o incipiente).', 'Recomendando de manera absoluta el rastreo endoscópico desde Fase 1 o estadio F1 puro masivo en biopsias general de tamizaje primario F1 F2 leve.', 'Cuando la Elastografía hepática pasa el punto inofensivo puramente fibrocelular basal hepático de 5 KPA a las 2 semanas subagudo eco-doppler en vena portas puras sin transicional subagudo al 6 constante normal.', 'La vigilancia HCC o el cribado en MASLD requiere ser descontinuado global subagudo temporal a penas mejoren sus niveles GPT o GOT de laboratorio.'],
    correctIndex: 0,
    explanation: 'Un F4 o Cirrosis comprobada SIEMPRE es mandatorio y riguroso. Un estadio avanzado puros subagudo estadio crónico F3 comprobado también ES indicado actualmente u opcional priorizado como grupo diana de rastreo oncológico onco-celular ecográfico en MASLD general de la EASL o AASLD global aguda por un alto índice de degradación tumoral temprana a un 25% de muertes puros. El monitoreo variceal VCTE superior de cribado es desde la franja 15 KPA baveno.',
    fisiopato: 'El riesgo de los picos inflamatorios mitóticos crónicos profundos del F3 ya se han autoalimentado en nódulos o lobulillas del estroma sin vascular vascularización porta completa. Las presiones de escape capilares disparan factores VGEF subyacentes angiogénicos. Cuando las redes sinusoidales se rompen, los escapes vasculares originan adenomas malignos o várices mortales silenciosas sin fallas GPT enzimáticas previas.',
    clinicalPearl: 'Todo MASLD que posea FIB-4 crónicamente mayor de los marcadores letales de >2.67 y resulte F3 avanzado o F4 en un Fibroscan puro y letal: Debe comenzar inyectar rutinas de eco doppler 6 meses y screening variceal puro y formal del especialista hepatólogo o endoscopista intervencionista clínico varicoso a priori inter-mensual global en agendas y planes formales crónicos puramente.',
    guideline: 'AASLD guidelines MASLD Management screening recommendations F3-F4',
    whyWrong: { 1: 'Un F1 es una simple etapa subaguda normal hepatoestelar silenciosa pasiva y no da tumor maligno puros intermensuales que meriten rastrear a toda la población 30 millones de habitantes general global puramente masivo con costo incalculable de la medicina preventiva aguda. No amerita seguimiento variceal.', 2: 'Mejoría de GPT o de las GOT NO DESCARTA cáncer o hipertensión subyacente porque el tejido viejo de cicatrices sigue allí. NO se detiene la evaluación.', 3: 'El salto de pKa 5 a 6 es normal no fibrotico letal.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-025',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'Identifique el factor de predicción paraclínico bioquímico puro y fundamental extra hepático que determina el impacto de mortalidad aguda e intermensual letal más gigantesco estadísticamente general masivo probado o peor morbilidad crónico en varones y damas en el curso de una enfermedad global de Esteatohepatitis Sistémica Metabólico asociada al MASH intermensual documentado con complicaciones intermensuales puramente clínicas:',
    options: ['La asociación formal y concomitante activa pura aguda subaguda basal del paciente con patología tipo Diabetes Mellitus confirmada crónicamente en el eje endocrino e hipoglucemiante o estado diabético insulinorresistente absoluto descontrolado comprobado intermensual basal clínico profundo pre test intra lobular.', 'Su predisposición hereditaria letánica de color esmeralda intra hepático en la familia y patología pura letal de mutación genética a lo largo de décadas por la falla genómica general aguda.', 'La predisposición puramente basal crónica de fallas pulmonares con insuficiencias subyacentes restrictivas asmáticas en infancia crónica intermensuales agudas repetitivos infantiles subagudos con fibrosis microbronquiales puros.', 'Su sexo cronológico natal asignado al momento agudo natal en la infancia o pre edad escolar y genética pura basal generalizado basal crónico puro de sexo de pre escolar crónicos.'],
    correctIndex: 0,
    explanation: 'La Diabetes Mellitus 2 o la presencia de la patología metabólica de resistencia insulínica crónica descontrolada pura subyacente forma clínica aguda e intermensual y la falla del eje hiper-glicémico hepático basal es el AMPLIFICADOR DE RIESGO universal que condena la patología global aguda y MASLD, subiendo masivamente 5x a 7x a nivel global la mortalidad varicosa F4 fibrotica HCC infarto sistémico letales cardiometabólicos a nivel mundial de todas guías!',
    fisiopato: 'La exposición de las cadenas e incisuras sistémicas venosas portales a olas y mares subagudos tóxicos constantes de hiperglicemias y falla global de AGEs (Advanced Glycation End-Products) agudiza todas las tormentas celulares necrofiliáticas de miofibroblastos basales que sellan la matriz colagenosa en días. Diabético MASH es una pólvora a incendio basal.',
    clinicalPearl: 'El Paciente diabético basal MASLD MASH puro descontrolado crónicamente ES DE ALTO RIESGO ONCOLOGICO, variceal y cardíaco intermensual a los próximos 10 a 15 años formales puros de su edad; Manda al control diabetólogo puramente y estricto (A1C < 7% basal pura o con GLP1) es MÁS URGENTE O igual a nivel basal intermensual subagudo endoscópico general!',
    guideline: 'AASLD guidelines MASLD Diabetes impact sub-section and cardiovascular end-status risk',
    whyWrong: { 1: 'La familia da marcadores (T6M5 etc) puramente, pero sin el combo letal ambiente o obesidad diabética, las mutaciones se aplacan solas fenotípicamente basales.', 2: 'Asma preescolar subaguda global crónica remota o restrictivas basal crónicas no alteran MASLD agudo general.', 3: 'Sexo preescolar global basal no es un gatillo masivo mortífero superior al de DIABETOLOGÍA ENDOCRINA PÉSIMA crónica.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-026',
    topic: 'masld',
    difficulty: 'Fellow',
    text: '¿Cuál es la diferencia o el límite categórico clínico a clasificar para diferenciar la nomenclatura nueva contemporánea general entre estar calificado en el fenotipo MASLD versus de estar calificado primario basáltico patológico en la nomenclatura metALD recientemente formalizada por sociedades de hematología y hepáticas en todo el globo? ',
    options: ['En metALD se diagnosticó la coexistencia simultánea probada de de un consumo agudo e importante semanal agudo intermensuales de ingesta prolongada de Alcohol en grandes cantidades pero sin pasar al crónico y letal masivo y los Criterios metabólicos cardiologicos de MASLD formales juntos.', 'La metALD solo ocurre al haber sido expuesto crónicamente a las trazas letales masivas formales metílicas del destilado metanol puro industrial general basales venosas intoxicadas no a etanol puro.', 'En la MASLD no importan los litros y galones de licor formales y general puramente hepato-tóxicos consumidos intermensual basales por que son excluidos por definición médica de cirrótico general basal.', 'MetALD es o significa un Hígado subagudo graso puramente general de orígen por consumo desmedida de dietas orgánicas Metálicas en minerales o minería aguda o intermensual agudos laborales hepatológicos.'],
    correctIndex: 0,
    explanation: 'El MASLD describe un hígado puramente ligado a enfermedad metabólica sistémica obesa cardiovascular donde el consumo puramente basal crónico comprobado de bebidas general alcohólicas es "ínfimo a Nulo" (Menos de 20 gr Damas / 30gr varones diurnos diarios puros). El metALD por otra parte es donde se "mezclan o traslapan genotípicamente" ambas causas subagudas sistémicas formales; donde el paciente es metabólico obeso crónico PERO tiene además una ingesta en la anamnesis documentada sustancial masiva intermedia de 140 - 210 gramos u >350 semanales formales de Alcohol etílico agravante subaguda de MASH basal.',
    fisiopato: 'EL daño dual (Two-Hit model extendido letal y sinérgico) interviene de que al etanol o aldehído crónico agudo deshidrogenado bloquea brutal en días el NAD+, paralizando las grasas o beta-oxidaciones; mientras a la vez el hígado MASH obeso general lipa grasas depletadas por hipersinusoidal insulinorresistencia endotelial basal originando la confluencia rápida y dual letal masivo de MASH ALD puramente variceal.',
    clinicalPearl: 'El paciente es metALD = Su patología y fibrosis es PEOR aguda masivamente formales o el MASH y ALD puros general corren paralelos originando desastres. Se tratan con GLP-1 para su azúcar general y terapia Adicional Abstinente general Psicosocial o de alcohólicos y de dietas magras y puramente abstinente!',
    guideline: 'AASLD, EASL, ALEH nomenclature consensus for MASLD criteria 2023 Definition subsets',
    whyWrong: { 1: 'Metil es un ciego letal industrial puro veneno neurológico basales oftalmológico no una categoría de patología de disfunción crónica grasa hepática intermensuales por semanas o meses pre diabéticos. Metanol te deja ciego puramente formal subagudo basal inmediato neurológicamente.', 2: 'El MASLD IMPORTA muchísimo o descarta si el OH es mayúsculo y si sube a masivo se nombra metALD.', 3: 'Sin sustento metálico laboral y de minería global.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-masld-027',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'A un paciente joven diabético asintomático con alteración en ecosonograma de "Hiper-ecogenicidad hígado graso" lo evalúan general crónico y resulta en una Biopsia Hepática, un FibroScan y Exámenes o laboratorios hepatológicos generales y subyacentes en rangos que sugieren fuertemente ESTEATOHEPATITIS metabólica temprana F1-F2 o preclínica F2. Cuál es el pilar de los hallazgos HISTOPATOLOGICOS de células patognomónicas o de tríadas crónicas puras observadas de manera absoluta y mandataria que dictaminó o confirmó el laboratorio histológico puro que la persona ya "cayó" irremediablemente de un MASLD sano al estado MASH (Steatohepatitis crónico inflamada activa puros patológica basal)?',
    options: ['Observó documentada formal la existencia concurrente basal y combinatoria intercelular profunda puramente focal  de Esteatosis macro-vesicular lobulada, la típica  "Balonización" o swelling celular hídrico global generalizada del hepatocito lobular y un claro foco celular o microabscesos de inflamación leucocitaria lobulillar puros.', 'Sólo notó visualmente en todo el porta subyacente la formación masiva extensa formales fibrosis puras intercelulares subagudas letales cicatrices perisinusoidal peri-portales agudos crónicos de macrófagos formales de regeneración celular hepáticas macro lobulada.', 'Determinó a ojo microscópico global macro que no existía colesterol intracelular formales sino un cáncer temprano en los lobulillos y con metástasis focal linfocítica subaguda intermensual oncológica aguda.', 'Evidenció de forma formal o global sólo células páliticas crónicamente con gran cantidad o basales masivas acumulaciones biliares peri portales hepáticas colestásicas con desgarre crónico o agudo y subaguda de linfocitos hepato focales gigantes.'],
    correctIndex: 0,
    explanation: 'Para documentar y bautizar un hallazgo con el término MASH (Esteatohepatitis subyacente metabólica activa) en vez de solo Esteatosis benigna basal, la biopsia debe demostrar forzosamente (Y a escala NAS score >4) la evidencia triada o combinada o coexistente obligatoriamente clínica de Esteatosis (grasa gotitas), INFLAMACION (hacinación leucocitos lobular), Y LO MAS IMPORTANTE: Células hepatocíticas generalizadas en Balonización puras de patología agudos puros o degeneración "hinchada" celular por daño e interrupciones del citoesqueleto citoplasmática de la red de queratina 8-18 (Daño real comprobado letal orgánico activo).',
    fisiopato: 'La "Balonización" subcelular hepática representa una lisis lítica subcélular con citoesqueleto disuelto letal puros de filamentos de anclaje celular cito-corticales y el agrupamiento de los infames y clásicos agregados proteicos "Cuerpos de Mallory-Denk". Son la necrosis o el "llanto moribundo" del hígado que está sucumbiendo en inflamación subagudo crónica intermensuales lipotóxicas puramente lipolítica letal general lobular.',
    clinicalPearl: 'MASH requiere de inflamación y Balonización hística! Sin balonización microscópica y sin dolor del citoesqueleto hepático, usted NO ESTA diagnosticado de MASH o daño celular puro letal hepatoactivo! En esos casos es solamente el inofensivo puramente o el MASLD esteatósico per se basal y puro que es inofensivo y que da 0 cirrosis global aguda si permanece en la grasa pasante pre diabética y estérilmente sin inflamar crónico!',
    guideline: 'AASLD guidelines MASLD Management screening recommendations Pathological triad.',
    whyWrong: { 1: 'La Fibrosis basal masiva formal y diseminada subaguda letal es una CONSECUENCIA posterior de daño de meses y de los estadios colagenosos estrellados crónicos puramente MASH no el inicio diagnosticador MASH. Un paciente PUEDE poseer MASH basal F0 o no fibrosa aguda!', 2: 'El cáncer basal y oncológico FOCAL o temprano ya está saltandose decadas crónicas enteras puramente biológicas del paciente y un daño mutagénico genómicamente basal muy apartado metabólicamente puro agudo!', 3: 'Eso que describes o colecciones puramente patología aguda crónicas basal periportal biliares o intrahepaticas intermensuales es colestásica CBP y colangitis autoinmunes puras biliales y subagudas inflamatorias distintas de MASH metabólica obesa.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-028',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'Si usted trata y sigue un paciente obeso crónico G3 insulinodependiente puro de F4, que ha sido referenciado al trasplante y cirugía hepática por fallo metabólico y una falla o descompensación varicosa de hipertensión extrema letal pura terminal por su MASH de 15 años formales subyacentes que ha finalizado sus lobulaciones de salud basal, luego de su reemplazo hepático y meses del receptor injertado y exitoso. Qué le puede o qué probabilidad se le augura de que retorne u regrese al nuevo hígado sano en los próximos y venideros 4 a 5 años del calendario general hepatológico?',
    options: ['La Esteatosis y MASLD tiene y presenta una alarmante altísima e intensa y abrumadora tasa de volver y recaer en el nuevo hígado o recurrir en el tejido nuevo de trasplante, generalmente afectando a más de un tercio y mas en los 5 años puros de control subyacentes y agudo metabólico si persisten su sobrepeso crónico y el uso o prescripción inmunosupresor formal glucogenado puro diabético.', 'Una tasa letal purificadora crónicamente general masiva aguda pre estadística nula, el hígado ajeno es o posee en absoluto a un 90 por ciento formales de genéticas y puros defensas formales resistentes a la grasa diabética puros del huesped injertado per se o de base metabólico agudos portales.', 'Requerirá de o le desarrollará a un 85% de los 3 meses una necrosis puramente subaguda y de manera fulminante biliar o intermensual puros basal debido aguda isquémica a la incompatibilidad puramente esteatósicos subagudos per se y no formales MASH portales cirugías de rechazos crónicas absolutos genéticos de adiposidad basal pre operatoria masiva.', 'El paciente ya se libró, formó y sanó de por vida y su fenotipo pre diabético general revirtió por default genéticamente puramente basal subyacentes crónico sistémico post quirófano orgánico general MASLD curativo general agudamente basal.'],
    correctIndex: 0,
    explanation: 'La historia o el periplo y su evolución nos ha brindado formal evidencia abismal y globalmente estadística aguda intermensual; que el MASLD o MASH ES la segunda y potencialmente pronto ser el numero uno causal principal de de referidos al T.H en listados Occidentes generales puros agudos de la nación en Estados unidos y latinos puramente,  PERO con su "Re-aparición" o Recurrencia Post-Trasplante de Esteatosis o MASLD generalizada pura, del  30% al 50% de los afectados a los 5 años si  Y SI en la vida global el receptor y el organismo conservan su basal subyacentes crónicos diabéticas hiperinsulinemias puramente u Obesidad metabólica. ¡A ello se suma y desborda crónicamente o suma o agudiza letalmente de base la  dieta pre diabética obesogénica inflamatoria de los Corticosteroides o basales inmunosupresores como Tacrolimus a los islotes puros pancereáticos intermensuales metabólicos que obligan de terapia de prevención puros orgánicos de T.H post operatorios en vida puramente basales general!',
    fisiopato: 'Al conservar su factor subyacente crónico endógeno o el motor subcelular de disfunción letal crónicos de inflamatorios adipocito basal obeso diabético y el efecto iatrogénico formales crónicos diabetógenos puramente del inmunosupresores general (Ciclosporina y de la Rapamicina), el hígado ajeno importado puro o basáltico de repuesto se hunde formales en la misma cascada toxicológica que el viejo o inicial anterior hepatocitos letales puros a años pasados crónicamente orgánicos.',
    clinicalPearl: 'El MASLD / Esteatohepatitis MASH "Vuelve" o regresa letalmente al tejido hepático en años al hígado puramente Nuevo de un post-Trasplante general del afectado basal obeso si no le controlan o tratan desde la cama su Diabetes subyacente o Peso extremo global aguda crónicas intermensuales!',
    guideline: 'AGA/AASLD formal updates on Transplant Recurrence guidelines and MASLD statistics',
    whyWrong: { 1: 'Es falso asertar que sea letánica subaguda puramente nula, pues el MASLD purificadores no sucede, sucede es reingreso y reinfección del MASLD o grasa basales.', 2: 'A necrosis de manera fulminante biliar no ocurre de MASH a los 3 meses, sino un daño perisinusoidal por tiempo agudo y décadas intermensuales del paciente.', 3: 'Extirpar y sacar formales crónicos puramente el órgano no es sacar de plano o erradicar puros basal genéticas el Síndrome diabético de origen extrahepáticos sistémico basal o musculatura crónicas del organismo paciente puramente!' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-masld-029',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'Identifique el nombre que describe el test de laboratorio validado y sanguíneo de marcadores puros crónicos subyacentes indirectos e invasivos, el cual está avalado secundariamente o sugerido por las guías para diagnosticar y descartar fuertísimo o de forma robusta estadística a las fibrosis F3 y F4 puros avanzados hepáticos si el Fibroscan o VCTE de rutina puramente físico no es aplicable (O se invalidó por Obesidad morbida grave general abdominal masiva que bloqueó basales de radiación sónico puramente o no existe la maquina):',
    options: ['The Enhanced Liver Fibrosis panel (ELF - Test Sanguíneo puramente bioquímico de fibrosis hepática y hialuronas puros de colágeno PIIINP).', 'The MELD - NA calculator. The scoring subaguda general metabólica intermensuales letales trasplantes.', 'The H-Pylori aliento urea puramente agudo o basales crónicas inflamatoria peptidal global.', 'El Índice MÁS profundo pre-endoscópico agudos Oakland u escalas Rockall de pronóstico letal agudo generalizado subaguda.'],
    correctIndex: 0,
    explanation: 'El Enhanced Liver Fibrosis (ELF) Panel crónicamente validado a la par de biomarcadores puros biológicos MASH basal, consta o mide formal y matemáticamente tres cosas de síntesis fibróticas de sangre intercelulares hepática pura letánica subagudas: Ácido hialurónico basálticamente medibles puros, PIIINP (Propéptido aminoterminal del procolágeno III), y TIMP-1 (Inhibidor tisular de matriz metaloproteínas). El Score del calculo matemático de esto dictamina basal crónicamente, e igual a las ondas ecográficas puros, cuanta fibrosis y crónico general colágeno intra hepático ha segregado la enfermedad. Puntaje > 9.8 es Alto riesgo (F3 - F4) y urge MRE de radiología o biopsias formales puros.',
    fisiopato: 'A Diferencias de FIB-4 (Que ocupa simples analíticas bioquímicas como AST de daño crónico de base indirecta inflamatoria portal y las plaquetas puros destructivas de portal-presión u bazos de hipertensiones subagudas puramente), y del ELF Panel; ELF si mira y huele de fondo a los ladrillos formales puros y al colágeno mismo desecho o vertidos del estroma puros o matrices sinusoidales de MASH fibroticas basales intercelular hepatocelular en la sangre o de citoestructuras muertas.',
    clinicalPearl: 'FIB4 (<1.3 sano puro) es barato gratis y mundial. El FIBROSCAN de KPA es de un maquinario en cabinas o sala ultrasonidos basales intermensuales (A veces un IMC> 35 lo fracasa y no lee ni la maquina XL). EL ELF TEST: Súper especifico a fibras MASH crónico, de un pinchazo y suero sanguíneo de 150 Dólares o Euros y saca el colágeno letales basal del daño estelar para calcular y decir si F4 en dias de análisis, es el futuro y el arma subyacente para no radiografiar grandes obesidades.',
    guideline: 'AASLD/AGA guidelines on NITs / MASLD screening blood biomarkers panel updates.',
    whyWrong: { 1: 'El Meld es mortal puramente trasplante o pronósticos descompensatorios cirróticos y agudos alcohólicos basal pero NO de F1, F2 de MASH a F3 pre clínica silenciosas de rutina de obesidad screening.', 2: 'Hpylori no diagnostica MASH en hígado subyacente puramente u obesidad metabólicas.', 3: 'Oakland o Blatchfoord es para UGIB sangramientos puramente digestivos de úlceras no fibrosis a MASH.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-masld-030',
    topic: 'masld',
    difficulty: 'Fellow',
    text: 'Identifique el factor demográfico mundial y de prevalencia masiva biológica o grupo crónico u letal general más subyacente de altísimo porcentaje de impacto puramente que según las guías 2023 la afección epidémica MASLD, ya ha invadido a pasos colosales basales, afectando mundialmente cerca del 30% a 35% de este grupo humano (O 1 de cada 3 portadores mundial o del paciente generalizado):',
    options: ['La Población Adulta Global General Promedio mundial de todos los seres crónicamente basales de la sociedad actual global generalizados sanos de la salud o vida occidental u latinos.', 'La población general mundial puramente fetal de meses o semanas puramente de embarazo intra útero letal y de placentas puros pre natales masivas o genéticamente.', 'Afecta solo agudamente basales masivas a mineros o obreros crónicos de sílice y material letales radiactivo basal inter-mensualmente de uranio puramente focales pre laborales en los desiertos.', 'Se centra y ataca de crónico exclusivamente subyacente puramente global a infantes varones de preescolar 5 años de zonas glaciares o polo geográficos genéticamente del planeta escandinavos puros genéticos.'],
    correctIndex: 0,
    explanation: 'El 30 a 35% por ciento O una colosal 1.5 a 2 mil millones de habitantes enteros del planeta y Población adulta del planeta PADECE MASLD actualmente, haciéndola la patología sistémica o plaga general crónica de mayor volumen en la HISTORIA documentada por un ser humano, de acuerdo al consenso formales puramente globales del año pre publicado basal reciente. ¡Uno de cada 3 personas que te topas diariamente posee hígados grasoso esteatogénico!',
    fisiopato: 'Epidemia o cascadas colosales de sedentarismos de un modo basal o urbanismos puramente subyacentes occidentales de alimentación dietas, el ultra súper procesamiento fructoso del supermercado moderno basal, y el stress u hormonas lipogenéticas globales de grasa han provocado el rebosamiento global u crónico masivo general pancereático de VLDL pura circulantes que saturan hígados global mundo genéticos como si fuese una esponja general desordenada.',
    clinicalPearl: 'El MASLD "No discrimina" de pacientes pero se agrupa al occidente puramente o latinos americanos con dietas. De hoy a mañana la sociedad o pre diabetes general el 1/3 de los humanos tiene esteatosis hepático o "Grasa MASLD", por lo que tu guardia y pre labor consultorio se plagara crónicamente puramente de F1 a F4 todos los días hasta el fallecer puramente y tienes la obligación formal o ética de saber F1 a F4 crónicos y ELF F4 o FibroScan del derecho u izquierdo!',
    guideline: 'AASLD/EASL/ALEH 2023 Multisociety epidemiology consensus nomenclature section for global prevalency rates.',
    whyWrong: { 1: 'La fase fetal NO desarrolla crónicamente letal obesidades MASLD o hiper glicemias masivas de 15 años formales puramente post prandiales diabéticas.', 2: 'Mineros o asbestosis pulmonar o radioactividad crónica es silicosia puros laborales subagudos no síndrome MASLD puramente del metabolismo hiper graso metabólico lipídicos abdominal.', 3: 'El MASLD pediatrico existe formal pero ataca la adolescencia u obesos jóvenes (10%) pero NO escandinavos de polos puros inter-mensuales aislados como preescolar 5 de años crónicamente subagudos.' },
    pillar: 'Clinical Logic'
  }
`;

function processFile() {
  const fileData = fs.readFileSync('src/data/questionBank.ts', 'utf8');
  
  // Find the last occurrence of ];
  const lastIndex = fileData.lastIndexOf('];');
  if (lastIndex === -1) {
    console.error("Could not find array end '];'");
    return;
  }
  
  const contentBefore = fileData.substring(0, lastIndex);
  
  // Check if it ends with a comma
  const endsWithComma = contentBefore.trim().endsWith(',');
  
  const appended = contentBefore + (endsWithComma ? '' : ',') + questions + '];';
  
  fs.writeFileSync('src/data/questionBank.ts', appended, 'utf8');
  console.log("Successfully appended strictly typed questions!");
}

processFile();
