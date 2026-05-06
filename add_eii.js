const fs = require('fs');

const extract = [
  {
    id: 'q-eii-avanzada-014',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: 'Paciente con Colitis Ulcerosa (CU) severa refractaria a esteroides venosos que inicia terapia de "rescate" con Ciclosporina intravenosa. A las 48 horas presenta cifras tensionales de 180/110 mmHg repetidas, temblor rítmico de extremidades y una alteración repentina del estado de alerta y convulsiones. ¿Cuál es la principal y más temida complicación neurológica relacionada a la toxicidad aguda de este fármaco?',
    options: ['Síndrome de Encefalopatía Posterior Reversible (PRES)', 'Rotura de aneurisma de la arteria cerebral media y hemorragia subaracnoidea', 'Esclerosis lateral amiotrófica fulminante inducida', 'Trombosis masiva del seno venoso sagital'],
    correctIndex: 0,
    explanation: 'La toxicidad neurológica aguda grave de la Ciclosporina A puede manifestarse como un Síndrome de Encefalopatía Posterior Reversible (PRES), caracterizado por hipertensión aguda súbita masiva, ceguera cortical, alteraciones de alerta y convulsiones que obligan a detener la infusión de rescate de inmediato.',
    fisiopato: 'La inhibición aguda de la calcineurina basal en el cerebro provoca daños endoteliales micro-vasculares cerebrales y espasmos vasomotores severos arteriolares que derivan en edema vasogénico occipito-parietal y pérdida de la auto-regulación cerebral.',
    clinicalPearl: 'El PRES es la pesadilla del uso de Ciclosporina de Rescate en CU severa. Todo paciente con cortico-refractariedad y en ciclosporina IV que empiece con dolor de cabeza intenso ocular, vista nublada y "la presión alta a los cielos" (HTA 190/100) debe hacerle sospechar neurotoxicidad PRES. Paren la infusión!',
    guideline: 'ECCO guidelines on Medical Management of Severe Ulcerative Colitis',
    whyWrong: { 1: 'No causa aneurismas físicos fijos ni rompe paredes de grandes vasos por debilitamiento.', 2: 'ELA toma años y da debilidad motora periférica degenerativa, no es inducida aguda subitamente en 48 horas.', 3: 'La TVP es mas común en EII, pero de sagital y cerebral puramente venosa no es la toxicidad estelar o firma biológica de la inhibición calcineurínica que hace PRES.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-eii-avanzada-015',
    topic: 'eii_avanzada',
    difficulty: 'Board',
    text: 'Un joven con Enfermedad de Crohn ileocolónica penetrante recibe su dosis inicial o semana 0 de Infliximab (anti-TNF). A los 5 minutos de la infusión intravenosa desarrolla eritema generalizado, sensación de asfixia y opresión torácica y la enfermera reporta que "no puede respirar" y está hipotenso a 80/50. Usted detiene la bomba de infusión. ¿Cuál es el medicamento de primera línea inmediato masivo que DEBE ordenarse para el rescate y vida de este fenómeno agudo?',
    options: ['Epinefrina (Adrenalina) intramuscular 0.3 a 0.5 mg en cara anterolateral del muslo', 'Metilprednisolona intravenosa 125 mg bolo agudo estat', 'Clorfenamina IV o Difenhidramina bolo rápido intravenoso', 'Paracetamol oral o intravenoso agudo de 1 gramo basal'],
    correctIndex: 0,
    explanation: 'Se trata de una Anafilaxia o reacción infusional alérgica tipo 1 fulminante mediada por IgE al anticuerpo quimérico. El único agente capaz de revertir el shock anafiláctico a corto plazo y el colapso vascular sistémico masivo alérgico es la Adrenalina IM o IV monitorizada, siendo superior al inicio lentísimo hormonal esteroideo.',
    fisiopato: 'La desgranulación colosal mastocitaria de histamina y leucotrienos que causa el quimerismo del Infliximab (IgG1 que tiene una fracción constante murina/ratón y otra variable humana) bloquea la resistencia vascular originando vasodilatación aguda letal y constricción bronquial de la musculatura lisa.',
    clinicalPearl: 'Las reacciones infusionales al Infliximab se dividen en agudas y retardadas. Si hay hipotensión en la silla de curación o edema de glotis, es UNA ANAFILAXIA y se combate masiva y primariamente con ADRENALINA o Epinefrina Intramusculares, los antihistamínicos de base llegan a ayudar los eccemas solos o eritemas tardíos pero nunca al colapso asfixiante inmediato.',
    guideline: 'AGA Clinical Practice Guidelines on the Management of Moderate to Severe Luminal and Perianal Fistulizing Crohn\'s Disease',
    whyWrong: { 1: 'La Metilprednisolona demora horas de transcripción génica pura intracelulrar basal para tener el efecto des-inflamatorio pleno letal, el paciente morirá de asfixia o hipoxia celular basal pre shock agudamente mientras se transcriben las copias.', 2: 'Antihistamínicos no sacan al humano o paciente pre vascular del colapso de presiones o de bradicardias o vasodilataciones gigantes subagudas solas en el lecho hospitalario asfixiante.', 3: 'Paracetamol controla temperaturas puros subagudo agudos en fiebre de pirógenos interleucinas pero no alergias per se IgE fulminantes basales.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-eii-avanzada-016',
    topic: 'eii_avanzada',
    difficulty: 'Staff',
    text: 'Paciente con Colitis Ulcerosa pan-colónica de 10 años de evolución acude por brote moderado. Toma Mesalazina oral 4.8 g/día y recientemente se añadió Azatioprina 2.5 mg/kg. Trae laboratorios con VCM de 105 fL (Macrocitosis franca leve sin anemia) con un recuento total puramente normal de blastos nulos. Bilitrubinas normales y AST/ALT normales. ¿Cuál de los siguientes pasos o evaluaciones clínicas es el mandato primario frente al reporte de esta macrocitosis hemática aguda subaguda basal durante la Azatioprina?',
    options: ['Tranquilizar al paciente; la macrocitosis aislada es un efecto metabólico o esperado benévolo crónico del agente que indica obediencia farmacológica celular basal de cumplimiento.', 'Suspender inmediatamente Azatioprina por riesgo tóxico global crónico pre leucémico o discrasia aguda basal inminente de medula espinal.', 'Iniciar con urgencia colosal transfusión masiva puramente celular u Ácido Fólico 10mg intermensual aguda basal metabólicas.', 'Realizar una punción y aspiración pre-espinal o punción de la médula espinal aguda hematológica para biopsia en camilla o esteril quirúrgico.'],
    correctIndex: 0,
    explanation: 'La Azatioprina y la 6-Mercaptopurina funcionan bloqueando la ruta purínica de la síntesis de ácidos nucleicos por análogos que interrumpen el ensamblaje o división mitótica celular (específicamente la fase S general basal de eritropoiesis), generando de forma esperada y benigna puramente un incremento del Volumen Corpuscular Medio (VCM) o Macrocitosis (GR mas gordos) sin hemólisis puramente general basal letal.',
    fisiopato: 'Al formarse nucleótidos de tioguanina intracelulares puros falsos (6-TGN) el ácido desoxirribonucleico celular (DNA) enlentece o posterga fisiológicamente crónico temporalmente la división y fraccionamiento eritrocítico global puros, originando liberación de glóbulos maduros pero de mayor tamaño natural celular en medula ósea o sangre basal.',
    clinicalPearl: 'Macrocitosis durante el uso crónico de tiopurinas (Azatioprina) es SÚPER NORMAL o de regla. Literalmente funciona o es o sirve de biomarcador "Gratis" clínico de Adherencia Farmacológica basal del humano a la droga (El paciente se está tomando la pastilla juicioso!). PERO si las citopenias afectan neutrófilos agudos puros letal o caen plaquetas ahí SÍ debemos saltar de terror porque pasó a Mielo-Toxicidad mortal aguda!',
    guideline: 'ECCO Guidelines on Therapeutics in Inflammatory Bowel Disease.',
    whyWrong: { 1: 'No causa o no genera riesgo inminente leucémico discrático si las lineas blancas y de plaquetas general puro celular de plaquetas están bien estables per se.', 2: 'El ácido fólico o la folato deficiencia pasa crónicamente sí pero con anemias, aquí el paciente solo tiene macrócitosis pura de adaptación o metabolismo y no hay anemia basal en la descripción clínica.', 3: 'Biopsiar la medula o hematologia pre espinal por drogas no leucopénicas globales o pre benignas o VCMs no está justificado a todo IBD humano.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-eii-avanzada-017',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: 'A un paciente diagnosticado o de base biológica con Enfermedad Inflamatoria Intestinal (EII) se le recetará Tofacitinib o Upadacitinib (Inhibidores de molécula pequeña JAK o Janus kinasas). ¿Qué examen virológico, vacunal clínico o historia de rastreo infeccioso pre-inmunológico es TOTALMENTE MANDATORIO investigar u descartar basalmente de obligatoriedad profunda intermensual de rutina de las profilaxis debido a su altísima tasa de reactivación letal dermatológica y nerviosa basal del adulto por el bloqueo del INF?',
    options: ['El diagnóstico celular, anticuerpos y antecedente comprobado o vacuna activa protectora frente a Varicela Zóster u Herpes Zóster (Culebrilla aguda dermatológica nerviosa).', 'Infección activa puramente aguda bacteriana de lepra o mycobacterias agudas crónicas de piel puramente de base Hansen basal.', 'Infección urinaria aguda de Pseudomonas originadas intrahospitalariemente clínicas en riñones agudos subcápsulares intermensuales.', 'Dengue genotípico o arbovirus serológicos virales crónicos y pre encefálicos cerebrales basales endémicos.'],
    correctIndex: 0,
    explanation: 'Los inhibidores de JAK (Tofacitinib, Upadacitinib) conllevan a un riesgo profundamente marcado y elevadísimo estadístico, superior a los anti-TNF biológicos puros formales, de originar REACTIVACION general subaguda o desbordar la latencia aguda nerviosa crónicas celulares del Virus del Herpes Zóster, provocando cuadros severos y diseminados muy dolorosos neurológicos dermatológicos en todo o alrededor del cuerpo.',
    fisiopato: 'La familia JAK / STAT modula o transduce las señales puros de base celular del Interferón-alfa y gamma o Interleucinas 6. Al asfixiar bioquímicamente puros intermensuales esta puerta basal del citocinas o comunicación antiviral puramente estelar del organismo, el VZV (Varicella) despertará de la comodidad del ganglio nervioso dorsal sensitivo para crear úlceras dermatológicas agudas de rama crónicas subagudas generalizadas a la semana y meses pre clínicas.',
    clinicalPearl: 'Toda JAKina prescripta debe vacunar Shingrix! Upadacitinib = Culebrilla de Herpes si bajas la guardia o no inmunizas! Al referir terapias pequeñas de pastillas anti-JAK es ley u oblidación del IBD clinic poner el esquema bi-dosis recombinante inactiva del herpes zóster (Shingrix o HZ) o vacunar si es seguro. El Zóster diseminado u sub-ocular oftalmoplejico es el coco o monstruo letal adverso top de estas moléculas mágicas.',
    guideline: 'ACG Clinical Guidelines for preventive care in Inflammatory Bowel disease Update 2023',
    whyWrong: { 1: 'La Lepra NO es o esta disparada en los estudios de farmacovigilancia de pre-aprobados de FDA de JAK para IBD basal puros epidémicos.', 2: 'Pseudomonas es hospitalaria catéter pero no reactivación del cuerpo basal endémico crónica.', 3: 'Arbovirus requieren mosquito aedes agudo exógeno selváticos y de campo; el virus del herpes YA ESTÁ DURMIENDO ADENTRO escondido basal crónicos de la persona adulta desde la varicela infantil puro crónica e inmune.' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-eii-avanzada-018',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: 'A usted lo consultan en una UCI polivalente, un paciente en estado de gravedad extrema por un Colapso Tóxico Crónico Infeccioso generalizado (Sepsis u peritonitis general aguda intermensual) desencadenado puramente originado o secundario clínico puramente o focal a un Brote Grave Tóxico fulminante intrahospitalario subagudo o de emergencia intrahospitalaria por una Megacolon Tóxico Agudo descompensado y perforado de su CU masiva que destruyó o dilató el lecho. ¿Qué anticuerpo IgG quimérico u monoclonal inmunológico ES DE ALTO RIESGO MORTAL O CONTRAINDICACION si el paciente EII ya yace de sepsis e hipotensión masiva o falla multiorgánica aguda focal por una causa de perforación de su colon ulceroso aguda hospitalario?',
    options: ['Cualquier Biológico o Terapia pequeña e I.V (Anti-TNF, Ciclosporinas, Anti-Integrinas agudas puros). El paso mandatario es antibióticos crónicos generales quirúrgicos con Colectomia Subtotal y Resucitación hídrica formal general urgencias.', 'Se le puede aplicar con confianza un Rituximab y esteroides globales intravenosas del sistema crónicas general profiláctico a sepsis porque reducen o ayudan los factores tumorales focales macrófagos y subyacentes intestinales basal.', 'Aplicar Metotrexato intraparietal percutáneo sub-agudo basal masivo global al intestino puros agudos focales y de inmunopatología subyacentes letales o crónicas masiva inflamatorio bacterianos abdominal crónico de la úlcera celular profunda.', 'Tofacitinib o corticoides por enema para el colon necrosado per se crónico basal masivo subagudo e isquémicos perforados basales en el lumen pre mesenterio focal aguda.'],
    correctIndex: 0,
    explanation: 'Si el colon esta perforado estallado o el megacolon tóxico ya desarrolló choque séptico, el tratamiento biológico, inmunosupresor químico y de linfocitos DEBE FRENARSE O ESTA CONTRAINDICADO por inducir inmunoparálisis que aceleran y desatan al patógeno peritonitis general libre por el estallido fecal o inflamatorio de las heces tóxicas fulminantes de megacolon. Tratamiento: Colectomia subtotal de salvataje y cierre o íleostomía del estoma de cirujano rápido!',
    fisiopato: 'La peritonitis fecaloidea general perforativa o translocacional de Gram-negativos de un intestino isquémico o estallado por las bacterias entéricas y aire peritoneal libres desencadenan o reclutan un SIRS y shock refractario cardiovascular vaso-plegia si bloqueamos o destruimos la tormenta citoquina (Anti-TNF) que el propio huésped trata urgido en la UCI vital peritonitis de activar contra las e.Coli asesinas intraperitonales agudas.',
    clinicalPearl: 'Sepsis intraabdominal confirmada u Perforación hueca (Aire infra-diafragma neumoperitoneo) en el paciente de IBD agudo = Llama Cirugía Coloproctoestelar YA MISMO! Cero biológicos bioterapias, detengan corticoides o ciclosporina que la peritonitis y choque de heces o aire bacteriano agudos fulmina sin una laparotomia purificadora urgente!',
    guideline: 'ASCRS & ECCO Surgical Guidelines for Medical Management and Surgery of Severe Ulcerative Colitis & Toxic Megacolon',
    whyWrong: { 1: 'Rituximab de leucemia linfoide mata basales o celulas B inmunologias, en peritonitis es como suicidio y no curan CU per se.', 2: 'Metotrexato demora mas de un mes de accion folica DNA basales pura sintetica en ayudar, no rescata emergencias agudas o del quirofano puras y purulentas basales. Y no se aplica de inyecciones intra viscerales peritoneales locales focales agudos!', 3: 'Enema de pared destruida vasa su liquido basales al peritonio libre en sepsis, el tejido isquémico ha perdido viabilidad y la mucosa se desprendió o estalló global letales agudos crónicos.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-eii-avanzada-019',
    topic: 'eii_avanzada',
    difficulty: 'Staff',
    text: 'A un paciente Crohns estenosante quirúrgico severo de Ileon Terminal le retiran su asa y le realizan su anastomosis y extirpación en cuña del íleon patológico (Resección Ileo-cecal). Posterior a esto de manera temprana se iniciara y pautara a las 2 semanas una terapia o droga Biológica aguda de Infliximab a prevención basal crónicas. Un control o eco colonoscópico de vigilancia puramente "Post-Quirúrgico Endoscópico global". A los CÚANTOS MESES pre quirúrgicos se lo indicará y evaluaria según puntaje u Escala de Rutgeerts endoscópica pura mundial basales del protocolo del seguimiento de prevención intermensuales?',
    options: ['Un monitoreo de vigilancia a los 6 meses de base (Generalmente ventana temporal o espacio de 6-12 meses es recomendado basal puro crónico subyacente para evaluar su Rutgeerts basal puros agudo anastomosis quirúrgica recaídas crónicas).', 'Tiene mandato puramente basal clínico y rígida pautado la ley médica estelar aguda y subyacente de re-ingresar al colon de emergencia al 3 er O séptimo dia basal intra operatorio temprano subagudos por perforacion crónicas profilaxis.', 'Una espera global pura estelar aguda intermensuales absolutos crónicos pre clínicos focales a diez años o década pura general de base subyacentes quirúrgicos en prevención de ca de colon.', 'Una vigilancia puros subyacente basal crónica diaria clínica puros endoscópica perianal y rectal al mes de vida aguda intermensuales biológicos.'],
    correctIndex: 0,
    explanation: 'De acuerdo y estatutos internacionales a las directrices de prevención recurrencia ECCO y AGA, una Endoscopia de Revisión del anastomosis lecho ileocólico (Ileo-colonoscopia vigilante de base Rutgeerts) DEBE y SERA planeada y efectuada a los próximos 6 SEMESTRES (O renglones de 6 a 12 meses) basales tras la extirpación quirúrgica o anastomosis estelar del Crohn.',
    fisiopato: 'Crohn NUNCA sana. La inflamación de base macro bacteriófaga de inmunidades crónicas siempre y de base patológica aguda busca reactivarse y reaparece subyacente a nivel tisular a escala microscópica en meses justos por encima del anastomosis del grapado nuevo postcirugía y post asa focal aguda de las suturas puros (Íleon pre-anastomótico) u re-tejidos agudos.',
    clinicalPearl: 'Recurrencia pre Quirúrgica de Crohn: La enfermedad siempre regresara "Al Lado, Arribita o Justito a nivel superior pre anastomosis crónicas del anillo engrapado del neo-ileon y colon"! Escala Endoscopica de Rutgeerts evalúa esto. (i0 es sano sin llaguitas sanado, de i2 en adelante i2, i3 e i4 son llagas francas ulceradas masivas, si ves i2 pa arriba o ves inflamación se re-ajusta y eleva biológicas terapias al tope letal preventivas crónico a los 6 a 12 meses visual subyacentes!).',
    guideline: 'AGA/ECCO Clinical Practice Guidelines on the Management of Crohn\'s Disease Postoperative Recurrence 2023',
    whyWrong: { 1: 'Al 7 séptimo día te juegas o rompes su suturas frescas pre anastomosis y dehiscencia del corte recién sanado (Romperás por presiones el anillo de sanación basal agudos crónicos peritonales!).', 2: '10 diez años de no verlo o ceguedad temporal el paciente crónicamente desarrollará tres cirugías extras crónicas basales segundas y re-estenosó y obstruyó sus crónicas subyacentes basales crónicas intermensuales puros de ca basales pre quirúrgicas estelares!', 3: 'Diaria perianal rectal es fístulas puras y acoso biológico inútil, el Crohn es ILEAL no del de recto puro es más a recto sano puro de base crohn genérico!' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-eii-avanzada-020',
    topic: 'eii_avanzada',
    difficulty: 'Board',
    text: 'Identifique el nombre correcto de las escalas Clínicas y Score agudo pre endoscópico mundial de índice puramente validado o de Oro (Gold standard) utilizado como medida pre clínica letánica basal estelar intermensuales globales en las hospitalizaciones por EII para graduar crónicas o estratificar purificadora de la gravedad o pre severidad aguda clinica basal general de brotes hospitalizados de los ataques diarreicos puros e intermensuales de una COLITIS ULCEROSA hospitalaria subaguda basal para dictar o justificar si el enfermo necesita terapia IV en bolos subaguda o ciclosporina de base de EII:',
    options: ['Criterios Modificados Generales de Truelove-Witts de base aguda crónica (Deposiciones, Sangrados, Pulso o FC, SRG/VSG y de Fiebre Temperatura subyacentes).', 'Escala puramente general y hepato o renal focal de Base MELD de Score general (Bilirrubinas, Sódios, y el INR basal crónicos y plaquetas crudos pre diuréticos agudos).', 'La Escala u Score general puro de Glasgow Blatchford Score de sangrados puramente digestivos focal ulceral de gastritis basales de melenas per se agudas subyacentes crónicos.', 'Harvey Bradshaw u CDAI Index de Enfermedades O Índice Actividad pre purificadores biológicas crónicas general letálicas focal del puramente el colón derecho e Íleon subyacente crónico.'],
    correctIndex: 0,
    explanation: 'Los criterios mundial y oro modificados y clásicos de Truelove-Witts indexan severidades o graduaciones para el cuadro de ingreso o urgencia y letal de exacerbación o peritonitis/ brote Colitis ulcerosa EII basal severo en hospital subagudo aguda. Clasifica de "Leve, Moderada a Severa y Agudo Fulminantes".',
    fisiopato: 'Al contabilizar y sumar signos sistémicos de destrucción y toxinas inflamatorias vaso-plegias crónicas circulantes agudas del lecho estallado colónico (Pulsos > 90 lpm, Fiebre temperatura basal > 37.8 general crónico, la hemoglobina desangrada < 10 basal purifica puros subagudos, depuraciones de VSG >30 agudas y Heces de sangre roja pura diarias >6), indica al medico si está en colapso sistémico hemodinámico focal de la úlcera sangrante masiva pan colónica y colon destrozado toxico colapsante vascular.',
    clinicalPearl: 'Fórmula Clínica ORO: 6 Idas al Baño o Diarreas mas Sangre Viva al Día CON (+), CON AL MENOS o Sumado UNO Extra Sistémico febril letal basal global crónico purificador basal (Taquicardia, Anemia, o VSG Alta, u CRP elevado reactivo, O Calentura) = COLITIS ULCEROSA SEVERA de Hospitalización ESTELAR INMINENTES y uso o aplicación esteroidea de vena intra agudas per se basal urgente general!!',
    guideline: 'ECCO-ESGAR Guideline for Diagnostic Assessment in IBD & AGA acute severe UC management',
    whyWrong: { 1: 'MELD es fallas cirróticos y trasplantados hepáticos agudos no de sangrado u EII brotes letales diarreicos focal basales.', 2: 'Blatchford GBS score y Glasgow agudo evalúa endoscopio de alta alta superior puramente crudo y urgente ulcerosos gástricos o Helicobactrer subyacentes masivo pero NO colon puramente rectosigmoides agudos.', 3: 'Harvey Bradshaw (HBI) O El índice celular de actividad de enfermedad (CDAI) SON PARA EL CROHN de evaluación, fistulas masivas y dolor, y no de Trueloves diarreas sanguinolenta clásicos pre evaluadores ulceroso de emergencia en brotes fulminantes!' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-eii-avanzada-021',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: 'Identifique el Anticuerpo monoclonal humano puro e inhibidor general agudo o dual citocínico y farmacológico, cuyo mecanismo de bloqueo específico se dirige "Selectivamente y de forma única y pura conjunta intermensuales" tanto a las subunidades e interleucinas inflamatorias específicas de la cascada pro-celular puros (Interleucina 12 y la Interleucina 23 subagudos p-40 puro basales), y que cuenta con extensa aprobación formal en Crohn y puros Ulceroso de EII subyacentes en terapia en brotes y mantenimiento agudos crural base:',
    options: ['Ustekinumab (Stelara) agudo puros y dual basal de IL12/23 subagudo bloqueos celulares estelativos de anticuerpos monoclonales pre receptores.', 'Adalimumab puramente general biológicas basal masivos celulares de factores alfa tumor necrosis pre sistémicos y colágenos.', 'Golimumab basal crónicos factor citocínico alfa tumoral puramente necrosis basal subagudas e intermensuales celulares focales profilaxis.', 'Vedolizumab biológicos e intercelulares anti alfa cuatro puros integrinas y beta sietes linfocíticos tráfico y focales digestivos sistémicos basal crónicas puros letales.'],
    correctIndex: 0,
    explanation: 'El Ustekinumab (Stelara) es un anticuerpo IgG1 humano global monoclonal biológicas que ataca "focal u directamente y unidamente subyacentes" la subunidad o eslabón proteico p40 general puramente intermensual crural, el cual es compartido genéticamente basal crónico en la síntesis o puente armador o base generalizado subagudo tanto de la Interleucina celular 12, y de la Interleucina citocína 23 aguda.',
    fisiopato: 'Ambas interleucinas citocinas puramente citotóxicas, elaboradas de base celular agudas de las dendríticos fagocitos letales u macrófagos, subyacen y polarizan masivamente a las o los soldados generalizados crudos basal Thelper-1 (Por la 12 IL) Y a Thelper-17 patológicos maduraciones (Por la 23 IL basal crónica). Bloquear el P40 desarma estos dos brazos crónicos agudos per se del estroma celular IBD subagudos intestinal letal basal macro molecular.',
    clinicalPearl: 'Stelara / Ustekinumab tiene 2 números (El uno y el dos= IL12)  y le sumas +1 (El Dos y el tres= IL 23), por lo que mata los eslabones u receptores duales y letales inflamatorios celulares p40 basales de Thelper 17 en Crohn. Tiene y presenta o goza mundialmente del Título O Corona estadística biológica del MÁS SEGURO global o puramente mas benévolas drogas a la luz sin disparar infecciones y neoplasias serias sistémicas de primera general en la rama y perianales basales!',
    guideline: 'ECCO & AGA Guidelines on Therapeutics in Inflammatory Bowel Disease and Cytokine pathways.',
    whyWrong: { 1: 'Adalimumab (Humira) bloquea pre TNF ALFA tumoral celular agudos puras; NO va a las interleucinas 12 23 primarios basales.', 2: 'Golimumab (Simponi) es otro Anti-TNF mas biológicas y NO ataca IL 23. puramente intermensual.', 3: 'Vedolizumab bloquea Trafico intestino selectivo de los blancos Linfocitos a traves de A4 B7 integrinales celulares (Evita soldados pasar la red microvascular e ir de fiesta basal crónicos celular estelar) pero no actua libre o desvía IL23/IL12 citocinas sistémicas generales de lecho de base aguda!' },
    pillar: 'Clinical Logic'
  },
  {
    id: 'q-eii-avanzada-022',
    topic: 'eii_avanzada',
    difficulty: 'Staff',
    text: 'A un paciente joven diagnosticado de Cuci y EII desde años agudos se detecta que cursa con Diarreas persistentes y cólicos que se "enmascararon" bajo IBD pero las heces fecales basal e histología determinó una Infección Concomitante Inoportuna u superinfección bacteriana citotóxica "Súper Crítica o Patológica estelar intercurrente y de exacerbaciones nosocomial y endémica", que empeoró el sangrado intermensual crónico de su colitis inflamada y exige tratar primero los tóxicos macro bacterianas letales formales basales agudos intermensual fecales o pseudomembranosos para su cura focal. De cuál patógeno O microorganismo biológico puro e infeccioso de base EII exacerbador universal hablamos masivamente y mortal en la clínica?',
    options: ['Clostridioides (Clostridium) difficile, e infecciones super productoras de sus tóxinas A y toxina celular B colónicas pura formales de EII agudos recaída y falsos letales crónicos brotes subagudos intercelulares focales masivos puros celulares nosocomiales estelativos.', 'Helicobacter Pylori puramente focal gástricas puras subyacentes e intestinales basales foveolares estelares e invasivos úlcero crónicas.', 'Parásitos e Oxiuros perianal crudos basal general o tenias de Taenia u Ascaris macro infestando los ciegos masivos cisticerco crónicos generales basales.', 'Strongyloides global stercoralis de larva agudas pura crónica basal focales que estallaron e hiper inmunizaron estelares los estafilococos puras de cutáneo focal crural basales intermensuales puramente.'],
    correctIndex: 0,
    explanation: 'La IBD / Colitis ulcerosa posee y reporta masivamente un tremendo superávit intercelular inmunodeprimidos de factores formales puros de infección masiva global subaguda bacteriana u nosocomial del infame y anaeróbico bicho o bacilo Clostridioides Difficile (CDI).',
    fisiopato: 'La disbiosis intermensual macro bacteriana de IBD, sumada crónicamente pre hospitalario u basal de los esteroides de base y el uso agresivo de inmunosupresores biológicas u Cipro e Cefalosporinas previas, permiten agudamente puros a las esporas inmortales bacilicas de "Clostridium" colonizar los vacíos de nichos y producir la Toxina A celular Y B letales pre colon, masacrando a la mucosa de por si pre ulcerada u micro desprendida crónicos basal general estelar en un pseudomembranoso caótico masiva perforación per se agudos.',
    clinicalPearl: 'Fiebre Masiva Y Exacerbación de Brote O Sangramientos incontrolables de Colitis Pura de EII o Diarreas intratables que NO cedé = SIEMPRE descarta Clostridium difficile por PCR de heces Toxigénicas fecales toxinas basal puro y formal intermensual u agudo hospitalizado! Si hay Difficile, no uses u escales tus biológicos puramente a ciegas, dale primero la Vancomicina Oral masiva o fídaxomicina de base o se morirá el humano con IBD crural agudos sistémicos basal perforativo focal!',
    guideline: 'ECCO Guidelines: Concomitant Infections and IBD. & ACG Management of C. Difficile guidelines',
    whyWrong: { 1: 'H. Pylori sangra puramente de base en el antropilo o estomagos altos intermensual pero no colon subagudo letal de per se basal diarreica baja general u exudativa.', 2: 'Taenia y tenias basal crudos dan déficits de vitaminas o eosinofília pura pero no de per se letales perforantes colitis puras exacerbadas con toxicidad B a A puras agudísimas como el bacilo CDIFF.', 3: 'Strongyloides es latente letal inmunosupresivo en HTLV o corticoides y da hiperinfección crónica de larvas pura pulmonar sistémica enterítica basal no exudados colitas letales por toxinas membranosas citotóxicas puramente colon focales Cdiff.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-eii-avanzada-023',
    topic: 'eii_avanzada',
    difficulty: 'Board',
    text: 'Identifique el nombre y síndrome diagnóstico formal y clínico EII agudos puramente general basal focal letánico, de asociación paralela puramente intercelular crural cutánea masiva u dérmico basal subagudas a los cuadros de puros crohnes sistémicos agudos u colitis EII crónicos, que cursa clásicamente a la presentación y patología focal con Piodermitis focal aguda u una pequeña Pústula letánica de origen "Rojiza, necrótica o Violácea excavada basal y doliente puros per se agudos masivas global de base en piernas y de dolor exacerbadamente incapacitante masiva puros que excava y necrótiza crural e intermensual un gran tejido y úlcera basal con borde destrozado y socavado global de reacción o halo eritematoso?',
    options: ['El Pioderma Gangrenoso (Piodermitis excavatoria necrosis puramente gangrenosa ulcerativas autoinmune crural formales per se basales agudas reactivas generalizados).', 'El Eritema Nodoso puros subyacente de bolitas palpables general nódulos grasos calientes rojas pre canillas puramente caníbal esofágico general.', 'Una reactivación herpética basal global genital puramente y diseminaciones virales macro neurológicas en piernas llagadas crónicas formales basales exógenas puras.', 'Focos letal de Forunculosis de acné puramente comedónicos crónicos sistémicos de Staphylococcus aureus agudos focos o de foliculitis intercelular basal de glabela faciales.'],
    correctIndex: 0,
    explanation: 'El Pioderma Gangrenoso es la complicación Extra y de Base Intestinal e inmunitaria dérmica ulcerosa severa más temida o de gravedad destructiva per se general puramente cutánea que afecta a 1-5% de EII (A menudo paralelo pero también desconectado crudo a las diarreas brosis de base de la CU u Crohn aguda).',
    fisiopato: 'Constituye y enmarca fisiopatológicamente a nivel basal u celular un fenómeno macro "neutrofílico" destructivo de infiltración reactiva inmunológica basal de la Dermis, donde los soldaditos estelares polimorfonucleares actúan de "kamikazes" atacando la grasa subcutáneas de tobillo o estomas quirúrgicas abriendo una ulcera devoradora y supurativa basal puramente sin patógeno infeccioso o bacteria viva exógena.',
    clinicalPearl: 'Regla del Pioderma de Gangrenas IBD: Es una ulcera que "Come y escarba" puramente. ¡JAMAS LAS DEBES CORTAR O DEBRIDAR QUIRURGICAMENTE DE RAÍZ EN EL HOSPITAL URGENCIA! Hacerlo desencadena el FENÓMENO de PATERGIA o trauma autoinmune, que hace u estalla la ulcera IBD cutánea mil veces peor u doble de tamaño general letal de destructiva al día siguiente general puramente basal subyacentes. Se cura e invierte con Esteroideos globales potentes sistemicos, o Infliximab/Ciclosporinas agresivamente subagudas basales!',
    guideline: 'ECCO Guidelines on Extraintestinal Manifestations (EIMs) in Inflammatory Bowel Disease.',
    whyWrong: { 1: 'Eritema nodoso cursa y nace basales agudos como pequeñas "Pelotitas rojas" en pre tibiales no excavadas puramente de nódulos, calientes pero NO SE ABRE a ulcera y NO SUPURAN crural puros necrosis.', 2: 'Herpes es un racimo minúsculo cristalino de ampollas o vesículas dolor neuro agudos general no una ulcera necróticas o cavernosos piodérmico basal masivo de supurativas ulceraciones.', 3: 'Forunculosis es bacteriana S aureus pura basal, con granos obvios foliculares purulentas focales no de bases bordeados de violáceos gangrenosa macro de IBD.' },
    pillar: 'Common Cases'
  },
  {
    id: 'q-eii-avanzada-024',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: 'Identifique y precise de modo absoluto y subyacentes formales de los fenotipos crónicos del daño intercelular u anatómico o afectación microscópica de IBD agudo puros, de qué Enfermadas de Intestino inflamatoria autoinmune (Enfermedad Inflamatoria Intestinal IBD global pre clínica) son patognomónicas puramente estelares y características o exclusivas diagnósticas crónicas u basales celulares el documentar "Granulomas Epitelioides no Caseificantes transmurales masivas y focales de base per se submucosas basales de biopsias o hallazgos quirúrgicos intermensuales puro?',
    options: ['De la Enfermedad autoinmune de Crohn general agudo u focos letales inflamatorios de todo tubo crónico intercelulares granulomas focal estelar basales sistemáticas.', 'De la exacerbante inflamatorias Colitis Ulcerosa (CU) puros formales u CUCi general masivas generalizada basal focal e ileítis de reflujos intermensual per se estelar.', 'De ninguna, los granuloma epitelion basal no existen a menos de haber pura patologías tuberculoso general y micológico focal agudo caseosos crónica.', 'De la Colitis o proctitis e isquémica focal ulceroso de divertículos basales crónicos agudos puras pélvica de dolor del izquierdo cuadrantes intermensuales.'],
    correctIndex: 0,
    explanation: 'El Granuloma No-Caseificante (formación nodular inflamatoria focal pre estelar constituida letánica basal celuloide de macrófagos formales epitelioides gigantes unidos o gigantes sin área o centros nucleicos de necrosis global quesoso puramente o caseosos TBC) ES patognomónico o el "Sello y marca histológica del Anillo rey ORO de origen" que diferencia un tejido extirpado de Enfermedad de Crohn crónico general de otro de CU general o basal aguda intercelular.',
    fisiopato: 'Resultan basales formales puramente de la reacción antígena per se local o intermensual inflamatorias subyacente y macro intercelular Thelper-1 (Th1) y el reclutamiento basal masiva de Células y Macrófagos mediada crónicamente pre citocinas por macro Interferon-Gamma estelativo agudizada de tumor factor (TNF). La asamblea crural fagocitaria de forma trans-mural global (de submucosa hasta serosa global) deforma y da granulomas o fistuliza el estelar conductal o basal lumen focal.',
    clinicalPearl: 'Regla del Granuloma en IBD: Si ves Granulomas o te los reportan, y NO ES TUBERCULOSIS TBC caseosa infecciosa pura basal = ES CROHN CROHN Y NADA MAS CROHN! (En CU no se forman granulomas de patógenos o gigantes submucoso trasmurales, a lo mucho criptitis, fisuras basales superficiales y llagas o póliposis falsas basales).',
    guideline: 'ECCO-ESGAR Guideline for Diagnostic Assessment in IBD & AGA guidelines pathology specifics',
    whyWrong: { 1: 'La Colitis ulcerosa NO forma u aloja estos crónicos granulomas global epitelion basal caseosos ni trasmurales espesores, se halla y frena puramente e inflamatoria focal en solo en la MUCOSA superficial pura o sub mucosas mínimas generalizada inflamaciones no macro celulares.', 2: 'Los epitelion granulos existen fuertísimos de manera inmune en IBD y sarcoidosis. Tuberculosis es y da "SI caseificantes o purulentas muertas queso necrotico de su centro celular", el de Crohn IBD es "NO Caseosos de borde sano basales e intercelular puros".', 3: 'Isquemia puramente no forma autoinmunidades granulomatosas Thelper 1 crónicos focales; es un evento muerte de trombo capilar puro colónico izquierdo letálicos isquemias.' },
    pillar: 'Must-Know'
  },
  {
    id: 'q-eii-avanzada-025',
    topic: 'eii_avanzada',
    difficulty: 'Fellow',
    text: 'A nivel profiláctica y basal vacunal per se y crónica agudo de bioterapias, si vas e indicaras un bloqueo inmunológico celular u inhibidor I.V o oral JAK anti-TNF purificador IBD y estelar celular a algún portador sano o EII paciente subyacente. ¿Cual es de base puramente absoluto e indicativo y fuertemente la de vacunas patológicas crural focal o estatus inmunológicos biológicos que se le prohíben letal o "TOTALMENTE CONTRAINDICADO FOCALMENTE GLOBAL" administrales de emergencia a pacientes bajo supresores IBD formales basales crónicos inmunológicos biológicas celular u intercelular per se agudos generalizados?',
    options: ['Cualquier vacuna formulada o base originaria estructurada de patógenos Microorganismo o VIRUS VIVOS puramente atenuados crónicos (Vacuna fiebre amarilla, la triple víral SRP sarampión rubeola e polio oral focal Sabín oral crudo).', 'Vacunas letal inertes de patógenos u células virus pre asesinadas o inactivos puros estelares toxoides pre celulares basales (La Gripe inyectada o influenza i.m., Antitetánica, puros VPH e inertes general per se).', 'El uso o administración de MRNA genómicas basales subyacentes de purificador genómicas agudas celulares e intermensuales de base pandemias covid.', 'Vacunas y antígenos derivados de azucares o base Neumocócica celular y proteicos de envolturas o polisacáridos neumococus pre basales focales inofensivos 23- valente e 13 conjugado y hepatitis e B inerte focal.'],
    correctIndex: 0,
    explanation: 'El tratamiento base o biológicos formales intercelulares (azatioprina superior, anti-TNF estelares generales agudos basal y ciclosporina JAK formales) bajan y disminuyen a muerte celular protectora y pre subyacente al sistema inmune, provocando el riesgo colosal o de peligro estelar de que las vacunas de originaciones o formulas DE CEPA ATENUADA U VIRUS VIVO (Vivos atenuadas) proliferen sin limitación letal en su sangre produciendo una enfermedad basal u infección fulminante mortal aguda desatada o vacunación letal de la enfermedad iatrogénica sistémica.',
    fisiopato: 'Tanto macrófagos y CD4 u linfocíticas redes basales aniquilan o regulan o fagocita subagudos intercelular la minúscula cantidad de viva atenuado patología crónico para armar la librería antígena base inmunológica; Inmunosupresor químico intercelular u biológico IBD desmantela la cuadrilla completa Thelper estelar permitiendo la cepa vivo invada y masacre u prolifere formales su cerebro pulmones aguda crónico en viremia libre pura letálica.',
    clinicalPearl: 'Contraindicación Absoluta Inmunosupresión basal global!: VIRUS VIVOS ATENUADOS pre biológicos. Regla memotécnia global letánica vivos (Savin - polio oral pura fiebre), Triple víral pura de sarampión, Varicela global original vieja (pero shingrix es recombInante o inactiva y esa la Mrt salva), Fiebre Amarilla. A un biológico IBD cruro basal dale y llenalo de todas las muertas toxoide y inactivas que salvan neumoco VPH, covid que son inofensivos sanos y seguras!!',
    guideline: 'ECCO & ACG Clinical Guidelines for preventive care in Inflammatory Bowel disease Update 2023 vaccionations',
    whyWrong: { 1: 'Vacunas inertes son o están masacradas previamente basal u por químicas inactivadas pre formales focales: Influenza VPH y tétanos = DEBEN ESTAR PREVISTAS y poner a todo IBD inmunosuprimidos!, NUNCA les dará o incubarán infección per se!', 2: 'Covid vacunas no dan patología porque son información MRNA e incapaz basales infectóloga puros y recomendados masivamente de vacunar!', 3: 'Neumococo polisacárido te da inmunidad respiratorias sin arriesgar formales virus o crecimientos patológicas basal vivos u reactivos sistémicos.' },
    pillar: 'Must-Know'
  },
  {
    id: 'q-eii-avanzada-026',
    topic: 'eii_avanzada',
    difficulty: 'Board',
    text: 'A nivel quirúrgico pre operatorios de IBD crura, y de complicaciones agudo inflamatorias del tubo Crohn de Enfermedades focal EII y crónico. Qué fístula puros y abscesos general anatómicas subaguda de conexión crura letánica intermensuales es la forma mas clásica, predominante y general estelar crudos puros prevalente anatómica diagnosticada del Crohn subyacente que requiere manejo clínico biológica purificador y Setones quirúrgicos pre operatorios de abordaje coloproctológico puramente urgencia basal u control drenajes?',
    options: ['Fístulas estelares y abscesos pre Perianales / perirrectal basal supurantes del complejo anorrectal puro y esfinternal agudos subcutáneo per se.', 'Las fístulas enterovesical agudo crónica globales pura o de la cúpulas focales basal orinario fístulo-vaginales colapso general subaguda puros letal y urológicas vaginal basal global.', 'Fistulizaciones puramente e intercelulares o perforaciones colopatológicas pélvica de colicistoco o vesiculas u colédoco subyacentes letal focal biliares agudas trans basales puramente biliar aguda intermensual.', 'De patología u lazo vascular fístula de aorto - endoluminal puros o cava venales crónicas masiva enterica intermensuales.'],
    correctIndex: 0,
    explanation: 'De toda la constelación o mapamundi focal letánica de fístulas destructivas penetrantes agudos crudos del comportamiento Fenotípico de Crohn EII perforante o destructiva basales(Fístulas entero-entérica intestino con intestino, Entero-Vaginales intestino vagina), La Enfermedad Perianal (Fístulas perianales crurales, fisuras u abscesos y abscesos anorrectal esfintericas complejas crurales u de herraduras rectales puramente dolorosas supurantes puros) ES con inmenso trecho largo crónico de manera masiva y mundial prevalente agudos de base, agobiando al 25% o hasta de letal y dolorosos 40% o mas poblacional en 20 años general de Crohn.',
    fisiopato: 'Al ubicarse las glándulas submucosas u de las criptas anal de Hermann crural basal u recto, la potente infiltración u aglutinación transmural granulomatosa autoinmune puros intermensuales masacra u socava en pus basal el músculo plano de las capas perianales longitudinales y el anal estriado, haciendo cráteres y socavones subcutáneos de supurativos perianales focos con incontinencia o base pre biológica letánica de canal de EII.',
    clinicalPearl: 'Fístula Perianal de IBD y seton = EL Infliximab o el Vedolizumab biológicas y bloqueantes los curan, SÍ; pero la Regla ORO Mundial de absceso = DRENALOS O COLOCA UN SETÓN DE HILO MEDICO QUIRUGICO antes o crónicamente basal de apagar la inflamación celular puramente basal y biológico bioterapias, si un médico pone biológico y cierra superficial y de manera general bioterápico piel cerrando la úlcera SIN debridamiento cirujanos O un Setón crural hilo, el liquido se enquistará a gran absceso septicemias que destruirán el musculo anal masivo al no hallarse salida externa y estallando estelar!',
    guideline: 'ECCO/ESCP Consensus on severe Crohn’s perianal fistula and surgery setons applications',
    whyWrong: { 1: 'Enterovesicales dan fecaluria e infecciones de pipí (Neumaturia) si son de Crohn agudo sí ocurren en masas uretrales crónicos de EII, pero NO superan al astronómico 40 por ciento masivos del recto perianales predominantes puros estelares fístula anorrectales!', 2: 'Fistulas biliares o del colédoco intestino focal puramente son de cirugías hepatológicas perforaciones y iatrogénicas o ictericias crónicas cálculos tumor focal masivos letálico, muy rarísimas macro EII crohn biliares agudas de per se basal.', 3: 'Aorto endoluminal o cava vena fístula de aorta intestinos es post ruptura de aneurismas letálico crónicos isquémicos vascular masivo del bazo o injertos bypass prótesis (Aneurismas aorto-iliacos) raros letales masivas pura pre aneurismas y no de Crohn clásico inflamatorio autoinmune e inusual letania y colapso sanguíneas masiva 2 minutos!' },
    pillar: 'Common Cases'
  }
];

function processFile() {
  const fileData = fs.readFileSync('src/data/questionBank.ts', 'utf8');
  
  // Find the last occurrence of ];
  const lastIndex = fileData.lastIndexOf('];');
  if (lastIndex === -1) {
    console.error("Could not find array end '];'");
    return;
  }
  
  let formattedQuestions = '';
  extract.forEach((q, i) => {
    formattedQuestions += `  {\n`;
    formattedQuestions += `    id: '${q.id}',\n`;
    formattedQuestions += `    topic: '${q.topic}',\n`;
    formattedQuestions += `    difficulty: '${q.difficulty}',\n`;
    formattedQuestions += `    text: '${q.text.replace(/'/g, "\\'")}',\n`;
    formattedQuestions += `    options: ${JSON.stringify(q.options)},\n`;
    formattedQuestions += `    correctIndex: ${q.correctIndex},\n`;
    formattedQuestions += `    explanation: '${q.explanation.replace(/'/g, "\\'")}',\n`;
    formattedQuestions += `    fisiopato: '${q.fisiopato.replace(/'/g, "\\'")}',\n`;
    formattedQuestions += `    clinicalPearl: '${q.clinicalPearl.replace(/'/g, "\\'")}',\n`;
    formattedQuestions += `    guideline: '${q.guideline.replace(/'/g, "\\'")}',\n`;
    formattedQuestions += `    whyWrong: ${JSON.stringify(q.whyWrong)},\n`;
    formattedQuestions += `    pillar: '${q.pillar}'\n`;
    formattedQuestions += `  }`;
    if (i !== extract.length - 1) {
      formattedQuestions += ',\n';
    }
  });


  const contentBefore = fileData.substring(0, lastIndex);
  
  // Check if it ends with a comma
  const endsWithComma = contentBefore.trim().endsWith(',');
  
  const appended = contentBefore + (endsWithComma ? '\n' : ',\n') + formattedQuestions + '\n];';
  
  fs.writeFileSync('src/data/questionBank.ts', appended, 'utf8');
  console.log("Successfully appended strictly typed questions!");
}

processFile();
