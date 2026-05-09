import { Question } from '../types/quiz';

export const PRELOADED_QUESTIONS: Question[] = [
  {
    "id": "q-anticoagulados-001",
    "topic": "endoscopia_anticoagulados",
    "difficulty": "Staff",
    "text": "Escenario Periendoscópico #1. Según las guías actuales (ASGE / ESGE) para el manejo de pacientes con terapia antitrombótica, si un paciente toma Clopidogrel por un stent coronario colocado hace 3 meses y se va a someter a procedimientos endoscópicos de ALTO riesgo de sangrado (como polipectomía de pólipos colónicos grandes o ECPRE con esfinterotomía), ¿cuál es la conducta más adecuada a seguir?",
    "options": [
      "Suspender el Clopidogrel 5 a 7 días antes, previa consulta con cardiología para evaluar el reemplazo transitorio o puente, ya que el riesgo de trombosis del stent aún es muy alto",
      "Continuar ininterrumpidamente el Clopidogrel, porque las resecciones mucosas grandes se consideran de bajo riesgo sangrante universal",
      "Suspender inmediatamente la Aspirina y mantener el Clopidogrel inalterable durante todo el perioperatorio",
      "Realizar la endoscopia con normalidad y si hay un sangrado, administrar plasma fresco congelado directamente por vía venosa"
    ],
    "correctIndex": 0,
    "explanation": "Para procedimientos de alto riesgo de sangrado en pacientes con stents coronarios recientes (< 6-12 meses), el Clopidogrel no puede suspenderse a la ligera por el altísimo riesgo de trombosis del stent. Se requiere consulta obligatoria multidisciplinaria con cardiología.",
    "fisiopato": "Las tiendopiridinas como el Clopidogrel inhiben irreversiblemente el receptor plaquetario P2Y12. Las plaquetas viven 7-10 días, por lo tanto, se necesitan 5-7 días para regenerar un pool funcional suficiente que permita una coagulación segura ante grandes resecciones mucosas.",
    "clinicalPearl": "Estándar de Oro para Antiagregantes: NO detenga inhibidores P2Y12 (Clopidogrel, Ticagrelor) si el paciente tuvo Síndrome Coronario Agudo/Stent hace <12 meses sin aval cardiológico explícito o plantee posponer la endoscopia si es electiva.",
    "guideline": "ASGE/ESGE Guidelines on Endoscopy in Patients on Antiplatelet or Anticoagulant Therapy.",
    "whyWrong": {
      "1": "Continuarlo para pólipos grandes (riesgo sangrante >1.5%) desencadenaría una catástrofe hemostática en el lecho local, con o sin clips.",
      "2": "Por regla general y sistemática, la aspirina se MANTIENE para virtualmente todos los procedimientos endoscópicos, incluso los de alto riesgo, salvo contadas excepciones (disección endoscópica submucosa masiva).",
      "3": "El plasma fresco congelado no tiene plaquetas y no revierte en lo absoluto la antiagregación plaquetaria irreversibles producida por los antagonistas P2Y12."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-eii-avanzada-020",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "Caso de EII Refractaria #20. En un paciente con Enfermedad de Crohn fistulizante perianal compleja y severa, que ha fallado a dosis optimizadas de anti-TNF (Infliximab) comprobadas con niveles séricos terapéuticos y sin anticuerpos, ¿cuál es el mecanismo de acción de la siguiente terapia biológica de rescate recomendada en guías (Ustekinumab)?",
    "options": [
      "Inhibición de las subunidades p40 compartidas por las interleucinas IL-12 e IL-23",
      "Bloqueo directo de las integrinas α4β7 en el endotelio vascular intestinal",
      "Inhibición oral de las Janus Quinasas (JAK) 1 y 3 en los linfocitos periféricos",
      "Anticuerpo monoclonal quimérico que neutraliza el factor de necrosis tumoral alfa (TNF-α)"
    ],
    "correctIndex": 0,
    "explanation": "Ustekinumab es un anticuerpo monoclonal IgG1κ humano que se une específicamente a la subunidad proteica p40, compartida por las citoquinas IL-12 e IL-23, impidiendo su interacción con el receptor e inhibiendo cascadas proinflamatorias TH1 y TH17.",
    "fisiopato": "Al bloquear IL-12 e IL-23, se detiene la polarización de células T vírgenes hacia fenotipos Th1 y Th17, linajes celulares hiperactivos cruciales en la patogénesis de la inflamación transmural granulomatosa del Crohn.",
    "clinicalPearl": "Falla primaria o secundaria a anti-TNF en Crohn con niveles óptimos de la droga = Cambiar de familia u objetivo (out of class switch), como Ustekinumab (anti-IL12/23) o Vedolizumab (anti-integrina); para fistulizante Ustekinumab suele tener mejor perfil empírico sistémico.",
    "guideline": "ACG Clinical Guidelines: Management of Crohn’s Disease in Adults.",
    "whyWrong": {
      "1": "El bloqueo selectivo de las integrinas α4β7 es el mecanismo de acción del Vedolizumab, que impide el homing linfocitario al intestino.",
      "2": "Los inhibidores de JAK (Tofacitinib, Upadacitinib) son moléculas pequeñas orales, altamente eficaces en Colitis Ulcerosa y algunos en Crohn, pero no bloquean p40 IL12/23.",
      "3": "La neutralización del TNF-α es precisamente el mecanismo que ya se demostró ineficaz (falla) en este paciente bajo Infliximab, el cual es quimérico."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-muerte-subita-015",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "Emergencia Gastrointestinal Letal #15. Paciente cirrótico en sala de urgencias presenta hematemesis masiva y compromiso hemodinámico. Se le realiza endoscopia de urgencia a las 6 horas logrando ligadura de várices esofágicas sangrantes, pero 4 días después en terapia intensiva presenta súbito shock séptico severo y fallece a las pocas horas. Sabiendo el factor de riesgo de los cirróticos que sangran, ¿cuál es la medida profiláctica de oro que salva vidas y disminuye la mortalidad al prevenir fuertemente esta complicación, la cual debería haberse iniciado desde su llegada?",
    "options": [
      "Uso de antibióticos profilácticos intravenosos (ej. Ceftriaxona o Quinolonas) al ingreso, preferentemente por 5 a 7 días",
      "Perfusión estrictamente precoz y profiláctica universal de Terlipresina endovenosa para detener la translocación endotoxínica esplácnica",
      "Administración profiláctica de factores de coagulación crioprecipitados masivos para contrarrestar la isquemia mesentérica letal pre",
      "Descompresión urgente universal sistemática con TIPS transyugular ciego en todo paciente que ingresa al hospital letálico estelar"
    ],
    "correctIndex": 0,
    "explanation": "El sangrado variceal en un cirrótico incrementa drásticamente el paso de bacterias desde el intestino (translocación bacteriana), lo cual lleva a infecciones letales como peritonitis bacteriana espontánea (PBE) o sepsis, y resangrado temprano.",
    "fisiopato": "La hemorragia compromete la perfusión y la barrera de la mucosa intestinal, e induce inmunoparálisis inducida por la cirrosis. Las bacterias entéricas invaden la sangre masivamente exacerbando el colapso endotelial e instigando un círculo vicioso de CID, vasoplejía o sepsis.",
    "clinicalPearl": "Todo paciente cirrótico que sangra OBLIGATORIAMENTE debe recibir profilaxis antibiótica (Ceftriaxona usualmente) por 5 a 7 días; reduce las infecciones, el resangrado temprano e impacta espectacularmente en la reducción de mortalidad global.",
    "guideline": "Baveno VII y AASLD Guidelines on Management of Bleeding and Varices.",
    "whyWrong": {
      "1": "La Terlipresina u Octreotide reduce la presión portal y frena el sangrado, pero no previene directa ni netamente el desarrollo de infecciones entéricas generalizadas por translocación, y por sí sola no erradica el foco letal bacteriano.",
      "2": "La reposición empírica masiva de plasma u crioprecipitados sin laboratorios guiados por TEG eleva abruptamente la presión portal por hipervolemia ocasionando dramáticamente resangrado fulminante fatal en las primeras horas.",
      "3": "TIPS preventivo sistemático (Early TIPS) es recomendado solo para cirróticos con alto riesgo (Child-Pugh C <14, o B activo sangrando en endoscopia) y no como intervención \"ciega, primaria o preventiva universal\" en todo ingresado."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-protocolo-simulacro-012",
    "topic": "protocolo_simulacro",
    "difficulty": "Staff",
    "text": "Test Integral de Simulacro del Board #12. En un entorno de guardia intensiva, un paciente de 75 años internado por neumonía severa presenta bruscamente en su día 6 heces líquidas explosivas, acuosas verdes, dolor cólico generalizado, y en un laboratorio de urgencia el recuento leucocitario asciende a 35,000 células/mm³ sin sangrado evidente. Teniendo en cuenta la presentación de un cuadro tóxico nosocomial, ¿cuál es el paso de protocolo estricto más importante que debe priorizarse inicialmente junto al aislamiento de contacto y testeo rápido de toxinas A/B y GDH?",
    "options": [
      "Suspender el antibiótico causante e iniciar Vancomicina o Fidaxomicina oral empírica inmediata dados los factores de gravedad",
      "Realizar colonoscopia descompresiva de urgencia para excluir megacolon tóxico y documentar membranas blanquecinas fibrinosas",
      "Iniciar Metronidazol Intravenoso a dosis de 500 mg como monoterapia empírica pura sistémica",
      "Solicitar coprocultivo rutinario universal y cultivo sanguíneo viral, difiriendo terapias de fagos fecales al resultado a las 48 hs"
    ],
    "correctIndex": 0,
    "explanation": "La infección grave por C. difficile (diarrea acuosa nosocomial con >15,000 blancos en un anciano medicado con antibióticos) constituye una urgencia médica; se debe suspender en lo posible el agente instigador e iniciar de inmediato antibióticos luminales (Vanco oral/Fidaxo).",
    "fisiopato": "La alteración y el exterminio total nosocomial en días de la microbiota colónica (disbiosis) permite la germinación selectiva de esporas de Clostridioides difficile, y sus toxinas A (enterotoxina) y B (citotoxina) desencadenan inflamación letal brutal colónica formadora a minutos de las pseudomembranas letales.",
    "clinicalPearl": "Diarrea de hospital + leucocitosis (ej. > 15K) o falla renal incipiente = Cuadro severo por C. difficile. El tratamiento es Vanco ORAL o Fidaxomicina. El Metronidazol ya NO es línea inicial salvo desabastecimiento.",
    "guideline": "IDSA/SHEA y ACG Guidelines for Clostridioides difficile Infection.",
    "whyWrong": {
      "1": "La colonoscopia en un cuadro grave aumenta significativamente el riesgo letal de perforación iatrogénica del colon isquémico/tóxico inflamado; si hay sospecha de megacolon, la radiografía o TAC es preferida estelar como diagnóstico de imagen.",
      "2": "El Metronidazol sea ORAL o IV tiene una eficacia inferior comprobada comparado a Vanco o Fidaxo en los estudios basales crudos; su uso actual fue relegado y no es primera línea ni recomendación prioritaria pura para un cuadro severo puro (>15,000 leucocitos).",
      "3": "Nunca se debe retrasar la terapia vital o profilaxis entérica esperando coprocultivos que duran 72 horas per se, y ante la fuerte sospecha sistémica, frenar el clostridium luminal salvaguarda el colon asintomático letálico generalizando vital pre."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-biologia-006",
    "topic": "biologia",
    "difficulty": "Fellow",
    "text": "Pregunta de Biología Molecular en Gastroenterología #6. Respecto a la patogenia molecular del cáncer colorrectal, ¿cuál de las siguientes alteraciones génicas se asocia clásicamente al desarrollo de inestabilidad microsatelital (MSI) por defectos en la reparación del ADN (Mismatch Repair)?",
    "options": [
      "Mutaciones o silenciamiento epigenético de los genes MLH1, MSH2, MSH6 o PMS2",
      "Mutación exclusiva del gen APC iniciador en la vía clásica de adenoma-carcinoma",
      "Sobreexpresión de la oncoproteína HER2/neu en membrana",
      "Translocación t(9;22) formando el gen fusión BCR-ABL"
    ],
    "correctIndex": 0,
    "explanation": "Los defectos en los genes reparadores del ADN (MMR) como MLH1, MSH2, MSH6 o PMS2, ya sea por mutación germinal (Síndrome de Lynch) o hipermetilación somática (Lynch-like/esporádico), causan inestabilidad microsatelital (MSI-H).",
    "fisiopato": "Al no poder reparar errores durante la replicación del ADN, se acumulan mutaciones frameshift en secuencias repetitivas (microsatélites), promoviendo la carcinogénesis acelerada con alta inmunogenicidad (neoantígenos).",
    "clinicalPearl": "Cáncer de colon derecho, joven, o con mucina abundante = Alta sospecha de MSI. Tienen excelente respuesta a la inmunoterapia (Inhibidores de checkpoint) y no responden a 5-FU adyuvante en estadio II.",
    "guideline": "NCCN Guidelines: Colon Cancer y Evaluación Genética (Síndrome de Lynch).",
    "whyWrong": {
      "1": "El gen APC mutado causa poliposis adenomatosa familiar (FAP) y es el iniciador de la vía clásica de inestabilidad cromosómica (CIN), que da cuenta del 85% de los cánceres esporádicos, sin afectar primariamente los microsatélites.",
      "2": "La sobreexpresión de HER2 se busca rutinariamente para terapia dirigida pero en metástasis de cáncer gástrico o esofágico (y mama), no es el factor primario o central desencadenante del MSI focal colónico.",
      "3": "El cromosoma Filadelfia BCR-ABL causa la leucemia mieloide crónica, siendo una aberración hematológica totalmente ajena a la ontogenia epitelial del tumor colorrectal de base y celular."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-cancer-gastrico-008",
    "topic": "cancer_gastrico",
    "difficulty": "Fellow",
    "text": "Pregunta sobre cáncer gástrico #8. En el abordaje diagnóstico inicial de un paciente de 60 años con dispepsia y pérdida de peso, la endoscopia revela una úlcera de aspecto maligno. ¿Qué sistema de clasificación se emplea comúnmente para categorizar histológicamente el adenocarcinoma gástrico?",
    "options": [
      "Clasificación de Lauren (tipo intestinal o difuso)",
      "Clasificación de Forrest",
      "Clasificación de Los Ángeles",
      "Clasificación de Chicago 4.0"
    ],
    "correctIndex": 0,
    "explanation": "La clasificación de Lauren divide el cáncer gástrico principalmente en tipo intestinal (bien diferenciado, asociado a metaplasia/atrofia y H. pylori) y tipo difuso (células en anillo de sello, factor genético predispuesto).",
    "fisiopato": "El tipo difuso tiene mutaciones frecuentemente en E-cadherina (CDH1), perdiendo adhesión intracelular, mientras el intestinal sigue la cascada de Pelayo Correa (inflamación > atrofia > metaplasia > displasia > cáncer).",
    "clinicalPearl": "Cáncer Gástrico + Células en anillo de sello = Tipo difuso, peor pronóstico, tiende a linitis plástica.",
    "guideline": "NCCN Guidelines: Gastric Cancer.",
    "whyWrong": {
      "1": "Forrest estratifica el riesgo de sangrado de úlceras pépticas, no tipifica histológicamente el cáncer de estómago.",
      "2": "Los Ángeles gradúa la severidad endoscópica de la esofagitis péptica por reflujo gastroesofágico.",
      "3": "Chicago 4.0 estandariza la manometría de alta resolución para diagnosticar alteraciones motoras del esófago (ej. acalasia)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-celiaca-012",
    "topic": "celiaca",
    "difficulty": "Fellow",
    "text": "Pregunta sobre Enfermedad Celíaca #12. Una mujer de 30 años presenta anemia ferropénica refractaria, astenia y distensión abdominal. Se sospecha enfermedad celíaca. Teniendo en cuenta las guías diagnósticas, ¿cuál es el anticuerpo más precoz, de mayor sensibilidad técnica global y que se solicita como tamizaje de primera línea?",
    "options": [
      "Anticuerpos IgA anti-transglutaminasa tisular (tTG-IgA)",
      "Anticuerpos IgG anti-gliadina deaminada sintética",
      "Anticuerpo anti-endomisio (EMA) tipo IgE",
      "Anticuerpos IgA anti-Saccharomyces cerevisiae (ASCA)"
    ],
    "correctIndex": 0,
    "explanation": "Los anticuerpos antitransglutaminasa tisular IgA son universalmente indicados como el test de cribado inicial más sensible, costo-efectivo y preciso para adultos.",
    "fisiopato": "La enzima transglutaminasa tisular en la lámina propia deamina la gliadina del gluten incrementando brutalmente su afinidad por el HLA-DQ2/8; los linfocitos B del paciente general produce autoanticuerpos IgA contra dicha enzima desencadenando destrucción enterocitaria focal.",
    "clinicalPearl": "Sospecha de celiaquía = Pedir screening inicial con IgA total + tTG-IgA. Si la IgA total es deficiente, recién pedir el panel versión IgG (tTG IgG / DGP IgG).",
    "guideline": "ACG/AGA Clinical Guidelines on the Diagnosis and Management of Celiac Disease.",
    "whyWrong": {
      "1": "La gliadina deaminada versión IgG es muy específica y obligatoria sólo en el 2% de los celíacos que nacen con un déficit absoluto o genético puro severo de anticuerpos séricos totales IgA.",
      "2": "El Endomisio EMA es IgA, no IgE (el cual sería clásicamente general de pura base cruzada alérgica alimentaria, pero la celiaquía no es una alergia sino inflamación celular). Es confirmatorio pero caro y observador dependiente.",
      "3": "ASCA es el biomarcador sérico estrella focal serológico para orientar precozmente la Enfermedad de Crohn (IBD), no la celiaquía entérica letal y luminal base pura gluten."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-007",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #7: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-008",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #8: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-009",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #9: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-010",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #10: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-011",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #11: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-012",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #12: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-013",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #13: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-014",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #14: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-015",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #15: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-016",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #16: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-017",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #17: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-018",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #18: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-019",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #19: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-020",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #20: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-021",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #21: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-022",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #22: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-023",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #23: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-024",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #24: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-025",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #25: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-026",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #26: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-027",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #27: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-028",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #28: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-029",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #29: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-cancer-esofago-030",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "Caso Clínico Oncológico #30: En un paciente de 65 años con diagnóstico reciente de cáncer de esófago, ¿qué factor histopatológico y de etapificación define principalmente su pronóstico y conducta terapéutica a seguir?",
    "options": [
      "El grado de invasión en la pared esofágica (T) y el compromiso linfático regional (N)",
      "La presencia concomitante de una hernia hiatal no complicada",
      "Historia de infección gástrica por Helicobacter pylori en la biopsia",
      "Desarrollo de infiltrado eosinofílico leve en mucosa próxima"
    ],
    "correctIndex": 0,
    "explanation": "El pronóstico del cáncer de esófago depende fundamentalmente del estadio TNM, en especial la profundidad de invasión en las capas de la pared (T) y la afectación ganglionar o linfática (N).",
    "fisiopato": "La diseminación submucosa y metastásica temprana es muy común debido a la rica e interconectada red linfática propia del esófago.",
    "clinicalPearl": "Todo cáncer de esófago de diagnóstico reciente requiere estadiaje meticuloso con ecoendoscopia (USE) para evaluar T y N antes de operar o dar neoadyuvancia.",
    "guideline": "NCCN Guidelines for Esophageal and Esophagogastric Junction Cancers.",
    "whyWrong": {
      "1": "La hernia hiatal es un factor de riesgo para ERGE, pero no define directamente el estadiaje pronóstico oncológico.",
      "2": "H. pylori podría tener un efecto paradójico y no define de ninguna forma el pronóstico o estadiaje de la neoplasia esofágica.",
      "3": "La esofagitis eosinofílica aguda o crónica no es una lesión precursora del adenocarcinoma ni afecta el TNM."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-007",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #7: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-008",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #8: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-009",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #9: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-010",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #10: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-011",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #11: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-012",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #12: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-013",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #13: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-014",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #14: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-015",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #15: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-016",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #16: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-017",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #17: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-018",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #18: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-019",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #19: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-020",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #20: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-021",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #21: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-022",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #22: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-023",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #23: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-024",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #24: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-025",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #25: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-026",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #26: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-027",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #27: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-028",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #28: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-029",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #29: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-ulcera-peptica-030",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Escenario Clínico Úlcera Péptica #30: Un hombre de 55 años se presenta con HDA. En la endoscopia se evidencia una úlcera con sangrado activo babeante en bulbo duodenal (Clasificación Forrest Ib). ¿Cuál es el manejo endoscópico recomendado de primera línea?",
    "options": [
      "Terapia dual endoscópica combinada (Inyección de epinefrina más un método térmico o mecánico)",
      "Irrigación exclusiva con suero fisiológico frío, biopsia y observación cuidadosa",
      "Administración de IBP en bolo intravenoso inmediato sin realizar ninguna intervención hemostática",
      "Derivación inmediata a cirugía gástrica de urgencia sin manipular la lesión endoscópicamente"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras con sangrado activo (Forrest Ia arterial o Ib babeante) tienen alto riesgo de morbilidad y requieren tratamiento endoscópico hemostático urgente, idealmente empleando terapia dual.",
    "fisiopato": "La erosión progresiva de la mucosa gástrica o duodenal alcanza y compromete una arteria o vaso submucoso, provocando hemorragia arterial sostenida u oxidante babeante que la hemostasia natural no logra detener.",
    "clinicalPearl": "Úlcera Forrest Ib (sangrado babeante activo) = Terapia dual endoscópica (Inyección + Clip o cauterio) seguida obligatoriamente de IBP en infusión continua.",
    "guideline": "ACG/ASGE Guidelines on Management of Non-variceal Upper Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "El lavado solo aclara el campo de visión momentáneamente; la mera observación conlleva un altísimo riesgo de resangrado inminente, shock hipovolémico y muerte.",
      "2": "El manejo médico con IBP es un adyuvante vital preventivo y estabilizador, pero no sustituye en ningún escenario el cierre hemostático primario del vaso que está sangrando en vivo.",
      "3": "La cirugía de urgencia ha quedado únicamente reservada para sangrados masivos refractarios a la terapia endoscópica dual óptima o ante perforaciones comprobadas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-motores-esofago-009",
    "topic": "motores_esofago",
    "difficulty": "Fellow",
    "text": "¿Cuál es la característica principal de la alteración motora esofágica número 9 según los hallazgos en la manometría de alta resolución (Chicago 4.0)?",
    "options": [
      "Aperistalsis y relajación incompleta del esfínter esofágico inferior (IRP elevado)",
      "Peristalsis normal con IRP bajo",
      "Contracciones prematuras con IRP normal",
      "Ausencia de contractilidad generalizada sin afectación del EEI"
    ],
    "correctIndex": 0,
    "explanation": "La acalasia se caracteriza clásicamente por la ausencia de peristalsis y un IRP elevado.",
    "fisiopato": "Degeneración del plexo mientérico de Auerbach, perdiendo el balance de óxido nítrico inhibitorio.",
    "clinicalPearl": "Disfagia a sólidos y líquidos con regurgitación + IRP elevado = Evaluar para Acalasia.",
    "guideline": "Chicago Classification v4.0.",
    "whyWrong": {
      "1": "La peristalsis normal excluye el diagnóstico de acalasia.",
      "2": "Las contracciones prematuras con IRP normal definen el espasmo esofágico difuso, no la acalasia.",
      "3": "Ausencia de contractilidad con EEI normal es motilidad esofágica inefectiva o afección secundaria (ej. esclerodermia)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-024",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "Un joven de 22 años acude por dolor periumbilical, pérdida de peso, fiebre intermitente y diarrea crónica sin sangre pero con moco. Los análisis muestran PCR y VSG muy elevadas. La calprotectina fecal es >800 ug/g. ¿Qué diagnóstico etiológico se debe sospechar primero ante este cuadro inflamatorio orgánico crónico?",
    "options": [
      "Enfermedad de Crohn ileocolónica",
      "Síndrome de Intestino Irritable con predominio diarrea (SII-D)",
      "Diarrea secretora por VIPoma pancreático",
      "Intolerancia severa a la lactosa"
    ],
    "correctIndex": 0,
    "explanation": "El cuadro de dolor periumbilical, pérdida de peso, fiebre, elevación de reactantes de fase aguda y calprotectina fecal altísima en un joven sugiere fuertemente una Enfermedad Inflamatoria Intestinal, siendo el Crohn ileocecal el más probable.",
    "fisiopato": "La calprotectina es una proteína liberada por los neutrófilos en respuesta a inflamación mucosa extensa. Nivel de calprotectina fecal se correlaciona con la infiltración y migración masiva granulocítica a la pared del intestino.",
    "clinicalPearl": "Joven con diarrea crónica, pérdida de peso y signos de inflamación sistémica (VSG alta, Calprotectina fecal elevada): la primera sospecha siempre debe dirigirse a la EII (Crohn o Colitis Ulcerosa).",
    "guideline": "ACG Clinical Guidelines: Management of Crohn’s Disease in Adults.",
    "whyWrong": {
      "1": "El SII-D es un trastorno puramente funcional y su marcador estrella diferencial clave es que no cursa con inflamación sistémica (PCR normal) ni fecal (Calprotectina normal o limítrofe).",
      "2": "El VIPoma genera diarrea acuosa masiva, indolora, sin fiebre y sin marcadores inflamatorios agudos asociados en la materia fecal o plasma.",
      "3": "La intolerancia a la lactosa produce diarrea osmótica, flatulencia y dolor, pero NUNCA produce fiebre, pérdida masiva de peso grave y no eleva la calprotectina."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-025",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "Para el estudio patogénico de un paciente que tiene sospecha clínica muy alta de Sobrecrecimiento Bacteriano del Intestino Delgado (SIBO), se indica un Test de Aliento. ¿Con qué hidratos de carbono o sustratos se realiza habitualmente esta prueba global y temprana de gas espirado exhalado?",
    "options": [
      "Test de Aliento con Glucosa espirada (o Lactulosa) monitorizando metabolitos de Hidrógeno o Metano",
      "Prueba de Aliento a la Urea - carbono 13 o carbono 14 asintomática",
      "Uso de un Test de Aliento directo global de Xilosa y Lactosa colónica",
      "Estudio de vaciamiento con marcadores de Sulfato férrico"
    ],
    "correctIndex": 0,
    "explanation": "El Test de Aliento para SIBO monitoriza aumentos tempranos en la exhalación de gas Hidrógeno (o Metano) post ingesta de azúcares como Glucosa y Lactulosa, revelando fermentación bacteriana anormal en el intestino delgado.",
    "fisiopato": "La microbiota humana fisiológicamente habita el colon y no el intestino delgado proximal. Si lo coloniza (SIBO), fermentan la glucosa ingerida (antes que el humano pueda absorberla en yeyuno) secretando de inmediato hidrogeniones y gas metano que se disuelven en sangre y se exhalan por pulmones a los pocos minutos.",
    "clinicalPearl": "El diagnóstico de SIBO es predominantemente endoscópico por aspirado (gold standard) pero inviable; el Test del Aliento indirecto con Glucosa o Lactulosa es el examen clínico más práctico y usado en la sospecha temprana del síndrome.",
    "guideline": "ACG Clinical Guideline: Small Intestinal Bacterial Overgrowth.",
    "whyWrong": {
      "1": "La úrea marcada se usa para determinar actividad de Ureasa exclusivamente frente a Helicobacter Pylori gástrico, no evalúa SIBO.",
      "2": "El test de aliento específico para intolerancia a lactosa determina la deficiencia de la enzima digestiva colonica, no cuantifica el aumento temprano global del intestino delgado per se de bacterias.",
      "3": "No existen tests estándar clínicos o radiológicos con sulfato férrico enfocados en determinar la cuantificación espiratoria bacteriana microorgánica."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-diarrea-cronica-026",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "En el Síndrome de Intestino Corto (Short Bowel Syndrome) secundaria a amplias resecciones intestinales agudas o trombosis, existe el Síndrome de Intestino Corto tipo II. Si persiste la conservación del colon pero hay amplia resección ileal u yeyunal, ¿Qué peligro o cuadro hiperoxalúrico letal crónico u factor secundario renal y colónico debemos vigilar recurrentemente a toda costa dadas las uniones fisiológicas de sales residuales funcionales?",
    "options": [
      "Nefrolitiasis crónica por cálculos urinarios directos o masivos formados puramente de oxalato de calcio en los riñones sistémicos",
      "Formación de infartos y placas micro orgánicas o per se isquémicas vasculares por lípidos neutros ciegos subagudos",
      "Desarrollo de poliposis intestinal u adenomatosa difusa adenomatosa",
      "Encefalopatía biliar crónica letales por exceso de bilis masiva y absorción general o basal funcional renal transmembrana"
    ],
    "correctIndex": 0,
    "explanation": "La hiperoxaluria entérica y los cálculos renales de oxalato cálcico son la mayor secuela patológica u complicación patognomónica derivada de la malabsorción de grasas e íleon perdido en pacientes con colon preservado e intestino corto.",
    "fisiopato": "Al faltar el íleon no se absorbe sal biliar ni graso. Esas grasas residuales llegan al colon y saponifican (amarran) el calcio luminal sano, dejando libre y aislado al agresivo ión de Oxalato. Este oxalato libre es succionado fuertemente por la pared difusa colonica y excretado en sangre, llegando al riñón y precipitando de inmediato las clásicas piedras de oxalato calcico intrarrenal perenne.",
    "clinicalPearl": "Paciente con resección de íleon (pero con colon intacto) que debuta con piedras en el riñón y dolor: es hiperoxaluria secundaria a mala absorción intestinal (saponificación del calcio por las sales y ácidos hídricos lipídicos en colon).",
    "guideline": "AGA Clinical Guidelines on Management of Short Bowel Syndrome.",
    "whyWrong": {
      "1": "El colesterol alto u las placas estelares no son secuelas orgánicas u clásicas per se funcionales a los intestinos cortos ciegos, el metabolismo graso es secretado, no es acumulado.",
      "2": "Una poliposis adenomatosa y sus formaciones focales letales basales derivan de bases genéticos claros familiares poliposomas orgánicos tumorales francos, en nada atribuible a las resecciones o cirugías.",
      "3": "La encefalopatía es metabólica amoniacal o general renal ureica crónica por cirrosis hígados per se, no es consecuencia clínica del oxalato ciego."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-diarrea-cronica-017",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "En el tratamiento de pacientes con Síndrome de Intestino Irritable con predominio diarrea (SII-D) que presentan dolor abdominal crónico severo y refractario, ¿qué grupo farmacológico posee recomendación clínica fuerte como neuromodulador para enlentecer el tránsito y reducir la hipersensibilidad visceral?",
    "options": [
      "Antidepresivos tricíclicos (ej. amitriptilina) o antagonistas 5-HT3",
      "Biológicos inhibidores de integrinas (ej. vedolizumab)",
      "Antibióticos de amplio espectro endovenosos como metronidazol",
      "Inhibidores de la bomba de protones a dosis dobles"
    ],
    "correctIndex": 0,
    "explanation": "Los antidepresivos tricíclicos (TCA) como amitriptilina en dosis subantidepresivas enlentecen el tránsito intestinal (efecto secundario anticolinérgico) a la vez que reducen la transmisión del dolor nociceptivo visceral, siendo excelentes para SII-D severo.",
    "fisiopato": "Los efectos anticolinérgicos de los TCA relajan y reducen la respuesta motora mientérica colónica, disminuyendo la diarrea, mientras que la neuromodulación central altera la percepción del dolor crónico.",
    "clinicalPearl": "En el SII-D, los antidepresivos tricíclicos aprovechan su \"efecto secundario\" de estreñimiento para tratar la diarrea, mientras atacan centralmente la hiperalgesia visceral.",
    "guideline": "ACG Clinical Guideline: Management of Irritable Bowel Syndrome.",
    "whyWrong": {
      "1": "Los biológicos se reservan exclusivamente para Enfermedad Inflamatoria Intestinal (Crohn, CU), nunca para un trastorno funcional sin inflamación franca como el SII.",
      "2": "Los antibióticos sistémicos potentes causarían disbiosis graves y solo empeorarían el funcionalismo o generarían C. difficile.",
      "3": "Los IBP pueden exacerbar SIBO y no tienen efecto directo sobre el dolor pélvico bajo ni sobre los mecanismos antiespasmódicos en intestinos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-018",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "A nivel hospitalario, usted evalúa a un paciente geriátrico institucionalizado y postrado, referido por múltiples \"fugas abundantes de heces líquidas amarronadas\" que ensucian su vestimenta. Al tacto rectal, halla la ampolla llena de una masa pétrea obstructiva de heces. ¿Cuál es el nombre funcional clínico de este cuadro, que suele simular erróneamente diarrea aguda?",
    "options": [
      "Pseudodiarrea por escurrimiento o rebosamiento secundario a impactación fecal",
      "Fístula colo-vaginal o perianal asintomática por enfermedad diverticular",
      "Diarrea inflamatoria exudativa secundaria a tumor o adenocarcinoma frondoso",
      "Crisis de hipersecresión inducida por síndrome de Peutz-Jeghers"
    ],
    "correctIndex": 0,
    "explanation": "La impactación fecal severa desencadena filtraciones de fluido colónico por los bordes de la masa obstructiva (pseudodiarrea), simulando evacuaciones diarreicas recurrentes sin ser un cuadro de malabsorción o hipersecreción.",
    "fisiopato": "La masa colónica endurecida impide el vaciado, generando irritación bacteriana y distensión, lo cual produce secreción acuosa compensatoria que fluye y se filtra como lodo por los espacios no ocluidos.",
    "clinicalPearl": "En ancianos encamados, constipados crónicos, que de pronto emiten chorros de heces líquidas: siempre realizar tacto rectal para descartar impactación fecal (pseudodiarrea).",
    "guideline": "AGA Medical Position Statement on Constipation.",
    "whyWrong": {
      "1": "Las fístulas causan drenaje purulento o fecal en ubicaciones extrañas (vagina, piel perianal) pero es menos probable que simulen de inicio diarrea abundante en un varón postrado con ampolla llena.",
      "2": "Un adenocarcinoma velloso puede secretar mucina líquida (síndrome hipersecretor potásico), pero el tacto o la imagen demostraría la masa neoplásica, no una impactación pétrea universal estercorácea.",
      "3": "El Peutz-Jeghers se presenta en jóvenes con pólipos hamartomatosos múltiples e invaginaciones, no como impactación rígida distal en geriátricos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-019",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "Paciente hospitalizado con antecedente de terapia intravenosa prolongada con clindamicina inicia deposiciones acuosas verdosas de mal olor, leucocitosis y fiebre. La colonoscopia visualiza placas elevadas blanco-amarillentas diseminadas. ¿Qué toxinas son responsables de la patogénesis de estas lesiones?",
    "options": [
      "Toxinas A y B (enterotoxina y citotoxina) de Clostridioides difficile",
      "Toxina Shiga secretada por cepas invasivas de E. coli o Shigella",
      "Exotoxina emética de Bacillus cereus",
      "Toxina colérica de Vibrio cholerae"
    ],
    "correctIndex": 0,
    "explanation": "El patógeno Clostridioides difficile secreta Toxina A y B que destruyen el epitelio, atrayendo exudados que forman placas densas conocidas como pseudomembranas.",
    "fisiopato": "Al eliminarse la microbiota por el antibiótico, C. difficile sobrecrece; sus toxinas glucocilan proteínas del citoesqueleto (Rho, Rac) epitelial celular, desencadenando muerte y descamación mucosa fulminante colónica.",
    "clinicalPearl": "Placas fibrinosas o cremosas (pseudomembranas) en endoscopia + historia reciente de antibióticos = Clostridioides difficile. Diagnóstico por toxinas en heces.",
    "guideline": "ACG Clinical Practice Guidelines for Clostridioides difficile Infection.",
    "whyWrong": {
      "1": "La toxina Shiga daña vasos sanguínos produciendo disentería hemorrágica severa y síndrome urémico hemolítico, no clásicas pseudomembranas gruesas diseminadas.",
      "2": "Bacillus cereus genera toxina emética preformada en alimentos (arroz frito) causando vómitos y náuseas rápidas de escasa duración, no colonias o placas crónicas.",
      "3": "El Cólera provoca evacuaciones masivas acuosas (agua de arroz) pero la mucosa permanece macroscópicamente frágil o normal y sin placas fibrinosas gruesas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-020",
    "topic": "diarrea_cronica",
    "difficulty": "Subspecialist",
    "text": "Tras una extensa resección del íleon terminal (p. ej., por complicación en Enfermedad de Crohn), un paciente presenta diarrea acuosa postprandial constante tipo colerética severa. ¿Cuál es el grupo de medicamentos empíricos de primera línea utilizado como estándar para neutralizar la diarrea en pacientes colecistectomizados o con resección ileal menor a 1 metro?",
    "options": [
      "Resinas secuestrantes de ácidos biliares (ej. Colestiramina, Colesevelam)",
      "Suplementos parenterales bimensuales de Cobalamina (Vitamina B12)",
      "Inhibidores del factor de necrosis tumoral (ej. Infliximab)",
      "Bloqueadores o antagonistas muscarínicos puros sistémicos"
    ],
    "correctIndex": 0,
    "explanation": "La mala absorción de sales biliares en la porción terminal del íleon irrita y secreta fluido al llegar desproporcionadamente al colon; para tratarlos, se utilizan resinas orales fijadoras que agrupan o secuestran dicha bilis intraluminal deteniendo el tránsito activo secretor.",
    "fisiopato": "Los remanentes no reabsorbidos de ácidos biliares inducen masiva activación de AMPc intracelular de los epitelios colónicos cuando irritativamente entran en contacto distales, secretando grandes correntadas de iones cloruro compensatorio de arrastre hídrico.",
    "clinicalPearl": "Si un paciente post-colecistectomía sufre diarrea ácida o amarilla limitante sin dolor, inicia rápido una resina como Colestiramina o Colesevelam. Es diagnóstico y terapéutico rápido.",
    "guideline": "AGA Clinical Guideline Update on Chronic Diarrhea and Bile Acid Diarrhea.",
    "whyWrong": {
      "1": "Aunque con el íleon también se malabsorbe vitamina B12, las inyecciones suplen la anemia macrocítica o los déficits neurológicos del paciente, no atacan el flujo local y arrastre o diarrea de la sal biliar.",
      "2": "Infliximab frena la severa inflamación propia del Crohn sistémico; en una diarrea o cuadro secretor puramente motriz mecánico biliar inflamación local por resección sin enfermedad activa no requeriría biológicos.",
      "3": "Anticolinérgicos muscarínicos tendrían muchos efectos adversos sistémicos severos y secan boca y vías sin actuar focal ni inhabilitar localmente la toxina biliar de su pared reactiva."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-diarrea-cronica-021",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "En el paciente con diabetes mellitus severa o avanzada de larga data que sufre diarrea crónica refractaria originada por neuropatía autonómica periférica, ¿qué agonista central alfa-2 adrenérgico ha demostrado disminuir la hipersecreción y mejorar notoriamente las deposiciones?",
    "options": [
      "Clonidina oral o transdérmica",
      "Propranolol oral",
      "Domperidona sistémica",
      "Alosetrón oral"
    ],
    "correctIndex": 0,
    "explanation": "La diarrea diabética de origen neuropático grave, secundaria a la denervación simpática o vagal entérica, ha demostrado frenarse muy efectivamente usando un agonista alfa-2 adrenérgico de acción sistémica como la clonidina.",
    "fisiopato": "La diabetes daña al tono presináptico adrenérgico visceral inhibitorio del complejo motor mientérico. Al utilizar Clonidina, se estimula activamente receptores alfa inhibitorios, reduciendo secreción iónica e incrementando el tiempo del tránsito general de mucosa compensatoriamente.",
    "clinicalPearl": "Diarrea diabética intratable o autonómica, si loperamida e intentos empíricos se agotan: la prueba de oro en los boards es iniciar prueba con clonidina y evaluar el asueto defecatorio sistémico.",
    "guideline": "ACG Guidelines for Diabetic neuropathy and related chronic diarrhea.",
    "whyWrong": {
      "1": "Los beta bloqueadores como propranolol frenan arritmias y temblores simpáticos sistémicos o presiones hipertiroideas, pero no tienen rol estimulador entérico periférico alfa-2 adrenérgico de la diarrea local autonómica terminal.",
      "2": "La domperidona, aunque útil centralmente como procinético para tratar la gastroparesia o antiemético periférico de D2, incrementaría el tránsito digestivo distal pudiendo aumentar dramáticamente el efecto evacuatorio en diabetes.",
      "3": "El alosetrón sirve exclusivamente a un SII diarreico con dolor abdominal de función aferente 5-HT3 en vías o mecanismos pélvicos distales, no es el pilar patogénicamente en la neuropatía simpática y motora autónoma diabética."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-022",
    "topic": "diarrea_cronica",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es en la práctica clínica el estándar confirmatorio inicial actual, validado y altamente específico recomendado en forma de tamizaje masivo para corroborar clínicamente franca y fétida esteatorrea a nivel de las heces, derivando o descartando la etiología y de insuficiencias francas de etiología u del exocrina del páncreas crónico?",
    "options": [
      "Determinación de la Elastasa Fecal tipo 1 en heces",
      "Determinación de la Calprotectina fecal del paciente u niveles estelares neutrofílicos puros",
      "Test directo d-Xilosa sistémica basales para pre capturas urinarias puras hialinas",
      "Tintes directos basales como Rojo Congo para proteínas colónicas focales"
    ],
    "correctIndex": 0,
    "explanation": "La elastasa fecal 1 humana es el mejor método general indirecto, barato y fiable de diagnóstico clínico altamente específico actualmente que ha desplazado casi globalmente al incómodo test de recolección Van de Kamer a las 72 horas fecales para testear y rastrear pérdida exócrina crónica.",
    "fisiopato": "Durante procesos severos (ej, la pancreatitis que fibroma sus glóbulos acinares pancreáticos per se distales crónicos), los decaimientos de sus excreciones globales intraluminales reducen bruscamente el paso de elastasa 1 al colon de tránsito inalterada, cayendo a valores críticos inferiores de < 200.",
    "clinicalPearl": "Si sospechas esteatorrea, pide Elastasa Fecal (y no Calprotectina, que sirve para EII inflamatorias). Valores fecales menores a <100 confirman insuficiencia y requieren suplemento PERT urgente.",
    "guideline": "ACG/AGA Clinical Guidelines on Pancreatic Exocrine Insufficiency.",
    "whyWrong": {
      "1": "Calprotectina es estrictamente un biomarcador purulento neutrofílico de lúmenes de IBD intestinal (C.U., Crohn) e no distingue las secreciones de asueto a disfunciones de yeyuno enzimas o lipoproteicas digestivas grasales.",
      "2": "El test d-Xilosa evalúa netamente la capacidad absortiva general de integridad epitelial carbohidrato puro del intestino superior y es ininteligible ni detecta grasas colónicas ni de la matriz enzimatica hepatopancreática basocelular disfuncional de asuetos crónicos.",
      "3": "Rojo congo es o y su de la un tinte de bases o de biopsias amiloidóticas, amiloidosis primarias o funcionales o masivos y de asintomáticos a mortales renales basales, per se en no heces para test de grasas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-010",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "Un paciente de 45 años con antecedente de radioterapia pélvica por cáncer de próstata hace 5 años presenta diarrea crónica, urgencia fecal y rectorragia ocasional. La endoscopia revela telangiectasias y palidez de la mucosa rectal. ¿Cuál es el tratamiento de primera línea respaldado por mayor evidencia para el sangrado persistente en esta condición?",
    "options": [
      "Coagulación con argón plasma (APC)",
      "Enemas de hidrocortisona",
      "Mesalazina oral",
      "Oxigenoterapia hiperbárica"
    ],
    "correctIndex": 0,
    "explanation": "La rectopatía actínica crónica con sangrado persistente responde adecuadamente a la termocoagulación endoscópica con argón plasma (APC), siendo el estándar terapéutico en la mayoría de las guías.",
    "fisiopato": "La radiación induce endarteritis obliterante, isquemia submucosa y neovascularización anómala, originando telangiectasias muy friables que sangran fácilmente.",
    "clinicalPearl": "Rectopatía post-radioterapia = Telangiectasias rectales pálidas y friables. Tratamiento de primera línea ante sangrado: APC.",
    "guideline": "ASGE Clinical Guideline: Radiation proctitis.",
    "whyWrong": {
      "1": "Los enemas de esteroides aportan poco beneficio y no logran detener el sangrado de las telangiectasias superficiales.",
      "2": "La mesalazina se utiliza para EII y ha demostrado escasa o nula eficacia en la proctopatía por radiación.",
      "3": "El oxígeno hiperbárico es útil para proctopatía refractaria u osteorradionecrosis, pero no es la primera línea antes de intentar métodos endoscópicos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-011",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "Una paciente de 55 años, en tratamiento con antidepresivos inhibidores de la recaptación de serotonina (Sertralina), AINEs para osteoartritis y Lansoprazol, consulta por diarrea acuosa profunda crónica sin pérdida de peso. La colonoscopia es macroscópicamente normal. ¿Qué hallazgo histológico confirmaría una Colitis Linfocítica?",
    "options": [
      "Infiltrado con >20 linfocitos intraepiteliales por cada 100 células epiteliales",
      "Engrosamiento de la banda de colágeno subepitelial mayor a 10 micrómetros",
      "Criptitis severa con distorsión arquitectural y ulceraciones superficiales",
      "Linfocitosis en la lámina propia con presencia de granulomas no caseificantes"
    ],
    "correctIndex": 0,
    "explanation": "La colitis linfocítica forma parte del espectro de las colitis microscópicas y se define histológicamente por más de 20 linfocitos intraepiteliales por cada 100 células luminales.",
    "fisiopato": "A diferencia de la EII típica, en la colitis microscópica no hay alteración de la arquitectura de las criptas. Los linfocitos T citotóxicos intraepiteliales inducen fuga de cloruro e inhiben la absorción de fluidos (diarrea acuosa).",
    "clinicalPearl": "Diarrea crónica, mujer de mediana edad con colonoscopia normal + uso de medicamentos como Sertralina, Lansoprazol o AINEs = sospecha altísima de Colitis Microscópica. Indicar biopsias escalonadas.",
    "guideline": "AGA Clinical Guidelines on the Medical Management of Microscopic Colitis.",
    "whyWrong": {
      "1": "El engrosamiento de la banda colágena es el sello diagnóstico de la Colitis Colágena, la otra variante microscópica.",
      "2": "La criptitis severa y la alteración de la arquitectura criptal sugieren fuertemente Colitis Ulcerosa o EII, no enfermedad microscópica.",
      "3": "La presencia de granulomas no caseificantes sugiere Enfermedad de Crohn o cuadros infecciosos crónicos."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-diarrea-cronica-012",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "En el contexto de un tumor neuroendocrino secretor de VIP (VIPoma), el paciente suele presentar de manera abrumadora el Síndrome de Verner-Morrison. ¿Qué triada analítica o clínica patognomónica caracteriza clásicamente a este cuadro además de la refractariedad al ayuno?",
    "options": [
      "Diarrea acuosa masiva, Hipopotasemia severa y Aclorhidria (Síndrome WDHA)",
      "Diarrea secretora, Hiperglucemia grave y Acidosis láctica",
      "Diarrea osmótica, Hipocalcemia y Esteatorrea",
      "Diarrea secretora indolora, Hipernatremia extrema y Alcalosis metabólica"
    ],
    "correctIndex": 0,
    "explanation": "El VIPoma se conoce históricamente por el Síndrome WDHA: Watery Diarrhea (diarrea acuosa), Hypokalemia (hipopotasemia severa) y Achlorhydria (aclorhidria/hipoclorhidria).",
    "fisiopato": "El VIP se une a receptores en enterocitos estimulando masivamente la producción de AMPc, induciendo intensa secreción de cloruro y potasio, e inhibiendo directamente las células parietales gástricas (aclorhidria).",
    "clinicalPearl": "Ante una diarrea profusa (>3 L/día) refractaria al ayuno con hipopotasemia severa desproporcionada y debilidad muscular generalizada, buscar siempre un tumor pancreático neuroendocrino (VIPoma).",
    "guideline": "NCCN Guidelines for Neuroendocrine and Adrenal Tumors.",
    "whyWrong": {
      "1": "No se produce acidosis láctica típicamente. La gran pérdida de bicarbonato suele producir acidosis hiperclorémica, o rara vez alcalosis si predomina el vómito o hipopotasemia severa.",
      "2": "La diarrea del VIPoma es secretora, no osmótica. Tampoco tiene un componente predominante primario de esteatorrea.",
      "3": "La deshidratación intensa por la diarrea secretora podría inducir alteraciones del sodio, pero la triada definitoria requiere aclorhidria e hipopotasemia, no alcalosis primaria como signo."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-013",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "Al estudiar a un adulto con persistente distensión abdominal y diarrea de predominio postprandial al consumir lácteos, se sospecha intolerancia a la lactosa severa. Si determinamos el pH de una muestra fecal acuosa inmediatamente tras la ingesta de leche en medio de una crisis, ¿qué valor esperaríamos encontrar y por qué?",
    "options": [
      "pH ácido (menor a 6.0), derivado de la fermentación bacteriana de la lactosa que genera ácidos grasos de cadena corta (AGCC)",
      "pH francamente alcalino (mayor a 8.0), por el exceso de calcio libre en el colon",
      "pH neutro (cercano a 7.0), dado que el colon compensa la llegada de azúcares con secreción de bicarbonato",
      "Cualquier modificación es indetectable porque la microbiota reabsorbe de inmediato todo ácido luminal"
    ],
    "correctIndex": 0,
    "explanation": "La malabsorción de carbohidratos, como la lactosa, causa diarrea osmótica. Los disacáridos no absorbidos son rápidamente fermentados en el colon por bacterias, lo que produce grandes cantidades de ácidos grasos de cadena corta y gas, acidificando marcadamente las heces.",
    "fisiopato": "La fermentación bacteriana anaerobia de carbohidratos transforma azúcares en ácido butírico, acético y propiónico, liberando iones de hidrógeno, lo cual disminuye drásticamente el pH intraluminal hídrico.",
    "clinicalPearl": "Diarrea de causa osmótica por azúcares (Lactosa, Fructosa) no solo cede con el ayuno, sino que clásicamente cursa con un pH fecal fuertemente ácido y eritema/irritación perianal.",
    "guideline": "AGA Clinical Practice Update on the Management of Malabsorption.",
    "whyWrong": {
      "1": "El calcio no alcaliniza el colon y no se encuentra sustancialmente en forma libre activa sin unirse a otros aniones ni domina el medio iónico local tras la fermentación.",
      "2": "El bicarbonato colónico no es suficientemente rápido ni capaz de amortiguar y neutralizar el volumen brutal de AGCC agudos producidos en una intolerancia franca activa.",
      "3": "Las reacciones de acidificación microbiana colónica superan con creces cualquier capacidad buffer normal, lo que resulta en heces líquidas detectables y persistentemente irritativas de forma aguda."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-014",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "A un paciente hospitalizado se le solicita el cálculo del Brecha Osmótica Fecal (Fecal Osmotic Gap) ante una diarrea misteriosa crónica. Al aplicar la fórmula [290 - 2 × (Na+ focal + K+ fecal)], obtiene un valor de 30 mOsm/kg. Frente a su sospecha diagnóstica inicial, si se sometiera al paciente a 48 horas de ayuno estricto con hidratación intravenosa, ¿qué comportamiento presentaría la diarrea?",
    "options": [
      "El cuadro diarreico persistiría francamente volumétrico y sin mejoría, al corresponder a una diarrea secretora pura",
      "La diarrea cedería y desaparecería por completo durante las horas de ayuno absoluto, indicando un componente osmótico",
      "La distensión se agravaría progresivamente sin cambios en el volumen, confirmando un síndrome dismotilidad",
      "Las deposiciones cambiarían a melena pura, un hallazgo indicativo de isquemia colónica reactiva"
    ],
    "correctIndex": 0,
    "explanation": "Un Gap Osmótico Fecal bajo (<50 mOsm/kg) define típicamente a la diarrea secretora (toxinas mediadas por AMPc, VIP, malabsorción severa de ácidos biliares). Por definición, este tipo de diarreas son independientes de los contenidos alimenticios y no ceden con el ayuno.",
    "fisiopato": "Los enterocitos están constitutivamente activados por segundos mensajeros (AMPc, GMPc o Calcio), empujando activamente agua, cloro y sodio a la luz intestinal (lo que hace que la suma 2x(Na+K) explique todo el osmole luminal, acercando el gap a 0).",
    "clinicalPearl": "Gap fecal < 50 mOsm/kg = Diarrea Secretora que no responde al ayuno. Gap fecal > 100 mOsm/kg = Diarrea Osmótica que se resuelve con el ayuno.",
    "guideline": "AGA Clinical Practice Guideline on the Evaluation of Chronic Diarrhea.",
    "whyWrong": {
      "1": "Las diarreas que ceden y desaparecen de forma tajante durante el ayuno estricto son las diarreas osmóticas, las cuales exigen por tanto un gap osmolar mayor a 100 mOsm/kg, contrario al dato aportado en el caso clínico.",
      "2": "La dismotilidad provoca cuadros fluctuantes donde domina el dolor y el tránsito; un gap secretor puro orienta a enterotoxinas u hormonas secretagogas endócrinas y no a motilidad exclusivamente neural.",
      "3": "Una diarrea secretora no se transforma en hemorrágica por un estímulo dietético en ayunas; la presencia de melena o hematoquecia implicaría isquemia, daño estructural, o úlcera superior subyacente independiente de las osmolalidades fecales locales."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-diarrea-cronica-015",
    "topic": "diarrea_cronica",
    "difficulty": "Subspecialist",
    "text": "Un hombre de 62 años secundario a una duodenopancreatectomía cefálica de Whipple hace seis meses presenta diarrea severa, pérdida de peso, y esteatorrea franca. Al iniciar la Terapia de Reemplazo Enzimático Pancreático (PERT, por sus siglas en inglés), ¿cuál es la técnica y temporalidad universalmente recomendada para asegurar el éxito digestivo de los suplementos orales?",
    "options": [
      "Las cápsulas microencapsuladas deben ingerirse al inicio, y fraccionadamente durante la comida sólida rica en nutrientes",
      "Las enzimas deben consumirse dos horas antes de las comidas principales para pre-acondicionar el quimo ácido",
      "El paciente debe triturar y pulverizar cada cápsula en la comida antes de ingerir para asegurar rápida absorción",
      "Las dosis deben instalarse de forma exclusiva al momento de dormir para un ritmo circadiano constante y absorción lenta"
    ],
    "correctIndex": 0,
    "explanation": "El reemplazo exocrino pancreático requiere obligatoriamente estar físicamente mezclado con el quimo alimenticio ingerido. Tomar las píldoras junto con el primer bocado y, en grandes porciones, agregar más a la mitad del plato, optimiza radicalmente la digestión.",
    "fisiopato": "Las microesferas requieren del bolo y del cambio de pH para disolver su capa entérica, sincronizando la exposición de su carga total de lipasa exógena directamente contra las grasas luminalmente retenidas desde su formación en el estómago hasta el yeyuno proximal.",
    "clinicalPearl": "La principal causa del fracaso continuo y refractario de un PERT diagnosticado en esteatorrea es una técnica ineficaz: triturar o ingerir demasiado alejado de la ventana de ingestión de alimento activo principal.",
    "guideline": "ACG Clinical Guideline Update on the Diagnosis and Management of Chronic Pancreatitis.",
    "whyWrong": {
      "1": "Al tomarlas horas antes de cualquier alimento, las enzimas llegarán al ID desincronizadas, vacías sin nutrientes basales y perderán viabilidad con el nulo entorno digestivo basal.",
      "2": "Triturar o masticar cápsulas de cubierta entérica destruye su revestimiento y expone a las lipasas a degradación ácida irremediable en el reservorio gástrico inhabilitándolas de por vida previo al pasaje o quimo.",
      "3": "Las enzimas inyectadas o nocturnas fuera de cualquier tiempo y marco nutricional activo son completamente inútiles al estar diseñadas solo para la digestión en contacto directo con comida masiva luminal."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-1",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Un paciente de 65 años consulta por dolor abdominal súbito, desproporcionado al examen físico, con antecedentes de fibrilación auricular. ¿Cuál es el diagnóstico más probable según el Manual Chileno 2025?",
    "options": [
      "Pancreatitis aguda grave",
      "Isquemia mesentérica aguda",
      "Perforación de víscera hueca",
      "Aneurisma de aorta abdominal roto"
    ],
    "correctIndex": 1,
    "explanation": "La tríada de dolor súbito, factores de riesgo embólico (FA) y disociación entre intensidad del dolor y hallazgos físicos es patognomónica de isquemia mesentérica aguda.",
    "fisiopato": "La interrupción del flujo arterial conlleva a hipoxia celular, paso de metabolismo aeróbico a anaeróbico y rápida necrosis transmural si no se interviene en las primeras 6 horas.",
    "clinicalPearl": "En isquemia mesentérica, el tiempo es intestino. El AngioTAC es el estándar de oro inicial.",
    "guideline": "Manual Chileno de Gastroenterología 2025 - Urgencias Vasculares.",
    "whyWrong": {
      "0": "Pancreatitis suele tener dolor en banda.",
      "2": "Perforación tiene signos peritoneales desde el inicio.",
      "3": "Aneurisma roto asocia masa pulsátil y choque."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-2",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "Paciente con diarrea acuosa profusa tras consumo de mariscos crudos. Presenta deshidratación severa. ¿Cuál es el agente etiológico más probable si se sospecha un mecanismo secretor puro?",
    "options": [
      "Vibrio cholerae",
      "Salmonella Enteritidis",
      "Shigella sonnei",
      "Campylobacter jejuni"
    ],
    "correctIndex": 0,
    "explanation": "El cólera es el prototipo de diarrea secretora mediada por toxinas que activan la adenilato ciclasa.",
    "fisiopato": "La toxina colérica se une al receptor GM1, activa la proteína Gs y eleva el AMPc, provocando la apertura de canales de Cloro (CFTR) y salida masiva de agua.",
    "clinicalPearl": "La hidratación precoz es la piedra angular; los antibióticos solo reducen la duración.",
    "guideline": "Guía IDSA de diarrea infecciosa.",
    "whyWrong": {
      "1": "Salmonella suele ser inflamatoria.",
      "2": "Shigella es el prototipo de disentería.",
      "3": "Campylobacter produce dolor abdominal intenso y disentería."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-3",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "En una endoscopia por HDA se observa una úlcera con un vaso visible no sangrante. Según la clasificación de Forrest, ¿qué grado es y cuál es su riesgo de resangrado sin terapia?",
    "options": [
      "Forrest Ia - 90%",
      "Forrest Ib - 70%",
      "Forrest IIa - 50%",
      "Forrest IIb - 30%"
    ],
    "correctIndex": 2,
    "explanation": "El grado IIa corresponde a un vaso visible no sangrante, con un riesgo de resangrado cercano al 50% sin tratamiento endoscópico.",
    "fisiopato": "El vaso visible representa una interrupción de la submucosa donde el coágulo no es lo suficientemente estable como para prevenir la recidiva ante cambios de presión.",
    "clinicalPearl": "Toda úlcera Forrest IIa debe recibir terapia combinada (ej: adrenalina + clips/termo).",
    "guideline": "Consenso Internacional de HDA no varicosa.",
    "whyWrong": {
      "0": "Ia es sangrado en chorro.",
      "1": "Ib es sangrado en napa.",
      "3": "IIb es coágulo adherido (riesgo ~30%)."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-4",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "Según los criterios de Lyon 2.0, ¿cuál de los siguientes hallazgos se considera evidencia DEFINITIVA de ERGE?",
    "options": [
      "Esofagitis grado A de Los Ángeles",
      "Tiempo de exposición ácida (AET) de 4.5%",
      "Esofagitis grado C de Los Ángeles",
      "Recuento de rupturas de la barrera mucosa > 5"
    ],
    "correctIndex": 2,
    "explanation": "Lyon 2.0 establece que la esofagitis C y D, el esófago de Barrett y la estenosis péptica son evidencia concluyente de ERGE.",
    "fisiopato": "El daño estructural (grado C/D) refleja un fracaso total de los mecanismos de defensa epitelial ante el reflujo crónico.",
    "clinicalPearl": "El grado A ya no se considera diagnóstico de ERGE por sí solo.",
    "guideline": "Lyon Consensus 2.0 (2023).",
    "whyWrong": {
      "0": "Se encuentra en voluntarios sanos.",
      "1": "Es una zona gris (4-6% es limítrofe).",
      "3": "No es un criterio diagnóstico principal."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-5",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "En el manejo de la ascitis grado 2, ¿cuál es la relación recomendada de Espironolactona:Furosemida para mantener la normopotasemia?",
    "options": [
      "50mg : 20mg",
      "100mg : 40mg",
      "200mg : 80mg",
      "40mg : 100mg"
    ],
    "correctIndex": 1,
    "explanation": "La relación 100:40 (ej: 100mg espironolactona y 40mg furosemida) es el estándar para balancear el efecto sobre el potasio.",
    "fisiopato": "La espironolactona inhibe el hiperaldosteronismo secundario (ahorra K) mientras la furosemida actúa en el asa de Henle (tira K).",
    "clinicalPearl": "No superar los 400mg de espironolactona.",
    "guideline": "AASLD Guidelines on Ascites.",
    "whyWrong": {
      "0": "Relación correcta pero dosis subterapéutica inicial.",
      "2": "Dosis alta, se prefiere escalar desde 100/40.",
      "3": "Relación invertida, causaría hipopotasemia severa."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-6",
    "topic": "perfil_hepatico",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el valor del gradiente de albúmina suero-ascitis (GASA) que indica hipertensión portal con una precisión del 97%?",
    "options": [
      "< 1.1 g/dL",
      ">= 1.1 g/dL",
      ">= 2.5 g/dL",
      "< 0.5 g/dL"
    ],
    "correctIndex": 1,
    "explanation": "Un GASA >= 1.1 indica que la ascitis se debe a hipertensión portal (transudado mecánico).",
    "fisiopato": "La presión hidrostática aumentada en los sinusoides hepáticos \"filtra\" líquido pobre en proteínas pero mantiene el gradiente osmótico de la albúmina.",
    "clinicalPearl": "Si el GASA es >= 1.1 pero las proteínas totales en ascitis son > 2.5, sospeche insuficiencia cardíaca o Budd-Chiari.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Indica causas no relacionadas con hipertensión portal (ej: cáncer, TBC).",
      "2": "Indica proteínas altas, no el gradiente.",
      "3": "Inespecífico."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-7",
    "topic": "perfil_hepatico",
    "difficulty": "Staff",
    "text": "¿Qué patrón de enzimas hepáticas sugiere una lesión por fármacos de tipo colestásico (ej: Amoxicilina-Clavulánico)?",
    "options": [
      "R ratio > 5",
      "R ratio < 2",
      "R ratio entre 2 y 5",
      "Elevación aislada de bilirrubina"
    ],
    "correctIndex": 1,
    "explanation": "El R ratio (ALT/ULN / FA/ULN) < 2 define el patrón colestásico en toxicidad por fármacos (DILI).",
    "fisiopato": "Refleja daño predominante en los transportadores canaliculares o colangiocitos sobre el parénquima.",
    "clinicalPearl": "La Amoxi-Clav es la causa más frecuente de DILI colestásico a nivel mundial.",
    "guideline": "Manual Chileno 2025 / Guías ACG DILI.",
    "whyWrong": {
      "0": "Indica patrón hepatocelular.",
      "2": "Indica patrón mixto.",
      "3": "Inespecífico."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-8",
    "topic": "perfil_hepatico",
    "difficulty": "Fellow",
    "text": "En un paciente con colestasis crónica, ¿qué vitamina liposoluble suele ser la primera en deficitarse y debe monitorizarse?",
    "options": [
      "Vitamina C",
      "Vitamina A",
      "Vitamina D",
      "Vitamina K"
    ],
    "correctIndex": 2,
    "explanation": "La vitamina D es sensible a la malabsorción de sales biliares crónica.",
    "fisiopato": "La ausencia de sales biliares en el lumen impide la formación de micelas necesarias para absorber vitaminas liposolubles (A, D, E, K).",
    "clinicalPearl": "La osteopenia/osteoporosis es una complicación frecuente de la Cirrosis Biliar Primaria (CBP).",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Es hidrosoluble.",
      "1": "Se deficita pero suele ser posterior a D.",
      "3": "Importante pero D es más constante en colestasis crónica."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-9",
    "topic": "perfil_hepatico",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la utilidad del aclaramiento de Verde de Indocianina en el preoperatorio de grandes resecciones hepáticas?",
    "options": [
      "Medir la masa de hepatocitos funcionantes y el flujo sanguíneo",
      "Diagnosticar hepatitis autoinmune",
      "Estadificar el grado de esteatosis",
      "Predecir la respuesta a quimioterapia"
    ],
    "correctIndex": 0,
    "explanation": "Mide la reserva funcional sistémica del hígado.",
    "fisiopato": "El verde de indocianina se excreta exclusivamente por el hígado sin circulación enterohepática; su tasa de eliminación correlaciona con la función residual.",
    "clinicalPearl": "Indispensable en pacientes con cirrosis Child A que van a hepatectomía por hepatocarcinoma.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "1": "Sin rol.",
      "2": "Sin rol.",
      "3": "Sin rol."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-10",
    "topic": "perfil_hepatico",
    "difficulty": "Staff",
    "text": "Un paciente presenta elevación persistente de aminotransferasas (AST/ALT ~1.5) y Ferritina de 1200 ng/mL con Saturación de Transferrina del 65%. ¿Qué estudio genético solicita?",
    "options": [
      "Mutación C282Y del gen HFE",
      "Mutación en ATP7B",
      "Anticuerpos LKM1",
      "Alfa-1 antitripsina fenotipo"
    ],
    "correctIndex": 0,
    "explanation": "La saturación de transferrina > 45% y ferritina alta sugieren Hemocromatosis Hereditaria.",
    "fisiopato": "Déficit de hepcidina que genera absorción intestinal de hierro descontrolada y depósito en hepatocitos, páncreas y corazón.",
    "clinicalPearl": "El tratamiento de elección son las flebotomías seriadas.",
    "guideline": "Manual Chileno 2025 / Guías AASLD.",
    "whyWrong": {
      "1": "Para Wilson (Cobre).",
      "2": "Para Hepatitis Autoinmune tipo 2.",
      "3": "Para Déficit de A1AT."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-11",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo de acción del Risankizumab, aprobado para Crohn moderado-grave?",
    "options": [
      "Inhibidor de la subunidad p40 (IL-12/23)",
      "Bloqueador selectivo de la subunidad p19 de la IL-23",
      "Inhibidor de la PDE4",
      "Antagonista de S1P"
    ],
    "correctIndex": 1,
    "explanation": "El Risankizumab es un anti-IL-23 selectivo (p19).",
    "fisiopato": "La IL-23 es clave en el mantenimiento de la respuesta Th17 patogénica en el intestino.",
    "clinicalPearl": "Ha demostrado superioridad en la inducción de remisión endoscópica comparado con Ustekinumab.",
    "guideline": "ECCO Guidelines 2024.",
    "whyWrong": {
      "0": "Es el mecanismo de Ustekinumab.",
      "2": "Mecanismo de Apremilast.",
      "3": "Mecanismo de Ozanimod."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-12",
    "topic": "eii_avanzada",
    "difficulty": "Staff",
    "text": "En un paciente con Crohn ileal con estenosis fibro-estenótica sintomática (sin inflamación activa), ¿cuál es el manejo de elección?",
    "options": [
      "Aumentar dosis de biológico",
      "Dilatación endoscópica o cirugía (Estenosoplastia)",
      "Corticoides en dosis altas",
      "Dieta elemental exclusivamente"
    ],
    "correctIndex": 1,
    "explanation": "La fibrosis no responde a antiinflamatorios; requiere manejo mecánico.",
    "fisiopato": "El depósito crónico de colágeno en la submucosa genera una cicatriz fija e irreversible.",
    "clinicalPearl": "La eco-endoscopia o entero-RM ayudan a diferenciar edema (inflamatorio) de fibrosis.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Inútil en fibrosis.",
      "2": "Sin efecto en tejido cicatricial.",
      "3": "Solo manejo de soporte."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-13",
    "topic": "eii_avanzada",
    "difficulty": "Fellow",
    "text": "¿Qué hallazgo histológico es patognomónico de la Enfermedad de Crohn (aunque solo aparezca en un 30% de las muestras)?",
    "options": [
      "Abscesos criptas",
      "Granulomas no caseificantes",
      "Distorsión de la arquitectura colónica",
      "Metaplasia de células de Paneth"
    ],
    "correctIndex": 1,
    "explanation": "Los granulomas no caseificantes son el sello distintivo del Crohn y reflejan su naturaleza granulomatosa.",
    "fisiopato": "Agrupación de macrófagos epitelioides en respuesta a un estímulo antigénico crónico desconocido.",
    "clinicalPearl": "Su ausencia no descarta Crohn, pero su presencia lo confirma.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Se ve en ambas (CU y Crohn).",
      "2": "Inespecífico de EII activa.",
      "3": "Signo de cronicidad no específico."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-14",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el riesgo principal del uso crónico de Tofacitinib en pacientes mayores de 50 años con factores de riesgo cardiovascular?",
    "options": [
      "Falla renal aguda",
      "Eventos tromboembólicos venosos y eventos MACE",
      "Anemia hemolítica",
      "Hiperplasia gingival"
    ],
    "correctIndex": 1,
    "explanation": "La FDA y EMA alertan sobre el riesgo de trombosis y eventos cardiacos mayores con inhibidores de JAK.",
    "fisiopato": "Alteración de las vías de señalización de citoquinas que modulan la coagulación y la inflamación vascular.",
    "clinicalPearl": "Evite Tofacitinib si el paciente tiene antecedentes de TVP o TEP.",
    "guideline": "Safety alerts 2023 - JAK inhibitors.",
    "whyWrong": {
      "0": "No es el riesgo principal.",
      "2": "No se asocia.",
      "3": "Efecto de la ciclosporina."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-15",
    "topic": "eii_avanzada",
    "difficulty": "Staff",
    "text": "En el monitoreo de pacientes con biológicos, ¿qué se define como \"Remisión Profunda\" en EII?",
    "options": [
      "Remisión clínica y química (CRP normal)",
      "Remisión clínica y endoscópica (Curación mucosa)",
      "Bilirrubina normal",
      "Ausencia de fístulas externas únicamente"
    ],
    "correctIndex": 1,
    "explanation": "El objetivo actual (Treat-to-Target) es la curación de la mucosa.",
    "fisiopato": "La ausencia de úlceras visibles en la endoscopia predice un menor riesgo de colectomía y complicaciones a largo plazo.",
    "clinicalPearl": "La calprotectina < 50 ug/g es un buen \"proxy\" de curación mucosa.",
    "guideline": "Consenso STRIDE-II.",
    "whyWrong": {
      "0": "Es un objetivo intermedio, no profundo.",
      "2": "Sin relación.",
      "3": "Incompleto."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-16",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "¿Cuál es el examen inicial más adecuado para el tamizaje de esteatorrea en un paciente con sospecha de malabsorción?",
    "options": [
      "Test de Van de Kamer (72h)",
      "Sudán III en deposiciones",
      "Elastasa fecal-1",
      "Cápsula endoscópica"
    ],
    "correctIndex": 1,
    "explanation": "El Sudán III es una prueba cualitativa rápida y costo-efectiva para detectar grasa en heces.",
    "fisiopato": "La presencia de gotas de grasa teñidas indica que no hubo una digestión/absorción adecuada de triglicéridos.",
    "clinicalPearl": "Un Sudán III negativo no descarta esteatorrea leve; si la sospecha persiste, use Van de Kamer.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Es el estándar de oro pero engorroso para tamizaje.",
      "2": "Evalúa función exocrina pancreática específicamente.",
      "3": "No evalúa malabsorción de grasa."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-17",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "Paciente de 80 años con Rectorragia masiva indolora. Hemodinámicamente estable. ¿Cuál es la causa más frecuente de HDB masiva en el adulto mayor?",
    "options": [
      "Hemorroides internas",
      "Angiodisplasias",
      "Enfermedad Diverticular",
      "Cáncer de Colon"
    ],
    "correctIndex": 2,
    "explanation": "Los divertículos son la causa número uno de sangrado digestivo bajo masivo en la población geriátrica.",
    "fisiopato": "La erosión de la vasa recta en el cuello o domo del divertículo provoca un sangrado arterial súbito.",
    "clinicalPearl": "El 75% de los sangrados diverticulares ceden espontáneamente.",
    "guideline": "ACG Guidelines on Management of LGI Bleeding.",
    "whyWrong": {
      "0": "Sangrado escaso.",
      "1": "Suelen dar sangrado crónico o en napa.",
      "3": "Raramente masivo."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-18",
    "topic": "h_pylori",
    "difficulty": "Staff",
    "text": "¿Cuál es el esquema de erradicación de primera línea recomendado en Chile (2025) ante el aumento de la resistencia a claritromicina?",
    "options": [
      "Terapia Triple con Claritromicina",
      "Terapia Cuádruple con Bismuto",
      "Terapia Dual con Amoxicilina dosis alta",
      "Terapia Triple con Levofloxacino"
    ],
    "correctIndex": 1,
    "explanation": "La terapia cuádruple con bismuto (IBP, Bismuto, Metronidazol, Tetraciclina) es preferida en zonas de alta resistencia.",
    "fisiopato": "El bismuto tiene efectos bactericidas directos y sinergismo con antibióticos, superando la resistencia a claritromicina.",
    "clinicalPearl": "Siempre verifique la erradicación con Test de Aire o Antígeno en Deposiciones 4 semanas después de terminar.",
    "guideline": "Manual Chileno 2025 / Consenso de Maastricht VI.",
    "whyWrong": {
      "0": "No recomendada si resistencia >15%.",
      "2": "Prometedora pero aún no estándar general.",
      "3": "Solo para rescate."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-19",
    "topic": "celiaca",
    "difficulty": "Staff",
    "text": "En un paciente con déficit de IgA, ¿cuál es el seromarcador de elección para diagnosticar Enfermedad Celiaca?",
    "options": [
      "Antitransglutaminasa (tTG-IgA)",
      "Anticuerpos Anti-endomisio (EMA-IgA)",
      "Anticuerpos Anti-DGP IgG",
      "HLA-DQ2/DQ8"
    ],
    "correctIndex": 2,
    "explanation": "En pacientes con déficit selectivo de IgA, las pruebas basadas en IgA darán falsos negativos; se debe usar IgG (DGP o tTG-IgG).",
    "fisiopato": "La respuesta inmune al gluten produce anticuerpos tanto de clase IgA como IgG.",
    "clinicalPearl": "Solicite siempre IgA Total al iniciar estudio de celiaquía.",
    "guideline": "ESPGHAN/ACG Celiac Guidelines.",
    "whyWrong": {
      "0": "Falso negativo.",
      "1": "Falso negativo.",
      "3": "Solo tiene valor predictivo negativo."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-20",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el mejor predictor de severidad precoz (primeras 24-48h) en Pancreatitis Aguda según el Manual Chileno 2025?",
    "options": [
      "Niveles de Amilasa/Lipasa",
      "Marcadores inflamatorios (PCR > 150)",
      "Presencia de necrosis en TAC inicial",
      "Escala de Ranson al ingreso"
    ],
    "correctIndex": 1,
    "explanation": "La PCR > 150mg/L a las 48h es un predictor clásico de severidad.",
    "fisiopato": "La magnitud de la respuesta de fase aguda refleja la extensión de la respuesta inflamatoria sistémica y el riesgo de falla orgánica.",
    "clinicalPearl": "No pida TAC antes de las 72h a menos que sospeche complicación aguda; la necrosis tarda en aparecer.",
    "guideline": "Atlanta Classification 2012 / Manual Chileno 2025.",
    "whyWrong": {
      "0": "No se correlacionan con severidad.",
      "2": "TAC precoz subestima la extensión de la necrosis.",
      "3": "Requiere 48h para completarse y es menos dinámica que PCR/BUN."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-21",
    "topic": "masld",
    "difficulty": "Staff",
    "text": "¿Cuál es el score no invasivo preferido para descartar fibrosis avanzada en pacientes con MASLD en la práctica clínica ambulatoria?",
    "options": [
      "FIB-4 Index",
      "APRI Score",
      "NFS (NAFLD Fibrosis Score)",
      "FibroScan (VCTE)"
    ],
    "correctIndex": 0,
    "explanation": "El FIB-4 es ampliamente recomendado por su simplicidad (Edad, AST, ALT, Plaquetas) y alto valor predictivo negativo.",
    "fisiopato": "Refleja la alteración en el metabolismo celular y el atrapamiento plaquetario en el bazo producto de la hipertensión portal incipiente.",
    "clinicalPearl": "Un FIB-4 < 1.3 tiene un VPN > 90% para fibrosis avanzada.",
    "guideline": "AASLD/EASL MASLD Practice Guidance 2024.",
    "whyWrong": {
      "1": "Más útil en Hepatitis C.",
      "2": "Más complejo de calcular, pero válido.",
      "3": "Es una técnica elastográfica, no un score bioquímico simple."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-22",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el marcador serológico que indica inmunidad contra el virus de la Hepatitis B tras la vacunación exitosa?",
    "options": [
      "HBsAg negativo",
      "Anti-HBs positivo (>10 mIU/mL)",
      "Anti-HBc total positivo",
      "HBeAg negativo"
    ],
    "correctIndex": 1,
    "explanation": "La presencia aislada de anticuerpos contra el antígeno de superficie (Anti-HBs) es el sello de la inmunidad por vacuna.",
    "fisiopato": "La vacuna contiene antígeno S recombinante; el sistema inmune genera anticuerpos neutralizantes sin haber estado expuesto al core del virus.",
    "clinicalPearl": "Si el Anti-HBc también es positivo, la inmunidad es por infección natural, no por vacuna.",
    "guideline": "CDC / Manual Chileno 2025.",
    "whyWrong": {
      "0": "Solo indica ausencia de infección activa.",
      "2": "Indica contacto con el virus real (core).",
      "3": "Indica ausencia de replicación viral activa."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-23",
    "topic": "vias_biliares",
    "difficulty": "Staff",
    "text": "En un paciente con Coledocolitiasis sospechada, ¿cuál es el examen de mayor rendimiento diagnóstico antes de considerar una CPRE terapéutica?",
    "options": [
      "Ecografía Abdominal",
      "TAC de abdomen con contraste",
      "Colangioresonancia (CPRM)",
      "Ecografía Endoscópica (USE)"
    ],
    "correctIndex": 3,
    "explanation": "Tanto la CPRM como la USE tienen un rendimiento excelente (>90%), pero la USE es superior para cálculos pequeños (<5mm).",
    "fisiopato": "La proximidad del transductor endoscópico al colédoco distal permite una resolución espacial inalcanzable por métodos transabdominales o magnéticos.",
    "clinicalPearl": "Use CPRE solo para tratamiento, no para diagnóstico primario, debido a su riesgo de complicaciones (pancreatitis).",
    "guideline": "Guías ASGE / ESGE de manejo de coleidocolitiasis.",
    "whyWrong": {
      "0": "Baja sensibilidad para cálculos en colédoco distal.",
      "1": "Mal rendimiento para cálculos de colesterol.",
      "2": "Excelente, pero ligeramente inferior a USE para micro-litos."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-24",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "¿Cuál es el mejor manejo para la encefalopatía hepática recurrente a pesar del uso de Lactulosa?",
    "options": [
      "Aumentar la dosis de lactulosa hasta diarrea líquida",
      "Añadir Rifaximina 550mg cada 12 horas",
      "Realizar un TIPS urgente",
      "Dieta hipoproteica estricta"
    ],
    "correctIndex": 1,
    "explanation": "La rifaximina reduce la recurrencia y las hospitalizaciones por encefalopatía.",
    "fisiopato": "Antibiótico no absorbible que modula la microbiota productora de amonio.",
    "clinicalPearl": "NUNCA use dietas hipoproteicas permanentes; la sarcopenia empeora la encefalopatía.",
    "guideline": "Manual Chileno 2025 / Guías AASLD.",
    "whyWrong": {
      "0": "Riesgo de deshidratación y falla renal.",
      "2": "TIPS puede empeorar la encefalopatía.",
      "3": "Obsoleto y peligroso."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-25",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el criterio para realizar profilaxis primaria de Peritonitis Bacteriana Espontánea (PBE) en cirrosis con ascitis?",
    "options": [
      "Cualquier paciente con ascitis",
      "Proteínas en líquido ascítico < 1.5 g/dL + disfunción renal o Child-Pugh >= 9",
      "Solo si ya tuvo un episodio previo",
      "Si la Bilirrubina es > 5 mg/dL"
    ],
    "correctIndex": 1,
    "explanation": "Se reserva para pacientes con alto riesgo identificado por niveles bajos de proteínas.",
    "fisiopato": "Bajas proteínas en líquido ascítico indican baja actividad opsónica y mayor riesgo de traslocación bacteriana.",
    "clinicalPearl": "La Ciprofloxacina o Norfloxacina son los fármacos de elección.",
    "guideline": "EASL Decompensated Cirrhosis Guidelines 2024.",
    "whyWrong": {
      "0": "Induciría resistencia.",
      "2": "Eso es profilaxis secundaria.",
      "3": "Es un factor pero no el criterio definitorio."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-26",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "¿Cuál es el síntoma extraesofágico con mayor asociación a ERGE según el consenso de Montreal?",
    "options": [
      "Laringitis crónica",
      "Tos crónica",
      "Asma bronquial",
      "Desgaste dental"
    ],
    "correctIndex": 1,
    "explanation": "La tos crónica tiene una asociación establecida con el reflujo gastroesofágico.",
    "fisiopato": "Mediante microaspiración directa o reflejo esofagobronquial mediado por el vago.",
    "clinicalPearl": "No asuma que la tos es ERGE sin descartar causas pulmonares primero.",
    "guideline": "Montreal Consensus on GERD.",
    "whyWrong": {
      "0": "Asociación probable pero menos constante.",
      "2": "Relación bidireccional compleja.",
      "3": "Se asocia pero es más tardío."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-27",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "¿Qué parámetro de la pH-metría es el mejor predictor de respuesta a la cirugía antirreflujo (Funduplicatura)?",
    "options": [
      "Número total de episodios de reflujo",
      "Tiempo de exposición ácida (AET) > 6%",
      "Presencia de reflujo alcalino",
      "DeMeester Score < 14.7"
    ],
    "correctIndex": 1,
    "explanation": "Un AET patológico (>6%) es el marcador de éxito quirúrgico.",
    "fisiopato": "Indica una carga de ácido estructural que la cirugía puede corregir restaurando la competencia del esfínter inferior.",
    "clinicalPearl": "Si el AET es < 4%, la cirugía suele fracasar en aliviar los síntomas.",
    "guideline": "Lyon 2.0 Consensus.",
    "whyWrong": {
      "0": "Menos específico.",
      "2": "Definición controvertida.",
      "3": "Indica normalidad."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-28",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el antibiótico de primera elección para el tratamiento empírico de la diarrea del viajero grave o febril en adultos?",
    "options": [
      "Ciprofloxacino",
      "Azitromicina",
      "Amoxicilina",
      "Metronidazol"
    ],
    "correctIndex": 1,
    "explanation": "La azitromicina es preferida por la creciente resistencia de Campylobacter a las quinolonas.",
    "fisiopato": "Inhibe la síntesis proteica bacteriana uniéndose a la subunidad 50S del ribosoma.",
    "clinicalPearl": "Especialmente recomendada para viajeros a Asia (Tailandia) por alta resistencia a Cipro.",
    "guideline": "Manual Chileno 2025 / Guías IDSA.",
    "whyWrong": {
      "0": "Alta tasa de resistencia actual.",
      "2": "Sin rol.",
      "3": "Solo si sospecha Giardia o C. diff."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-29",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "En un paciente con diarrea sanguinolenta y sospecha de E. coli enterohemorrágica (O157:H7), ¿por qué están contraindicados los antibióticos?",
    "options": [
      "Aumentan el riesgo de Síndrome Hemolítico Urémico (SHU)",
      "Producen diarrea por C. difficile",
      "Retrasan la curación espontánea",
      "No tienen efecto sobre la bacteria"
    ],
    "correctIndex": 0,
    "explanation": "Los antibióticos inducen la liberación masiva de toxina Shiga por el fago bacteriano.",
    "fisiopato": "La fragmentación bacteriana libera la toxina que daña el endotelio glomerular y activa la cascada de coagulación.",
    "clinicalPearl": "Ante una disentería sin fiebre alta, piense en EHEC y evite antibióticos.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "1": "Poco relevante comparado con el SHU.",
      "2": "Secundario.",
      "3": "Sí tienen efecto pero el resultado es deletéreo."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-30",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el objetivo de hemoglobina recomendado para la transfusión en HDA no varicosa según guías actuales (Estrategia restrictiva)?",
    "options": [
      "Hgb > 10 g/dL",
      "Hgb > 7 g/dL",
      "Hgb > 12 g/dL",
      "Hgb > 9 g/dL"
    ],
    "correctIndex": 1,
    "explanation": "La estrategia restrictiva (< 7) reduce el resangrado y la mortalidad.",
    "fisiopato": "Sobre-transfundir aumenta la presión portal y esplácnica, rompiendo la hemostasia local.",
    "clinicalPearl": "En pacientes con cardiopatía isquémica activa, el umbral sube a 8-9 g/dL.",
    "guideline": "Villanueva et al. / Consenso HDA.",
    "whyWrong": {
      "0": "Aumenta mortalidad.",
      "2": "Peligrosamente alto.",
      "3": "Usado en situaciones específicas pero no es el estándar general."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-31",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "Ante una HDA varicosa masiva que no responde a terapia endoscópica inicial ni fármacos vasoactivos, ¿cuál es el puente recomendado?",
    "options": [
      "Cirugía de derivación portosistémica",
      "Sonda de Sengstaken-Blakemore o Prótesis esofágica autoexpandible (Danis)",
      "Escleroterapia ciega",
      "Lactulosa enemas"
    ],
    "correctIndex": 1,
    "explanation": "Son balones o prótesis que comprimen mecánicamente las várices para control temporal.",
    "fisiopato": "Hemostasia mecánica directa por presión.",
    "clinicalPearl": "Máximo 24h para el balón de Sengstaken por riesgo de necrosis esofajica.",
    "guideline": "Manual Chileno 2025 / Baveno VII.",
    "whyWrong": {
      "0": "Morbimortalidad excesiva en agudo.",
      "2": "Obsoleto/Peligroso por ceguera.",
      "3": "No detiene el sangrado."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-32",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "En un paciente con dolor abdominal crónico y sospecha de Porfiria Intermitente Aguda, ¿cuál es el hallazgo bioquímico clave durante la crisis?",
    "options": [
      "Elevación de ALA y PBG urinario",
      "Coproporfirinas fecales elevadas",
      "Anemia hemolítica marcada",
      "Hiperbilirrubinemia directa"
    ],
    "correctIndex": 0,
    "explanation": "La elevación de ácido delta-aminolevulínico (ALA) y porfobilinógeno (PBG) en orina durante el dolor es diagnóstica.",
    "fisiopato": "Déficit de PBG-desaminasa que genera acumulación de precursores neurotóxicos.",
    "clinicalPearl": "La orina puede oscurecerse al exponerse a la luz solar.",
    "guideline": "Guías internacionales de Porfiria / Manual Chileno 2025.",
    "whyWrong": {
      "1": "Poco específico en crisis aguda.",
      "2": "No es característica de porfiria hepática aguda.",
      "3": "No es un marcador de porfiria."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-33",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "Según Baveno VII, ¿cuál es el umbral de elastografía hepática (FibroScan) para considerar que un paciente tiene Hipertensión Portal Clínicamente Significativa (HPCS)?",
    "options": [
      "> 10 kPa",
      "> 15 kPa",
      "> 20-25 kPa",
      "> 75 kPa"
    ],
    "correctIndex": 2,
    "explanation": "Baveno VII establece que valores >20-25 kPa tienen alta probabilidad de HPCS (Gradiente > 10 mmHg).",
    "fisiopato": "La rigidez hepática correlaciona con la resistencia intrahepática al flujo venoso portal.",
    "clinicalPearl": "Si el paciente tiene < 20 kPa y plaquetas > 150.000, el riesgo de várices de alto riesgo es < 5%.",
    "guideline": "Consenso Baveno VII (2022).",
    "whyWrong": {
      "0": "Indica fibrosis avanzada únicamente.",
      "1": "Umbral para compensada avanzada.",
      "3": "Valor máximo de la máquina, no un umbral de HPCS."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-34",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo de acción de la Terlipresina en el tratamiento del Síndrome Hepatorrenal tipo 1 (SHR-AKI)?",
    "options": [
      "Antagonista de la Aldosterona",
      "Agonista V1 de vasopresina portosistémico",
      "Inhibidor de la óxido nítrico sintasa",
      "Vasodilatador renal directo"
    ],
    "correctIndex": 1,
    "explanation": "La terlipresina actúa sobre receptores V1 produciendo vasoconstricción esplácnica potente.",
    "fisiopato": "Reduce la vasodilatación arterial esplácnica mediada por NO, lo que aumenta la resistencia vascular sistémica y mejora la perfusión renal.",
    "clinicalPearl": "Vigilar saturación de O2: la terlipresina puede causar edema pulmonar e isquemia coronaria.",
    "guideline": "EASL Guidelines on Decompensated Cirrhosis.",
    "whyWrong": {
      "0": "Efecto de la espironolactona.",
      "2": "Mecanismo no utilizado en SHR.",
      "3": "El SHR se caracteriza por vasoconstricción renal extrema; se requiere lo opuesto: vasoconstricción sistémica."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-35",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "En la patogenia de la Encefalopatía Hepática, ¿cómo afecta el amoníaco a los astrocitos cerebrales?",
    "options": [
      "Hipertrofia y aumento de la sinapsis",
      "Edema por acumulación de Glutamina intracelular",
      "Necrosis por apoptosis mediada por Caspasa-3",
      "Desmielinización de la sustancia blanca"
    ],
    "correctIndex": 1,
    "explanation": "El amoníaco es convertido en glutamina por la glutamina sintetasa en el astrocito, generando estrés osmótico.",
    "fisiopato": "La glutamina es un osmolito potente; su acumulación atrae agua al interior del astrocito, provocando edema cerebral y disfunción neurotransmisora.",
    "clinicalPearl": "El edema cerebral severo es más frecuente en falla hepática aguda que en crónica.",
    "guideline": "AASLD/EASL Hepatic Encephalopathy Guidelines.",
    "whyWrong": {
      "0": "Ocurre lo contrario (disfunción).",
      "2": "El mecanismo es osmótico, no primariamente necrótico.",
      "3": "Mecanismo de otras patologías neurodegenerativas."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-36",
    "topic": "perfil_hepatico",
    "difficulty": "Fellow",
    "text": "¿Qué hallazgo en el perfil hepático sugiere colestasis extrahepática obstructiva aguda por coledocolitiasis?",
    "options": [
      "Elevación aislada de GGT",
      "Elevación marcada de transaminasas inicial (>500) que cae rápido",
      "Fosfatasa alcalina normal con Bilirrubina de 15 mg/dl",
      "AST/ALT > 5"
    ],
    "correctIndex": 1,
    "explanation": "En las primeras horas de una obstrucción biliar súbita (paso de cálculo), las transaminasas pueden elevarse por \"golpe enzimático\".",
    "fisiopato": "El aumento súbito de la presión hidrostática en los canalículos biliares regurgita enzimas a los sinusoides hepáticos.",
    "clinicalPearl": "Ante una elevación súbita de transaminasas que baja en 24-48h, piense en coledocolitiasis, no en hepatitis viral.",
    "guideline": "Manual Chileno de Gastroenterología 2025.",
    "whyWrong": {
      "0": "Poco específico.",
      "2": "En colestasis obstructiva la FA siempre se eleva posteriormente.",
      "3": "Sugiere alcoholismo o isquemia."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-37",
    "topic": "perfil_hepatico",
    "difficulty": "Subspecialist",
    "text": "Un paciente presenta elevación aislada de Fosfatasa Alcalina de origen óseo. ¿Cómo se confirma este origen usando solo el hepatograma estándar?",
    "options": [
      "La GGT será normal",
      "La Bilirrubina será > 2 mg/dl",
      "La Albúmina estará baja",
      "La LDH estará el doble de lo normal"
    ],
    "correctIndex": 0,
    "explanation": "La GGT es específica del árbol biliar. Si la FA está elevada pero la GGT es normal, el origen suele ser óseo.",
    "fisiopato": "La FA se produce en osteoblastos y colangiocitos, pero la GGT no se expresa en el tejido óseo.",
    "clinicalPearl": "Especialmente útil en adolescentes en crecimiento o pacientes con enfermedad de Paget.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "1": "No tiene relación con el origen de la FA.",
      "2": "Indica síntesis hepática.",
      "3": "Indica recambio celular general."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-38",
    "topic": "eii_avanzada",
    "difficulty": "Fellow",
    "text": "¿Cuál es el hallazgo endoscópico más característico de la Enfermedad de Crohn que la diferencia de la Colitis Ulcerosa?",
    "options": [
      "Afectación rectal constante",
      "Lesiones \"en parches\" (skip lesions)",
      "Pseudopólipos difusos",
      "Sangrado fácil al roce (friabilidad)"
    ],
    "correctIndex": 1,
    "explanation": "La Enfermedad de Crohn se caracteriza por áreas inflamadas alternadas con mucosa sana.",
    "fisiopato": "Es una inflamación transmural que puede afectar cualquier segmento del tubo digestivo, desde la boca hasta el ano.",
    "clinicalPearl": "Si el recto está respetado y hay compromiso ileal, sospeche Crohn con alta probabilidad.",
    "guideline": "Manual Chileno 2025 / Guías ECCO.",
    "whyWrong": {
      "0": "Es típico de CU.",
      "2": "Se ve en ambas pero es más común en CU activa crónica.",
      "3": "Característica clásica de la proctitis ulcerosa."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-39",
    "topic": "eii_avanzada",
    "difficulty": "Staff",
    "text": "En el manejo de la Colitis Ulcerosa Grave (Criterios de Truelove-Witts), ¿cuál es el plazo de tiempo recomendado para evaluar la respuesta a corticoides endovenosos antes de considerar terapia de rescate?",
    "options": [
      "24 horas",
      "3 a 5 días",
      "7 a 10 días",
      "2 semanas"
    ],
    "correctIndex": 1,
    "explanation": "Se debe evaluar la respuesta (índice de Oxford o similar) entre el día 3 y el día 5.",
    "fisiopato": "La persistencia de una respuesta inflamatoria sistémica severa tras 72h de esteroides indica una falla al manejo médico inicial y alto riesgo de colectomía.",
    "clinicalPearl": "Más de 8 deposiciones al día o PCR > 45 al tercer día predice falla a corticoides en un 85%.",
    "guideline": "Manual Chileno 2025 - EII Grave.",
    "whyWrong": {
      "0": "Muy pronto para ver efecto.",
      "2": "Demasiado tarde; aumenta el riesgo de complicaciones quirúrgicas.",
      "3": "Inaceptable en un cuadro grave."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-40",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo de acción del Upadacitinib, recientemente aprobado para CU moderada-grave?",
    "options": [
      "Antagonista de la Interleucina 12/23",
      "Inhibidor selectivo de JAK-1",
      "Bloqueador de la integrina alfa-4-beta-7",
      "Anticuerpo monoclonal anti-TNF"
    ],
    "correctIndex": 1,
    "explanation": "El Upadacitinib es una pequeña molécula que inhibe de forma selectiva a JAK-1.",
    "fisiopato": "Bloquea la vía de señalización JAK-STAT, impidiendo la transcripción de múltiples citoquinas proinflamatorias.",
    "clinicalPearl": "A diferencia de los biológicos, es oral y no genera anticuerpos anti-fármaco.",
    "guideline": "ECCO / AGA Practice Update 2024.",
    "whyWrong": {
      "0": "Es el mecanismo del Ustekinumab.",
      "2": "Mecanismo del Vedolizumab.",
      "3": "Mecanismo de Infliximab/Adalimumab."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-41",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "Un paciente presenta diarrea crónica que cede por completo con el ayuno. El hiato osmótico fecal (Osmotic Gap) es de 160 mOsm/kg. ¿Qué tipo de diarrea es?",
    "options": [
      "Diarrea Secretora",
      "Diarrea Osmótica",
      "Diarrea Exudativa",
      "Diarrea Motora"
    ],
    "correctIndex": 1,
    "explanation": "Un hiato osmótico > 100 y la respuesta al ayuno son típicos de la diarrea osmótica.",
    "fisiopato": "La presencia de solutos no absorbidos en la luz intestinal retrae agua por gradiente osmótico.",
    "clinicalPearl": "Piense en intolerancia a lactosa o uso subrepticio de laxantes magnésicos.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "No cede con ayuno y tiene gap < 50.",
      "2": "Suele tener sangre/pus.",
      "3": "Relacionada con neuropatías o hipertiroidismo."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-42",
    "topic": "diarrea_cronica",
    "difficulty": "Staff",
    "text": "¿Cuál es la utilidad principal de la Calprotectina Fecal en el estudio de diarrea crónica?",
    "options": [
      "Sustituir a la colonoscopia en todos los casos",
      "Diferenciar diarrea funcional (SII) de diarrea orgánica inflamatoria",
      "Diagnosticar mala absorción de sales biliares",
      "Detectar infección por Clostridioides difficile"
    ],
    "correctIndex": 1,
    "explanation": "Es un marcador con alto valor predictivo negativo para inflamación intestinal.",
    "fisiopato": "La calprotectina es una proteína liberada por los neutrófilos cuando migran a la mucosa intestinal inflamada.",
    "clinicalPearl": "Valores < 50 ug/g hacen muy improbable una EII activa.",
    "guideline": "Guías AGA sobre biomarcadores en EII / Manual Chileno 2025.",
    "whyWrong": {
      "0": "Nunca sustituye a la biopsia si hay síntomas de alarma.",
      "2": "Para eso se usa el SeHCAT o prueba terapéutica.",
      "3": "Inespecífico para C. diff, aunque puede elevarse."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-43",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "¿Cuál es el momento óptimo para realizar un drenaje de una necrosis pancreática amurallada (WON) infectada?",
    "options": [
      "Inmediatamente al diagnóstico de infección",
      "A las 72h del inicio del cuadro",
      "Después de las 4 semanas (fase tardía)",
      "Solo si hay choque séptico refractario"
    ],
    "correctIndex": 2,
    "explanation": "El dogma actual es el \"delayed approach\"; esperar a que la necrosis se delimite y amuralle (WON).",
    "fisiopato": "Esperar 4 semanas permite que se forme una pared fibrosa, facilitando el drenaje transmural endoscópico y reduciendo el riesgo de sangrado o perforación.",
    "clinicalPearl": "El abordaje \"Step-up\" (drenaje percutáneo/endoscópico antes que cirugía) es el estándar.",
    "guideline": "Manual Chileno 2025 / Guías IAP-APA.",
    "whyWrong": {
      "0": "Aumenta morbi-mortalidad significativamente.",
      "1": "La necrosis aún es líquida y no delimitada.",
      "3": "Para entonces puede ser tarde; el criterio es la amurallación, no solo el choque."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-44",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la mutación genética más frecuentemente asociada a Pancreatitis Hereditaria con herencia autosómica dominante?",
    "options": [
      "CFTR",
      "PRSS1",
      "SPINK1",
      "CASR"
    ],
    "correctIndex": 1,
    "explanation": "La mutación en el gen del tripsinógeno catiónico (PRSS1) es la causa clásica de pancreatitis hereditaria.",
    "fisiopato": "La mutación impide la autoinactivación de la tripsina intracecinar, gatillando una cascada de autodigestión pancreática recurrente.",
    "clinicalPearl": "Estos pacientes tienen un riesgo acumulado de cáncer de páncreas de hasta el 40% a los 70 años.",
    "guideline": "Manual Chileno 2025 - Genética en Páncreas.",
    "whyWrong": {
      "0": "Asociada a fibrosis quística y pancreatitis idiopática (recidivante).",
      "2": "Es un inhibidor de la tripsina; sus mutaciones suelen ser más complejas/recesivas.",
      "3": "Relacionada con el sensor de calcio."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-45",
    "topic": "h_pylori",
    "difficulty": "Fellow",
    "text": "¿Cuál es el factor de virulencia de H. pylori más fuertemente asociado con el desarrollo de adenocarcinoma gástrico?",
    "options": [
      "Ureasa",
      "Oncoproteína CagA",
      "Flagelina",
      "VacA"
    ],
    "correctIndex": 1,
    "explanation": "CagA (Cytotoxin-associated gene A) se inyecta en la célula gástrica y altera las vías de señalización de crecimiento.",
    "fisiopato": "Provoca una respuesta inflamatoria intensa y desregulación del citoesqueleto celular, favoreciendo la transformación neoplásica.",
    "clinicalPearl": "CagA positivo es un marcador de cepas \"agresivas\".",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Supervivencia, no oncogénesis primaria.",
      "2": "Movilidad.",
      "3": "Produce vacuolización pero CagA es el principal oncogén."
    },
    "pillar": "Phatophysiology"
  },
  {
    "id": "q-46",
    "topic": "h_pylori",
    "difficulty": "Staff",
    "text": "En una paciente embarazada con dispepsia y H. pylori confirmado, ¿cuál es la conducta recomendada?",
    "options": [
      "Tratar inmediatamente con esquema cuádruple",
      "Diferir el tratamiento hasta después del parto y lactancia",
      "Tratar solo con Amoxicilina",
      "Realizar endoscopia mensual de control"
    ],
    "correctIndex": 1,
    "explanation": "La erradicación no es una urgencia y los antibióticos (especialmente tetraciclinas y bismuto) están contraindicados o son riesgosos.",
    "fisiopato": "Riesgo de teratogenicidad o efectos secundarios fetales innecesarios.",
    "clinicalPearl": "Use IBP de ser estrictamente necesario para síntomas, aunque con precaución.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Peligroso por tetraciclina/bismuto.",
      "2": "Ineficaz como monoterapia.",
      "3": "Innecesario."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-47",
    "topic": "h_pylori",
    "difficulty": "Fellow",
    "text": "¿Cuánto tiempo debe haber pasado desde el fin del tratamiento antibiótico para realizar un test de aire espirado confiable?",
    "options": [
      "1 semana",
      "2 semanas",
      "4 semanas",
      "2 meses"
    ],
    "correctIndex": 2,
    "explanation": "Se requieren 4 semanas post-antibiótico y 2 semanas post-IBP para evitar falsos negativos.",
    "fisiopato": "Permite que la carga bacteriana residual (si la hay) se recupere a niveles detectables por la ureasa.",
    "clinicalPearl": "Nunca use serología para confirmar erradicación.",
    "guideline": "Maastricht VI.",
    "whyWrong": {
      "0": "Muy pronto.",
      "1": "Intervalo para IBP, no para antibiótico.",
      "3": "Excesivo, aunque seguro."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-48",
    "topic": "h_pylori",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el rol del Vonoprazan en la nueva terapia para H. pylori?",
    "options": [
      "Es un nuevo antibiótico macrólido",
      "Es un bloqueador de ácido competitivo de potasio (P-CAB) con efecto más rápido y duradero",
      "Es un probiótico específico",
      "Es un quelante de sales biliares"
    ],
    "correctIndex": 1,
    "explanation": "Vonoprazan logra un pH gástrico > 6 de forma más estable que los IBP tradicionales.",
    "fisiopato": "H. pylori es más sensible a los antibióticos cuando no está en fase estacionaria, lo cual ocurre a pH alto.",
    "clinicalPearl": "Especialmente útil en pacientes con metabolización rápida de IBP (CYP2C19).",
    "guideline": "Manual Chileno 2025 / FDA Approval 2023.",
    "whyWrong": {
      "0": "Falso.",
      "2": "Falso.",
      "3": "Falso."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-49",
    "topic": "celiaca",
    "difficulty": "Staff",
    "text": "¿Cuál de los siguientes cereales está PERMITIDO en la dieta de un paciente celiaco?",
    "options": [
      "Trigo",
      "Cebada",
      "Centeno",
      "Arroz"
    ],
    "correctIndex": 3,
    "explanation": "El arroz, maíz, quinoa y amaranto no contienen las prolaminas tóxicas para el celiaco.",
    "fisiopato": "No contienen gliadina (trigo), hordeína (cebada) ni secalina (centeno).",
    "clinicalPearl": "Cuidado con la avena: debe estar certificada \"libre de gluten\" por riesgo de contaminación cruzada.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Prohibido.",
      "1": "Prohibido.",
      "2": "Prohibido."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-50",
    "topic": "celiaca",
    "difficulty": "Fellow",
    "text": "¿Qué hallazgo en la biopsia duodenal define el grado Marsh 3a?",
    "options": [
      "Aumento de linfocitos intraepiteliales solamente",
      "Hiperplasia de criptas con vellosidades normales",
      "Atrofia vellositaria parcial con hiperplasia de criptas",
      "Atrofia vellositaria total"
    ],
    "correctIndex": 2,
    "explanation": "Marsh 3 se divide en a (parcial), b (subtotal) y c (total).",
    "fisiopato": "La respuesta infiltrativa progresa a hiperplásica y finalmente a destructiva por la respuesta citotóxica al gluten.",
    "clinicalPearl": "Se requieren al menos 4 a 6 biopsias (incluyendo bulbo) para un diagnóstico correcto.",
    "guideline": "Classificación de Marsh-Oberhuber.",
    "whyWrong": {
      "0": "Marsh 1.",
      "1": "Marsh 2.",
      "3": "Marsh 3c."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-51",
    "topic": "celiaca",
    "difficulty": "Subspecialist",
    "text": "En un paciente con síntomas persistentes a pesar de dieta estricta, ¿qué sugiere el hallazgo de linfocitos intraepiteliales con fenotipo aberrante (CD3+, CD8-, CD4-)?",
    "options": [
      "Celiaquía refractaria tipo 1",
      "Celiaquía refractaria tipo 2 (RCD2)",
      "Linfoma de células T asociado a enteropatía (EATL)",
      "Intolerancia a la lactosa asociada"
    ],
    "correctIndex": 1,
    "explanation": "La pérdida de marcadores de superficie CD8 y CD4 en los LIE es sello de la RCD2.",
    "fisiopato": "Representa una expansión clonal premaligna de linfocitos T.",
    "clinicalPearl": "La RCD2 tiene un alto riesgo de progresión a linfoma de células T.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Fenotipo normal pero sin respuesta clínica.",
      "2": "Ya es la neoplasia establecida (masa/B-symptoms).",
      "3": "Sin relación histológica."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-52",
    "topic": "motores_esofago",
    "difficulty": "Subspecialist",
    "text": "Según la Clasificación de Chicago 4.0, ¿cuál es el criterio manométrico indispensable para el diagnóstico de Acalasia Tipo III (Espástica)?",
    "options": [
      "IRP elevado y 100% de peristalsis fallida",
      "IRP elevado y >=20% de contracciones prematuras (DL < 4.5s)",
      "IRP normal con ondas de gran amplitud",
      "Ausencia total de contractilidad"
    ],
    "correctIndex": 1,
    "explanation": "La acalasia tipo III se define por la obstrucción al flujo de la unión EG (IRP elevado) y la presencia de espasmo distal.",
    "fisiopato": "Se produce por una pérdida de la inhibición nitrérgica que genera contracciones terciarias simultáneas y prematuras en el cuerpo esofágico.",
    "clinicalPearl": "El POEM es la terapia de elección para la Acalasia Tipo III debido a que permite una miotomía más extensa del cuerpo esofágico.",
    "guideline": "Chicago Classification v4.0.",
    "whyWrong": {
      "0": "Criterio general de acalasia pero no define el subtipo.",
      "2": "El IRP debe estar elevado.",
      "3": "Define la aperistalsis ausente (Tipo I)."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-53",
    "topic": "cancer_esofago",
    "difficulty": "Staff",
    "text": "En el seguimiento de un paciente con Esófago de Barrett con displasia de bajo grado confirmada por dos patólogos, ¿cuál es la conducta recomendada?",
    "options": [
      "Seguimiento endoscópico cada 3 meses",
      "Esofaguectomía distal",
      "Ablación por radiofrecuencia (RFA)",
      "Dosis doble de IBP y control en 1 año"
    ],
    "correctIndex": 2,
    "explanation": "La ablación endoscópica es preferida sobre el seguimiento para reducir el riesgo de progresión a adenocarcinoma.",
    "fisiopato": "La radiofrecuencia elimina el epitelio metaplásico y displásico, permitiendo la re-epitelización con tejido escamoso normal.",
    "clinicalPearl": "La displasia SIEMPRE debe ser confirmada por un segundo patólogo experto en GI antes de tomar conductas invasivas.",
    "guideline": "Manual Chileno 2025 / Guías ASGE.",
    "whyWrong": {
      "0": "Opción válida anteriormente, pero hoy se prefiere erradicar.",
      "1": "Morbilidad excesiva para una displasia de bajo grado.",
      "3": "No elimina el riesgo de progresión."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-54",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Paciente usuario crónico de AINES presenta úlcera gástrica. ¿Cuál es el mecanismo principal por el cual los AINES no selectivos (COX-1/2) inducen daño gastroduodenal?",
    "options": [
      "Aumento de la secreción de ácido clorhídrico",
      "Inhibición de la síntesis de prostaglandinas protectores (PGE2)",
      "Efecto cáustico directo por el pH ácido del fármaco",
      "Inhibición del factor intrínseco"
    ],
    "correctIndex": 1,
    "explanation": "Las prostaglandinas son fundamentales para el flujo sanguíneo y la secreción de moco/bicarbonato.",
    "fisiopato": "Al inhibir la COX-1, se reduce la PGE2 gástrica, lo que disminuye la barrera de moco y sensibiliza a la mucosa ante el ácido y la pepsina.",
    "clinicalPearl": "El uso de IBP profiláctico es mandatorio en usuarios de AINES con factores de riesgo (edad > 65, antecedentes de úlcera).",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Los AINES no aumentan el ácido per se.",
      "2": "Es un efecto menor e irrelevante comparado con el sistémico.",
      "3": "No tiene relación."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-55",
    "topic": "cancer_gastrico",
    "difficulty": "Staff",
    "text": "Según el Manual Chileno 2025, ¿cuál es el objetivo primordial del protocolo de biopsias de Sídney modificado en el tamizaje de cáncer gástrico?",
    "options": [
      "Diagnosticar H. pylori únicamente",
      "Estadificar la extensión de la Atrofia y Metaplasia Intestinal (OLGA/OLGIM)",
      "Detectar linfoma MALT",
      "Evaluar la presencia de esofagitis eosinofílica"
    ],
    "correctIndex": 1,
    "explanation": "El sistema OLGA/OLGIM permite identificar pacientes de alto riesgo (Estadios III/IV) que requieren vigilancia estrecha.",
    "fisiopato": "La cascada de Correa (Gastritis -> Atrofia -> Metaplasia -> Displasia -> Cáncer) es el sustrato para el desarrollo del tipo intestinal.",
    "clinicalPearl": "Chile tiene una de las tasas más altas de cáncer gástrico; el tamizaje oportuno salva vidas.",
    "guideline": "Manual Chileno de Gastroenterología 2025.",
    "whyWrong": {
      "0": "Es parte del proceso pero no el único fin.",
      "2": "Menos frecuente.",
      "3": "Se evalúa en el esófago, no con Sídney."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-56",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es la causa más frecuente de Pancreatitis Aguda a nivel mundial y en Chile?",
    "options": [
      "Alcohol",
      "Litiasis Biliar",
      "Hipertrigliceridemia",
      "Fármacos"
    ],
    "correctIndex": 1,
    "explanation": "La litiasis biliar representa más del 60-70% de los casos en Chile.",
    "fisiopato": "El paso de un cálculo micro o macroscópico por la papila genera obstrucción del conducto pancreático e hipertensión ductal.",
    "clinicalPearl": "Toda pancreatitis sin causa clara debe tener una ecografía abdominal para buscar colelitiasis.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Segunda causa.",
      "2": "Causa importante si triglicéridos > 1000.",
      "3": "Poco frecuente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-57",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "¿En qué caso está indicado el uso profiláctico de antibióticos en Pancreatitis Aguda?",
    "options": [
      "Necrosis pancreática > 30%",
      "Pancreatitis aguda grave de entrada",
      "En ningún caso de forma profiláctica",
      "Si la amilasa es > 3000"
    ],
    "correctIndex": 2,
    "explanation": "Las guías actuales (IAP/APA/Atlanta) NO recomiendan antibióticos profilácticos, incluso en necrosis extensa.",
    "fisiopato": "No previenen la infección de la necrosis y aumentan el riesgo de infecciones fúngicas.",
    "clinicalPearl": "Solo use antibióticos si hay sospecha clínica o confirmación de necrosis infectada.",
    "guideline": "Manual Chileno 2025 / Guías de la IAP.",
    "whyWrong": {
      "0": "Obsoleto.",
      "1": "Obsoleto.",
      "3": "Sin relación."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-58",
    "topic": "eii",
    "difficulty": "Staff",
    "text": "¿Cuál es la principal diferencia histológica entre la Colitis Ulcerosa y la Enfermedad de Crohn?",
    "options": [
      "La profundidad de la inflamación (Transmural vs Mucosa)",
      "La presencia de abscesos de criptas",
      "La distorsión arquitectural",
      "La presencia de moco"
    ],
    "correctIndex": 0,
    "explanation": "La CU es una enfermedad de la mucosa/submucosa superficial, mientras que el Crohn afecta toda la pared (transmural).",
    "fisiopato": "La inflamación transmural del Crohn explica su tendencia a formar fístulas y estenosis.",
    "clinicalPearl": "Las biopsias endoscópicas a veces no ven la transmuralidad; la clínica es clave.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "1": "En ambas.",
      "2": "En ambas crónicas.",
      "3": "Inespecífico."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-59",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "¿Cuál es el tratamiento de mantención de primera línea para la Colitis Ulcerosa leve a moderada?",
    "options": [
      "Corticoides orales",
      "5-ASA (Mesalazina) oral y rectal",
      "Azatioprina",
      "Infliximab"
    ],
    "correctIndex": 1,
    "explanation": "Los aminosalicilatos (5-ASA) son el pilar del tratamiento en CU leve/moderada.",
    "fisiopato": "Actúan localmente en la mucosa modulando mediadores de la inflamación.",
    "clinicalPearl": "La terapia combinada (oral + tópica) es superior a la oral sola, incluso en enfermedad extensa.",
    "guideline": "Manual Chileno 2025 / Guías AGA.",
    "whyWrong": {
      "0": "No sirven para mantención.",
      "2": "Para casos refractarios o dependientes de corticoides.",
      "3": "Para enfermedad moderada-grave."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-60",
    "topic": "biologia",
    "difficulty": "Subspecialist",
    "text": "En el Síndrome de Lynch (HNPCC), ¿cuál es el mecanismo genético subyacente que predispone al cáncer colorrectal?",
    "options": [
      "Mutación en el gen supresor tumoral APC",
      "Defecto en los genes de reparación de desajustes del ADN (MMR)",
      "Mutación activadora en el protooncogén KRAS",
      "Amplificación del gen HER2/neu"
    ],
    "correctIndex": 1,
    "explanation": "El Síndrome de Lynch se debe a mutaciones germinales en genes como MLH1, MSH2, MSH6 o PMS2.",
    "fisiopato": "La falla en la reparación de errores de replicación (MMR) genera inestabilidad de microsatélites (MSI-H) y rápida progresión tumoral.",
    "clinicalPearl": "Siga los criterios de Ámsterdam II para identificar familias con sospecha de Lynch.",
    "guideline": "Manual Chileno 2025 / Guías de Oncogenética.",
    "whyWrong": {
      "0": "Mecanismo de la Poliposis Adenomatosa Familiar (FAP).",
      "2": "Ocurre en la progresión tumoral pero no es la causa hereditaria inicial.",
      "3": "Asociado a cáncer de mama o gástrico avanzado."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-61",
    "topic": "nutricion",
    "difficulty": "Staff",
    "text": "¿Cuál es el sitio anatómico de mayor absorción de la Vitamina B12 (Cobalamina) a través de su unión con el Factor Intrínseco?",
    "options": [
      "Duodeno",
      "Yeyuno proximal",
      "Íleon distal",
      "Colon ascendente"
    ],
    "correctIndex": 2,
    "explanation": "El íleon distal posee receptores específicos (cubilina) para el complejo B12-Factor Intrínseco.",
    "fisiopato": "La absorción requiere de pH ácido gástrico, factor intrínseco, enzimas pancreáticas y un íleon terminal sano.",
    "clinicalPearl": "En pacientes con resección ileal > 60cm, la suplementación intramuscular de B12 es obligatoria de por vida.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Se absorbe Hierro.",
      "1": "Se absorbe Ácido Fólico.",
      "3": "Solo absorbe agua y electrolitos."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-62",
    "topic": "masld",
    "difficulty": "Fellow",
    "text": "¿Cuál es el pilar fundamental del manejo de la esteatosis hepática metabólica?",
    "options": [
      "Vitamina E",
      "Baja de peso y cambios en estilo de vida",
      "Metformina",
      "Ácido Ursodesoxicólico"
    ],
    "correctIndex": 1,
    "explanation": "La pérdida de peso del 7-10% es la única medida que ha demostrado revertir la fibrosis.",
    "fisiopato": "Disminuye la lipotoxicidad y el estrés oxidativo hepatocelular.",
    "clinicalPearl": "La dieta mediterránea es la más recomendada.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Solo en casos seleccionados.",
      "2": "No tiene rol en MASLD.",
      "3": "Sin beneficio."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-63",
    "topic": "masld",
    "difficulty": "Staff",
    "text": "¿Cuál es la principal causa de muerte en pacientes con MASLD?",
    "options": [
      "Hepatocarcinoma",
      "Cirrosis descompensada",
      "Enfermedad Cardiovascular",
      "Hemorragia varicosa"
    ],
    "correctIndex": 2,
    "explanation": "Aunque el daño hepático es importante, la mayoría de los pacientes fallece por causas cardiovasculares.",
    "fisiopato": "El MASLD es la manifestación hepática del síndrome metabólico, compartiendo factores pro-aterogénicos.",
    "clinicalPearl": "Siempre evalúe el riesgo cardiovascular (Framingham/SCORE) en estos pacientes.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Aumentado pero no es la causa #1.",
      "1": "Solo en estadios avanzados.",
      "3": "Complicación de cirrosis."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-64",
    "topic": "vias_biliares",
    "difficulty": "Fellow",
    "text": "¿Cuál es la tríada de Charcot?",
    "options": [
      "Dolor, Ictericia, Masa palpable",
      "Fiebre, Ictericia, Dolor HD",
      "Vómitos, Dolor, Ictericia",
      "Fiebre, Sepsis, Choque"
    ],
    "correctIndex": 1,
    "explanation": "Fiebre, ictericia y dolor en hipocondrio derecho definen la tríada de Charcot para colangitis.",
    "fisiopato": "Refleja la infección de la bilis estancada bajo presión.",
    "clinicalPearl": "La péntada de Reynolds añade choque y compromiso de conciencia.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Sugerente de cáncer.",
      "2": "Inespecífico.",
      "3": "Partes de la péntada."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-65",
    "topic": "vias_biliares",
    "difficulty": "Staff",
    "text": "En un paciente con colecistitis aguda y riesgo quirúrgico prohibitivo, ¿cuál es la alternativa terapéutica?",
    "options": [
      "Antibióticos indefinidos",
      "Colecistostomía percutánea",
      "Litotricia extracorpórea",
      "CPRE"
    ],
    "correctIndex": 1,
    "explanation": "La colecistostomía drena la vesícula y resuelve el cuadro infeccioso agudo.",
    "fisiopato": "Descompone el órgano inflamado sin necesidad de cirugía mayor.",
    "clinicalPearl": "Es una medida de puente hacia la cirugía o definitiva en pacientes muy frágiles.",
    "guideline": "Tokyo Guidelines 2018.",
    "whyWrong": {
      "0": "Riesgo de recurrencia y sepsis.",
      "2": "No se usa en colecistitis.",
      "3": "No drena la vesícula."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-66",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "¿Qué marcador indica infección crónica por Hepatitis B con alta replicación viral y alta infectividad?",
    "options": [
      "Anti-HBs",
      "HBsAg (+) y HBeAg (+)",
      "Anti-HBc IgM",
      "Anti-HBe (+)"
    ],
    "correctIndex": 1,
    "explanation": "El antígeno e (HBeAg) es el marcador de replicación activa.",
    "fisiopato": "Es una proteína soluble producida durante la replicación viral intensa.",
    "clinicalPearl": "El paso de HBeAg (+) a Anti-HBe (+) se llama seroconversión e indica mejor control inmune.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Indica inmunidad.",
      "2": "Indica infección aguda.",
      "3": "Indica baja replicación."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-67",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "¿Cuál es el examen de primera línea ante una HDB hemodinámicamente estable?",
    "options": [
      "AngioTAC de abdomen",
      "Colonoscopia",
      "Cápsula endoscópica",
      "Arteriografía"
    ],
    "correctIndex": 1,
    "explanation": "La colonoscopia permite diagnóstico y eventual tratamiento.",
    "fisiopato": "Visualización directa de la mucosa colónica.",
    "clinicalPearl": "Una buena preparación es clave para el éxito de la colonoscopia en sangrado.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Se usa si hay inestabilidad o sangrado masivo activo.",
      "2": "Para estudio de intestino delgado.",
      "3": "Solo terapéutica si el sangrado es masivo."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-68",
    "topic": "motores_esofago",
    "difficulty": "Fellow",
    "text": "¿Cuál es el hallazgo manométrico indispensable para el diagnóstico de Acalasia según Chicago 4.0?",
    "options": [
      "Ausencia de peristalsis",
      "Presión de relajación integrada (IRP) elevada",
      "Contracciones prematuras",
      "Espasmo esofágico"
    ],
    "correctIndex": 1,
    "explanation": "La relajación incompleta del esfínter esofágico inferior (IRP elevado) es el requisito sine qua non.",
    "fisiopato": "Se produce por la pérdida de neuronas inhibidoras en el plexo mientérico de Auerbach.",
    "clinicalPearl": "Si el IRP es normal, no puede ser acalasia clásica.",
    "guideline": "Chicago Classification 4.0.",
    "whyWrong": {
      "0": "Se ve en acalasia pero no es lo que define la falla de relajación.",
      "2": "Define acalasia tipo III.",
      "3": "Otra entidad."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-69",
    "topic": "cancer_esofago",
    "difficulty": "Staff",
    "text": "¿Cuál es el principal factor de riesgo para el Adenocarcinoma de esófago?",
    "options": [
      "Tabaco y alcohol",
      "Reflujo gastroesofágico crónico y Esófago de Barrett",
      "Ingesta de cáusticos",
      "Acalasia de larga data"
    ],
    "correctIndex": 1,
    "explanation": "La secuencia metaplasia-displasia-adenocarcinoma es la vía principal vinculada al ERGE.",
    "fisiopato": "La exposición ácida crónica induce el cambio de epitelio escamoso a columnar especializado (Barrett).",
    "clinicalPearl": "El adenocarcinoma es hoy más frecuente que el escamoso en países occidentales.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Factores principales para el carcinoma escamoso.",
      "2": "Aumenta riesgo de escamoso.",
      "3": "Aumenta riesgo de escamoso."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-70",
    "topic": "cancer_gastrico",
    "difficulty": "Subspecialist",
    "text": "¿Qué significa un score OLGA III o IV en una biopsia gástrica?",
    "options": [
      "Presencia de H. pylori activo",
      "Alto riesgo de desarrollar cáncer gástrico por atrofia severa",
      "Metaplasia intestinal de tipo incompleto",
      "Displasia de alto grado"
    ],
    "correctIndex": 1,
    "explanation": "OLGA evalúa la extensión y severidad de la atrofia gástrica.",
    "fisiopato": "La atrofia glandular es un paso avanzado en la cascada de Correa.",
    "clinicalPearl": "Pacientes con OLGA III/IV requieren vigilancia endoscópica estrecha cada 1-2 años.",
    "guideline": "Sistemas de estadificación OLGA/OLGIM.",
    "whyWrong": {
      "0": "No mide actividad bacteriana.",
      "2": "OLGIM mide metaplasia.",
      "3": "Displasia no es atrofia."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-71",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "¿Cuál es la localización más frecuente de la úlcera péptica secundaria a AINES?",
    "options": [
      "Fundus gástrico",
      "Cuerpo gástrico",
      "Antro gástrico",
      "Bulbo duodenal"
    ],
    "correctIndex": 2,
    "explanation": "Los AINES dañan principalmente el antro por efectos tópicos y sistémicos.",
    "fisiopato": "Inhibición de la COX-1 que reduce la síntesis de prostaglandinas protectoras.",
    "clinicalPearl": "La úlcera por AINES suele ser silenciosa hasta que sangra.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Poco frecuente.",
      "1": "Poco frecuente.",
      "3": "Más típico de H. pylori."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-72",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el tratamiento de primera línea para la Peritonitis Bacteriana Espontánea (PBE)?",
    "options": [
      "Ciprofloxacino oral",
      "Cefotaxima o Ceftriaxona EV",
      "Amoxicilina/Ácido Clavulánico",
      "Vancomicina"
    ],
    "correctIndex": 1,
    "explanation": "Cefalosporinas de 3ra generación cubren los gérmenes entéricos más frecuentes.",
    "fisiopato": "Traslocación bacteriana desde el intestino al líquido ascítico.",
    "clinicalPearl": "Siempre use albúmina (1.5g/kg día 1 y 1.0g/kg día 3) para prevenir síndrome hepatorrenal.",
    "guideline": "Guías AASLD/EASL.",
    "whyWrong": {
      "0": "Usado para profilaxis, no tratamiento de elección inicial en PBE grave.",
      "2": "Menor espectro/evidencia.",
      "3": "Cubre Gram (+), no es el primer paso."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-73",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el vasopresor de elección actual para el tratamiento del Síndrome Hepatorrenal tipo 1 (HRS-AKI)?",
    "options": [
      "Norepinefrina",
      "Terlipresina",
      "Dopamina",
      "Octreotide/Midodrina"
    ],
    "correctIndex": 1,
    "explanation": "La Terlipresina ha demostrado superioridad en la reversión del SHR en ensayos controlados recientes (CONFIRM trial).",
    "fisiopato": "Actúa sobre los receptores V1 induciendo vasoconstricción esplácnica potente, lo que reduce la presión portal y mejora el flujo renal.",
    "clinicalPearl": "Cuidado con la hipoxemia; la terlipresina puede causar edema pulmonar en pacientes predispuestos.",
    "guideline": "Manual Chileno 2025 / Guías EASL-SHR.",
    "whyWrong": {
      "0": "Alternativa válida si no hay terlipresina, pero requiere vía central.",
      "2": "Contraindicado en cirrosis.",
      "3": "Mucho menos efectivo."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-74",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "En un paciente con encefalopatía hepática recurrente a pesar de lactulosa, ¿qué fármaco debe añadirse?",
    "options": [
      "Neomicina",
      "Rifaximina",
      "Metronidazol",
      "Probióticos"
    ],
    "correctIndex": 1,
    "explanation": "La Rifaximina reduce significativamente las hospitalizaciones por encefalopatía.",
    "fisiopato": "Antibiótico no absorbible que modula la microbiota productora de amoníaco.",
    "clinicalPearl": "La dosis estándar es 550mg cada 12 horas.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Riesgo de ototoxicidad/nefrotoxicidad.",
      "2": "Toxicidad neurológica a largo plazo.",
      "3": "Sin evidencia sólida como terapia única."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-75",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el manejo inicial crítico de un paciente con sospecha de HDA varicosa?",
    "options": [
      "Endoscopia inmediata",
      "Reposición de volumen, Antibióticos (Ceftriaxona) y Terlipresina/Somatostatina",
      "Transfusión masiva de glóbulos rojos",
      "Sonda de Sengstaken-Blakemore"
    ],
    "correctIndex": 1,
    "explanation": "La estabilización hemodinámica y el inicio de drogas vasoactivas/antibióticos antes de la endoscopia mejora la sobrevida.",
    "fisiopato": "Los antibióticos previenen la PBE y el resangrado precoz al reducir la presión portal.",
    "clinicalPearl": "El antibiótico es mandatorio en todo cirrótico que sangra.",
    "guideline": "Baveno VII.",
    "whyWrong": {
      "0": "Primero se estabiliza.",
      "2": "Riesgo de aumentar presión portal (ver meta restrictiva).",
      "3": "Solo como rescate extremo."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-76",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "¿Qué hallazgo en la pH-impedanciometría de 24h confirma el diagnóstico de ERGE en un paciente con síntomas típicos y endoscopia normal?",
    "options": [
      "Tiempo de exposición ácida (AET) > 6%",
      "Número de reflujos > 40",
      "Presión del EEI < 10 mmHg",
      "Hernia hiatal de 2 cm"
    ],
    "correctIndex": 0,
    "explanation": "Un AET > 6% es el estándar de oro para confirmar reflujo patológico.",
    "fisiopato": "Refleja la falla de los mecanismos de barrera y aclaramiento esofágico.",
    "clinicalPearl": "Un AET < 4% se considera normal.",
    "guideline": "Consenso de Lyon 2.0 (2023).",
    "whyWrong": {
      "1": "Sugerente pero no diagnóstico por sí solo.",
      "2": "Mide motilidad, no reflujo.",
      "3": "Hallazgo anatómico, no funcional."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-77",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "¿Qué signo clínico es más predictivo de Apendicitis Aguda?",
    "options": [
      "Signo de Blumberg",
      "Migración del dolor desde epigastrio a FID",
      "Fiebre > 39°C",
      "Vómitos profusos"
    ],
    "correctIndex": 1,
    "explanation": "La cronología de Murphy (migración) es altamente específica en la historia clínica.",
    "fisiopato": "La distensión apendicular inicial produce dolor visceral (epigastrio) y la inflamación del peritoneo parietal produce dolor somático (FID).",
    "clinicalPearl": "En ancianos, estos signos pueden ser muy sutiles.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Indica peritonitis, pero no es específico de apéndice.",
      "2": "Suele ser febrícula; fiebre alta sugiere complicación.",
      "3": "Inespecífico."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-78",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el criterio para el diagnóstico de Fallo Hepático Agudo sobre Crónico (ACLF) según la escala EASL-CLIF?",
    "options": [
      "Presencia de ictericia y ascitis únicamente",
      "Fallo de al menos un órgano (renal, cerebral, coagulación, circulatorio, respiratorio o hepático) con mortalidad >15% a 28 días",
      "MELD > 30",
      "Presencia de várices esofágicas sangrantes"
    ],
    "correctIndex": 1,
    "explanation": "El ACLF se define por fallo orgánico sistémico e inflamación intensa en un paciente con cirrosis previa.",
    "fisiopato": "Se gatilla por un evento precipitante (infección, alcohol, sangrado) que genera una \"tormenta de citoquinas\" y daño multiorgánico.",
    "clinicalPearl": "El fallo renal (creatinina > 2.0) es el fallo de órgano más frecuente en ACLF.",
    "guideline": "EASL-CLIF Consortium / CANONIC Study.",
    "whyWrong": {
      "0": "Eso es cirrosis descompensada simple.",
      "2": "El MELD mide severidad pero no define ACLF per se.",
      "3": "Es un gatillo, no la definición del síndrome."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-79",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "En un paciente con cirrosis y várices esofágicas pequeñas que nunca han sangrado, ¿cuál es la recomendación de Baveno VII para iniciar profilaxis primaria con Betabloqueadores No Selectivos (BBNS)?",
    "options": [
      "Solo si el paciente es Child-Pugh C",
      "Si las várices presentan \"puntos rojos\" o el paciente es Child-Pugh B/C",
      "A todo paciente con diagnóstico de cirrosis independientemente del tamaño",
      "Solo si el gradiente de presión portal es > 20 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Várices pequeñas con signos rojos o en hígados más descompensados (B/C) tienen alto riesgo de sangrado.",
    "fisiopato": "Los BBNS (Carvedilol preferido) reducen el flujo portal por bloqueo beta-2 (vasoconstricción esplácnica) y beta-1 (baja gasto cardiaco).",
    "clinicalPearl": "Carvedilol es más potente que Propranolol en reducir el gradiente de presión portal.",
    "guideline": "Baveno VII Consensus.",
    "whyWrong": {
      "0": "Demasiado restrictivo.",
      "2": "No indicado si no hay várices o si son pequeñas sin riesgo.",
      "3": "No es práctico medir gradiente en todos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-80",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Cuál es la conducta recomendada ante un paciente con cirrosis que presenta un nódulo de 1.5 cm en una ecografía de screening?",
    "options": [
      "Biopsia percutánea inmediata",
      "AngioTAC o Resonancia con contraste dinámico (4 fases)",
      "Repetir ecografía en 3 meses",
      "Medir Alfa-fetoproteína y si es normal, ignorar"
    ],
    "correctIndex": 1,
    "explanation": "El diagnóstico de Hepatocarcinoma (HCC) en cirrosis es radiológico si cumple criterios LI-RADS 5.",
    "fisiopato": "El HCC tiene una vascularización arterial predominante (wash-in) y lavado venoso (wash-out) característico.",
    "clinicalPearl": "Si el TAC/RM no son concluyentes, se debe realizar el otro examen o considerar biopsia.",
    "guideline": "AASLD / EASL Hepatocellular Carcinoma Guidelines.",
    "whyWrong": {
      "0": "Riesgo de siembra y no es necesaria si la imagen es típica.",
      "2": "Retrasa el diagnóstico de una lesión potencialmente curable.",
      "3": "La AFP normal no descarta HCC."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-81",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es la estrategia nutricional preferida en un paciente con pancreatitis aguda grave?",
    "options": [
      "Nutrición parenteral total precoz (primeras 24h)",
      "Régimen cero absoluto hasta que la amilasa sea normal",
      "Nutrición enteral por sonda nasoyeyunal o nasogástrica precoz",
      "Dieta blanda líquida a tolerancia desde el ingreso"
    ],
    "correctIndex": 2,
    "explanation": "La nutrición enteral precoz mantiene la barrera intestinal y reduce la traslocación bacteriana.",
    "fisiopato": "El ayuno prolongado atrofia las vellosidades intestinales, facilitando que las bacterias entéricas infecten la necrosis pancreática.",
    "clinicalPearl": "La sonda nasogástrica es tan segura y efectiva como la nasoyeyunal.",
    "guideline": "IAP/APA Evidence-based guidelines.",
    "whyWrong": {
      "0": "Aumenta el riesgo de infecciones y complicaciones metabólicas.",
      "1": "Aumenta el riesgo de infección de la necrosis.",
      "3": "Puede no ser tolerada en cuadros graves iniciales."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-82",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "Un paciente con pancreatitis presenta al día 21 fiebre, leucocitosis y gas en una colección peripancreática en el TAC. ¿Cuál es el microorganismo más frecuentemente aislado?",
    "options": [
      "Staphylococcus aureus",
      "Escherichia coli",
      "Bacteroides fragilis",
      "Candida albicans"
    ],
    "correctIndex": 1,
    "explanation": "Los bacilos gramnegativos entéricos (E. coli, Klebsiella) son los principales patógenos de la necrosis infectada.",
    "fisiopato": "La traslocación bacteriana desde el colon es la ruta principal de infección del tejido necrótico.",
    "clinicalPearl": "El uso preventivo de probióticos no ha demostrado reducir esta complicación y puede ser peligroso.",
    "guideline": "IAP/APA Guidelines / Manual Chileno 2025.",
    "whyWrong": {
      "0": "Menos común (asociado a catéteres).",
      "2": "Se encuentra pero menos frecuente que E. coli.",
      "3": "Suele ser una sobreinfección tras antibióticos prolongados."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-83",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "Según las guías AASLD 2024, ¿en qué paciente con Hepatitis B crónica Inmunotolerante (Fase 1: HBeAg+, carga viral alta, ALT normal) se justifica iniciar tratamiento?",
    "options": [
      "En todos los pacientes independientemente de la edad",
      "En mayores de 30-35 años o con antecedentes familiares de HCC",
      "Solo si la carga viral supera los 10 millones de UI/mL",
      "Nunca se trata en esta fase"
    ],
    "correctIndex": 1,
    "explanation": "La edad avanzada y el riesgo familiar aumentan la probabilidad de daño histológico silente.",
    "fisiopato": "La integración del ADN viral en el genoma del hepatocito puede ocurrir incluso con ALT normal, predisponiendo a oncogénesis.",
    "clinicalPearl": "El objetivo es reducir la incidencia de HCC a largo plazo.",
    "guideline": "AASLD 2024 Hepatitis B Update.",
    "whyWrong": {
      "0": "En niños y jóvenes suele haber baja tasa de progresión.",
      "2": "La carga viral sola no define el inicio si no hay daño.",
      "3": "Existe una flexibilización reciente hacia el tratamiento más precoz."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-84",
    "topic": "vias_biliares",
    "difficulty": "Staff",
    "text": "De acuerdo a los Criterios de Tokyo 2018, ¿qué hallazgo define a una Colecistitis Aguda Grado II (Moderada)?",
    "options": [
      "Falla orgánica (ej: hipotensión que requiere vasopresores)",
      "Leucocitos > 18.000, Masa palpable en HD, o Duración síntomas > 72h",
      "Dolor abdominal leve sin masa ni fiebre",
      "Presencia de colelitiasis sin Murphy"
    ],
    "correctIndex": 1,
    "explanation": "El grado II se asocia a una mayor inflamación local que dificulta la colecistectomía.",
    "fisiopato": "La inflamación hidrópica o gangrenosa marcada genera una anatomía dificultosa y más riesgo de lesiones de vía biliar.",
    "clinicalPearl": "Pacientes Grado II se benefician de colecistectomía temprana por cirujanos expertos.",
    "guideline": "Tokyo Guidelines 2018 (TG18).",
    "whyWrong": {
      "0": "Eso es Grado III (Severa).",
      "2": "Grado I (Leve).",
      "3": "No cumple criterios de colecistitis."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-85",
    "topic": "masld",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el criterio diagnóstico para MASLD según la nueva nomenclatura multilingüe de 2023?",
    "options": [
      "Esteatosis hepática + al menos un factor de riesgo cardiometabólico",
      "Esteatosis hepática de cualquier origen",
      "Esteatosis + consumo de alcohol > 30g/día",
      "Solo presencia de obesidad"
    ],
    "correctIndex": 0,
    "explanation": "El cambio de NAFLD a MASLD busca eliminar el estigma y enfatizar el origen metabólico.",
    "fisiopato": "La resistencia a la insulina es el eje que conduce a la acumulación de triglicéridos en el hepatocito.",
    "clinicalPearl": "Si no hay factores metabólicos y hay esteatosis, se cataloga como \"Criptogénica\".",
    "guideline": "Multi-society Delphi Consensus on NAFLD nomenclature (2023).",
    "whyWrong": {
      "1": "Muy vago; excluye causas secundarias.",
      "2": "Eso sería MetALD (consumo mixto).",
      "3": "Factor de riesgo, no definición."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-86",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "En un paciente con Colitis Ulcerosa en tratamiento con Infliximab que presenta pérdida secundaria de respuesta, ¿cuál es el primer paso recomendado?",
    "options": [
      "Cambiar inmediatamente a otro biológico (ej: Vedolizumab)",
      "Medir niveles valle del fármaco y anticuerpos anti-Infliximab",
      "Aumentar la dosis a 10mg/kg empíricamente",
      "Reiniciar corticoides de forma indefinida"
    ],
    "correctIndex": 1,
    "explanation": "El TDM (Therapeutic Drug Monitoring) guía el ajuste racional de la terapia.",
    "fisiopato": "La pérdida de respuesta puede ser por inmunogenicidad (anticuerpos) o por consumo acelerado del fármaco (niveles bajos).",
    "clinicalPearl": "Niveles de Infliximab > 5-7 ug/mL suelen ser protectores.",
    "guideline": "Guías de Monitoreo Terapéutico de Fármacos (TDM).",
    "whyWrong": {
      "0": "Inadecuado sin racionalizar; puede perderse un fármaco útil.",
      "2": "Más caro y menos preciso que monitorizar primero.",
      "3": "Error grave en el manejo a largo plazo."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-87",
    "topic": "hda",
    "difficulty": "Staff",
    "text": "¿Cuál es el rol del TIPS precoz (Early-TIPS) en el manejo de la hemorragia varicosa según Baveno VII?",
    "options": [
      "En todos los cirróticos que sangran",
      "En pacientes de alto riesgo (Child B con sangrado activo o Child C < 14 puntos) dentro de las 72h",
      "Solo como terapia de rescate tras falla de segunda endoscopia",
      "Está contraindicado en la fase aguda"
    ],
    "correctIndex": 1,
    "explanation": "El TIPS precoz ha demostrado reducir significativamente el resangrado y la mortalidad en grupos de alto riesgo.",
    "fisiopato": "Descomprime de forma inmediata el sistema portal, eliminando la causa mecánica del sangrado.",
    "clinicalPearl": "No confunda \"Precoz\" con \"Urgencia/Rescate\". El precoz se hace preventivo tras la primera estabilización.",
    "guideline": "Baveno VII / EASL Guidelines.",
    "whyWrong": {
      "0": "Excesivo; muchos responden bien a bandas.",
      "2": "Eso es TIPS de rescate.",
      "3": "Es el momento ideal para los de alto riesgo."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-88",
    "topic": "celiaca",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la conducta recomendada en un paciente adulto con sospecha de Enfermedad Celiaca, Anti-tTG IgA > 10 veces el límite superior normal y Anti-Endomisio positivo, según las guías ACG recientes?",
    "options": [
      "Iniciar dieta libre de gluten sin biopsia",
      "Realizar biopsia duodenal obligatoriamente para confirmar",
      "Realizar estudio genético HLA-DQ2/DQ8",
      "Repetir la serología en 3 meses"
    ],
    "correctIndex": 1,
    "explanation": "A diferencia de las guías pediátricas (ESPGHAN), en adultos la ACG sigue recomendando la biopsia para confirmar el diagnóstico.",
    "fisiopato": "La biopsia permite establecer la severidad (Marsh) y sirve de base para evaluar la recuperación mucosa futura.",
    "clinicalPearl": "El diagnóstico \"no-biopsy\" en adultos sigue siendo controvertido y no es el estándar general.",
    "guideline": "ACG Clinical Guidelines: Diagnosis and Management of Celiac Disease (2023).",
    "whyWrong": {
      "0": "Solo aceptado en pediatría bajo criterios estrictos.",
      "2": "Innecesario si la serología es positiva; tiene valor predictivo negativo.",
      "3": "Retrasa el diagnóstico."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-89",
    "topic": "intestino_delgado",
    "difficulty": "Fellow",
    "text": "¿Cuál es el valor de corte para el diagnóstico de SIBO usando el Test de Aliento con Lactulosa según el consenso de América del Norte?",
    "options": [
      "Aumento de Hidrógeno >= 20 ppm sobre el basal en los primeros 90 min",
      "Aumento de Metano >= 50 ppm en cualquier momento",
      "Aumento de Hidrógeno >= 10 ppm a los 120 min",
      "Cualquier presencia de Metano al inicio"
    ],
    "correctIndex": 0,
    "explanation": "Un aumento precoz de H2 indica la presencia de bacterias en el intestino delgado.",
    "fisiopato": "La fermentación bacteriana prematura del sustrato (lactulosa) antes de llegar al colon genera el pico de gas detectable.",
    "clinicalPearl": "Si hay metano >= 10 ppm en cualquier momento, se diagnostica IMO (Intestinal Methanogen Overgrowth).",
    "guideline": "North American Breath Test Consensus.",
    "whyWrong": {
      "1": "Punto de corte excesivo.",
      "2": "Demasiado tarde; puede ser fermentación colónica normal.",
      "3": "El corte de metano es 10 ppm."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-90",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "En un Neoplasia Mucinosa Papilar Intraductal (IPMN), ¿cuál de los siguientes se considera un \"Estigma de Alta Sospecha\" (High-risk stigmata) de malignidad según Fukuoka 2017?",
    "options": [
      "Quiste > 3 cm",
      "Pared del quiste engrosada",
      "Nódulo mural sólido con realce >= 5 mm o conducto pancreático principal >= 10 mm",
      "Linfadenopatía de 1 cm"
    ],
    "correctIndex": 2,
    "explanation": "Los estigmas de alta sospecha obligan a considerar la cirugía inmediata.",
    "fisiopato": "Reflejan la transformación de un epitelio displásico a un adenocarcinoma invasor.",
    "clinicalPearl": "El tamaño de 3cm es una \"Worrisome feature\", no un estigma de alta sospecha per se.",
    "guideline": "International Association of Pancreatology (IAP) - Fukuoka Criteria.",
    "whyWrong": {
      "0": "Es \"worrisome feature\".",
      "1": "Es \"worrisome feature\".",
      "3": "Inespecífico."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-91",
    "topic": "nutricion",
    "difficulty": "Subspecialist",
    "text": "En un paciente con cirrosis descompensada y sarcopenia, ¿cuál es el aporte proteico diario recomendado por las guías ESPEN?",
    "options": [
      "0.8 g/kg/día",
      "1.2 - 1.5 g/kg/día",
      "2.0 g/kg/día",
      "Proteínas restringidas a 0.5 g/kg si hay encefalopatía"
    ],
    "correctIndex": 1,
    "explanation": "Los pacientes cirróticos están en un estado hipercatabólico y requieren mayor aporte proteico.",
    "fisiopato": "La falta de síntesis hepática y la resistencia anabólica muscular obligan a suministrar más aminoácidos para prevenir el balance nitrogenado negativo.",
    "clinicalPearl": "La restricción proteica en encefalopatía es un error histórico que aumenta la mortalidad.",
    "guideline": "ESPEN guidelines on clinical nutrition in liver disease.",
    "whyWrong": {
      "0": "Insuficiente para cirróticos.",
      "2": "Excesivo, difícil de tolerar y sin evidencia de beneficio extra.",
      "3": "Aumenta sarcopenia y empeora el pronóstico."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-92",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "En un paciente con cirrosis y ascitis refractaria, ¿cuál es el nivel de sodio urinario que sugiere una respuesta adecuada a diuréticos?",
    "options": [
      "NaU < 10 mEq/L",
      "NaU > 78 mEq/L",
      "NaU entre 20-40 mEq/L",
      "NaU indetectable"
    ],
    "correctIndex": 1,
    "explanation": "Un sodio urinario > 78 mEq/L (en recolección de 24h) indica que el paciente está eliminando la carga de sodio dietética estándar (88 mEq).",
    "fisiopato": "Refleja que el sistema RAA no está máximamente activado y que el túbulo renal aún responde al bloqueo de aldosterona.",
    "clinicalPearl": "Si el NaU > 78 y el paciente no baja de peso, el problema es la dieta (no adherencia).",
    "guideline": "Manual Chileno 2025 / Guías AASLD Ascites.",
    "whyWrong": {
      "0": "Indica avidez extrema por el sodio, falla de diuréticos.",
      "2": "Infraterapéutico.",
      "3": "Indica insuficiencia renal pre-renal severa."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-93",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el \"Punto Cero\" hemodinámico para definir Hipertensión Portal Clínicamente Significativa (HPCS) según Baveno VII?",
    "options": [
      "GPVH >= 5 mmHg",
      "GPVH >= 10 mmHg",
      "GPVH >= 12 mmHg",
      "Presión portal absoluta > 20 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Un Gradiente de Presión Venosa Hepática >= 10 mmHg es el predictor más fuerte de desarrollo de várices y descompensación.",
    "fisiopato": "Este umbral marca la falla de los mecanismos de compensación vascular intrahepática y el inicio de la formación de colaterales portosistémicas.",
    "clinicalPearl": "El diagnóstico de HPCS se puede hacer de forma no invasiva con Elastografía Hepática (>25 kPa).",
    "guideline": "Baveno VII Practice Guidelines.",
    "whyWrong": {
      "0": "Límite superior normal.",
      "2": "Umbral clásico para ruptura de várices, pero la HPCS empieza en 10.",
      "3": "La presión absoluta no es útil sin restar la presión de la vena cava (gradiente)."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-94",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "En un paciente cirrótico con Na sérico de 122 mEq/L persistente, ¿cuál es el manejo de elección según el Consenso EASL?",
    "options": [
      "Uso de Tolvaptán a dosis altas",
      "Restricción de líquidos (< 1000cc/día) y retiro de diuréticos",
      "Reposición agresiva con Cloruro de Sodio 3%",
      "Administración de Albúmina 1g/kg/día"
    ],
    "correctIndex": 1,
    "explanation": "La hiponatremia dilucional en cirrosis se maneja principalmente con restricción hídrica.",
    "fisiopato": "Es causada por una secreción no osmótica de ADH secundaria a la vasodilatación esplácnica extrema.",
    "clinicalPearl": "El Tolvaptán está aprobado pero su uso es limitado por costo y riesgo de hepatotoxicidad; la restricción es el pilar.",
    "guideline": "EASL Clinical Practice Guidelines: Management of decompensated cirrhosis.",
    "whyWrong": {
      "0": "Solo casos refractarios selectos.",
      "2": "Peligro de mielinolisis pontina y aumento de ascitis.",
      "3": "No corrige la causa dilucional."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-95",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "¿Qué marcador fecal es el más sensible para predecir una recaída clínica en un paciente con Enfermedad de Crohn en remisión aparente?",
    "options": [
      "Calprotectina Fecal",
      "Lactoferrina",
      "Sangre oculta en deposiciones",
      "Coprocultivo"
    ],
    "correctIndex": 0,
    "explanation": "La calprotectina refleja la migración de neutrófilos a la mucosa y precede a los síntomas.",
    "fisiopato": "Es una proteína de unión al calcio resistente a la degradación proteolítica, proporcional a la actividad inflamatoria intestinal.",
    "clinicalPearl": "Valores > 150-250 ug/g sugieren inflamación activa significativa.",
    "guideline": "STRIDE-II Consensus ECCO.",
    "whyWrong": {
      "1": "Útil pero menos estandarizada que calprotectina.",
      "2": "Inespecífica.",
      "3": "Evalúa infección, no actividad basal."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-96",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "En el algoritmo STRIDE-II, ¿cuál es el objetivo terapéutico de Largo Plazo (Ultimate Goal) en EII?",
    "options": [
      "Remisión clínica (sin síntomas)",
      "Remisión profunda (Clínica + Endoscópica + Histológica/Transmural)",
      "Normalización de la Proteína C Reactiva",
      "Ausencia de necesidad de cirugía"
    ],
    "correctIndex": 1,
    "explanation": "La curación mucosa y la normalización de la calidad de vida son las metas finales para evitar daño estructural.",
    "fisiopato": "La inflamación subclínica persistente conduce a fibrosis, estenosis y mayor riesgo de cáncer colorrectal.",
    "clinicalPearl": "No se conforme con que el paciente \"se sienta bien\"; busque la remisión endoscópica.",
    "guideline": "STRIDE-II Consensus (2021).",
    "whyWrong": {
      "0": "Meta a corto plazo.",
      "2": "Meta intermedia.",
      "3": "Resultado de una meta bien lograda."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-97",
    "topic": "hda",
    "difficulty": "Staff",
    "text": "¿Cuál es el manejo endoscópico de elección para una úlcera con estigma de Forrest IIa (Vaso visible)?",
    "options": [
      "Solo inyección de Adrenalina",
      "Esclerosis con alcohol absoluto",
      "Terapia combinada (Adrenalina + clip o termocoagulación)",
      "Observación y manejo con IBP EV solo"
    ],
    "correctIndex": 2,
    "explanation": "La terapia dual reduce significativamente el riesgo de resangrado en comparación con la monoterapia.",
    "fisiopato": "La adrenalina genera vasoconstricción y taponamiento mecánico temporal, mientras que el clip o calor proporcionan hemostasia definitiva.",
    "clinicalPearl": "Nunca use adrenalina como terapia única.",
    "guideline": "ESGE Guidelines / Manual Chileno 2025.",
    "whyWrong": {
      "0": "Alta tasa de resangrado.",
      "1": "Riesgo de perforación gástrica.",
      "3": "Riesgo de sangrado masivo inminente."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-98",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el mejor predictor temprano de gravedad en Pancreatitis Aguda a las 24 horas del ingreso?",
    "options": [
      "Nivel de Amilasa sérica",
      "BUN > 20 mg/dL o su incremento",
      "Puntaje de Ranson al ingreso",
      "Presencia de náuseas"
    ],
    "correctIndex": 1,
    "explanation": "El aumento del BUN refleja falla en la resucitación con fluidos y es un marcador de hipoperfusión orgánica.",
    "fisiopato": "La hemoconcentración y el daño renal incipiente son predictores de falla multiorgánica persistente.",
    "clinicalPearl": "Un BUN que no baja con fluidos sugiere mal pronóstico.",
    "guideline": "ACG Guideline: Management of Acute Pancreatitis.",
    "whyWrong": {
      "0": "No tiene valor pronóstico.",
      "2": "Solo se completa a las 48h (retrospectivo).",
      "3": "Inespecífico."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-99",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "En una paciente con Hepatitis B crónica que desea embarazo y tiene carga viral > 200,000 UI/mL, ¿cuál es la conducta recomendada?",
    "options": [
      "Iniciar Tenofovir en el tercer trimestre (28 semanas)",
      "Contraindicar el embarazo",
      "Iniciar tratamiento solo después del parto",
      "Indicar cesárea obligatoria"
    ],
    "correctIndex": 0,
    "explanation": "Tenofovir (TDF) reduce la carga viral y disminuye el riesgo de transmisión vertical al feto.",
    "fisiopato": "La alta carga viral materna es el principal factor de riesgo para falla de la inmunoprofilaxis neonatal (vacuna + IG).",
    "clinicalPearl": "El TDF es seguro durante la lactancia.",
    "guideline": "AASLD 2024 Hepatitis B Guidelines.",
    "whyWrong": {
      "1": "No hay razón para contraindicar.",
      "2": "Riesgo de transmisión vertical muy alto.",
      "3": "El parto vaginal no está contraindicado si la carga viral está controlada."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-100",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "¿Cuál es el diagnóstico en un paciente con pirosis que no responde a IBP, tiene endoscopia normal y pH-impedanciometría con AET < 4%, pero con asociación sintomática positiva?",
    "options": [
      "ERGE verdadera",
      "Esofagitis Eosinofílica",
      "Esófago Hipersensible",
      "Pirosis funcional"
    ],
    "correctIndex": 2,
    "explanation": "El esófago hipersensible tiene reflujo fisiológico pero el paciente percibe los eventos como dolorosos.",
    "fisiopato": "Existe una sensibilización periférica de los nociceptores esofágicos ante estímulos ácidos o mecánicos normales.",
    "clinicalPearl": "Estos pacientes responden mejor a neuromoduladores (ISRS/tricíclicos) que a IBP.",
    "guideline": "Consenso de Lyon 2.0.",
    "whyWrong": {
      "0": "AET sería > 6%.",
      "1": "Diagnóstico histológico.",
      "3": "Asociación sintomática sería negativa."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-101",
    "topic": "h_pylori",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la terapia de primera línea recomendada por Maastricht VI en regiones con alta resistencia (>15%) a Claritromicina?",
    "options": [
      "Terapia Triple clásica (IBP+Amoxi+Clari)",
      "Terapia Cuádruple con Bismuto",
      "Terapia Dual (IBP+Amoxi)",
      "Monoterapia con Vonoprazan"
    ],
    "correctIndex": 1,
    "explanation": "La terapia cuádruple con bismuto evade la resistencia a macrólidos y es altamente efectiva.",
    "fisiopato": "El bismuto tiene un efecto bactericida directo y rompe el biofilm bacteriano.",
    "clinicalPearl": "Si no hay bismuto disponible, se recomienda la terapia cuádruple concomitante (sin bismuto).",
    "guideline": "Maastricht VI / Florence Consensus Report.",
    "whyWrong": {
      "0": "No se recomienda si la resistencia es > 15%.",
      "2": "Solo en protocolos específicos de alta dosis.",
      "3": "Aún no es estándar de primera línea mundial única."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-102",
    "topic": "h_pylori",
    "difficulty": "Staff",
    "text": "¿Qué prueba diagnóstica es de elección para confirmar la erradicación de H. pylori?",
    "options": [
      "Serología IgG",
      "Test de aliento con C13 o Antígeno en deposiciones (monoclonal)",
      "Endoscopia con biopsia obligatoria",
      "PCR en saliva"
    ],
    "correctIndex": 1,
    "explanation": "Ambos test funcionales son altamente sensibles y específicos para confirmar el éxito del tratamiento.",
    "fisiopato": "Detectan la presencia de bacterias viables o sus productos metabólicos activos.",
    "clinicalPearl": "Recuerde esperar 4 semanas tras antibióticos y 2 tras IBP.",
    "guideline": "Manual Chileno 2025 / Maastricht VI.",
    "whyWrong": {
      "0": "Permanece positiva por meses/años tras erradicación.",
      "2": "Innecesariamente invasivo si no hay otra indicación.",
      "3": "No validado clínicamente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-103",
    "topic": "celiaca",
    "difficulty": "Subspecialist",
    "text": "En un paciente con sospecha de Celiaquía y déficit de IgA total, ¿qué marcador serológico debe solicitarse?",
    "options": [
      "Anti-tTG IgA",
      "Anti-tTG IgG o Anti-DGP IgG",
      "Anti-Endomisio IgA",
      "HLA-DQ2 solamente"
    ],
    "correctIndex": 1,
    "explanation": "En déficit de IgA, los marcadores basados en IgA darán falsos negativos.",
    "fisiopato": "La deficiencia de IgA es 10-15 veces más frecuente en celiacos que en la población general.",
    "clinicalPearl": "Siempre pida niveles de IgA total al tamizar por celiaquía.",
    "guideline": "ACG Clinical Guidelines 2023.",
    "whyWrong": {
      "0": "Falso negativo.",
      "2": "Falso negativo.",
      "3": "Solo sugiere susceptibilidad, no enfermedad activa."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-104",
    "topic": "perfil_hepatico",
    "difficulty": "Staff",
    "text": "Un paciente presenta elevación aislada de GGT. ¿Cuál es la causa no hepática más frecuente?",
    "options": [
      "Consumo de alcohol o fármacos inductores (ej: Anticonvulsivantes)",
      "Infección urinaria",
      "Ejercicio extenuante",
      "Consumo excesivo de carnes rojas"
    ],
    "correctIndex": 0,
    "explanation": "La GGT es muy sensible pero poco específica, siendo inducida por alcohol y varios medicamentos.",
    "fisiopato": "La inducción enzimática en el retículo endoplásmico liso aumenta su expresión sin necesariamente haber daño celular.",
    "clinicalPearl": "Si la FA es normal y la GGT alta, sospecha inducción por alcohol/fármacos.",
    "guideline": "EASL guidelines on liver enzymes.",
    "whyWrong": {
      "1": "Sin relación.",
      "2": "Aumenta las transaminasas (CK/GOT).",
      "3": "Sin relación."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-105",
    "topic": "perfil_hepatico",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el valor del cociente AST/ALT (Ritis) que orienta clásicamente a Hepatitis Alcohólica?",
    "options": [
      "AST/ALT > 2",
      "AST/ALT < 1",
      "AST/ALT = 1",
      "AST/ALT > 10"
    ],
    "correctIndex": 0,
    "explanation": "En el daño alcohólico, la AST suele duplicar a la ALT debido al déficit de piridoxina (B6).",
    "fisiopato": "La ALT requiere B6 como cofactor más críticamente que la AST; el alcoholismo agota la B6.",
    "clinicalPearl": "Transaminasas > 500 rara vez son por alcohol solo; sospecha isquemia o toxinas.",
    "guideline": "Manual Chileno 2025 / AASLD Alcohol-associated Liver Disease.",
    "whyWrong": {
      "1": "Típico de hepatitis viral crónica o MASLD.",
      "2": "Inespecífico.",
      "3": "Sugerente de daño muscular o isquemia masiva."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-106",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "¿Cuál es el manejo de elección de un pseudoquiste pancreático asintomático de 5 cm?",
    "options": [
      "Drenaje percutáneo inmediato",
      "Drenaje endoscópico (Cistogastrostomía)",
      "Observación clínica e imagenológica",
      "Cirugía de resección"
    ],
    "correctIndex": 2,
    "explanation": "La mayoría de los pseudoquistes asintomáticos resuelven espontáneamente o no complican.",
    "fisiopato": "Es una colección de líquido rodeada por tejido de granulación (sin epitelio propio) que requiere tiempo para madurar.",
    "clinicalPearl": "Solo drene si hay dolor, infección o efecto de masa (obstrucción).",
    "guideline": "IAP/APA guidelines.",
    "whyWrong": {
      "0": "Riesgo de infección y fístula.",
      "1": "Solo si es sintomático.",
      "3": "Demasiado invasivo para lesión benigna."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-107",
    "topic": "vias_biliares",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el manejo de elección para una coledocolitiasis de 8 mm detectada por ecografía en un paciente con ictericia moderada?",
    "options": [
      "Colecistectomía laparoscópica sola",
      "CPRE seguida de Colecistectomía",
      "Observación",
      "Ácido Ursodesoxicólico"
    ],
    "correctIndex": 1,
    "explanation": "La limpieza de la vía biliar (CPRE) es prioritaria antes de la cirugía vesicular en pacientes con ictericia activa.",
    "fisiopato": "La obstrucción biliar genera estasis y riesgo de colangitis bacteriana ascendente.",
    "clinicalPearl": "En centros expertos, se puede realizar exploración laparoscópica de la vía biliar en el mismo tiempo que la colecistectomía.",
    "guideline": "ASGE/ESGE Guidelines on Choledocholithiasis.",
    "whyWrong": {
      "0": "Riesgo de persistencia de cálculo en coledoco y pancreatitis post-op.",
      "2": "Riesgo de colangitis.",
      "3": "Ineficaz para cálculos de este tamaño."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-108",
    "topic": "vias_biliares",
    "difficulty": "Staff",
    "text": "¿Qué hallazgo ecográfico es el más sugerente de Adenomiomatosis Vesicular?",
    "options": [
      "Paredes finas y lisas",
      "Artefacto en \"cola de cometa\" por cristales de colesterol en senos de Rokitansky-Aschoff",
      "Pólipo pediculado de 12 mm",
      "Barro biliar"
    ],
    "correctIndex": 1,
    "explanation": "Los senos de Rokitansky-Aschoff son invaginaciones del epitelio que atrapan bilis y cristales.",
    "fisiopato": "Es una proliferación benigna del epitelio y la capa muscular de la vesícula.",
    "clinicalPearl": "Generalmente es un hallazgo incidental que no requiere cirugía a menos que cause síntomas o sea segmental.",
    "guideline": "Manual Chileno 2025 / Radiología Abdominal Avanzada.",
    "whyWrong": {
      "0": "Normalidad.",
      "2": "Sugerente de pólipo verdadero o adenoma.",
      "3": "Inespecífico."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-109",
    "topic": "masld",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el único fármaco aprobado recientemente (2024) específicamente para el tratamiento de la Esteatohepatitis (MASH) con fibrosis moderada-severa?",
    "options": [
      "Semaglutida",
      "Resmetirom",
      "Pioglitazona",
      "Vitamina E"
    ],
    "correctIndex": 1,
    "explanation": "Resmetirom es un agonista selectivo del receptor de hormona tiroidea beta (THR-beta) en el hígado.",
    "fisiopato": "Aumenta la oxidación de ácidos grasos y reduce la lipotoxicidad directa.",
    "clinicalPearl": "Es el primer fármaco con aprobación FDA (Accelerated Approval) para MASH.",
    "guideline": "FDA Approval March 2024 / MAESTRO-NASH trial.",
    "whyWrong": {
      "0": "En estudio clínico avanzado pero no aprobado formalmente para MASH sola.",
      "2": "Útil fuera de ficha (off-label) pero no aprobado específicamente.",
      "3": "Solo para no diabéticos, menor potencia."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-110",
    "topic": "cancer_gastrico",
    "difficulty": "Staff",
    "text": "¿Cuál es el margen de seguridad recomendado para una resección endoscópica de un cáncer gástrico incipiente según las guías japonesas?",
    "options": [
      "1 mm",
      "5 mm",
      "2 cm",
      "No requiere margen si es incipiente"
    ],
    "correctIndex": 1,
    "explanation": "Se considera un margen de 5mm para asegurar la resección R0 del tumor delimitado.",
    "fisiopato": "El crecimiento horizontal suele superar ligeramente el área visible endoscópicamente.",
    "clinicalPearl": "La cromoendoscopia (NBI/LCI) es vital para delimitar bordes.",
    "guideline": "JGCA (Japanese Gastric Cancer Association) guidelines.",
    "whyWrong": {
      "0": "Insuficiente.",
      "2": "Excesivo para endoscopia.",
      "3": "Riesgo de recurrencia local."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-111",
    "topic": "muerte_subita",
    "difficulty": "Fellow",
    "text": "Durante una colonoscopia bajo sedación profunda con Propofol, el paciente presenta súbitamente apnea y bradicardia extrema seguida de asistolia. ¿Cuál es la primera acción a realizar?",
    "options": [
      "Administrar Adrenalina 1mg EV",
      "Suspender el procedimiento, pedir ayuda e iniciar compresiones torácicas de alta calidad",
      "Realizar una laringoscopia directa",
      "Administrar Flumazenil"
    ],
    "correctIndex": 1,
    "explanation": "El inicio precoz del RCP de alta calidad es el factor determinante de sobrevida en el paro intra-procedimiento.",
    "fisiopato": "La sedación profunda puede inducir depresión respiratoria que progresa a hipoxia miocárdica y paro cardiaco.",
    "clinicalPearl": "C-A-B: Compresiones, Vía aérea, Ventilaciones.",
    "guideline": "AHA ACLS Guidelines 2020 / ESGE Sedation Guidelines.",
    "whyWrong": {
      "0": "Se hace después de iniciar compresiones.",
      "2": "Dificulta el inicio de RCP si no hay vía aérea asegurada, pero las compresiones son prioridad.",
      "3": "El propofol no tiene antagonista."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-112",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "¿Cuál es el ritmo de paro cardiaco más frecuente asociado a trastornos electrolíticos graves (como hiperkalemia) en un paciente con insuficiencia renal y cirrosis?",
    "options": [
      "Fibrilación Ventricular",
      "Actividad Eléctrica sin Pulso (AESP) / Asistolia",
      "Taquicardia Ventricular Monomórfica",
      "Flutter Auricular"
    ],
    "correctIndex": 1,
    "explanation": "La hiperkalemia severa progresa típicamente de cambios en el ECG a bradicardia extrema y finalmente AESP o asistolia.",
    "fisiopato": "El exceso de potasio extracelular disminuye el potencial de reposo de la membrana, inactivando los canales de sodio y bloqueando la conducción.",
    "clinicalPearl": "El gluconato de calcio es el primer fármaco para estabilizar la membrana miocárdica.",
    "guideline": "ACLS 2020 / Renal Emergencies.",
    "whyWrong": {
      "0": "Menos común como evento primario en hiperkalemia pura.",
      "2": "Suele ser polimórfica si ocurre.",
      "3": "No es un ritmo de paro."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-113",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "Escenario de Simulación: Usted es el líder de una unidad de endoscopia. Un paciente con HDA masiva entra en shock hipovolémico grado IV. Su equipo está confundido. ¿Cuál es la mejor estrategia de liderazgo en este momento?",
    "options": [
      "Realizar la endoscopia usted mismo mientras da órdenes",
      "Asumir el rol de líder de flujo, delegar tareas específicas (vías, monitoreo, fármacos) y mantener una visión global (situational awareness)",
      "Esperar a que llegue el intensivista para tomar decisiones",
      "Gritar para que el equipo reaccione rápido"
    ],
    "correctIndex": 1,
    "explanation": "El CRM (Crisis Resource Management) enfatiza que el líder no debe \"ensuciarse las manos\" con tareas técnicas si el equipo requiere coordinación.",
    "fisiopato": "El estrés agudo disminuye el desempeño individual; el liderazgo estructurado optimiza el uso de recursos.",
    "clinicalPearl": "Use comunicación de \"lazo cerrado\" (Closed-loop communication).",
    "guideline": "Crisis Resource Management in Healthcare.",
    "whyWrong": {
      "0": "Pierde la visión global del paciente.",
      "2": "Retrasa el manejo crítico.",
      "3": "Deteriora el clima y la seguridad del paciente."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-114",
    "topic": "protocolo_simulacro",
    "difficulty": "Staff",
    "text": "En un simulacro de perforación esofágica post-dilatación, ¿cuál es el tiempo máximo aceptable para la administración de antibióticos de amplio espectro para optimizar el pronóstico?",
    "options": [
      "Dentro de la primera hora",
      "A las 6 horas",
      "Cuando aparezcan signos de mediastinitis en el TAC",
      "Al día siguiente"
    ],
    "correctIndex": 0,
    "explanation": "La precocidad en el inicio de antibióticos y el control de la fuente es vital en perforaciones esofágicas.",
    "fisiopato": "La contaminación del mediastino con contenido gástrico y saliva genera una respuesta inflamatoria sistémica fulminante.",
    "clinicalPearl": "Sospecha de perforación = Antibióticos + Régimen Cero + Evaluación quirúrgica/endoscópica inmediata.",
    "guideline": "WSES Guidelines on Esophageal Perforation.",
    "whyWrong": {
      "1": "Aumenta mortalidad.",
      "2": "Demasiado tarde.",
      "3": "Error fatal."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-115",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo fisiopatológico principal de la vasodilatación esplácnica en la cirrosis avanzada?",
    "options": [
      "Exceso de Angiotensina II",
      "Producción excesiva local de Óxido Nítrico (NO) y endocannabinoides",
      "Aumento del tono simpático central",
      "Déficit de Prostaglandinas"
    ],
    "correctIndex": 1,
    "explanation": "La hipertensión portal induce la liberación sistémica y local de potentes vasodilatadores para compensar la resistencia intrahepática.",
    "fisiopato": "El NO generado por la eNOS sobreactivada relaja el músculo liso vascular esplácnico, llevando a hipovolemia arterial efectiva.",
    "clinicalPearl": "Esta vasodilatación es la que activa el sistema RAA, llevando a retención de sodio y ascitis.",
    "guideline": "Sanyal et al. / Hepatology Textbooks.",
    "whyWrong": {
      "0": "La Angiotensina II termina estando elevada para compensar, pero es vasoconstrictora.",
      "2": "El tono simpático es compensatorio elevado.",
      "3": "Las prostaglandinas están aumentadas en este escenario."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-116",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Qué mide el score MELD-Na y para qué se utiliza principalmente?",
    "options": [
      "Severidad de la ascitis; para guiar dosis de diuréticos",
      "Riesgo de mortalidad a 3 meses; para priorización en lista de trasplante hepático",
      "Función de síntesis; para diagnosticar cirrosis",
      "Riesgo de hemorragia; para indicar betabloqueo"
    ],
    "correctIndex": 1,
    "explanation": "El MELD-Na incluye Creatinina, Bilirrubina, INR y Sodio para predecir sobrevida.",
    "fisiopato": "El sodio refleja la severidad de la hipertensión portal y la disfunción circulatoria.",
    "clinicalPearl": "Un MELD-Na > 15 suele ser el umbral para considerar trasplante.",
    "guideline": "UNOS / OPTN Policy.",
    "whyWrong": {
      "0": "Inespecífico para ascitis.",
      "2": "La cirrosis es histológica/clínica.",
      "3": "Varon mide eso mejor."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-117",
    "topic": "hda",
    "difficulty": "Staff",
    "text": "En un paciente con HDA por úlcera péptica y uso concomitante de Clopidogrel, ¿cuál es la conducta recomendada respecto al antiagregante?",
    "options": [
      "Suspenderlo por 30 días",
      "Mantenerlo si el riesgo cardiovascular es alto, previa hemostasia endoscópica exitosa",
      "Cambiar a Aspirina inmediatamente",
      "Suspenderlo solo si la úlcera es Forrest III"
    ],
    "correctIndex": 1,
    "explanation": "La suspensión prolongada de Clopidogrel en pacientes con Stents coronarios recientes conlleva alto riesgo de trombosis.",
    "fisiopato": "El balance entre riesgo de resangrado y riesgo isquémico debe ser individualizado.",
    "clinicalPearl": "La hemostasia endoscópica efectiva permite reanudar antiagregantes precozmente en la mayoría.",
    "guideline": "ESGE/ESC Joint Position Statement.",
    "whyWrong": {
      "0": "Riesgo cardiovascular inaceptable.",
      "2": "La aspirina también tiene riesgo GI.",
      "3": "Decisión clínica, no solo por Forrest."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-118",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo de acción del Upadacitinib en el tratamiento de la Colitis Ulcerosa?",
    "options": [
      "Anti-TNF alfa",
      "Inhibidor selectivo de JAK-1",
      "Anti-Integrina alfa-4-beta-7",
      "Anti-IL 12/23"
    ],
    "correctIndex": 1,
    "explanation": "Upadacitinib es una pequeña molécula oral que bloquea la señalización de múltiples citoquinas proinflamatorias.",
    "fisiopato": "Al inhibir JAK-1, interrumpe la vía STAT, reduciendo la expresión de genes inflamatorios.",
    "clinicalPearl": "Eficaz en casos refractarios a Anti-TNF.",
    "guideline": "U-ACHIEVE / U-ACCOMPLISH trials.",
    "whyWrong": {
      "0": "Infliximab/Adalimumab.",
      "2": "Vedolizumab.",
      "3": "Ustekinumab."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-119",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "¿Para qué se utiliza el Score de Oakland en el contexto de la Hemorragia Digestiva Baja?",
    "options": [
      "Para predecir la necesidad de cirugía de urgencia",
      "Para identificar pacientes de bajo riesgo que pueden ser manejados de forma segura como ambulatorios",
      "Para diagnosticar la causa exacta del sangrado",
      "Para predecir la mortalidad a 1 año"
    ],
    "correctIndex": 1,
    "explanation": "Un puntaje <= 8 en el Score de Oakland tiene una alta probabilidad de egreso seguro desde urgencias.",
    "fisiopato": "Evalúa variables clínicas (edad, sexo, previo ingreso por HDB, frecuencia cardiaca, presión arterial, hemoglobina) para estratificar riesgo.",
    "clinicalPearl": "Es el score recomendado por las guías británicas (BSG) y americanas (ACG).",
    "guideline": "BSG / ACG Guidelines on Acute LGIB.",
    "whyWrong": {
      "0": "No es su objetivo primario.",
      "2": "Es un predictor pronóstico, no diagnóstico.",
      "3": "Mide riesgo a corto plazo."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-120",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el esquema pangenotípico de elección actual para el tratamiento de la Hepatitis C (VHC) en un paciente sin cirrosis?",
    "options": [
      "Interferón + Ribavirina por 48 semanas",
      "Sofosbuvir/Velpatasvir por 12 semanas o Glecaprevir/Pibrentasvir por 8 semanas",
      "Monoterapia con Sofosbuvir",
      "Boceprevir + Telaprevir"
    ],
    "correctIndex": 1,
    "explanation": "Los antivirales de acción directa (AAD) logran tasas de curación (RVS) > 95%.",
    "fisiopato": "Bloquean proteínas no estructurales del virus (NS3/4A, NS5A, NS5B) impidiendo su replicación de forma selectiva.",
    "clinicalPearl": "Antes de iniciar, siempre descarte coinfección con VHB por riesgo de reactivación.",
    "guideline": "Manual Chileno 2025 / Guías EASL/AASLD VHC.",
    "whyWrong": {
      "0": "Obsoleto y tóxico.",
      "2": "Ineficaz como monoterapia.",
      "3": "DAA de primera generación, ya no se usan."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-121",
    "topic": "masld",
    "difficulty": "Staff",
    "text": "¿Cuál es el valor de corte inferior del Score FIB-4 para descartar fibrosis avanzada en MASLD?",
    "options": [
      "< 1.30 (< 2.0 en mayores de 65 años)",
      "< 3.25",
      "> 2.67",
      "< 0.5"
    ],
    "correctIndex": 0,
    "explanation": "Un FIB-4 bajo tiene un alto valor predictivo negativo para fibrosis avanzada.",
    "fisiopato": "Utiliza la edad, AST, ALT y Recuento de Plaquetas como subrogados bioquímicos de la fibrosis hepática.",
    "clinicalPearl": "Es la primera herramienta de tamizaje recomendada en atención primaria y endocrinología.",
    "guideline": "Manual Chileno 2025 / AGA Clinical Practice Update.",
    "whyWrong": {
      "1": "Corte superior para alta probabilidad de fibrosis.",
      "2": "Punto de corte intermedio.",
      "3": "Demasiado bajo."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-122",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el test de función pancreática exocrina más utilizado en la práctica clínica por su facilidad y disponibilidad?",
    "options": [
      "Test de Secretina-Colecistoquinina",
      "Elastasa fecal-1",
      "Grasa en deposiciones de 72 horas (Van de Kamer)",
      "Prueba de aliento con triglicéridos marcados"
    ],
    "correctIndex": 1,
    "explanation": "La elastasa fecal-1 es estable en las deposiciones y refleja la producción enzimática acinar.",
    "fisiopato": "En la pancreatitis crónica, la destrucción del parénquima disminuye la secreción de pro-enzimas.",
    "clinicalPearl": "Un valor < 200 ug/g es sugerente de insuficiencia, y < 100 ug/g es severo.",
    "guideline": "United European Gastroenterology (UEG) guidelines.",
    "whyWrong": {
      "0": "Estándar de oro pero muy invasivo y complejo.",
      "2": "Engorroso y poco aceptado por pacientes.",
      "3": "Poco disponible fuera de centros de investigación."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-123",
    "topic": "muerte_subita",
    "difficulty": "Fellow",
    "text": "Paciente con antecedente de QT largo congénito entra en Torsades de Pointes durante su endoscopia. ¿Cuál es el tratamiento farmacológico de elección inmediato?",
    "options": [
      "Amiodarona 300mg EV",
      "Sulfato de Magnesio 2g EV",
      "Lidocaína 1% EV",
      "Verapamilo"
    ],
    "correctIndex": 1,
    "explanation": "El magnesio estabiliza la membrana y acorta el intervalo QT funcionalmente.",
    "fisiopato": "La hipomagnesemia o fármacos que prolongan el QT favorecen la post-despolarización temprana.",
    "clinicalPearl": "Desfíbrila si el paciente está inestable o en FV.",
    "guideline": "ACLS 2020.",
    "whyWrong": {
      "0": "Puede prolongar más el QT en casos de Torsades.",
      "2": "Segunda línea si el magnesio falla.",
      "3": "Contraindicado; empeora la inestabilidad."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-124",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el patógeno más probable en un brote de diarrea acuosa profusa en un crucero?",
    "options": [
      "Norovirus",
      "Salmonella",
      "Vibrio cholerae",
      "Shigella"
    ],
    "correctIndex": 0,
    "explanation": "El Norovirus es la causa más común de brotes de gastroenteritis en entornos cerrados o concurridos.",
    "fisiopato": "Ataca los enterocitos del intestino delgado, causando una mala absorción transitoria por pérdida de borde en cepillo.",
    "clinicalPearl": "El lavado de manos con alcohol gel es menos efectivo que con agua y jabón para Norovirus.",
    "guideline": "CDC / ACG Guidelines.",
    "whyWrong": {
      "1": "Suele ser por alimentos contaminados (huevo/aves).",
      "2": "Endémico en ciertas áreas, raro en cruceros modernos.",
      "3": "Causa diarrea inflamatoria/disentérica."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-125",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "En un paciente con diarrea disentérica y sospecha de Colitis por C. difficile, ¿cuál es el test inicial de mayor sensibilidad?",
    "options": [
      "Coprocultivo para anaerobios",
      "NAAT (PCR) para genes de toxina",
      "Ensayo de toxinas A/B por ELISA",
      "Colonoscopia"
    ],
    "correctIndex": 1,
    "explanation": "La PCR (NAAT) es altamente sensible para detectar la presencia de cepas toxigénicas.",
    "fisiopato": "Detecta la secuencia de ADN del gen tcdB que codifica la toxina.",
    "clinicalPearl": "Un NAAT positivo con ELISA de toxinas negativo puede indicar colonización; correlacione con la clínica.",
    "guideline": "IDSA/SHEA Guidelines 2021.",
    "whyWrong": {
      "0": "Lento y no distingue cepas toxigénicas.",
      "2": "Menos sensible que la PCR.",
      "3": "Reservado para casos dudosos o sospecha de perforación/isquemia."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-126",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la cirugía de elección para el tratamiento del ERGE refractario con hernia hiatal confirmada?",
    "options": [
      "Gastrectomía en manga",
      "Funduplicatura de Nissen (360°)",
      "Bypass gástrico en Y de Roux",
      "Esofaguectomía distal"
    ],
    "correctIndex": 1,
    "explanation": "La funduplicatura de Nissen restaura la competencia del EEI y reduce la hernia.",
    "fisiopato": "Crea una válvula mecánica al envolver el fundus gástrico alrededor del esófago distal.",
    "clinicalPearl": "En pacientes obesos con ERGE, el Bypass gástrico es preferible al Nissen.",
    "guideline": "SAGES / ACG Guidelines.",
    "whyWrong": {
      "0": "Puede empeorar el reflujo significativamente.",
      "2": "De elección en obesidad mórbida con ERGE.",
      "3": "Procedimiento extremo para ERGE simple."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-127",
    "topic": "motores_esofago",
    "difficulty": "Staff",
    "text": "¿Qué tipo de Acalasia (Clasificación de Chicago) presenta el mejor pronóstico de respuesta al tratamiento farmacológico o quirúrgico?",
    "options": [
      "Tipo I (Clásica)",
      "Tipo II (Con compresión panesofágica)",
      "Tipo III (Espástica)",
      "Tipo IV"
    ],
    "correctIndex": 1,
    "explanation": "El Tipo II suele responder mejor a la miotomía o dilatación neumática en comparación con el Tipo I y III.",
    "fisiopato": "La presurización panesofágica indica que aún hay reserva muscular para generar presión, a diferencia del Tipo I (atonal) o III (espasmos caóticos).",
    "clinicalPearl": "El Tipo III suele requerir miotomías más largas (POEM).",
    "guideline": "Chicago Classification 4.0.",
    "whyWrong": {
      "0": "Respuesta intermedia.",
      "2": "Peor pronóstico y manejo más complejo.",
      "3": "No existe el tipo IV en Chicago."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-128",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "Según los criterios de Roma IV, ¿cuál es la definición de Dispepsia Funcional?",
    "options": [
      "Dolor epigástrico que mejora con la defecación",
      "Presencia de plenitud postprandial, saciedad precoz o dolor epigástrico sin causa orgánica evidente",
      "Pirosis retroesternal persistente",
      "Diarrea y dolor abdominal"
    ],
    "correctIndex": 1,
    "explanation": "Se divide en Síndrome de Distrés Postprandial y Síndrome de Dolor Epigástrico.",
    "fisiopato": "Involucra hipersensibilidad visceral, acomodación gástrica alterada y disfunción del eje cerebro-intestino.",
    "clinicalPearl": "Síntomas deben estar presentes al menos 3 días por semana en los últimos 3 meses.",
    "guideline": "Rome IV criteria.",
    "whyWrong": {
      "0": "Sugerente de Intestino Irritable.",
      "2": "Define ERGE.",
      "3": "Inespecífico."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-129",
    "topic": "cancer_esofago",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el intervalo de vigilancia endoscópica recomendado para un Esófago de Barrett sin displasia confirmado en dos endoscopias?",
    "options": [
      "Anual",
      "Cada 3 a 5 años",
      "Cada 10 años",
      "No requiere más vigilancia"
    ],
    "correctIndex": 1,
    "explanation": "El bajo riesgo de progresión anual (< 0.5%) justifica intervalos largos.",
    "fisiopato": "El Barrett es una condición premaligna pero la mayoría de los pacientes no progresarán a adenocarcinoma.",
    "clinicalPearl": "Asegúrese de usar el protocolo de Seattle (biopsias en 4 cuadrantes cada 2 cm).",
    "guideline": "ACG Clinical Guideline: Diagnosis and Management of Barrett’s Esophagus.",
    "whyWrong": {
      "0": "Excesivo para ausencia de displasia.",
      "2": "Inseguro; podría pasar por alto una progresión.",
      "3": "Error clínico; el riesgo persiste."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-130",
    "topic": "cancer_gastrico",
    "difficulty": "Staff",
    "text": "¿Qué evalúa el sistema OLGA en el estudio de la gastritis crónica?",
    "options": [
      "Solo la presencia de H. pylori",
      "El estadio de atrofia gástrica basado en la localización y severidad histológica",
      "La presencia de metaplasia intestinal únicamente",
      "El riesgo de linfoma MALT"
    ],
    "correctIndex": 1,
    "explanation": "OLGA (Operative Link for Gastritis Assessment) correlaciona la extensión de la atrofia con el riesgo de cáncer gástrico.",
    "fisiopato": "La cascada de Correa (Gastritis -> Atrofia -> Metaplasia -> Displasia) es el eje de la carcinogénesis gástrica distal.",
    "clinicalPearl": "Estadios III y IV de OLGA/OLGIM requieren vigilancia endoscópica estrecha.",
    "guideline": "MAPS II guidelines (ESGE).",
    "whyWrong": {
      "0": "Es un factor gatillante, no lo que mide OLGA.",
      "2": "Eso lo mide OLGIM.",
      "3": "Relacionado pero no es el foco del sistema OLGA."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-131",
    "topic": "celiaca",
    "difficulty": "Fellow",
    "text": "Un paciente presenta una biopsia duodenal con linfocitosis intraepitelial (>25/100 enterocitos) pero con vellosidades normales. ¿A qué clasificación de Marsh corresponde?",
    "options": [
      "Marsh 0",
      "Marsh 1",
      "Marsh 2",
      "Marsh 3a"
    ],
    "correctIndex": 1,
    "explanation": "Marsh 1 se define por el aumento de LIEs sin cambios arquitecturales (atrofia o hiperplasia de criptas).",
    "fisiopato": "Es la respuesta inflamatoria inicial al gluten, inespecífica pero característica de la fase temprana o potencial de la enfermedad.",
    "clinicalPearl": "Marsh 1 no es diagnóstico exclusivo de Celiaquía; considere SIBO, AINES o alergias alimentarias.",
    "guideline": "Modified Marsh Classification.",
    "whyWrong": {
      "0": "Mucosa normal.",
      "2": "Incluye hiperplasia de criptas.",
      "3": "Incluye atrofia vellositaria parcial."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-132",
    "topic": "biologia",
    "difficulty": "Subspecialist",
    "text": "¿Qué mutación genética es la causa más frecuente del Síndrome de Lynch (Cáncer Colorrectal Hereditario No Polipósico)?",
    "options": [
      "APC",
      "MLH1 y MSH2",
      "KRAS",
      "p53"
    ],
    "correctIndex": 1,
    "explanation": "El Síndrome de Lynch se debe a defectos en los genes de reparación de errores de emparejamiento (MMR).",
    "fisiopato": "La pérdida de función de MMR lleva a inestabilidad de microsatélites (MSI) y acumulación de mutaciones.",
    "clinicalPearl": "El tamizaje universal en piezas quirúrgicas de CCR se recomienda actualmente.",
    "guideline": "Manchester Guidelines / NCCN.",
    "whyWrong": {
      "0": "Causa Poliposis Adenomatosa Familiar (FAP).",
      "2": "Mutación somática común en CCR esporádico.",
      "3": "Gen supresor de tumores afectado en fases tardías."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-133",
    "topic": "nutricion",
    "difficulty": "Staff",
    "text": "¿Cuál es el micronutriente cuya deficiencia se asocia clásicamente a la \"Acropatía Enteropática\" en pacientes con mala absorción severa?",
    "options": [
      "Vitamina B12",
      "Zinc",
      "Hierro",
      "Selenio"
    ],
    "correctIndex": 1,
    "explanation": "El zinc es vital para la integridad de la piel y mucosas; su déficit causa lesiones vesículo-ampollosas periorificiales.",
    "fisiopato": "El zinc actúa como cofactor en más de 300 enzimas de síntesis de proteínas y división celular.",
    "clinicalPearl": "Sospeche déficit de zinc en pacientes con diarrea crónica y dermatitis persistente.",
    "guideline": "Manual Chileno 2025 / Clinical Nutrition in GI disease.",
    "whyWrong": {
      "0": "Causa anemia megaloblástica y neuropatía.",
      "2": "Causa anemia ferropénica.",
      "3": "Causa miocardiopatía (Enfermedad de Keshan)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-134",
    "topic": "vias_biliares",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la triada de Charcot y para qué patología es sugerente?",
    "options": [
      "Dolor, ictericia y fiebre; sugiere Colangitis Aguda",
      "Dolor, masa palpable y Murphy; sugiere Colecistitis",
      "Ascitis, edema y telangiectasias; sugiere Cirrosis",
      "Vómitos, diarrea y dolor; sugiere Gastroenteritis"
    ],
    "correctIndex": 0,
    "explanation": "La triada de Charcot es clásica de la colangitis por obstrucción biliar e infección.",
    "fisiopato": "La estasis biliar permite el sobrecrecimiento bacteriano y la translocación hacia el sistema venoso y linfático.",
    "clinicalPearl": "Si se suma shock y compromiso de conciencia, se llama Pentada de Reynolds.",
    "guideline": "Tokyo Guidelines 2018.",
    "whyWrong": {
      "1": "Sugerente de colecistitis complicada.",
      "2": "Estigmas de enfermedad hepática crónica.",
      "3": "Inespecífico."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-135",
    "topic": "perfil_hepatico",
    "difficulty": "Fellow",
    "text": "Un paciente presenta una elevación de Bilirrubina Indirecta (No conjugada) del 90%, con Hemoglobina y Reticulocitos normales, y enzimas hepáticas normales. ¿Cuál es el diagnóstico más probable?",
    "options": [
      "Síndrome de Gilbert",
      "Síndrome de Crigler-Najjar tipo I",
      "Hepatitis Aguda",
      "Hemólisis intravascular"
    ],
    "correctIndex": 0,
    "explanation": "El Síndrome de Gilbert es una deficiencia parcial de la enzima glucuroniltransferasa (UGT1A1) que se manifiesta ante estrés o ayuno.",
    "fisiopato": "La captación o conjugación defectuosa de la bilirrubina libre genera una hiperbilirrubinemia leve persistente.",
    "clinicalPearl": "Es una condición benigna que no requiere tratamiento, solo tranquilidad al paciente.",
    "guideline": "Manual Chileno 2025 / Hepatology Essentials.",
    "whyWrong": {
      "1": "Presentación neonatal con niveles de bilirrubina altísimos (> 20 mg/dL).",
      "2": "Habría elevación de transaminasas.",
      "3": "Habría anemia y reticulocitosis."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-136",
    "topic": "h_pylori",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo de resistencia bacteriana de H. pylori a la Claritromicina?",
    "options": [
      "Producción de Beta-lactamasas",
      "Mutaciones puntuales en el gen del ARNr 23S",
      "Bombas de eflujo inespecíficas",
      "Modificación del precursor del peptidoglicano"
    ],
    "correctIndex": 1,
    "explanation": "Las mutaciones en el dominio V del ARNr 23S impiden la unión del macrólido al ribosoma bacteriano.",
    "fisiopato": "La alteración del sitio de unión estructural anula la capacidad del fármaco para detener la síntesis proteica.",
    "clinicalPearl": "La resistencia a Claritromicina es el principal factor de falla terapéutica en occidente.",
    "guideline": "Maastricht VI.",
    "whyWrong": {
      "0": "Mecanismo de resistencia a penicilinas.",
      "2": "Presente en otros fármacos pero no es el principal para macrólidos en H. pylori.",
      "3": "Mecanismo para Vancomicina."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-137",
    "topic": "hda",
    "difficulty": "Staff",
    "text": "¿Cuál es el rol de la Eritromicina endovenosa en el manejo de la HDA aguda?",
    "options": [
      "Antibiótico profiláctico",
      "Proquinético para mejorar la visualización endoscópica al vaciar el estómago de coágulos",
      "Hemostático directo",
      "Tratamiento para várices"
    ],
    "correctIndex": 1,
    "explanation": "La eritromicina actúa sobre los receptores de motilina, induciendo contracciones gástricas fuertes.",
    "fisiopato": "El vaciamiento gástrico de sangre y restos permite una endoscopia más rápida, segura y efectiva.",
    "clinicalPearl": "Se administra una dosis única de 250mg EV unos 30-60 minutos antes del procedimiento.",
    "guideline": "ESGE Guidelines on Upper GI Bleeding.",
    "whyWrong": {
      "0": "No se usa con ese fin (se prefiere ceftriaxona en cirróticos).",
      "2": "No tiene efecto sobre la coagulación.",
      "3": "Sin efecto vascular."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-138",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "Durante un código azul en el área de recuperación de endoscopia, se utiliza un Desfibrilador Externo Automático (DEA). El DEA indica \"Descarga no aconsejada\". ¿Cuál es el siguiente paso?",
    "options": [
      "Apagar el DEA y esperar al equipo de trauma",
      "Reiniciar inmediatamente compresiones torácicas por 2 minutos",
      "Verificar el pulso por 1 minuto",
      "Administrar un golpe precordial"
    ],
    "correctIndex": 1,
    "explanation": "Si el ritmo no es desfibrilable (Asistolia o AESP), se debe minimizar la interrupción de las compresiones.",
    "fisiopato": "La perfusión coronaria cae drásticamente cada segundo que no hay compresiones.",
    "clinicalPearl": "No pierda tiempo revisando el pulso si el DEA no recomienda descarga a menos que haya signos claros de vida.",
    "guideline": "AHA BLS/ACLS 2020.",
    "whyWrong": {
      "0": "Error crítico; el paciente sigue en paro.",
      "2": "Demasiado tiempo perdido.",
      "3": "Maniobra obsoleta y no recomendada."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-139",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "En un paciente con Hemorragia Digestiva Varicosa y paro cardiaco concurrente, ¿cuál es la prioridad según los algoritmos de soporte vital avanzado?",
    "options": [
      "Instalar un balón de Sengstaken-Blakemore inmediatamente",
      "Manejo del paro cardiaco (RCP/Desfibrilación) siguiendo protocolos ACLS estándar",
      "Realizar endoscopia de urgencia durante las compresiones",
      "Administrar Terlipresina"
    ],
    "correctIndex": 1,
    "explanation": "La reanimación cardiopulmonar (RCP) y la restauración de la circulación espontánea son siempre la prioridad sobre el control de la fuente del sangrado en el paro activo.",
    "fisiopato": "Sin flujo sistémico generado por RCP, cualquier maniobra hemostática es inútil.",
    "clinicalPearl": "Maneje el \"C\" (Circulación) del paro primero, luego el sangrado.",
    "guideline": "ACLS 2020.",
    "whyWrong": {
      "0": "Dificulta la RCP y el manejo de la vía aérea.",
      "2": "Técnicamente imposible y no prioritario.",
      "3": "Fármaco secundario en el contexto de paro."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-140",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "¿Cuál es la conducta recomendada ante una estenosis esofágica péptica confirmada por endoscopia?",
    "options": [
      "Dilatación endoscópica (bujías o balón) + IBP a dosis altas",
      "Cirugía de resección esofágica",
      "Solo tratamiento con IBP",
      "Stent esofágico autoexpandible como primera línea"
    ],
    "correctIndex": 0,
    "explanation": "La dilatación es efectiva para restaurar el calibre luminal, y el IBP previene la recurrencia.",
    "fisiopato": "La inflamación crónica por ácido genera fibrosis transmural que reduce el lumen esofágico.",
    "clinicalPearl": "Asegúrese de tomar biopsias para descartar malignidad en toda estenosis.",
    "guideline": "ASGE Guideline: Role of endoscopy in GERD.",
    "whyWrong": {
      "1": "Demasiado agresivo como inicio.",
      "2": "Insuficiente para resolver la disfagia mecánica.",
      "3": "Reservado para estenosis malignas o refractarias/benignas muy complejas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-141",
    "topic": "diarrea_cronica",
    "difficulty": "Subspecialist",
    "text": "En un paciente con sospecha de mala absorción de ácidos biliares, ¿cuál es el test de oro (aunque poco disponible) para el diagnóstico?",
    "options": [
      "SeHCAT (Ácido tauroselcólico marcado con Se75)",
      "Elastasa fecal",
      "D-Xilosa",
      "Test de aliento con Lactulosa"
    ],
    "correctIndex": 0,
    "explanation": "El SeHCAT mide la retención de ácidos biliares; una retención < 10-15% a los 7 días es diagnóstica.",
    "fisiopato": "La falla en la circulación enterohepática (ileon terminal) lleva a que los ácidos biliares lleguen al colon, induciendo secreción de agua.",
    "clinicalPearl": "Muchas veces se realiza una prueba terapéutica con Colestiramina ante la sospecha.",
    "guideline": "BSG Guidelines on chronic diarrhoea.",
    "whyWrong": {
      "1": "Mide función pancreática.",
      "2": "Mide absorción en intestino delgado proximal.",
      "3": "Mide SIBO."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-142",
    "topic": "ulcera_peptica",
    "difficulty": "Staff",
    "text": "¿Cuál es el mecanismo por el cual los AINES inducen daño en la mucosa gástrica?",
    "options": [
      "Inhibición de la síntesis de prostaglandinas vía COX-1",
      "Aumento directo de la secreción de ácido clorhídrico",
      "Destrucción de las células parietales",
      "Bloqueo de los receptores H2"
    ],
    "correctIndex": 0,
    "explanation": "Las prostaglandinas son vitales para la secreción de moco, bicarbonato y el flujo sanguíneo mucoso.",
    "fisiopato": "Al inhibir la COX-1, se pierden los mecanismos de defensa citoprotectores, permitiendo el daño por ácido y pepsina.",
    "clinicalPearl": "Los inhibidores de COX-2 (Coxibs) tienen menor riesgo GI pero mayor riesgo cardiovascular.",
    "guideline": "Manual Chileno 2025 / ACG Guidelines.",
    "whyWrong": {
      "1": "No es su efecto primario.",
      "2": "No causan lisis celular directa.",
      "3": "Efecto de los fármacos antiácidos."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-143",
    "topic": "muerte_subita",
    "difficulty": "Fellow",
    "text": "¿Cuál es el dispositivo de vía aérea supraglótico de elección para manejo de emergencia inicial por personal no anestesiólogo en la sala de endoscopia?",
    "options": [
      "Máscara Laríngea (LMA)",
      "Tubo Endotraqueal",
      "Cánula de Guedel solamente",
      "Mascarilla facial simple"
    ],
    "correctIndex": 0,
    "explanation": "La LMA es fácil de insertar y proporciona una ventilación efectiva en situaciones de rescate.",
    "fisiopato": "Sella la laringe por arriba de las cuerdas vocales, permitiendo el paso de oxígeno a presión positiva moderada.",
    "clinicalPearl": "No protege totalmente contra la aspiración, a diferencia del tubo con manguito.",
    "guideline": "Difficult Airway Society (DAS) guidelines.",
    "whyWrong": {
      "1": "Requiere más entrenamiento y destreza.",
      "2": "No asegura vía aérea si hay obstrucción o apnea severa.",
      "3": "Mínima eficacia en paro."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-144",
    "topic": "h_pylori",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la ventaja principal del Vonoprazan (P-CAB) sobre los IBP tradicionales en la terapia de erradicación de H. pylori?",
    "options": [
      "Es más barato",
      "Logra un bloqueo ácido más rápido, potente y estable, sin depender de la activación por el canalículo parietal",
      "Tiene menos efectos secundarios",
      "No interactúa con antibióticos"
    ],
    "correctIndex": 1,
    "explanation": "Los P-CAB (Potassium-Competitive Acid Blockers) bloquean la bomba de protones de forma reversible y competitiva con el potasio.",
    "fisiopato": "Al mantener un pH gástrico > 6 de forma constante, permite que los antibióticos (Amoxicilina/Claritromicina) alcancen su máxima estabilidad y eficacia bactericida.",
    "clinicalPearl": "Especialmente útil en metabolizadores rápidos de IBP (polimorfismo CYP2C19).",
    "guideline": "Maastricht VI / PHALCON-EE trials.",
    "whyWrong": {
      "0": "Actualmente es más costoso por ser nuevo.",
      "2": "Perfil de seguridad similar.",
      "3": "No es su ventaja principal."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-145",
    "topic": "vias_biliares",
    "difficulty": "Subspecialist",
    "text": "¿Qué hallazgo en la Colangiorresonancia es patognomónico de la Colangitis Esclerosante Primaria (CEP)?",
    "options": [
      "Imagen en \"cuentas de rosario\" (estenosis multifocales y dilataciones segmentarias)",
      "Dilatación masiva de la vía biliar extrahepática",
      "Vesícula en porcelana",
      "Cálculo impactado en el cístico"
    ],
    "correctIndex": 0,
    "explanation": "La CEP afecta tanto los conductos intra como extrahepáticos de forma parcheada.",
    "fisiopato": "La inflamación crónica fibrosante obliterativa genera una anatomía biliar distorsionada.",
    "clinicalPearl": "Altamente asociado a Colitis Ulcerosa (70-80% de los casos).",
    "guideline": "AASLD guidelines: Primary Sclerosing Cholangitis.",
    "whyWrong": {
      "1": "Sugerente de obstrucción distal o Quiste de Colédoco.",
      "2": "Factor de riesgo para cáncer de vesícula.",
      "3": "Manejo de colecistitis."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-146",
    "topic": "motores_esofago",
    "difficulty": "Fellow",
    "text": "En la manometría de alta resolución, ¿cuál es el criterio diagnóstico para un Esófago en Martillo Neumático (Jackhammer Esophagus)?",
    "options": [
      "DCI (Integral de Contracciones Distales) > 8000 mmHg.s.cm en al menos el 20% de las degluciones",
      "DCI < 450 en todas las degluciones",
      "Presión de reposo del EEI > 40 mmHg",
      "Ondas peristálticas normales"
    ],
    "correctIndex": 0,
    "explanation": "El Jackhammer se caracteriza por contracciones de vigor extremo y prolongadas.",
    "fisiopato": "Existe una hipercontractilidad del músculo liso esofágico, a menudo asociada a hipertrofia muscular.",
    "clinicalPearl": "Puede causar dolor torácico severo que simula origen cardiaco.",
    "guideline": "Chicago Classification 4.0.",
    "whyWrong": {
      "1": "Define motilidad inefectiva.",
      "2": "Sugerente de hipertensión del EEI pero no define Jackhammer por sí solo.",
      "3": "No es martillo neumático."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-147",
    "topic": "masld",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mejor predictor no invasivo de mortalidad cardiovascular en pacientes con MASLD?",
    "options": [
      "Nivel de ALT",
      "Presencia y estadio de fibrosis hepática (F3-F4)",
      "Tamaño de la esteatosis por ecografía",
      "Nivel de triglicéridos"
    ],
    "correctIndex": 1,
    "explanation": "La fibrosis es el factor histológico más importante correlacionado con desenlaces a largo plazo, incluyendo eventos cardiovasculares.",
    "fisiopato": "La fibrosis refleja una inflamación sistémica crónica y se asocia a mayor rigidez arterial y disfunción endotelial.",
    "clinicalPearl": "MASLD es una enfermedad multisistémica; el hígado es solo una parte del problema.",
    "guideline": "Consenso Multidisciplinario MASLD 2023.",
    "whyWrong": {
      "0": "Pobre correlación con daño histológico serio.",
      "2": "La esteatosis aislada tiene buen pronóstico.",
      "3": "Factor de riesgo, no predictor de mortalidad directa."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-148",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la triada diagnóstica del Síndrome Hepatopulmonar (SHP)?",
    "options": [
      "Enfermedad hepática, gradiente alvéolo-arterial de O2 aumentado y vasodilataciones intrapulmonares",
      "Cirrosis, ascitis e hidrotórax",
      "Hipertensión portal, ictericia y disnea",
      "Hipoxemia, anemia y ascitis"
    ],
    "correctIndex": 0,
    "explanation": "El SHP se caracteriza por hipoxemia debida a shunts intrapulmonares en presencia de hipertensión portal.",
    "fisiopato": "La producción excesiva de NO intrapulmonar genera dilatación capilar, dificultando la difusión de O2 hacia el centro del capilar (desequilibrio ventilación-perfusión).",
    "clinicalPearl": "Busque platipnea y ortodesoxia (disnea y desaturación al estar de pie).",
    "guideline": "Manual Chileno 2025 / AASLD Guidelines.",
    "whyWrong": {
      "1": "Define hidrotórax hepático.",
      "2": "Inespecífico.",
      "3": "No define el síndrome fisiopatológicamente."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-149",
    "topic": "perfil_hepatico",
    "difficulty": "Fellow",
    "text": "En un paciente joven con hepatitis aguda fulminante, ¿qué hallazgo bioquímico sugiere fuertemente Enfermedad de Wilson?",
    "options": [
      "FA muy baja o indetectable y relación FA/Bilirrubina < 4",
      "Transaminasas > 5000",
      "Bilirrubina Indirecta normal",
      "Hiperalbuminemia"
    ],
    "correctIndex": 0,
    "explanation": "La liberación masiva de cobre interfiere con la actividad de la fosfatasa alcalina y causa hemólisis Coombs negativa.",
    "fisiopato": "El cobre libre inhibe competitivamente a la FA y daña la membrana del eritrocito.",
    "clinicalPearl": "Wilson fulminante suele tener una relación AST/ALT > 2.",
    "guideline": "EASL Wilson’s disease guidelines.",
    "whyWrong": {
      "1": "Sugerente de isquemia o paracetamol.",
      "2": "Habría mucha bilirrubina indirecta por hemólisis.",
      "3": "Incompatible con daño agudo severo."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-150",
    "topic": "h_pylori",
    "difficulty": "Subspecialist",
    "text": "En un paciente que ha fallado a una terapia cuádruple con bismuto y a una terapia con claritromicina, ¿cuál es la mejor opción de rescate según Maastricht VI?",
    "options": [
      "Repetir la terapia cuádruple con bismuto doblando la dosis",
      "Terapia basada en Levofloxacino (IBP+Amoxi+Levo) o Rifabutina",
      "Monoterapia con Metronidazol",
      "Suspender tratamiento por 1 año"
    ],
    "correctIndex": 1,
    "explanation": "El uso de quinolonas o rifabutina son las estrategias de rescate estándar tras múltiples fallas.",
    "fisiopato": "La rifabutina inhibe la ARN polimerasa bacteriana y tiene una tasa de resistencia primaria muy baja en H. pylori.",
    "clinicalPearl": "Cuidado con la mielosupresión asociada a la Rifabutina.",
    "guideline": "Maastricht VI / Florence Consensus.",
    "whyWrong": {
      "0": "No se recomienda repetir el mismo esquema sin antibiograma.",
      "2": "Ineficaz (resistencia inducida).",
      "3": "Condena al paciente a complicaciones crónicas."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-151",
    "topic": "h_pylori",
    "difficulty": "Fellow",
    "text": "¿Cuál es la recomendación actual sobre la biopsia gástrica para H. pylori si el paciente requiere una endoscopia por otra razón?",
    "options": [
      "Solo biopsiar si hay úlcera visible",
      "Biopsia obligatoria (protocolo de Sydney) en todo paciente con dispepsia o screening de cáncer, salvo contraindicación",
      "No biopsiar si tiene un test de aire previo negativo",
      "Solo biopsiar el antro"
    ],
    "correctIndex": 1,
    "explanation": "El protocolo de Sydney (cuerpo y antro) maximiza la sensibilidad y permite evaluar atrofia/metaplasia.",
    "fisiopato": "H. pylori puede tener una distribución parcheada, por lo que biopsias múltiples de distintas zonas son necesarias.",
    "clinicalPearl": "Asegúrese de suspender el IBP 2 semanas antes para no falsear la histología.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Detecta infección pero pierde el beneficio del screening de cáncer.",
      "2": "El test de aire puede ser falso negativo (ej: toma de IBP).",
      "3": "Insuficiente para mapear la extensión de la gastritis."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-152",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "En un paciente cirrótico con ascitis y hemorragia digestiva alta, ¿por qué es mandatorio iniciar profilaxis con Ceftriaxona?",
    "options": [
      "Para tratar una posible neumonía",
      "Porque reduce la tasa de infecciones bacterianas, el resangrado y la mortalidad",
      "Para prevenir la endocarditis bacteriana",
      "Por efecto vasoconstrictor directo"
    ],
    "correctIndex": 1,
    "explanation": "La hemorragia digestiva induce traslocación bacteriana y falla inmune transitoria.",
    "fisiopato": "El paso de bacterias desde la luz intestinal al torrente sanguíneo bajo estrés aumenta la presión portal y las citoquinas inflamatorias.",
    "clinicalPearl": "La dosis estándar es 1g/día por 7 días.",
    "guideline": "Manual Chileno 2025 / Baveno VII.",
    "whyWrong": {
      "0": "Efecto secundario beneficioso, pero no el objetivo primario.",
      "2": "Extremadamente raro en este contexto.",
      "3": "Los antibióticos no son vasosactivos."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-153",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el valor diagnóstico de Gradiente Albúmina Suero-Ascitis (GASA) que indica Hipertensión Portal?",
    "options": [
      "GASA < 1.1 g/dL",
      "GASA >= 1.1 g/dL",
      "GASA = 0",
      "GASA > 2.5 g/dL"
    ],
    "correctIndex": 1,
    "explanation": "Un gradiente elevado indica que la ascitis es por transudado secundario a presión hidrostática.",
    "fisiopato": "La diferencia de presión osmótica (albúmina) equilibra la presión hidrostática portal elevada.",
    "clinicalPearl": "Si el GASA es >= 1.1 pero las proteínas totales en ascitis son > 2.5, sospeche causas post-sinusoidales (ej: falla cardiaca).",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Sugerente de procesos inflamatorios/malignos peritonaeles.",
      "2": "Imposible fisiológicamente.",
      "3": "Umbral muy alto e inespecífico."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-154",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el manejo inicial recomendado para una necrosis pancreática amurallada (WON) de 8 cm que causa compresión gástrica y vómitos?",
    "options": [
      "Drenaje quirúrgico abierto inmediato",
      "Drenaje transmural guiado por endosonografía (EUS) con prótesis de aposición luminal (LAMS)",
      "Aspiración por aguja fina (FNA) simple",
      "Colocación de sonda nasogástrica y esperar 6 meses"
    ],
    "correctIndex": 1,
    "explanation": "El \"Step-up approach\" endoscópico es hoy el estándar para colecciones sintomáticas.",
    "fisiopato": "La prótesis permite el drenaje continuo y puede servir como puerta de entrada para una necrosectomía endoscópica.",
    "clinicalPearl": "Solo intervenga si hay síntomas o sospecha de infección.",
    "guideline": "IAP/APA Evidence-based guidelines.",
    "whyWrong": {
      "0": "Mayor morbilidad que el abordaje mínimamente invasivo.",
      "2": "Alta tasa de recurrencia e infección.",
      "3": "Poco probable que resuelva el efecto de masa."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-155",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "Durante una ERE (CPRE), el paciente comienza con estridor inspiratorio y signos de lucha respiratoria tras el uso de Midazolam/Fentanilo. ¿Cuál es la sospecha inmediata?",
    "options": [
      "Broncoespasmo severo",
      "Laringoespasmo",
      "Edema agudo de pulmón",
      "Infarto agudo al miocardio"
    ],
    "correctIndex": 1,
    "explanation": "El laringoespasmo es una complicación temida de la sedación que impide la ventilación.",
    "fisiopato": "Cierre reflejo de las cuerdas vocales ante un estímulo irritativo en la vía aérea glótica.",
    "clinicalPearl": "Maniobra de Larson (presión en escotadura mandibular) y presión positiva son los primeros pasos.",
    "guideline": "Difficult Airway Management during Sedation.",
    "whyWrong": {
      "0": "Tendría sibilancias espiratorias, no estridor.",
      "2": "Causa estertores y disnea pero no estridor súbito post-sedación.",
      "3": "Dolor o cambios en ECG."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-156",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "Escenario: Se rompe una várice esofágica masiva \"en chorro\" durante el primer intento de ligadura. La visión es nula por la sangre. ¿Cuál es la siguiente maniobra correcta?",
    "options": [
      "Retirar el endoscopio y enviar a cirugía",
      "Insuflar aire masivamente y lavar con agua; si no funciona, intentar ligar a ciegas en el cardias",
      "Colocar un balón de Sengstaken-Blakemore inmediatamente para estabilizar y luego re-intentar",
      "Administrar adrenalina en el esófago"
    ],
    "correctIndex": 2,
    "explanation": "El uso del balón es una medida de puente salvadora en el sangrado varicoso incoercible.",
    "fisiopato": "El taponamiento mecánico directo sobre la unión gastroesofágica detiene el flujo hacia el plexo submucoso varicoso.",
    "clinicalPearl": "No deje el balón inflado más de 24 horas por riesgo de necrosis esofágica.",
    "guideline": "Baveno VII.",
    "whyWrong": {
      "0": "Mortalidad altísima en agudo sin estabilidad.",
      "1": "Garantiza una falla y posible aspiración.",
      "3": "Ineficaz para sangrado venoso portal."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-157",
    "topic": "celiaca",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la característica inmunofenotípica de los linfocitos intraepiteliales (LIE) que define a la Enfermedad Celiaca Refractaria Tipo II?",
    "options": [
      "Presencia de CD3 y CD8 en superficie",
      "Pérdida de CD3 y CD8 en superficie (linfocitos aberrantes)",
      "Aumento de CD4 únicamente",
      "Presencia de marcadores B (CD20)"
    ],
    "correctIndex": 1,
    "explanation": "La Refractaria Tipo II se considera un linfoma intraepitelial críptico.",
    "fisiopato": "La expansión de clones de LIEs con reordenamiento del receptor de células T y fenotipo aberrante (sCD3-, cCD3+, CD8-) tiene alto riesgo de progresión masiva.",
    "clinicalPearl": "El Tipo II tiene un pronóstico mucho peor y riesgo de Linfoma de Células T asociado a Enteropatía (EATL).",
    "guideline": "Manual Chileno 2025 / ESsCD guidelines.",
    "whyWrong": {
      "0": "Fenotipo normal/Marsh.",
      "2": "No es típico de LIEs celiacos.",
      "3": "Sugerente de linfoma B, no celiaca."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-158",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "En un paciente con Hemorragia por Várices Gástricas fúndicas (GOV2 o IGV1), ¿cuál es el agente de inyección endoscópica de elección?",
    "options": [
      "Adrenalina 1:10.000",
      "Cianoacrilato",
      "Polidocanol",
      "Suero fisiológico"
    ],
    "correctIndex": 1,
    "explanation": "El cianoacrilato (\"pegamento\") es más efectivo que la ligadura para várices fúndicas debido al flujo mayor.",
    "fisiopato": "Se polimeriza instantáneamente al contacto con la sangre, obliterando el vaso de gran calibre.",
    "clinicalPearl": "Asegúrese de usar una técnica de inyección rápida y lavar el canal para no dañar el endoscopio.",
    "guideline": "Baveno VII / ASGE Guidelines.",
    "whyWrong": {
      "0": "Ineficaz y peligroso en várices.",
      "2": "Usado en várices esofágicas pequeñas pero menos efectivo en fondo.",
      "3": "No tiene efecto hemostático."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-159",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el umbral de Hemoglobina recomendado para transfundir a un paciente con HDA aguda sin comorbilidades cardiovasculares graves?",
    "options": [
      "Hb < 10 g/dL",
      "Hb < 7 g/dL",
      "Hb < 9 g/dL",
      "Transfusión profiláctica siempre"
    ],
    "correctIndex": 1,
    "explanation": "La estrategia restrictiva mejora los desenlaces y evita el aumento de la presión portal en cirróticos.",
    "fisiopato": "La sobre-expansión de volumen aumenta la presión en el sistema venoso, favoreciendo el resangrado varicoso.",
    "clinicalPearl": "El objetivo tras la transfusión es mantener Hb entre 7 y 9 g/dL.",
    "guideline": "Villanueva et al. / NEJM / Manual Chileno 2025.",
    "whyWrong": {
      "0": "Estrategia liberal asociada a mayor resangrado.",
      "2": "Reservado para pacientes con enfermedad coronaria inestable.",
      "3": "Error clínico grave."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-160",
    "topic": "perfil_hepatico",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el anticuerpo más específico para el diagnóstico de Hepatitis Autoinmune (HAI) Tipo 2?",
    "options": [
      "ANA (Anticuerpos antinucleares)",
      "Anti-LKM1 (Antimicrosoma de hígado y riñón tipo 1)",
      "SMA (Anticuerpo antimúsculo liso)",
      "Anticuerpos antimitocondriales (AMA)"
    ],
    "correctIndex": 1,
    "explanation": "La HAI tipo 2 es más frecuente en niños y adultos jóvenes, y se define por Anti-LKM1 o Anti-LC1.",
    "fisiopato": "Pérdida de la tolerancia inmunológica contra el citocromo P450 2D6 del hepatocito.",
    "clinicalPearl": "La HAI tipo 1 es la más común en adultos y se asocia a ANA y SMA.",
    "guideline": "AASLD guidelines: Autoimmune Hepatitis.",
    "whyWrong": {
      "0": "Inespecífico; presente en Tipo 1.",
      "2": "Típico de Tipo 1.",
      "3": "Típico de Cirrosis Biliar Primaria (CBP)."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-161",
    "topic": "vias_biliares",
    "difficulty": "Staff",
    "text": "¿Cuál es la clasificación utilizada para describir la extensión anatómica del Colangiocarcinoma Hiliar (Tumor de Klatskin)?",
    "options": [
      "Clasificación de Bismuth-Corlette",
      "Clasificación de Child-Pugh",
      "Clasificación de Forrest",
      "Clasificación de Hinchey"
    ],
    "correctIndex": 0,
    "explanation": "Define la afectación de la confluencia biliar y los conductos hepáticos derechos/izquierdos.",
    "fisiopato": "La localización determina la posibilidad de resección quirúrgica y el tipo de drenaje biliar necesario.",
    "clinicalPearl": "Tipo IV implica afectación de ambos conductos secundarios o confluencia múltiple, sugiriendo irresecabilidad.",
    "guideline": "Manual Chileno 2025 /外科学 text.",
    "whyWrong": {
      "1": "Mide reserva funcional hepática.",
      "2": "Mide riesgo de sangrado en úlceras.",
      "3": "Mide severidad de diverticulitis."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-162",
    "topic": "masld",
    "difficulty": "Subspecialist",
    "text": "En un paciente con MASLD y FIB-4 de 2.1, ¿cuál es el siguiente paso recomendado para la estratificación de riesgo según las guías AGA/AASLD?",
    "options": [
      "Biopsia hepática inmediata",
      "Prueba de rigidez hepática (LSM) por elastografía (VCTE)",
      "Repetir FIB-4 en 1 mes",
      "Iniciar tratamiento con estatinas únicamente"
    ],
    "correctIndex": 1,
    "explanation": "El FIB-4 entre 1.3 y 2.67 se considera una \"zona gris\" que requiere un segundo test no invasivo.",
    "fisiopato": "La elastografía por transigencia vibracional (FibroScan) mide la rigidez del parénquima, correlacionándose con el grado de fibrosis.",
    "clinicalPearl": "Un valor de LSM < 8.0 kPa descarta razonablemente fibrosis avanzada en este grupo.",
    "guideline": "AGA Clinical Practice Update 2022 / Manual Chileno 2025.",
    "whyWrong": {
      "0": "Muy invasivo para screening inicial.",
      "2": "No aporta nueva información diagnóstica.",
      "3": "Manejo lipídico necesario pero no estratifica el hígado."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-163",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es la dosis inicial de Terapia de Reemplazo de Enzimas Pancreáticas (PERT) recomendada en las comidas principales para un adulto con insuficiencia exocrina por pancreatitis crónica?",
    "options": [
      "10,000 unidades de lipasa",
      "25,000 - 50,000 unidades de lipasa",
      "100,000 unidades de lipasa",
      "Solo se indica si hay esteatorrea visible"
    ],
    "correctIndex": 1,
    "explanation": "Dosis menores a 25,000 unidades suelen ser ineficaces para digerir una comida completa.",
    "fisiopato": "Se requiere al menos un 10% de la secreción pancreática normal de lipasa para evitar la malabsorción de grasas.",
    "clinicalPearl": "Las enzimas deben tomarse *durante* o justo al iniciar la comida, no después.",
    "guideline": "UEG Evidence-based guidelines on chronic pancreatitis.",
    "whyWrong": {
      "0": "Dosis pediátrica o insuficiente.",
      "2": "Dosis de rescate/ajuste, no inicial estándar.",
      "3": "La malabsorción subclínica también causa déficit de vitaminas liposolubles."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-164",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "En un paciente con Esófago de Barrett y displasia de bajo grado confirmada por dos patólogos expertos, ¿cuál es la conducta preferida actualmente?",
    "options": [
      "Endoscopia cada 6 meses indefinidamente",
      "Ablación por radiofrecuencia (RFA) o vigilancia estrecha",
      "Esofaguectomía",
      "Duplicar dosis de IBP y no vigilar"
    ],
    "correctIndex": 1,
    "explanation": "La ablación reduce significativamente el riesgo de progresión a adenocarcinoma en comparación con la vigilancia.",
    "fisiopato": "La eliminación del epitelio metaplásico/displásico permite la re-epitelización con tejido escamoso normal.",
    "clinicalPearl": "La decisión debe ser compartida con el paciente, explicando riesgos de progresión vs riesgos del procedimiento.",
    "guideline": "ACG 2022 / ESGE guidelines.",
    "whyWrong": {
      "0": "Aceptable anteriormente, pero la RFA es superior hoy.",
      "2": "Demasiado agresivo para displasia de bajo grado.",
      "3": "Error clínico; la displasia requiere intervención o vigilancia activa."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-165",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "¿Cuál de los siguientes biológicos está específicamente indicado para el tratamiento de la enfermedad de Crohn fistulizante perianal refractaria?",
    "options": [
      "Vedolizumab",
      "Infliximab",
      "Ustekinumab",
      "Guselkumab"
    ],
    "correctIndex": 1,
    "explanation": "El Infliximab es el biológico con mayor evidencia y recomendación de primera línea para Crohn fistulizante.",
    "fisiopato": "Su potente efecto anti-TNF sistémico y tisular favorece el cierre de trayectos fistulosos y reduce la secreción.",
    "clinicalPearl": "Suele requerir niveles valle más altos (> 10 ug/mL) para el cierre de fístulas.",
    "guideline": "ECCO Guidelines / Manual Chileno 2025.",
    "whyWrong": {
      "0": "Efecto intestinal selectivo; menos eficaz en fístulas complejas.",
      "2": "Eficaz pero con menos peso de evidencia que IFX en este escenario.",
      "3": "En estudio para EII."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-166",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "En el contexto de un paro cardiaco por Fibrilación Ventricular refractaria a 3 descargas, ¿cuál es la dosis de Amiodarona recomendada?",
    "options": [
      "150 mg EV bolo",
      "300 mg EV bolo",
      "1 mg EV bolo",
      "10 mg/kg"
    ],
    "correctIndex": 1,
    "explanation": "La primera dosis de amiodarona en FV/TVSP es de 300 mg bolo.",
    "fisiopato": "Es un antiarrítmico de clase III que prolonga el potencial de acción y el periodo refractario, bloqueando canales de sodio, potasio y calcio.",
    "clinicalPearl": "La segunda dosis es de 150 mg.",
    "guideline": "ACLS 2020.",
    "whyWrong": {
      "0": "Dosis inicial insuficiente (es la segunda dosis).",
      "2": "Dosis de adrenalina.",
      "3": "No es la dosificación estándar en paro adulto."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-167",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "En un simulacro de perforación colónica tras polipectomía difícil, ¿cuál es el primer paso recomendado si la perforación mide < 10 mm y se detecta inmediatamente?",
    "options": [
      "Cierre endoscópico inmediato con clips mecánicos",
      "Enviar a cirugía de urgencia sin intentar cierre",
      "Solo tratamiento antibiótico y observación",
      "Insuflar con CO2 al máximo para ver mejor"
    ],
    "correctIndex": 0,
    "explanation": "El cierre endoscópico inmediato (Through-the-scope clips) es altamente efectivo en perforaciones pequeñas detectadas precozmente.",
    "fisiopato": "Evita la salida masiva de contenido colónico al peritoneo, reduciendo el riesgo de peritonitis química y bacteriana.",
    "clinicalPearl": "El uso de insuflación con CO2 es mandatorio para reducir la tensión del neumoperitoneo.",
    "guideline": "ESGE Position Statement: Iatrogenic endoscopic perforations.",
    "whyWrong": {
      "1": "La cirugía se reserva para fallas del cierre endoscópico o sepsis.",
      "2": "Riesgo de peritonitis severa.",
      "3": "El CO2 se absorbe más rápido, pero no debe ser a presión máxima sin control."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-168",
    "topic": "protocolo_simulacro",
    "difficulty": "Staff",
    "text": "Escenario: Falla el equipo de electrocirugía en medio de una disección submucosa (DSE) con sangrado activo. ¿Qué principio del CRM (Crisis Resource Management) se aplica aquí?",
    "options": [
      "Fijación en la tarea (Task fixation)",
      "Anticipación y planificación (Previsión de equipos de respaldo)",
      "Liderazgo autocrático",
      "Ignorar la alarma del equipo"
    ],
    "correctIndex": 1,
    "explanation": "La seguridad del paciente depende de tener planes de respaldo (redundancia) ante fallas técnicas.",
    "fisiopato": "El estrés técnico aumenta la probabilidad de errores humanos en cadena.",
    "clinicalPearl": "Siempre verifique el equipo y tenga una alternativa (ej: clips) antes de iniciar un procedimiento complejo.",
    "guideline": "Patient Safety in Endoscopy.",
    "whyWrong": {
      "0": "Es un error común a evitar.",
      "2": "El liderazgo debe ser colaborativo.",
      "3": "Pone en riesgo la vida del paciente."
    },
    "pillar": "Staff Level"
  },
  {
    "id": "q-169",
    "topic": "muerte_subita",
    "difficulty": "Fellow",
    "text": "¿Cuál es el capnógrafo (EtCO2) mínimo sugerido durante la RCP que indica que las compresiones son de calidad y que hay chances de retorno a la circulación espontánea?",
    "options": [
      "> 5 mmHg",
      "> 10-15 mmHg",
      "> 40 mmHg",
      "No se requiere capnografía"
    ],
    "correctIndex": 1,
    "explanation": "Un EtCO2 > 10-15 mmHg refleja un gasto cardiaco generado por las compresiones suficiente para eliminar CO2.",
    "fisiopato": "El CO2 espirado es un subrogado directo del flujo sanguíneo pulmonar y sistémico durante el paro.",
    "clinicalPearl": "Si el EtCO2 cae súbitamente bajo 10, revise la calidad de las compresiones.",
    "guideline": "AHA ACLS 2020.",
    "whyWrong": {
      "0": "Indica RCP inefectiva o muerte celular.",
      "2": "Es el valor normal en ventilación espontánea.",
      "3": "Es un estándar de cuidado en RCP avanzada."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-170",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "En un paciente cirrótico con HDA y un INR de 2.5, ¿cuál es la recomendación actual respecto al uso de Plasma Fresco Congelado (PFC)?",
    "options": [
      "Transfundir PFC hasta normalizar el INR",
      "No se recomienda el uso rutinario de PFC para \"corregir\" el INR antes de la endoscopia",
      "Administrar Vitamina K únicamente",
      "Suspender la endoscopia hasta que el INR sea < 1.5"
    ],
    "correctIndex": 1,
    "explanation": "El INR en cirrosis no refleja fielmente el riesgo de sangrado debido al déficit paralelo de factores pro y anticoagulantes.",
    "fisiopato": "El PFC aumenta la sobrecarga de volumen y la presión portal, lo que puede empeorar activamente el sangrado varicoso.",
    "clinicalPearl": "Corrija solo si hay una coagulopatía de consumo clara o si el paciente no es cirrótico y toma anticoagulantes.",
    "guideline": "Baveno VII / AASLD Guidelines.",
    "whyWrong": {
      "0": "Aumenta mortalidad y resangrado.",
      "2": "Lenta e ineficaz en agudo.",
      "3": "La endoscopia debe ser precoz independiente del INR en cirróticos."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-171",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál de los siguientes fármacos es un inhibidor de la bomba de protones (IBP) que puede ser administrado en bolo seguido de infusión continua para el manejo de la úlcera péptica Forrest IA?",
    "options": [
      "Omeprazol",
      "Pantoprazol",
      "Esomeprazol",
      "Todos los anteriores según disponibilidad de formulación EV"
    ],
    "correctIndex": 3,
    "explanation": "Cualquier IBP EV potente es eficaz si se mantiene el pH gástrico > 6 para estabilizar el coágulo.",
    "fisiopato": "La pepsina degrada el coágulo en medio ácido; la inhibición profunda del ácido previene esta fibrinólisis.",
    "clinicalPearl": "El esquema clásico es 80mg bolo y 8mg/h por 72 horas.",
    "guideline": "ESGE / ACG Guidelines.",
    "whyWrong": {
      "0": "Válido.",
      "1": "Válido.",
      "2": "Válido."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-172",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el significado clínico de la presencia de anticuerpos Anti-HBc totales positivos con HBsAg negativo y Anti-HBs negativo (Core solo)?",
    "options": [
      "Infección aguda temprana",
      "Infección pasada (ventana), infección crónica de baja replicación u ocultismo, o un falso positivo",
      "Inmunización por vacuna exitosa",
      "Curación total definitiva"
    ],
    "correctIndex": 1,
    "explanation": "El patrón de \"Core solo\" requiere una evaluación cuidadosa, especialmente si el paciente recibirá inmunosupresión.",
    "fisiopato": "Puede representar la fase de ventana en recuperación, una infección crónica donde el HBsAg cayó por debajo del límite de detección, o inmunidad antigua debilitada.",
    "clinicalPearl": "En pacientes que van a recibir Anti-CD20 (Rituximab), este patrón obliga a profilaxis antibiótica.",
    "guideline": "AASLD 2024 / Manual Chileno 2025.",
    "whyWrong": {
      "0": "HBsAg sería positivo.",
      "2": "Solo el Anti-HBs sería positivo.",
      "3": "Anti-HBs debería ser positivo (> 10 UI/ml)."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-173",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "En un paciente con Hepatitis B crónica, ¿qué marcador es el mejor predictor de la probabilidad de lograr la \"Cura Funcional\" (aclaramiento de HBsAg)?",
    "options": [
      "Carga viral (ADN VHB)",
      "Niveles cuantitativos de HBsAg (qHBsAg)",
      "Nivel de ALT",
      "Presencia de HBeAg"
    ],
    "correctIndex": 1,
    "explanation": "El descenso en el qHBsAg durante el tratamiento (especialmente con Interferón) predice el éxito de la terapia.",
    "fisiopato": "Refleja la actividad transcripcional del cccDNA (ADN circular cerrado covalentemente) en el núcleo del hepatocito.",
    "clinicalPearl": "Valores < 1000 UI/ml sugieren una mejor respuesta inmunológica del huésped.",
    "guideline": "EASL / AASLD Guidelines.",
    "whyWrong": {
      "0": "Refleja replicación, pero no necesariamente la carga de cccDNA.",
      "2": "Mide daño celular, no control viral.",
      "3": "Mide estado del sistema E, no aclaramiento de superficie."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-174",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "Paciente con Colitis Ulcerosa en tratamiento con Adalimumab presenta pérdida de respuesta secundaria. El nivel valle es de 2 ug/ml y los anticuerpos anti-droga son negativos. ¿Cuál es la conducta recomendada?",
    "options": [
      "Cambiar a otra clase de biológico (ej: Ustekinumab)",
      "Intensificar la dosis de Adalimumab (ej: semanal) para alcanzar niveles adecuados",
      "Añadir corticoides sistémicos de por vida",
      "Suspender toda terapia biológica"
    ],
    "correctIndex": 1,
    "explanation": "Cuando hay niveles bajos sin anticuerpos, la intensificación de dosis suele recuperar la respuesta.",
    "fisiopato": "La pérdida de respuesta es farmacocinética no mediada por inmunogenicidad (ej: aumento del aclaramiento por inflamación severa).",
    "clinicalPearl": "Busque niveles de Adalimumab > 7.5 ug/ml para una mejor remisión.",
    "guideline": "AGA Clinical Practice Update on TDM.",
    "whyWrong": {
      "0": "Se reserva para falla biológica con niveles adecuados o falla inmunogénica irreversible.",
      "2": "Los corticoides son solo puente.",
      "3": "Lleva a recaída grave."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-175",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "¿Cuál es la profundidad de las compresiones torácicas recomendada en un adulto durante la RCP de alta calidad?",
    "options": [
      "Al menos 2 cm",
      "Al menos 5 cm (pero sin exceder 6 cm)",
      "Al menos 10 cm",
      "No importa la profundidad si es rápido"
    ],
    "correctIndex": 1,
    "explanation": "Una profundidad adecuada asegura un gasto cardiaco suficiente para perfundir órganos vitales.",
    "fisiopato": "La compresión mecánica del corazón entre el esternón y la columna genera el flujo sistólico necesario.",
    "clinicalPearl": "Permita el retroceso completo del tórax entre compresiones.",
    "guideline": "AHA ACLS 2020.",
    "whyWrong": {
      "0": "Insuficiente para generar flujo.",
      "2": "Riesgo excesivo de fracturas costales, daño pulmonar y hepático.",
      "3": "Error crítico de formación."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-176",
    "topic": "muerte_subita",
    "difficulty": "Fellow",
    "text": "En un paro cardiaco intrahospitalario durante una endoscopia, ¿cuál es el tiempo meta para realizar la primera desfibrilación en ritmos desfibrilables (FV/TVSP)?",
    "options": [
      "< 3 minutos",
      "< 10 minutos",
      "En los primeros 30 segundos obligatoriamente",
      "Cuando llegue el cardiólogo"
    ],
    "correctIndex": 0,
    "explanation": "La rapidez de la desfibrilación es el determinante más crítico de sobrevida emocional y neurológica.",
    "fisiopato": "La FV es un estado de consumo atp miocárdico extremo; la descarga eléctrica reinicia el sistema de conducción.",
    "clinicalPearl": "Tenga el desfibrilador siempre cargado o a mano en salas de sedación profunda.",
    "guideline": "AHA / ERC Guidelines.",
    "whyWrong": {
      "1": "Sobrevida cae drásticamente después de 5 minutos.",
      "2": "Idealmente sí, pero el estándar de calidad hospitalaria es < 3 min.",
      "3": "La endoscopia debe ser liderada por el equipo presente."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-177",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "Durante una Disección Submucosa Endoscópica (DSE) de una lesión gástrica, el paciente desarrolla un neumoperitoneo a tensión con compromiso ventilatorio. ¿Cuál es la maniobra de emergencia inmediata?",
    "options": [
      "Suspender el procedimiento y esperar",
      "Descompresión percutánea inmediata con una aguja de grueso calibre (ej: 14G) en el abdomen",
      "Aumentar la presión de la ventilación mecánica",
      "Intubar al paciente si no lo estaba"
    ],
    "correctIndex": 1,
    "explanation": "El neumoperitoneo a tensión en endoscopia se maneja como una emergencia quirúrgica/descompresiva inmediata.",
    "fisiopato": "El aire atrapado desplaza el diafragma y colapsa el retorno venoso, comprometiendo la hemodinamia.",
    "clinicalPearl": "Se realiza en el punto de máxima tensión o en fosa iliaca derecha/hipocondrios.",
    "guideline": "ESGE Position Statement on Complications.",
    "whyWrong": {
      "0": "El paciente entrará en paro respiratorio.",
      "2": "Puede empeorar el atrapamiento de aire si hay fístula abierta.",
      "3": "No resuelve la causa mecánica abdominal."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-178",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "Escenario: Durante una endoscopia terapéutica con argón plasma (APC) en un paciente con traqueostomía y O2 al 100%, se produce una deflagración (fuego) en la vía aérea. ¿Cuál es la primera acción?",
    "options": [
      "Lanzar agua con la jeringa de irrigación",
      "Retirar inmediatamente el suministro de oxígeno y el endoscopio",
      "Activar la alarma de incendios del hospital",
      "Administrar corticoides EV"
    ],
    "correctIndex": 1,
    "explanation": "El fuego en vía aérea es una emergencia catastrófica; cortar el triángulo del fuego (comburente O2 + chispa APC) es vital.",
    "fisiopato": "El O2 al 100% crea una atmósfera altamente inflamable; el APC proporciona la energía de activación.",
    "clinicalPearl": "Prevenga usando FiO2 < 30% si va a usar electrocirugía cerca de la vía aérea.",
    "guideline": "ASA Practice Advisory on Operating Room Fires.",
    "whyWrong": {
      "0": "Útil después de retirar el O2, pero no es la primera medida salvadora.",
      "2": "Importante, pero secundaria a la extinción inmediata.",
      "3": "Manejo diferido de la lesión."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-179",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "¿Cuál es la causa más común de muerte súbita de origen no cardiaco en un paciente cirrótico hospitalizado?",
    "options": [
      "Embolia pulmonar masiva",
      "Hemorragia digestiva varicosa incoercible y shock hipovolémico",
      "Encefalopatía hepática grado IV",
      "Peritonitis bacteriana espontánea"
    ],
    "correctIndex": 1,
    "explanation": "La hemorragia por várices es la emergencia más letal y súbita en la historia natural de la cirrosis.",
    "fisiopato": "La ruptura de várices de gran calibre bajo alta presión portal genera una hipovolemia crítica en minutos.",
    "clinicalPearl": "El manejo preventivo con betabloqueantes y ligadura es clave.",
    "guideline": "Baveno VII.",
    "whyWrong": {
      "0": "Posible pero menos frecuente que el sangrado.",
      "2": "Causa muerte por falla orgánica, no súbita generalmente.",
      "3": "Proceso infeccioso de evolución más lenta."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-180",
    "topic": "hdb",
    "difficulty": "Subspecialist",
    "text": "En un paciente con sangrado recurrente por angiodisplasias de intestino delgado (obscure GI bleeding), ¿qué fármaco ha demostrado utilidad en reducir la necesidad transfusional?",
    "options": [
      "Octreotide de liberación prolongada o Talidomida",
      "Aspirina a dosis bajas",
      "Omeprazol",
      "Vitamina K"
    ],
    "correctIndex": 0,
    "explanation": "El octreotide y la talidomida inhiben el factor de crecimiento endotelial vascular (VEGF).",
    "fisiopato": "Las angiodisplasias son malformaciones vasculares dependientes de angiogénesis descontrolada.",
    "clinicalPearl": "Use octreotide si el manejo endoscópico no es factible o es recurrente.",
    "guideline": "ACG Guidelines on Small Bowel Bleeding.",
    "whyWrong": {
      "1": "Empeora el sangrado.",
      "2": "No tiene efecto sobre vasos malformados.",
      "3": "Inútil si no hay déficit de factores."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-181",
    "topic": "diarrea_cronica",
    "difficulty": "Staff",
    "text": "¿Cuál es el valor de corte para considerar positivo un test de aliento con Lactulosa o Glucosa para Sobrecrecimiento Bacteriano del Intestino Delgado (SIBO) según el Consenso de Norteamérica?",
    "options": [
      "Aumento de Hidrógeno >= 20 ppm dentro de los primeros 90 minutos",
      "Aumento de Hidrógeno > 5 ppm al final del test",
      "Presencia de Metano > 1 ppm",
      "Cualquier aumento de Hidrógeno"
    ],
    "correctIndex": 0,
    "explanation": "Un aumento precoz indica que las bacterias en el intestino delgado están fermentando el sustrato.",
    "fisiopato": "La fermentación bacteriana prematura produce gas (H2) que se absorbe al torrente y se exhala.",
    "clinicalPearl": "El metano >= 10 ppm en cualquier punto define IMO (Intestinal Methanogen Overgrowth).",
    "guideline": "North American Breath Testing Consensus.",
    "whyWrong": {
      "1": "Umbral insuficiente.",
      "2": "El corte para metano es >= 10 ppm.",
      "3": "Inespecífico."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-182",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "En un paciente con diarrea crónica, esteatorrea y antecedente de bypass gástrico hace 10 años, ¿cuál es la causa más probable de su cuadro?",
    "options": [
      "Insuficiencia pancreática relativa por asincronía digestiva o SIBO",
      "Enfermedad de Crohn tardía",
      "Celiaquía de novo",
      "Linfoma intestinal"
    ],
    "correctIndex": 0,
    "explanation": "La anatomía post-bypass favorece el estancamiento (asa ciega) y la mala mezcla de enzimas y comida.",
    "fisiopato": "El SIBO es muy común en asas aferentes largas, y la descarga pancreática puede no coincidir con el quimo alimentario.",
    "clinicalPearl": "Trate con Rifaximina y suplementos enzimáticos si hay sospecha clínica alta.",
    "guideline": "Manual Chileno 2025 / Clinical Nutrition.",
    "whyWrong": {
      "1": "Menos probable que complicaciones mecánicas/funcionales del bypass.",
      "2": "Raro.",
      "3": "Raro."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-183",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "En un paciente cirrótico Child-Pugh C (< 14 puntos) con HDA varicosa, ¿cuál es el tiempo recomendado para realizar un TIPS de rescate preventivo (Pre-emptive TIPS)?",
    "options": [
      "En las primeras 24-72 horas post-endoscopia exitosa",
      "Inmediatamente si hay sangrado",
      "A los 30 días de seguimiento",
      "Solo si vuelve a sangrar"
    ],
    "correctIndex": 0,
    "explanation": "El TIPS precoz reduce el resangrado y la mortalidad en pacientes con alto riesgo de falla al tratamiento médico/endoscópico.",
    "fisiopato": "Al reducir la presión portal de forma definitiva, se elimina el motor hemodinámico del sangrado varicoso.",
    "clinicalPearl": "No se recomienda en Child C >= 14 puntos por riesgo de falla hepática fulminante.",
    "guideline": "Baveno VII / Manual Chileno 2025.",
    "whyWrong": {
      "1": "Se llama TIPS de rescate si el sangrado es incoercible; el preventivo es post-estabilización.",
      "2": "Se pierde el beneficio de sobrevida.",
      "3": "Ese es el manejo estándar antiguo."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-184",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el mecanismo de acción de la Rifaximina en el tratamiento de la Encefalopatía Hepática recurrente?",
    "options": [
      "Antibiótico no absorbible que reduce la microbiota productora de amoniaco",
      "Laxante osmótico",
      "Aumenta la excreción urinaria de urea",
      "Bloquea los receptores GABA"
    ],
    "correctIndex": 0,
    "explanation": "Al actuar solo en la luz intestinal, reduce la carga bacteriana uricolítica.",
    "fisiopato": "Menores niveles de amoniaco (NH3) luminal significan menor paso a la circulación portal y menor edema de astrocitos.",
    "clinicalPearl": "Se usa combinada con Lactulosa para prevenir recurrencias (estudio de Bajaj).",
    "guideline": "AASLD guidelines: Hepatic Encephalopathy.",
    "whyWrong": {
      "1": "Mecanismo de la lactulosa.",
      "2": "Inexistente.",
      "3": "Mecanismo propuesto para el flumazenil, pero de utilidad limitada."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-185",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "En una paciente con Enfermedad de Crohn estable en tratamiento con Infliximab que desea embarazarse, ¿cuál es la recomendación correcta?",
    "options": [
      "Suspender el biológico inmediatamente por teratogenicidad",
      "Mantener el tratamiento, ya que el riesgo de recaída es mayor que el riesgo del fármaco",
      "Cambiar a metotrexato",
      "Solo usar corticoides"
    ],
    "correctIndex": 1,
    "explanation": "La mayoría de los anti-TNF son seguros en el embarazo; la actividad de la enfermedad es el mayor riesgo para el feto.",
    "fisiopato": "Los anticuerpos IgG1 (como IFX) cruzan la placenta activamente solo en el segundo y tercer trimestre.",
    "clinicalPearl": "Considere programar la última dosis unas semanas antes del parto para reducir niveles en el recién nacido.",
    "guideline": "Toronto Consensus / ECCO Guidelines.",
    "whyWrong": {
      "0": "Aumenta riesgo de recaída y pérdida gestacional.",
      "2": "El metotrexato es absolutamente teratogénico y contraindicado.",
      "3": "Los corticoides no mantienen remisión a largo plazo."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-186",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "Durante la RCP, se opta por una vía aérea avanzada (intubación). ¿Cuál es la frecuencia ventilatoria recomendada una vez el tubo está instalado?",
    "options": [
      "1 ventilación cada 2-3 segundos",
      "1 ventilación cada 6 segundos (10 por minuto)",
      "2 ventilaciones después de cada 30 compresiones",
      "30 ventilaciones por minuto"
    ],
    "correctIndex": 1,
    "explanation": "Evitar la hiperventilación es clave para no aumentar la presión intratorácica y no disminuir el retorno venoso.",
    "fisiopato": "La presión positiva excesiva colapsa las venas cavas, reduciendo drásticamente la eficacia de la RCP.",
    "clinicalPearl": "Use capnografía para asegurar la posición del tubo.",
    "guideline": "AHA ACLS 2020.",
    "whyWrong": {
      "0": "Hiperventilación severa.",
      "2": "Frecuencia para RCP sin vía aérea avanzada.",
      "3": "Peligroso."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-187",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "Durante una CPRE compleja, el paciente presenta un colapso cardiovascular súbito tras una esfinterotomía con abundante sangrado e insuflación de aire (no CO2). ¿Cuál es la sospecha diagnóstica más grave?",
    "options": [
      "Infarto de miocardio",
      "Embolia gaseosa sistémica/portal",
      "Perforación retroperitoneal",
      "Reacción al medio de contraste"
    ],
    "correctIndex": 1,
    "explanation": "La entrada de aire a las venas biliares o hepáticas abiertas puede causar un bloqueo mecánico en el corazón derecho.",
    "fisiopato": "El aire viaja al ventrículo derecho, formando un \"air lock\" que impide el paso de sangre hacia la arteria pulmonar.",
    "clinicalPearl": "Posicione al paciente en decúbito lateral izquierdo y Trendelenburg (maniobra de Durant).",
    "guideline": "Safety in Advanced Endoscopy.",
    "whyWrong": {
      "0": "Posible pero el contexto de CPRE + aire favorece la embolia.",
      "2": "Causa dolor e inflamación pero no colapso cardiovascular \"relámpago\".",
      "3": "Anafilaxia es posible pero menos común que el riesgo mecánico del aire."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-188",
    "topic": "dolor_abdominal",
    "difficulty": "Subspecialist",
    "text": "Un paciente de 70 años con antecedentes de tabaquismo presenta dolor abdominal post-prandial severo (\"angina abdominal\"), baja de peso significativa y miedo a comer. ¿Cuál es el estudio de elección sospechando Isquemia Mesentérica Crónica?",
    "options": [
      "Angio-TAC de abdomen y pelvis",
      "Colonoscopia",
      "Ecografía Doppler de vasos mesentéricos",
      "Endoscopia Digestiva Alta"
    ],
    "correctIndex": 0,
    "explanation": "El Angio-TAC permite visualizar la anatomía arterial y detectar estenosis en el tronco celíaco o arteria mesentérica superior.",
    "fisiopato": "La aterosclerosis reduce el flujo sanguíneo abdominal, el cual se vuelve insuficiente ante la demanda metabólica de la digestión.",
    "clinicalPearl": "Suele requerir el compromiso de al menos 2 de los 3 vasos principales para ser sintomático.",
    "guideline": "ESVS Guidelines on Chronic Mesenteric Ischemia.",
    "whyWrong": {
      "1": "Detecta colitis isquémica, pero no la causa arterial principal.",
      "2": "Útil como screening pero operador dependiente y menos preciso para planificación quirúrgica.",
      "3": "No visualiza vasos mesentéricos."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-189",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "¿Cuál es el tratamiento de primera línea recomendado para el primer episodio de infección por Clostridioides difficile (no grave) según las guías actuales?",
    "options": [
      "Fidaxomicina o Vancomicina oral",
      "Metronidazol oral",
      "Ciprofloxacino",
      "Trasplante de microbiota fecal inmediato"
    ],
    "correctIndex": 0,
    "explanation": "La fidaxomicina y la vancomicina han demostrado superioridad sobre el metronidazol en tasas de curación y reducción de recurrencias.",
    "fisiopato": "La fidaxomicina es un antibiótico macrocíclico que inhibe la ARN polimerasa con mínimo impacto en la microbiota normal.",
    "clinicalPearl": "El metronidazol solo se reserva si las otras opciones no están disponibles.",
    "guideline": "IDSA/SHEA 2021 Update / Manual Chileno 2025.",
    "whyWrong": {
      "1": "Ya no se considera primera línea por mayores tasas de falla.",
      "2": "Ineficaz contra C. difficile.",
      "3": "Reservado para recurrencias múltiples."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-190",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "En la Manometría de Alta Resolución, ¿qué hallazgo es mandatorio para descartar un trastorno motor mayor en un paciente con ERGE refractario antes de una cirugía antirreflujo?",
    "options": [
      "Asegurar un peristaltismo ausente",
      "Verificar la integridad de la bomba peristáltica esofágica y descartar Acalasia",
      "Medir solo la presión del EEI",
      "No se requiere manometría previa a la cirugía"
    ],
    "correctIndex": 1,
    "explanation": "La acalasia puede simular síntomas de ERGE; operarla con una funduplicatura causaría una disfagia catastrófica.",
    "fisiopato": "La funduplicatura aumenta la resistencia al vaciamiento; si no hay peristalsis efectiva, el bolo se detiene en el esófago.",
    "clinicalPearl": "Un 10-15% de los pacientes derivados a cirugía por ERGE tienen un diagnóstico manométrico diferente.",
    "guideline": "Chicago Classification 4.0 / Lyon Consensus 2.0.",
    "whyWrong": {
      "0": "La ausencia de peristalsis es una contraindicación relativa para funduplicatura total.",
      "2": "Insuficiente para evaluar el cuerpo esofágico.",
      "3": "Error de praxis estándar."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-191",
    "topic": "perfil_hepatico",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el puntaje de Maddrey (Discriminant Function) que indica severidad y necesidad de corticoides en la Hepatitis Alcohólica aguda?",
    "options": [
      "> 12",
      "> 32",
      "> 100",
      "> 20"
    ],
    "correctIndex": 1,
    "explanation": "Un Maddrey >= 32 identifica pacientes con alta mortalidad a corto plazo que se benefician de Prednisolona.",
    "fisiopato": "El puntaje utiliza la Bilirrubina y el Tiempo de Protrombina para estimar el grado de inflamación sistémica y falla hepática.",
    "clinicalPearl": "Recuerde descartar infección activa y hemorragia antes de iniciar corticoides.",
    "guideline": "AASLD / EASL Alcohol-related liver disease.",
    "whyWrong": {
      "0": "Umbral muy bajo.",
      "2": "Escala no llega a ese rango funcionalmente.",
      "3": "No es el punto de corte validado."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-192",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el manejo inicial de elección para la Hemorragia Digestiva Alta por lesiones de Dieulafoy?",
    "options": [
      "Inyección de adrenalina pura",
      "Combinación de terapia mecánica (clips o ligadura) y térmica o inyección",
      "Solo observación",
      "Cirugía de resección urgente"
    ],
    "correctIndex": 1,
    "explanation": "La lesión de Dieulafoy es una arteria submucosa de gran calibre; la terapia mecánica es superior para controlar el vaso arterial.",
    "fisiopato": "Debido al flujo pulsátil, la inyección sola suele ser insuficiente y tiene alto riesgo de resangrado.",
    "clinicalPearl": "Suelen ubicarse en el tercio proximal de la curvatura menor gástrica.",
    "guideline": "ASGE Guidelines on Upper GI Bleeding.",
    "whyWrong": {
      "0": "Insuficiente para un vaso de ese calibre.",
      "2": "Riesgo de muerte por exanguinación.",
      "3": "La endoscopia resuelve > 90% de los casos."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-193",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la meta terapéutica ideal (\"STRIDE-II\") en el manejo a largo plazo de la Enfermedad Inflamatoria Intestinal?",
    "options": [
      "Remisión clínica (ausencia de síntomas)",
      "Curación transmural (o radiológica) y normalización de la calidad de vida",
      "Normalización de la Calprotectina fecal únicamente",
      "Evitar corticoides"
    ],
    "correctIndex": 1,
    "explanation": "El concepto de \"Treat-to-Target\" ha evolucionado hacia la curación profunda y el bienestar bio-psico-social.",
    "fisiopato": "La curación de la mucosa y capas profundas detiene la progresión del daño estructural (estenosis/fístulas).",
    "clinicalPearl": "La remisión clínica es el primer paso, pero no garantiza la ausencia de progresión silente.",
    "guideline": "STRIDE-II Consensus Statement.",
    "whyWrong": {
      "0": "Insuficiente; hay un \"gap\" entre síntomas e inflamación.",
      "2": "Es un subrogado, no la meta final.",
      "3": "Es un componente, no la meta global."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-194",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "En el contexto de un paro cardiaco por sospecha de TEP masivo en la sala de endoscopia, ¿qué fármaco se debe considerar si la RCP falla inicialmente?",
    "options": [
      "Fibrinolíticos (Tenecteplasa/Alteplasa)",
      "Vitamina K",
      "Atropina masiva",
      "Suero fisiológico a chorro únicamente"
    ],
    "correctIndex": 0,
    "explanation": "En paros presenciados con alta sospecha de embolia pulmonar, la fibrinolisis durante la RCP puede ser salvadora.",
    "fisiopato": "Intenta disolver el trombo obstructivo en la arteria pulmonar para restaurar el flujo cardiaco derecho.",
    "clinicalPearl": "La RCP debe continuarse al menos 60-90 minutos tras la administración de fibrinolíticos.",
    "guideline": "AHA / ESC Guidelines on Pulmonary Embolism.",
    "whyWrong": {
      "1": "Tarda horas en actuar.",
      "2": "Inespecífica.",
      "3": "Ineficaz contra la obstrucción mecánica."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-195",
    "topic": "protocolo_simulacro",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el rol del \"Checklist de Verificación\" antes de una endoscopia compleja en la prevención de eventos adversos?",
    "options": [
      "Solo cumple un rol administrativo",
      "Estandariza la comunicación, verifica equipos de rescate y confirma la identidad/riesgos del paciente",
      "Retrasa innecesariamente el procedimiento",
      "Es opcional según el médico"
    ],
    "correctIndex": 1,
    "explanation": "El checklist es una herramienta de seguridad que reduce errores de omisión y mejora el trabajo en equipo.",
    "fisiopato": "Reduce la entropía organizacional y el error humano bajo presión.",
    "clinicalPearl": "Debe incluir la verificación de disponibilidad de clips, adrenalina y dispositivos de vía aérea.",
    "guideline": "WHO Surgical Safety Checklist / ESGE Safety Guidelines.",
    "whyWrong": {
      "0": "Minimiza su importancia vital.",
      "2": "Solo toma 2 minutos y salva vidas.",
      "3": "Es un estándar de calidad."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-196",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "¿Cuál es el hallazgo angiográfico clásico en una Hemangioma Intestinal?",
    "options": [
      "Llenado precoz de venas eferentes dilatadas y lagos vasculares",
      "Estenosis arterial segmentaria",
      "Fístula arterio-portal",
      "Oclusión completa de la mesentérica superior"
    ],
    "correctIndex": 0,
    "explanation": "Los hemangiomas son malformaciones vasculares con alto flujo venoso.",
    "fisiopato": "La estructura cavernosa permite el estancamiento de contraste en lagunas vasculares que drenan rápidamente.",
    "clinicalPearl": "A menudo se asocian a síndromes como Blue Rubber Bleb Nevus.",
    "guideline": "Radiology of GI Bleeding.",
    "whyWrong": {
      "1": "Sugerente de isquemia mesentérica.",
      "2": "Causa de hipertensión portal segmentaria.",
      "3": "Causa isquemia crónica."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-197",
    "topic": "motores_esofago",
    "difficulty": "Subspecialist",
    "text": "En un paciente con Acalasia Tipo III (Espástica), ¿qué tratamiento ha demostrado mejores tasas de respuesta clínica?",
    "options": [
      "Miotomía de Heller con Funduplicatura",
      "POEM (Miotomía Endoscópica Peroral)",
      "Dilatación neumática con balón de 30mm",
      "Inyección de toxina botulínica"
    ],
    "correctIndex": 1,
    "explanation": "El POEM permite una miotomía más larga hacia el cuerpo esofágico, necesaria para tratar el componente espástico del Tipo III.",
    "fisiopato": "La acalasia tipo III se caracteriza por contracciones prematuras y vigorosas en el cuerpo distal.",
    "clinicalPearl": "El POEM es la terapia de elección para el Tipo III según el consenso de Estocolmo.",
    "guideline": "ISDE guidelines for achalasia.",
    "whyWrong": {
      "0": "Dificultad para extender la miotomía quirúrgica muy arriba en el tórax.",
      "2": "Menor respuesta en tipos espásticos.",
      "3": "Efecto transitorio."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-198",
    "topic": "cancer_esofago",
    "difficulty": "Staff",
    "text": "¿Cuál es la técnica de estadiaje más sensible para evaluar la profundidad de invasión (T) y la presencia de linfonodos regionales (N) en cáncer de esófago?",
    "options": [
      "TAC de tórax y abdomen",
      "Endosonografía (EUS)",
      "PET-CT",
      "Esofagograma con bario"
    ],
    "correctIndex": 1,
    "explanation": "La EUS permite visualizar las capas de la pared esofágica con alta resolución.",
    "fisiopato": "Permite diferenciar lesiones T1a (mucosa) de T1b (submucosa), clave para decidir terapia endoscópica vs quirúrgica.",
    "clinicalPearl": "La EUS es el pilar para el T y N local, pero el PET-CT es mejor para metástasis M.",
    "guideline": "NCCN Guidelines.",
    "whyWrong": {
      "0": "Poca resolución para capas de la pared.",
      "2": "Excelente para M, pero menos preciso que EUS para T.",
      "3": "Estudio puramente morfológico luminal."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-199",
    "topic": "ulcera_peptica",
    "difficulty": "Fellow",
    "text": "¿Qué hallazgo histológico es característico de una úlcera asociada al uso crónico de AINES en ausencia de H. pylori?",
    "options": [
      "Gastritis antral severa con muchos polimorfonucleares",
      "Gastropatía reactiva con foveolas tortuosas y mínima inflamación",
      "Metaplasia intestinal completa",
      "Atrofia glandular extensa"
    ],
    "correctIndex": 1,
    "explanation": "La gastropatía por AINES es un daño químico directo y sistémico, no inmunológico.",
    "fisiopato": "El daño se manifiesta como hiperplasia foveolar y edema de la lámina propia sin el infiltrado denso de la gastritis por H. pylori.",
    "clinicalPearl": "A menudo se ve una \"gastritis química\" o reactiva.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "0": "Patrón clásico de H. pylori.",
      "2": "Factor de riesgo para cáncer, no específico de AINES.",
      "3": "Asociado a gastritis autoinmune o H. pylori crónico."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-200",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "Un paciente diabético presenta dolor abdominal, náuseas y saciedad precoz. La endoscopia muestra restos de comida tras 12 horas de ayuno. ¿Cuál es el diagnóstico más probable?",
    "options": [
      "Gastroparesia diabética",
      "Estenosis pilórica neoplásica",
      "Úlcera duodenal obstructiva",
      "Acalasia"
    ],
    "correctIndex": 0,
    "explanation": "La neuropatía autonómica diabética afecta el vaciamiento gástrico.",
    "fisiopato": "Daño en las células intersticiales de Cajal y en el nervio vago retarda la motilidad antral.",
    "clinicalPearl": "El test de vaciamiento gástrico con sólidos es el estándar de oro.",
    "guideline": "ACG Clinical Guideline: Gastroparesis.",
    "whyWrong": {
      "1": "Causaría obstrucción mecánica, pero la gastroparesia es funcional.",
      "2": "Causa diagnóstica diferencial, pero la diabetes es un factor clave.",
      "3": "Causa disfagia, no típicamente saciedad precoz y restos gástricos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-201",
    "topic": "cancer_gastrico",
    "difficulty": "Subspecialist",
    "text": "En el cáncer gástrico precoz (Early Gastric Cancer), ¿cuál es el criterio absoluto para intentar una Resección Endoscópica de la Mucosa (EMR)?",
    "options": [
      "Lesión < 2 cm, elevada, sin ulceración, histología diferenciada",
      "Cualquier lesión menor a 5 cm",
      "Lesiones con invasión a la submucosa profunda",
      "Lesiones de tipo difuso"
    ],
    "correctIndex": 0,
    "explanation": "Estos criterios aseguran un riesgo de metástasis ganglionar cercano al 0%.",
    "fisiopato": "Al estar limitado a la mucosa y ser diferenciado, el riesgo de compromiso linfático es mínimo.",
    "clinicalPearl": "La Disección Submucosa (DSE) permite ampliar estos criterios (Criterios Expandidos).",
    "guideline": "Japanese Gastric Cancer Treatment Guidelines.",
    "whyWrong": {
      "1": "Demasiado grandes para EMR con seguridad.",
      "2": "Requieren cirugía.",
      "3": "Riesgo de metástasis ganglionar muy alto."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-202",
    "topic": "celiaca",
    "difficulty": "Fellow",
    "text": "¿Cuál es la utilidad del tipaje HLA-DQ2/DQ8 en la enfermedad celiaca?",
    "options": [
      "Confirmar el diagnóstico en todo paciente",
      "Elevado valor predictivo negativo para descartar la enfermedad en casos dudosos",
      "Predecir la severidad de la atrofia",
      "Monitorear la adherencia a la dieta"
    ],
    "correctIndex": 1,
    "explanation": "Casi el 100% de los celiacos son positivos para HLA-DQ2 o DQ8; ser negativo descarta la enfermedad casi por completo.",
    "fisiopato": "Estas moléculas HLA son necesarias para presentar los péptidos de la gladina a los linfocitos T.",
    "clinicalPearl": "No sirve para confirmar diagnóstico porque mucha población sana también es positiva.",
    "guideline": "Manual Chileno 2025 / ACG Celiac Guidelines.",
    "whyWrong": {
      "0": "Causa falsos positivos diagnósticos.",
      "2": "No correlaciona con fenotipo.",
      "3": "Para eso se usa la serología o biopsia."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-203",
    "topic": "biologia",
    "difficulty": "Fellow",
    "text": "¿Cuál es el principal transportador de fructosa en la membrana apical del enterocito?",
    "options": [
      "SGLT-1",
      "GLUT-5",
      "GLUT-2",
      "Bombas Na/K ATPasa"
    ],
    "correctIndex": 1,
    "explanation": "GLUT-5 es un transportador de difusión facilitada específico para fructosa.",
    "fisiopato": "Su capacidad limitada explica por qué dosis altas de fructosa causan diarrea osmótica en muchas personas.",
    "clinicalPearl": "La fructosa se absorbe mejor si se consume junto con glucosa (vía GLUT-2).",
    "guideline": "Physiology of the Gastrointestinal Tract.",
    "whyWrong": {
      "0": "Transportador de Glucosa/Galactosa (dependiente de Sodio).",
      "2": "Transportador basal de todos los monosacáridos.",
      "3": "Genera el gradiente de sodio, no transporta hexosas directamente."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-204",
    "topic": "nutricion",
    "difficulty": "Staff",
    "text": "¿Qué déficit vitamínico es más común tras una Gastrectomía en Y de Roux?",
    "options": [
      "Vitamina B12",
      "Vitamina C",
      "Vitamina K",
      "Vitamina B6"
    ],
    "correctIndex": 0,
    "explanation": "Requiere factor intrínseco (estómago) y un pH ácido para liberarse de las proteínas.",
    "fisiopato": "La exclusión del estómago y el duodeno altera drásticamente la cascada de absorción de la cianocobalamina.",
    "clinicalPearl": "Todo paciente bariátrico debe recibir suplemento intramuscular o sublingual de B12 de por vida.",
    "guideline": "ASMBS Integrated Health Nutritional Guidelines.",
    "whyWrong": {
      "1": "Raro si hay ingesta de frutas.",
      "2": "Posible pero menos frecuente que B12/Hierro.",
      "3": "Menos común como déficit aislado."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-205",
    "topic": "hdb",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la causa más frecuente de hemorragia digestiva baja severa en el paciente pediátrico?",
    "options": [
      "Divertículo de Meckel",
      "Pólipos juveniles",
      "Enfermedad Inflamatoria Intestinal",
      "Invaginación intestinal"
    ],
    "correctIndex": 0,
    "explanation": "El divertículo de Meckel contiene mucosa gástrica ectópica que produce ácido y ulcera el íleon adyacente.",
    "fisiopato": "La ulceración péptica en el íleon es la causa del sangrado, a menudo indoloro y masivo.",
    "clinicalPearl": "La gammagrafía con pertecnetato de Tc-99m (\"Meckel scan\") es la prueba diagnóstica clásica.",
    "guideline": "Pediatric Gastrointestinal and Liver Disease.",
    "whyWrong": {
      "1": "Causa sangrado pero raramente masivo.",
      "2": "Suele presentarse en adolescentes y con diarrea/dolor.",
      "3": "Causa obstrucción y dolor severo, con heces en \"jalea de grosella\"."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-206",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "En un paciente con HDB aguda, ¿qué puntaje de riesgo se recomienda para decidir el alta precoz vs hospitalización?",
    "options": [
      "Puntaje de Oakland",
      "Escala de Glasgow-Blatchford",
      "Puntaje de Rockall",
      "Escala de Child-Pugh"
    ],
    "correctIndex": 0,
    "explanation": "La escala de Oakland evalúa la probabilidad de un \"desenlace seguro\" (no requerir intervención).",
    "fisiopato": "Utiliza edad, sexo, antecedentes, FC, PAS, Hb y tacto rectal para estratificar el riesgo.",
    "clinicalPearl": "Un puntaje <= 8 tiene una alta probabilidad de egreso seguro desde urgencias.",
    "guideline": "BSG/ESGE Guidelines on Lower GI Bleeding.",
    "whyWrong": {
      "1": "Específica para HDA.",
      "2": "Específica para pronóstico post-endoscopia en HDA.",
      "3": "Mide reserva funcional hepática."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-207",
    "topic": "motores_esofago",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el hallazgo manométrico que define la Obstrucción del Flujo de Salida de la Unión Esofagogástrica (EGJOO)?",
    "options": [
      "IRP (Presión de Relajación Integrada) elevada con peristalsis preservada o fragmentada",
      "IRP normal con ausencia de peristalsis",
      "DCI > 8000",
      "Presión basal del EEI < 10 mmHg"
    ],
    "correctIndex": 0,
    "explanation": "La EGJOO se caracteriza por una relajación incompleta del EEI que no cumple criterios de acalasia.",
    "fisiopato": "Puede ser idiopática, secundaria a hernia hiatal, estenosis mecánica o uso de opioides.",
    "clinicalPearl": "Siempre descarte una causa mecánica (ej: tumor) mediante TAC o EUS antes de llamarla funcional.",
    "guideline": "Chicago Classification 4.0.",
    "whyWrong": {
      "1": "Sugerente de acalasia si hay aperistalsis.",
      "2": "Define esófago Jackhammer.",
      "3": "EEI hipotensivo."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-208",
    "topic": "cancer_esofago",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el beneficio de la Quimiorradioterapia Neoadyuvante (Esquema CROSS) en pacientes con cáncer de esófago resecable?",
    "options": [
      "Aumenta la tasa de resección R0 y mejora la sobrevida global",
      "Solo sirve para paliación de la disfagia",
      "Reduce el riesgo de complicaciones postoperatorias",
      "No ha demostrado beneficio sobre la cirugía sola"
    ],
    "correctIndex": 0,
    "explanation": "El estudio CROSS demostró que la neoadyuvancia mejora el control local y sistémico antes de la cirugía.",
    "fisiopato": "Reduce el volumen tumoral (downstaging) y trata micrometástasis tempranas.",
    "clinicalPearl": "Se usa tanto en adenocarcinoma como en carcinoma escamoso.",
    "guideline": "CROSS Trial / NCCN Guidelines.",
    "whyWrong": {
      "1": "Su objetivo es curativo en este contexto.",
      "2": "La radioterapia puede aumentar las complicaciones técnicas, pero el beneficio en sobrevida compensa.",
      "3": "Falso."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-209",
    "topic": "cancer_gastrico",
    "difficulty": "Staff",
    "text": "¿Cuál es el marcador tumoral más utilizado para el seguimiento (no diagnóstico) del cáncer gástrico?",
    "options": [
      "CEA (Antígeno Carcionoembrionario)",
      "AFP (Alfa-fetoproteína)",
      "CA 15-3",
      "PSA"
    ],
    "correctIndex": 0,
    "explanation": "El CEA y el CA 19-9 pueden elevarse en cáncer gástrico y son útiles para detectar recurrencia.",
    "fisiopato": "La expresión de glicoproteínas fetales por las células neoplásicas permite su detección sérica.",
    "clinicalPearl": "Ningún marcador tumoral es suficientemente sensible o específico para screening.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "1": "Usado en hepatocarcinoma.",
      "2": "Usado en cáncer de mama.",
      "3": "Usado en cáncer de próstata."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-210",
    "topic": "celiaca",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el hallazgo endoscópico clásico de la enfermedad celiaca en el duodeno?",
    "options": [
      "Patrón en empedrado",
      "Atrofia mucosa, festoneado (scalloping) de los pliegues y patrón en mosaico",
      "Nódulos blanquecinos (linfagiectasia)",
      "Úlceras lineales profundas"
    ],
    "correctIndex": 1,
    "explanation": "Estos signos reflejan la pérdida de las vellosidades y la distorsión de la arquitectura mucosa.",
    "fisiopato": "La inflamación crónica destruye la superficie de absorción, aplanando la mucosa duodenal.",
    "clinicalPearl": "La ausencia de estos signos no descarta la enfermedad; siempre tome biopsias.",
    "guideline": "ESGE Guidelines: Endoscopy in Celiac Disease.",
    "whyWrong": {
      "0": "Típico de Enfermedad de Crohn.",
      "2": "Sugerente de mala absorción de grasas/Déficit proteico.",
      "3": "Típico de Crohn o infecciones."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-211",
    "topic": "biologia",
    "difficulty": "Staff",
    "text": "¿Qué tipo de epitelio recubre la mayor parte del esófago normal?",
    "options": [
      "Epitelio escamoso estratificado no queratinizado",
      "Epitelio colunar simple",
      "Epitelio pseudoestratificado ciliado",
      "Epitelio de transición"
    ],
    "correctIndex": 0,
    "explanation": "Es un epitelio resistente a la fricción pero sensible al ácido.",
    "fisiopato": "Su estructura de múltiples capas planas protege contra el daño mecánico de los alimentos.",
    "clinicalPearl": "La transformación a epitelio colunar se denomina metaplasia intestinal (Barrett).",
    "guideline": "Histology for Pathologists.",
    "whyWrong": {
      "1": "Recubre el estómago e intestino.",
      "2": "Típico de la vía respiratoria.",
      "3": "Típico de la vía urinaria."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-212",
    "topic": "nutricion",
    "difficulty": "Fellow",
    "text": "¿Cuál es la causa principal del Síndrome de Dumpling tardío tras una cirugía gástrica?",
    "options": [
      "Hiperinsulinemia reactiva ante una carga rápida de glucosa",
      "Paso de contenido hiperosmolar al intestino",
      "Déficit de hierro",
      "Infección por H. pylori"
    ],
    "correctIndex": 0,
    "explanation": "La hiperinsulinemia exagerada causa una hipoglucemia post-prandial (1-3 horas después).",
    "fisiopato": "La llegada brusca de carbohidratos simples al yeyuno estimula una secreción masiva de insulina.",
    "clinicalPearl": "Se maneja fraccionando las comidas y evitando azúcares simples.",
    "guideline": "ESPEN Guidelines.",
    "whyWrong": {
      "1": "Causa el Dumping precoz (síntomas vasomotores inmediatos).",
      "2": "Causa anemia, no dumping.",
      "3": "Sin relación directa."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-213",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "¿Cuál es el agente patógeno más probable en una diarrea del viajero que presenta disentería (sangre y pus) tras un viaje al Sudeste Asiático?",
    "options": [
      "Campylobacter jejuni",
      "Salmonella typhi",
      "Giardia lamblia",
      "Norovirus"
    ],
    "correctIndex": 0,
    "explanation": "Campylobacter es una causa frecuente de diarrea inflamatoria y se asocia a menudo con resistencia a quinolonas en esa región.",
    "fisiopato": "Invasión directa de la mucosa colónica e ileal, produciendo una respuesta inflamatoria aguda.",
    "clinicalPearl": "Considere Azitromicina como tratamiento de elección ante sospecha de resistencia.",
    "guideline": "CDC Yellow Book / IDSA Guidelines.",
    "whyWrong": {
      "1": "Causa fiebre tifoidea (cuadro sistémico), no típicamente disentería aguda.",
      "2": "Causa diarrea esteatorreica y prolongada, no disentería.",
      "3": "Causa brotes de diarrea acuosa explosiva."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-214",
    "topic": "diarrea_cronica",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo fisiopatológico de la diarrea en el Síndrome de Zollinger-Ellison?",
    "options": [
      "Inactivación de las enzimas pancreáticas por el bajo pH duodenal",
      "Efecto osmótico de la gastrina",
      "Invasión bacteriana",
      "Pérdida de superficie de absorción"
    ],
    "correctIndex": 0,
    "explanation": "El exceso de ácido clorhídrico en el duodeno precipita los ácidos biliares e inactiva la lipasa pancreática.",
    "fisiopato": "La hipersecreción de gastrina por un tumor neuroendocrino (gastrinoma) genera una carga ácida masiva.",
    "clinicalPearl": "La diarrea puede ser el único síntoma antes de que aparezcan úlceras refractarias.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "1": "La gastrina no es osmóticamente activa.",
      "2": "No es el mecanismo primario.",
      "3": "Ocurre solo si hay complicaciones anatómicas asociadas."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-215",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "¿Qué hallazgo en la pH-impedanciometría de 24 horas define la \"Hipersensibilidad al Reflujo\"?",
    "options": [
      "Exposición ácida total normal pero asociación sintomática positiva con eventos de reflujo",
      "Exposición ácida total elevada",
      "Asociación sintomática negativa",
      "Reflujo puramente alcalino"
    ],
    "correctIndex": 0,
    "explanation": "El paciente tiene una percepción exagerada de eventos de reflujo fisiológico.",
    "fisiopato": "Existe un procesamiento central alterado de los estímulos esofágicos en el contexto de una barrera mucosa indemne.",
    "clinicalPearl": "Estos pacientes se benefician más de neuromoduladores que de cirugía antirreflujo.",
    "guideline": "Lyon Consensus 2.0.",
    "whyWrong": {
      "1": "Define ERGE verdadero.",
      "2": "Sugerente de Pirois Funcional si la exposición ácida es normal.",
      "3": "El reflujo no ácido es común, pero el concepto de hipersensibilidad requiere asociación clínica."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-216",
    "topic": "masld",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el primer fármaco aprobado por la FDA específicamente para el tratamiento de la NASH (MASH) con fibrosis significativa (F2-F3)?",
    "options": [
      "Resmetirom",
      "Pioglitazona",
      "Vitamina E",
      "Semaglutida"
    ],
    "correctIndex": 0,
    "explanation": "El Resmetirom es un agonista selectivo del receptor de hormona tiroidea beta (THR-beta).",
    "fisiopato": "Aumenta el metabolismo de los lípidos en el hígado y reduce la lipotoxicidad.",
    "clinicalPearl": "Aprobado en 2024 tras los resultados del estudio MAESTRO-NASH.",
    "guideline": "AASLD 2024 Practice Guidance.",
    "whyWrong": {
      "1": "Usado off-label con buena evidencia, pero no con indicación específica aprobada.",
      "2": "Usado en no diabéticos, pero con evidencia limitada en fibrosis avanzada.",
      "3": "Eficaz para pérdida de peso y resolución de MASH, pero aprobación específica para fibrosis está en curso."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-217",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "¿Cuál es el objetivo principal del tratamiento de la Hepatitis C en la era de los Antivirales de Acción Directa (AAD)?",
    "options": [
      "Respuesta Viral Sostenida (RVS) a las 12 semanas de finalizar el tratamiento",
      "Reducción de la carga viral a la mitad",
      "Aclaramiento del HBsAg",
      "Normalización de las transaminasas únicamente"
    ],
    "correctIndex": 0,
    "explanation": "La RVS12 equivale a la curación virológica definitiva en > 95% de los casos.",
    "fisiopato": "Al ser un virus ARN que no se integra al genoma, su eliminación de la sangre implica erradicación del huésped.",
    "clinicalPearl": "La RVS reduce drásticamente el riesgo de cirrosis y hepatocarcinoma.",
    "guideline": "EASL Recommendations on Treatment of Hepatitis C.",
    "whyWrong": {
      "1": "Insuficiente; el objetivo es indetectabilidad persistente.",
      "2": "Objetivo de la Hepatitis B, no C.",
      "3": "Es un efecto secundario de la cura, no el marcador principal."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-218",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el signo radiológico en el TAC que sugiere una Pancreatitis Autoinmune Tipo 1?",
    "options": [
      "Páncreas en \"salchicha\" (agrandamiento difuso) con cápsula halo periférica",
      "Calcificaciones masivas difusas",
      "Dilatación moniliforme del conducto de Wirsung",
      "Pseudoquistes múltiples"
    ],
    "correctIndex": 0,
    "explanation": "La PAI tipo 1 se asocia a niveles elevados de IgG4 y compromiso multisistémico.",
    "fisiopato": "Infiltración linfoplasmocitaria densa que borra los surcos pancreáticos normales.",
    "clinicalPearl": "Responde espectacularmente a los corticoides.",
    "guideline": "International Consensus Diagnostic Criteria (ICDC) for AIP.",
    "whyWrong": {
      "1": "Típico de pancreatitis crónica alcohólica.",
      "2": "Sugerente de neoplasia o pancreatitis crónica avanzada.",
      "3": "Complicación de pancreatitis aguda necrotizante."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-219",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el criterio para diagnosticar una Insuficiencia Hepática Aguda sobre Crónica (ACLF) según el consenso de la EASL-CLIF?",
    "options": [
      "Presencia de falla multiorgánica (puntuación CLIF-C OF) en un paciente con cirrosis descompensada",
      "Bilirrubina > 10 mg/dL únicamente",
      "Ascitis refractaria",
      "Encefalopatía grado I"
    ],
    "correctIndex": 0,
    "explanation": "La ACLF se define por la falla de órganos sistémicos y se asocia a una mortalidad muy alta a corto plazo.",
    "fisiopato": "Una respuesta inflamatoria sistémica severa (SIRS) gatillada por infección o alcohol daña órganos distantes (riñón, pulmón, cerebro).",
    "clinicalPearl": "El pronóstico depende del número de fallas orgánicas (Grado 1, 2 o 3).",
    "guideline": "EASL-CLIF Consortium guidelines on ACLF.",
    "whyWrong": {
      "1": "Es un componente de la falla, no la definición per se.",
      "2": "Es una descompensación clásica, no necesariamente ACLF.",
      "3": "No define el síndrome de falla multiorgánica."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-220",
    "topic": "h_pylori",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el rol de la Amoxicilina en dosis altas (> 3g/día) o fraccionada en la terapia de erradicación de H. pylori?",
    "options": [
      "Superar la baja permeabilidad gástrica y mantener niveles por encima de la CIM durante todo el día",
      "Aumentar la resistencia bacteriana",
      "Prevenir la diarrea",
      "No tiene beneficio demostrado"
    ],
    "correctIndex": 0,
    "explanation": "La amoxicilina es un antibiótico tiempo-dependiente; mantener niveles constantes es clave para la lisis bacteriana.",
    "fisiopato": "H. pylori se replica lentamente; la exposición prolongada al beta-lactámico en fase de división es necesaria.",
    "clinicalPearl": "Se usa a menudo en la \"Terapia Dual\" de dosis altas con IBP.",
    "guideline": "Maastricht VI.",
    "whyWrong": {
      "1": "La resistencia a amoxicilina es extremadamente rara.",
      "2": "Al contrario, puede aumentarla por dosis altas.",
      "3": "Falso."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-221",
    "topic": "vias_biliares",
    "difficulty": "Fellow",
    "text": "En un paciente con sospecha de coledocolitiasis y riesgo intermedio (según ASGE), ¿cuál es el siguiente paso más costo-efectivo?",
    "options": [
      "Colangiorresonancia (CPRM) o Endosonografía (EUS)",
      "CPRE directa",
      "Colecistectomía con colangiografía intraoperatoria",
      "Observación"
    ],
    "correctIndex": 0,
    "explanation": "Evita los riesgos de una CPRE innecesaria (pancreatitis) en pacientes donde la probabilidad de cálculo es moderada.",
    "fisiopato": "La CPRM y EUS tienen una sensibilidad > 90% para detectar cálculos en la vía biliar.",
    "clinicalPearl": "Si la sospecha es muy alta (cálculo visto en eco + bilirrubina > 4), vaya directo a CPRE.",
    "guideline": "ASGE Guideline: Role of endoscopy in the evaluation of suspected choledocholithiasis.",
    "whyWrong": {
      "1": "Riesgo innecesario de complicaciones si no hay cálculo.",
      "2": "Aceptable, pero la CPRM/EUS son preferidas para evitar re-intervenciones o cirugías complejas.",
      "3": "Riesgo de colangitis."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-222",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el mecanismo de acción del Upadacitinib en la Colitis Ulcerosa?",
    "options": [
      "Inhibidor selectivo de JAK-1",
      "Antagonista de la integrina alfa-4-beta-7",
      "Inhibidor de la IL-23 p19",
      "Bloqueador de TNF-alfa"
    ],
    "correctIndex": 0,
    "explanation": "Upadacitinib es una pequeña molécula oral que bloquea la vía de señalización intracelular de múltiples citoquinas proinflamatorias.",
    "fisiopato": "Al inhibir JAK-1, se detiene la transcripción mediada por STAT, reduciendo la activación linfocitaria.",
    "clinicalPearl": "Muy eficaz en inducción rápida, incluso en fallas a anti-TNF.",
    "guideline": "U-ACHIEVE clinical trials / FDA approval.",
    "whyWrong": {
      "1": "Mecanismo de Vedolizumab.",
      "2": "Mecanismo de Risankizumab o Guselkumab.",
      "3": "Mecanismo de Infliximab/Adalimumab."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-223",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "En el monitoreo de pacientes con EII bajo biológicos, ¿qué significa un \"Clearance\" (aclaramiento) aumentado del fármaco?",
    "options": [
      "El fármaco se elimina más rápido debido a una alta carga inflamatoria (consumo en el tejido)",
      "El fármaco no funciona por mutación genética",
      "El riñón está filtrando proteínas",
      "El paciente no se está inyectando"
    ],
    "correctIndex": 0,
    "explanation": "La inflamación severa produce pérdida de proteínas (incluyendo biológicos) por el intestino y mayor proteólisis.",
    "fisiopato": "La \"fuga\" del biológico hacia la luz intestinal y el consumo por el exceso de citoquinas reducen su vida media.",
    "clinicalPearl": "En colitis ulcerosa aguda grave, el aclaramiento de Infliximab es altísimo.",
    "guideline": "Therapeutic Drug Monitoring in IBD.",
    "whyWrong": {
      "1": "No es por mutación, es por dinámica de inflamación.",
      "2": "No es la causa principal en EII.",
      "3": "Describe falta de adherencia, no aclaramiento biológico."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-224",
    "topic": "muerte_subita",
    "difficulty": "Staff",
    "text": "¿Cuál es la causa más probable de choque obstructivo que lleva a paro cardiaco en un paciente sometido a una endoscopia bajo ventilación a presión positiva?",
    "options": [
      "Neumotórax a tensión",
      "Taponamiento cardiaco",
      "Embolia gaseosa",
      "Infarto agudo"
    ],
    "correctIndex": 0,
    "explanation": "La presión positiva en la vía aérea puede exacerbar una fístula pleuropulmonar o un daño alveolar agudo.",
    "fisiopato": "El aire atrapado en el espacio pleural comprime el corazón y los grandes vasos, anulando el precarga.",
    "clinicalPearl": "Sospeche si hay desviación traqueal y ausencia de murmullo unilateral súbito.",
    "guideline": "ACLS 2020.",
    "whyWrong": {
      "1": "Raro en endoscopia digestiva pura.",
      "2": "Menos común que el neumotórax si hay ventilación mecánica agresiva.",
      "3": "Causa choque cardiogénico, no obstructivo primario."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-225",
    "topic": "protocolo_simulacro",
    "difficulty": "Fellow",
    "text": "Se produce una reacción anafiláctica alérgica tras la administración de Propofol. ¿Cuál es el tratamiento de primera línea?",
    "options": [
      "Adrenalina 0.3 - 0.5 mg Intramuscular",
      "Corticoides EV",
      "Antihistamínicos EV",
      "Suero fisiológico"
    ],
    "correctIndex": 0,
    "explanation": "La adrenalina es el único fármaco que detiene la cascada de degranulación de mastocitos en agudo.",
    "fisiopato": "Estimula receptores alfa-1 (vasoconstricción) y beta-2 (broncodilatación y estabilización de membrana).",
    "clinicalPearl": "No pierda tiempo con corticoides; la adrenalina salva la vida en segundos.",
    "guideline": "World Allergy Organization (WAO) Anaphylaxis Guidelines.",
    "whyWrong": {
      "1": "Tardan horas en actuar (previenen fase tardía).",
      "2": "Efecto coadyuvante menor.",
      "3": "Soporte de volumen únicamente."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-226",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el manejo inicial recomendado para un paciente con HDA por sospecha de várices esofágicas antes de la endoscopia?",
    "options": [
      "Tratamiento antibiótico (Ceftriaxona) y drogas vasoactivas (Terlipresina o Somatostatina)",
      "Instalación de sonda Sengstaken-Blakemore de entrada",
      "Laringoscopia directa",
      "Vitamina K aislada"
    ],
    "correctIndex": 0,
    "explanation": "Los antibióticos reducen la mortalidad y el resangrado en el paciente cirrótico con HDA.",
    "fisiopato": "La traslocación bacteriana es frecuente durante el sangrado; la vasoactividad reduce la presión portal y facilita la hemostasia.",
    "clinicalPearl": "La Ceftriaxona es superior al Norfloxacino en pacientes con cirrosis avanzada.",
    "guideline": "Baveno VII Consensus.",
    "whyWrong": {
      "1": "Solo como puente si falla la endoscopia.",
      "2": "No tiene rol aquí.",
      "3": "No corrige la coagulopatía ni la presión portal."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-227",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "En un paciente con ERGE refractario a IBP y pH-impedanciometría confirma reflujo ácido persistente, ¿cuál es el rol de la evaluación de la contractilidad de reserva (ej: Maniobra de Tragos Múltiples)?",
    "options": [
      "Predecir el riesgo de disfagia postoperatoria tras una funduplicatura",
      "Medir el tamaño de la hernia hiatal",
      "Diagnosticar acalasia únicamente",
      "No tiene utilidad clínica"
    ],
    "correctIndex": 0,
    "explanation": "Si el esófago tiene baja reserva contráctil, una funduplicatura total (Nissen) podría causar disfagia severa.",
    "fisiopato": "La maniobra de tragos múltiples evalúa la capacidad del cuerpo esofágico de aumentar su fuerza ante un reto.",
    "clinicalPearl": "Si no hay reserva, se prefiere una funduplicatura parcial (Toupet).",
    "guideline": "Chicago Classification 4.0.",
    "whyWrong": {
      "1": "Se mide mejor por endoscopia o imágenes.",
      "2": "Se diagnostica con el IRP y peristalsis básica.",
      "3": "Es un estándar de alta resolución moderno."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-228",
    "topic": "hdb",
    "difficulty": "Staff",
    "text": "¿Cuál es la causa más frecuente de Rectorragia indolora en el adulto mayor de 60 años?",
    "options": [
      "Diverticulosis colónica",
      "Angiodisplasia",
      "Hemorroides internas",
      "Cáncer colorrectal"
    ],
    "correctIndex": 0,
    "explanation": "La diverticulosis es la causa #1 de sangrado masivo e indoloro en este grupo etario.",
    "fisiopato": "Herniación de la mucosa a través de los vasos rectos que se estiran y rompen.",
    "clinicalPearl": "El 75% de los sangrados diverticulares se autolimitan.",
    "guideline": "Manual Chileno 2025.",
    "whyWrong": {
      "1": "Causa sagrado venoso/capilar, suele ser menos masivo y más crónico.",
      "2": "Suele causar hematoquecia tras el esfuerzo defecatorio, no rectorragia masiva.",
      "3": "Suele ser oculto o cambios en el hábito, no típicamente hemorragia aguda masiva."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-229",
    "topic": "motores_esofago",
    "difficulty": "Fellow",
    "text": "En la Manometría de Alta Resolución, ¿cómo se define el \"Espasmo Esofágico Distal\"?",
    "options": [
      "DL (Latencia Distal) < 4.5 segundos en al menos 20% de los tragos",
      "DCI > 8000",
      "IRP elevado",
      "Aneristalsis completa"
    ],
    "correctIndex": 0,
    "explanation": "La latencia distal corta indica una contracción prematura y desorganizada.",
    "fisiopato": "Falla en la inhibición nitrérgica del cuerpo esofágico distal.",
    "clinicalPearl": "El síntoma cardinal es el dolor torácico no cardiaco asociado a disfagia.",
    "guideline": "Chicago Classification 4.0.",
    "whyWrong": {
      "1": "Define Jackhammer.",
      "2": "Define obstrucción de flujo.",
      "3": "Define acalasia si el IRP está elevado."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-230",
    "topic": "celiaca",
    "difficulty": "Staff",
    "text": "¿Cuál es el anticuerpo más sensible y específico para el diagnóstico inicial de Enfermedad Celiaca con niveles de IgA normales?",
    "options": [
      "Anti-transglutaminasa tisular IgA (tTG-IgA)",
      "Anti-gliadina deaminada IgG",
      "Anti-endomisio IgA",
      "Anti-reticulina"
    ],
    "correctIndex": 0,
    "explanation": "La tTG IgA es el test de elección inicial por su excelente rendimiento balanceado.",
    "fisiopato": "La transglutaminasa es la enzima que modifica la gliadina, convirtiéndola en un antígeno potente.",
    "clinicalPearl": "Siempre pida niveles de IgA total; si están bajos, debe usar anticuerpos IgG.",
    "guideline": "ACG Guidelines / Manual Chileno 2025.",
    "whyWrong": {
      "1": "Útil si hay déficit de IgA.",
      "2": "Muy específico pero operador dependiente y más caro.",
      "3": "Obsoleto."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-231",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "¿Cuál es el tratamiento de elección para el sobrecrecimiento bacteriano de intestino delgado (SIBO) en pacientes con predominio de Metano?",
    "options": [
      "Rifaximina sola",
      "Rifaximina + Neomicina (o Metronidazol)",
      "Amoxicilina",
      "Probióticos en dosis altas"
    ],
    "correctIndex": 1,
    "explanation": "El metano es producido por arqueas (M. smithii) que requieren una combinación de antibióticos.",
    "fisiopato": "El metano reduce el tránsito intestinal (causa constipación) y es resistente a la rifaximina sola.",
    "clinicalPearl": "El test de hidrógeno/metano en aire espirado es clave para decidir el esquema.",
    "guideline": "ACG Clinical Guideline: Small Intestinal Bacterial Overgrowth.",
    "whyWrong": {
      "0": "Eficaz para SIBO por Hidrógeno.",
      "2": "Poca evidencia comparativa.",
      "3": "Pueden empeorar el SIBO en algunos casos."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-232",
    "topic": "biologia",
    "difficulty": "Subspecialist",
    "text": "¿Qué citoquina es la principal mediadora de la fase aguda y del desarrollo de granulomas en la Enfermedad de Crohn?",
    "options": [
      "TNF-alfa",
      "IL-10",
      "IL-1ra",
      "TGF-beta"
    ],
    "correctIndex": 0,
    "explanation": "El TNF-alfa activa macrófagos y promueve la inflamación transmural.",
    "fisiopato": "Su bloqueo con biológicos es el pilar del tratamiento de la enfermedad fistulizante y estenosante.",
    "clinicalPearl": "La formación de granulomas no caseificantes ayuda a diferenciar Crohn de Colitis Ulcerosa histológicamente.",
    "guideline": "Pathophysiology of IBD.",
    "whyWrong": {
      "1": "Es antiinflamatoria.",
      "2": "Es un receptor antagonista protector.",
      "3": "Relacionada con fibrosis."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-233",
    "topic": "nutricion",
    "difficulty": "Staff",
    "text": "¿Cuál de los siguientes es un marcador bioquímico temprano de realimentación (Refeeding Syndrome)?",
    "options": [
      "Hipofosfemia e hipopotasemia",
      "Hiperglicemia masiva",
      "Hipercalcemia",
      "Hipoalbuminemia"
    ],
    "correctIndex": 0,
    "explanation": "La insulina mueve el fósforo y potasio al espacio intracelular tras una carga de glucosa en pacientes desnutridos.",
    "fisiopato": "La falla en los niveles de fósforo puede causar insuficiencia cardiaca y muerte súbita.",
    "clinicalPearl": "Reponga electrolitos ANTES de iniciar la nutrición calórica completa.",
    "guideline": "ASPEN/ESPEN Guidelines.",
    "whyWrong": {
      "1": "Puede ocurrir pero no define el síndrome.",
      "2": "No es característico.",
      "3": "Marcador de desnutrición crónica pero no agudo de realimentación."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-234",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "¿Cuál es el manejo inicial de elección para una Angiodisplasia colónica que causa sangrado crónico recurrente y anemia ferropénica?",
    "options": [
      "Argón plasma (APC) o electrocoagulación monopolar",
      "Resección quirúrgica del segmento",
      "Suplementación de hierro únicamente",
      "Talidomida"
    ],
    "correctIndex": 0,
    "explanation": "La ablación endoscópica es efectiva para controlar los vasos superficiales.",
    "fisiopato": "Las angiodisplasias son dilataciones ectásicas de vénulas y capilares en la mucosa y submucosa.",
    "clinicalPearl": "A menudo se asocian a estenosis aórtica (Síndrome de Heyde) o insuficiencia renal crónica.",
    "guideline": "Manual Chileno 2025 / ACG HDB.",
    "whyWrong": {
      "1": "Solo si la terapia endoscópica falla y el sangrado es masivo/incontrolable.",
      "2": "No previene nuevos sangrados de otras lesiones.",
      "3": "Reservado para casos refractarios pero con efectos adversos significativos."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-235",
    "topic": "hdb",
    "difficulty": "Subspecialist",
    "text": "¿Qué hallazgo en una Angio-TAC sugiere un sangrado de origen diverticular versus uno por angiodisplasia?",
    "options": [
      "Extravasación de contraste en la luz del divertículo",
      "Imagen en penacho (tuft) vascular",
      "Engrosamiento de la pared intestinal segmentaria",
      "Presencia de aire libre"
    ],
    "correctIndex": 0,
    "explanation": "La localización del \"pool\" de contraste dentro del saco diverticular es patognomónica.",
    "fisiopato": "La ruptura capilar o arterial intramural vierte la sangre directamente al lumen diverticular.",
    "clinicalPearl": "La angiodisplasia suele mostrar vasos tortuosos y llenado venoso temprano.",
    "guideline": "Radiology of Acute GI Bleed.",
    "whyWrong": {
      "1": "Sugerente de angiodisplasia.",
      "2": "Inespecífico para la fuente del sangrado arterial agudo.",
      "3": "Indica perforación, complicación diferente."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-236",
    "topic": "motores_esofago",
    "difficulty": "Fellow",
    "text": "En la Manometría de Alta Resolución, ¿qué define un \"Esófago Jackhammer\" (Esófago hipercontráctil)?",
    "options": [
      "Al menos 2 tragos con DCI > 8000 mmHg.s.cm",
      "DL < 4.5 s",
      "Ausencia de peristalsis",
      "IRP > 15"
    ],
    "correctIndex": 0,
    "explanation": "El vigor contráctil es extremadamente alto pero coordinado.",
    "fisiopato": "Excesiva estimulación colinérgica o sensibilidad muscular aumentada.",
    "clinicalPearl": "Puede asociarse a obstrucción del flujo de salida (EGJOO).",
    "guideline": "Chicago Classification 4.0.",
    "whyWrong": {
      "1": "Define espasmo distal.",
      "2": "Define aperistalsis.",
      "3": "Define obstrucción de flujo de salida."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-237",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la dosis recomendada de Infliximab para la inducción en una Colitis Ulcerosa Aguda Grave (CUAG) según protocolos de rescate?",
    "options": [
      "5 mg/kg semanas 0, 2 y 6",
      "10 mg/kg en dosis acelerada (ej: 0, 1 y 4 semanas)",
      "100 mg dosis fija",
      "2.5 mg/kg"
    ],
    "correctIndex": 1,
    "explanation": "En CUAG hay un alto aclaramiento del fármaco, por lo que dosis más altas y precoces mejoran la respuesta.",
    "fisiopato": "La carga inflamatoria y la pérdida proteica intestinal obligan a maximizar la concentración sérica inicial.",
    "clinicalPearl": "La decisión de rescate con Infliximab debe tomarse al día 3-5 de corticoides fallidos.",
    "guideline": "ECCO Guidelines for UC.",
    "whyWrong": {
      "0": "Esquema estándar para casos moderados.",
      "2": "Dosis insuficiente.",
      "3": "Dosis sub-terapéutica."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-238",
    "topic": "eii_avanzada",
    "difficulty": "Fellow",
    "text": "¿Cuál es el rol del testeo de anticuerpos anti-fármaco (ej: anti-Infliximab) en la pérdida secundaria de respuesta?",
    "options": [
      "Permite diferenciar falla mecánica de falla inmunológica y guiar el cambio de terapia",
      "Confirma el diagnóstico de EII",
      "Mide la inflamación de la mucosa",
      "No se recomienda"
    ],
    "correctIndex": 0,
    "explanation": "Si hay anticuerpos altos, el cambio de clase es mandatorio.",
    "fisiopato": "La formación de anticuerpos neutraliza el fármaco y acelera su eliminación.",
    "clinicalPearl": "Si el nivel de fármaco es bajo sin anticuerpos, se debe escalar la dosis.",
    "guideline": "AGA Clinical Practice Guideline on TDM.",
    "whyWrong": {
      "1": "No es una prueba diagnóstica de la enfermedad.",
      "2": "Para eso se usa la calprotectina.",
      "3": "Es el estándar en el manejo avanzado actual."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-239",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "¿Cuál es la cirugía antirreflujo de elección en un paciente con ERGE severo y Obesidad Mórbida (IMC > 35)?",
    "options": [
      "Bypass gástrico en Y de Roux",
      "Funduplicatura de Nissen",
      "Manga gástrica (Sleeve)",
      "Procedimiento de LINX"
    ],
    "correctIndex": 0,
    "explanation": "El bypass gástrico reduce el peso y elimina la producción ácida del remanente gástrico distal.",
    "fisiopato": "La manga gástrica puede exacerbar el reflujo debido al aumento de la presión intragástrica.",
    "clinicalPearl": "El bypass es la mejor opción antirreflujo en el obeso severo.",
    "guideline": "ASMBS / SAGES Guidelines.",
    "whyWrong": {
      "1": "Menor éxito en obesos comparado con Bypass.",
      "2": "Frecuentemente empeora el reflujo.",
      "3": "Contraindicación relativa en IMC muy alto."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-240",
    "topic": "h_pylori",
    "difficulty": "Staff",
    "text": "¿Cuál es la prueba no invasiva de elección para confirmar la erradicación de H. pylori?",
    "options": [
      "Test de aire espirado con urea marcada (C-13)",
      "Serología IgG",
      "Antígeno en deposiciones (monoclonal)",
      "A y C son correctas"
    ],
    "correctIndex": 3,
    "explanation": "Tanto el test de aliento como el antígeno monoclonal en heces detectan infección activa.",
    "fisiopato": "La serología puede permanecer positiva meses o años después de la curación.",
    "clinicalPearl": "Asegúrese de suspender IBP al menos 2 semanas antes de la prueba.",
    "guideline": "Maastricht VI.",
    "whyWrong": {
      "1": "No distingue entre infección pasada y presente.",
      "3": "Ambas son válidas y recomendadas."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-241",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la indicación de necrosectomía en pancreatitis aguda necrotizante?",
    "options": [
      "Necrosis infectada con deterioro clínico progresivo pese a manejo médico",
      "Necrosis estéril inicial",
      "Presencia de burbujas de gas tras 24 horas",
      "Amilasa > 5000"
    ],
    "correctIndex": 0,
    "explanation": "Se prefiere el abordaje \"Step-up\" (drenaje percutáneo primero) y solo cirugía si no hay mejoría.",
    "fisiopato": "La infección de la necrosis aumenta drásticamente la mortalidad y requiere control de foco.",
    "clinicalPearl": "Retrase la intervención quirúrgica lo más posible (idealmente > 4 semanas).",
    "guideline": "IAP/APA Evidence-based guidelines for management of acute pancreatitis.",
    "whyWrong": {
      "1": "La necrosis estéril no requiere cirugía.",
      "2": "Indica infección, pero si el paciente está estable, se puede intentar drenaje percutáneo inicialmente.",
      "3": "No indica severidad de necrosis ni necesidad de cirugía."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-242",
    "topic": "vias_biliares",
    "difficulty": "Fellow",
    "text": "¿Cuál es el factor de riesgo más importante para el desarrollo de Colangiocarcinoma en pacientes con Colangitis Esclerosante Primaria (CEP)?",
    "options": [
      "Presencia de varonía y edad avanzada",
      "Tabaquismo",
      "Duración de la enfermedad y presencia de enfermedad inflamatoria intestinal asociada",
      "Niveles bajos de fosfatasa alcalina"
    ],
    "correctIndex": 2,
    "explanation": "El riesgo de colangiocarcinoma es del 1-2% anual en pacientes con CEP.",
    "fisiopato": "La inflamación crónica y la proliferación biliar ductal aumentan el riesgo de mutaciones oncogénicas.",
    "clinicalPearl": "Se recomienda screening anual con ecografía o resonancia.",
    "guideline": "EASL Guidelines: Management of PSC.",
    "whyWrong": {
      "0": "Aumentan riesgo, pero la asociación con EII es un marcador biológico más potente.",
      "1": "Factor menor comparado con la inflamación ductal.",
      "3": "Niveles altos son los que preocupan."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-243",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el significado de un Anti-HBc (anticore) positivo asilado?",
    "options": [
      "Infección pasada resuelta, infección crónica oculta o falso positivo",
      "Inmunidad por vacuna",
      "Infección aguda temprana",
      "Curación definitiva con inmunidad"
    ],
    "correctIndex": 0,
    "explanation": "Requiere evaluación cuidadosa, a veces carga viral para descartar infección oculta.",
    "fisiopato": "El anticore es el primer anticuerpo en aparecer y el que más tiempo persiste.",
    "clinicalPearl": "En pacientes que van a recibir quimioterapia, un anticore (+) requiere profilaxis aunque el HBsAg sea (-).",
    "guideline": "AASLD Hepatitis B Guidance.",
    "whyWrong": {
      "1": "La vacuna solo produce Anti-HBs positivo.",
      "2": "Sería HBsAg (+) e IgM Anti-HBc (+).",
      "3": "Requiere Anti-HBs (+) para confirmar inmunidad."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-244",
    "topic": "masld",
    "difficulty": "Staff",
    "text": "¿Cuál es la intervención más efectiva para la resolución de la esteatohepatitis (MASH) en el largo plazo?",
    "options": [
      "Pérdida de peso > 10% del peso corporal total",
      "Uso de Estatinas",
      "Terapia con probióticos",
      "Cirugía de vesícula"
    ],
    "correctIndex": 0,
    "explanation": "Una pérdida de peso significativa logra remisión de la inflamación y mejoría de la fibrosis en muchos casos.",
    "fisiopato": "Reduce la resistencia a la insulina y el flujo de ácidos grasos libres al hígado.",
    "clinicalPearl": "Es el pilar fundamental del tratamiento (dieta y ejercicio).",
    "guideline": "Manual Chileno 2025 / AASLD.",
    "whyWrong": {
      "1": "Protegen el corazón y son seguras, pero no curan el MASH per se.",
      "2": "Evidencia aún preliminar.",
      "3": "No tiene relación con el metabolismo graso hepático."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-245",
    "topic": "cancer_esofago",
    "difficulty": "Fellow",
    "text": "¿Cuál es el factor pronóstico más importante en el cáncer de esófago resecable?",
    "options": [
      "Estado de los linfonodos (N)",
      "Tamaño tumoral",
      "Grado de diferenciación",
      "Edad del paciente"
    ],
    "correctIndex": 0,
    "explanation": "El compromiso ganglionar es el predictor más fuerte de sobrevida y recurrencia.",
    "fisiopato": "La rica red linfática submucosa del esófago facilita la diseminación temprana incluso en tumores pequeños.",
    "clinicalPearl": "El número de linfonodos positivos correlaciona directamente con el pronóstico post-esofagectomía.",
    "guideline": "AJCC Cancer Staging Manual.",
    "whyWrong": {
      "1": "Importante, pero menos decisivo que el N.",
      "2": "Factor relevante pero secundario al estadio TNM.",
      "3": "No es un factor pronóstico primario independiente."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-246",
    "topic": "ulcera_peptica",
    "difficulty": "Staff",
    "text": "¿Cuál es la localización más frecuente de una úlcera péptica por estrés en un paciente crítico en la UCI?",
    "options": [
      "Cuerpo y fondo gástrico",
      "Antro gástrico",
      "Bulbo duodenal",
      "Esófago distal"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras de estrés (de Curling o Cushing) suelen ser múltiples y se ubican en el territorio de mayor secreción ácida.",
    "fisiopato": "La hipoperfusión esplácnica reduce la producción de moco y bicarbonato, dejando la mucosa vulnerable.",
    "clinicalPearl": "La profilaxis con IBP o antagonistas H2 se reserva para pacientes con factores de riesgo (ej: ventilación mecánica > 48h o coagulopatía).",
    "guideline": "Surviving Sepsis Campaign Guidelines.",
    "whyWrong": {
      "1": "Menos común para úlceras de estrés puro.",
      "2": "Localización principal de la úlcera duodenal crónica, no de estrés.",
      "3": "Raro en este contexto."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-247",
    "topic": "cancer_gastrico",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la mutación germinal asociada al Cáncer Gástrico Difuso Hereditario?",
    "options": [
      "CDH1 (E-cadherina)",
      "APC",
      "MSH2",
      "BRCA1"
    ],
    "correctIndex": 0,
    "explanation": "La pérdida de la proteína E-cadherina altera la adhesión celular, produciendo el fenotipo de células en anillo de sello.",
    "fisiopato": "La falta de cohesión celular permite la infiltración difusa a través de las capas de la pared gástrica (linitis plástica).",
    "clinicalPearl": "Pacientes portadores de mutación CDH1 tienen indicación de gastrectomía profiláctica.",
    "guideline": "International Gastric Cancer Linkage Consortium (IGCLC).",
    "whyWrong": {
      "1": "Asociado a Poliposis Adenomatosa Familiar.",
      "2": "Asociado a Síndrome de Lynch.",
      "3": "Asociado a cáncer de mama/ovario."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-248",
    "topic": "diarrea_cronica",
    "difficulty": "Fellow",
    "text": "¿Cuál es el hallazgo histopatológico definitorio de la Colitis Colágena?",
    "options": [
      "Banda de colágeno subepitelial > 10 micras",
      "Infiltrado linfocítico intraepitelial > 20 por 100 células",
      "Granulomas no caseificantes",
      "Abscesos de criptas"
    ],
    "correctIndex": 0,
    "explanation": "Es una de las dos formas principales de colitis microscópica.",
    "fisiopato": "Depósito anómalo de colágeno que altera la función de barrera y absorción de agua.",
    "clinicalPearl": "Se presenta como diarrea acuosa crónica en mujeres de mediana edad; la endoscopia suele ser normal.",
    "guideline": "AGA Clinical Practice Guidelines on Microscopic Colitis.",
    "whyWrong": {
      "1": "Define Colitis Linfocítica.",
      "2": "Sugerente de Crohn.",
      "3": "Sugerente de Colitis Ulcerosa o Crohn."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-249",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "¿Cuál es la causa más frecuente de Isquemia Mesentérica Aguda embólica?",
    "options": [
      "Fibrilación auricular",
      "Aterosclerosis aórtica",
      "Vasospasmo por cocaína",
      "Disección aórtica"
    ],
    "correctIndex": 0,
    "explanation": "Los trombos auriculares se desprenden y ocluyen típicamente la Arteria Mesentérica Superior.",
    "fisiopato": "La anatomía de la AMS, con su ángulo de salida agudo, favorece la entrada de émbolos cardiacos.",
    "clinicalPearl": "Presenta un dolor \"desproporcionado al examen físico\".",
    "guideline": "Manual Chileno 2025 / WSES Guidelines.",
    "whyWrong": {
      "1": "Suele causar isquemia mesentérica crónica o trombosis in situ, no embolia abrupta.",
      "2": "Causa isquemia no oclusiva.",
      "3": "Causa isquemia pero es menos frecuente que la FA."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-250",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "En un paciente cirrótico con ascitis moderada (grado 2) de reciente diagnóstico, ¿cuál es el abordaje terapéutico de primera línea?",
    "options": [
      "Restricción de sodio dietético (2 g/día) y diuréticos (aldosterónicos solos o con furosemida)",
      "Paracentesis evacuadora total",
      "TIPS (Derivación portosistémica intrahepática transyugular)",
      "Restricción hídrica profiláctica"
    ],
    "correctIndex": 0,
    "explanation": "El manejo inicial de la ascitis no tensa se basa en balance negativo de sodio. Los diuréticos son el pilar farmacológico.",
    "fisiopato": "El hiperaldosteronismo secundario en la cirrosis obliga al uso de bloqueadores del receptor de aldosterona como fármaco basal.",
    "clinicalPearl": "La dosis máxima recomendada habitualmente es Espironolactona 400 mg y Furosemida 160 mg al día.",
    "guideline": "EASL Clinical Practice Guidelines on the management of decompensated cirrhosis.",
    "whyWrong": {
      "1": "Reservada para ascitis grado 3 (tensa o refractaria).",
      "2": "Tratamiento de rescate para ascitis refractaria o sangrado por várices.",
      "3": "Solo se indica restricción hídrica si hay hiponatremia dilucional severa (< 125 mEq/L)."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-251",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "¿Cuál es la complicación más frecuente y temprana post-inserción de un TIPS en un paciente cirrótico?",
    "options": [
      "Encefalopatía hepática",
      "Trombosis del stent",
      "Insuficiencia cardiaca derecha aguda",
      "Sangrado intraabdominal"
    ],
    "correctIndex": 0,
    "explanation": "El TIPS desvía la sangre portal llena de amonio y toxinas directamente a la circulación sistémica, bypasseando los hepatocitos.",
    "fisiopato": "Al reducir drásticamente el flujo portal al hígado, se reduce el aclaramiento de toxinas nitrogenadas de origen intestinal.",
    "clinicalPearl": "A mayor diámetro del stent (ej: 10mm vs 8mm), mayor riesgo de encefalopatía.",
    "guideline": "AASLD Practice Guidance on the use of TIPS.",
    "whyWrong": {
      "1": "Es una complicación a largo plazo, menos común con los stents recubiertos de PTFE actuales.",
      "2": "Posible pero menos frecuente que la encefalopatía (que ocurre en ~30-50%).",
      "3": "Complicación técnica rara."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-252",
    "topic": "cirrosis",
    "difficulty": "Subspecialist",
    "text": "Paciente con cirrosis que cursa con Peritonitis Bacteriana Espontánea (PBE). Presenta Bilirrubina 4.5 mg/dL y Creatinina 1.2 mg/dL. ¿Cuál es el manejo preventivo indicado?",
    "options": [
      "Albúmina intravenosa 1.5 g/kg el día 1 y 1.0 g/kg el día 3",
      "Terlipresina en infusión continua",
      "Transfusión de plasma fresco congelado",
      "Solo Ceftriaxona por 5 días"
    ],
    "correctIndex": 0,
    "explanation": "La albúmina está indicada en pacientes con PBE que tengan alto riesgo de desarrollar síndrome hepatorrenal (BUN > 30, Creatinina > 1.0, o Bilirrubina > 4.0).",
    "fisiopato": "La PBE exacerba la vasodilatación esplácnica; la albúmina previene la reducción del volumen arterial efectivo y protege la función renal.",
    "clinicalPearl": "El uso temprano de albúmina en este subgrupo reduce la incidencia de SHR del 30% a menos del 10%.",
    "guideline": "EASL Clinical Practice Guidelines on decompensated cirrhosis.",
    "whyWrong": {
      "1": "Se usa para el tratamiento del Síndrome Hepatorrenal ya establecido o sangrado variceal.",
      "2": "No mejora el volumen arterial efectivo a largo plazo ni previene SHR.",
      "3": "No previene la disfunción renal en PBE."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-253",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Cuál es la primera alteración hemodinámica que desencadena toda la cascada de retención hidrosalina en la cirrosis?",
    "options": [
      "Vasodilatación esplácnica",
      "Hiperaldosteronismo secundario",
      "Aumento de la hormona antidiurética (ADH)",
      "Vasoconstricción renal"
    ],
    "correctIndex": 0,
    "explanation": "La vasodilatación del lecho esplácnico (mediada por óxido nítrico) reduce el volumen arterial efectivo, lo que los barorreceptores perciben como hipovolemia.",
    "fisiopato": "Al disminuir la resistencia vascular sistémica, se activan los sistemas neurohumorales (SRAA, SNS, ADH) para intentar restaurar la perfusión.",
    "clinicalPearl": "El objetivo de drogas como la Terlipresina es precisamente revertir esta vasodilatación esplácnica inicial.",
    "guideline": "Pathophysiology of Portal Hypertension.",
    "whyWrong": {
      "1": "Es una consecuencia (fase eferente), no el gatillo.",
      "2": "Es una respuesta tardía a la hipovolemia efectiva leve/severa.",
      "3": "Es una respuesta compensatoria al rescate de volumen."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-254",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el patógeno más comúnmente aislado en la necrosis pancreática infectada?",
    "options": [
      "Escherichia coli (y otros Gram negativos intestinales)",
      "Staphylococcus aureus",
      "Candida albicans",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "La infección de la necrosis pancreática ocurre clásicamente por traslocación bacteriana desde el tracto gastrointestinal adyacente.",
    "fisiopato": "El íleo adinámico y la disfunción de barrera mucosa permiten que las bacterias entéricas colonicen el tejido necrótico peripancreático.",
    "clinicalPearl": "Por esto, el antibiótico empírico (ej. Carbapenémicos) debe cubrir principalmente enterobacterias y anaerobios.",
    "guideline": "ACG Clinical Guideline: Acute Pancreatitis.",
    "whyWrong": {
      "1": "Típicamente causa infecciones de piel o dispositivos, no por traslocación entérica.",
      "2": "Suele ser una sobreinfección tardía o post-quirúrgica prolongada.",
      "3": "Ocurre en brotes hospitalarios pero es menos común como agente primario de traslocación."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-255",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "Señale el criterio fundamental que define una pseudoquiste pancreático versus una colección aguda de fluido peripancreático (APFC).",
    "options": [
      "La presencia de una pared madura (tejido de granulación o fibroso), que usualmente tarda > 4 semanas en formarse",
      "El tamaño mayor a 5 cm",
      "La presencia de necrosis en su interior",
      "La ubicación extrapancreática"
    ],
    "correctIndex": 0,
    "explanation": "La clasificación de Atlanta revisada basa la madurez de la colección en el tiempo; una colección sin pared madura (< 4 semanas) es un APFC.",
    "fisiopato": "El páncreas requiere de una respuesta inflamatoria crónica para formar una \"cápsula\" fibrosa sin epitelio de recubrimiento verdadero.",
    "clinicalPearl": "No intente drenar un APFC de forma percutánea a menos que haya infección, pues rara vez madurará adecuadamente ni fistulizará al tracto GI.",
    "guideline": "Revised Atlanta Classification.",
    "whyWrong": {
      "1": "El tamaño no define la madurez anatómica.",
      "2": "Si hay necrosis, se denomina Walled-Off Necrosis (WON), no pseudoquiste.",
      "3": "Ambos pueden ser extrapancreáticos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-256",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "¿Qué marcador genético confiere un alto riesgo predisponente para el desarrollo de Pancreatitis Crónica hereditaria, habitualmente de inicio en la infancia?",
    "options": [
      "Mutación PRSS1",
      "Mutación CFTR",
      "Mutación SPINK1",
      "Mutación NOD2"
    ],
    "correctIndex": 0,
    "explanation": "La mutación del gen PRSS1 ( tripsinógeno catiónico) causa una ganancia de función, activando la tripsina dentro del páncreas de forma espontánea.",
    "fisiopato": "Al activarse prematuramente, la tripsina lanza una cascada proteolítica intrapancreática que vence los mecanismos inhibidores naturales.",
    "clinicalPearl": "Estos pacientes tienen un riesgo >40% de cáncer de páncreas a lo largo de su vida, justificando screening intensivo.",
    "guideline": "Pancreatitis Genetics: ACG.",
    "whyWrong": {
      "1": "Se relaciona a Fibrosis Quística pero afecta el canal de cloro (secreción ductal), mecanismo diferente.",
      "2": "Es una mutación modificadora de riesgo (inhibidor), pero la causa primaria autosómica dominante clásica es PRSS1.",
      "3": "Relacionado a Enfermedad de Crohn."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-257",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "Femenina de 60 años con antecedente reciente de CPRE presenta dolor abdominal y amilasemia elevada 18 horas después. ¿Cuál es el factor periprocedural que más reduce el riesgo de Pancreatitis Post-CPRE?",
    "options": [
      "Instalación de STENT pancreático profiláctico y supositorios de AINEs (Indometacina/Diclofenaco)",
      "Uso de Cefazolina profiláctica IV",
      "Dilatación en lugar de esfinterotomía",
      "Ayuno estricto post-procedimiento por 48h"
    ],
    "correctIndex": 0,
    "explanation": "La combinación de AINEs rectales (para modular la cascada inflamatoria inicial del ácido araquidónico) e instalación de stent (para asegurar el drenaje ductal) son altamente efectivos.",
    "fisiopato": "Los AINEs rectales inhiben la fosfolipasa A2 y prostaglandinas, deteniendo la injuria acinar temprana.",
    "clinicalPearl": "Siempre se deben administrar los AINEs rectales INMEDIATAMENTE ANTES o DESPUÉS del procedimiento en todo paciente sin contraindicación.",
    "guideline": "ESGE Guidelines for prophylaxis of Post-ERCP Pancreatitis.",
    "whyWrong": {
      "1": "No previene la injuria química/mecánica inicial de la pancreatitis.",
      "2": "Al contrario, la dilatación papilar con balón de gran tamaño SIN esfinterotomía puede aumentar el riesgo.",
      "3": "No hay evidencia de que prevenir la alimentación oral evite el PEP."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-258",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la prueba diagnóstica funcional de referencia (Gold Standard histórico aunque de difícil acceso clínico) para evaluar la Insuficiencia Exocrina Pancreática?",
    "options": [
      "Test de Secretina-Colecistoquinina (estimulación directa e intubación duodenal)",
      "Elastasa fecal",
      "Quimotripsina en heces",
      "Resonancia con Secretina"
    ],
    "correctIndex": 0,
    "explanation": "Es el test más sensible, pero altamente invasivo y reservado para centros de excelencia o investigación.",
    "fisiopato": "Mide la cantidad exacta de bicarbonato y enzimas vertidas al duodeno tras estímulo hormonal máximo.",
    "clinicalPearl": "En la práctica clínica habitual, la Elastasa fecal es el test más usado y práctico.",
    "guideline": "UEG Guidelines for CP.",
    "whyWrong": {
      "1": "Es el test de uso clínico más frecuente, pero menos sensible para enfermedad leve.",
      "2": "Menos específico que la elastasa.",
      "3": "Es una prueba de imagen y morfología ductal, no una medición cuantitativa funcional directa en el lumen."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-259",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál de los siguientes es el mejor momento estimado para iniciar nutrición enteral en un paciente con pancreatitis aguda severa pronosticada?",
    "options": [
      "Dentro de las primeras 24-48 horas tras el ingreso",
      "A los 7 días de reposo gástrico",
      "Cuando inicie tránsito intestinal positivo",
      "Al resolver el dolor abdominal"
    ],
    "correctIndex": 0,
    "explanation": "La nutrición enteral temprana mejora la barrera intestinal y reduce la traslocación bacteriana.",
    "fisiopato": "El reposo intestinal atrofia los enterocitos y debilita las uniones estrechas, abriendo paso a la sepsis de origen entérico.",
    "clinicalPearl": "Use sonda nasogástrica o nasoyeyunal tempranamente si el paciente no tolera p.o.",
    "guideline": "AGA Clinical Guidelines on Management of Acute Pancreatitis.",
    "whyWrong": {
      "1": "Asociado a mayor riesgo de infección de la necrosis.",
      "2": "Criterio arcaico; los ruidos no son necesarios para nutrir.",
      "3": "El dolor no prohíbe la alimentación enteral."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-260",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "Ante un paciente con Cáncer de Páncreas avanzado en la cabeza (irresecable) que cursa con ictericia obstructiva indolora, ¿qué prótesis endoscópica biliar se recomienda preferentemente para el manejo paliativo?",
    "options": [
      "Stent metálico autoexpandible (SEMS) recubierto o parcialmente recubierto",
      "Stent plástico 10 French",
      "Colangiostomía percutánea externa",
      "Derivación bilio-digestiva quirúrgica"
    ],
    "correctIndex": 0,
    "explanation": "En paliación a largo plazo (sobrevida esperada > 3-4 meses), los SEMS tienen menor tasa de oclusión y necesidad de re-intervención.",
    "fisiopato": "El amplio diámetro (10mm) retrasa la formación de biofilm biliar en comparación con los 3mm (10 Fr) del stent plástico.",
    "clinicalPearl": "Los plásticos solo se prefieren si la sobrevida esperada es muy corta (< 3 meses) o si es pre-quirúrgico inmediato.",
    "guideline": "ESGE Guidelines: Biliary stenting.",
    "whyWrong": {
      "1": "Alta tasa de oclusión y colangitis a repetición temprana.",
      "2": "Reduce calidad de vida, solo se usa en falla endoscópica.",
      "3": "Mórbido e innecesario dado el éxito de la vía endoscópica actual."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-261",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "En ultrasonido endoscópico (EUS), la lesión quística mucinosa de la cola pancreática se caracteriza clásicamente por presentarse en mujeres, no comunicar con el conducto principal y poseer un estroma análogo ¿a qué tejido?",
    "options": [
      "Estroma de tipo ovárico",
      "Estroma mieloide",
      "Epitelio pseudoestratificado",
      "Estroma hepático"
    ],
    "correctIndex": 0,
    "explanation": "El Cistadenoma Mucinoso se define histológicamente por la presencia de tejido estromal de tipo ovárico rico en receptores hormonales.",
    "fisiopato": "Tiene potencial pre-maligno a diferencia del cistadenoma seroso.",
    "clinicalPearl": "Casi exclusivamente se da en mujeres (99%) de mediana edad, ubicadas en cuerpo o cola de páncreas.",
    "guideline": "International consensus guidelines 2012 / Fukuoka on IPMN/MCN.",
    "whyWrong": {
      "1": "No hallado en neoplasias quísticas mucinosas.",
      "2": "No es estromal.",
      "3": "Irrelevante."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-262",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "El hallazgo de una masa en la cabeza del páncreas con dilatación del conducto de Wirsung (signo del doble conducto asociado) y elevación de CA 19-9 a > 1000 U/mL en un adulto mayor sugiere fuertemente:",
    "options": [
      "Adenocarcinoma ductal de páncreas",
      "Pancreatitis autoinmune tipo 1",
      "Cistadenoma seroso",
      "Tumor neuroendocrino de páncreas"
    ],
    "correctIndex": 0,
    "explanation": "El adenocarcinoma ductal (85% de los tumores pancreáticos malignos) causa característicamente invasión local precoz y desmoplasia estenosante.",
    "fisiopato": "Al obstruir la desembocadura de los conductos intrapancreáticos en el ámpula, dilata en forma retrógrada tanto el Wirsung como el colédoco (\"Doble conducto\").",
    "clinicalPearl": "CA 19-9 puede elevarse discretamente (ej. < 100) en colestasia, pero valores extremos asientan el diagnóstico neoplásico.",
    "guideline": "NCCN Guidelines: Pancreatic Adenocarcinoma.",
    "whyWrong": {
      "1": "Puede simular una masa, pero CA 19-9 no suele cruzar los > 1000 U/mL, y presenta IgG4 alta.",
      "2": "Es una masa multiquística pequeña \"en panal de abejas\", benigna.",
      "3": "Suelen ser masas hipervasculares, bien delineadas, sin \"doble conducto\" típico."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-263",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "Durante la reanimación inicial por Pancreatitis Aguda severa en las primeras 24 hrs, ¿cuál meta de Ringer Lactato se considera \"terapia fluídica dirigida por objetivos\" (Goal-directed fluid therapy)?",
    "options": [
      "Diuresis > 0.5 - 1 ml/kg/h, disminución del BUN (nitrógeno ureico) y PAM > 65 mmHg",
      "Infusión ciega de 10 litros al día",
      "Mantener una frecuencia cardíaca < 60 lpm",
      "Diuresis de 3 ml/kg/h"
    ],
    "correctIndex": 0,
    "explanation": "La fluidoterapia agresiva pero balanceada debe revertir la hemoconcentración microvascular inicial sin causar edema pulmonar (sobrecarga de volumen excesiva).",
    "fisiopato": "El atrapamiento de volumen (tercer espacio) en el lecho peripancreático exige reanimación, pero el páncreas carente de cápsula verdadera se \"edematiza\" al igual que el pulmón si el aporte es excesivo.",
    "clinicalPearl": "Ringer Lactato es preferido sobre solución fisiológica pues causa menos acidosis hiperclorémica, que podría exacerbar el SIRS.",
    "guideline": "ACG/IAP Guidelines for Pancreatitis Fluid Resuscitation.",
    "whyWrong": {
      "1": "Ha demostrado aumentar el distrés respiratorio (SDRA) y presión intraabdominal.",
      "2": "No es una meta fisiológica realista para hipovolemia por SIRS.",
      "3": "Mucha orina sugiere sobrecarga masiva."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-264",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el tiempo máximo recomendado (ventana ideal) para realizar una endoscopia digestiva alta en un paciente con sangrado no variceal hemodinámicamente estable tras resucitación?",
    "options": [
      "Primeros 24 horas",
      "Primeras 6 horas",
      "A las 72 horas",
      "En la primera hora (ultra-precoz)"
    ],
    "correctIndex": 0,
    "explanation": "La endoscopia dentro de las 24 horas mejora los desenlaces. Hacerla de manera \"ultra precoz\" (< 6 horas) o en la primera hora no mejora la mortalidad y puede ser inseguro si el paciente no está bien reanimado.",
    "fisiopato": "La reanimación hemodinámica (volumen, transfusión) restaura la perfusión y es más urgente que la inspección del lumen gástrico.",
    "clinicalPearl": "Estabilice primero. La endoscopia en un paciente en shock hipovolémico severo sin vía aérea asegurada es altamente letal.",
    "guideline": "ACG Guidelines for Upper GI Bleeding.",
    "whyWrong": {
      "1": "Endoscopia precoz (<24h) es buena, pero la meta estricta de <6h no muestra superioridad poblacional.",
      "2": "Tardío, aumenta riesgo de resangrado silente.",
      "3": "Se asocia a mayores complicaciones asociadas a la sedación/hipovolemia en agudo."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-265",
    "topic": "hda",
    "difficulty": "Staff",
    "text": "En el manejo de una úlcera péptica Forrest Ib (sangrado en napa), ¿cuál de las siguientes terapias es el estándar actual?",
    "options": [
      "Terapia combinada: Epinefrina (inyección) + Terapia mecánica (clip) o térmica (coagulación)",
      "Solo terapia mecánica con clip",
      "Solo terapia térmica",
      "Inyección aislada de epinefrina"
    ],
    "correctIndex": 0,
    "explanation": "La inyección de epinefrina logra hemostasia transitoria inicial, facilitando el despliegue del clip o del catéter térmico definitivo.",
    "fisiopato": "La epinefrina produce vasoconstricción y taponamiento físico por volumen submucoso, pero su efecto desaparece rápídamente.",
    "clinicalPearl": "NUNCA deje una úlcera sangrante activa solo con inyección de epinefrina.",
    "guideline": "ASGE: The role of endoscopy in the management of non-variceal upper GI bleeding.",
    "whyWrong": {
      "1": "Adecuada, pero a menudo la sangre dificulta la visualización; la epinefrina es un coadyuvante muy útil.",
      "2": "Difícil bajo pozos de sangre activa.",
      "3": "Tasa de resangrado inaceptablemente alta si se usa como monoterapia."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-266",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "¿Qué marcador clínico/endoscópico define la \"Hemorragia Oculta de Origen Oscuro\"?",
    "options": [
      "Sangre microscópica en heces o anemia ferropénica sin síntomas visibles, con endoscopia alta y baja iniciales negativas",
      "Melena recurrente",
      "Vómitos en borra de café",
      "Hemorroides sangrantes sin dolor"
    ],
    "correctIndex": 0,
    "explanation": "El término requiere que no haya sangrado visible para el paciente y que los estudios de endoscopia estándar sean normales.",
    "fisiopato": "Frecuentemente el origen está en el intestino delgado (ej. angiodisplasias, tumor estromal gastrointestinal, enfermedad de Crohn intestinal).",
    "clinicalPearl": "El siguiente paso diagnóstico suele ser una cápsula endoscópica.",
    "guideline": "ACG Clinical Guideline: Small Bowel Bleeding.",
    "whyWrong": {
      "1": "Es hemorragia macroscópica u \"Overt\".",
      "2": "HDA manifiesta.",
      "3": "Diagnóstico colónico bajo evidente."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-267",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "Paciente con HDA severa (melena masiva, hipotensión). Su nivel de Hemoglobina al ingreso es de 13 g/dL. ¿Cómo se interpreta este laboratorio?",
    "options": [
      "Es un falso reconfortante; la caída de la Hb tarda 24-72 hrs en equilibrarse tras reanimación hídrica",
      "Indica que el sangrado ya se detuvo",
      "Descarta una hemorragia masiva",
      "Sugiere hemoconcentración por deshidratación leve"
    ],
    "correctIndex": 0,
    "explanation": "En el sangrado agudo, se pierde sangre total (plasma y glóbulos rojos). La concentración inicial (Hb) no cambia hasta que los fluidos extravasculares (o los aportados en resucitación) diluyen la sangre restante.",
    "fisiopato": "El hematocrito y la Hb no son marcadores directos del volumen de pérdida en la primera hora de una hemorragia mayor.",
    "clinicalPearl": "No retrase la transfusión en un paciente en shock hemorrágico solo porque la Hb inicial es \"normal\".",
    "guideline": "ATLS / Gastroenterology Core Principles.",
    "whyWrong": {
      "1": "Falso.",
      "2": "Falso, puede estar en shock exanguinante.",
      "3": "La pérdida de sangre total no produce hemoconcentración típica."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-268",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "Tras el fracaso de dos intentos de endoscopia terapéutica para el control de un sangrado ulceroso masivo, ¿cuál es la medida de rescate actual preferida?",
    "options": [
      "Angiografía percutánea con embolización transcatéter",
      "Cirugía de urgencia (gastrectomía parcial o sobrecostura)",
      "Escleroterapia masiva",
      "Uso de un stent metálico esofágico autoexpandible"
    ],
    "correctIndex": 0,
    "explanation": "La embolización por radiología intervencional tiene tasas de éxito altas con menor morbimortalidad que la cirugía abierta de urgencia en pacientes lábiles.",
    "fisiopato": "Se utiliza la oclusión arterial selectiva o supraselectiva (ej. arteria gastroduodenal) mediante coils o partículas.",
    "clinicalPearl": "Siempre considere mantener al paciente estabilizado con bolos de hemoderivados mientras se organiza la angiografía.",
    "guideline": "International consensus recommendations on the management of patients with nonvariceal upper gastrointestinal bleeding.",
    "whyWrong": {
      "1": "Históricamente era la opción, hoy se relega a cuando falla la embolización.",
      "2": "Riesgo inaceptable de perforación y necrosis de la pared.",
      "3": "Aprobado para várices esofágicas, no para úlceras duodenales o gástricas (el antro no permite su anclaje)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-269",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el mecanismo fisiopatológico principal de la diarrea acuosa masiva en el cólera (Vibrio cholerae)?",
    "options": [
      "La toxina CTx estimula irreversiblemente a la adenilato ciclasa (vía proteína Gs), aumentando el AMPc intracelular",
      "Destrucción directa del enterocito",
      "Inflamación de la submucosa (granulomas)",
      "Inactivación de las vellosidades intestinales (atrofia)"
    ],
    "correctIndex": 0,
    "explanation": "El exceso de AMPc provoca una apertura permanente de los canales de cloro (CFTR) y la inhibición de la absorción de sodio.",
    "fisiopato": "El paso masivo de Cl- a la luz intestinal arrastra Na+ y agua por gradiente osmótico y eléctrico (diarrea secretora pura).",
    "clinicalPearl": "La mucosa intestinal se mantiene histológicamente normal (sin invasión patógena).",
    "guideline": "Infectious Diseases / CDC.",
    "whyWrong": {
      "1": "Ningún daño estructural.",
      "2": "Es una diarrea no inflamatoria.",
      "3": "Mecanismo del rotavirus o enfermedad celiaca."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-270",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "En una infección por Salmonella enterica serotipo no tifoidea en un paciente inmunocompetente que cursa con diarrea leve a moderada sin fiebre, ¿cuál es el manejo antibiótico recomendado?",
    "options": [
      "No se recomienda tratamiento antibiótico de rutina",
      "Ciprofloxacino por 5 días",
      "Ceftriaxona intravenosa",
      "Metronidazol oral"
    ],
    "correctIndex": 0,
    "explanation": "La gastroenteritis por Salmonella no tifoidea en adultos sanos es generalmente autolimitada.",
    "fisiopato": "El uso de antibióticos en casos no complicados puede prologar el estado de portador fecal (excreción de la bacteria).",
    "clinicalPearl": "Se reserva antibióticos para: inmunodeprimidos, >50 años con enfermedad vascular severa severa, o bacteriemia sospechada.",
    "guideline": "IDSA Guidelines for the Diagnosis and Management of Infectious Diarrhea.",
    "whyWrong": {
      "1": "Aumenta el carrier state en casos leves.",
      "2": "Para casos severos de bacteriemia o tifoidea.",
      "3": "Para Giardia o C. difficile, ineficaz."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-271",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "De los siguientes factores asociados con la patogénesis de la infección por Clostridioides difficile, ¿cuál explica mejor la recurrencia frecuente de la enfermedad tras completar la terapia con vancomicina oral?",
    "options": [
      "Persistencia de esporas en el microbiota intestinal",
      "Resistencia antimicrobiana a la Vancomicina",
      "Toxinas encapsuladas",
      "Transmisión vertical"
    ],
    "correctIndex": 0,
    "explanation": "C. difficile forma esporas altamente resistentes a los antibióticos y a los desinfectantes alcohólicos.",
    "fisiopato": "Cuando el antibiótico inhibe las formas vegetativas, las esporas sobreviven. Cuando el nivel de antibiótico cae, germinan si la microbiota sana aún no ha repoblado el colon.",
    "clinicalPearl": "La vancomicina oral cura el 80% del primer episodio, pero 20-25% van a recurrir por la germinación de esporas.",
    "guideline": "IDSA/SHEA Guidelines on CDI.",
    "whyWrong": {
      "1": "La resistencia estricta in vivo es muy rara actualmente.",
      "2": "Las toxinas no se encapsulan, son proteínas secretadas que se degradan.",
      "3": "Vía de transmisión fecal-oral externa, no intra-huésped."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-272",
    "topic": "diarrea_aguda",
    "difficulty": "Subspecialist",
    "text": "En el Síndrome Hemolítico Urémico (SHU) secundario a E. coli productora de toxina Shiga (STEC / EHEC O157:H7), ¿cuál de las siguientes terapias antimicrobianas está recomendada?",
    "options": [
      "El uso de antibióticos está generalmente contraindicado",
      "Fluoroquinolonas",
      "Macrólidos de amplia penetración",
      "Aminoglucósidos solos"
    ],
    "correctIndex": 0,
    "explanation": "El tratamiento con inhibidores de síntesis de ADN (como quinolonas) o lisis celular favorece la liberación masiva del bacteriófago asociado a la toxina Shiga.",
    "fisiopato": "Al sentirse en estado de estrés (por el antibiótico), la bacteria aumenta la producción y diseminación de la toxina, empeorando el riesgo de daño renal (SHU).",
    "clinicalPearl": "Manejo es terapia de soporte y diálisis temprana si procede.",
    "guideline": "Infectious Diarrhea Management (IDSA).",
    "whyWrong": {
      "1": "Peligrosas (empeoran STEC).",
      "2": "Empeoran pronóstico renal.",
      "3": "Contraindicación empírica."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-273",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "Un joven que desayunó ensalada de patata y mayonesa presenta vómitos explosivos severos y calambres abdominales solo 3 horas después de comer. No tiene fiebre significativa. ¿Cuál es el agente etiológico más congruente con este modo de inicio fulminante?",
    "options": [
      "Staphylococcus aureus (Intoxicación alimentaria por enterotoxina preformada)",
      "E. coli enterotoxigénica (ETEC)",
      "Norovirus",
      "Shigella sonnei"
    ],
    "correctIndex": 0,
    "explanation": "Los periodos de incubación muy cortos (< 6 horas) son patognomónicos de intoxicación por toxinas preformadas en los alimentos.",
    "fisiopato": "S. aureus (y Bacillus cereus en arroz frito) produce enterotoxinas estables al calor; la toxina estimula directamente el centro del vómito del SNC vagomiméticamente.",
    "clinicalPearl": "El cuadro es eminentemente alto (náuseas/vómitos de inicio brusco) más que diarrea exudativa.",
    "guideline": "CDC Foodborne Outbreak guidelines.",
    "whyWrong": {
      "1": "Incubación > 1-3 días (diarrea del viajero).",
      "2": "Incubación 1-2 días (brotes virales en cruceros).",
      "3": "Diarrea inflamatoria/disentería, incubación de días."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-274",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "¿Cuál de los siguientes fármacos procinéticos se recomienda usar 30 a 120 minutos antes de la endoscopia en un paciente con sangrado digestivo alto agudo intenso, para mejorar la visualización?",
    "options": [
      "Eritromicina intravenosa (250 mg)",
      "Metoclopramida",
      "Domperidona",
      "Butilescopolamina"
    ],
    "correctIndex": 0,
    "explanation": "La eritromicina actúa como agonista del receptor de motilina, induciendo contracciones gástricas fuertes que vacían la sangre y coágulos del estómago al duodeno.",
    "fisiopato": "Altera el complejo motor migratorio, produciendo un barrido mecánico del lumen gástrico.",
    "clinicalPearl": "Estudios muestran que reduce significativamente la necesidad de una segunda endoscopia por mala visualización.",
    "guideline": "ACG/ASGE Guidelines for Non-Variceal Upper GI Bleeding.",
    "whyWrong": {
      "1": "Menos potente que la eritromicina para este fin específico.",
      "2": "Procinético oral débil, sin rol en sangrado agudo.",
      "3": "Es un antiespasmódico, empeoraría la estasis gástrica."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-275",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "Un paciente cirrótico tratado profilácticamente con betabloqueadores no selectivos presenta una hemorragia variceal aguda con hipotensión. ¿Qué se debe hacer con el betabloqueador (ej. Propranolol)?",
    "options": [
      "Suspenderlo inmediatamente durante el episodio de sangrado agudo y reanimación",
      "Mantener la misma dosis para prevenir resangrado",
      "Aumentar la dosis para reducir más la presión portal",
      "Cambiar inmediatamente a Carvedilol"
    ],
    "correctIndex": 0,
    "explanation": "En el contexto de shock hipovolémico o inestabilidad hemodinámica, los betabloqueadores anulan la respuesta simpática taquicárdica compensatoria.",
    "fisiopato": "Impiden que el corazón aumente su gasto en respuesta a la hipovolemia severa, aumentando la mortalidad aguda.",
    "clinicalPearl": "Una vez pasada la crisis (ventana típica de 2-5 días) y lograda la estabilidad, deben ser reiniciados con titulación cautelosa.",
    "guideline": "Baveno VII Consensus.",
    "whyWrong": {
      "1": "Altamente letal en shock.",
      "2": "Letal.",
      "3": "El Carvedilol tiene aún más efecto hipotensor sistémico (anti alfa-1)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-276",
    "topic": "hda",
    "difficulty": "Staff",
    "text": "En la clasificación de Forrest, ¿cómo se clasifica una úlcera con un vaso visible no sangrante, y cuál es su riesgo de resangrado si no se trata?",
    "options": [
      "Forrest IIa; riesgo ~40-50%",
      "Forrest Ib; riesgo ~55%",
      "Forrest IIb; riesgo ~20%",
      "Forrest III; riesgo <5%"
    ],
    "correctIndex": 0,
    "explanation": "El vaso visible protruyente o \"protuberancia pigmentada\" amerita tratamiento endoscópico debido a su alto riesgo de re-ruptura a corto plazo.",
    "fisiopato": "El vaso está taponado por un coágulo inestable u ocluido temporalmente por espasmo, que cede con la reactivación gástrica.",
    "clinicalPearl": "Frecuentemente el vaso \"visible\" es en realidad el pseudoaneurisma del vaso original en el piso de la úlcera.",
    "guideline": "Stigmata of recent hemorrhage (SRH) consensus.",
    "whyWrong": {
      "1": "Ib es sangrado activo en napa.",
      "2": "IIb es coágulo adherente.",
      "3": "III es úlcera con base limpia."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-277",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "Tras el control endoscópico exitoso de una úlcera péptica sangrante Forrest IIa, ¿cuál es el régimen recomendado de Inhibidores de Bomba de Protones?",
    "options": [
      "Bolo IV de 80 mg seguido de infusión de 8 mg/hr por 72 horas (o dosis altísimas intermitentes equivalentes)",
      "Pantoprazol 40 mg VO al día",
      "Omeprazol 20 mg VO al día",
      "Infusión continua por 24 horas y alta"
    ],
    "correctIndex": 0,
    "explanation": "Las terapias endoscópicas son vulnerables a la digestión ácida del trombo; la inhibición profunda del ácido (pH > 6 constante) estabiliza el coágulo.",
    "fisiopato": "La pepsina es inactiva a pH superior a 6, lo que previene la disolución prematura de las plaquetas del piso ulceroso.",
    "clinicalPearl": "La terapia oral en dosis altas (ej. 40 mg c/12h VO) está ganando evidencia como no inferior, pero el estándar histórico es la dosis IV.",
    "guideline": "ACG Guideline for Non-Variceal Upper GI Hemorrhage.",
    "whyWrong": {
      "1": "Insuficiente inhibición de ácido inicial.",
      "2": "Dosis estándar de mantención, no de crisis.",
      "3": "El mayor riesgo de resangrado es las primeras 72 horas."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-278",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "¿Cuál de los siguientes hallazgos define el Síndrome de Mallory-Weiss atípico o complicado que sí requiere terapia endoscópica?",
    "options": [
      "Desgarro con sangrado activo a chorro o vaso visible",
      "Desgarro en la unión escamocolumnar con base limpia (fibrina)",
      "Desgarro que se extiende superficialmente",
      "Desgarro múltiple pero sin estigmas de sangrado"
    ],
    "correctIndex": 0,
    "explanation": "Aunque ~90% de los desgarros de Mallory-Weiss se autolimitan y no requieren nada, aquellos con sangrado arterial activo requieren hemostasia (clip o inyección/térmica).",
    "fisiopato": "La laceración longitudinal atraviesa la mucosa hasta la submucosa, donde puede seccionar la red vascular.",
    "clinicalPearl": "Los clips metálicos son los más seguros para este síndrome debido a la delgadez de la pared esofágica en la unión.",
    "guideline": "Endoscopic management of GI bleeding.",
    "whyWrong": {
      "1": "No requiere terapia.",
      "2": "Si no sangra y no es profundo, no se toca.",
      "3": "Mismo caso."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-279",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "En pacientes con fístula aorto-entérica, ¿cuál es la presentación clínica clásica (\"Sangrado Heraldo\")?",
    "options": [
      "Un sangrado digestivo abrupto que se detiene espontáneamente, seguido de una exanguinación masiva horas o días después",
      "Dolor abdominal cólico sin hemorragia evidente",
      "Sangrado oculto con ferropenia a lo largo de los años",
      "Vómitos de alimento no digerido"
    ],
    "correctIndex": 0,
    "explanation": "Es crucial reconocer el sangrado heraldo para operar al paciente antes del episodio exanguinante letal.",
    "fisiopato": "El aneurisma aórtico (o la prótesis vascular) erosiona la tercera porción del duodeno; un coágulo sella temporalmente la pequeña primera fisura.",
    "clinicalPearl": "Todo paciente con HDA y antecedente de prótesis aórtica abdominal tiene fístula aortoentérica hasta demostrar lo contrario.",
    "guideline": "Vascular Surgery / GI Bleeding emergencies.",
    "whyWrong": {
      "1": "Suele haber hematoquecia/melena masiva seguida transitoriamente por shock.",
      "2": "Es una catástrofe aguda, no crónica silente.",
      "3": "No encaja en fisiopatología."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-280",
    "topic": "hda",
    "difficulty": "Staff",
    "text": "Ante el hallazgo incidental en una endoscopia de un coágulo adherente firme sobre una úlcera (Forrest IIb), tras lavarlo vigorosamente y no desprenderse, ¿qué conducta se prefiere hoy en centros especializados?",
    "options": [
      "Remover el coágulo con un asa/guillotina fina e inspeccionar la base para aplicar terapia, si el coágulo no sale con lavado abundante",
      "No tocarlo y solo dar IBP altas dosis",
      "Aplicar argón plasma encima del coágulo",
      "Realizar inyección de epinefrina directamente dentro del coágulo sin removerlo"
    ],
    "correctIndex": 0,
    "explanation": "Aunque históricamente no se tocaban, la remoción cuidadosa del coágulo (a menudo tras pre-inyectar epinefrina en la base) permite tratar el vaso oculto y reduce la tasa real de resangrado a <5%.",
    "fisiopato": "Un coágulo \"fresco\" protege, pero a menudo oculta una arteria pulsátil que sangrará al degradarse el coágulo.",
    "clinicalPearl": "Si decide no removerlo, el paciente debe quedarse estrictamente en IBP altas dosis, ya que el riesgo basal de resangrado supera el 20-30%.",
    "guideline": "International Consensus (Barkun et al).",
    "whyWrong": {
      "1": "Recomendable solo si el médico no es experto; si se tiene el expertise, removerlo y tratar es superior.",
      "2": "El coágulo es un aislante; quemarlo por arriba no coagulará el vaso subyacente.",
      "3": "No trata eficazmente el vaso ni coagula mecánicamente."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-281",
    "topic": "hda",
    "difficulty": "Fellow",
    "text": "El \"Rockall Score\" se utiliza para estratificar riesgo en HDA. ¿A diferencia del score de Glasgow-Blatchford, qué elemento clave incorpora el Rockall clínico (post-endoscópico)?",
    "options": [
      "Los estigmas endoscópicos de sangrado y tipo de lesión encontrados (ej. cáncer, úlcera)",
      "Los niveles de BUN séricos",
      "La presentación con melena vs hematemesis",
      "El nivel de hemoglobina"
    ],
    "correctIndex": 0,
    "explanation": "El score de Rockall completo calcula la probabilidad de resangrado y muerte incluyendo la propia endoscopia, mientras que Glasgow-Blatchford evalúa la necesidad de la endoscopia/intervención misma ex-ante.",
    "fisiopato": "El riesgo real del paciente depende inherentemente de si la HDA es por un cáncer sangrante vs una úlcera con base limpia.",
    "clinicalPearl": "Use el Blatchford pre-endoscopia (Urgencias) y el Rockall para decidir cuándo dar de alta de hospitalización post-endoscopia.",
    "guideline": "BSG UPPER GI BLEEDING.",
    "whyWrong": {
      "1": "Propio de Glasgow-Blatchford y AIMS65.",
      "2": "Propio de Glasgow-Blatchford.",
      "3": "Propio de Glasgow-Blatchford."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-282",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "La lesión de Cameron es una causa frecuentemente subdiagnosticada de anemia y sangrado oculto. ¿Dónde se localiza y cuál es su etiología?",
    "options": [
      "Son erosiones o úlceras lineales en el cuello de un saco de hernia hiatal, causadas por trauma mecánico respiratorio",
      "Son malformaciones arteriovenosas en el antro gástrico",
      "Son úlceras duodenales en la pared posterior",
      "Es tejido gástrico ectópico en el esófago cervical (Inlet Patch) que cursa con esofagitis"
    ],
    "correctIndex": 0,
    "explanation": "Durante el ciclo respiratorio, la fricción crónica del estómago deslizando a través del estrecho hiato diafragmático erosiona la mucosa.",
    "fisiopato": "Este trauma isquémico/mecánico crónico causa microhemorragias asintomáticas (anemia).",
    "clinicalPearl": "Suelen pasarse por alto en la retrovisión a menos que la hernia hiatal se inspeccione cuidadosamente.",
    "guideline": "Atlas of Gastrointestinal Endoscopy.",
    "whyWrong": {
      "1": "Esa descripción corresponde a GAVE (Watermelon stomach) o Dieulafoy dependiendo de la presentación.",
      "2": "No se relaciona a la hernia hiatal.",
      "3": "El Inlet Patch puede sangrar/doler, pero no se llama lesión de Cameron."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-283",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "Un brote de gastroenteritis aguda cursa con diarrea secretora intensa e inmediata que se resuelve en 48 horas en un grupo de pasajeros de crucero. ¿Cuál es el patógeno viral más probable y su método de evasión?",
    "options": [
      "Norovirus; sobrevive bien en superficies inertes y resiste el congelamiento y muchos desinfectantes comunes",
      "Rotavirus; evasión por mutación rápida de la espícula, típico en adultos mayores",
      "Astrovirus; se transmite por mosquitos en el barco",
      "Adenovirus; causa primariamente síntomas respiratorios graves antes de la diarrea"
    ],
    "correctIndex": 0,
    "explanation": "Norovirus causa más del 90% de los brotes epidémicos no bacterianos de gastroenteritis en todo el mundo.",
    "fisiopato": "Su altísima infectividad (<20 partículas virales requeridas) y estabilidad ambiental facilitan el ciclo oral-fecal o por vómitos aerosolizados.",
    "clinicalPearl": "En recintos cerrados (residencias, barcos), un paciente vomitando en áreas comunes produce altas tasas de ataque secundario.",
    "guideline": "CDC: Norovirus Clinical Overview.",
    "whyWrong": {
      "1": "Ocurre más en niños menores de 5 años.",
      "2": "Transmisión fecal-oral, no vector.",
      "3": "Los serotipos GI causan fiebre y diarrea prolongada (días) en niños principalmente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-284",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "¿Cuál es el antibiótico de elección para la profilaxis de Diarrea del Viajero en pacientes estrictamente necesarios (ej. Inmunodeprimidos severos, EII activa) que visitan áreas de altísimo riesgo?",
    "options": [
      "Rifaximina",
      "Ciprofloxacino en dosis semanales",
      "Amoxicilina-Clavulánico",
      "Bismuto subsalicilato como único agente validado"
    ],
    "correctIndex": 0,
    "explanation": "Si se justifica profilaxis estricta, la rifaximina no se absorbe, alterando mínimamente la flora sistémica mientras suprime E. coli.",
    "fisiopato": "Inhibe la síntesis de ARN bacteriano solo en el tracto GI.",
    "clinicalPearl": "Sin embargo, el consejo universal más recomendado en pacientes inmunocompetentes NO es la profilaxis antibiótica, sino el tratamiento empírico de auto-cuidado si enferman.",
    "guideline": "ISTM / ACG Travel Guidelines.",
    "whyWrong": {
      "1": "Aumenta el riesgo de portación de cepas multirresistentes.",
      "2": "Altera severamente el microbioma y predispone a C. difficile.",
      "3": "El Bismuto se puede usar (Pepto-Bismol profiláctico), pero es quimioprofilaxis blanda, no antibiótica profiláctica per se."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-285",
    "topic": "diarrea_aguda",
    "difficulty": "Subspecialist",
    "text": "En la infección aguda por Giardia lamblia, ¿cuál es el mecanismo principal de la esteatorrea que observan algunos pacientes prolongadamente?",
    "options": [
      "Aplanamiento de las microvellosidades del intestino proximal (duodeno/yeyuno) que bloquea la absorción de grasas",
      "Destrucción directa del páncreas exocrino",
      "Producción de una lipasa bacteriana inactivadora",
      "Invasión transmural que daña los linfáticos (Quilomicrones bloqueados)"
    ],
    "correctIndex": 0,
    "explanation": "El trofozoíto de la Giardia se adhiere firmemente a la mucosa duodenal mediante su disco suctor, reduciendo la superficie celular disponible y alterando las enzimas del ribete en cepillo.",
    "fisiopato": "Aunque no invade la capa submucosa (no es disentería), puede causar inflamación leve que altera la absorción de grasas y lactosa secundariamente.",
    "clinicalPearl": "Fuerte asociación en pacientes con deficit de IgA (agammaglobulinemia) ya que la IgA mucosa las repele normalmente.",
    "guideline": "Parasitology - Pathogenesis of Giardiasis.",
    "whyWrong": {
      "1": "La giardia no invade el tejido ni ataca el páncreas.",
      "2": "Mecanismo falso.",
      "3": "Mecanismo propio de la Enfermedad de Whipple o linfoma."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-286",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "¿Cuál de los siguientes patógenos entéricos se asocia clásicamente con una de las mayores frecuencias de Síndrome de Guillain-Barré postinfeccioso?",
    "options": [
      "Campylobacter jejuni",
      "Listeria monocytogenes",
      "Shigella dysenteriae",
      "Clostridioides difficile"
    ],
    "correctIndex": 0,
    "explanation": "Se postula que 1 de cada 1000 casos de Campylobacter jejuni desarrolla esta neuropatía por mimetismo molecular.",
    "fisiopato": "Los anticuerpos producidos contra el lipooligosacárido del Campylobacter atacan a los gangliósidos de los nervios periféricos del paciente.",
    "clinicalPearl": "A menudo el paciente se presenta en urgencia por parálisis ascendente arrefléxica y relata haber tenido diarrea \"hace una semana o dos\".",
    "guideline": "Neurology / Infectious Diseases consensus on GBS triggers.",
    "whyWrong": {
      "1": "Causa meningitis aguda / listeriosis en embarazadas.",
      "2": "Causa Síndrome Hemolítico Urémico (al igual que EHEC), pero menos GBS.",
      "3": "Se asocia a megacolon tóxico y colitis pseudomembranosa."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-287",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "En un paciente en la unidad de cuidados intensivos para nutrición enteral crónica, ¿cuál es el factor desencadenante más frecuente de diarrea \"aguda\" adquirida en el hospital, descartando infección?",
    "options": [
      "Diarrea osmótica por formulación enteral hiperosmolar y/o intolerancia a los carbohidratos sumada al uso de antibióticos empíricos alterando la flora",
      "Intoxicación aguda por vitamina A en la dieta",
      "Exceso de amilasa intravenosa o falla pancreática de novo",
      "Isquemia mesentérica transitoria"
    ],
    "correctIndex": 0,
    "explanation": "El tubo digestivo de un paciente en UCI a menudo tiene pérdida funcional, atrofiando el ribete en cepillo y bajando la lactasa/sacarasa, haciéndolos intolerantes a cargas hiperosmolares repentinas.",
    "fisiopato": "Además, los excipientes líquidos de las medicaciones (ej. sorbitol en jarabes administrados por SNG) actúan como catárticos.",
    "clinicalPearl": "Antes de diagnosticar C. diff, verifique siempre la cantidad de sorbitol en las medicinas líquidas orales que recibe el paciente.",
    "guideline": "ASPEN/ESPEN Guidelines on Enteral Nutrition.",
    "whyWrong": {
      "1": "Toxicidad rara en aguda.",
      "2": "Mecanismo inventado.",
      "3": "Diagnóstico severo mucho menos frecuente que la alteración osmótica pura."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-288",
    "topic": "diarrea_aguda",
    "difficulty": "Subspecialist",
    "text": "¿Cual de las siguientes terapias suplementarias ha demostrado en metaanálisis acortar levemente la duración de la diarrea aguda infecciosa pediátrica, y está incluida en las recomendaciones de la OMS?",
    "options": [
      "Suplementación con Zinc",
      "Vitamina C a altas dosis",
      "Loperamida profiláctica",
      "Vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "El zinc acorta la duración del episodio y reduce el volumen de deposiciones en niños en áreas endémicas.",
    "fisiopato": "El zinc promueve la regeneración del epitelio intestinal dañado y aumenta las enzimas del ribete en cepillo.",
    "clinicalPearl": "Se da por 10 a 14 días incluso después de que cese la diarrea para restaurar las reservas corporales.",
    "guideline": "WHO Guidelines for the clinical management of childhood diarrhoea.",
    "whyWrong": {
      "1": "No tiene evidencia fuerte.",
      "2": "La Loperamida está estrictamente contraindicada en diarrea aguda en la infancia (riesgo de megacolon, íleo o toxicidad de SNC).",
      "3": "No acorta la diarrea aguda (aunque es importante en inmunidad general a largo plazo)."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-289",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "El examen directo \"Leucocitos Fecales\" fue tradicionalmente utilizado para diferenciar diarreas inflamatorias de las no inflamatorias. ¿Por qué ha sido progresivamente reemplazado en panel clínico avanzado?",
    "options": [
      "Por la Lactoferrina y la Calprotectina fecal debido a su mayor estabilidad y sensibilidad a la neutrofilia intestinal",
      "Porque todas las diarreas agudas son de manejo igual",
      "Por el coprocultivo que lo desplazó en urgencia",
      "Porque el test de Guayaco los reemplazó"
    ],
    "correctIndex": 0,
    "explanation": "Los leucocitos en las heces se degradan muy rápido (mala sensibilidad), requiriendo lectura casi inmediata al microscopio.",
    "fisiopato": "La calprotectina y lactoferrina son proteínas estructurales estables de los gránulos de los neutrófilos, lo que permite detección ELISA independiente de células intactas.",
    "clinicalPearl": "Hoy en día, un panel PCR múltiplex gastrointestinal reemplaza frecuentemente el screening de disentería vs acuoso en pacientes hospitalizados.",
    "guideline": "ACG Guidelines: Infectious Diarrhea diagnostics.",
    "whyWrong": {
      "1": "Terapia difiere para evitar sepsis u SHU.",
      "2": "El coprocultivo demora 72 hrs, inútil para screening rápido.",
      "3": "El guayaco detecta sangre oculta, no leucocitos (aunque se solapan en la colitis)."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-290",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "Ante un paciente con diagnóstico reciente de SIDA (con CD4 <50) que cursa con diarrea acuosa profunda e intratable (litros al día), ¿cuál es el diagnóstico oportunista más temido en el intestino delgado?",
    "options": [
      "Infección por Cryptosporidium parvum o Cystoisospora belli",
      "Colitis por CMV aislada en yeyuno",
      "Histoplasmosis gástrica",
      "Infección por P. jirovecii intestinal"
    ],
    "correctIndex": 0,
    "explanation": "Los coccidios intestinales como Cryptosporidium causan diarreas severas, crónicas o refractarias parecidas al cólera en pacientes con deterioro inmunológico.",
    "fisiopato": "En pacientes sanos forman cuadros autolimitados de 1-2 semanas, pero sin CD4 no hay aclaración parasitaria del enterocito.",
    "clinicalPearl": "El diagnóstico se hace pidiendo Baciloscopia seriada de heces con Tinción de Ziehl-Neelsen modificada.",
    "guideline": "HIV / Opportunistic Infections guidelines (NIH).",
    "whyWrong": {
      "1": "CMV ataca primariamente el colon (ulceraciones/sangrado) y excepcionalmente el eśofago, menos típico diarrea acuosa alta primaria.",
      "2": "Suele ser diseminada pulmonar primero.",
      "3": "Solo afecta tracto respiratorio en VIH."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-291",
    "topic": "diarrea_aguda",
    "difficulty": "Subspecialist",
    "text": "Paciente sano presenta un cuadro disentérico agudo (sangre, mucosidad, gran pujo y tenesmo). Se detecta Entamoeba histolytica. Si no se trata, ¿cuál es la complicación extraintestinal clásica más frecuente?",
    "options": [
      "Absceso hepático amebiano",
      "Meningoencefalitis amebiana primaria",
      "Miopatía severa de extremidades inferiores",
      "Neumonía eosinofílica"
    ],
    "correctIndex": 0,
    "explanation": "Los trofozoítos de E. histolytica invaden la submucosa, ingresan al sistema venoso portal y viajan al hígado.",
    "fisiopato": "Producen proteasas y lisan neutrófilos, licuefaciendo el tejido hepático y creando el clásico absceso que contiene pus color \"pasta de anchoas\".",
    "clinicalPearl": "El absceso amebiano hepático suele curarse con Metronidazol y RARA VEZ debe puncionarse para drenaje.",
    "guideline": "Infectious Diseases / Tropical Medicine.",
    "whyWrong": {
      "1": "Causada por Naegleria fowleri, no E. histolytica.",
      "2": "Complicación de parasitosis tisulares como Triquinosis, no la ameba.",
      "3": "Más común en nematodos como Ascaris (Sd. de Loeffler)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-292",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "Durante la preparación pre-operatoria de un paciente hospitalizado, desarrolla fiebre, dolor cólico y leucocitosis (25.000) seguida por diarrea. La toxina C. difficile es positiva. Un TAC muestra dilatación de colon transverso de 9 cm. Esto indica:",
    "options": [
      "Megacolon Tóxico, y existe riesgo inminente de perforación colónica",
      "Un cuadro pre-tóxico esperable, manejable con Loperamida",
      "Que debemos iniciar colonoscopia para confirmar el diagnóstico y descomprimir el colon",
      "Una variante leve de la C. diff"
    ],
    "correctIndex": 0,
    "explanation": "El Megacolon Tóxico es una emergencia quirúrgica. Combinado temporalmente con signos de shock sepsis impone consulta al cirujano (colectomía total o subtotal).",
    "fisiopato": "La inflamación paralisa el músculo liso y adelgaza la pared dilatándola al máximo, con altísimo riesgo de ruptura.",
    "clinicalPearl": "La colectomía nunca debe retrasarse intentando un manejo o descompresión si el paciente presenta inestabilidad progresiva o peritonitis inminente.",
    "guideline": "ASCRS Guidelines for the management of C. difficile infection.",
    "whyWrong": {
      "1": "La Loperamida puede emporar la parálisis muscular y acelerar la pared e íleo y el tóxico.",
      "2": "Una colonoscopia en un megacolon tóxico está CONTRAINDICADA por el enorme riesgo de perforación por insuflación de gas.",
      "3": "Es la variante fulminante de C. diff, fatalidad altísima."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-293",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "¿Cuál es el mecanismo fisiopatológico primario más frecuente documentado en pacientes con Enfermedad por Reflujo Gastroesofágico (ERGE) no complicada?",
    "options": [
      "Relajaciones transitorias del esfínter esofágico inferior (TLESRs)",
      "Hipotensión basal permanente del EEI (< 10 mmHg)",
      "Hernia hiatal gigante",
      "Trastorno del vaciamiento gástrico (gastroparesia)"
    ],
    "correctIndex": 0,
    "explanation": "La mayoría de los episodios de reflujo ocurren durante relajaciones bruscas, prolongadas y no inducidas por la deglución del EEI, permitiendo el escape de contenido gástrico.",
    "fisiopato": "Las TLESRs son un reflejo vagovagal originado por la distensión gástrica que fisiológicamente permite el eructo.",
    "clinicalPearl": "Fármacos como el Baclofeno (agonista GABA-B) pueden disminuir las TLESRs, pero sus efectos adversos limitan su uso clínico frecuente.",
    "guideline": "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease.",
    "whyWrong": {
      "1": "Solo una minoría de pacientes tiene un EEI perennemente hipotenso.",
      "2": "Agrava la ERGE pero no todos la tienen.",
      "3": "Puede coexistir pero es un factor secundario, no el mecanismo principal en la mayoría."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-294",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "En un paciente con síntomas típicos de ERGE (pirosis y regurgitación) que no responde a IBP en doble dosis durante 8 semanas, la endoscopia alta es normal. ¿Cuál es el siguiente paso diagnóstico recomendado?",
    "options": [
      "pH-impedanciometría de 24 horas sin interrumpir la terapia con IBP",
      "pH-metría convencional de 24 horas tras suspender el IBP por 7 días",
      "Manometría esofágica de alta resolución aislada",
      "Ensayo diagnóstico con Vonoprazan (P-CAB)"
    ],
    "correctIndex": 0,
    "explanation": "Para evaluar síntomas refractarios en pacientes YA diagnosticados o con alta sospecha bajo IBP, el estudio DEBE realizarse CON la medicación (on-therapy) usando impedanciometría para detectar reflujo no ácido o débilmente ácido.",
    "fisiopato": "El IBP suprime el ácido, pero el volumen del reflujo líquido/gaseoso persiste, causando síntomas por distensión o hipersensibilidad (reflujo no ácido).",
    "clinicalPearl": "Si nunca hubo evidencia objetiva previa de ERGE (endoscopia normal inicial), se prefiere hacer la pH-metría SIN IBP para confirmar/descartar la enfermedad de base.",
    "guideline": "Lyon Consensus 2.0 on the diagnosis of GERD.",
    "whyWrong": {
      "1": "Se prefiere la pH-impedancia para el reflujo no ácido on-therapy.",
      "2": "La manometría evalúa la motilidad, no documenta episodios de reflujo.",
      "3": "No aportará un diagnóstico etiológico en la refractariedad."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-295",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "Según la Clasificación de Los Ángeles, ¿qué grado de esofagitis endoscópica constituye evidencia diagnóstica definitiva e irrefutable de ERGE que no requiere pruebas adicionales (pH-metría) para su confirmación?",
    "options": [
      "Grados C y D",
      "Sólo Grado D",
      "Grados B, C y D",
      "Grados A, B, C y D"
    ],
    "correctIndex": 0,
    "explanation": "La esofagitis LA Grado C y D son pruebas definitivas de ERGE. La Grado A y B son hallazgos considerados insuficientes (borderline) para un diagnóstico definitivo sin síntomas claros o monitoreo de pH, dado que pueden verse en personas asintomáticas o ser transitorias.",
    "fisiopato": "El compromiso de más de un pliegue mucoso (Grado C) o circunferencial (Grado D) implica una falla severa de la barrera antirreflujo y un clearence esofágico deteriorado.",
    "clinicalPearl": "Pacientes con LA Grado C o D requieren IBP de mantenimiento a largo plazo para prevenir estenosis o esófago de Barrett.",
    "guideline": "Lyon Consensus 2.0 on the diagnosis of GERD.",
    "whyWrong": {
      "1": "La Grado C también es conclusiva.",
      "2": "La Grado B requiere evidencia adjunta según el Consenso de Lyon 2.0.",
      "3": "La Grado A no es evidencia concluyente."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-296",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "El Esófago de Barrett es una complicación temida del ERGE crónico. ¿Cúal es la condición histológica sine qua non para confirmar su diagnóstico en las biopsias esofágicas distales según las guías americanas (ACG)?",
    "options": [
      "Presencia de metaplasia intestinal especializada con células caliciformes",
      "Presencia de metaplasia gástrica (cardial o fúndica)",
      "Infiltración de neutrófilos en la lámina propia",
      "Hiperplasia de la capa basal >15%"
    ],
    "correctIndex": 0,
    "explanation": "En Norteamérica (ACG), el Barrett requiere metaplasia intestinal (células caliciformes). La metaplasia gástrica sin intestinalización no confiere el mismo riesgo medible de adenocarcinoma.",
    "fisiopato": "La mucosa escamosa es reemplazada por tejido columnar resistente al ácido y a los ácidos biliares, lo cual predispone a la cascada metaplasia-displasia-adenocarcinoma.",
    "clinicalPearl": "En muchas guías europeas (BSG) y japonesas, la sola presencia de cualquier mucosa columnar en el esófago se considera Barrett, pero en EEUU se exige la metaplasia intestinal.",
    "guideline": "ACG Clinical Guidelines for Diagnosis and Management of Barrett’s Esophagus.",
    "whyWrong": {
      "1": "No basta para el diagnóstico en Norteamérica.",
      "2": "Indica esofagitis aguda activa, no Barrett.",
      "3": "Indica esofagitis crónica, no Barrett."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-297",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "Una paciente embarazada cursando su 2do trimestre consulta por pirosis severa intratable con cambios dietéticos. ¿Cuál es la terapia farmacológica de primera y segunda línea más segura?",
    "options": [
      "Antiácidos con alginatos (suplementarios) seguidos de IBP si no hay respuesta (Omeprazol es categoría B equivalente/seguro)",
      "Misoprostol",
      "Cirugía de Nissen en el segundo trimestre",
      "Bicarbonato de sodio a altas dosis"
    ],
    "correctIndex": 0,
    "explanation": "Los alginatos (que forman una balsa física sobre el bolsillo ácido) son muy seguros. Si fallan, el uso de Omeprazol o Pantoprazol durante el embarazo ha demostrado ser seguro y no teratogénico.",
    "fisiopato": "La progesterona relaja el EEI y disminuye el vaciamiento gástrico, sumado al aumento de presión intraabdominal por el feto.",
    "clinicalPearl": "El bolsillo ácido postprandial flota sobre el quimo alimentario; los alginatos capturan este ácido y evitan su entrada al esófago.",
    "guideline": "ACG Clinical Guideline / FDA Pregnancy Categories.",
    "whyWrong": {
      "1": "El Misoprostol es oxitócico y abortivo (categoría X).",
      "2": "Nunca está indicada en el embarazo por riesgo quirúrgico/fetal sin antes manejo médico pleno.",
      "3": "Causa alcalosis metabólica e hipernatremia en la madre y el feto si se usa rutinariamente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-298",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "Al interpretar una pH-impedanciometría para evaluar \"Hipersensibilidad al Reflujo\", ¿qué métricas deben estar presentes para establecer el diagnóstico rigurosamente?",
    "options": [
      "Tiempo de exposición al ácido (AET) NORMAL (< 4%) y un Índice Sintomático (SI) o Probabilidad de Asociación Sintomática (SAP) POSITIVO",
      "AET ANORMAL (> 6%) con SAP positivo",
      "AET NORMAL (< 4%) con SAP negativo",
      "AET ANORMAL pero sin relación sintomática"
    ],
    "correctIndex": 0,
    "explanation": "La Hipersensibilidad al Reflujo se da cuando la cantidad de reflujo cae en rangos fisiológicos normales, pero cada episodio que ocurre dispara un síntoma en el paciente (SAP/SI positivo).",
    "fisiopato": "Demuestra nervios aferentes esofágicos sensibilizados, a menudo manejables con neuromoduladores (ej. antidepresivos tricíclicos o ISRS) más que con cirugía o incremento de IBP.",
    "clinicalPearl": "Si el AET es < 4% y el SAP/SI son negativos, el diagnóstico es Pirosis Funcional.",
    "guideline": "Rome IV Criteria for Esophageal Disorders.",
    "whyWrong": {
      "1": "Es el diagnóstico de ERGE verdadero (no hipersensibilidad funcional pura).",
      "2": "Es el diagnóstico de Pirosis Funcional.",
      "3": "Es ERGE asintomático o el hallazgo clásico, sin componente funcional definitorio."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-299",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "¿Cuál es un requerimiento absolutamente crítico y obligatorio PREVIO a someter a un paciente a una Funduplicatura de Nissen por ERGE refractario?",
    "options": [
      "Realizar una Manometría Esofágica de Alta Resolución (HRM)",
      "Realizar una pH-metría intraoperatoria",
      "Dar un curso de antibióticos para H. pylori",
      "Tomar biopsias de duodeno"
    ],
    "correctIndex": 0,
    "explanation": "La manometría (HRM) es MANDATORIA antes de una cirugía antirreflujo para descartar trastornos motores mayores (Acalasia camuflada como ERGE, Esclerodermia o Aperistalsis severa).",
    "fisiopato": "Si el cuerpo esofágico carece de peristalsis contráctil (ej. esclerodermia o espasmo distal ausente), la funduplicatura total de 360 grados actuará como un muro infranqueable, causando disfagia postoperatoria severa permanente.",
    "clinicalPearl": "En presencia de motilidad inefectiva severa, los cirujanos pueden optar por funduplicaturas parciales (ej. Toupet 270 grados) o incluso desestimar la cirugía.",
    "guideline": "SAGES guidelines for the surgical treatment of GERD.",
    "whyWrong": {
      "1": "Inexistente clínicamente en la rutina prequirúrgica obligatoria; el pH ya debe estar documentado.",
      "2": "Erradicar H. pylori no es mandatorio en ERGE.",
      "3": "Descarta celiaquía pero no es necesario pre-reflujo quirúrgico."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-300",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "Los Bloqueadores de Ácido Competitivos de Potasio (P-CABs), como el Vonoprazan, han introducido ventajas sobre los IBPs tradicionales en el manejo del ERGE y erradicación de H. pylori. ¿Cuál es su principal ventaja farmacodinámica?",
    "options": [
      "Un inicio de acción mucho más rápido (suprime el ácido al máximo el primer día) y un efecto más duradero independientemente de las comidas",
      "Su unión covalente e irreversible a la bomba de protones",
      "Menor riesgo de hipergastrinemia crónica",
      "Ausencia total de interacción con el sistema Citocromo P450"
    ],
    "correctIndex": 0,
    "explanation": "Los P-CABs alcanzan la concentración inhibitoria máxima rápidamente al no requerir activación en medio ácido, y bloquean reversiblemente el canal de potasio de la bomba H+/K+ ATPasa.",
    "fisiopato": "Los IBP clásicos requieren de 3 a 5 días para alcanzar su concentración en equilibrio o steady state perdiendo su eficacia nocturna. El Vonoprazan lo logra en la primera toma.",
    "clinicalPearl": "El Vonoprazan es extremadamente útil en esofagitis severa LA C/D y en H. pylori rebelde al proveer pH > 6 constante.",
    "guideline": "Recent FDA Approvals / AGA Clinical Updates.",
    "whyWrong": {
      "1": "Ese es el mecanismo de los IBP (unión a cisteínas). Los P-CABs son uniones reversibles.",
      "2": "Tienen igual o ligeramente mayor hipergastrinemia (gastrina sérica muy alta).",
      "3": "Tienen algunas interacciones hepáticas (ej. CYP3A4)."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-301",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "Pacientes ancianos en terapia prolongada (años) con IBP reportan síntomas musculares, tetania leve y arritmias incidentales. ¿Qué trastorno de laboratorio específico y poco reportado debe sospechar de inmediato asociado estrictamente a este fármaco?",
    "options": [
      "Hipomagnesemia profunda secundaria a pérdida intestinal",
      "Hipercalcemia fulminante",
      "Hipertrigliceridemia grave",
      "Baja saturación de Transferrina por mala absorción de hierro hemo"
    ],
    "correctIndex": 0,
    "explanation": "El uso crónico de IBP (generalmente > 1 año) puede causar hipomagnesemia profunda y potencialmente mortal debido a la inhibición del transportador TRPM6/7 en el intestino delgado.",
    "fisiopato": "Esta mala absorción induce niveles bajos de Magnesio sérico que no responden siempre a la suplementación oral y requiere suspender el IBP.",
    "clinicalPearl": "Todo paciente con espasmos musculares o arritmias bajo IBP debe tener el Magnesio medido. Puede causar de rebote hipocalcemia e hipopotasemia.",
    "guideline": "FDA Drug Safety Communication on PPIs.",
    "whyWrong": {
      "1": "Causa lo opuesto: hipocalcemia que acompaña a la hipomagnesemia.",
      "2": "Infundado.",
      "3": "El IBP afecta poco la absorción de hierro total a nivel clínico grave en poblaciones asintomáticas."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-302",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "El \"Índice Post-Reflujo de Deglución Primaria\" (PSPW index) en la pH-impedanciometría es una métrica novedosa que refleja:",
    "options": [
      "La integridad del aclaramiento (clearence) químico esofágico estimulado por el reflujo",
      "La cantidad de bilis que refluía hacia el esófago",
      "El número de ondas anti-peristálticas",
      "La relajación del esfínter superior"
    ],
    "correctIndex": 0,
    "explanation": "El PSPW (post-reflux swallow-induced peristaltic wave) analiza si, después de un episodio de reflujo, ocurre una deglución secundaria en los siguientes 30 segundos.",
    "fisiopato": "La deglución post-reflujo arrastra la saliva rica en bicarbonato para neutralizar el ácido remanente en la mucosa. Un PSPW bajo (< 61%) implica un reflejo de \"lavado esofágico\" deficiente.",
    "clinicalPearl": "Junto a la Impedancia Basal Nocturna Media (MNBI), son métricas sumamente útiles en diagnósticos borderline de ERGE.",
    "guideline": "Lyon Consensus 2.0 (Adjunctive metrics).",
    "whyWrong": {
      "1": "Esto se detectaba históricamente con Bilitec.",
      "2": "Término incorrecto, no existe \"anti-peristalsis\" habitual salvo vómito.",
      "3": "El EEI, no el EES, es clave aquí."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-303",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "¿Cuál es el síntoma extraesofágico atípico más fuertemente probado y correlacionado causalmente con el ERGE (\"Laringofaríngeo\")?",
    "options": [
      "Tos crónica asmatiforme no alérgica (peor de noche)",
      "Ronquera matinal de evolución aguda (< 1 semana)",
      "Otitis media a repetición en adultos",
      "Sensación de ardor lingual exclusivo"
    ],
    "correctIndex": 0,
    "explanation": "El ERGE es una de las 3 causas principales de tos crónica, junto al goteo postnasal (rinitis) y la hiperreactividad bronquial (asma variante tos).",
    "fisiopato": "Ocurre por dos vías: microaspiración directa de ácido al árbol traqueobronquial (irritación química) O el reflejo vagal inducido por el ácido que irrita el esófago distal (arco reflejo túrdigo).",
    "clinicalPearl": "El ensayo empírico es el doble de dosis de IBP por 8-12 semanas ANTES de descartarlo. La ronquera matutina (disfonía) también es clásica, pero evolución crónica, no aguda.",
    "guideline": "CHEST Guideline / ACG extraesophageal GERD.",
    "whyWrong": {
      "1": "La disfonía del ERGE es silente y crónica, no aguda (eso sugiere causa viral o abuso vocal reciente).",
      "2": "Complicación rarísima y mal probada.",
      "3": "El síndrome de boca urente (burning mouth) no se ha validado consistentemente como síntoma de reflujo."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-304",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "Las Hernias de Hiato tipo IV se caracterizan específicamente por:",
    "options": [
      "Tener otro órgano intraabdominal (como colon, bazo o intestino) herniado a través del defecto del hiato en el tórax",
      "Herniación por deslizamiento puro del cardias",
      "Herniación paraesofágica solo del fondo gástrico",
      "Una hernia estrangulada e isquémica"
    ],
    "correctIndex": 0,
    "explanation": "Tipos: I (deslizamiento); II (paraesofágica pura, EEI in situ); III (Mixta: EEI y fondo deslizados); IV (Mixta masiva con otros órganos).",
    "fisiopato": "En la Tipo IV, el defecto diafragmático es colosal y la presión abdominal empuja estructuras colonicas completas (principalmente transverso o epiplón) al mediastino.",
    "clinicalPearl": "Cualquier hernia tipo III severa o IV tiene inminente indicación quirúrgica antes de causar vólvulos gástricos, isquemia, o perforación en el tórax.",
    "guideline": "SAGES Guidelines for Hiatal Hernia.",
    "whyWrong": {
      "1": "Es la Tipo 1.",
      "2": "Es la Tipo 2 y 3.",
      "3": "Representa una complicación aguda de cualquiera de ellas, no una categoría de clasificación anatómica basal."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-305",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "Durante la endoscopia de rutina se encuentra en el cuerpo bajo un esófago con Anillo de Schatzki. El paciente reporta episodios esporádicos de \"impactación alimentaria\" con carne. ¿Cuál es el manejo preferido inmediato?",
    "options": [
      "Dilatación con balón de gran calibre o bujías de Savary seguida de IBP crónico",
      "Inyección endoscópica de corticoides en el anillo",
      "Cirugía de funduplicatura con remoción del anillo",
      "Biopsiar extensamente la mucosa normal (pensando en EoE) y no dilatar el anillo"
    ],
    "correctIndex": 0,
    "explanation": "El anillo de Schatzki (anillo mucoso esofágico inferior, B-ring) es patognomónico de daño crónico por ácido no detectado en transición Z, y responde excelentemente a la dilatación para fracturarlo mecánicamente.",
    "fisiopato": "Es un tejido cicatricial hipertrófico y simétrico que causa estenosis circunferencial.",
    "clinicalPearl": "La regla de oro: después de dilatar, se debe dejar IBP crónico empírico al paciente para evitar recaída. A los jóvenes con anillos \"parecidos/estriados\" SIEMPRE se les toma biopsias en cuerpo/tercio proximal para EoE antes de asumir que es solo Schatzki.",
    "guideline": "ASGE Eosinophilic Esophagitis and Benign Strictures.",
    "whyWrong": {
      "1": "Se usan corticoides inyectados en la estenosis péptica refractaria compleja larga, no en un simple anillo membranoso mucosal.",
      "2": "Exagerado para anillo fibroso simple.",
      "3": "Sí se DEBE dilatar. Biopsiar para descartar EoE también es correcto, pero la dilatación es necesaria para resolver el cuadro clínico obstructivo subyacente de impactación."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-306",
    "topic": "erge",
    "difficulty": "Subspecialist",
    "text": "En esófago de Barrett documentado, la Displasia de Alto Grado (HGD) y el Adenocarcinoma intramucoso (T1a) no ulcerados y confinados, ¿cuál es el estándar terapéutico de remoción actual pre-cirugía?",
    "options": [
      "Resección Endoscópica Mucosa (EMR) focal de la lesión seguida de Ablación por Radiofrecuencia (RFA) del Barrett residual",
      "Esofagectomía total por abordaje de Ivor Lewis",
      "Solo coagulación con gas Argón (APC)",
      "Quimio y Radioterapia neoadyuvante (CROSS trial)"
    ],
    "correctIndex": 0,
    "explanation": "La terapia de erradicación endoscópica (EET) previene la amputación del esófago en pacientes con cáncer mucoso temprano (T1a).",
    "fisiopato": "El riesgo de linfoadenectomía (metástasis a nódulos locales) para pT1a está confinado a 1-2%, por tanto la resección en bloque de la mucosa cura el cáncer, y el RFA trata el terreno pro-metaplásico circundante (\"field effect\").",
    "clinicalPearl": "Si el tumor invade la capa submucosa pT1b profunda (sm2 o sm3), el riesgo linfático sube a > 20% y ya NO ES CURATIVO lo endoscópico rutinario (va a cirugía).",
    "guideline": "ACG/ASGE Guidelines for management of Barrett’s esophagus.",
    "whyWrong": {
      "1": "Injustificado por morbimortalidad al ser T1a curable endoscópicamente.",
      "2": "El Argón no permite obtener tejido histológico curativo para asegurar bordes, es ciego.",
      "3": "El trial CROSS es para cáncer invasivo avanzado (T2 en adelante). T1 va solo a cirugía o endoscopia curativa."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-307",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "¿Cual de las siguientes terapias intervencionistas endoscópicas recientes para el ERGE consiste en insertar un anillo de imanes alrededor del EEI mediante cirugía laparoscópica?",
    "options": [
      "Procedimiento quirúrgico LINX (Aumento del esfínter magnético)",
      "Funduplicatura Transoral sin Incisión (TIF 2.0)",
      "Radiofrecuencia (Procedimiento STRETTA)",
      "Terapia endoscópica con inyección de polímeros"
    ],
    "correctIndex": 0,
    "explanation": "El LINX usa una cadena de titanio con centro magnético; la fuerza de unión de los imanes aumenta la presión basal reposo del EEI pero cede a la alta presión de la deglución y paso del bolo.",
    "fisiopato": "Corrige la hipotensión del esfínter inferior sin crear el bloqueo anatómico total y desfavorable al eructo/emesis que hace el Nissen.",
    "clinicalPearl": "Tienen una limitante notoria: pacientes quedan formalmente e inicialmente restringidos de acceder a Resonancias Magnéticas nucleares intensas (aunque con modelos modernos <1.5T existe condicionalidad).",
    "guideline": "SAGES Guidelines for GERD.",
    "whyWrong": {
      "1": "TIF se realiza vía boca usando un endoscopio y suturas plásticas para formar una válvula con el tejido gástrico, pero no usa imanes ni laparoscopia.",
      "2": "Usa una sonda térmica quemando, creando cicatriz en EEI.",
      "3": "Poco probada históricamente (Enteryx) retirada del mercado."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-308",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "Paciente con síntomas atípicos referidos a la vía respiratoria que ocurren principalmente DE NOCHE durante el decúbito. Ud. sospecha de reflujo nocturno de grandes volúmenes y del receso gástrico. ¿Qué consejo anatómico no farmacológico para mejorar esto tiene mejor respaldo bibliográfico?",
    "options": [
      "Elevar la cabecera de la cama 15-20 cm y acostarse recostado estricto sobre el decúbito lateral IZQUIERDO",
      "Acostarse en decúbito ventral (boca abajo) sobre tabla dura",
      "Dormir sobre el Decúbito Lateral DERECHO",
      "Acostarse sin elevar cabecera para facilitar el vaciamiento antral normal"
    ],
    "correctIndex": 0,
    "explanation": "El decúbito lateral izquierdo deja al estómago colgando debajo de la unión gastroesofágica (anatómicamente orientada a la derecha). Esto mantiene el reservorio gástrico lleno de líquido alejado de la boca del cardias.",
    "fisiopato": "Si el paciente duerme sobre el decúbito derecho, el contenido gástrico baña directamente el cardias toda la noche.",
    "clinicalPearl": "Hay cuñas de espuma comerciales estandarizadas (ej. MedClinis, almohadas antirreflujo) basadas en este principio gravitatorio que son extremadamente efectivas.",
    "guideline": "ACG Guidelines for the treatment of GERD (Lifestyle interventions).",
    "whyWrong": {
      "1": "Pone en peligro el EEI aumentando la PIA.",
      "2": "Totalmente contrario a la anatomía, favorece el flujo gástrico al esófago por gravedad.",
      "3": "Promueve microaspiraciones de grandes volúmenes líquidos en pacientes predispuestos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-309",
    "topic": "erge",
    "difficulty": "Fellow",
    "text": "En el Síndrome de Sandifer (una variante rara pediátrica), ¿cómo se manifiesta clásicamente el padecimiento asociado a la ERGE?",
    "options": [
      "Con torsiones cuello/cabeza peculiares (tortícolis) y posturas distónicas de arquear la espalda",
      "A través de heces aceitosas masivas",
      "Con hemoptisis recurrente sin esofagitis evidente",
      "Hipersensibilidad corneal y sialorrea"
    ],
    "correctIndex": 0,
    "explanation": "El arqueamiento de la espalda o cuello es una respuesta protectora/fisiológica del infante buscando elongar el esófago o aliviar mecánicamente el dolor por el paso del bolo ácido.",
    "fisiopato": "Con frecuencia se mal-diagnostica inicialmente como convulsión o enfermedad neurológica.",
    "clinicalPearl": "Si ve un lactante o pre-escolar con hiperextensión cervical (\"posición de opistótonos ocasional\") que suele ocurrir relacionada a las comidas o rumiación, sospeche ERGE grave antes que una distonía primaria.",
    "guideline": "ESPGHAN/NASPGHAN Guidelines for Pediatric Reflux.",
    "whyWrong": {
      "1": "Es esteatorrea.",
      "2": "Asume daño a vía aérea sangrante raro.",
      "3": "Nada que ver con tubo digestivo basal."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-310",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "En el perfil serológico del Virus de Hepatitis B (VHB), ¿qué combinación de marcadores define una \"infección crónica mutante precore\"?",
    "options": [
      "HBsAg (+), HBeAg (-), Anti-HBe (+) y Carga Viral (ADN) elevada",
      "HBsAg (+), HBeAg (+), Anti-HBe (-) y Carga Viral elevada",
      "HBsAg (-), Anti-HBc IgG (+) y Anti-HBs (+)",
      "HBsAg (+), Anti-HBc IgM (+) y Carga Viral elevada"
    ],
    "correctIndex": 0,
    "explanation": "El virus mutante precore es incapaz de sintetizar y secretar el antígeno \"e\" (HBeAg), pese a tener replicación activa.",
    "fisiopato": "Una mutación en la región precore del gen viral (frecuentemente G1896A) crea un codón de parada prematuro, impidiendo la traducción del HBeAg pero no del HBsAg ni de la ADN polimerasa.",
    "clinicalPearl": "Es la variante más común en la cuenca mediterránea y requiere tratamiento antiviral a pesar de tener el \"presunto\" marcador de buen pronóstico HBeAg negativo.",
    "guideline": "EASL/AASLD Guidelines on Hepatitis B Management.",
    "whyWrong": {
      "1": "Es la hepatitis crónica tipo \"salvaje\" (wild-type) altamente replicativa.",
      "2": "Infección pasada resuelta e inmunidad.",
      "3": "Patrón de infección aguda."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-311",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "En una paciente embarazada de 32 semanas portadora de Hepatitis B crónica asintomática con HBeAg(+) y DNA viral > 200.000 UI/mL, ¿cuál es el manejo para prevenir la transmisión vertical?",
    "options": [
      "Iniciar Tenofovir disoproxilo fumarato (TDF) a las 28-32 semanas de gestación, más vacuna e inmunoglobulina al RN al nacer",
      "Solo vacunar al recién nacido y dar Inmunoglobulina específica sin antiviral materno",
      "Iniciar Entecavir inmediatamente y suspender lactancia materna",
      "Programar cesárea electiva y no tratar con antivirales"
    ],
    "correctIndex": 0,
    "explanation": "Cuando la carga viral materna es alta (> 200,000 UI/mL o > 10^6 copias), la profilaxis solo al RN (vacuna+Ig) falla hasta en un 10-30%. Se debe reducir la carga viral materna pre-parto.",
    "fisiopato": "La alta viremia burla el bloqueo de anticuerpos del neonato debido al masivo inóculo viral durante el paso por el canal del parto.",
    "clinicalPearl": "El Tenofovir (TDF) es categoría B embarazos y altamente seguro. El Entecavir es categoría C (teratogénico en animales).",
    "guideline": "AASLD/EASL HBV in Pregnancy Guidelines.",
    "whyWrong": {
      "1": "Insuficiente ante viremias tan altas, asume alto riesgo de falla profiláctica.",
      "2": "Entecavir está contraindicado en gestación.",
      "3": "La cesárea no reduce la transmisión significativamente comparada con el parto vaginal si se usa antiviral."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-312",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el esquema de tratamiento pangenotípico estándar para una Hepatitis Crónica C (sin cirrosis o con cirrosis compensada) en la era de los Antivirales de Acción Directa (AAD)?",
    "options": [
      "Sofosbuvir/Velpatasvir por 12 semanas o Glecaprevir/Pibrentasvir por 8 semanas",
      "Interferón Pegilado alfa-2a + Ribavirina por 48 semanas",
      "Sofosbuvir solo por 24 semanas",
      "Lamivudina + Tenofovir indefinidamente"
    ],
    "correctIndex": 0,
    "explanation": "Los antivirales de acción directa han revolucionado el VHC, logrando tasas de Respuesta Viral Sostenida (RVS, cura) > 95% sin necesidad de genotipificar en la mayoría de los casos.",
    "fisiopato": "Combinan la inhibición de la polimerasa NS5B (Sofosbuvir) con un inhibidor del complejo de replicación NS5A (Velpatasvir/Pibrentasvir) o proteasa NS3/4A (Glecaprevir).",
    "clinicalPearl": "La eficacia y tolerancia cayeron a tal punto que el Interferón está casi completamente obsoleto en VHC.",
    "guideline": "AASLD/IDSA HCV Guidance.",
    "whyWrong": {
      "1": "Terapia histórica obsoleta, alta toxicidad.",
      "2": "El Sofosbuvir no debe usarse como monoterapia por riesgo de resistencia y falla.",
      "3": "Son antivirales para VHB, inútiles contra VHC."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-313",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "Un paciente tratado por VHC alcanza Respuesta Viral Sostenida a las 12 semanas (RVS12). Antes del tratamiento, una elastografía mostraba F4 (Cirrosis compensada). ¿Cuál es el manejo a largo plazo?",
    "options": [
      "Tamizaje ecográfico para Hepatocarcinoma (HCC) cada 6 meses de por vida",
      "Alta médica con curación virológica y hepática, sin más seguimiento",
      "Retratamiento anual con AADs cortos de 4 semanas",
      "Repetir la biopsia hepática en 1 año para evaluar regresión del F4"
    ],
    "correctIndex": 0,
    "explanation": "La RVS elimina el virus y detiene la progresión, pero el riesgo residual de desarrollar HCC no desaparece si existió daño F3-F4 (tejido ya cirrótico o puenteante severo).",
    "fisiopato": "El daño genético e inflamación crónica sobre los hepatocitos ya formó focos displásicos latentes, que la cura virológica reduce pero no anula (< 1-2% anual persistente).",
    "clinicalPearl": "El peor error es dar de alta a un paciente F4 solo porque curó el virus. Siguen siendo población de riesgo neoplásico.",
    "guideline": "AASLD/EASL Guidelines for HCC Surveillance.",
    "whyWrong": {
      "1": "Grave error, aumenta muertes por HCC no detectado a tiempo.",
      "2": "El VHC se \"cura\" sin re-tratamientos si alcanzó RVS y no se re-infecta.",
      "3": "La elastografía puede repetirse a los 1-2 años, pero una biopsia control no está justificada hoy."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-314",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "Un joven que viajó por el Sudeste Asiático presenta ictericia intensa, prurito incapacitante y transaminasas en 600 UI/L que llevan 10 semanas sin normalizar del todo, aunque se siente bien. IgM anti-VHA es reactivo. ¿Cómo se denomina este cuadro?",
    "options": [
      "Hepatitis A de presentación colestásica prolongada",
      "Hepatitis A fulminante inminente",
      "Coinfección con Virus E",
      "Falla hepática crónica oculta"
    ],
    "correctIndex": 0,
    "explanation": "Una variante clínica conocida de la Hepatitis A es la fase colestásica prolongada, que puede durar hasta 3 a 6 meses con prurito severo y bilirrubina alta, pero que siempre es autolimitada y benigna.",
    "fisiopato": "Una inflamación canalicular persistente post-viral retrasa el flujo biliar, aunque el virus ya no esté causando citotoxicidad hepatocelular necrotizante (transaminasas bajan asincrónicamente).",
    "clinicalPearl": "Se trata sintomáticamente (ej. Colestiramina, Ácido Ursodesoxicólico) reconfortando al paciente de que sanará al 100% sin cronificar.",
    "guideline": "Clinical manifestation of Viral Hepatitis A.",
    "whyWrong": {
      "1": "La falla fulminante cursa con encefalopatía grave y coagulopatía en corto tiempo, no con buen estado general prolongado.",
      "2": "Puede existir pero no explica persé este curso clásico.",
      "3": "VHA no cronifica."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-315",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es la diferencia fundamental en el pronóstico entre la co-infección por VHB y VHD (Deltavirus) vs la superinfección VHD sobre un portador crónico de VHB?",
    "options": [
      "La superinfección VHD suele cronificar (hasta 80-90%) y llevar a cirrosis rápida; la co-infección se aclara espontáneamente (>90%) de ambos virus",
      "La co-infección VHD/VHB siempre es mortal y fulminante (100% letalidad)",
      "La superinfección no daña el hígado si el VHB era inactivo",
      "Tienen el mismo pronóstico evolutivo a largo plazo"
    ],
    "correctIndex": 0,
    "explanation": "El VHD requiere la envoltura (HBsAg) del VHB para infectar.",
    "fisiopato": "Si ambos entran a la vez (coinfección aguda), el sistema inmune robusto aclara el VHB y el VHD se queda sin \"abrigo\", muriendo ambos. Si el VHB ya es crónico tolerante (superinfección), el VHD secuestra las fábricas ya instaladas y produce daño necrótico masivo casi sin resistencia.",
    "clinicalPearl": "La hepatitis Delta crónica es la forma viral más agresiva conocida y lleva a cirrosis en < 5-10 años.",
    "guideline": "AASLD Hepatitis D Guidance.",
    "whyWrong": {
      "1": "Suele tener más falla fulminante aguda que VHB solo, pero raramente es 100% mortal, suele despejarse.",
      "2": "Falso, la superinfección en VHB inactivo suele reactivar necrosis intensa (\"flare\").",
      "3": "Clínicamente y pronósticamente opuestas."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-316",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "¿Qué grupo poblacional tiene un altísimo riesgo de desarrollar falla hepática aguda (fulminante) con mortalidades del 20-30% si contrae infección aguda por el Virus de la Hepatitis E (VHE)?",
    "options": [
      "Mujeres en el tercer trimestre de embarazo (especialmente con variantes endémicas genotipo 1 y 2)",
      "Adultos jóvenes masculinos sanos",
      "Pacientes con antecedente de apendicectomía",
      "Niños menores de 5 años"
    ],
    "correctIndex": 0,
    "explanation": "Las variantes de VHE transmitidas por agua (genotipos 1 y 2 en Asia/África/Norte de India) son notoriamente letales en embarazadas.",
    "fisiopato": "Se cree que los cambios hormonales e inmunológicos del tercer trimestre (ambiente Th2) facilitan una replicación viral masiva y apoptosis hepatocelular fulminante.",
    "clinicalPearl": "En países desarrollados predomina el VHE Genotipo 3 (transmitido por carne de cerdo cruda/zoológico), que es leve y puede cronificar en pacientes trasplantados o VIH+.",
    "guideline": "EASL Clinical Practice Guidelines on Hepatitis E virus infection.",
    "whyWrong": {
      "1": "En ellos causa hepatitis leve autolimitada.",
      "2": "Infundado.",
      "3": "Generalmente asintomáticos o leve (transaminasas bajas)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-317",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "Una mujer de 18 años con amenorrea y acné presenta ALT/AST >1000 y aumento de IgG total. Los anticuerpos Antinucleares (ANA) y Anti-Músculo Liso (ASMA) son intensamente positivos. ¿Cuál es el diagnóstico más probable?",
    "options": [
      "Hepatitis Autoinmune Tipo 1",
      "Hepatitis Autoinmune Tipo 2",
      "Colangitis Biliar Primaria (CBP)",
      "Enfermedad de Wilson"
    ],
    "correctIndex": 0,
    "explanation": "La HAI tipo 1 se caracteriza por positividad de ANA y/o ASMA. Es la forma clásica, afectando fuertemente a mujeres y con picos de presentación en adolescencia y post-menopausia.",
    "fisiopato": "Existiría un gatillo ambiental que por mimetismo molecular activa células T autorreactivas contra autoantígenos hepáticos.",
    "clinicalPearl": "La globulina IgG sérica francamente elevada (mucho más que IgM o IgA) es clave e indispensable para el \"score simplificado\" de diagnóstico de HAI.",
    "guideline": "AASLD Practice Guidelines: Autoimmune Hepatitis.",
    "whyWrong": {
      "1": "Se caracteriza por el anticuerpo Anti-LKM1 (anti-microsomal de hígado y riñón) y ocurre primariamente en infancia muy temprana.",
      "2": "Es colestásica (FA/GGT altas), Anti-Mitocondrial (AMA) postivo y ocurre en mujeres >40 años.",
      "3": "Puede causar amenorrea y ALT alta en jóvenes, pero no suele tener hipergammaglobulinemia severa ni ASMA muy altos (baja ceruloplasmina)."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-318",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "Histológicamente, ¿cuál es la lesión \"clásica\" considerada sello distintivo (aunque no patognomónica exclusiva) de la Hepatitis Autoinmune muy activa?",
    "options": [
      "Hepatitis de interfase (necrosis en sacabocados) con infiltrado portal a predominio linfoplasmocitario y emperipolesis",
      "Cuerpos de Mallory-Denk y neutrófilos, degeneración balonizante y fibrosis en red de alambre",
      "Infiltrado granulomatoso difuso sin caseificación y pérdida ductal biliar",
      "Esteatosis macrovesicular masiva aislada"
    ],
    "correctIndex": 0,
    "explanation": "El linfocito y los plasmocitos (células plasmáticas pro-IgG) rompen la placa limitante del espacio portal \"mordiendo\" (sacabocados o piece-meal necrosis) el lóbulo hepático.",
    "fisiopato": "La emperipolesis es el fenómeno microscópico en el que un linfocito parece \"entrar o pasear\" a través del citosol de un hepatocito vivo intacto.",
    "clinicalPearl": "Estos hallazgos son dramáticamente de respuesta rápida tras el inicio de corticoides a altas dosis.",
    "guideline": "Pathology of Autoimmune Liver Diseases.",
    "whyWrong": {
      "1": "Clásicos de la esteatohepatitis alcohólica u obesa (MASH).",
      "2": "Sugerente de colangitis biliar primaria o sarcoidosis.",
      "3": "Solo es MASLD/ hígado graso no inflamado."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-319",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "Durante el tratamiento crónico de la Hepatitis Autoinmune (HAI) con Azatioprina (AZA) como ahorrador de corticoides, ¿la determinación genética de qué enzima previene la toxicidad hematológica severa por AZA?",
    "options": [
      "Tiopurina Metiltransferasa (TPMT)",
      "Glucosa-6-Fosfato Deshidrogenasa (G6PD)",
      "Citocromo CYP2D6",
      "UGT1A1 (Glucuronosiltransferasa)"
    ],
    "correctIndex": 0,
    "explanation": "El metabolito 6-mercaptopurina (derivado de AZA) requiere de la enzima TPMT para ser inactivado.",
    "fisiopato": "Los pacientes con alelos mutantes que confieren nula actividad TPMT (aprox. 1 en 300) acumularán masivamente nucleótidos de tioguanina y sufrirán mielosupresión pancitopénica rápidamente letal si se da dosis normal.",
    "clinicalPearl": "Idealmente, evalúe la tiopurina fenotípica o genética antes de iniciar AZA crónicamente. Alternativamente, vigile muy estrictamente la serie blanca en el mes 1 y 2.",
    "guideline": "ACG/EASL Management of Autoimmune Hepatitis.",
    "whyWrong": {
      "1": "Prevención para favismo, cloroquina, dapsona (evita anemia hemolítica).",
      "2": "Importante en metabolismo de psiquiátricos/betabloqueadores.",
      "3": "Importante en el Síndrome de Gilbert y metabolismo de Irinotecán."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-321",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "Un joven que intentó suicidio hace 24 horas y tomó 20 gramos de Paracetamol llega con ALT de 4500 UI/L y Tiempo de Protrombina prolongado. Usted indica N-acetilcisteína (NAC) IV. ¿Cuál es el rol bioquímico exacto de la NAC en este escenario?",
    "options": [
      "Reponer y servir como precursor de Glutatión intracelular para detoxificar el NAPQI reactivo acumulado",
      "Bloquear directamente la absorción gástrica del remanente",
      "Inhibir irreversiblemente la COX-2 hepática",
      "Actuar como un diurético forzado para barrer la droga del riñón"
    ],
    "correctIndex": 0,
    "explanation": "El paracetamol en sobredosis satura sus vías seguras (sulfatación y glucuronidación), derivándose por completo al citocromo P450 que produce NAPQI, un radical extremadamente citotóxico.",
    "fisiopato": "Normalmente las reservas hepatocelulares de Glutatión neutralizan al NAPQI, pero en sobredosis se agotan. La NAC provee L-cisteína, el aminoácido limitante para re-sintetizar Glutatión salvador.",
    "clinicalPearl": "Administrado antes de 8-10 horas el perfil protector de NAC roza el 100%. A las 24 hrs aún beneficia, pero el daño basal en ALT/AST ya ocurrió. Enzimas > 5.000 UI/L son clásicas.",
    "guideline": "Acetaminophen Toxicity Guidelines.",
    "whyWrong": {
      "1": "Ese sería el rol del carbón activado precoz <2h.",
      "2": "Infundado, el paracetamol inhibe COX3 en SNC predominantemente.",
      "3": "Totalmente irreal."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-322",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el medicamento de uso hospitalario o ambulatorio que a nivel MUNDIAL causa la mayor cantidad de Daño Hepático Inducido por Drogas (DILI) idiosincrásico (no paracetamol) presentando clásicamente un patrón mixto o francamente colestásico prolongado (R<2)?",
    "options": [
      "Amoxicilina con Ácido Clavulánico (Augmentin)",
      "Metotrexato",
      "Isoniazida",
      "Fenitoína"
    ],
    "correctIndex": 0,
    "explanation": "Es la primera causa de DILI inducido por drogas reportadas en la base de datos DILIN.",
    "fisiopato": "Ocurre primariamente asociado al componente del \"ácido clavulánico\", a menudo 1 a 6 semanas DESPUÉS de haber terminado un ciclo antibiótico, confundiendo al paciente y médico tratante.",
    "clinicalPearl": "Genera elevación marcada de FA y Bilirrubina; el paciente se vuelve ictérico con alto prurito de recuperación sumamente lenta (2-6 meses), pero raramente letal (buen pronóstico en general).",
    "guideline": "Drug-Induced Liver Injury (DILIN) Network data.",
    "whyWrong": {
      "1": "Causa hepatotoxicosis crónica fibrosante oculta tras años de dosis acumulada.",
      "2": "Droga principal de DILI hepatocelular puro con elevación aguda (R > 5), muy letal en ancianos acetiladores lentos.",
      "3": "Patrón hepatocelular similar a viral con inmunoalergia (eosinofilia)."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-323",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "Paciente varón de 45 años con ingesta pesada de alcohol e ictericia de rápida instauración. Se descarta infección oculta activa. AST de 250 y ALT de 80. Índice discriminante de Maddrey de 45. ¿Cuál es la terapia farmacológica validada con reducción de mortalidad a 28 días?",
    "options": [
      "Prednisolona oral 40 mg al día por 4 semanas",
      "Infliximab",
      "Infusión de albúmina masiva sola",
      "Trasplante hepático inmediato (listing 1er día)"
    ],
    "correctIndex": 0,
    "explanation": "La Hepatitis Alcohólica aguda severa se define clásicamente por una Maddrey > 32 o un MELD > 20.",
    "fisiopato": "La lluvia masiva de citoquinas inflamatorias (TNF-alpha, IL-6) en el hígado dañado es suprimida agresivamente por corticoides.",
    "clinicalPearl": "Los pacientes mueren de falla de infección y respuesta inflamatoria exacerbada; descartar infección oculta antes de iniciar los corticoesteroides es crítico, se administran solo si el cultivo es estéril o la infección está bajo tratamiento empírico.",
    "guideline": "AASLD/EASL Guidelines on Management of Alcoholic Liver Disease.",
    "whyWrong": {
      "1": "Aumentó drásticamente la mortalidad por infecciones inaceptables y está contraindicado.",
      "2": "Protege riñones pero no inhibe de forma general la crisis inmune hepática subyacente de esta enfermedad (no reemplaza esteroide).",
      "3": "Generalmente se pide 6 meses de abstinencia, aunque se valora actualmente en casos individuales severos sin rescate de terapia médica (early liver transplant)."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-324",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "A nivel enzimático, ¿por qué el ratio AST/ALT en daño por abuso de alcohol es típicamente > 2 (a menudo > 3), mientras las transaminasas rara vez superan los 500 UI/L?",
    "options": [
      "Porque el alcohol causa desnutrición relativa de vitamina B6 (Piridoxina), cofactor para la ALT celular, a la vez que el daño celular libera también la AST residente mitocondrial",
      "Porque AST es de origen puramente canalicular y el daño alcohólico inflama los conductillos",
      "Porque el etanol causa inflamación sistémica en la pared muscular",
      "Porque causa hipotiroidismo simultáneo"
    ],
    "correctIndex": 0,
    "explanation": "La ALT es casi exclusivamente citoplasmática, y su biosíntesis requiere Piridoxal-5-fosfato como cofactor. El daño alcohólico crónico deprime la síntesis de ALT.",
    "fisiopato": "AST es tanto mitocondrial como citosólica (doble reserva) y es liberada más abultadamente por la destrucción de la pared mitocondrial causada por la toxicidad oxidativa celular del acetaldehído y ROS.",
    "clinicalPearl": "Un nivel > 1000 UI/L sugiere un hígado en shock/isquemia o viral primario agregado; rara vez existe esa explosión en patología alcoholica pura.",
    "guideline": "Liver enyzmes / EASL alcoholic liver disease.",
    "whyWrong": {
      "1": "Cierto el ratio, pero la enzima de canales es la GGT/FA pura.",
      "2": "Se eleva AST y creatinkinasa pero no justifica el patrón clásico del higado crónico.",
      "3": "Infundado en la fisiopatología viral."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-325",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "Paciente masculino de 70 años sufre un paro cardiorrespiratorio presenciado. Al ingresar a la UCI (2º día) sus laboratorios muestran: ALT 4000 UI/L, AST 5500 UI/L y LDH altísima (>4000). Bilirrubina 2 mg/dL. ¿Cuál es el diagnóstico hepático con estos marcadores?",
    "options": [
      "Hepatitis Isquémica o \"Hígado de Shock\"",
      "Daño hepático fulminante inducido por medicamentos",
      "Obstrucción mecánica aguda del colédoco",
      "Hepatitis E aguda"
    ],
    "correctIndex": 0,
    "explanation": "La isquemia sistémica en la red centrolobulillar hepática (zona 3) resulta en una necrosis brutal (transaminasas entre 2000 y 10000 UI/L).",
    "fisiopato": "Afortunadamente, el hígado resucita funcionalmente rápido una vez la perfusión vuelve con recuperación enzimática paralela rápida (cae drásticamente a los 3 días si la hemodinamia resolvió).",
    "clinicalPearl": "El cociente ALT frente al masivo LDH (> 1:1.5) y un pico precoz sin importante bilirrubina es la firma de laboratorio isquémica.",
    "guideline": "Critical Care / Ischemic Hepatitis reviews.",
    "whyWrong": {
      "1": "La LDH sube masivo puramente, usual en shock pero no clásico en DILI standard o acetaminofeno aislado sin otra causa predecible de base.",
      "2": "No presenta elevaciones transaminásicas > 4000 inicial.",
      "3": "Misma lógica, rara la afectación necrótica pura inicial sin otro agravante."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-326",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "Existen fármacos (ej. Atazanavir) que bloquean selectivamente los transportadores del polo sinusoidal y biliar SIN causar DILI necrótico ni inflamatorio. ¿Cuál es la principal manifestación analítica fenotípica?",
    "options": [
      "Hiperbilirrubinemia aislada severa (frecuentemente a predominio indirecto), sin alteración de AST, ALT o FA (pseudotoxicidad / Síndrome de Gilbert farmacológico)",
      "Elevación de aminotransferasas (patrón hepático) silencioso",
      "Rápido aumento de creatina sérica aislada",
      "Colangitis esclerosante biliar química"
    ],
    "correctIndex": 0,
    "explanation": "El Atazanavir inhibe específicamente la enzima UGT1A1 de conjugación compitiendo directamente.",
    "fisiopato": "Esto lleva a la retención inocente de bilirrubina plasmática indirecta en sangre (exactamente imitando un síndrome de Gilbert crónico). No existe ni rotura epitelial ni inflamación.",
    "clinicalPearl": "Asintomáticos se reportan ictéricos sin otro fallo basal, lo cual es solo estético en un paciente bajo uso ARV.",
    "guideline": "DILI / Liver Safe Practice.",
    "whyWrong": {
      "1": "Es lo contrario, AST, ALT y FA normales.",
      "2": "Eso causan otras drogas con falla real.",
      "3": "Completamente opuesto a colangiopatía con daño (FA y GGT se alterarían)."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-327",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "¿Cuál de las siguientes manifestaciones extraintestinales clásicas de la Enfermedad Inflamatoria Intestinal (EII) cursa su evolución clínica de manera totalmente INDEPENDIENTE de la actividad inflamatoria del intestino?",
    "options": [
      "Espondilitis anquilosante y Colangitis Esclerosante Primaria (CEP)",
      "Eritema nodoso",
      "Epiescleritis ocular",
      "Artritis periférica pauciarticular (Tipo 1)"
    ],
    "correctIndex": 0,
    "explanation": "La afección axial (espondilitis anquilosante) y la CEP no mejoran cuando se induce la remisión (por medicamentos o cirugía) de la enfermedad colónica.",
    "fisiopato": "Constituyen procesos autoinmunes genéticamente separados (ej. HLA-B27 para EA) que coexisten, mas no se retroalimentan bidireccionalmente en tiempo real con el intestino.",
    "clinicalPearl": "Incluso después de una proctocolectomía total curativa por CU, la Colangitis Esclerosante Primaria sigue su curso progresivo e independiente hacia el hígado.",
    "guideline": "ECCO Guidelines on Extraintestinal Manifestations in IBD.",
    "whyWrong": {
      "1": "El eritema nodoso cursa en paralelo a la EII; curando la diarrea cura la piel.",
      "2": "La epiescleritis responde agudamente al tratamiento del intestino inflamado.",
      "3": "La artritis Tipo 1 es estrictamente dependiente de brotes agudos intestinales."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-328",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "En contraste, indique qué manifestación cutánea de la EII (más frecuente en Crohn) SÍ cursa de manera fluctuante y directamente proporcional a la gravedad y reactivación de la inflamación intestinal:",
    "options": [
      "Eritema nodoso (nódulos dolorosos, rojos, típicamente pretibiales)",
      "Pioderma gangrenoso",
      "Psoriasis vulgar en placas",
      "Vitíligo extenso multifocal"
    ],
    "correctIndex": 0,
    "explanation": "El eritema nodoso acompaña la actividad de la EII de cerca. Su aparición predice recaídas y su desaparición corrobora respuesta a esteroides de la enfermedad de base.",
    "fisiopato": "Es una paniculitis septal sin vasculitis aguda mediada probablemente por formación e implante de complejos inmunes originados por la masiva pérdida de barrera mucosa.",
    "clinicalPearl": "Curiosamente, el pioderma gangrenoso (la úlcera necrotizante idiopática cutánea) suele tener un curso propio muy independiente en la mitad de los casos (puede persistir sin brote colónico activo).",
    "guideline": "ACG Clinical Guidelines on management of Crohn’s Disease.",
    "whyWrong": {
      "1": "El pioderma gangrenoso cursa 50% independiente y es muy rebelde.",
      "2": "Es paralela autoinmune comórbida general, tratable casualmente con biológico, no indicador directo de masa luminal activa per sé.",
      "3": "Sin relación aguda de brote sincrónico."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-329",
    "topic": "eii",
    "difficulty": "Staff",
    "text": "En un paciente con un brote agudo LEVE a MODERADO de Enfermedad de Crohn (CD) confinado estrictamente al íleon terminal y/o colon ascendente, ¿cuál es el agente preferido de inducción?",
    "options": [
      "Budesonida oral a dosis de liberación ileal (9 mg/día)",
      "Prednisona oral 40 mg",
      "Infliximab 5 mg/kg IV",
      "Mesalazina tópica (enemas de 4g)"
    ],
    "correctIndex": 0,
    "explanation": "Budesonida es un esteroide tópico intestinal que experimenta un exhaustivo (> 90%) metabolismo hepático de primer paso, reduciendo drásticamente la toxicidad esteroidea sistémica (Cara de luna, osteoporosis aguda).",
    "fisiopato": "La formulación de budesonida de liberación controlada se destapa de su cubierta a pH > 5.5 a nivel del íleon terminal, maximizando el efecto antiinflamatorio tópico.",
    "clinicalPearl": "En enfermedad extensa perianal o CD fistulizante, o de intestino alto, la Budesonida pura no basta (requiere inmunosupresión sistémica).",
    "guideline": "ECCO-ESGAR Guidelines for diagnosis and management of CD.",
    "whyWrong": {
      "1": "Evitable si es leve/mod debido a la enorme toxicidad, dejada para afecciones difusas severas o sistémicas.",
      "2": "Exagerado (overkill) para un primer brote leve-moderado primario inducción estándar.",
      "3": "No llega con retención hasta el íleon alto/colon ascendente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-330",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "Un joven con Crohn debuta con una gran fístula perianal compleja y formación profunda de absceso isquioanal. Es referido a Cirugía. ¿Cuál es la secuencia de manejo ideal (Multimodal) actual?",
    "options": [
      "1º Drenaje quirúrgico del absceso con colocación de setones y antibióticos. 2º Iniciar Terapia Biológica anti-TNF (Infliximab)",
      "Exéresis proctocolectómica definitiva total inicial de emergencia",
      "Iniciar Infliximab IV de inmediato para cerrar la fístula, sin tocar el área",
      "Usar prednisona a dosis altísimas sin cirugía"
    ],
    "correctIndex": 0,
    "explanation": "NUNCA se debe iniciar terapia inmunosupresora (Biológico/Esteroides) en presencia de una colección séptica (absceso) no drenada. Es letal por riesgo de sepsis generalizada.",
    "fisiopato": "El setón (hilo no cortante) mantiene el trayecto abierto previniendo que se cierre exteriormente mientras se purga internamente, logrando un control mecánico focal.",
    "clinicalPearl": "Una vez el absceso se desmorona y queda el trayecto fistuloso simple maduro purgado (típicamente a las 2-4 semanas pos-quirúrgicas), es el momento ideal para introducir Infliximab que cura la raíz mucosal.",
    "guideline": "AGA Clinical Practice Guideline on the Medical Management of Moderate to Severe Luminal and Perianal Fistulizing Crohn’s Disease.",
    "whyWrong": {
      "1": "Excesivo como primera línea sin intento de salvataje médico o resección menor perianal.",
      "2": "Sellaría falsamente la piel, empujando toneladas de pus al espacio retroperitoneal induciendo peritonitis masiva o sepsis.",
      "3": "Esteroides empeoran el control de focos purulentos primarios no controlados quirúrgicamente."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-331",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "Un paciente con Colitis Ulcerosa (CU) activa fulminante no responde a la esteroidoterapia intravenosa en máximo límite (3 días). Para evitar el Megacolon o cirugías desastrosas, las guías permiten terapias intramusculares/intravenosas agresivas de \"rescate\". ¿Cuáles son los únicos dos fármacos validados para rescate agudo en CU resistente a esteroides IV con paciente internado?",
    "options": [
      "Ciclosporina IV o Infliximab IV",
      "Ustekinumab o Vedolizumab SC",
      "Azatioprina o 6-Mercaptopurina dosis alta orales",
      "Clostridium difficile fecal transplant o Mesalazina masiva"
    ],
    "correctIndex": 0,
    "explanation": "Estos dos inmunosupresores potentes son los pilares del rescate médico hospitalario y reducen significativamente las tasas de colectomía de emergencia en cuadros pre-mórbidos fulminantes.",
    "fisiopato": "Ciclosporina (inhibe Calcineurina) y el Infliximab (Neutraliza rápida y masivamente TNF) tienen inicios de acción dramáticamente fulminantes medidos en días o semanas (vs meses de Azatioprina).",
    "clinicalPearl": "Son mutuamente excluyentes simultáneos en fase aguda en algunos centros (muy tóxico), y si no hay mejoría en 5-7 días bajo este rescate, la Colectomía ya no se aplaza más.",
    "guideline": "ECCO Guidelines on Therapeutics in Ulcerative Colitis.",
    "whyWrong": {
      "1": "Las terapias biológicas recientes SC no tienen aprobación ni velocidad demostrada rápida validada como salvatajes fulminantes en día 3 de internación clásica.",
      "2": "Tardan 2 a 4 meses en lograr niveles estables terapéuticos. En evento activo el paciente habría muerto o estallado su colon.",
      "3": "Sin lugar para eventos con necrosis inminente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-332",
    "topic": "eii",
    "difficulty": "Staff",
    "text": "En sujetos diagnosticados con Colitis Ulcerosa universal (pancolitis), ¿cuándo se recomienda tradicionalmente iniciar las colonoscopias programadas de VIGILANCIA específica para despistaje de Cáncer Colorrectal (CCR) y con qué intervalo ideal general posterior?",
    "options": [
      "A los 8 años desde el inicio de los síntomas, seguidas de repetición cada 1 a 3 años según riesgo",
      "A los 10 años desde el diagnóstico histológico preciso, solo 1 vez en la vida",
      "De inmediato al 1er año, anual de por vida",
      "Los casos de CU no ameritan protocolo diferenciado respecto a población general normal"
    ],
    "correctIndex": 0,
    "explanation": "El inicio del reloj biológico para cáncer es desde la aparición de SÍNTOMAS y el factor de riesgo escala geométricamente desde los 8 a 10 años de inflamación crónica tisular.",
    "fisiopato": "Ciclos agudos y crónicos de destrucción epitelial asimétrica y reparación forzada bajo microambiente tóxico con citoquinas favorecen acumulación temprana de mutaciones displásicas.",
    "clinicalPearl": "Idealmente esta vigilancia se hace bajo \"Cromoendoscopia\" en fase inactiva (remitente), usando índigo carmín o azul de metileno y endoscopio de alta definición (virtual LCI/NBI).",
    "guideline": "SCENIC International Consensus Statement on Surveillance in IBD.",
    "whyWrong": {
      "1": "Es a partir del síntoma inicial, no diagnóstico tardío que puede confundir, y no es evento único.",
      "2": "Sobreutilización costosa invasiva al inicio, riesgo casi nulo en primer lustro.",
      "3": "El riesgo CCR de colitis extensa es 5-10 veces población basal tras década."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-333",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "La Calprotectina Fecal (CF) es el biomarcador no invasivo rey del seguimiento de la EII. ¿Qué célula es la fuente primaria exclusiva de esta proteína protectora citosólica vertida masivamente a la luz intestinal en brotes?",
    "options": [
      "El Neutrófilo migratorio masivo (polimorfonuclear)",
      "El Linfocito T colaborador de memoria",
      "El Enterocito maduro apical dañado",
      "Las bacterias del bioma alteradas"
    ],
    "correctIndex": 0,
    "explanation": "La Calprotectina representa hasta un formidable 60% de las proteínas solubles citosólicas de un neutrófilo regular.",
    "fisiopato": "Cuando los neutrófilos migran desde los vasos mucosos hacia la cripta inflamada (inflamación aguda) y mueren ahí por lisis, exudan torrentes de Calprotectina a la vía rectal, midiendo objetivamente la gravedad de la migración neutrofílica aguda de la mucosa.",
    "clinicalPearl": "Es resistente al calor, bacterias y degradación (se mantiene estable en la caja pos-recolección por 5-7 días sin refri), facilitando envíos de muestras desde casa sin sesgos biológicos.",
    "guideline": "ACG Ulcerative Colitis Clinical Practice Guidelines.",
    "whyWrong": {
      "1": "Secretan citoquinas per se, no esta proteína estandarizada.",
      "2": "No genera calprotectina.",
      "3": "Exclusivamente humana."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-334",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "Un ensayo diagnóstico endoscópico para distinguir Enfermedad de Crohn severa de CU es el análisis de los parches mucosos. ¿Cuál de los siguientes es un indicio MUY fuerte hacia Enfermedad de Crohn sobre etiología CU idiopática?",
    "options": [
      "Afectación del recto o inflamación difusa homogénea ininterrumpida desde esfínter",
      "Presencia de granulomas no caseificantes en las biopsias mucosales profundas",
      "Pseudopólipos postinflamatorios gigantes en remisión de brotes previos",
      "Microulceraciones difusas de criptas con pérdida mucinosa"
    ],
    "correctIndex": 1,
    "explanation": "Los granulomas epitelioides no caseificantes en intestino son el sello patognomónico microscópico (si existen) de la Enfermedad de Crohn, si bien sólo se encuentran en 15-30% de las biopsias colonoscópicas superficiales.",
    "fisiopato": "Traduce una respuesta inmune mediada por células Th1 extrema orientada por el secuestro macrofágico profundo local frente a antígenos focales.",
    "clinicalPearl": "El segundo gran marcador es patrón inflamatorio o úlceras de manera DISCONTINUA, en \"parches\" asimétricos y el hallazgo de úlceras tipo aftosas aftas estrelladas sobre mucosa perilesional normal (skip lesions).",
    "guideline": "ECCO Crohn’s Disease Pathology Criteria.",
    "whyWrong": {
      "1": "Patrón rey de Colitis Ulcerosa progresiva clásica.",
      "2": "Ocurren dramáticos y por igual en ambas al curar úlceras masivas residuales.",
      "3": "Mecanismo histológico y macro genérico agudo de la CU y colitis infecciosas."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-335",
    "topic": "eii",
    "difficulty": "Staff",
    "text": "Para la proctitis leve a moderada por Colitis Ulcerosa (CU que se limita estrictamente a los últimos 10-15 cm del recto bajo), el tratamiento de primera línea más farmacofectivo con menor carga tóxica es:",
    "options": [
      "Supositorios de Mesalazina (5-ASA tópica, 1 g diario al acostarse)",
      "Mesalazina oral (4,8 g al día repartido)",
      "Budesonida sistémica venosa MMX",
      "Ciclosporina enemas directos masivos diarios"
    ],
    "correctIndex": 0,
    "explanation": "Ninguna terapia ORAL o INFUSIÓN le gana a poner la pomada o medicamento DIRECTO en contacto físico con la cara interior del tejido inflamado focal del canal (Vía tópica anal directa).",
    "fisiopato": "Los supositorios impactan de lleno liberando 10,000 veces la concentración requerida tisular, mientras los orales apenas llegan arrastrados lavados diluidos o desactivados al tramo rectosigmoideo bajo extremo final.",
    "clinicalPearl": "Aún en casos rebeldes \"distales\", los médicos a menudo añaden Mesalazina Oral, formando la \"Doble Terapia\" comprobada por la famosa investigación ECCO que supera aplastantemente la monoterapia oral sola, al nutrir desde dentro (vascular) e implantar foco físico (luz rectal) la mucosa del recto.",
    "guideline": "ACG Ulcerative Colitis Guideline (Distal forms).",
    "whyWrong": {
      "1": "Es la vía inefectiva y limitante final farmacológica tópica.",
      "2": "MMX se usa si ya cruzó sigma-descendente, un overkill giganstesco y sistémico para 10 cm finales.",
      "3": "No existen o es exageración letal pro-mortal."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-336",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "En el paciente femenino de 26 años con Enfermedad de Crohn activa que requiere iniciar terapia biológica Anti-TNF, ¿cuál de los siguientes es un pre-requisito (o screening de bioseguridad) OBLIGATORIO por un riesgo mortal subyacente inducido en un paciente que inicia Infliximab?",
    "options": [
      "Prueba clínica estricta (PPD, Quantiferon) de Tuberculosis latente y radiografía de tórax",
      "Colonoscopia previa forzosa completa obligatoria",
      "Concentración basal de TSH estimulante tiroides",
      "Gastroscopia sedada (EGD) con recolección de Ureasa"
    ],
    "correctIndex": 0,
    "explanation": "El factor de necrosis tumoral (TNF) es indispensable para la estabilización y supervivencia perenne estructural de los famosos \"granulomas\" focales pulmonares calcificados que enquistan o apresan cepas latentes de la Tuberculosis.",
    "fisiopato": "Bloquear terapéuticamente el TNF desarma el \"muro\" del granuloma protector permitiendo la invasión miliar, linfática o reactivación masiva de la diseminación bacilar tuberculosa mortal fulminante sistémica casi inmediata.",
    "clinicalPearl": "Se aplica a TODOS los biológicos anti-TNF, así como se pide Serologías VHB, VHC, VIH completas.",
    "guideline": "AGA Infection Prevention Guidelines in IBD.",
    "whyWrong": {
      "1": "Útil diagnósticamente pero no previene riesgo fatal secundario farmacéuticamente subyacente agudo.",
      "2": "Inofensivo si falla pero inútil preventivamente.",
      "3": "Mismo criterio superior ineficaz."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-337",
    "topic": "eii",
    "difficulty": "Staff",
    "text": "Aparte de infecciones serias activas latentes no controladas (TB), la iniciación de agentes bloqueadores Anti-TNF (como el Adalimumab, Infliximab etc.) en EII está rigurosamente CONTRAINDICADA de forma absoluta en otra gran condición sistémica. ¿Cuál?",
    "options": [
      "Insuficiencia cardíaca congestiva descontrolada (Clase NYHA III o IV severa) o antecedente de síndromes de desmielinización grave (Esclerosis Múltiple)",
      "Cirrosis alcohólica asintomática sin fallo de coagulación",
      "Antecedente de pancreatitis aguda biliar extirpada hace un año",
      "Insuficiencia renal crónica (VFG 15 ml) sin diálisis"
    ],
    "correctIndex": 0,
    "explanation": "Altísimas dosis de anti-TNFs han empeorado bruscamente resultados y agravado letalmente una clase III cardíaca sistémica existente en infartados crónicos de ensayos históricos de reumatología.",
    "fisiopato": "En modelos autoinmunes neurológicos como un desorden tipo neuritis óptica base o esclerosis múltiple, la inmunidad Th1 central falla e interfiere induciendo empeoramiento trágico por exacerbación en la placa desmielinizada de sustancia blanca bloqueada de factores pro-angiogénicos nerviosos.",
    "clinicalPearl": "Un paciente joven con enfermedad inflamatoria y adormecimiento transitorio que simule \"falla de vaina de mielina\" previa debe usar biológicos NO asociados a este TNF (como el inhibidor T Vedolizumab etc).",
    "guideline": "FDA Black Box Warnings for Anti-TNF therapies.",
    "whyWrong": {
      "1": "No contraindican estrictamente su uso, de hecho Infliximab es hepáticamente aclaroso inofensivo metabolito a veces en Hígado no alterado cirróptico base.",
      "2": "Infundado sistémicamente sin vía en vivo.",
      "3": "Seguro renalmente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-338",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "Vedolizumab es un Anticuerpo Monoclonal biológico moderno sumamente validado para Inducción en EII (CU y Crohn) ancianos o con riesgo sistémico, pero cuyo mecanismo de acción es \"Inmunosupresión Selectiva\". ¿Sobre qué receptor específico bloquea físicamente impidiendo la invasión celular?",
    "options": [
      "Se une exclusivamente a las integrinas α4β7 sobre leucocitos circulantes inhibiendo que anclen mediante MAdCAM-1 a la pared venular del intestino perimetral",
      "Se une al receptor de la subunidad común de interlucina (IL-12/23) p40 bloqueando diferenciación CD4 polarizada a Th1",
      "Es un ligando que reprime a fondo al JAK-STAT canal quinasa interior del Linfocito central y colónico",
      "Bloquea el sitio intracelular activo del antígeno Calcineurina para Linfocitos T reactivos masivos"
    ],
    "correctIndex": 0,
    "explanation": "El intestino firma un \"contrato\" reclutador local fabricando proteínas MadCAM-1 que flotan atrayendo células inmunes de paso.",
    "fisiopato": "Vedolizumab anula al α4β7 selecto, que es el imán o llave que usan estricta y únicamente los linfocitos \"etiquetados para ir intestino\". Por ende, no afecta en absoluto las células T vigilantes asignadas contra el cerebro ni virus de pulmones sistémicos, bajando drásticamente el riesgo de infección general u oportunista (PML, Neumato).",
    "clinicalPearl": "Altamente deseado para individuos muy mayores de edad frágiles que sucumbirían ante un inmunosupresor sistémico masivo general (como Azatioprina) ante una resfrío neumónico normal.",
    "guideline": "ECCO-AGA Guidelines, Molecular Mechanism.",
    "whyWrong": {
      "1": "Corresponde a la molécula biológica moderna de rescate Ustekinumab.",
      "2": "Corresponde primariamente a la molécula de pastilla diaria oral fuerte biológica Tofacitinib o Upadacitinib.",
      "3": "Corresponde al viejo inmunosupresor químico IV agudo Ciclosporina/Tacrolimus."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-339",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "El Ustekinumab ha ganado terreno como agente biológico versátil con altísima tasa de seguridad sistémica, sobre todo en refractariedad (fallo inicial a anti-TNF en Crohn). ¿Cuál es su mecanismo biológico de diana inhibido?",
    "options": [
      "Anticuerpo directo anti-subunidad p40 de las Interleucinas IL-12 e IL-23 (vía Th1 y Th17)",
      "Inhibidor competitivo S1P modulador genómico de linfocitos salientes al ganglio (Ozanimod equivalencia)",
      "Bloqueo exclusivo de IL-6 receptor soluble transmembrana general transductivo (Tocilizumab)",
      "Bloqueo receptor de TNF-alpha libre masivo"
    ],
    "correctIndex": 0,
    "explanation": "A diferencia de los Anti-TNF tempranos que eliminan la bala (la citoquina final agresora), las vías de receptores de las interleucinas 12 / 23 bloquean eficazmente a la fábrica superior, es decir, el desarrollo final del linfocito Th1 y Th17 nativo general genético de forma sistémica fina.",
    "fisiopato": "Posee notable y alta tolerancia clínica general contra anticuerpos propios de formación cruzada neutralizante por el organismo que sí frustran al viejo Infliximab tras uso sostenido y con una sola infusión IV induciendo se transiciona a una cómoda subcutánea inyección (SC) de mantenimiento periódica rápida paciente domiciliario.",
    "clinicalPearl": "Si el paciente fracasó o generó fuerte alergia cruzada inyectable grave o anafiláctica sistémica (Neutralizing ADA formation alta base) al Adalimumab, este y Risankizumab son hoy los primeros re-intentos de éxito subagudo demostrados por evidencia robusta.",
    "guideline": "ACG Crohn's disease management new therapies update guidelines.",
    "whyWrong": {
      "1": "Es otra nueva familia general inmunomoduladora oral de rescate moderna actual celular limitativa general de salida linfática ganglionar (Ozanimod).",
      "2": "Reumatológico principalmente, inútil para la fisiopato luminal crónica en CU/Crohn basal masivo.",
      "3": "Mecanismo clase Anti-TNF previo repetido obsoleto en refractarios a fallas base primarios."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-344",
    "topic": "h_pylori",
    "difficulty": "Fellow",
    "text": "En una región donde la resistencia primaria a la Claritromicina excede el 15%, ¿cuál es el régimen empírico de primera línea recomendado incondicionalmente por el consenso de Maastricht VI y ACG para erradicar H. pylori?",
    "options": [
      "Terapia Cuádruple con Bismuto (IBP + Bismuto + Tetraciclina + Metronidazol) por 14 días",
      "Terapia Triple clásica (IBP + Amoxicilina + Claritromicina) por 14 días",
      "Terapia Doble a Altas Dosis (IBP + Amoxicilina) por 7 días",
      "Monoterapia con Vonoprazan por 14 días"
    ],
    "correctIndex": 0,
    "explanation": "La Terapia Cuádruple con Bismuto es independiente de las resistencias a macrólidos e insensibiliza a cepas difíciles al agregar un cuarto factor de pared letal (el Bismuto metálico no sufre resistencia transferible cruzada).",
    "fisiopato": "La Claritromicina es un macrólido muy propenso a resistencia cruzada por mutaciones ribosomales (eflujo o protección de sitio de unión). El bismuto destruye la membrana celular y frena enzimas vitales del patógeno mecánicamente.",
    "clinicalPearl": "Si la Cuádruple con bismuto no está disponible de todo punto por desabastecimiento, la alternativa es la Terapia Concomitante sin Bismuto (IBP+Amoxi+Claritro+Metro simultáneos 14 días).",
    "guideline": "ACG Clinical Guideline / Maastricht VI Florence Consensus Report.",
    "whyWrong": {
      "1": "Fallaría inaceptablemente casi un tercio de las veces por claritromicina inutilizada per se.",
      "2": "Todavía en perfeccionamiento posológico (necesita 14 días al menos general no 7 días probados globales para superioridad base mundial universal).",
      "3": "No logra tasas erradicadoras curativas altas sola o asilada de antibióticos base activos mortales bactericidas sistémicos cruzados."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-357",
    "topic": "h_pylori",
    "difficulty": "Staff",
    "text": "¿Con qué tipo de enfermedad sistémica o pediátrica se ha asociado históricamente (según la Hipótesis de la Higiene) la erradicación masiva temprana de Helicobacter pylori en poblaciones occidentales?",
    "options": [
      "A las alergias sistémicas, enfermedades atópicas e incremento del asma",
      "A los cánceres tempranos y linfomas de origen cerebral o sistémico",
      "A enfermedades infecciosas crónicas como sífilis o lepra",
      "A enfermedades neurodegenerativas como el Alzheimer o autismo temprano"
    ],
    "correctIndex": 0,
    "explanation": "Según la Hipótesis de la Higiene propuesta por autores como Blaser, la presencia temprana del microbio ayuda a calibrar el equilibrio inmunológico (balance Th1/Th2), por lo que su erradicación precoz se relaciona teóricamente con mayor riesgo de atopia.",
    "fisiopato": "Al eliminar H. pylori en la infancia temprana, se puede alterar el desarrollo inmunomodulador natural, haciendo que el sistema inmune derive más fácilmente a perfiles hiperreactivos tipo Th2, manifestados en eccemas, atopia y asma infantil.",
    "clinicalPearl": "A pesar de este posible beneficio teórico sobre el asma, esto NO altera el protocolo médico general de erradicar la infección por H. pylori para evitar el riesgo inminente de úlcera o cáncer gástrico a largo plazo.",
    "guideline": "Epidemiology of HP (Blaser hypothesis).",
    "whyWrong": {
      "1": "Absurdo y fantasioso in vivo orales basales y subyacentes",
      "2": "Irracional celular y exótico",
      "3": "Mismo criterio general o irreal subyacente biológico a fondo temprano."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-p-026",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "En un paciente con pancreatitis aguda severa y necrosis amurallada (WON - Walled-off Necrosis) asintomática de 8 cm detectada a las 6 semanas, ¿cuál es el manejo inicial de elección según las guías actuales?",
    "options": [
      "Observación expectante sin intervención",
      "Drenaje transgástrico endoscópico con stent de aposición luminal (LAMS)",
      "Necrosectomía quirúrgica abierta",
      "Drenaje percutáneo guiado por tomografía"
    ],
    "correctIndex": 0,
    "explanation": "Si una WON o pseudoquiste está completamente asintomática (sin dolor intratable, fiebre, signos de infección u obstrucción biliar/gástrica), el tratamiento es observador de forma indefinida.",
    "fisiopato": "Muchas colecciones necróticas se resuelven espontáneamente o permanecen estables sin causar daño, y cualquier invasión (aún endoscópica) introduce riesgo iatrogénico de infección secundaria bacteriana en un entorno estéril.",
    "clinicalPearl": "El tamaño por sí solo (incluso >6 u 8 cm) ya no es indicación ineludible de drenaje a menos que produzca síntomas mecánicos o se infecte.",
    "guideline": "AGA/ACG Guidelines on management of pancreatic necrosis.",
    "whyWrong": {
      "1": "Solo indicado si se vuelve sintomático o infectado.",
      "2": "Altamente mórbido, reservado hoy día para fracasos exhaustivos del step-up approach.",
      "3": "Añadiría fistulización percutánea y riesgo de infección externa a algo estéril y silente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-p-027",
    "topic": "pancreatitis",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es el patógeno clásicamente asociado a Pancreatitis autoinmune (Tipo 1) y en qué pilar laboratorial o fenotípico descansa su sospecha diagnóstica oro serológica?",
    "options": [
      "Enfermedad sistémica relacionada con IgG4 (niveles elevados de IgG4 sérica)",
      "Asociado al virus de parotiditis (Mumps) con IgM positiva y amilasas altas perennes",
      "Asociado a Tuberculosis basal con ADA pancreático alto",
      "Infección crónica por Citomegalovirus en inmunodeprimidos"
    ],
    "correctIndex": 0,
    "explanation": "La Pancreatitis Autoinmune (AIP) Tipo 1 es la manifestación pancreática de la enfermedad sistémica por IgG4.",
    "fisiopato": "Reacción fibroinflamatoria linfoplasmocítica densa (con abundantes células plasmáticas IgG4 positivas) que causa fibrosis estoriforme o flebitis obliterativa, dando la imagen de páncreas \"en salchicha\".",
    "clinicalPearl": "Responde espectacularmente a esteroides sistémicos orales en 2 a 4 semanas, y suele evitarse así una cirugía (Whipple) por falso tumor pancreático ciego.",
    "guideline": "International Consensus Diagnostic Criteria (ICDC) for Autoimmune Pancreatitis.",
    "whyWrong": {
      "1": "Es una causa de pancreatitis aguda viral clásica autolimitada, no de la entidad autoinmune crónica esteroideo-responsiva.",
      "2": "Rarísima infiltración granulomatosa, sin relación al tipo 1 inmune.",
      "3": "Suele causar úlceras o hepatitis/colitis, no la pancreatitis autoinmune tipo 1."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-vb-012",
    "topic": "vias_biliares",
    "difficulty": "Fellow",
    "text": "¿Cuál es el patógeno bacteriano aislado con mayor frecuencia en la bilis de pacientes con colangitis aguda?",
    "options": [
      "Escherichia coli",
      "Klebsiella pneumoniae",
      "Enterococcus faecalis",
      "Bacteroides fragilis"
    ],
    "correctIndex": 0,
    "explanation": "La E. coli es la bacteria gramnegativa que más comúnmente coloniza el tracto biliar en situaciones de estasis u obstrucción. Las opciones terapéuticas empíricas siempre deben cubrirla.",
    "fisiopato": "La obstrucción biliar aumenta la presión intraductal, lo que distiende canalículos y rompe uniones estrechas, permitiendo el reflujo cholangio-venoso de bacterias intestinales hacia la circulación sistémica.",
    "clinicalPearl": "A pesar de que los anaerobios (como Bacteroides) están presentes, rara vez son el patógeno solitario. E. coli a menudo viene acompañada de Klebsiella o Enterococcus en infecciones polimicrobianas.",
    "guideline": "Tokyo Guidelines 2018: Antimicrobial therapy for acute cholangitis/cholecystitis.",
    "whyWrong": {
      "1": "Es muy común, pero sigue consistentemente en segundo lugar tras E. coli.",
      "2": "Grampositivo frecuente en cultivos biliares, pero no es el más común. Puede requerir ampicilina o vancomicina si hay fracaso a cefalosporinas.",
      "3": "Anaerobio prevalente en sepsis biliar grave o post-CPRE, pero rara vez aislado como principal único."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-vb-013",
    "topic": "vias_biliares",
    "difficulty": "Fellow",
    "text": "En el abordaje diagnóstico de un cuadro sugestivo de colangitis esclerosante primaria (CEP), ¿cuál de los siguientes patrones imagenológicos por Colangiorresonancia (CPRM) es el más característico y patognomónico?",
    "options": [
      "Múltiples estenosis cortas anulares alternadas con dilataciones saculares (patrón en \"arrosariado\" o \"cuentas de rosario\") en las vías biliares intra y extrahepáticas",
      "Dilatación masiva aislada del colédoco sin estenosis intrahepáticas y con vesícula biliar en \"vesícula de porcelana\"",
      "Estenosis focal única abrupta (\"corte de manzana\") en el tercio distal del colédoco sin afección intrahepática",
      "Múltiples quistes biliares intrahepáticos grandes que se comunican libremente con un árbol biliar por lo demás normal (Enfermedad de Caroli)"
    ],
    "correctIndex": 0,
    "explanation": "El patrón en cuentas de rosario (\"beaded appearance\") es altamente sugestivo y virtualmente diagnóstico de CEP en el contexto clínico y serológico adecuado.",
    "fisiopato": "La inflamación y fibrosis periductal concéntrica (lesiones en piel de cebolla) causan retracción y estenosis, mientras que los segmentos sanos adyacentes se dilatan de forma compensatoria por la presión proximal.",
    "clinicalPearl": "En pacientes con este hallazgo de CEP, se debe realizar siempre una colonoscopia para descartar Enfermedad Inflamatoria Intestinal (especialmente Colitis Ulcerosa), presente hasta en el 70-80% de los casos.",
    "guideline": "AASLD / EASL Clinical Practice Guidelines: Primary Sclerosing Cholangitis.",
    "whyWrong": {
      "1": "Describe un colédoco pre-quirúrgico biliar tardío o de vesícula crónica leñosa, no CEP con sus estenosis difusas.",
      "2": "Patrón fuertemente asociado a sospecha de Colangiocarcinoma distal maligno u obstrucción litiásica impactada, no CEP.",
      "3": "La enfermedad de Caroli cursa con dilataciones quísticas saculares intrahepáticas pero que están separadas o sobre un colédoco sin fibrosis inflamatoria de la CEP estricta."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-vb-014",
    "topic": "vias_biliares",
    "difficulty": "Staff",
    "text": "A nivel profiláctico y quimiopreventivo basal tras el diagnóstico formal de CEP (Colangitis Esclerosante Primaria), ¿qué droga ha demostrado en estudios históricos mejorar pruebas funcionales hepáticas pero NO detiene firmemente la progresión general a fibrosis terminal ni a muerte, e incluso a dosis altas sube mortalidad general oral?",
    "options": [
      "Ácido ursodesoxicólico (UDCA)",
      "Prednisona o glucocorticoides sistémicos masivos intra orales",
      "Azatioprina o modificadores inmunes bases",
      "Colestiramina base u quelantes primarios"
    ],
    "correctIndex": 0,
    "explanation": "El UDCA a dosis moderadas mejora los perfiles bioquímicos (baja fosfatasa alcalina y bilirrubina), pero los ensayos clínicos no han demostrado un beneficio estadísticamente significativo en la supervivencia global ni en la necesidad de trasplante en CEP (a diferencia de la Colangitis Biliar Primaria - CBP, donde es vital).",
    "fisiopato": "Cambia un pull biliar tóxico endógeno por bases hidrofílicas no tóxicas, reduciendo injuria transitoria del hepatocito al limpiar bilis, pero no muta la base autoinmune fibrosante letal periductal cruzada.",
    "clinicalPearl": "Guías recomiendan NO usar altas dosis (28-30 mg/kg/d) de UDCA en CEP porque incrementaron los resultados adversos y mortalidad en ensayos controlados.",
    "guideline": "AASLD / EASL Guidelines on CEP management.",
    "whyWrong": {
      "1": "Son útiles espectacularmente en la variante de superposición (Overlap) CEP-Hepatitis autoinmune o en la Pancreatitis AI IgG4 asociada biliar, pero NO en CEP clásica.",
      "2": "No demostrado efecto en progresión a trasplante en CEP.",
      "3": "Solo sintomático contra prurito, cero impacto base histológico vivo fibrosante en progresión letal global."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-vb-015",
    "topic": "vias_biliares",
    "difficulty": "Subspecialist",
    "text": "En el contexto de la ictericia obstructiva perenne y un estricto diagnóstico endoscópico terapéutico. Si durante una CPRE en un paciente con alta sospecha de Colangiocarcinoma peri-hiliar (Tumor de Klatskin tipo II o III) cruzando estenosis hiliares se decide drenar, ¿cuál es el mandamiento o dogma preventivo endoscópico universal antes de inyectar contraste indiscriminado bilateral?",
    "options": [
      "\"Drenar todo lo que se contrasta\" (No inyectar sistemas intrahepáticos donde no pueda garantizarse un drenaje biliar exitoso asimilado)",
      "Realizar una esfinterotomía biliar magna profiláctica asimilativa antes de contrastar para botar aire ciego y purulento local",
      "Aspirar activamente con vacío el líquido biliar basal para descomprimir el conducto por 10 minutos",
      "Contrastar masivamente bilateral para mapear la geografía quirúrgica antes de intentar colocar drenajes plásticos in situ letales"
    ],
    "correctIndex": 0,
    "explanation": "Si se inyecta medio de contraste en un segmento biliar excluido o aislado por un Klatskin superior y luego no se logra cruzar una guía/stent para drenarlo, ese segmento queda ciego, presurizado por contraste y bacterias.",
    "fisiopato": "El segmento hepático \"contrastado pero no drenado\" desarrolla invariablemente colangitis química y bacteriana fulminante intrahepática cruzada letal.",
    "clinicalPearl": "Use MRCP (Resonancia) previa para el mapa o inyecte suavemente sólo el conducto objetivo bajo guía fluoroscópica asimilada si planea poner alambre, \"if you inject it, you MUST drain it\".",
    "guideline": "ASGE Biliary Drainage in Malignant Hilar Strictures.",
    "whyWrong": {
      "1": "No previene ni soluciona la retención alta intrahepática de líquido de contraste del Tumor de Klatskin cruzado.",
      "2": "Inofensivo a la presión del hilio si no cruza stents intra general.",
      "3": "Contrastar ciegamente bilateral cruzado sin garantizar drenaje es causa iatrogénica grave principal de sepsis post cpre."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-ph-014",
    "topic": "perfil_hepatico",
    "difficulty": "Fellow",
    "text": "En el contexto de la evaluación de un \"patrón hepatocelular\" (ALT y AST marcadamente elevadas), ¿qué cociente o relación (Ratio AST/ALT) es el hallazgo casi patognomónico clásico que sugiere abrumadoramente etiología por Hepatitis Alcohólica aguda o crónica severa?",
    "options": [
      "Relación AST/ALT mayor de 2:1 (a menudo 3:1), rara vez con AST superando los 500 UI/L",
      "Relación ALT/AST mayor a 4:1 con valores totales por encima de 5,000 UI/L puramente",
      "Ambas transaminasas elevadas simétricamente en rango de 10,000 UI/L con fosfatasa alcalina normal",
      "Relación AST/ALT menor a 1, típica de cualquier otra enfermedad viral aguda formal"
    ],
    "correctIndex": 0,
    "explanation": "La relación AST:ALT > 2 (o cociente de DeRitis) es altamente sugestiva de daño hepático por alcohol.",
    "fisiopato": "El déficit de piridoxina (Vitamina B6) en alcohólicos deprime masivamente la síntesis y actividad de ALT (que es altamente dependiente de B6). Además, el alcohol daña la mitocondria, de donde se libera isoenzima de AST extra que infla el numerador.",
    "clinicalPearl": "En hepatitis alcohólica pura \"de libro\", los valores brutos de AST y ALT rara vez superan los 500 o 1000. Si superan los 3,000, piense en toxicidad por paracetamol (acetaminofén) superpuesta o isquemia masiva.",
    "guideline": "AASLD Guidelines on Alcoholic Liver Disease.",
    "whyWrong": {
      "1": "La ALT alta es típica de NASH u obesidad viral, nunca mayor a AST en alcohol severo.",
      "2": "Transaminasas >10,000 sugieren isquemia profunda (\"hepatitis en shock\") o intoxicación pura paracetamol.",
      "3": "Describe perfil viral general, opuesto al daño alcohólico."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-ph-015",
    "topic": "perfil_hepatico",
    "difficulty": "Staff",
    "text": "En el estudio de un \"patrón colestásico\" anictérico (Fosfatasa Alcalina focalmente elevada con bilirrubina normal), ¿qué simple prueba enzimática sanguínea periférica adicional se solicita indispensablemente oro para confirmar que el origen de la Fosfatasa Alcalina (FA) es hepático-biliar y NO de origen óseo u placentario?",
    "options": [
      "Gamma-glutamil transferasa (GGT) o 5'-Nucleotidasa",
      "Lactato Deshidrogenasa (LDH) isoenzimas puros",
      "Amilasa o Lipasa sérica orales base",
      "Aldolasa o Creatina Cinasa (CPK) muscular"
    ],
    "correctIndex": 0,
    "explanation": "Si la fosfatasa alcalina (FA) está aisladamente sola alta, se debe probar que su origen es biliar.",
    "fisiopato": "La FA se produce abundantemente en el hueso (osteoblastos), intestino y placenta. La GGT y la 5-nucleotidasa, por el contrario, son altamente específicas del riñón, páncreas e hígado biliar pero nulas en hueso.",
    "clinicalPearl": "Si la FA está alta y la GGT es estrictamente normal, busque un problema óseo: Paget óseo, metástasis osteoblásticas, hiperparatiroidismo o paciente adolescente en estirón vivo puros.",
    "guideline": "ACG Clinical Guideline: Evaluation of Abnormal Liver Test Chemistries.",
    "whyWrong": {
      "1": "Marca destrucción aguda tisular genérica de linfoma, infarto u fallo orgánico masivo, no confirmador colestásico biliar.",
      "2": "Marcadores de necrosis acinar pancreática pura in vivo orales.",
      "3": "Marcador puramente de miopatías u daño muscular letal rabdomiólisis basal."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-hep-027",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "En el contexto de la Infección por el Virus de la Hepatitis C (VHC), ¿Cuál de las siguientes manifestaciones extrahepáticas es la más fuertemente asociada a este virus (considerada casi patognomónica cuando aparece) y que a menudo mejora o se resuelve tras la erradicación exitosa (Respuesta Virológica Sostenida) con antivirales de acción directa (AAD)?",
    "options": [
      "Crioglobulinemia Mixta (Tipo II o III) con vasculitis leucocitoclástica y afectación renal",
      "Poliarteritis Nodosa (PAN) clásica",
      "Eritema Nodoso en extremidades inferiores",
      "Enfermedad Inflamatoria Intestinal (EII)"
    ],
    "correctIndex": 0,
    "explanation": "La Crioglobulinemia Mixta es la manifestación extrahepática más fuertemente ligada al VHC, producto de la estimulación crónica de células B por el virus.",
    "fisiopato": "El VHC induce una proliferación clonal de linfocitos B que producen IgM monoclonales (con actividad de factor reumatoide) contra IgG policlonales, formando inmunocomplejos (crioglobulinas) que se precipitan con el frío y causan vasculitis en vasos pequeños (piel, riñón, nervios).",
    "clinicalPearl": "Todo paciente con púrpura palpable, artralgias y debilidad (Tríada de Meltzer) o glomerulonefritis membranoproliferativa debe ser examinado para VHC. La PAN está clásicamente asociada al virus de la Hepatitis B (VHB).",
    "guideline": "AASLD-IDSA HCV Guidance: Management of Extrahepatic Manifestations.",
    "whyWrong": {
      "1": "La PAN se asocia clásicamente al Virus de la Hepatitis B (VHB).",
      "2": "El eritema nodoso se asocia más a EII, infecciones estreptocócicas o tuberculosis, no específicamente al VHC.",
      "3": "La EII no tiene una asociación patogénica directa establecida con el VHC."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-hep-028",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "Un paciente adulto joven, HBsAg positivo, acude a su consulta. En el perfil serológico completo se encuentra: HBsAg (+), HBeAg (-), Anti-HBe (+), ADN del VHB elevado (por ej. 100,000 UI/mL) y niveles de ALT persistentemente elevados. ¿Cuál es el fenotipo virológico/clínico que mejor describe el estado de este paciente y cuál es el mecanismo subyacente más frecuente?",
    "options": [
      "Hepatitis Crónica por VHB con virus mutante precore/promotor del core",
      "Infección Crónica por VHB (fase de portador inactivo) con brote transitorio",
      "Infección Aguda por VHB en fase de ventana inmunológica",
      "Hepatitis B Crónica HBeAg positivo en fase de inmunotolerancia"
    ],
    "correctIndex": 0,
    "explanation": "Este paciente tiene una Hepatitis B crónica (ALT alta, DNA alto) pero con HBeAg negativo, un cuadro típico de los mutantes precore o del promotor del core.",
    "fisiopato": "El virus muta en la región precore (ej. mutación G1896A) o en el promotor basal del core, lo que impide la producción y secreción del antígeno \"e\" (HBeAg), a pesar de que el virus sigue replicándose activamente (ADN alto) y causando daño hepático (ALT alta).",
    "clinicalPearl": "Nunca asuma que HBeAg negativo significa \"virus inactivo\" si no evalúa la ALT y el ADN viral (Carga viral). Si el ADN viral es alto y hay inflamación (ALT alta) con HBeAg negativo, hay que tratar igual.",
    "guideline": "AASLD Hepatitis B Guidance: Update on Prevention, Diagnosis, and Treatment.",
    "whyWrong": {
      "1": "El \"portador inactivo\" (ahora llamado Infección Crónica HBeAg-) tendría ALT normal y ADN bajo (<2000 UI/mL).",
      "2": "En la fase de ventana aguda, el HBsAg sería negativo y el Anti-HBc IgM sería positivo.",
      "3": "El HBeAg es negativo, no positivo; por lo que no es una fase HBeAg+. Además, los inmunotolerantes tienen ALT normal."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-hep-029",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "Una mujer embarazada en su tercer trimestre es diagnosticada de forma aguda con ictericia severa, falla hepática fulminante y encefalopatía. La serología viral muestra positividad aguda para un virus de transmisión entérica. Dada la alta mortalidad (hasta 20-25% en embarazadas) asociada a este cuadro clínico, ¿Cuál es el patógeno viral más probable causante de esta infección aguda?",
    "options": [
      "Virus de la Hepatitis E (VHE)",
      "Virus de la Hepatitis A (VHA)",
      "Virus de la Hepatitis B (VHB)",
      "Citomegalovirus (CMV)"
    ],
    "correctIndex": 0,
    "explanation": "El VHE (genotipos 1 y 2) es tristemente célebre por causar hepatitis aguda severa y fallo hepático fulminante en el tercer trimestre del embarazo.",
    "fisiopato": "Se cree que la interacción entre factores virales, factores inmunológicos maternos (sesgo hacia respuesta Th2 en el embarazo) y receptores hormonales alterados predisponen a una necrosis hepática masiva y coagulopatía exacerbada.",
    "clinicalPearl": "En cualquier país en desarrollo (o paciente viajero reciente) embarazada con hepatitis fulminante aguda, la Hepatitis E es el principal sospechoso, transmitida vía fecal-oral/agua contaminada.",
    "guideline": "EASL Clinical Practice Guidelines on hepatitis E virus infection.",
    "whyWrong": {
      "1": "El VHA causa morbilidad, pero rara vez progresa a fallo fulminante característicamente alto en embarazadas en comparación con el VHE.",
      "2": "El VHB podría causar fallo, pero el VHE es la virología de respuesta \"de libro\" (board question) clásica para el embarazo.",
      "3": "El CMV causa problemas fetales (infección TORCH) y compromiso en inmunosuprimidos, no hepatitis fulminante aguda típica en mujeres de por lo demás sanas."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-hep-030",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "Se detecta a un paciente adulto con HBsAg positivo y ADN de VHB elevado que requiere iniciar tratamiento antiviral a largo plazo. Entre las opciones orales de primera línea (Entecavir, Tenofovir Disoproxil Fumarato [TDF] o Tenofovir Alafenamida [TAF]), el paciente presenta osteoporosis subyacente y enfermedad renal crónica incipiente (filtrado glomerular de 50 mL/min). ¿Cuál de los siguientes es el fármaco MÁS apropiado y seguro para elegir y por qué?",
    "options": [
      "Tenofovir Alafenamida (TAF) o Entecavir (ETV)",
      "Tenofovir Disoproxil Fumarato (TDF) a dosis plenas",
      "Lamivudina",
      "Interferón Pegilado alfa-2a"
    ],
    "correctIndex": 0,
    "explanation": "TDF (Tenofovir Disoproxil Fumarato) es nefrotóxico (lesión del túbulo contorneado proximal, raro pero real) y puede disminuir la densidad mineral ósea. En pacientes con riesgo óseo renal, se prefiere ETV o TAF.",
    "fisiopato": "TAF y ETV no exponen al riñón y al hueso a altos niveles sistémicos del medicamento como lo hace el TDF. TAF es un profármaco que entra directamente al hepatocito antes de convertirse a tenofovir activo, minimizando la circulación plasmática del fármaco.",
    "clinicalPearl": "Recuerde: si el paciente tiene \"huesos de cristal\" (osteoporosis) o \"riñones cansados\" (ERC, TFG <60), aléjese del TDF. Use TAF o Entecavir. (Nota de precaución: Entecavir no es buena opción si hay resistencia previa a Lamivudina).",
    "guideline": "AASLD Hepatitis B Guidance: Update on Prevention, Diagnosis, and Treatment.",
    "whyWrong": {
      "1": "TDF se asocia con riesgo de empeorar la tasa de filtración glomerular y la densidad ósea.",
      "2": "Lamivudina tiene una alta barrera de resistencia, provocando mutaciones virales rápidamente en tratamientos crónicos.",
      "3": "El IFN es mal tolerado, con muchos efectos secundarios, y se reserva en selectos pacientes jóvenes para intentos curativos cortos a pesar de su nulo impacto sobre los huesos/riñón renal en esta pregunta específica la respuesta focal es TAF/ETV."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-dia-023",
    "topic": "diarrea_aguda",
    "difficulty": "Subspecialist",
    "text": "Un joven que asiste a una barbacoa de verano acude a Urgencias 48 horas después con diarrea copiosa que evoluciona rápidamente hacia disentería severa (heces mucosanguinolentas), fiebre alta y dolor abdominal en el cuadrante inferior derecho. En el panel de heces por PCR se identifica el patógeno. Lo más alarmante es el desarrollo de convulsiones tónico-clónicas antes del ingreso. ¿Qué bacteria enteropatógena es la más probable causante de este cuadro neurológico además de la disentería extrema?",
    "options": [
      "Shigella dysenteriae (o sonnei) productora de toxina",
      "Escherichia coli Enterohemorrágica (EHEC / productora de Shiga)",
      "Campylobacter jejuni",
      "Staphylococcus aureus productora de enterotoxina"
    ],
    "correctIndex": 0,
    "explanation": "Shigella es conocida no solo por su disentería violenta inflamatoria con pequeña cuenta inoculante vírica, sino por sus manifestaciones extraintestinales inusuales como la encefalopatía y convulsiones en niños / jóvenes.",
    "fisiopato": "En el colon produce destrucción masiva invasiva epitelial (mucosanguinolenta). La toxina Shiga es primariamente neurotóxica y citotóxica en ciertos aislamientos de Shigella, induciendo un síndrome encefalopático o convulsivo transitorio y Síndrome Urémico Hemolítico (SUH).",
    "clinicalPearl": "Shigella tiene una dosis infecciosa minúscula (10-100 organismos). Convulsiones transitorias asociadas a diarrea sanguinolenta alta fiebre siempre gritan Shigella.",
    "guideline": "IDSA Clinical Practice Guidelines for the Diagnosis and Management of Infectious Diarrhea.",
    "whyWrong": {
      "1": "EHEC produce SUH y diarrea \"sanguinolenta pero a menudo ANTES sin fiebre o de febrícula baja\", y no se caracteriza típicamente por convulsiones directas iniciales previas al daño renal.",
      "2": "Campylobacter está altamente relacionado a Síndrome de Guillain-Barré periférico, no compulsivo central.",
      "3": "S. aureus intoxicante produce vómitos bruscos en 6 horas sin fiebre o disentería."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-dia-024",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "En el abordaje diagnóstico inicial del paciente adulto sano inmunocompetente que presenta diarrea aguda acuosa pura profusa, la cual lleva 2 días de evolución, el individuo carece de alarmas (sin sangre evidente, sin temperatura >38.5 ºC, sin signos de deshidratación grave, frecuencia cardiaca normal). De acuerdo a las guías de práctica clínica de IDSA y ACG, ¿Cuál es la prueba diagnóstica fecal inicial más costo-efectiva o aconsejada, asumiendo su primera evaluación en la emergencia o triage antes del egreso?",
    "options": [
      "No enviar estudios o cultivos fecales iniciales y manejar solo con rehidratación sintomática de soporte",
      "Solicitar de inmediato Panel Gastrointestinal Múltiple PCR (Filmarray)",
      "Enviar frotis para azul de metileno buscando leucocitos en moco fecal",
      "Cultivo bacteriano general de heces (coprocultivo) urgente"
    ],
    "correctIndex": 0,
    "explanation": "Las guías IDSA desaconsejan fuertemente someter a pruebas de patógenos o cultivos a pacientes con sospecha de diarrea aguda infecciosa si no existen características de enfermedad grave o de alto riesgo, debido a que casi todas son virales o autolimitadas.",
    "fisiopato": "Diarrea en un huésped inmunocompetente que no es severa suele remitir en menos de 7 días. La mayoría es de etiología viral y el tratamiento sea como sea será sintomático con reposición hidroelectrolítica oral.",
    "clinicalPearl": "Pida estudios si la diarrea sobrepasa los 7 días, hay sangre, el paciente sufre isquemia/SIDA, o de signos vitales sistémicos sépticos o brotes hospitalarios.",
    "guideline": "ACG Clinical Guideline: Diagnosis, Treatment, and Prevention of Acute Diarrheal Infections in Adults.",
    "whyWrong": {
      "1": "Pecado en costo-efectividad para manejo ambulatorio leve.",
      "2": "Frotis de moco tiene una sensiblilidad muy inexacta y ha dejado de ser práctica avalada rutinariamente.",
      "3": "El cultivo ordinario demora 48-72h y no modificará el curso de la acción actual en pacientes estables vírgenes a riesgos."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-dia-025",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "Tras el consumo de ostras o mariscos crudos en la bahía o aguas cálidas salobres, un paciente experimenta un evento diarreico coleriforme masivo junto a lesiones ampollosas hemorrágicas purpúricas asimilativamente oscuras generalizadas cutáneas y desarrollo de shock general tóxico. ¿Qué patógeno debe ser tratado inmediatamente u de urgencia debido a su potencial virulento letal rápido especialmente en personas con enfermedades hepáticas?",
    "options": [
      "Vibrio vulnificus o Vibrio parahaemolyticus diseminado a shock",
      "Salmonella typhi productora de endotoxinas severas",
      "Listeria monocytogenes",
      "Bacillus cereus cepa emetizante"
    ],
    "correctIndex": 0,
    "explanation": "Las especies de Vibrio no colérico (vulnificus y parahaemolyticus) abundan en moluscos y mariscos crudos.",
    "fisiopato": "Ingerir Vibrio vulnificus puede originar septicemia primaria explosiva, particularmente devastadora con un 50% de mortalidad en pacientes con Hepatopatía crónica subyacente (ej. cirrosis o hemocromatosis) donde causa gangrena bacteriana purpúrica y necrosis celulítica.",
    "clinicalPearl": "Recuerde las \"Ostras letales\": Si oye ostras crudas, verano marino y choque/ampollas purpúricas masivas puros = Vibrio vulnificus. El pilar es Doxiciclina más Cefalosporina de 3ra de inmediato.",
    "guideline": "IDSA Guidelines infectious diarrhea / management of marine exposures.",
    "whyWrong": {
      "1": "Salmonella da fiebre entérica y roseola (manchas rosadas), pero no está vinculada característicamente a aguas salobres / ostras en shock.",
      "2": "Listeria se asocia a quesos blandos, delis fríos, leche de empaque y lactantes/embarazos.",
      "3": "El B. cereus es de \"arroz viejo frito chino\" con vómito sin ampollas cutáneas por endotoxemía."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-hdb-011",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "Paciente de 75 años acude a Urgencias por presentar hematoquecia indolora pero masiva. Tiene antecedentes de constipación crónica e hipertensión. Sus constantes muestran taquicardia y tendencia a la hipotensión. Tras la reanimación inicial y estabilización, se realiza una colonoscopia urgente. El sangrado grave indoloro en este grupo etario, que a menudo se detiene espontáneamente pero tiene alto riesgo de resangrado, es clásicamente causado por:",
    "options": [
      "Diverticulosis colónica sangrante",
      "Angiodisplasia de colon derecho",
      "Colitis isquémica generalizada",
      "Cáncer colorrectal ulcerado masivo"
    ],
    "correctIndex": 0,
    "explanation": "El sangrado diverticular es la causa número uno de Hemorragia Digestiva Baja (HDB) masiva e indolora en adultos mayores.",
    "fisiopato": "La arteria vasa recta queda expuesta en la cúpula del divertículo, sufre erosión asimétrica y trauma local intraluminal, rompiéndose en la luz colónica y generando hematoquecia abrupta y arterial.",
    "clinicalPearl": "El sangrado por divertículo es abrupto, de gran volumen e indoloro. Las Angiodisplasias, aunque comunes, suelen causar sangramientos oscuros intermitentes o anemia crónica ferropénica y no un choque hemorrágico de inicio brusco.",
    "guideline": "ACG Clinical Guideline: Management of Patients with Acute Lower Gastrointestinal Bleeding.",
    "whyWrong": {
      "1": "Suele causar un rezumo crónico de bajo a moderado volumen, no choque asimilativo masivo fulminante inicial.",
      "2": "Presenta siempre dolor abdominal isquémico agudo, típicamente en fosa iliaca izquierda, seguido de diarrea sanguinolenta, raramente hemorragia exanguinante.",
      "3": "Tiende a presentar sangrado crónico oculto o hematoquecia leve asimilada a anemia."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-hdb-021",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "Un hombre de 68 años con hipertensión e hiperlipidemia presenta hematoquecia tras 2 episodios de dolor cólico abdominal en fosa iliaca izquierda seguidos de urgencia defecatoria. La colonoscopia muestra mucosa edematosa, eritematosa, friable y con petequias en segmento del colon descendente y sigma, respetando el recto. ¿Cuál es el diagnóstico más probable de esta hemorragia digestiva baja?",
    "options": [
      "Colitis isquémica segmentaria",
      "Diverticulosis sangrante",
      "Colitis infecciosa por E. coli O157:H7",
      "Proctitis ulcerosa o EII de debut tardío"
    ],
    "correctIndex": 0,
    "explanation": "La colitis isquémica es la forma más común de isquemia mesentérica. Clásicamente se presenta en mayores de 60 años con factores de riesgo cardiovascular, manifestándose como dolor abdominal tipo cólico agudo, urgencia, y luego hematoquecia o diarrea sanguinolenta. Suele afectar al colon izquierdo (zona watershed) respetando típicamente el recto debido a su rica doble vascularización.",
    "fisiopato": "Ocurre por una hipoperfusión transitoria (bajo flujo no oclusivo) en las zonas de distribución de la arteria mesentérica inferior, especialmente en los \"puntos débiles\" angiográficos como el ángulo esplénico (punto de Griffith) o la unión rectosigmoidea (punto de Sudeck).",
    "clinicalPearl": "Tríada clásica: dolor de inicio brusco en abdomen izquierdo + urgencia defecatoria + posterior emisión de sangre roja/coágulos. La rectosigmoidoscopia es el método ideal para confirmarlo rápidamente (se ve la mucosa parcheada edematosa).",
    "guideline": "ACG Clinical Guideline: Epidemiology, Risk Factors, Patterns of Presentation, Diagnosis, and Management of Colon Ischemia.",
    "whyWrong": {
      "1": "La hemorragia diverticular es TÍPICAMENTE indolora, sangra a chorro y raras veces debuta con cólico y urgencia diarreica.",
      "2": "E. coli enterohemorrágica causa diarrea sanguinolenta, pero no respeta especialmente el recto ni es segmentaria, afecta el colon derecho a menudo.",
      "3": "La colitis ulcerosa siempre afecta el recto (proctitis es mandatoria en la gran mayoría). Aquí el recto está respetado."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-hdb-022",
    "topic": "hdb",
    "difficulty": "Fellow",
    "text": "Durante la realización de una colonoscopia de escrutinio (screening) en un paciente de 55 años asintomático, se descubre una lesión polipoidea sésil de 3 cm en el colon derecho. Se planea una resección endoscópica mucosa (REM o EMR). Para minimizar el sangrado intraprocedimiento y post-procedimiento en estas lesiones grandes, ¿Cuál es el líquido preferido y con eficacia demostrada por guías endoscópicas para inyectar en la submucosa y crear el \"cojín\" (cushion)?",
    "options": [
      "Solución Salina con adrenalina (epinefrina) y un colorante (ej. azul de metileno o índigo carmín)",
      "Solución de Glucosa al 50% pura sin diluir",
      "Agua Estéril con contraste de bario",
      "Inyección de cianoacrilato (pegamento quirúrgico)"
    ],
    "correctIndex": 0,
    "explanation": "La inyección submucosa de una solución con epinefrina diluida no sólo eleva la lesión (separándola de la muscularis propia), sino que la epinefrina induce vasoconstricción local que reduce notablemente el sangrado inmediato durante la polipectomía o mucosectomía.",
    "fisiopato": "La epinefrina produce vasoespasmo local arteriolar. El colorante (índigo carmín) tiñe el plano de la submucosa de azul, permitiendo distinguir fácilmente las fibras musculares subyacentes y asegurar visualmente que la resección esté en el plano correcto y no sea demasiado profunda.",
    "clinicalPearl": "Nunca inyecte únicamente epinefrina sin elevar el pólipo adecuadamente. El objetivo primario es crear seguridad separando el pólipo del músculo. (Otras opciones como el ácido hialurónico crean un cojín más duradero, pero la base es solución coloidal/cristaloide + colorante + epinefrina).",
    "guideline": "ASGE Guideline: the management of benign colonic polyps.",
    "whyWrong": {
      "1": "La glucosa hiperosmolar causa daño tisular e inflamación, rara vez se usa sola así y no provee vasoconstricción local.",
      "2": "Agua estéril pura se disipa muy rápido (cojín de corta duración) y carece de poder hemostático.",
      "3": "El cianoacrilato es para várices gástricas sangrantes, no para crear cojines submucosos (endurecería el pólipo como una roca impidiendo el corte)."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-hdb-023",
    "topic": "hdb",
    "difficulty": "Staff",
    "text": "Usted evalúa a un anciano frágil de 85 años de edad con comorbilidades cardiopulmonares severas. Presenta HDB recurrente crónica debida a múltiples angiodisplasias en el colon derecho que han requerido transfusiones frecuentes, siendo refractarias a 3 sesiones previas de coagulación endoscópica con argón plasma (APC). Para detener este sangrado recurrente por angiodisplasias, el uso fuera de indicación (off-label) de qué terapia sistémica farmacológica ha demostrado tener mayor soporte en la literatura como rescate médico?",
    "options": [
      "Octreótida subcutánea de acción prolongada o análogos de somatostatina (Talidomida es otra opción)",
      "Corticosteroides sistémicos (Prednisona a altas dosis)",
      "Agentes antifibrinolíticos en spray luminal rectal (Ácido tranexámico en enemas)",
      "Betabloqueantes no selectivos orales de forma crónica"
    ],
    "correctIndex": 0,
    "explanation": "Para sangrados GI ocultos o crónicos obscuros por ectasias vasculares (angiodisplasias) que han fracasado o son inaccesibles a la endoscopia, el tratamiento con análogos de somatostatina (como Octreotide o Lanreotide) tiene un fuerte aval empírico de rescate.",
    "fisiopato": "La Octreótida reduce el flujo sanguíneo esplácnico directamente y baja los niveles de ciertos factores de crecimiento angiogénicos crónicos sistémicos. (La talidomida es también usada fuertemente por su efecto potente de frenado en el FGF y VEGF angiogénicos endovasculares).",
    "clinicalPearl": "En el anciano \"resangrador\" crónico donde ya agotó la APC de Argón, intente iniciar LAR de Octreotide o Lanreotide para librarlo de las transfusiones quincenales férricas.",
    "guideline": "ACG Clinical Guideline: Small Bowel Bleeding (Extrapolado para angiodisplasia general).",
    "whyWrong": {
      "1": "Los esteroides aumentan el riesgo de sangrado digestivo en un lecho friable y bajan la inmunidad de manera innecesaria aquí.",
      "2": "Enemas de tranexámico son para sangrados rectales puros proctopáticos, no alcalzan el colon derecho de angiodysplasia.",
      "3": "Los betabloqueadores son útiles e indicables en Hemorragias Variceales (Hipertensión portal) puros, no en hemorragia arteriovenosa capilar de base de angiodisplasia."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-hdb-024",
    "topic": "hdb",
    "difficulty": "Subspecialist",
    "text": "Al estudiar una hemorragia digestiva media u oscura en estudio de cápsula endoscópica por sangrado bajo refractario. Se identifica una masa submucosa sangrante y excavada en el yeyuno. Posterior a la resección quirúrgica del segmento, la inmunohistoquímica del tumor es positiva para c-KIT (CD117) y DOG-1. ¿Qué representa histológicamente esta lesión y cuál es su tratamiento médico sistémico de elección si hay características de alto riesgo o diseminación?",
    "options": [
      "Tumor del Estroma Gastrointestinal (GIST) - Manejo con Imatinib (Inhibidor de Tirosina Quinasa)",
      "Tumor Neuroendocrino de Intestino Delgado (Carcinoide) - Manejo con Octreotide",
      "Linfoma no Hodgkin de células T enteropatía tipo - Manejo con Quimioterapia",
      "Adenocarcinoma de yeyuno puramente mucinoso - Manejo con CAPOX"
    ],
    "correctIndex": 0,
    "explanation": "La presencia de c-KIT (CD117) positivo celular y DOG-1 positivo confirmatorio marca el diagnóstico patognomónico de un Tumor GIST.",
    "fisiopato": "Los GISTs derivan u originan de tumores en las células intersticiales de Cajal (marcapasos musculares intestinales). Usualmente presentan la mutación activa del receptor tirosina quinasa KIT o de PDGFRA, que orquesta su proliferación oncológica submucosa e infiltrativa ulcerante y sangrante vascular.",
    "clinicalPearl": "Cualquier tumor GI submucoso que sangre de tipo c-KIT positivo le \"grita\" GIST, y su bala mágica es el Imatinib, un fármaco que ha revolucionado su letal sobrevida en sobre 15 años.",
    "guideline": "NCCN Guidelines for Soft Tissue Sarcoma (GIST).",
    "whyWrong": {
      "1": "Los Tumores Neuroendocrinos son positivos para de base Marcadores celulares Sinaptofisina y Cromogranina (y no sangran usualmente de manera masiva primaria).",
      "2": "Los linfomas marcarían marcadores hematolinfáticos (T, B u o CD20).",
      "3": "Adenocarcinomas marcan para citoqueratinas focales de origen epitelial y crecen de la mucosa hacia abajo (no submucosos c-KIT)."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-hdb-026",
    "topic": "hdb",
    "difficulty": "Subspecialist",
    "text": "En el contexto de la anatomía vascular del colon, existen dos zonas limítrofes (watershed areas) vascularizadas por ramas terminales delgadas que son notoriamente vulnerables a eventos isquémicos transitorios por hipoperfusión sistémica. Estas regiones, que son la localización clásica de la colitis isquémica, corresponden a:",
    "options": [
      "El ángulo esplénico (Punto de Griffith) y la unión rectosigmoidea (Punto de Sudeck)",
      "El ciego y el íleon terminal",
      "El ángulo hepático y el colon transverso medio",
      "El recto distal y el canal anal submucoso"
    ],
    "correctIndex": 0,
    "explanation": "Las zonas \"watershed\" o limítrofes entre dos grandes territorios arteriales colónicos están mal perfundidas si cae la presión sistémica, por ser las más \"distales\" de las ramas anastomóticas.",
    "fisiopato": "El Ángulo Esplénico (Punto de Griffith) es la frontera entre la Arteria Mesentérica Superior y la Inferior (donde la arteria marginal de Drummond puede ser tenue). La Unión Rectosigmoidea (Punto de Sudeck) es el límite entre el flujo de la Mesentérica Inferior (arteria sigmoidea más baja) y las arterias ilíacas (arterias rectales), siendo otra zona vulnerable a isquemia.",
    "clinicalPearl": "Si un paciente añoso presenta HDB tras una cirugía de bypass cardíaco, un infarto o choque escéptico reciente, sospeche invariablemente Colitis Isquémica en fosa ilíaca izquierda o flanco izquierdo.",
    "guideline": "ACG Clinical Guideline Colon Ischemia.",
    "whyWrong": {
      "1": "Ciego e íleon tienen excelente flujo y vasta red colateral.",
      "2": "El ángulo hepático es territorio mesentérico superior muy bien nutrido o asimilado por la rama cólica derecha.",
      "3": "El recto recibe triple irrigación (arterias rectales superior, media e inferior), y casi nunca sufre de colitis isquémica aislada basal."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-dolor-abdominal-008",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "El signo de \"muralla abdominal\" o \"abdomen en tabla\" se refiere a una contracción permanente e involuntaria de la musculatura de la pared abdominal que no cede con la inspiración, constituyendo un marcador clínico clásico de peritonitis transmural. ¿La estimulación de qué estructura neural desencadena este arco reflejo de defensa?",
    "options": [
      "Nervios somáticos del peritoneo parietal",
      "Nervios autonómicos viscerales del peritoneo",
      "Inervación simpática esplácnica",
      "Nervios frénicos diafragmáticos"
    ],
    "correctIndex": 0,
    "explanation": "La rigidez abdominal involuntaria (abdomen en tabla) se debe a la irritación del peritoneo parietal (rico en fibras somáticas, muy sensibles y precisas).",
    "fisiopato": "El peritoneo parietal está inervado por aferentes somáticas de los nervios espinales de T7-L1. Al irritarse por bilis, sangre o contenido fecal, provocan un reflejo espinal de espasmo muscular (defensa abdominal).",
    "clinicalPearl": "El dolor visceral es sordo y difuso (Nervios autonómicos). El dolor de irritación peritoneal parietal es agudo, cortante y localizado con defensa (Nervios somáticos).",
    "guideline": "ACG Guidelines For Management of Acute Abdominal Pain in ER.",
    "whyWrong": {
      "1": "El peritoneo visceral no da defensa muscular, sino dolor vago periumbilical o epigástrico.",
      "2": "Los nervios autonómicos no controlan el músculo estriado de la pared abdominal.",
      "3": "El dolor referido por irritación diafragmática va al hombro (nervio frénico), no se presenta primariamente como \"abdomen en tabla\"."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-009",
    "topic": "dolor_abdominal",
    "difficulty": "Subspecialist",
    "text": "Mujer de 45 años, coleguicectomizada hace 5 años, consulta por cuadros de dolor agudo intenso en epigastrio y CSD, que duran más de 30 minutos y le interrumpen el sueño. Presenta elevación transitoria de AST y ALT durante el dolor, sin litiasis en la ecografía de vía biliar extrahepática o colangio-RM, y vía biliar no dilatada masiva. ¿Cuál es la sospecha principal fundamentada por los Criterios de Roma IV y cuál es el procedimiento (aunque reservado a casos refractarios y complejos) que sirve como Gold Standard de diagnóstico fisiopatológico?",
    "options": [
      "Disfunción del esfínter de Oddi (DEO) / Manometría del esfínter de Oddi",
      "Síndrome del intestino irritable (SII) / Tránsito colónico radiopaco",
      "Coledocolitiasis residual oculta / Ecografía transabdominal basal seriada",
      "Pancreatitis crónica inicial focal / Análisis de elastasa pancreática seriada"
    ],
    "correctIndex": 0,
    "explanation": "Los dolores tipo cólico recurrente post-colecistectomía episódicos acompañados de anormalidades en transaminasas plantean como alta presunción la Disfunción o discinesia/estenosis del Esfínter de Oddi, al causar elevación de las presiones coledocianas de manera paroxística.",
    "fisiopato": "La Disfunción del esfínter causa obstáculo funcional para drenar, y la Manometría a veces en el CPRE evidencia las presiones basales francamente hipertróficas o espasmos estelares puros que reavivan agudamente todo este dolor insidioso.",
    "clinicalPearl": "El dolor post-colecistectomía recurrente severo sin hallazgos obvios es clave de sospecha para Desórdenes de la vía biliar de Roma IV o DEO tipo funcional formal doloroso puramente esfinteriano subyacente.",
    "guideline": "Criterios de Roma IV de Trastornos Biliares y Pancreáticos",
    "whyWrong": {
      "1": "El SII no justifica las alzas agudas temporales de ALT/AST sistémicas formales hepáticas reportadas del caso.",
      "2": "La eco abdominal detecta fatal a microlitiasis y en un árbol de conductos subyacente normal y no dilatado mas isótropo al daño en orígenes microcósmicos basales; por ello, disfunción biliar lidera la etiología.",
      "3": "Una pancreatitis generaría cambios en lipasa general aguda sintomática constante que acá no son la primicia estelar biliar dolorosa aguda referenciada principal a los episodios reportados crónicamente insuflados en la ampolla."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-dolor-abdominal-010",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "¿En qué parte del intestino ocurre característicamente la oclusión vascular embólica aguda que desencadena el síndrome clínico conocido como \"Isquemia mesentérica aguda\", el cual se manifiesta inicialmente con un dolor desproporcionado respecto a los hallazgos en la exploración física?",
    "options": [
      "Intestino delgado (irrigado por arteria mesentérica superior)",
      "Estómago y curvatura menor",
      "Esófago distal",
      "Apéndice vermiforme"
    ],
    "correctIndex": 0,
    "explanation": "La isquemia mesentérica aguda clásica debida a un émbolo ocluye más comúnmente la arteria mesentérica superior, atacando primariamente al intestino delgado.",
    "fisiopato": "La arteria mesentérica superior irriga todo el intestino delgado y el colon derecho. Si un émbolo del corazón (Fibrilación Auricular) tapa su origen, hay isquemia fulminante de la mucosa y necrosis transmural e intenso dolor.",
    "clinicalPearl": "Dolor desproporcionado a la palpación = Isquemia mesentérica aguda hasta demostrar lo contrario. Si el dolor es mucho peor que lo evidenciable al tocar el abdomen, el intestino grita por falta de oxígeno.",
    "guideline": "ACG Guideline bleeding from Angiodysplasia and ischemia.",
    "whyWrong": {
      "1": "La irrigación del estómago es por el tronco celíaco y tiene amplia circulación colateral protectora.",
      "2": "La afección esofágica es un tema vascular diferente o de desgarros mucosos como Mallory-Weiss.",
      "3": "La apendicitis cursa con isquemia focal de la punta apendicular por obstrucción, no por isquemia vascular mesentérica global por un émbolo proveniente de corazón."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-011",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "Un varón de 50 años alcohólico activo consulta por epigastralgia crónica insidiosa que irradia en cinturón a la región dorsal y empeora al comer y en decúbito. Tuvo gran pérdida de peso y se detecta esteatorrea y diabetes reciente de novo. La TC evidencia calcificaciones estelares corporales parenquimatosas y dilataciones disociadas del conducto central pancreático. Sumado a la agresión estructural local y estenótica causante fundamental de aumento de la presión tisular y compresión isquémica nociva; ¿Qué mecanismo neurobiológico intrínseco de progresión de la enfermedad contribuye masivamente al dolor intratable subyacente reportado típicamente en esta letal entidad pancreática crónica?",
    "options": [
      "Inflamación persistente y desestructurante con infiltración leucocitaria e hipertrofia y perineuritis primaria severa de los nervios sensoriales intrapancreáticos intrínsecos",
      "Obturación y espasmo crónico hipertrofiado basal letálico del píloro subyacente duodenal y ciego duodenal como evento sincrónico y reflejo originador global del calvario",
      "Toxicidad química pura general isquémica secundaria de arterias celíacas estriadas colaterales de derivación general por su adicción estelar al etanol base global crónica",
      "Necrosis por deficiencia masiva focal linfocítica subcortical de su plexo mesentérico basal asociado de las asas proximales disfuncionales entéricas sincrónicamente crudas subyacentes"
    ],
    "correctIndex": 0,
    "explanation": "El dolor en Pancreatitis Crónica es de origen mecánico e hipertensivo y característicamente, neuropático.",
    "fisiopato": "Hay infiltración, desmielinización sútil y un marcado aumento celular perineural inflamatorio neurogénizado del propio nervio que manda mensajes fijos espinales centrales de dolor persistente, complicando su analgesia y provocando refractariedad fatal severa y crónica local al tratamiento farmacológico convencional.",
    "clinicalPearl": "El engrosamiento neural perineural intrapancreático está tan disfuncional que muchos pacientes crudos se benefician con apoyo modulares puros para la neuropatía inducida para atenuar este intenso umbral exacerbado subyacente que las calcificaciones generales por sí mismas detonan orgánicamente a nivel basal puro global continuo cráneo-espinal de vía ascendente a las vías somáticas locales viscerales referidas torácicas en el paciente.",
    "guideline": "ACG Clinical Guideline for Chronic Pancreatitis",
    "whyWrong": {
      "1": "Gastroparesia no genera este letal calvario inflamatorio hiperálgico intrapancreático crudo base doloroso nociceptivo en esta entidad clásica del bebedor crónico basal puro isquémico de la entidad de fondo.",
      "2": "No hay toxicidad ni micro isquemias oclusivas puras como un evento primario doloroso en este engrosamiento neuropático estelar.",
      "3": "Deficiencias plexales son inespecíficas del origen cráneo-caudal en un marco pancreático puramente originariamente crudo patológico."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-012",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Mujer de 45 años, multípara y con sobrepeso, presenta dolor agudo en hipocondrio derecho (CSD) que se irradia a la escápula derecha y la espalda. El dolor inició 1 hora después de cenar tacos al pastor. Presenta náuseas y orina oscura. Al examen presenta signo de Murphy positivo. ¿Cuál es el diagnóstico más probable y la prueba de imagen de elección inicial?",
    "options": [
      "Colecistitis aguda y Ecografía de abdomen (USG)",
      "Úlcera péptica perforada y TC",
      "Hepatitis viral y panel viral",
      "Pancreatitis y Tomografía de abdomen"
    ],
    "correctIndex": 0,
    "explanation": "El dolor en CSD postprandial (comida grasa) irradiado a escápula con signo de Murphy sugiere fuertemente patología biliar. La ecografía (USG) abdominal es la modalidad de primera línea, altamente sensible para cálculos biliares y signos de inflamación focal.",
    "fisiopato": "La obstrucción aguda del conducto cístico por un lito (cálculo) causa distensión, inflamación e isquemia de la pared de vesícula biliar.",
    "clinicalPearl": "Regla de las 4 \"F\": Female (mujer), Fat (obesidad), Forty (>40 años), Fertile (fértil), apuntan fuertemente a patología biliar (cólico biliar o colecistitis).",
    "guideline": "Tokyo Guidelines for management of acute cholangitis and cholecystitis.",
    "whyWrong": {
      "1": "Úlcera perforada no se desencadena sólo por una comida y el Murphy es negativo.",
      "2": "La hepatitis rara vez da dolor agudo tipo cólico y el Murphy suele ser negativo.",
      "3": "Pancreatitis duele en cinturón (epigastrio) y Murphy es negativo."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-013",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Paciente mujer de 48 años con antecedente de Bypass Gástrico en Y de Roux presenta desde hace varios meses dolor abdominal tipo cólico posprandial, distensión gaseosa notable abdominal (\"bloating\") y deposiciones diarreicas intermitentes. Los estudios endoscópicos son normales y no hay obstrucción en la Tomografía de abdomen. Un test de aliento con glucosa/lactulosa evidencia un alza temprana y extrema de gases de hidrógeno a los 40 minutos de manera muy patológica y concordante. ¿De cuál de las siguientes opciones clínicas el dolor es muy característico en su presentación clásica?",
    "options": [
      "Sobrecrecimiento Bacteriano del Intestino Delgado (SIBO) en el asa ciega Roux excluido",
      "Síndrome del Intestino Irritable subtipo Diarrea primaria no complicada",
      "Isquemia del Asa Biliar aferente secundaria a bridas inflamatorias latentes postoperatorias",
      "Colitis Ulcerativa del área pos-anastomótica exclusa sin inflamación general de la luz"
    ],
    "correctIndex": 0,
    "explanation": "El Bypass Gástrico altera drásticamente el tránsito, secreción ácida luminal y la motilidad. Esto crea la predisposición perfecta (especialmente en el 'asa ciega' biliopancreática y Roux) para un SIBO clínico que genere cólicos y distensión por gases bacterianos metabólicos fermentativos.",
    "fisiopato": "Las bacterias colonizan anormalmente el intestino delgado y fermentan rápidamente carbohidratos (como se ve en el peak del test de hidrógeno) produciendo excesivos gases y ácidos grasos de cadena corta que distienden, dan dolor e inducen diarrea.",
    "clinicalPearl": "Paciente pos-bariátrico, con tránsito endoscópico normal, pero meteorismo explosivo diario y dolor posprandial con diarrea = alta sospecha de SIBO. Rifaximina puede ofrecer un alivio categórico temporal.",
    "guideline": "ACG Clinical Guideline: Small Intestinal Bacterial Overgrowth (SIBO)",
    "whyWrong": {
      "1": "Se solapan muchos criterios, pero un aliento patológico confirmatorio con cirugía predisponente no es un cuadro 'primario o funcional' puramente de Roma, sino SIBO orgánico evidenciable.",
      "2": "Una isquemia daría signos serológicos (lactato o reactantes altísimos) y hallazgos isquémicos endoscópicos / TC notorios (pared engrosada o dilatación), no SIBO positivo franco gaseoso.",
      "3": "La Colitis Ulcerativa del asa ciega es sumamente infrecuente comparada a un simple SIBO y mostraría daño colónico severo concomitante y sangre endoscópica macroscópica masiva franca en área perianastomótica patológica."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-014",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Paciente varón de 75 años con antecedente de fibrilación auricular (FA) mal anticoagulada. Ingresa a la emergencia originando un dolor abdominal \"terrible\" que comenzó de forma muy súbita. Usted lo examina, y el abdomen está blando y no le duele casi nada cuando usted lo toca (abdomen no doloroso a la palpación, lo que contrasta con su queja de dolor intenso). ¿Qué entidad letal de dolor abdomen es la que describe un dolor \"desproporcionado a la exploración física\"?",
    "options": [
      "Isquemia Mesentérica aguda",
      "Pancreatitis aguda",
      "Apendicitis aguda",
      "Colecistitis aguda"
    ],
    "correctIndex": 0,
    "explanation": "El dolor \"desproporcionado a los hallazgos del examen físico\" en un paciente con factores de riesgo cardiovascular (como FA) es el sello de la isquemia mesentérica.",
    "fisiopato": "La obstrucción arterial brusca daña al tejido (dolor isquémico tremendo), pero el peritoneo no se irrita de inmediato (por eso el abdomen es blando al inicio).",
    "clinicalPearl": "Dolor abdominal severo con signos peritoneales ausentes = Isquemia mesentérica, en un paciente con FA.",
    "guideline": "ACG Guidelines.",
    "whyWrong": {
      "1": "La pancreatitis duele en cinturón, duele al tocar el epigastrio.",
      "2": "Apendicitis duele al tocar FID.",
      "3": "Colecistitis duele al tocar el CSD."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-015",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "En una radiografía simple de abdomen (incidencia en bipedestación o decúbito) de un paciente con abdomen agudo oclusivo, usted observa asas marcadamente dilatadas valvuladas transversalmente de pared a pared, que dan un aspecto clásico en \"pila de monedas\" (stack of coins). ¿A qué cuadro clínico corresponde este patrón radiológico patognomónico?",
    "options": [
      "Obstrucción de Intestino Delgado (SBO)",
      "Vólvulo de Sigmoides",
      "Íleo biliar",
      "Obstrucción colónica"
    ],
    "correctIndex": 0,
    "explanation": "El hallazgo de asas centrales dilatadas, apiladas (como \"pila de monedas\") y con niveles hidro-aéreos múltiples en la placa simple de abdomen es característico de Obstrucción de Intestino Delgado (SBO).",
    "fisiopato": "Las plicas circulares (válvulas conniventes) se extienden por toda la pared interior del intestino delgado, dando esa apariencia de pila de monedas.",
    "clinicalPearl": "Las asas de intestino grueso (colon) presentan austras, que no cruzan completamente la luz, diferenciándose de la \"pila de monedas\" del delgado.",
    "guideline": "ACG Guidelines for the Treatment of ALGIB.",
    "whyWrong": {
      "1": "Vólvulo de sigmoides da el signo del \"grano de café\" (coffee bean sign).",
      "2": "Íleo biliar da neumobilia, SBO y un lito ectópico.",
      "3": "Obstrucción colónica muestra dilatación periférica con austras."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-dolor-abdominal-016",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "¿Cuál es el diagnóstico presuntivo principal frente a un cuadro de dolor abdominal agudo localizado en epigastrio o hipocondrio derecho que se irradia hacia la escápula o el hombro homolateral, asociado a fiebre y leucocitosis, donde la exploración física revela un cese brusco de la inspiración a la palpación profunda del reborde costal derecho (signo de Murphy positivo)?",
    "options": [
      "Colecistitis aguda",
      "Pancreatitis",
      "Coledocolitiasis",
      "Apendicitis"
    ],
    "correctIndex": 0,
    "explanation": "Ese es el clásico Signo de Murphy, altamente sugestivo y la piedra angular del examen físico para la colecistitis aguda.",
    "fisiopato": "La inflamación de la vesícula biliar (colecistitis) hace que el peritoneo visceral suprayacente sea exquisitamente sensible a la palpación profunda.",
    "clinicalPearl": "Recuerda que la sensibilidad de Murphy ecográfico es incluso mejor.",
    "guideline": "ACG Guideline for Biliary disease.",
    "whyWrong": {
      "1": "Pancreatitis duele en cinturón y el Murphy es negativo.",
      "2": "Coledocolitiasis duele el CSD pero usualmente cursa con Ictericia franca.",
      "3": "Apendicitis duele en Fosa ilíaca derecha."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-017",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Un hombre de 45 años, con antecedentes de alcoholismo crónico, acude a emergencias con dolor abdominal epigástrico muy intenso, punzante, que se irradia \"en cinturón\" hacia la espalda. El dolor empeora al acostarse (decúbito supino) y mejora ligeramente al sentarse e inclinarse hacia adelante (posición mahometana). Presenta vómitos abundantes. A la exploración física, nota una coloración equimótica (amoratada) periumbilical. ¿Cómo se denomina este signo clínico y a qué complicación se asocia este cuadro?",
    "options": [
      "Signo de Cullen, asociado a Pancreatitis Necrohemorrágica Severa",
      "Signo de Grey Turner, asociado a Colecistitis aguda",
      "Signo de Rovsing, asociado a Apendicitis",
      "Signo de Murphy, asociado a Isquemia mesentérica"
    ],
    "correctIndex": 0,
    "explanation": "El Signo de Cullen (equimosis periumbilical) y el Signo de Grey-Turner (equimosis en flancos) indican sangrado retroperitoneal que se diseca hacia la piel, un sello clásico de la pancreatitis aguda necrohemorrágica severa.",
    "fisiopato": "Las enzimas pancreáticas (lipasas, proteasas) activadas destruyen el parénquima pancreático y erosionan los vasos sanguíneos vecinos, causando hemorragia retroperitoneal extensa.",
    "clinicalPearl": "Dolor en cinturón que alivia al inclinarse adelante = Pancreatitis. Si hay moretones (Cullen o Grey-Turner), la gravedad es altísima e indica hemorragia activa o necrosis profunda.",
    "guideline": "ACG Clinical Guidelines: Acute Pancreatitis.",
    "whyWrong": {
      "1": "Grey Turner es equimosis en flancos, no periumbilical, y es también de pancreatitis severa, no colecistitis.",
      "2": "Rovsing es dolor en FID al palpar la FII (apendicitis).",
      "3": "Murphy es dolor al inspirar palpando la vesícula."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-018",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "Mujer joven de 25 años es derivada a la consulta de Neurogastroenterología refiriendo dolor epigástrico intenso invalidante y ardor estomacal, con saciedad temprana permanente de 2 años de evolución, a pesar de usar IBP a dosis plenas diario. La Endoscopia Alta no reveló gastritis ni H. Pylori y sus ecografías fueron normales. El dolor ni se alivia ni empeora tras defecar (descartando SII). Se diagnosticó finalmente Dispepsia Funcional (Síndrome de Dolor Epigástrico). ¿Qué mecanismo central fisiopatológico explica primariamente el origen del dolor y saciedad precoz subyacente que requiere neuromoduladores como tratamiento basal a este nivel gástrico?",
    "options": [
      "Hipersensibilidad visceral gástrica junto a una alteración en el reflejo de acomodación gástrica secundaria a inflamación de bajo grado mucosa",
      "Neuropatía isquémica diabética autoinmune primaria generalizada oculta del fondo estomacal en la submucosa estriada",
      "Déficit primario generalizado y congénito de absorción biliar terminal del área del muñon de la ampolla fúndica gástrica",
      "Síndrome carcinoide de células G no secretantes productoras únicamente de sustancia P de origen en el cardias superior gástrico"
    ],
    "correctIndex": 0,
    "explanation": "La hipersensibilidad visceral al estiramiento (mecánico) o ácido residual y la pérdida o falla en el reflejo normal vagal de tipo vasovagal llamado \"acomodación fúndica\" (al comer) subyacen a los fenotipos de dispepsia funcional.",
    "fisiopato": "Las terminaciones aferentes están sensibilizadas (procesamiento sensorial deficiente o inflamación sutil en las redes neurales), haciendo que volúmenes normales desencadenen dolor o saciedad.",
    "clinicalPearl": "El estomago de la Dispepsia duele ante señales químicas leves que otros ignoran; amerita anti-depresivo (como amitriptilina o mirtazapina) como neuromodulador.",
    "guideline": "AGA and ACG Clinical Guideline for Functional Dyspepsia 2017",
    "whyWrong": {
      "1": "Ninguna neuropatía autoinmune estriada existe formalmente acá. El estómago es músculo liso.",
      "2": "La circulación no gástrica biliar (las sales biliares) son duodeno íleon.",
      "3": "Cárcinoide daría flushing o secreciones; no encaja en dispepsia puramente funcional típica por Roma 4 sin sustento endocrinológico masivo probatorio."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-dolor-abdominal-019",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Un joven de 18 años consulta por dolor periumbilical que fue migrando lentamente a lo largo de semanas y meses para localizarse de forma sorda y continua en el cuadrante inferior derecho. Presenta diarrea sin sangre ocasional, pérdida de peso, llagas en la boca y aftas. Al examen físico se palpa una masa empastada y dolorosa en Fosa Iliaca Derecha. El Score de Alvarado no sugiere un evento agudo quirúrgico. ¿Qué hallazgo endoscópico/histológico es característico de esta patología idiopática que justifica un dolor abdominal crónico estructural en dicha topografía?",
    "options": [
      "Inflamación transmural con lesiones \"en parches\" (skip lesions) y granulomas no caseificantes en el íleon terminal",
      "Inflamación superficial continua confinada a la mucosa que nace siempre en el recto",
      "Biopsias duodenales atróficas con anticuerpos antitransglutaminasa positivos",
      "Úlceras con base caseosa necrótica y bacilos ácido-alcohol resistentes positivos"
    ],
    "correctIndex": 0,
    "explanation": "El cuadro clínico de dolor crónico en fosa ilíaca derecha, masa empastada (plastrón inflamatorio), baja de peso y síntomas extraintestinales orales sugieren fuertemente Enfermedad de Crohn localizada en e íleon terminal-ciego.",
    "fisiopato": "El proceso transmural idiopático engruesa la pared del íleon (formando estenosis y fístulas), causando dolor cólico abdominal subagudo referenciado a la zona baja derecha, imitando o reemplazando al diagnóstico de apendicitis aguda.",
    "clinicalPearl": "El Crohn ileocecal genera el clásico \"dolor apendicular que nunca operan y dura meses\", asociado a diarrea, estenosis y signos de malabsorción.",
    "guideline": "ACG Clinical Guideline for Management of Crohn's Disease.",
    "whyWrong": {
      "1": "Es el patrón tisular de la Colitis Ulcerosa, que no ataca al íleon terminal (salvo backwash) y sangra groseramente en cada deposición.",
      "2": "Describe Enfermedad Celíaca, cursando con absorción deficiente pero sin formación de masivos plastrones en fosa ilíaca derecha.",
      "3": "Es Tuberculosis Intestinal; aunque gusta ubicarse en íleon, un paciente de 18 años, con aftas focales orales típicas del fenotipo de enfermedad inflamatoria empuja al Crohn fuertemente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-020",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Paciente masculino de 40 años, consumidor habitual de AINEs por dolor lumbar. Acude por inicio súbito hace 2 horas de dolor epigástrico intenso, lacerante y postración. Su abdomen está rígido \"en tabla\" de forma difusa. Una radiografía de tórax de pie (PA) muestra aire libre subdiafragmático en ambos hemidiafragmas. ¿Cuál es la entidad más probable y su tratamiento primario?",
    "options": [
      "Úlcera péptica perforada - Requiere cirugía de emergencia (Laparotomía/Laparoscopia exploradora y parche anatómico)",
      "Pancreatitis aguda grave - Requiere fluidoterapia IV masiva y observación en UCI",
      "Cólico biliar complicado - Requiere Colecistectomía electiva",
      "Isquemia mesentérica aguda - Requiere anticoagulación urgente"
    ],
    "correctIndex": 0,
    "explanation": "La presentación de abdomen agudo rígido súbito (\"en tabla\") en un paciente que toma AINEs, sumado a neumoperitoneo (aire libre subdiafragmático radiológico), es patognomónico de úlcera péptica perforada.",
    "fisiopato": "La ulceración profunda gástrica o duodenal destruye todas las capas del estómago y se perfora, derramando contenido gástrico ácido al peritoneo (peritonitis química inicial, luego bacteriana) y liberando el aire intraluminal hacia la cúpula diafragmática.",
    "clinicalPearl": "Neumoperitoneo en un paciente virgen de cirugía = Víscera hueca perforada (90% estómago o duodeno). ¡Es una emergencia quirúrgica absoluta; no pierda tiempo con endoscopias, está contraindicada!",
    "guideline": "WSES Guidelines for perforated and bleeding peptic ulcer.",
    "whyWrong": {
      "1": "Pancreatitis no produce aire libre intraabdominal.",
      "2": "El cólico biliar no da abdomen en tabla ni neumoperitoneo.",
      "3": "La isquemia mesentérica puede perforar a largo plazo, pero la clínica inicial de AINEs asocia clásica y mecánicamente a úlcera."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-021",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Una paciente de 35 años presenta cuadros de dolor recurrente en el cuadrante superior derecho, típicamente tras comidas copiosas, que alivian a las pocas horas. En la ecografía (USG) abdominal se documenta engrosamiento de la pared vesicular (4 mm) y algo de \"barro biliar\" (sludge) con microlitiasis, sin cálculos claros y vía biliar normal. Tiene antecedente de cirugía bariátrica (Bypass Gástrico) hace 1 año con pérdida masiva de peso (>40 kg). ¿Cuál es la fisiopatología principal del inicio de este lodo o cálculos post-cirugía bariátrica?",
    "options": [
      "Estasis vesicular prolongada y sobresaturación de colesterol debido a la alteración anatómica y pérdida de peso rápida",
      "Infección crónica por bacterias productoras de beta-glucuronidasa formadoras de litos pigmentados café",
      "Hemólisis crónica vascular por deficiencia severa de vitamina B12 no absorbida",
      "Obstrucción mecánica del conducto colédoco por un clip quirúrgico mal colocado de la bariátrica"
    ],
    "correctIndex": 0,
    "explanation": "La pérdida de peso drástica es un factor de riesgo mayoritario para formar litos de colesterol y barro biliar, muy frecuentemente luego de cirugía bariátrica o dietas ultra restringidas.",
    "fisiopato": "Al perder peso rápidamente y no ingerir la misma cantidad de grasa (debilitando el estímulo de contracción por colecistoquinina CCK), la vesícula padece \"estasis\", acumulando mucina vesicular y el colesterol movilizado, sedimentando en barros o cálculos formados.",
    "clinicalPearl": "A cualquier paciente sometido a un bypass gástrico o gastrectomía en manga, se le suele recetar Ácido Ursodesoxicólico preventivo (Ursodiol) durante 6 meses para prevenir estos infames cólicos biliares post-operatorios.",
    "guideline": "SAGES/ASMBS Guidelines for operative management of bariatric patients.",
    "whyWrong": {
      "1": "Los litos bacterianos pigmentados café asocian estasis de vía biliar, no vesicular directa.",
      "2": "Hemólisis formaría cálculos negros, no barro. No suele ocurrir por anemia tras bariátrica.",
      "3": "Un error quirúrgico causaría problemas a días post-cx, no formación estancada 1 año después."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-022",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Paciente de 60 años, en seguimiento por un cuadro compatible con diverticulitis aguda del colon izquierdo, persiste con dolor focalizado y alza térmica. La tomografía computarizada (TC) de abdomen con contraste intravenoso confirma diverticulitis asociada a una colección abscesificada pericolónica de 5 cm de diámetro (estadio de Hinchey Ib/II). No se evidencian signos de peritonitis libre. Según las guías clínicas actuales, ¿cuál es el abordaje terapéutico de primera línea para este absceso de gran tamaño?",
    "options": [
      "Drenaje percutáneo guiado por ecografía o TC + Antibióticos intravenosos",
      "Cirugía de urgencia (Procedimiento de Hartmann)",
      "Antibióticos orales ambulatorios con dieta líquida estricta",
      "Resección laparoscópica electiva inmediata con anastomosis primaria"
    ],
    "correctIndex": 0,
    "explanation": "Para la diverticulitis complicada con un absceso significativo (>3-4 cm) sin peritonitis franca generalizada (Hinchey I b o II), el estándar de oro actual es el drenaje percutáneo guiado por imagen.",
    "fisiopato": "Drenar la bolsa subyacente de pus alivia la toxemia y la tensión local, permitiendo que la inflamación aguda de la pared colónica \"se enfríe\" antes de planear una cirugía electiva más segura semanas después en tejido no friable.",
    "clinicalPearl": "Absceso diverticular < 3 cm = Antibióticos IV y observación. Absceso > 4 cm = Drenaje Percutáneo. Peritonitis libre (aire o líquido libre masivo = Hinchey III y IV) = Cirugía urgente (Hartmann).",
    "guideline": "ASCRS Clinical Practice Guidelines for the Management of Left-Sided Colonic Diverticulitis.",
    "whyWrong": {
      "1": "El Hartmann se reserva para peritonitis difusa con inestabilidad (Hinchey III/IV).",
      "2": "Un paciente con un absceso de 5 cm no es candidato a manejo médico oral ambulatorio, requiere ingreso y drenaje.",
      "3": "Operar tejido en fase inflamatoria aguda extrema aumenta la tasa de dehiscencias y la necesidad de colostomía abierta de todos modos."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-023",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "En el contexto de una pancreatitis aguda catalogada inicialmente como severa, el inicio de soporte nutricional temprano dentro de las primeras 24-48 horas se ha consolidado en las guías recientes. ¿Qué estrategia o vía de nutrición precoz ha demostrado de manera contundente la mayor reducción en el riesgo de infección de la necrosis pancreática, falla multiorgánica y mortalidad, en franca superioridad a la nutrición parenteral de inicio temprano?",
    "options": [
      "La Nutrición Enteral precoz (por SNG, Sonda Nasoyeyunal o dieta oral si la tolera)",
      "La Nutrición Parenteral Total (NPT) temprana en las primeras 24 hrs",
      "Ayuno estricto (\"reposo intestinal total\") por 7 días con hidratación IV exclusiva",
      "Uso rutinario de antibióticos profilácticos sin nutrientes (Cilastatina/Imipenem puro en fase aguda)"
    ],
    "correctIndex": 0,
    "explanation": "Las guías del AGA y ACG favorecen abrumadoramente el inicio temprano de Nutrición Enteral en lugar de Nutrición Parenteral o estar en ayuno prolongado.",
    "fisiopato": "Mantener la alimentación enteral preserva la integridad de la barrera mucosa intestinal y evita la translocación bacteriana desde el íleon/colon hacia la necrosis pancreática, disminuyendo de forma letal la tasa de abscesos y sepsis de origen pancreático.",
    "clinicalPearl": "El concepto de \"Poner a descansar el páncreas\" mediante NPT o ayuno de 8 días ha sido refutado. Use la vía enteral (oral si come sin dolor y sin vomitar; sonda nasogástrica o nasoyeyunal si no).",
    "guideline": "AGA Institute Guideline on Initial Management of Acute Pancreatitis.",
    "whyWrong": {
      "1": "La NPT tiene mayores tasas de sepsis de catéter, hiperglicemia e infección necrotizante que la enteral.",
      "2": "El ayuno >48-72h desnutre y barre el epitelio intestinal (atrofia vellositaria), induciendo translocación bacteriana masiva.",
      "3": "El uso de antibióticos \"profilácticos\" en pancreatitis grave sin infección diagnosticada no aporta un beneficio validado para prevenir mortalidad y selecciona mega-resistencias fúngicas."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-dolor-abdominal-024",
    "topic": "dolor_abdominal",
    "difficulty": "Subspecialist",
    "text": "Una mujer diabética de 70 años con colecistectomía hace 5 años presenta fiebre persistente, ictericia y dolor sordo en cuadrante superior derecho. Su Ecografía no fue concluyente por gas intestinal. La CPRE está contraindicada por inestabilidad cardiopulmonar extrema e intolerancia actual a la intubación y ventilación invasiva para una endoscopia mayor. La Colangio-Resonancia confirma lodo biliar en dilataciones segmentarias intrapáticas del lóbulo hepático izquierdo y cálculos impactados en un coledoco distal angosto por cáncer de cabeza de páncreas subyacente. En este complejo escenario intrahospitalario, ¿Qué intervención radiológica es el rescate de elección para aliviar esta colangitis obstructiva con dolor sostenido y sepsis?",
    "options": [
      "Drenaje biliar transhepático percutáneo (PTBD)",
      "Litotricia extracorpórea por ondas de choque (ESWL)",
      "Acido ursodesoxicólico oral en altas dosis",
      "Laparotomía exploradora urgente para realizar una derivación biliodigestiva en y de Roux"
    ],
    "correctIndex": 0,
    "explanation": "El drenaje biliar transhepático percutáneo (PTBD, realizado por Radiología Intervencionista) es el rescate biológico de elección en pacientes con colangitis aguda severa que no son aptos o fallan al drenaje por vía CPRE transpapilar.",
    "fisiopato": "Se avanza una aguja larga desde el flanco intercostal derecho guiándose por rayos X u ecografía, entrando directamente a conductos biliares periféricos dilatados por encima de la obstrucción (como en la vía hepática izquierda dilatada), dejando una sonda de derivación que deprime todo el árbol biliar pélvico séptico hacia la piel.",
    "clinicalPearl": "Regla de Oro en Colangitis Obstructiva: Drenar la pus SIEMPRE. Primera vía: CPRE. Si CPRE falla o el paciente es un paciente de UCI terminal frágil intolerante a la sedación: llame al Mago de la IR para realizar un PTBD percutáneo (Drenaje Transhepático Percutáneo).",
    "guideline": "Tokyo Guidelines for Management of acute Cholangitis.",
    "whyWrong": {
      "1": "ESWL es para cálculos de gran tamaño en pacientes crónicos estables; no soluciona el estancamiento de fiebre y pus aguda obstructiva maligna de inmediato.",
      "2": "El ursodiol sirve como disolución en un año y no salva a alguien séptico cerrado con cáncer inferior ocluyendo las tuberías.",
      "3": "En alguien inestable con disfunción cardíaca extrema o fragilidad no extubable, una Laparotomía Abierta masiva cursa con >50% de mortalidad y es absolutamente irracional para urgencia simple."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-dolor-abdominal-025",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Para el control sintomático del síndrome del intestino irritable con predominio de diarrea (SII-D) severo o refractario a terapias antidiarreicas de primera línea, que además se asocia constantemente a un dolor abdominal cólico crónico, ¿cuál de las siguientes opciones representa un agente neuromodulador clave apoyado por las guías especializadas para intervenir sobre ambos síntomas (dolor crónico y habitos alterados)?",
    "options": [
      "Antidepresivos Tricíclicos (ej. Amitriptilina a baja dosis)",
      "Analgésicos opioides (ej. Tramadol o Morfina de acción retardada)",
      "Nitratos vasodilatadores (ej. Isosorbide)",
      "Inhibidores de la bomba de protones (ej. Omeprazol)"
    ],
    "correctIndex": 0,
    "explanation": "Los Antidepresivos Tricíclicos (TCAs), como la amitriptilina o desipramina a dosis bajas (10-25 mg), reducen sustancialmente el dolor visceral neuropático en SII y, al tener efecto anticolinérgico basal, ralentizan el tránsito intestinal (ideal en SII-D).",
    "fisiopato": "Bloquean la recaptación de noradrenalina y serotonina suprarregulando el gatillo nociceptivo en el SNC de abajo hacia arriba del eje cerebro-intestino. Su efecto adverso (\"antimuscarínico\" de constipación y sequedad bucal) aquí es una bala terapéutica para frenar los cólicos e idas rápidas al inodoro.",
    "clinicalPearl": "En SII predominantemente de Diarrea, la Amitriptilina \"seca y estriñe\", aliviando calambres. En SII Constipante (SII-C), opte preferencialmente por ISRS (Fluoxetina) ya que promueven tránsito intestinal general.",
    "guideline": "ACG Clinical Guideline: Management of Irritable Bowel Syndrome.",
    "whyWrong": {
      "1": "Usar narcóticos crónicamente para un dolor visceral funcional es una receta garantizada para originar un Síndrome del Intestino Narcótico (Dolor abdominal paradójico y obstrucción por opiodes a repetición).",
      "2": "No influye en el colon pélvico sino a nivel vasogénico o cardiaco, solo alivia en base a espasmo esofágico o isquémico en agudo.",
      "3": "Los IBP asumen rol en acidez fúndica de ERGE o epigástrico de Úlcera P, inactivos en inflamación del colon cólico idiopático."
    },
    "pillar": "Board Prep"
  },
  {
    "id": "q-dolor-abdominal-026",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "Varón de 28 años sin antecedentes, inicia con dolor periumbilical cólico vago. A las 8 hrs de evolución, el dolor es de agudo punzante intenso constante, trasladándose a la fosa iliaca derecha y en \"tabla\". Tras operarlo emergente hallan el apéndice inflamado focalmente pero sin necrosis ni perforación masiva, sin líquido general, pero con una peritonitis localizada fibrosa. En el análisis del bloque apendicular remitido en Patología, describen una masiva y densa infiltración inflamatoria rica en eosinófilos que rodea la base vascular, sin invasión granulomatosa ni patógenos macrocelulares o parásitos ovogénicos visualizados. Tiene en su HC previa asma activa pero sin diarreas recurrentes. ¿Qué etiología infrecuente a nivel de alergias podría subyacer en el órgano y ser el disparador de dolor focal agudo obstructivo apendicular al imitar biológicamente toda la catástrofe somática aguda?",
    "options": [
      "Una reacción aguda secundaria a Gastroenteritis Eosinofílica con compromiso apendicular",
      "Tuberculosis intestinal primaria (Fase precoz)",
      "Divertículo de Meckel fistulizado con reacción cruzada serosa",
      "Metástasis focalizada de Tumor Neuroendocrino de ciego"
    ],
    "correctIndex": 0,
    "explanation": "Aunque sumamente raro en la práctica diaria, el daño apendicular agudo e hiperagudo puramente eosinofílico enmarcado por base alérgica asmática sugiere una Enteropatía/Gastroenteritis Eosinofílica que atrapó su porción transmural serosa u obstructiva basal pélvica.",
    "fisiopato": "La degranulación masiva de la Eosinofilia mediada por L Th2 tisular origina toxinas (Proteína Básica Mayor) que hinchan la mucosa e hipertrofia del músculo liso en la reducida base cecal obstructiva de su apéndice, desatando una estrangulación vascular mecánica similar a si hubiera heces puras obstructivas (fecalito).",
    "clinicalPearl": "Cualquier reporte macro-patológico \"raro\" inflamatorio que describa Eosinófilos difusos transmurales que NO explican clásicamente a una apendicitis purulenta bacteriana flegmonosa, haga la anamnesis buscando Alergias, asma o parásitos raros general. Si no hay bicho orgánico general o parásito y se halla un recuento atópico de asma con IGE altos, es parte del espectro atópico eosinofílico GI.",
    "guideline": "ACG Clinical Guideline : Eosinophilic Gastrointestinal Diseases.",
    "whyWrong": {
      "1": "Rusia o Tisis mesentérica presenta clásicamente la aparición de un granuloma Caseoso denso u células de Langerhans, a menudo de forma crónica malabsorbible en ciego, rara un flashbang a de eosinófilo agudo aislado focal asintomático previó en occidente y en apéndice puros.",
      "2": "Meckel no cruza de base atópica eosinofilica transmural hacia un asma focal.",
      "3": "Tumores neuroendocrinos provocan tumores de glándula o nidos submucosos densos y no una degranulacion alérgica inflamación celular roja focal sin parásito."
    },
    "pillar": "Mastery"
  },
  {
    "id": "q-dolor-abdominal-027",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Mujer de 68 años con fibrilación auricular ingresa por dolor abdominal sordo, progresivo en flanco y fosa iliaca izquierda, asociado a rectorragia leve de sangre oscura y coágulos (hematoquecia). No refiere dolor desproporcionado previo y su abdomen es depresible pero muy doloroso a la palpación en el hemiabdomen izquierdo. Nunca antes tuvo esto. Sus signos vitales son estables y no hay peritonitis. La TC abdomen con contraste muestra engrosamiento circunferencial de la pared del colon izquierdo (zona del ángulo esplénico y colon descendente) con preservación rectal. ¿Cuál es el diagnóstico clínico más probable?",
    "options": [
      "Colitis Isquémica",
      "Diverticulitis aguda",
      "Isquemia Mesentérica aguda (arterial embólica de intestino delgado)",
      "Enfermedad de Crohn colónica de inicio en anciano"
    ],
    "correctIndex": 0,
    "explanation": "La colitis isquémica se presenta clásicamente en ancianos con factores de riesgo cardiovascular (p. ej., FA, hipoperfusión pélvica) presentando dolor pélvico/flanco izquierdo seguido por hematoquecia (diarrea sanguinolenta) debido a que la mucosa expuesta sufre necrosis e infarto. Es la isquemia GI más común.",
    "fisiopato": "La isquemia del colon (típicamente por \"underperfusion\" de territorio de la arteria mesentérica inferior o zonas interdivisorias watershed como el ángulo esplénico y unión rectosigmoidea) es a menudo transitoria de la mucosa, y cursa focalmente en el intestino grueso a diferencia del infarto letal mesentérico superior del intestino delgado.",
    "clinicalPearl": "En ancianos: Dolor agudo FII abdominal inferior + Defecación con sangre roja/oscura = Colitis Isquémica hasta demostrar lo contrario. Típicamente conservador (Fluidos, reposo intestinal), a diferencia de la catástrofe de IAM o isquemia mesentérica del delgado.",
    "guideline": "ACG Clinical Guidelines: Epidemiology, Risk Factors, Patterns of Presentation, Diagnosis, and Management of Colon Ischemia.",
    "whyWrong": {
      "1": "Diverticulitis rara vez sangra francamente (o se inflama o sangra, pero raramente ambos al unísono intenso).",
      "2": "La isquemia mesentérica arterial causa dolor DESPROPORCIONADO del intestino delgado (SMI) de todo el abdomen, a menudo con acidosis severa y falta de sangrado rectal en la fase temprana antes del infarto purulento.",
      "3": "El Crohn rara vez arranca a los 68 años agudamente con sangrado focal y engrosamiento en área isquémica colónica."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-028",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Un paciente de 55 años, varón, bebedor pesado, llega a la sala de emergencias con dolor epigástrico intenso, de instauración progresiva durante los últimos 2 días, fiebre, leucocitosis profunda (Elevación de glóbulos blancos) e ictericia en las escleras (Bilirrubina total elevada, de predominio conjugado). Además presenta hepatomegalia blanda y muy dolorosa. En su laboratorio, la AST es de 350 y la ALT es 150. ¿Cuál fármaco sería mandatorio considerar (según el Maddrey Discriminant Function) como salvador de vida si el índice Maddrey es severo (mayor a 32)?",
    "options": [
      "Corticosteroides (Prednisolona)",
      "Infliximab (Biológico Anti-TNF)",
      "Inhibidores de Bomba de Protones IV (Pantoprazol)",
      "N-acetilcisteína (NAC)"
    ],
    "correctIndex": 0,
    "explanation": "Estamos ante una Hepatitis Alcohólica Aguda Severa. En estos pacientes subagudos pero explosivos, los corticosteroides (Prednisolona) a las dosis correctas han demostrado la mejor sobrevida a los 28 días cuando el DF es mayor o igual a 32.",
    "fisiopato": "El daño inducido por alcohol a los hepatocitos desata una respuesta necroinflamatoria furiosa reclutando macrófagos citotóxicos, la cascada intercelular masiva es inmunosuprimida radicalmente por la Prednisolona logrando bajar el reclutamiento que destruiría el hígado en horas.",
    "clinicalPearl": "Hepatitis Alcohólica Aguda: Ictericia reciente, dolor de hígado difuso, fiebre leve y un patrón AST a ALT de 2:1 (a menudo las transaminasas no pasan de 500). El Factor Discriminante de Maddrey (MDF) ≥ 32 guía el inicio de esteroides. Puntuación calculada usando el Tiempo de Protrombina y la Bilirrubina Total.",
    "guideline": "AASLD guidelines for diagnosis and treatment of alcohol-associated liver diseases.",
    "whyWrong": {
      "1": "Infliximab no tiene rol agudo aprobado que venza a los corticosteroides a la fecha para salvar al hígado alcohólico.",
      "2": "El pantoprazol baja el ácido gástrico pero no la desorganizada inflamación portal lobular hepática.",
      "3": "La NAC se usa en intoxicación por Acetonaminofeno (Paracetamol) masivo, no en tormenta alcohólica aguda idiopática del parénquima."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-029",
    "topic": "dolor_abdominal",
    "difficulty": "Staff",
    "text": "Paciente oncológico en estadio avanzado bajo tratamiento con Quimioterapia paliativa y dosis elevadas de Morfina (opioides) por dolor crónico incapacitante. Ahora acude con distensión abdominal gigante, dolor difuso y ausencia de deposiciones por 5 días. La placa de abdomen simple muestra dilatación masiva del todo el colon, especialmente el ciego (es superior a los 11 cm) pero NO se visualiza ninguna obstrucción mecánica obvia por cáncer o heces en el rectosigmoides en la Tomografía de Abdomen. El estado mental es normal. ¿Qué nombre recibe este cuadro clásico de seudoobstrucción aguda del colon que el Gastroenterólogo debe dominar y que ameritaría Neostigmina bajo monitoreo?",
    "options": [
      "Síndrome de Ogilvie (Pseudoobstrucción Colónica Aguda)",
      "Vólvulo del Ciego",
      "Megacolon Tóxico autoinmune",
      "Íleo biliar obstructivo masivo"
    ],
    "correctIndex": 0,
    "explanation": "El Síndrome de Ogilvie es una pseudo-obstrucción aguda del colon caracterizada por la masiva dilatación de este sin causa mecánica estructural visible (no hay tumor, vólvulo, o heces duras en el segmento de transición). Frecuentemente asociada a opioides, cirugías mayores de cadera/columna y disturbios hidroelectrolíticos en la clínica.",
    "fisiopato": "Provocada por un desbalance de la inervación autónoma colónica (hiperactividad simpática y depresión parasimpática originada por los opiáceos y el estrés extremo). El ciego, al ser un saco ciego de fondo asimétrico según la Ley de Laplace se dilata progresivamente con gran riesgo de perforación letal (>10-12 cm).",
    "clinicalPearl": "Ogilvie: Dilatación colónica > 10 cm con obstrucción mecánica EXCLUIDA en un enfermo internado delicado. La primera línea es suspender opioides y corregir electrolitos K, Mg. La neostigmina (una cura parasimpaticomimética letal cardiaca pero efectiva colónicamente) se evalúa cuando todo lo demás falla bajo estricto monitor cardíaco UCI (riesgo de bradicardia severa).",
    "guideline": "ASGE Guideline: Acute colonic pseudo-obstruction (Ogilvie syndrome).",
    "whyWrong": {
      "1": "El Vólvulo Cecal ES una torsión y obstrucción mecánica que necesita Cirugía de resección ileocólica o Cecopexia abierta pura en tabla; no se alivia con neostigmina y en TC sí hay transición clara de estiramiento del mesenterio arremolinado.",
      "2": "El megacolon Tóxico se infarta en relación a C. difficile O por colitis ulcerosa explosiva sangrante o isquemia, no típicamente aletargado crónico por morfina puro de Ogilvie.",
      "3": "El íleo biliar del intestino delgado impacta en el Íleon terminal y la radiografía muestra litos ectópicos, y afecta el intestino delgado no el colon grueso puramente masivamente."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-dolor-abdominal-030",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Paciente masculino, obrero de la construcción, consulta por dolor epigástrico punzante intermitente nocturno que lo despierta a las 3 AM. Nota claramente que alimentarse o consumir leche calma los síntomas transitoriamente por un par de horas, pero luego el dolor retorna severamente cuando el estómago vuelve a estar vacío. Su uso de AINEs por dolores articulares crónicos es elevado. Endoscópica y anatómicamente, este dolor es el sello patognomónico clásico de una úlcera ubicada biológicamente en qué estructura anatómica y con qué origen causal concomitante?",
    "options": [
      "Úlcera duodenal / Secundaria a Helicobacter Pylori hipersecretor y AINEs",
      "Úlcera gástrica fúndica / Secundaria a isquemia crónica mesentérica arterial",
      "Esofagitis grado D / Secundaria a una hernia hiatal masiva por esfuerzos",
      "Dispepsia funcional / Secundaria al estrés somático laboral en base autoinmune"
    ],
    "correctIndex": 0,
    "explanation": "Las úlceras duodenales típicamente cursan con dolor que se agrava en ayunas (dolor nocturno o al \"despertar el hambre\") y mejora sustancialmente cuando ingresan alimentos al lumen gastroduodenal debido al efecto tampón (buffering) químico.",
    "fisiopato": "Al comer, aumenta temporalmente el ph endoluminal por mezcla gástrica. Pero una superpuesta secreción ácida e histamínica por hipergastrinemia compensatoria a la infección de H. pylori, más el déficit de moco protector por bloqueo prostaglándico de AINEs, causan este dolor periódico agudo de rebote en los bulbos.",
    "clinicalPearl": "Dolor que EMPEORA al comer = Úlcera Gástrica (o Isquemia intestinal). Dolor que ALIVIA al comer pero vuelve de noche famélico = Úlcera Duodenal. H. Pylori reina casi en el 90% de este segundo caso.",
    "guideline": "ACG Clinical Guideline for Treatment of H. pylori Infection.",
    "whyWrong": {
      "1": "Isquemia gástrica fúndica es rara. Y el dolor de una úlcera gástrica clásicamente empeora instantáneamente al comer alimentos sólidos (roce e hiperacidez prandial).",
      "2": "Una esofagitis péptica hiatal cursa con pirosis puramente y agruras referidas sin una clara mejoría rítmica biológica por mera ingesta, sino por antiácidos directos y decúbito erecto.",
      "3": "Dispepsia Funcional es un cajón de sastre post endoscopia; la anamnesis grita lesión anatómica objetivable duodenal AINE en todo el planteamiento por su alto valor predictivo natural orgánico nocturno con el dolor en ayunas."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-masld-011",
    "topic": "masld",
    "difficulty": "Fellow",
    "text": "Un paciente de 52 años, varón, con historia de Diabetes Mellitus de 8 años de evolución, hipertensión y obesidad G1, es derivado a Hepatología por elevación leve crónica de ALT y ecografía con \"hígado graso incipiente\". El consumo de alcohol es nulo. Para confirmar el diagnóstico de MASLD (Metabolic Dysfunction-Associated Steatotic Liver Disease) y descartar otras entidades subyacentes, ¿cuál de los siguientes criterios define la nueva nomenclatura de MASLD?",
    "options": [
      "Presencia de esteatosis hepática más al menos un criterio metabólico (ej. diabetes, hipertensión o IMC >25)",
      "Exclusión obligatoria de cualquier grado de consumo de alcohol simultáneo",
      "Biopsia hepática que demuestre balonización e infiltrado lobular macrovesicular",
      "Elevación de transaminasas mayor a tres veces su límite superior normal en dos periodos"
    ],
    "correctIndex": 0,
    "explanation": "El concepto de MASLD (previamente NAFLD) requiere la evidencia de esteatosis (por imagen o lab) y la presencia de al menos uno de los criterios rectores de disfunción cardiometabólica: Diabetes tipo 2, sobrepeso/obesidad o parámetros de riesgo metabólico alterado o desregularizado.",
    "fisiopato": "Al cambiar de una definición de exclusión (NAFLD) a una definición de inclusión, se reconoce el rol patogénico directo de la inflamación crónica adipocitaria y resistencia a la insulina liderando la peroxidación de los lípidos locales del hepatocito, a diferencia de ser un mero diagnóstico idiopático o de \"descarte\".",
    "clinicalPearl": "MASLD es un diagnóstico POSITIVO: Esteatosis + 1 criterio cardiometabólico. Ya no se exigen niveles \"0\" de alcohol para su bautizo primario, introduciendo el concepto metALD (cuando confluyen el consumo significativo de OH y la disfunción metabólica).",
    "guideline": "AASLD/EASL/ALEH 2023 Multisociety consensus nomenclature for steatotic liver disease",
    "whyWrong": {
      "1": "La nueva nomenclatura reconoce explícitamente a los pacientes \"MetALD\" si consumen OH semanal superior (140g mujeres/210g hombres) concurrentemente.",
      "2": "La biopsia es para MASH. MASLD en su estado base es solo \"esteatosis\".",
      "3": "Para MASLD las transaminasas no influyen; de hecho, puede haber MASLD avanzada con GPT y GOT estrictamente normales en el 40% de cirróticos esteatósicos."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-masld-012",
    "topic": "masld",
    "difficulty": "Fellow",
    "text": "En el algoritmo de screening y tamizaje primario no invasivo (NITs) para detectar fibrosis en un centro de atención primaria de un diabético tipo 2 con sospecha de MASLD, ¿cuál es el primer paso diagnóstico preferido y más costo-efectivo avalado por todas las guías recientes para descartar fibrosis avanzada (F3-F4)?",
    "options": [
      "Cálculo basal del índice FIB-4 sérico",
      "Solicitud inmediata de Resonancia Magnética (MRE)",
      "FibroScan o Elastografía Transitoria Vibratoria Controlada (VCTE)",
      "Biopsia Hepática Percutánea Eco-dirigida a CIEGAS"
    ],
    "correctIndex": 0,
    "explanation": "El FIB-4 (compuesto por Edad, AST, ALT y Plaquetas) es la herramienta inicial recomendada por su universalidad y valor predictivo negativo extremadamente alto (> 90%) para excluir F3-F4. Permite estratificar al paciente en bajo riesgo o ameritar derivar a evaluación especializada.",
    "fisiopato": "La caída paulatina hepática de la eliminación de transaminasas cambia el radio AST/ALT mientras simultáneamente la hipertensión portal subaguda y disminución de trombopoyetina desgarra las plaquetas. Esto hace de las calculadoras bioquímicas tempranas el algoritmo primario frente a colágeno.",
    "clinicalPearl": "Regla del FIB-4: < 1.3 (< 2.0 si el paciente tiene > 65 años) significa \"Bajo Riesgo\". Alta al paciente cardiólogo. Si es > 2.67 indica alto riesgo, ameritando VCTE y biopsia urgente. Indeterminado se deriva a elastografía/MRE.",
    "guideline": "AASLD Practice Guidelines: Clinical Assessment and Management of MASLD 2023",
    "whyWrong": {
      "1": "MRE es el gold standard de las imágenes pero es sumamente costoso e incosteable/tardío como tamizaje primario universal MUNDIAL.",
      "2": "VCTE / FibroScan es para el paso DOS, tras un FIB-4 intermedio o alto.",
      "3": "Biopsia es el juez final, no el tamizaje poblacional de 30% del planeta."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-masld-013",
    "topic": "masld",
    "difficulty": "Staff",
    "text": "Una paciente femenina de 49 años acude por diagnóstico confirmado por FibroScan de MASH (Esteatohepatitis) no cirrótica, y fibrosis en estadío F2. Su HbA1c está en 8.2% a pesar del tratamiento con metformina. Refiere desear algún medicamento que ataque el problema metabólico mientras beneficia directamente sus scores de resolución de esteatohepatitis histológica. ¿Qué medicamento agonista antidiabético inyectable goza de mayor respaldo y aprobación en el espectro del MASLD?",
    "options": [
      "Semaglutida (Agonista GLP-1)",
      "Liraglutida (Agonista GLP-1)",
      "Inhibidores DPP-4 (Sitagliptina)",
      "Sulfonilureas (Glibenclamida IV)"
    ],
    "correctIndex": 0,
    "explanation": "La Semaglutida, un potente RA-GLP1 inyectable semanal u oral, ha demostrado en ensayos clínicos de fase 2/3 altas tasas de resolución de la esteatohepatitis sin empeoramiento de la fibrosis (~59% en MASH contra 17% placebo).",
    "fisiopato": "Los análogos GLP-1 disminuyen el peso corporal en un 10-15%, activando la beta-oxidación de ácidos grasos viscerales, y bloqueando la lipogénesis hepática de novo inducida periféricamente. La enorme reducción del flujo extrahepático calórico desinflama al hígado directamente.",
    "clinicalPearl": "Opciones de combate MASH clásico: En pacientes diabéticos las Pioglitazonas o Semaglutidas son Reyes; si no hay diabetes la Vitamina E a 800 UI o Semaglutidas siguen reinando con el beneficio extra potente cardiovascular masivo en cardiopatas.",
    "guideline": "AASLD Guidance for Therapy in MASLD and MASH",
    "whyWrong": {
      "1": "Liraglutida requiere uso diario y pierde ampliamente con Semaglutida y Tirzepatida en los MASH endpoints y peso final.",
      "2": "Inhibidores DPP-4 son débiles de perfil hepático en evidencia MASH.",
      "3": "Las sulfonilureas causan GANANCIA pélvica de peso y agotan el páncreas sin desinflamar el hígado."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-masld-014",
    "topic": "masld",
    "difficulty": "Fellow",
    "text": "¿Cuál es la causa de mortalidad número uno para la inmensa mayoría de los pacientes diagnosticados tempranamente con MASLD / Esteatosis Hepática subaguda a través de los años (sin llegar al estadio terminal de cirrosis descompensada)?",
    "options": [
      "Enfermedad Cardiovascular Isquémica",
      "Carcinoma Hepatocelular Temprano o Sorpresivo",
      "Fallo Renal Crónico en diálisis",
      "Hemorragia Variceal Masiva"
    ],
    "correctIndex": 0,
    "explanation": "La Causa número 1 de muerte en pacientes con NAFLD/MASLD es la patología cardiovascular (Infarto al miocardio o ACV), y no específicamente desastres de falla de la célula hepática subyacente o cáncer.",
    "fisiopato": "La inflamación sistémica vascular que desencadena MASLD exacerba el perfil aterogénico severo (placas coronarias, LDL oxidado, hipertensión), haciendo que estos pacientes mueran precozmente de ateroesclerosis trombótica en 15-20 años antes de que el hígado desarrolle una necrosis completa letal pura.",
    "clinicalPearl": "Tratar un MASLD es tratar un corazón enfermo. Si tu paciente tiene MASLD, derivar o prescribir estatinas si aplica, no hay miedo y las estatinas ESTÁN validadas y son seguras en pacientes con MASLD hepático.",
    "guideline": "American Heart Association (AHA) and AASLD Scientific Statement: NAFLD/MASLD 2022",
    "whyWrong": {
      "1": "El HCC puede ocurrir pero con menor tasa poblacional que un infarto aterogénico puro mortal.",
      "2": "Fallo renal ocurre pero la causa lider macro vascular mata antes.",
      "3": "Hemorragia por várices es típicamente un evento post-cirrótico hepatorrenal puro a diferencia de este caso particular general."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-masld-015",
    "topic": "masld",
    "difficulty": "Staff",
    "text": "Paciente varón de 48 años diagnosticado con MASH (Metabolic Dysfunction-Associated Steatohepatitis) y fibrosis avanzada en grado F2-F3 por elastografía MRE. En marzo del reciente año, un fármaco agonista del receptor ß de hormona tiroidea, específico al receptor hepático THRA (THR-beta) logró la aprobación de la FDA para ser el primer fármaco en el mundo indicado estructuralmente para el tratamiento directo formal de MASH F2-F3 no cirrótico en adultos. ¿Cuál es este agente revolucionario?",
    "options": [
      "Resmetirom",
      "Obeticholic Acid (OCA)",
      "Lanifibranor (Pan-PPAR)",
      "Aspirina oral dosis baja de mantención"
    ],
    "correctIndex": 0,
    "explanation": "El Resmetirom es el primer medicamento autorizado específicamente por la FDA estadounidense (Marzo 2024) para usarse a largo plazo junto a dieta y ejercicio formal para pacientes adultos que sufren MASLD/MASH puro con grado de fibrosis intermedio a grave (F2 o F3).",
    "fisiopato": "Resmetirom es un agonista selectivo oral que imita exclusivamente los efectos benéficos del receptor de hormona tiroidea beta (THR-β) hallado vitalmente en el hígado adulto de mamíferos. Incrementando en forma exponencial la beta-oxidación de las grasas locales del hígado sin causar taquicardia cardíaca asociada a (THR-alfa).",
    "clinicalPearl": "RESMETIROM es el primer y en la actualidad \"único\" fármaco primario Aprobado FDA por y para MASH intermedio F2/F3, un hito esperado tras 25 años de fallas en fases III moleculares.",
    "guideline": "FDA Approval Press Release for Rezdiffra (Resmetirom) March 2024 & AASLD Guidance Updates",
    "whyWrong": {
      "1": "El ácido obeticólico (OCA) reducía la fibrosis, pero fue RECHAZADO por la FDA por efectos secundarios (prurito intenso crónico intratable y alteraciones peligrosas de HDL/LDL subagudo).",
      "2": "Lanifibranor sigue en FASE clínica 3 final.",
      "3": "La aspirina es buena opción subyacente profiláctica de cáncer pero \"no\" revierte la necrosis o fibrosis del MASH como tratamiento central sistémico F2/F3 aprobado."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-masld-016",
    "topic": "masld",
    "difficulty": "Fellow",
    "text": "Señale cuál es la afirmación clínica correcta y más importante respecto al riesgo de generar un Cáncer (Carcinoma Hepatocelular, CHC) en el espectro del MASLD (Hígado graso metabólico):",
    "options": [
      "Aproximadamente un 20 a 30% de los Carcinomas Hepatocelulares por MASLD ocurren en pacientes SIN requerir una cirrosis hepática previa documentada.",
      "El tamizaje o cribado ecosonográfico para HCC debe realizarse en TODO paciente MASLD diagnosticado, sin importar si su fibrosis es F1, F2 o F4.",
      "Los genotipos puros TM6SF1 son un factor absolutamente protector frente al posible CHC.",
      "El MASLD requiere OBLIGATORIAMENTE un nódulo displásico de hiperregeneración cirrótica previa al desarrollo de CHC."
    ],
    "correctIndex": 0,
    "explanation": "Es una característica sombría y particular del MASLD el poseer el riesgo e informar consistentemente el desarrollo de tejido de Carcinoma Hepatocelular puro (CHC) SIN el prerrequisito clásico de un ambiente puramente fibrótico F4 o el endurecimiento franco propio de la cirrosis subaguda, a diferencia casi completa de VHC.",
    "fisiopato": "La lipotoxicidad persistente genera un estado de estrés oxidativo y DNA-daño mitótico crónico profundo en los lóbulos en combinación al efecto de la hiperresistencia de insulina proliferando las señales oncogénicas del sistema IGF-1.",
    "clinicalPearl": "Alarma de Consulta: En MASLD MASH el CHC \"Se salta el paso cirrótico\" F4 en un 20%-30% de las muertes oncológicas reportadas; pero debido a la gran masa poblacional, todavía el Tamizaje universal ECOGRAFÍCO sólo se reserva legal y pragmáticamente para pacientes con cirrosis comprobada o F3 severamente en declive F4.",
    "guideline": "AASLD guidelines on Hepatocellular Carcinoma (HCC).",
    "whyWrong": {
      "1": "El tamizaje no puede hacerse universalmente a causa de la prevalencia masiva en F1/F2 (30% humanidad mundial de ultrasonidos costaría trillones de dinero); solo screening CHC guiado en etapas F3 muy tardías/ F4 de MASH comprobado o alta sospecha clínica.",
      "2": "Las variantes de riesgo MASLD son PNP y TMG6 que EMPEORAN genéticamente la enfermedad (variante PNP I148M).",
      "3": "Falso, no necesitan nódulos focales previos, saltando a cáncer masivo directamente lobular de esteatosis local."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-masld-017",
    "topic": "masld",
    "difficulty": "Subspecialist",
    "text": "Varón de 40 años diagnosticado con MASH e hiperinsulinemia severa en las caderas y abdomen. Se le recomendó \"vitamina E\" de farmacia debido a que los inhibidores agonistas GLP1 le causaron náuseas intratables y carece de hiperglucemia diabética. Respecto a la Vitamina E indicada a dosis de 800 IU/día en el gran ensayo PIVENS para revertir la histología del MASH sin cirrosis ni diabetes. ¿Cuál es el riesgo a largo plazo fuertemente asociado (y debatido interhospitalariamente) por el uso a altas dosis en poblaciones añosas de este tratamiento suplementario antioxidante?",
    "options": [
      "Aumento leve estadístico en el riesgo de cáncer de Próstata severo y Accidente Cerebrovascular Hemorrágico masivo.",
      "Hepatotoxicidad farmacológica y falla hepática fulminante por necrosis tubular.",
      "Cataratas bilaterales cortisonales",
      "Atrofia severa del epitelio esofágico y cáncer oral a repetición."
    ],
    "correctIndex": 0,
    "explanation": "La Vitamina E ha sido reportada con ligeros pero estadísticamente presentes riesgos incrementados para el cáncer de próstata en hombres con largas dosis suplementarias fuertes, así como un incremento debatido de sangrados hemorrágicos cerebrales subagudos al interferir secundariamente en agregación plaquetaria general.",
    "fisiopato": "Vitamina E a dosis grandes rompe la barrera biológica como anticoagulante natural bloqueando la absorción de la Filoquinona de la Vitamina K para la producción coagulante de factores subagudos. Por lo que requiere una charla formal pre-indicación clínica en hombres grandes de edad con antecedentes genéticos isquémicos prostáticos.",
    "clinicalPearl": "Ensayo PIVENS (N Engl J Med 2010; 362:1675-1685): Vit E resolvió MASH mejor que placebo. Se usa SI y SÓLO SI no hay DM tipo 2, no es cirrótico y excluyendo de su indicación a los varones geriátricos grandes portadores de riesgos u oncológicos prostáticos y ACVs previos.",
    "guideline": "PIVENS Trial analysis & AASLD Guidance updates on MASH supplementation 2023",
    "whyWrong": {
      "1": "No daña el hígado la Vitamina E (es más bien un antioxidante masivo general).",
      "2": "No influye a cataratas cortisonales.",
      "3": "No daña el esófago subagudamente u a repetición franca."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-masld-018",
    "topic": "masld",
    "difficulty": "Staff",
    "text": "¿A qué pacientes portadores del diagnóstico MASLD con Obesidad extrema y fallas farmacológicas repetidas de un programa general dietético debe recomendarse de forma agresiva o sugerirse con fervor referirlos a una Cirugía Bariátrica o Metabólica pura para tratar el fallo hepático silencioso histológico o la esteatonecrosis subaguda?",
    "options": [
      "A los pacientes Obesos con un IMC > 35 kg/m2 o un IMC > 30 kg/m2 con morbilidades y grado comprobado de MASLD que busquen la mayor tasa conocida de resolución curativa para el MASLD en la actualidad.",
      "Solamente aquellos pacientes MASH que hayan llegado a una etapa severa del colapso cirrótico o F4 variceal descompensado sangrante en puerta de urgencia clínica.",
      "Únicamente a los pre-obesos que requieran una reducción dietética masiva cosmética menor al rango del GLP1 semanal puro.",
      "La Cirugía bariátrica está contraindicada e inválida globalmente en todo proceso documentado científicamente de falla hepática MASLD subyacente."
    ],
    "correctIndex": 0,
    "explanation": "La cirugía bariátrica sigue siendo, para muchos expertos, la intervención \"curativa natural mecánica\" más dramática y real respecto a eficacia y sostenibilidad estadística si la indicación encaja (IMC > 35 kg/m2 o >30 con comorbilidades como diabetes). Resolve el MASH en ~80% y reduce fibrosis progresiva en >60%.",
    "fisiopato": "Al desestructurar el bypass alimenticio, el vaciado en el intestino bajo o la restricción gástrica gatillan un reinicio total brutal crónico y sostenido en el sistema incretínico central (GLP-1 natural) eliminando la fábrica visceral o depósitos metabólicos sistémicos en un par de meses naturales sin medicación constante química.",
    "clinicalPearl": "En MASH obesos GII/GIII que no mejoran ni un milímetro, referirlos a Cirugía. Pero PRECAUCION ABSOLUTA: Si el paciente ya formó CIRROSIS puramente descompensada clínica (várices y ascitis), la cirugía bariátrica puede provocarles muerte hepática abrupta operatoria por hipercatabolismo colapsante terminal!",
    "guideline": "AGA/AASLD/EASL updates on Bariatric Surgery usage in MASH 2022",
    "whyWrong": {
      "1": "No en cirrosis DESCOMPENSADA letal variceal aguda; altísima mortalidad operatoria. MASH requiere evaluación temprana, NO en etapa terminal donde solo aplica trasplante quirúrgico puro.",
      "2": "Los inyectables pierden su efecto y sus costos tras abandonarlos bruscamente, a diferencia de la cirugía.",
      "3": "Sísmicamente falso."
    },
    "pillar": "Common Cases"
  },
  {
    "id": "q-masld-019",
    "topic": "masld",
    "difficulty": "Fellow",
    "text": "Si le realizamos una biopsia hepática a un familiar asiática con peso magro impecable de IMC de 23, glucosa subyacente de 103, transaminasas repetidamente levemente en el borde y encontramos que de una u otra manera padece MASLD en su estadio precoz puro (El fenotipo \"Lean MASLD\"). ¿Qué variable de impacto fisiopatólogica molecular juega un mayor estragos causales oculto profundo frente a la enfermedad no clásica?",
    "options": [
      "Una predisposición génica de Variantes Genéticas letales o polimorfismos como TM6SF2 o el PNPLA3 patogénicos locales en sus lobulaciones.",
      "Es secundario a su dieta vegetariana rica en fructooligosacáridos o exceso de proteínas crónicas.",
      "No se trata de MASLD, debe ser a la de a fuerza otra hepatitis crónica de depósito como el cobre subagudo en sus ganglios.",
      "El alcohol pasivo por aire crónico produce un falso \"lean MASLD\" genético."
    ],
    "correctIndex": 0,
    "explanation": "El MASLD Magro o \"Lean MASLD\" afecta al 10-20% de diagnosticados (y altísimo en raza asiático-hindú). Estos fenotipos carecen del tejido sub cutáneo inflado tradicional, pero su genotipo profundo mutado patogénico (p.e. polimorfismo PNPLA3 rs738409 o I148M) es altamente causante de trabar los lípidos hepáticos internamente genéticos.",
    "fisiopato": "En PNPLA3 el hígado es incapaz de movilizar los triglicéridos lipídicos hacia las VLDL de transporte, por lo cual todas los acopios lipídicos crónicos se oxidan intracelularmente independientemente del peso total corporal general obeso global; creando una grasa visceral magra.",
    "clinicalPearl": "\"Lean MASLD\" (MASLD de paciente magro): El fenotipo asiático (o genes mediterráneos latinos originarios mutados PNPLA3) de riesgo genotípico que poseen la misma mortalidad cardiaca sistémica y complicaciones hepáticas descompensantes tempranas que el estadio macro-obesidad general estadounidense.",
    "guideline": "AASLD Lean NAFLD Clinical guidelines statement.",
    "whyWrong": {
      "1": "La dieta contribuye pero es la mutación génica lo diferencial para la \"rareza fenotípica magra\" en sí que los marca diferencial.",
      "2": "Existe la forma patológica de MASLD en el IMC de 21 comprobado históricamente genotípicamente y de depósito primariamente.",
      "3": "Sin sustento científico del aire crónico global y hepático causal."
    },
    "pillar": "Must-Know"
  },
  {
    "id": "q-masld-020",
    "topic": "masld",
    "difficulty": "Subspecialist",
    "text": "Identifique cuál de estas alteraciones metabólicas y hallazgos bioquímicos paraclínicos forma Criterio Cardinal para etiquetar la categoría MASLD según la nueva nomenclatura multiseccional Consenso del 2023 si un paciente presenta confirmada la presencia de Esteatosis Hepática subaguda mediante imágenes ecográficas crónicas:",
    "options": [
      "Glucosa Plasmática en Ayunas mayor o igual a 100 mg/dL ó HbA1c mayor o igual a 5.7 o bajo tratamiento hiperglucémico crónico general.",
      "Disminución abrupta y prolongada marcada de los niveles de Ferritina plasmática menores a 10 ugL u otro estado carencial anémico celular.",
      "Proteína C reactiva ultrasensible negativa crónicamente plana de respuesta en meses agudos.",
      "Aumento o Presencia Crónica diagnosticada del Ácido Úrico por arriba de 25 mg/dL intermensual agudos."
    ],
    "correctIndex": 0,
    "explanation": "El panel de diagnóstico Criterios de Disfunción Cardiometabólica de MASLD incluye: Glucosa basal ≥100 mg/dL, o HbA1c ≥ 5.7%, o Diabetes 2; IMC ≥25 (en asiáticos ≥23) o circunferencia de cintura aumentada; Presión Arterial ≥ 130/85; Triglicéridos ≥ 150 mg/dL; o HDL bajo ( <40 en hombres, <50 en mujeres). Con la presencia de cualquiera 1 de estos en paciente esteatósico, el diagnóstico MASLD queda oficialmente comprobado clínicamente.",
    "fisiopato": "La tríada clásica del síndrome metabólico endotelial (Resistencia insulina, inflamación vascular endotelial, obesidad del mesenterio abdominal). La ferritina usualmente SUBO no baja por ser un reactante fase aguda que el hígado intoxicado escupe en NAFLD masivo secundario.",
    "clinicalPearl": "Nuevos Criterios MASLD: Esteatosis Hepática ecográfica + [IMC elevado O Hemoglobina glicosilada limite 5.7 O Presión Arterial 130/85 O Dislipidemia de Trigliceridos]. Es oficial, conciso y definitivo de nombramiento subyacente.",
    "guideline": "AASLD, EASL, ALEH nomenclature consensus for MASLD criteria 2023",
    "whyWrong": {
      "1": "MASLD Típicamente \"aumenta\" o eleva radical e inflamatoriamente los marcadores de Ferritina (causando a veces engañoso diagnóstico de pseudocromatosis o pseudohierro sistémico alto).",
      "2": "El incremento del ácido úrico no forma parte de la lista cerrada de los principales subcriterios de diagnóstico de factores de riesgo cardiometabólicos para MASLD según los recientes consensos internacionales.",
      "3": "El CRP está clásicamente en el percentil superior constante activo por la gran tormenta sistémica de adipocinas y esteatoquinas."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-masld-021",
    "topic": "masld",
    "difficulty": "Fellow",
    "text": "¿Cuál es el valor umbral de \"rigidez hepática\" (Live Stiffness Measurement - LSM) típicamente reportado por VCTE (Fibroscan o Elastografía Transitoria Vibracional térmica y aguda) que marca un ALTO RIESGO de Fibrosis Avanzada o Cirrosis establecida (estadio F3 o F4 puros) y justifica el tamizaje endoscópico rutinario si las plaquetas apoyaran hipertensión del bazo?",
    "options": [
      "Un umbral consistentemente mayor a 12.0 - 15.0 kPa.",
      "Un umbral puramente en 1.5 a 4.0 kPa constantes y crónicos.",
      "Fijamente en 2.0 y 5.5 kPa repetitivos diarios mecánicos crónicos.",
      "Generalmente al chocar un muro acústico inferior de 1.0 kPa sostenidos blandos y ecográficos de seguimiento crónico."
    ],
    "correctIndex": 0,
    "explanation": "Un nivel de kVp o kPa superior a los 12 - 15 kilopascales (kPa) de forma consistente es altamente sugestivo y confirmatorio en poblaciones generalizadas de Fibrosis Avanzada y de un hígado transformado cirrótico, donde ameritará rastreo o screening endoscópico inicial gástrico.",
    "fisiopato": "La onda de cizalladura o shear wave que tira el sensor M-probe o XL-probe del aparato rebota exponencialmente mas veloz sobre lechos que han sido sustituidos rígidamente por matrices moleculares abultadas de miofibroblastos y macrófagos formadores de fibrosis reticular crónicos, elevando la medida de los decibeles de impacto a más de doce kPa.",
    "clinicalPearl": "Regla del Elastógrafo VCTE: Hígados sanos son como esponjas dóciles (~4-5 kPa).  Hígado inflamado F2 (~8 kPa). Y un Hígado cirrótico MASH es una roca pétrea dura (>> 12 - 15 kPa constantes verdaderos). Y regla baveno VII, si las plaquetas varían >150,000 en 15 kPa es bajo riesgo variceal, pero superior de 20 Kpa todo se desmorona y amerita ver el fondo gástrico en la OES endoscópica obligatoriamente agudo.",
    "guideline": "Baveno VII guidelines. Elastography cutoff criteria from AASLD.",
    "whyWrong": {
      "1": "Valores abajo de 6 kPa son sanos absolutos.",
      "2": "Los umbrales en 2 o 4 o 5.5 son población normal basal ideal y blanda no f3 puros.",
      "3": "De ninguna manera baja 1 kpc, no es físicamente representativo tisularmente orgánico en una onda en seres biológicos puros."
    },
    "pillar": "Clinical Logic"
  },
  {
    "id": "q-eii-avanzada-014",
    "topic": "eii_avanzada",
    "difficulty": "Fellow",
    "text": "Paciente con Colitis Ulcerosa (CU) severa refractaria a esteroides venosos que inicia terapia de \"rescate\" con Ciclosporina intravenosa. A las 48 horas presenta cifras tensionales de 180/110 mmHg repetidas, temblor rítmico de extremidades y una alteración repentina del estado de alerta y convulsiones. ¿Cuál es la principal y más temida complicación neurológica relacionada a la toxicidad aguda de este fármaco?",
    "options": [
      "Síndrome de Encefalopatía Posterior Reversible (PRES)",
      "Rotura de aneurisma de la arteria cerebral media y hemorragia subaracnoidea",
      "Esclerosis lateral amiotrófica fulminante inducida",
      "Trombosis masiva del seno venoso sagital"
    ],
    "correctIndex": 0,
    "explanation": "La toxicidad neurológica aguda grave de la Ciclosporina A puede manifestarse como un Síndrome de Encefalopatía Posterior Reversible (PRES), caracterizado por hipertensión aguda súbita masiva, ceguera cortical, alteraciones de alerta y convulsiones que obligan a detener la infusión de rescate de inmediato.",
    "fisiopato": "La inhibición aguda de la calcineurina basal en el cerebro provoca daños endoteliales micro-vasculares cerebrales y espasmos vasomotores severos arteriolares que derivan en edema vasogénico occipito-parietal y pérdida de la auto-regulación cerebral.",
    "clinicalPearl": "El PRES es la pesadilla del uso de Ciclosporina de Rescate en CU severa. Todo paciente con cortico-refractariedad y en ciclosporina IV que empiece con dolor de cabeza intenso ocular, vista nublada y \"la presión alta a los cielos\" (HTA 190/100) debe hacerle sospechar neurotoxicidad PRES. Paren la infusión!",
    "guideline": "ECCO guidelines on Medical Management of Severe Ulcerative Colitis",
    "whyWrong": {
      "1": "No causa aneurismas físicos fijos ni rompe paredes de grandes vasos por debilitamiento.",
      "2": "ELA toma años y da debilidad motora periférica degenerativa, no es inducida aguda subitamente en 48 horas.",
      "3": "La TVP es mas común en EII, pero de sagital y cerebral puramente venosa no es la toxicidad estelar o firma biológica de la inhibición calcineurínica que hace PRES."
    },
    "pillar": "Common Cases"
  },
  {
    "text": "Escenario Clínico: Paciente masculino de 68 años con antecedente de Fibrilación Auricular no valvular en tratamiento con Apixabán, quien se someterá a una CPRE electiva por coledocolitiasis con planeación de esfinterotomía biliar. Función renal normal (CrCl 75 mL/min). ¿Cuál es el manejo periprocedimiento más apropiado según las guías conjuntas ASGE/ESGE?",
    "options": [
      "Suspender Apixabán 24 horas antes del procedimiento y reiniciar 48 horas después, sin puente con HBPM.",
      "Suspender Apixabán 2 a 3 días (48-72 horas) antes, sin puente con HBPM, y reiniciar 2-3 días después valorando hemostasia.",
      "Suspender Apixabán 5 días antes, iniciar puente con HBPM a dosis terapéutica, y reiniciar al día siguiente.",
      "Continuar Apixabán hasta la mañana del procedimiento ya que es un procedimiento de bajo riesgo de sangrado."
    ],
    "correctIndex": 1,
    "explanation": "La CPRE con esfinterotomía es un procedimiento de ALTO RIESGO de hemorragia. En pacientes con DOACs (como Apixabán) y con función renal normal, las guías de la ASGE recomiendan suspender el fármaco 48 a 72 horas previas al procedimiento de alto riesgo. El puenteo con heparina (HBPM) no está recomendado rutinariamente para DOACs por sus rápidos on/off. Se debe reiniciar 2 a 3 días (48-72h) tras el procedimiento dependiendo de si la hemostasia se ha validado.",
    "fisiopato": "El apixabán es un inhibidor directo y altamente selectivo del factor Xa. Su vida media es de ~12 horas en función renal normal. Al suspenderlo ~72 horas antes se garantiza el aclaramiento de más de ~5-6 vidas medias, lo que lleva el efecto anticoagulante remanente a menos del 3%, ideal para procedimientos en áreas muy vascularizadas como la papila de Vater (irrigada por arteria retroduodenal o pancreaticoduodenal superior).",
    "topic": "endoscopia_anticoagulados"
  },
  {
    "text": "Escenario Clínico: Acude paciente de 55 años portador de un stent liberador de fármacos (DES) en arteria coronaria descendente anterior colocado hace 3 meses tras un IAM. Actualmente toma Aspirina (81 mg) y Ticagrelor (90 mg bid). Tiene agendada una polipectomía de un adenoma aserrado sésil de 3 cm en ciego en 4 semanas. ¿Qué conducta es la adecuada basada en las pautas cardiológicas y de endoscopia actuales?",
    "options": [
      "Realizar el procedimiento sin alterar el esquema antiagregante DAPT debido al alto riesgo embólico provocado por el DES reciente.",
      "Suspender Aspirina y Ticagrelor durante 5-7 días para realizar la polipectomía para evitar sangrado masivo.",
      "Posponer la polipectomía proctológica al mínimo vital de 6 meses post-DES si el procedimiento es electivo; si debe hacerse, suspender ticagrelor 3-5 días antes, manteniendo la aspirina.",
      "Sustituir el ticagrelor temporalmente con clopidogrel para lograr menor afinidad de unión y proceder."
    ],
    "correctIndex": 2,
    "explanation": "Una polipectomía mayor a 1 cm (especialmente 3 cm en ciego, alto riesgo) es de ALTO RIESGO de sangrado. Dado que tiene un DES reciente (< 6 meses en síndrome coronario agudo), el riesgo trombótico/isquémico es muy alto al suspender el inhibidor P2Y12 (Ticagrelor). La recomendación principal es DIFERIR terapias electivas gástricas o colonoscópicas hasta después de 6 meses (ideal 12 en SCA). Si se debe hacer obligatoriamente, se mantiene la aspirina en todo momento, pero el ticagrelor se debe suspender con 3-5 días de antelación.",
    "fisiopato": "El ticagrelor se une de forma reversible pero rápida y potente al receptor P2Y12 plaquetario. Vida media es de 7-9 horas, requiriendo 3-5 días para recuperar suficiente función plaquetaria de novo para prevenir hemorragia. La reepitelización endotelial completa de un DES moderno puede tardar meses (riesgo de trombosis intrastent aguda u subaguda catastrófica si se interrumpe la doble terapia tempranamente, por falta de endotelio vascular maduro formador de NO y prostaciclinas natural sobre el stent).",
    "topic": "endoscopia_anticoagulados"
  },
  {
    "text": "Paciente de 72 años en profilaxis con Clopidogrel crónico por un ACV isquémico antiguo. Presenta un episodio perdedor de sangre oscura. Se endoscopiza de urgencia hallando una úlcera duodenal cara posterior con un vaso visible (Forrest IIa). Se logra hemostasia usando termocoagulación + clipaje. ¿Cuándo es ideal reiniciar el tratamiento antiagregante?",
    "options": [
      "Inmediatamente (el mismo día), dado el riesgo altísimo neurológico y habiendo la úlcera sido mecánicamente asegurada.",
      "Al menos 7 a 10 días tras el evento, evitando que los clips se caigan por efecto antiplaquetario.",
      "En cuanto haya evidencia clínica de hemostasia, normalmente a los 1-3 días tras el procedimiento hemostático primario exitoso.",
      "No reiniciar terapia antiplaquetaria en este paciente; cambiarlo a un anticoagulante directo profiláctico."
    ],
    "correctIndex": 2,
    "explanation": "No reanudar el tratamiento antiagregante (AAS o P2Y12) aumenta el riesgo de isquemia neurovascular/CV, doblando el riesgo de muerte global, a pesar de que el reinicio temprano aumenta el riesgo de resangrado en un margen estrecho. Las guías internacionales sugieren la reanudación del antiagregante 1 a 3 días después de lograr exitosamente hemostasia de una úlcera.",
    "fisiopato": "Un vaso expuesto en la base de la úlcera ha perdido sus mecanismos vasoconstrictores locales y es muy susceptible a re-sangrar si la reparación endotelial mediante tapón plaquetario y andamiaje de fibrina está comprometido. El clopidogrel, al inhibir P2Y12 interfiere con la estabilización plaquetaria (inhibiendo la amplificación regulada por ADP); no obstante, pasado el periodo crítico inicial de 72 h (sostenido con endoscopia dual u mecánica + IV PPI), se logran estabilizar las biopelículas iniciales permitiendo restaurar la agregación requerida a nivel extra-gástrico sin desencadenar hemorragia excesiva local.",
    "topic": "endoscopia_anticoagulados"
  },
  {
    "text": "Femenina de 34 años con Colitis Ulcerosa Crónica (CUC) extensa reactivada. Se ha documentado resistencia clínica al Vedolizumab tras 3 infusiones y síntomas persistentes. Presenta nivel bajo de albúmina (2.8 g/dL) y PCR elevada, se plantea Infliximab (pauta acelerada de inducción). ¿A qué complicación se debe estar particularmente alerta si recibe este régimen acelerado?",
    "options": [
      "Linfoma hepatoesplénico de células T inmediatamente en las primeras dos semanas.",
      "Inmunogenicidad acelerada, resultando en reacciones a infusión severas o pérdida de respuesta.",
      "Estenosis esofágica inducida por la alta unión del TNF circulante en todo el tracto gastrointestinal superior.",
      "Un evento coronario isquémico paradójico debido al Infliximab."
    ],
    "correctIndex": 1,
    "explanation": "El esquema acelerado de IFX se utiliza en colitis aguda grave (vg., dosis de 5-10 mg/kg en los días 0, 5, y 15). Un aclaramiento rápido preexistente del IFX (por TNF sink, hipoalbuminemia importante y proteolisis en colon) predice baja exposición. Debido al aclaramiento rápido y los niveles séricos subterapéuticos continuos, este ambiente es ideal para la producción de anticuerpos anti-Infliximab (ATI), llevando a mayor pérdida de respuesta rápida o reacciones transfusionales.",
    "fisiopato": "La CUC perdedora de proteínas causa fuga capilar, alta expresión del receptor de reciclamiento FcRn saturado, lo que disminuye la vida media de anticuerpos monoclonales monoclonales (IgG1). Un bajo nivel valle («trough») de infliximab deja la porción quimérica murina expuesta sin neutralizar antígenos blanco, promoviendo el reconocimiento por linfocitos T cooperadores y B para formar anticuerpos neutralizantes (inmunogenicidad endógena).",
    "topic": "eii_avanzada"
  },
  {
    "text": "Paciente de 25 años con Enfermedad de Crohn ileocolónica fistulizante. Ha sido manejado con metotrexato, y se decide escalamiento a un inhibidor selectivo de JAK (ej., Upadacitinib). ¿Cuál de los siguientes es un efecto adverso característico y por lo general dependiente de la dosis o clase, que demanda monitorización lipídica o hematológica estrecha?",
    "options": [
      "Reactividad severa inmediata tipo anafilaxia por el primer paso.",
      "Reactivación agresiva a Herpes Zoster, hiperlipidemia venosa y tromboembolismos venosos.",
      "Cardiomiopatía dilatada progresiva por inhibición de síntesis contráctil de actina.",
      "Poliposis hiperplásica reactiva diseminada."
    ],
    "correctIndex": 1,
    "explanation": "Los inhibidores de JAK (como Tofacitinib o Upadacitinib) conllevan advertencias de recuadro negro por ciertos de sus efectos pleiotrópicos, entre ellos Herpes Zóster (por mermar señalización local T/NK e inf. celular), aumento de LDL y HDL dependiente de la dosis, y un incremento en la tasa de Tromboembolismo Venoso en cohortes post-market/artritis reumatoide sobre todo en poblaciones de riesgo.",
    "fisiopato": "El gen JAK cataliza la fosforilación de STAT, que al translocarse medía funciones críticas de la respuesta inmune, pero también modula la expresión lipoproteína en los macrófagos y la depuración del colesterol, además inhiben subfamilias inmunitarias víricas que suprimen permanentemente al VZV latente en los ganglios dorsales, permitiendo reactivaciones espontáneas independientemente del estado inmunitario local basal.",
    "topic": "eii_avanzada"
  },
  {
    "text": "Durante la realización de un procedimiento endoscópico rutinario (Veda) bajo sedación con Propofol a cargo del anestesiólogo, a un varón de 40 años obesos con SAOS no tratado. El paciente sufre depresión respiratoria que progresa a hipoxia severa y, secundariamente, a paro cardiorrespiratorio en Asistolia confirmada en monitor principal. ¿Bajo el protocolo ACLS/SVA vigente, cuál de estas medidas resulta INAPROPIADA de forma inicial?",
    "options": [
      "Aplicación de Compresiones Torácicas (RCP) continuas y efectivas casi sin pausa.",
      "Administración inmediata de Adrenalina 1mg (intravenoso o intraóseo) repitiendo c/3-5 minutos.",
      "Aseguramiento avanzado inmediato invasivo de vía aérea utilizando intubación orotraqueal prioritaria sobre las compresiones.",
      "Buscar causas reversibles (las '5 H y 5 T', incluyendo hipoxia aguda periprocedimiento)."
    ],
    "correctIndex": 2,
    "explanation": "En asistolia (y toda parada cardiaca), las guías de ACLS priorizan la reanimación cardiopulmonar precoz con compresiones torácicas eficaces ('push hard, push fast', minimizar interrupciones) y Adrenalina temprana por encima de la intubación invasiva, que podría retrasar la reanimación hemodinámica sistémica. La ventilación efectiva inicialmente suele ser lograda con bolsa-mascarilla.",
    "fisiopato": "En Asistolia no hay ritmo eléctrico o shockeable presente. La fisiología requerida desesperadamente es lograr flujo coronario y flujo cerebral perfuncional y promover excitabilidad eléctrica ventricular. La Adrenalina provee alfa-1 vasotensión que presuriza la raíz aórtica alimentando coronarias, mientras las compresiones intentan generar el gradiente intratorácico necesario para gasto residual mínimo de 25-30% del volumen golpe original.",
    "topic": "muerte_subita"
  },
  {
    "text": "Como Coordinador de Calidad en CPRE/Endoscopia, el protocolo de Simulacros en Quirófano de Endoscopía debe incluir la verificación rutinaria según los estándares internacionales de varios dispositivos. Durante una emergencia de desaturación intratable con laringoespasmo con paciente bajo propofol ¿Qué maniobra clínica simple permite vencer mecánicamente pero sin medicamentos el laringoespasmo leve/moderado inicial intra-escenario en la recuperación?",
    "options": [
      "Maniobra de muesca de Larson (estimulación supraventricular / presión sobre el proceso mastoide/escotadura laringoespásmica) combinada con Empuje Mandibular.",
      "Inversión de decúbito forzado en trendelemburg máximo (-30°).",
      "Hiperextensión radical del cuello para tensar el esófago subyacente.",
      "Punto de presión xifoideo directo repetitivo."
    ],
    "correctIndex": 0,
    "explanation": "La 'Muesca de Larson' es una maniobra de estimulo doloroso/mecánico consistente en presionar firmemente de forma medial, detrás del pabellón auricular y en la hendidura inferior al proceso mastoideo. Sirve como mecanismo reflejo para lograr relajar las cuerdas vocales o quebrar el espasmo involuntario, al combinarse con subluxación/elevación anterior de la mandíbula mientras se asiste con bolsa-válvula-mascarilla (BVM) con oxígeno al 100%.",
    "fisiopato": "El laringoespasmo es un efecto quimio/mecanorreceptor inducido desde el nervio laríngeo superior (por secreciones o tubos en vía área infraglótica o irritación parasimpática), bloqueando la glotis. Se trata de un arco reflejo protector patológicamente potenciado en anestesia parcial/ligera. El estímulo profundo facial con dolor (via trigémino / simpática) estimula un 'override' en el núcleo tracto solitario del tallo frenando brevemente el hipertono del nervio recurrente de las cuerdas.",
    "topic": "protocolo_simulacro"
  },
  {
    "text": "Se evalúa tejido gástrico de un hombre de 62 años proveniente de Bolivia con síntomas de saciedad precoz y pérdida de peso de 15 kg. La biopsia demuestra una proliferación de células atípicas 'en anillo de sello'. Este carcinoma de tipo Difuso en la clasificación de Lauren se asocia invariablemente con la alteración molecular de cuál de las siguientes proteínas:",
    "options": [
      "E-Cadherina (Disfunción o pérdida de CDH1).",
      "c-KIT (mutación en exón 11).",
      "Beta-catenina nuclear.",
      "Mutación Kras."
    ],
    "correctIndex": 0,
    "explanation": "El Cáncer Gástrico tipo difuso se asocia íntimamente a las alteraciones (mutación, metilación somática, o síndrome genético hereditario) en el gen CDH1 (E-Cadherina). Las otras mutaciones son de otros tumores.",
    "fisiopato": "La E-Cadherina es una glicoproteína integral de la membrana celular que promueve adhesiones célula a célula mediadas por calcio ('uniones adherentes'). La pérdida de su expresión resulta en el desarraigo epitelial clásico (las células pierden su unión lateral y el patrón de polaridad), promoviendo la transición epitelio-mesénquima y su infiltración profunda difusa, asilada y separada en la lámina propia o submucosa (linitis plástica retrograda celular), resultando fenotípicamente como células en anillo de sello (vacuolas llenas de mucina repeliendo núcleo periférico).",
    "topic": "cancer_gastrico"
  },
  {
    "text": "Se realiza serología y biopsia de duodeno (bulb y segunda porción) a una mujer de 22 años con deficiencia de hierro intratable y diarrea oscilatoria. Los Anti-Transglutaminasa (tTG-IgA) son >10 veces el valor normal máximo. En la patología, se observa la lesión característica compatible con Enfermedad Celíaca: atrofia vellositaria, hiperplasia de criptas y linfocitosis intraepitelial. ¿Cuál es el principal péptido alergénico derivado del gluten responsable de inducir la presentación antigénica mediante interacción con HLA-DQ2/DQ8 en la mucosa?",
    "options": [
      "Lectina gliadinolítica de bajo peso.",
      "Péptido 33-mer derivado de la α-gliadina.",
      "Hordeína beta-terminal.",
      "Gamma-Glutelina fibrilar."
    ],
    "correctIndex": 1,
    "explanation": "El componente más inmunogénico del gluten (específicamente de las proteínas de trigo, centeno o cebada) resistente a la digestión lumínica gastrointestinal es el fragmento 33-mer de la α-gliadina (con alto contenido parolina-glutamina), que logra penetrar el epitelio intacto debido a inflamación incipiente u oclusión zona occuldens debilitada. Es luego deaminado y se ancla a péptidos de HLA en las células presentadoras.",
    "fisiopato": "Las enzimas digestivas intraluminales y endopeptidasas no logran clivar los puentes prolina/glutamina del '33-mer'. Al internalizarse en la lámina propia, es deamidado por la enzima endógena Transglutaminasa tisular 2 (tTG2), convirtiendo residuos de glutamina en ácido glutámico y creando una molécula de alta carga negativa. Esa molécula modificada ensambla perfectamente en el surco positivamente cargado de las moléculas unidas a membrana HLA-DQ2 (y DQ8) en macrófagos o DC presentadoras de antígeno, detonando inmunidad Th1 local devastadora liberando IFN-gamma y activando Linfocitos T citotóxicos contra el enterocito mismo que promueve atrofia y regeneración criptal defectiva.",
    "topic": "celiaca"
  }
];
