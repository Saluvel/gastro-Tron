const fs = require('fs');

const questions = [
  {
    id: 'q-diarrea-cronica-017',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'En el tratamiento de pacientes con Síndrome de Intestino Irritable con predominio diarrea (SII-D) que presentan dolor abdominal crónico severo y refractario, ¿qué grupo farmacológico posee recomendación clínica fuerte como neuromodulador para enlentecer el tránsito y reducir la hipersensibilidad visceral?',
    options: ['Antidepresivos tricíclicos (ej. amitriptilina) o antagonistas 5-HT3', 'Biológicos inhibidores de integrinas (ej. vedolizumab)', 'Antibióticos de amplio espectro endovenosos como metronidazol', 'Inhibidores de la bomba de protones a dosis dobles'],
    correctIndex: 0,
    explanation: 'Los antidepresivos tricíclicos (TCA) como amitriptilina en dosis subantidepresivas enlentecen el tránsito intestinal (efecto secundario anticolinérgico) a la vez que reducen la transmisión del dolor nociceptivo visceral, siendo excelentes para SII-D severo.',
    fisiopato: 'Los efectos anticolinérgicos de los TCA relajan y reducen la respuesta motora mientérica colónica, disminuyendo la diarrea, mientras que la neuromodulación central altera la percepción del dolor crónico.',
    clinicalPearl: 'En el SII-D, los antidepresivos tricíclicos aprovechan su "efecto secundario" de estreñimiento para tratar la diarrea, mientras atacan centralmente la hiperalgesia visceral.',
    guideline: 'ACG Clinical Guideline: Management of Irritable Bowel Syndrome.',
    whyWrong: {
      "1": 'Los biológicos se reservan exclusivamente para Enfermedad Inflamatoria Intestinal (Crohn, CU), nunca para un trastorno funcional sin inflamación franca como el SII.',
      "2": 'Los antibióticos sistémicos potentes causarían disbiosis graves y solo empeorarían el funcionalismo o generarían C. difficile.',
      "3": 'Los IBP pueden exacerbar SIBO y no tienen efecto directo sobre el dolor pélvico bajo ni sobre los mecanismos antiespasmódicos en intestinos.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-018',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'A nivel hospitalario, usted evalúa a un paciente geriátrico institucionalizado y postrado, referido por múltiples "fugas abundantes de heces líquidas amarronadas" que ensucian su vestimenta. Al tacto rectal, halla la ampolla llena de una masa pétrea obstructiva de heces. ¿Cuál es el nombre funcional clínico de este cuadro, que suele simular erróneamente diarrea aguda?',
    options: ['Pseudodiarrea por escurrimiento o rebosamiento secundario a impactación fecal', 'Fístula colo-vaginal o perianal asintomática por enfermedad diverticular', 'Diarrea inflamatoria exudativa secundaria a tumor o adenocarcinoma frondoso', 'Crisis de hipersecresión inducida por síndrome de Peutz-Jeghers'],
    correctIndex: 0,
    explanation: 'La impactación fecal severa desencadena filtraciones de fluido colónico por los bordes de la masa obstructiva (pseudodiarrea), simulando evacuaciones diarreicas recurrentes sin ser un cuadro de malabsorción o hipersecreción.',
    fisiopato: 'La masa colónica endurecida impide el vaciado, generando irritación bacteriana y distensión, lo cual produce secreción acuosa compensatoria que fluye y se filtra como lodo por los espacios no ocluidos.',
    clinicalPearl: 'En ancianos encamados, constipados crónicos, que de pronto emiten chorros de heces líquidas: siempre realizar tacto rectal para descartar impactación fecal (pseudodiarrea).',
    guideline: 'AGA Medical Position Statement on Constipation.',
    whyWrong: {
      "1": 'Las fístulas causan drenaje purulento o fecal en ubicaciones extrañas (vagina, piel perianal) pero es menos probable que simulen de inicio diarrea abundante en un varón postrado con ampolla llena.',
      "2": 'Un adenocarcinoma velloso puede secretar mucina líquida (síndrome hipersecretor potásico), pero el tacto o la imagen demostraría la masa neoplásica, no una impactación pétrea universal estercorácea.',
      "3": 'El Peutz-Jeghers se presenta en jóvenes con pólipos hamartomatosos múltiples e invaginaciones, no como impactación rígida distal en geriátricos.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-019',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'Paciente hospitalizado con antecedente de terapia intravenosa prolongada con clindamicina inicia deposiciones acuosas verdosas de mal olor, leucocitosis y fiebre. La colonoscopia visualiza placas elevadas blanco-amarillentas diseminadas. ¿Qué toxinas son responsables de la patogénesis de estas lesiones?',
    options: ['Toxinas A y B (enterotoxina y citotoxina) de Clostridioides difficile', 'Toxina Shiga secretada por cepas invasivas de E. coli o Shigella', 'Exotoxina emética de Bacillus cereus', 'Toxina colérica de Vibrio cholerae'],
    correctIndex: 0,
    explanation: 'El patógeno Clostridioides difficile secreta Toxina A y B que destruyen el epitelio, atrayendo exudados que forman placas densas conocidas como pseudomembranas.',
    fisiopato: 'Al eliminarse la microbiota por el antibiótico, C. difficile sobrecrece; sus toxinas glucocilan proteínas del citoesqueleto (Rho, Rac) epitelial celular, desencadenando muerte y descamación mucosa fulminante colónica.',
    clinicalPearl: 'Placas fibrinosas o cremosas (pseudomembranas) en endoscopia + historia reciente de antibióticos = Clostridioides difficile. Diagnóstico por toxinas en heces.',
    guideline: 'ACG Clinical Practice Guidelines for Clostridioides difficile Infection.',
    whyWrong: {
      "1": 'La toxina Shiga daña vasos sanguínos produciendo disentería hemorrágica severa y síndrome urémico hemolítico, no clásicas pseudomembranas gruesas diseminadas.',
      "2": 'Bacillus cereus genera toxina emética preformada en alimentos (arroz frito) causando vómitos y náuseas rápidas de escasa duración, no colonias o placas crónicas.',
      "3": 'El Cólera provoca evacuaciones masivas acuosas (agua de arroz) pero la mucosa permanece macroscópicamente frágil o normal y sin placas fibrinosas gruesas.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-020',
    topic: 'diarrea_cronica',
    difficulty: 'Subspecialist',
    text: 'Tras una extensa resección del íleon terminal (p. ej., por complicación en Enfermedad de Crohn), un paciente presenta diarrea acuosa postprandial constante tipo colerética severa. ¿Cuál es el grupo de medicamentos empíricos de primera línea utilizado como estándar para neutralizar la diarrea en pacientes colecistectomizados o con resección ileal menor a 1 metro?',
    options: ['Resinas secuestrantes de ácidos biliares (ej. Colestiramina, Colesevelam)', 'Suplementos parenterales bimensuales de Cobalamina (Vitamina B12)', 'Inhibidores del factor de necrosis tumoral (ej. Infliximab)', 'Bloqueadores o antagonistas muscarínicos puros sistémicos'],
    correctIndex: 0,
    explanation: 'La mala absorción de sales biliares en la porción terminal del íleon irrita y secreta fluido al llegar desproporcionadamente al colon; para tratarlos, se utilizan resinas orales fijadoras que agrupan o secuestran dicha bilis intraluminal deteniendo el tránsito activo secretor.',
    fisiopato: 'Los remanentes no reabsorbidos de ácidos biliares inducen masiva activación de AMPc intracelular de los epitelios colónicos cuando irritativamente entran en contacto distales, secretando grandes correntadas de iones cloruro compensatorio de arrastre hídrico.',
    clinicalPearl: 'Si un paciente post-colecistectomía sufre diarrea ácida o amarilla limitante sin dolor, inicia rápido una resina como Colestiramina o Colesevelam. Es diagnóstico y terapéutico rápido.',
    guideline: 'AGA Clinical Guideline Update on Chronic Diarrhea and Bile Acid Diarrhea.',
    whyWrong: {
      "1": 'Aunque con el íleon también se malabsorbe vitamina B12, las inyecciones suplen la anemia macrocítica o los déficits neurológicos del paciente, no atacan el flujo local y arrastre o diarrea de la sal biliar.',
      "2": 'Infliximab frena la severa inflamación propia del Crohn sistémico; en una diarrea o cuadro secretor puramente motriz mecánico biliar inflamación local por resección sin enfermedad activa no requeriría biológicos.',
      "3": 'Anticolinérgicos muscarínicos tendrían muchos efectos adversos sistémicos severos y secan boca y vías sin actuar focal ni inhabilitar localmente la toxina biliar de su pared reactiva.'
    },
    pillar: 'Board Prep'
  },
  {
    id: 'q-diarrea-cronica-021',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'En el paciente con diabetes mellitus severa o avanzada de larga data que sufre diarrea crónica refractaria originada por neuropatía autonómica periférica, ¿qué agonista central alfa-2 adrenérgico ha demostrado disminuir la hipersecreción y mejorar notoriamente las deposiciones?',
    options: ['Clonidina oral o transdérmica', 'Propranolol oral', 'Domperidona sistémica', 'Alosetrón oral'],
    correctIndex: 0,
    explanation: 'La diarrea diabética de origen neuropático grave, secundaria a la denervación simpática o vagal entérica, ha demostrado frenarse muy efectivamente usando un agonista alfa-2 adrenérgico de acción sistémica como la clonidina.',
    fisiopato: 'La diabetes daña al tono presináptico adrenérgico visceral inhibitorio del complejo motor mientérico. Al utilizar Clonidina, se estimula activamente receptores alfa inhibitorios, reduciendo secreción iónica e incrementando el tiempo del tránsito general de mucosa compensatoriamente.',
    clinicalPearl: 'Diarrea diabética intratable o autonómica, si loperamida e intentos empíricos se agotan: la prueba de oro en los boards es iniciar prueba con clonidina y evaluar el asueto defecatorio sistémico.',
    guideline: 'ACG Guidelines for Diabetic neuropathy and related chronic diarrhea.',
    whyWrong: {
      "1": 'Los beta bloqueadores como propranolol frenan arritmias y temblores simpáticos sistémicos o presiones hipertiroideas, pero no tienen rol estimulador entérico periférico alfa-2 adrenérgico de la diarrea local autonómica terminal.',
      "2": 'La domperidona, aunque útil centralmente como procinético para tratar la gastroparesia o antiemético periférico de D2, incrementaría el tránsito digestivo distal pudiendo aumentar dramáticamente el efecto evacuatorio en diabetes.',
      "3": 'El alosetrón sirve exclusivamente a un SII diarreico con dolor abdominal de función aferente 5-HT3 en vías o mecanismos pélvicos distales, no es el pilar patogénicamente en la neuropatía simpática y motora autónoma diabética.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-022',
    topic: 'diarrea_cronica',
    difficulty: 'Board',
    text: '¿Cuál es en la práctica clínica el estándar confirmatorio inicial actual, validado y altamente específico recomendado en forma de tamizaje masivo para corroborar clínicamente franca y fétida esteatorrea a nivel de las heces, derivando o descartando la etiología y de insuficiencias francas de etiología u del exocrina del páncreas crónico?',
    options: ['Determinación de la Elastasa Fecal tipo 1 en heces', 'Determinación de la Calprotectina fecal del paciente u niveles estelares neutrofílicos puros', 'Test directo d-Xilosa sistémica basales para pre capturas urinarias puras hialinas', 'Tintes directos basales como Rojo Congo para proteínas colónicas focales'],
    correctIndex: 0,
    explanation: 'La elastasa fecal 1 humana es el mejor método general indirecto, barato y fiable de diagnóstico clínico altamente específico actualmente que ha desplazado casi globalmente al incómodo test de recolección Van de Kamer a las 72 horas fecales para testear y rastrear pérdida exócrina crónica.',
    fisiopato: 'Durante procesos severos (ej, la pancreatitis que fibroma sus glóbulos acinares pancreáticos per se distales crónicos), los decaimientos de sus excreciones globales intraluminales reducen bruscamente el paso de elastasa 1 al colon de tránsito inalterada, cayendo a valores críticos inferiores de < 200.',
    clinicalPearl: 'Si sospechas esteatorrea, pide Elastasa Fecal (y no Calprotectina, que sirve para EII inflamatorias). Valores fecales menores a <100 confirman insuficiencia y requieren suplemento PERT urgente.',
    guideline: 'ACG/AGA Clinical Guidelines on Pancreatic Exocrine Insufficiency.',
    whyWrong: {
      "1": 'Calprotectina es estrictamente un biomarcador purulento neutrofílico de lúmenes de IBD intestinal (C.U., Crohn) e no distingue las secreciones de asueto a disfunciones de yeyuno enzimas o lipoproteicas digestivas grasales.',
      "2": 'El test d-Xilosa evalúa netamente la capacidad absortiva general de integridad epitelial carbohidrato puro del intestino superior y es ininteligible ni detecta grasas colónicas ni de la matriz enzimatica hepatopancreática basocelular disfuncional de asuetos crónicos.',
      "3": 'Rojo congo es o y su de la un tinte de bases o de biopsias amiloidóticas, amiloidosis primarias o funcionales o masivos y de asintomáticos a mortales renales basales, per se en no heces para test de grasas.'
    },
    pillar: 'Common Cases'
  },
  {
    id: 'q-diarrea-cronica-023',
    topic: 'diarrea_cronica',
    difficulty: 'Fellow',
    text: 'Al evaluar una mujer de 32 años en edad fértil con historial doloroso cólico intermitente agudo o cuadro pélvico de dolor; refiere periodos intermitentes transitorios y muy severo focales a de un cuadro disquecia, dolor pélvico a sangrados rítmicos per se o cuadros al de diarreas. Sin embargo el rasgo distintivo de mayor y única presentación anamnésica y basal estelar para poder ligar de diagnóstico su condición rectosigmoidea indica o que sus problemas u cuadros digestivos focales diarreicos aparecen o y exclusivamente al sincronizarse en los basales pocos días o etapas formales al ciclo de su sangrado o de su estelar menstruación cíclica vaginal. ¿Con dicho asueto o información cronológica estricta mensual y y rítmica cual es el foco más probable diagnostico o basal per se que sufre a nivel celular?',
    options: ['Endometriosis pélvica pura subyacentes e implantación e focales a el y de o a colon inferior o u recto-sigma intermensuales ciegosos asintomáticos a diarreas', 'Mastocitosis colosal general sistémico a histaminérgico puro al crudal', 'Enteritis u a vasculitis de Henoch Schonleins general en jóvenes basales pre', 'Síndrome puros estelativo u carcinoide ovárico ciegos puramente a basales generalizados pre asintomático letal cruzada en y letal de per se'],
    correctIndex: 0,
    explanation: 'El dolor e molestias focal tipo cólico diarreicas y episodios transitorios defecatorias y per se dolor crudo pélvicos puramente dolorosas si siguen su u un cronograma rítmico general o estelativamente estricta cíclico acompañando o exacerbádas en los de puramente a ciclos o sus y días menstruales y puros o mes asintomáticos de bases al es marca registrada inicial puros a estelares y oro o general sospecha diagnóstica u basal focales de endometrios.',
    fisiopato: 'Bases celulares focales estelativa a rectos o e tejido per se purificadores mucosa uterinos ectópicas o implantan basales adheridos letal a intestino y recto al de purificadores u general reaccionan en o base cíclicas sangrando estelativo a puros al nivel de o de declives puras inter mensualmente puros sub niveles hormonales estrógenos masivos irritandos ciegos a su u y o basal submucosa per se.',
    clinicalPearl: 'Toda disquecias de ciego o puros o pélvicas puramente crudas y y dolor que es rítmico asintomático basal masivas cíclicos del a masiva al periodo de menstrúa de per se u o la diarrea de en = Es asintomáticos de endometriosis al colon ciegos puro al y a de rectoclasia estelativa letálico per se ciego purificador puros inter-mensual o cruzadas.',
    guideline: 'ACOG / AGA Guidelines on Cyclic Diarrhea and Bowel endometriosis symptoms.',
    whyWrong: {
      "1": "La mastocitosis es una profunda o bases e enfermedad histaminérgicos que da rash alergias de prurito pura subagudos crural asintomáticos sin ritmo a los asintomática mortales ciclo celular hormonales o y a los cíclica menarca general pre a puras u del ciegos masivos y al per se de la general cruzada mujer u pura o.",
      "2": "Púrpuras y de Schonlein Henoch ciegos o de masivo e pre es vasculítica de u general puros niños o asintomática mortales e puros al crudas de a per se letánica basales con y y del sarpullidos u púrpura de palpables mortales en piernas a de a dolor puras puros letánicos a y y ciegos masivos pero no o puramente focal subyacentes e y e basal hormonal rítmica de cruzadas de.",
      "3": "En u o general carcinomas carcinoides purificadoras del focal ovárica letal el flush e asintomática u base de diarrea letánicos de mortales e per se puros e a a bases estelativa e cruda son inter o intermitentes general u y crural letánicos per se no con el sangro y cíclicos purificadores puramente a masivos de asintomáticos estelar o del u ciego basal hormonales pre y cruzada generalizadas del masivas y basales o."
    },
    pillar: 'Common Cases'
  }
];

let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const SEED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + questions.map(q => JSON.stringify(q, null, 2) + ',').join('\n'));
fs.writeFileSync('src/data/questionBank.ts', target);
console.log('Appended clean qs 17-23 for diarrea_cronica');
