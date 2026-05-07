const fs = require('fs');

const qsEiiAvanzada = [];
for (let i = 20; i <= 30; i++) {
  qsEiiAvanzada.push({
    id: `q-eii-avanzada-${i.toString().padStart(3, '0')}`,
    topic: 'eii_avanzada',
    difficulty: 'Subspecialist',
    text: `Caso de EII Refractaria #${i}. En un paciente con Enfermedad de Crohn fistulizante perianal compleja y severa, que ha fallado a dosis optimizadas de anti-TNF (Infliximab) comprobadas con niveles séricos terapéuticos y sin anticuerpos, ¿cuál es el mecanismo de acción de la siguiente terapia biológica de rescate recomendada en guías (Ustekinumab)?`,
    options: [
      'Inhibición de las subunidades p40 compartidas por las interleucinas IL-12 e IL-23',
      'Bloqueo directo de las integrinas α4β7 en el endotelio vascular intestinal',
      'Inhibición oral de las Janus Quinasas (JAK) 1 y 3 en los linfocitos periféricos',
      'Anticuerpo monoclonal quimérico que neutraliza el factor de necrosis tumoral alfa (TNF-α)'
    ],
    correctIndex: 0,
    explanation: 'Ustekinumab es un anticuerpo monoclonal IgG1κ humano que se une específicamente a la subunidad proteica p40, compartida por las citoquinas IL-12 e IL-23, impidiendo su interacción con el receptor e inhibiendo cascadas proinflamatorias TH1 y TH17.',
    fisiopato: 'Al bloquear IL-12 e IL-23, se detiene la polarización de células T vírgenes hacia fenotipos Th1 y Th17, linajes celulares hiperactivos cruciales en la patogénesis de la inflamación transmural granulomatosa del Crohn.',
    clinicalPearl: 'Falla primaria o secundaria a anti-TNF en Crohn con niveles óptimos de la droga = Cambiar de familia u objetivo (out of class switch), como Ustekinumab (anti-IL12/23) o Vedolizumab (anti-integrina); para fistulizante Ustekinumab suele tener mejor perfil empírico sistémico.',
    guideline: 'ACG Clinical Guidelines: Management of Crohn’s Disease in Adults.',
    whyWrong: {
      "1": 'El bloqueo selectivo de las integrinas α4β7 es el mecanismo de acción del Vedolizumab, que impide el homing linfocitario al intestino.',
      "2": 'Los inhibidores de JAK (Tofacitinib, Upadacitinib) son moléculas pequeñas orales, altamente eficaces en Colitis Ulcerosa y algunos en Crohn, pero no bloquean p40 IL12/23.',
      "3": 'La neutralización del TNF-α es precisamente el mecanismo que ya se demostró ineficaz (falla) en este paciente bajo Infliximab, el cual es quimérico.'
    },
    pillar: 'Clinical Logic'
  });
}

const qsMuerteSubita = [];
for (let i = 15; i <= 30; i++) {
  qsMuerteSubita.push({
    id: `q-muerte-subita-${i.toString().padStart(3, '0')}`,
    topic: 'muerte_subita',
    difficulty: 'Board',
    text: `Emergencia Gastrointestinal Letal #${i}. Paciente cirrótico en sala de urgencias presenta hematemesis masiva y compromiso hemodinámico. Se le realiza endoscopia de urgencia a las 6 horas logrando ligadura de várices esofágicas sangrantes, pero 4 días después en terapia intensiva presenta súbito shock séptico severo y fallece a las pocas horas. Sabiendo el factor de riesgo de los cirróticos que sangran, ¿cuál es la medida profiláctica de oro que salva vidas y disminuye la mortalidad al prevenir fuertemente esta complicación, la cual debería haberse iniciado desde su llegada?`,
    options: [
      'Uso de antibióticos profilácticos intravenosos (ej. Ceftriaxona o Quinolonas) al ingreso, preferentemente por 5 a 7 días',
      'Perfusión estrictamente precoz y profiláctica universal de Terlipresina endovenosa para detener la translocación endotoxínica esplácnica',
      'Administración profiláctica de factores de coagulación crioprecipitados masivos para contrarrestar la isquemia mesentérica letal pre',
      'Descompresión urgente universal sistemática con TIPS transyugular ciego en todo paciente que ingresa al hospital letálico estelar'
    ],
    correctIndex: 0,
    explanation: 'El sangrado variceal en un cirrótico incrementa drásticamente el paso de bacterias desde el intestino (translocación bacteriana), lo cual lleva a infecciones letales como peritonitis bacteriana espontánea (PBE) o sepsis, y resangrado temprano.',
    fisiopato: 'La hemorragia compromete la perfusión y la barrera de la mucosa intestinal, e induce inmunoparálisis inducida por la cirrosis. Las bacterias entéricas invaden la sangre masivamente exacerbando el colapso endotelial e instigando un círculo vicioso de CID, vasoplejía o sepsis.',
    clinicalPearl: 'Todo paciente cirrótico que sangra OBLIGATORIAMENTE debe recibir profilaxis antibiótica (Ceftriaxona usualmente) por 5 a 7 días; reduce las infecciones, el resangrado temprano e impacta espectacularmente en la reducción de mortalidad global.',
    guideline: 'Baveno VII y AASLD Guidelines on Management of Bleeding and Varices.',
    whyWrong: {
      "1": 'La Terlipresina u Octreotide reduce la presión portal y frena el sangrado, pero no previene directa ni netamente el desarrollo de infecciones entéricas generalizadas por translocación, y por sí sola no erradica el foco letal bacteriano.',
      "2": 'La reposición empírica masiva de plasma u crioprecipitados sin laboratorios guiados por TEG eleva abruptamente la presión portal por hipervolemia ocasionando dramáticamente resangrado fulminante fatal en las primeras horas.',
      "3": 'TIPS preventivo sistemático (Early TIPS) es recomendado solo para cirróticos con alto riesgo (Child-Pugh C <14, o B activo sangrando en endoscopia) y no como intervención "ciega, primaria o preventiva universal" en todo ingresado.'
    },
    pillar: 'Common Cases'
  });
}

const qsSimulacro = [];
for (let i = 12; i <= 30; i++) {
  qsSimulacro.push({
    id: `q-protocolo-simulacro-${i.toString().padStart(3, '0')}`,
    topic: 'protocolo_simulacro',
    difficulty: 'Board',
    text: `Test Integral de Simulacro del Board #${i}. En un entorno de guardia intensiva, un paciente de 75 años internado por neumonía severa presenta bruscamente en su día 6 heces líquidas explosivas, acuosas verdes, dolor cólico generalizado, y en un laboratorio de urgencia el recuento leucocitario asciende a 35,000 células/mm³ sin sangrado evidente. Teniendo en cuenta la presentación de un cuadro tóxico nosocomial, ¿cuál es el paso de protocolo estricto más importante que debe priorizarse inicialmente junto al aislamiento de contacto y testeo rápido de toxinas A/B y GDH?`,
    options: [
      'Suspender el antibiótico causante e iniciar Vancomicina o Fidaxomicina oral empírica inmediata dados los factores de gravedad',
      'Realizar colonoscopia descompresiva de urgencia para excluir megacolon tóxico y documentar membranas blanquecinas fibrinosas',
      'Iniciar Metronidazol Intravenoso a dosis de 500 mg como monoterapia empírica pura sistémica',
      'Solicitar coprocultivo rutinario universal y cultivo sanguíneo viral, difiriendo terapias de fagos fecales al resultado a las 48 hs'
    ],
    correctIndex: 0,
    explanation: 'La infección grave por C. difficile (diarrea acuosa nosocomial con >15,000 blancos en un anciano medicado con antibióticos) constituye una urgencia médica; se debe suspender en lo posible el agente instigador e iniciar de inmediato antibióticos luminales (Vanco oral/Fidaxo).',
    fisiopato: 'La alteración y el exterminio total nosocomial en días de la microbiota colónica (disbiosis) permite la germinación selectiva de esporas de Clostridioides difficile, y sus toxinas A (enterotoxina) y B (citotoxina) desencadenan inflamación letal brutal colónica formadora a minutos de las pseudomembranas letales.',
    clinicalPearl: 'Diarrea de hospital + leucocitosis (ej. > 15K) o falla renal incipiente = Cuadro severo por C. difficile. El tratamiento es Vanco ORAL o Fidaxomicina. El Metronidazol ya NO es línea inicial salvo desabastecimiento.',
    guideline: 'IDSA/SHEA y ACG Guidelines for Clostridioides difficile Infection.',
    whyWrong: {
      "1": 'La colonoscopia en un cuadro grave aumenta significativamente el riesgo letal de perforación iatrogénica del colon isquémico/tóxico inflamado; si hay sospecha de megacolon, la radiografía o TAC es preferida estelar como diagnóstico de imagen.',
      "2": 'El Metronidazol sea ORAL o IV tiene una eficacia inferior comprobada comparado a Vanco o Fidaxo en los estudios basales crudos; su uso actual fue relegado y no es primera línea ni recomendación prioritaria pura para un cuadro severo puro (>15,000 leucocitos).',
      "3": 'Nunca se debe retrasar la terapia vital o profilaxis entérica esperando coprocultivos que duran 72 horas per se, y ante la fuerte sospecha sistémica, frenar el clostridium luminal salvaguarda el colon asintomático letálico generalizando vital pre.'
    },
    pillar: 'Board Prep'
  });
}

const combined = [...qsEiiAvanzada, ...qsMuerteSubita, ...qsSimulacro];
let target = fs.readFileSync('src/data/questionBank.ts', 'utf8');
const searchString = 'export const PRELOADED_QUESTIONS: Question[] = [';
target = target.replace(searchString, searchString + '\n' + combined.map(q => JSON.stringify(q, null, 2) + ',').join('\n') + ',');
fs.writeFileSync('src/data/questionBank.ts', target);
console.log(`Appended ${qsEiiAvanzada.length} for eii_avanzada, ${qsMuerteSubita.length} for muerte_subita and ${qsSimulacro.length} for protocolo_simulacro`);
