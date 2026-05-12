import { Question } from '../types/quiz';

export const SEED_QUESTIONS: Question[] = [
  {
    "id": "seed_1",
    "topic": "dolor_abdominal",
    "difficulty": "Fellow",
    "text": "Un paciente de 68 años con fibrilación auricular presenta dolor abdominal súbito, desproporcionado al examen físico. La TC inicial muestra pocos hallazgos. Tras 6 horas, presenta acidosis láctica y signos de irritación peritoneal. ¿Cuál es el diagnóstico más probable y el siguiente paso?",
    "options": [
      "Isquemia Mesentérica Aguda - AngioTC / Laparotomía de urgencia",
      "Obstrucción intestinal - Sonda nasogástrica y observación",
      "Pancreatitis Aguda - Hidratación agresiva",
      "Aneurisma de aorta disecante - Esofagograma"
    ],
    "correctIndex": 0,
    "explanation": "La tríada de dolor desproporcionado, factores de riesgo embólico y posterior acidosis es clásica de la Isquemia Mesentérica Aguda (IMA). El retraso en el diagnóstico aumenta drásticamente la mortalidad.",
    "fisiopato": "La embolia en la arteria mesentérica superior (AMS) produce una interrupción del flujo arterial, llevando a necrosis transmural rápida.",
    "clinicalPearl": "En IMA, la TC normal no excluye el diagnóstico si la sospecha clínica es alta. El tiempo es intestino.",
    "guideline": "AGA Clinical Practice Update on IMA 2024",
    "whyWrong": {
      "0": "Manejo correcto ante sospecha de isquemia embólica.",
      "1": "El dolor súbito y antecedentes de FA orientan a origen vascular, no mecánico.",
      "2": "La pancreatitis suele tener amilasa/lipasa elevadas y un patrón de dolor diferente.",
      "3": "El esofagograma no tiene rol en la disección aórtica que causa dolor abdominal."
    }
  },
  {
    "id": "seed_2",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "En un paciente hospitalizado que desarrolla diarrea por C. difficile, ¿cuál de los siguientes criterios define un episodio como \"Grave\" (Severe) según las guías IDSA/SHEA, requiriendo Vancomicina oral como primera línea?",
    "options": [
      "Leucocitosis > 15,000 cel/µL o Creatinina > 1.5 mg/dL",
      "Más de 10 deposiciones en 24 horas",
      "Presencia de megacolon tóxico en la radiografía",
      "Hipoalbuminemia < 2.5 g/dL únicamente"
    ],
    "correctIndex": 0,
    "explanation": "Los criterios de gravedad para CDI incluyen leucocitosis > 15k o aumento de creatinina > 1.5 mg/dL sobre el basal. El episodio fulminante (crítico) incluye hipotensión o megacolon.",
    "fisiopato": "La toxina B de C. difficile induce una respuesta inflamatoria sistémica y daño epitelial extenso, reflejado en la leucocitosis.",
    "clinicalPearl": "La Fidaxomicina es ahora preferida sobre Vancomicina si hay disponibilidad, por menor tasa de recurrencia.",
    "guideline": "IDSA/SHEA C. difficile Guidelines 2021 Update",
    "whyWrong": {
      "0": "Criterios diagnósticos de severidad establecidos.",
      "1": "El número de deposiciones es subjetivo y no define severidad en guías.",
      "2": "Esto define enfermedad fulminante o crítica, no solo grave.",
      "3": "La hipoalbuminemia es un factor pronóstico pero no un criterio de clasificación de severidad por sí solo."
    }
  },
  {
    "id": "seed_da_1",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "¿Cuál es el agente etiológico más común responsable de los brotes de gastroenteritis aguda a nivel mundial en todos los grupos de edad, frecuentemente asociado a cruceros, hospitales y escuelas?",
    "options": [
      "Rotavirus",
      "Norovirus",
      "Escherichia coli enterotoxigénica (ETEC)",
      "Salmonella enteritidis"
    ],
    "correctIndex": 1,
    "explanation": "Norovirus es la principal causa de gastroenteritis epidémica en todo el mundo. Es altamente contagioso debido a su baja dosis infectiva y resistencia ambiental.",
    "fisiopato": "Se une a los antígenos de grupo sanguíneo histo-específicos (HBGA) en el epitelio intestinal, causando malabsorción transitoria.",
    "clinicalPearl": "El Norovirus es la causa #1 de brotes; sospecharlo cuando múltiples personas enferman tras un evento común.",
    "guideline": "CDC / ACG Acute Diarrheal Infections 2025",
    "whyWrong": {
      "0": "Principal causa en niños antes de la vacuna, pero Norovirus lo supera en población general.",
      "1": "Agente líder en brotes globales.",
      "2": "Causa común de diarrea del viajero, pero menos común en brotes institucionales en países desarrollados.",
      "3": "Causa bacteriana importante, pero menos frecuente que los virus en brotes masivos."
    }
  },
  {
    "id": "seed_da_2",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "Un paciente de 75 años consulta por diarrea acuosa profusa (8-10 deposiciones/día) de 2 semanas de evolución. Recientemente inició Metformina y Sertralina. La colonoscopia es macroscópicamente normal. ¿Cuál es el siguiente paso diagnóstico más apropiado?",
    "options": [
      "Tomar biopsias seriadas del colon para descartar Colitis Microscópica",
      "Iniciar tratamiento empírico con Loperamida",
      "Realizar test de aliento para sobrecrecimiento bacteriano (SIBO)",
      "Suspender ambos fármacos y observar 48 horas"
    ],
    "correctIndex": 0,
    "explanation": "En pacientes mayores con colonoscopia normal y diarrea acuosa crónica/subaguda, se deben tomar biopsias para descartar colitis microscópica (colágena o linfocítica), a menudo desencadenada por fármacos (AINEs, ISRS, metformina).",
    "fisiopato": "La inflamación linfocítica intraepitelial o el engrosamiento de la banda de colágeno subepitelial interfieren con la absorción neta de agua.",
    "clinicalPearl": "Diarrea acuosa + Colonoscopia normal = Siempre tomar biopsias del colon derecho e izquierdo.",
    "guideline": "AGA Clinical Practice Guidelines on Microscopic Colitis 2025",
    "whyWrong": {
      "0": "Conducta estándar para diagnóstico definitivo.",
      "1": "Acción paliativa que puede retrasar el diagnóstico de una entidad tratable.",
      "2": "El SIBO es menos común como causa de este cuadro súbito que la colitis microscópica inducida por fármacos.",
      "3": "Aunque es razonable, las biopsias son necesarias para confirmar la etiología inflamatoria y guiar el uso de Budesonida."
    }
  },
  {
    "id": "seed_da_3",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "¿Cuál es la recomendación actual respecto al uso de antibióticos en la diarrea aguda por Escherichia coli productora de toxina Shiga (STEC/VTEC), como la cepa O157:H7?",
    "options": [
      "Ciprofloxacino para reducir el tiempo de excreción viral",
      "Azitromicina para prevenir el síndrome hemolítico urémico (SHU)",
      "Evitar antibióticos puesto que pueden aumentar el riesgo de SHU",
      "Antibióticos solo si el paciente presenta fiebre alta o sepsis"
    ],
    "correctIndex": 2,
    "explanation": "Se debe evitar el uso de antibióticos en sospecha de STEC, ya que el estrés bacteriano induce la liberación masiva de toxina Shiga, aumentando significativamente el riesgo de Síndrome Hemolítico Urémico (SHU).",
    "fisiopato": "La toxina Shiga daña directamente las células endoteliales glomerulares, causando microangiopatía trombótica.",
    "clinicalPearl": "Diarrea sanguinolenta sin fiebre es la presentación clásica de STEC; no dar antibióticos.",
    "guideline": "IDSA / ACG Clinical Guidelines for Acute Diarrhea 2025",
    "whyWrong": {
      "0": "Aumenta drásticamente el riesgo de SHU.",
      "1": "No hay evidencia de beneficio y sí riesgo teórico de lisis bacteriana.",
      "2": "Consenso internacional preventivo.",
      "3": "Incluso en casos graves, el soporte es la prioridad sobre los antibióticos en STEC confirmada."
    }
  },
  {
    "id": "seed_da_4",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "Un paciente de 35 años regresa de un viaje a Tailandia con diarrea líquida, cólicos intensos y náuseas. No presenta sangre ni moco. ¿Cuál es el tratamiento profiláctico o terapéutico de elección según las guías actuales para la diarrea del viajero?",
    "options": [
      "Azitromicina 1000 mg dosis única o 500 mg por 3 días",
      "Ciprofloxacino 500 mg dosis única",
      "Metronidazol 500 mg por 5 días",
      "Rifaximina solo si viaja a Asia"
    ],
    "correctIndex": 0,
    "explanation": "La Azitromicina es el tratamiento de elección para la diarrea del viajero en el sudeste asiático debido a las altas tasas de resistencia de Campylobacter a las fluoroquinolonas.",
    "fisiopato": "Bloquea la síntesis de proteínas bacterianas al unirse a la subunidad 50S del ribosoma.",
    "clinicalPearl": "En Sudeste Asiático prefiera Azitromicina; en México o América Latina las fluoroquinolonas aún son útiles.",
    "guideline": "ISTM / ACG Guidelines for Traveler's Diarrhea 2024",
    "whyWrong": {
      "0": "Tratamiento empírico de elección en áreas con resistencia a quinolonas.",
      "1": "Mucha resistencia en Asia (Campylobacter resistente >80%).",
      "2": "Indicado para parásitos, no es primera línea empírica.",
      "3": "La Rifaximina no es eficaz contra patógenos invasivos como Campylobacter o Salmonella."
    }
  },
  {
    "id": "seed_da_5",
    "topic": "diarrea_aguda",
    "difficulty": "Fellow",
    "text": "Un excursionista que bebió agua de un arroyo presenta diarrea esteatorreica, flatulencia excesiva y pérdida de peso tras 3 semanas. ¿Cuál es el patógeno más probable y la prueba de elección?",
    "options": [
      "Giardia lamblia - Coproantígeno o PCR",
      "Entamoeba histolytica - Serología",
      "Cryptosporidium - Tinción de Ziehl-Neelsen modificada",
      "Vibrio cholerae - Cultivo en medio TCBS"
    ],
    "correctIndex": 0,
    "explanation": "La Giardia es el parásito protozoario más común en humanos. El cuadro de diarrea prolongada, esteatorrea y flatulencia tras exposición a aguas recreacionales o naturales es muy sugerente.",
    "fisiopato": "Los trofozoítos de Giardia se adhieren al borde en cepillo del intestino delgado, causando atrofia vellositaria y deficiencia de disacaridasas.",
    "clinicalPearl": "La Giardia puede causar intolerancia a la lactosa transitoria incluso después de la erradicación del parásito.",
    "guideline": "ACG Guidelines for Acute Diarrhea 2025",
    "whyWrong": {
      "0": "Cuadro clínico y método diagnóstico estándar.",
      "1": "Suele causar diarrea sanguinolenta y abscesos hepáticos, no esteatorrea.",
      "2": "Causa diarrea acuosa profusa, especialmente en inmunosuprimidos.",
      "3": "Causa diarrea acuosa masiva de inicio agudo (agua de arroz)."
    }
  },
  {
    "id": "seed_da_6",
    "topic": "diarrea_aguda",
    "difficulty": "Staff",
    "text": "Una mujer de 82 años con antecedentes de hipertensión presenta dolor abdominal tipo cólico en el flanco izquierdo seguido de una deposición con sangre roja fresca. ¿Cuál es la sospecha diagnóstica prioritaria?",
    "options": [
      "Diverticulitis Aguda",
      "Isquemia Mesentérica Aguda",
      "Colitis Isquémica",
      "Hemorragia por Divertículo de Meckel"
    ],
    "correctIndex": 2,
    "explanation": "La tríada de dolor abdominal, urgencia defecatoria y rectorragia en un paciente mayor sugiere fuertemente Colitis Isquémica, que afecta típicamente al colon izquierdo (punto de Griffith o punto de Sudeck).",
    "fisiopato": "Es una forma de isquemia no oclusiva por bajo flujo en la microvasculatura colónica.",
    "clinicalPearl": "A diferencia de la isquemia mesentérica, el dolor en la colitis isquémica suele ser menos severo y se asocia a sangrado precoz.",
    "guideline": "ACG Guidelines on Ischemic Colitis 2025",
    "whyWrong": {
      "0": "Suele presentarse con fiebre y dolor persistente, el sangrado es raro en diverticulitis.",
      "1": "El dolor es desproporcionado y el sangrado es un signo tardío de infarto intestinal.",
      "2": "Presentación clásica en el territorio de la arteria mesentérica inferior (AMI).",
      "3": "Menos probable en este grupo de edad y con este patrón de dolor."
    }
  },
  {
    "id": "seed_da_7",
    "topic": "diarrea_aguda",
    "difficulty": "Subspecialist",
    "text": "Respecto al uso de Paneles Moleculares Multiplex (PCR) en el diagnóstico de diarrea aguda, ¿cuál es una limitación importante que debe considerar el clínico?",
    "options": [
      "Baja sensibilidad en comparación con el coprocultivo",
      "Incapacidad para detectar virus",
      "No distingue entre infección activa y colonización/portación asintomática",
      "Requiere más de una semana para obtener resultados"
    ],
    "correctIndex": 2,
    "explanation": "Debido a su altísima sensibilidad, los paneles de PCR pueden detectar material genético de patógenos que no son la causa actual de la diarrea (ej. C. diff en portadores o Salmonella persistente), lo que requiere correlación clínica estricta.",
    "fisiopato": "La amplificación de ADN/ARN detecta fragmentos incluso si el organismo no está viable o está en baja cantidad.",
    "clinicalPearl": "Un panel molecular positivo no siempre justifica el tratamiento; evalúe al paciente, no al resultado.",
    "guideline": "ACG Clinical Practice Guidelines 2025",
    "whyWrong": {
      "0": "Al contrario, la sensibilidad es muy superior al cultivo.",
      "1": "Los paneles modernos incluyen múltiples virus (Norovirus, Rotavirus, etc.).",
      "2": "Es el principal desafío clínico actual (sobre-diagnóstico).",
      "3": "Los resultados suelen estar disponibles en horas (1-6h)."
    }
  },
  {
    "id": "seed_hep_1",
    "topic": "perfil_hepatico",
    "difficulty": "Staff",
    "text": "Un paciente de 45 años asintomático presenta en su chequeo: AST 180 U/L, ALT 75 U/L (Relación 2.4), GGT 210 U/L, VCM de 102 fL y Plaquetas 140,000. ¿Cuál es la sospecha diagnóstica prioritaria?",
    "options": [
      "Infección por Virus de Hepatitis B Crónica",
      "Enfermedad Hepática por Alcohol (EHA)",
      "Hepatitis Autoinmune Tipo 1",
      "MASLD (Hígado Graso Metabólico)"
    ],
    "correctIndex": 1,
    "explanation": "La relación AST/ALT > 2 asociada a elevación de GGT y macrocitosis (VCM elevado) es altamente sugerente de daño hepático por alcohol. La AST mitocondrial se libera más que la ALT en este contexto.",
    "visualHint": "Se observa una biopsia hepática con presencia de Cuerpos de Mallory-Denk (material eosinofílico hialino intracitoplasmático), infiltrado de PMN rodeando hepatocitos en degeneración y fibrosis en \"alambrada\" (pericelular).",
    "fisiopato": "El alcohol induce daño mitocondrial (liberación de AST) y déficit de Piridoxal-5-Fosfato (necesario para la síntesis de ALT), invirtiendo la relación habitual.",
    "clinicalPearl": "Relación De Ritis (AST/ALT) > 2 = Sospecha alcohol hasta demostrar lo contrario.",
    "guideline": "ACG Guidelines on Abnormal Liver Chemistries 2025",
    "whyWrong": {
      "0": "Suele tener ALT > AST y no suele presentar macrocitosis.",
      "1": "Patrón bioquímico clásico de hepatitis alcohólica persistente.",
      "2": "Suele presentar elevación marcada de Globulinas e IgG.",
      "3": "Típicamente la ALT es superior a la AST hasta etapas muy avanzadas de fibrosis."
    }
  },
  {
    "id": "seed_eii_falla_1",
    "topic": "eii_avanzada",
    "difficulty": "Subspecialist",
    "text": "Un paciente con Colitis Ulcerosa en tratamiento con Adalimumab 40mg c/2 semanas presenta recurrencia de síntomas tras 12 meses de remisión. Los niveles valle de Adalimumab son de 1.2 µg/mL (Meta > 7.5) y el título de anticuerpos anti-adalimumab (AAA) es de > 50 U/L (Alto). ¿Cuál es la conducta más apropiada?",
    "options": [
      "Optimizar dosis a 40mg semanalmente",
      "Cambiar a otro fármaco de la misma clase (Infliximab)",
      "Cambiar a una familia de fármacos diferente (ej. Ustekinumab o Upadacitinib)",
      "Añadir Azatioprina para rescatar el nivel del biológico"
    ],
    "correctIndex": 2,
    "explanation": "Estamos ante una Falla Secundaria con Inmunogenicidad de alto título (pérdida de respuesta mediada por anticuerpos). Al haber anticuerpos neutralizantes altos, optimizar la dosis es ineficaz. Cambiar de clase es preferible cuando hay inmunogenicidad persistente a un anticuerpo monoclonal.",
    "fisiopato": "Los anticuerpos neutralizantes se unen al sitio activo del fármaco, bloqueando su unión al TNF y acelerando su depuración plasmática.",
    "clinicalPearl": "Falla con Anticuerpos Altos = Cambiar de familia o biológico fuera de la inmunogenicidad.",
    "guideline": "AGA Clinical Practice Guidelines on TDM in IBD 2025",
    "whyWrong": {
      "0": "Inútil si los anticuerpos son altos; el fármaco se degradará igual de rápido.",
      "1": "Riesgo de \"inmunogenicidad de clase\". Es mejor cambiar el mecanismo de acción.",
      "2": "Conducta estándar para superar la resistencia inmunogénica.",
      "3": "La inmunomodulación previene la formación de anticuerpos, pero raramente los revierte una vez que son de alto título."
    }
  },
  {
    "id": "seed_3",
    "topic": "erge",
    "difficulty": "Staff",
    "text": "¿Qué grado de esofagitis según la clasificación de Los Ángeles requiere terapia de mantención con IBP de forma indefinida?",
    "options": [
      "Grados A y B",
      "Solamente Grado D",
      "Grados C y D",
      "Cualquier grado con síntomas"
    ],
    "correctIndex": 2,
    "explanation": "En pacientes con esofagitis severa (grados C o D de Los Ángeles), se recomienda terapia de mantención con IBP de forma indefinida.",
    "fisiopato": "El daño mucoso extenso indica un fallo severo de los mecanismos de defensa antirreflujo.",
    "clinicalPearl": "AET > 6% en pH-metría es diagnóstico conclusivo de ERGE en ausencia de esofagitis severa.",
    "guideline": "Consenso de Lyon 2.0 (2023)",
    "whyWrong": {
      "0": "Grados A y B pueden intentar suspensión de terapia si resuelven síntomas.",
      "1": "No solo el D, el C también requiere mantención.",
      "2": "Los grados C y D representan daño severo y alto riesgo de recurrencia y estenosis.",
      "3": "Los síntomas no siempre se correlacionan con el daño mucoso."
    }
  },
  {
    "id": "seed_4",
    "topic": "hda",
    "difficulty": "Subspecialist",
    "text": "En la clasificación de Forrest para úlcera péptica, ¿cuál es el porcentaje aproximado de resangrado para una lesión clase IIb?",
    "options": [
      "5-10%",
      "20-30%",
      "40-50%",
      "80-100%"
    ],
    "correctIndex": 1,
    "explanation": "La clase IIb (coágulo adherido) tiene un riesgo de resangrado de aproximadamente 20-30% sin terapia endoscópica.",
    "fisiopato": "La presencia de un coágulo indica una hemostasia inestable que puede desprenderse con la pepsina.",
    "clinicalPearl": "Las clases Ia a IIb requieren terapia endoscópica, preferiblemente dual.",
    "guideline": "Manual de Enfermedades Digestivas 2025 / Forrest",
    "whyWrong": {
      "0": "Muy bajo para coágulo adherido.",
      "1": "Es el rango aceptado por la mayoría de las guías internacionales.",
      "2": "Demasiado alto para IIb.",
      "3": "Este es el riesgo para Ia (sangrado pulsátil)."
    }
  },
  {
    "id": "seed_5",
    "topic": "h_pylori",
    "difficulty": "Fellow",
    "text": "¿Cuál es la duración recomendada estándar para la terapia de erradicación de Helicobacter pylori en Chile?",
    "options": [
      "7 días",
      "10 días",
      "14 días",
      "21 días"
    ],
    "correctIndex": 2,
    "explanation": "Las guías actuales (incluida la GES 2013 y actualizaciones 2025) recomiendan esquemas de 14 días para maximizar las tasas de erradicación frente a la resistencia.",
    "fisiopato": "El tiempo prolongado permite asegurar la eliminación de la bacteria en diferentes estados replicativos.",
    "clinicalPearl": "Se debe suspender el IBP al menos 2 semanas antes de realizar un test de aliento para verificar erradicación.",
    "guideline": "Consenso de Maastricht VI / Manual 2025",
    "whyWrong": {
      "0": "7 días tiene altas tasas de fallo actualmente.",
      "1": "10 días es aceptado en algunas zonas, pero no es el estándar nacional.",
      "2": "14 días es la recomendación fuerte actual.",
      "3": "No hay beneficio demostrado sobre los 14 días."
    }
  },
  {
    "id": "seed_6",
    "topic": "eii",
    "difficulty": "Subspecialist",
    "text": "¿Cuál de los siguientes hallazgos histológicos es patognomónico de la enfermedad de Crohn y ayuda a diferenciarla de la Colitis Ulcerosa?",
    "options": [
      "Abscesos crípticos",
      "Plasmocitosis basal",
      "Granulomas no caseificantes",
      "Depleción de mucina"
    ],
    "correctIndex": 2,
    "explanation": "La presencia de granulomas no caseificantes (observada en ~30% de biopsias) es característica de la enfermedad de Crohn.",
    "fisiopato": "La inflamación transmural y discontinua favorece la formación de granulomas por activación macrofágica persistente.",
    "clinicalPearl": "La enfermedad perianal (fístulas, abscesos) es altamente sugestiva de Crohn sobre CU.",
    "guideline": "ECCO Guidelines / Manual 2025",
    "whyWrong": {
      "0": "Los abscesos crípticos ocurren en ambos, pero son más comunes en CU.",
      "1": "La plasmocitosis basal es un marcador de cronicidad en ambos.",
      "2": "Es el hallazgo más específico (aunque no siempre presente).",
      "3": "La depleción de mucina es típica de la CU activa."
    }
  },
  {
    "id": "seed_7",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "Según los criterios de Atlanta 2013, ¿qué define a una pancreatitis aguda como \"moderadamente grave\"?",
    "options": [
      "Falla orgánica persistente (> 48h)",
      "Falla orgánica transitoria (< 48h) o complicaciones locales",
      "Dolor abdominal refractario",
      "PCR > 150 mg/dL"
    ],
    "correctIndex": 1,
    "explanation": "La pancreatitis moderadamente grave se define por falla orgánica transitoria que resuelve en menos de 48h o presencia de complicaciones locales/sistémicas.",
    "fisiopato": "La respuesta inflamatoria sistémica inicial puede causar disfunción orgánica que el cuerpo logra compensar precozmente.",
    "clinicalPearl": "La hidratación enérgica en las primeras 24h es la medida más importante para prevenir la progresión a fallo persistente.",
    "guideline": "Atlanta 2013 / Manual 2025",
    "whyWrong": {
      "0": "Falla persistente define la forma grave.",
      "1": "Este es el criterio exacto que combina transitoriedad o complicaciones locales.",
      "2": "El dolor no define la gravedad por Atlanta.",
      "3": "La PCR es un marcador pronóstico, no un criterio definitorio de etapa."
    }
  },
  {
    "id": "seed_8",
    "topic": "cancer_gastrico",
    "difficulty": "Staff",
    "text": "¿Cuál es el estadio OLGIM recomendado para iniciar vigilancia endoscópica cada 2 años según el Consenso Chileno 2024?",
    "options": [
      "OLGIM 0",
      "OLGIM I",
      "OLGIM II",
      "OLGIM III/IV"
    ],
    "correctIndex": 3,
    "explanation": "El grupo con OLGIM III/IV (metaplasia intestinal extensa) es el que presenta mayor riesgo de progresión y requiere vigilancia estrecha cada 2 años.",
    "fisiopato": "La metaplasia intestinal incompleta (tipo III) en áreas extensas indica una inestabilidad genómica avanzada en la mucosa.",
    "clinicalPearl": "El tratamiento de H. pylori es la medida de prevención primaria más costo-efectiva incluso en estadios avanzados.",
    "guideline": "Consenso Chileno ACHED 2024",
    "whyWrong": {
      "0": "No requiere vigilancia.",
      "1": "Virtualmente nulo riesgo.",
      "2": "Se recomienda cada 4 años.",
      "3": "Este es el grupo de alto riesgo por extensión."
    }
  },
  {
    "id": "seed_9",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "Paciente con HAI tipo 1 en tratamiento con Prednisona y Azatioprina. ¿Cuál es la conducta recomendada ante una recaída tras la suspensión del tratamiento?",
    "options": [
      "Reiniciar prednisona a dosis altas",
      "Cambiar a Micofenolato Mofetil",
      "Realizar biopsia hepática inmediata",
      "Reiniciar el esquema anterior con dosis de mantención indefinida"
    ],
    "correctIndex": 3,
    "explanation": "En pacientes con HAI que recaen tras suspender el tratamiento, se recomienda reiniciar la terapia y considerar el mantenimiento de por vida para evitar nuevas descompensaciones.",
    "fisiopato": "La pérdida de tolerancia inmunológica suele ser permanente en la HAI tipo 1, requiriendo supresión crónica.",
    "clinicalPearl": "Un aumento de IgG sérica > 16 g/L es un criterio mayor en el sistema simplify para diagnóstico de HAI.",
    "guideline": "EASL / Manual 2025",
    "whyWrong": {
      "0": "Solo si la recaída es severa/fulminante.",
      "1": "Segunda línea si hay intolerancia a AZA.",
      "2": "No siempre es necesaria si el diagnóstico ya estaba establecido.",
      "3": "La mayoría de las guías sugieren tratamiento indefinido tras la primera recaída."
    }
  },
  {
    "id": "seed_10",
    "topic": "motilidad",
    "difficulty": "Fellow",
    "text": "¿Cuál es el hallazgo manométrico que define la Acalasia Tipo II según la Clasificación de Chicago v4.0?",
    "options": [
      "IRP elevado con 100% de peristalsis fallida",
      "IRP elevado con panpresurización esofágica en ≥20% de las degluciones",
      "IRP elevado con contracciones prematuras (DLP < 4.5s)",
      "IRP normal con ausencia de contractilidad"
    ],
    "correctIndex": 1,
    "explanation": "La Acalasia Tipo II se caracteriza por el fallo de relajación de la unión esofagogástrica (IRP elevado) y panpresurización esofágica en al menos el 20% de las degluciones.",
    "fisiopato": "La panpresurización refleja la compresión del bolo entre el esfínter superior e inferior no relajado en un cuerpo esofágico con tono muscular preservado.",
    "clinicalPearl": "La acalasia tipo II es la que mejor responde al tratamiento (dilatación o miotomía).",
    "guideline": "Chicago Classification v4.0",
    "whyWrong": {
      "0": "Define el Tipo I (clásica).",
      "1": "Criterio patognomónico del Tipo II.",
      "2": "Define el Tipo III (espástica).",
      "3": "No es compatible con diagnóstico de acalasia (IRP debe estar elevado)."
    }
  },
  {
    "id": "seed_11",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "En el manejo de la necrosis pancreática infectada, ¿cuál es el momento óptimo para realizar un desbridamiento quirúrgico o mínimamente invasivo (Step-up approach)?",
    "options": [
      "Inmediatamente al diagnóstico de la infección",
      "Primeras 48 horas tras el inicio del dolor",
      "Después de 4 semanas, cuando la colección está \"walled-off\"",
      "Solo si falla el drenaje percutáneo inicial"
    ],
    "correctIndex": 2,
    "explanation": "El enfoque \"step-up\" prefiere esperar a que la necrosis se delimite (Walled-off Necrosis, WON), usualmente después de las 4 semanas, para reducir la morbimortalidad.",
    "fisiopato": "La organización del tejido necrótico facilita la disección y reduce el riesgo de hemorragia y fístulas post-quirúrgicas.",
    "clinicalPearl": "El drenaje percutáneo inicial puede evitar la cirugía en el 35-50% de los casos.",
    "guideline": "IAP/APA Evidence-based guidelines",
    "whyWrong": {
      "0": "Aumenta drásticamente la mortalidad por fragilidad del tejido.",
      "1": "Demasiado temprano; fase de SIRS sistémico.",
      "2": "Permite la delimitación de la colección.",
      "3": "Es parte del proceso, pero la temporalidad de las 4 semanas es el concepto clave."
    }
  },
  {
    "id": "seed_12",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el tratamiento de primera línea para el manejo de la Ascitis Grado 2-3 en un paciente con cirrosis?",
    "options": [
      "Restricción de sodio + Espironolactona ± Furosemida",
      "Paracentesis evacuadora total inicial",
      "Transplante hepático de urgencia",
      "Shunt portosistémico intrahepático transyugular (TIPS)"
    ],
    "correctIndex": 0,
    "explanation": "El manejo inicial de la ascitis moderada-severa (Grado 2 y 3) se basa en la restricción de sodio (<2g/día) y el uso de diuréticos (antagonistas de aldosterona como primera línea).",
    "fisiopato": "La activación del sistema renina-angiotensina-aldosterona produce retención masiva de sodio y agua; los diuréticos revierten este efecto.",
    "clinicalPearl": "La relación dosis recomendada es 100mg Espironolactona / 40mg Furosemida para mantener el potasio en rango.",
    "guideline": "EASL Guidelines / Manual 2025",
    "whyWrong": {
      "0": "Es el estándar de oro inicial.",
      "1": "Solo si la ascitis es a tensión o refractaria.",
      "2": "Se evalúa para manejo crónico, no es la medida inicial del síntoma.",
      "3": "Segunda o tercera línea en ascitis refractaria."
    }
  },
  {
    "id": "seed_13",
    "topic": "gastroscopia",
    "difficulty": "Staff",
    "text": "Según la clasificación de París, ¿qué morfología define a una lesión superficial como \"excavada\"?",
    "options": [
      "0-Ip",
      "0-Is",
      "0-IIc",
      "0-III"
    ],
    "correctIndex": 3,
    "explanation": "En la clasificación de París, el tipo 0-III corresponde a lesiones excavadas (úlceras profundas), mientas que el IIc es ligeramente deprimido.",
    "fisiopato": "La profundidad de la lesión sugiere una mayor probabilidad de invasión de la submucosa.",
    "clinicalPearl": "Las lesiones tipo 0-III tienen un riesgo significativamente mayor de complicaciones durante la resección endoscópica.",
    "guideline": "París Classification of superficial lesions",
    "whyWrong": {
      "0": "Protruberante pediculada.",
      "1": "Protruberante sésil.",
      "2": "Plana deprimida.",
      "3": "Definición exacta de lesión excavada."
    }
  },
  {
    "id": "seed_14",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "¿Cuál es la meta terapéutica de nivel 1 (inmediata) en el algoritmo STRIDE-II para el manejo de la EII?",
    "options": [
      "Cicatrización mucosa (endoscópica)",
      "Remisión clínica y normalización de la PCR/Calprotectina",
      "Calidad de vida normalizada",
      "Ausencia de discapacidad"
    ],
    "correctIndex": 1,
    "explanation": "STRIDE-II define la remisión clínica y la mejoría bioquímica (PCR, Calprotectina) como los objetivos a corto plazo (nivel 1).",
    "fisiopato": "La normalización de biomarcadores precede a la cicatrización de la mucosa y predice mejores resultados.",
    "clinicalPearl": "La meta final (Long-term goal) es la ausencia de discapacidad y calidad de vida normal.",
    "guideline": "STRIDE-II Consensus (IOIBD)",
    "whyWrong": {
      "0": "Es una meta a mediano plazo (nivel 2).",
      "1": "Son objetivos inmediatos para guiar el Treat-to-Target.",
      "2": "Meta a largo plazo.",
      "3": "Meta a largo plazo extrema."
    }
  },
  {
    "id": "seed_15",
    "topic": "hepatitis",
    "difficulty": "Staff",
    "text": "En un paciente con Hepatitis B crónica, ¿qué hallazgo define la fase de \"Infección Crónica HBeAg Negativa\" (antes llamada portador inactivo)?",
    "options": [
      "HBeAg (+), ADN-VHB > 20,000 UI/mL, ALT normal",
      "HBeAg (-), Anticuerpo anti-HBe (+), ADN-VHB < 2,000 UI/mL, ALT normal",
      "HBeAg (+), ADN-VHB elevado, ALT elevada",
      "HBsAg (-), Anti-HBc (+), ADN-VHB indetectable"
    ],
    "correctIndex": 1,
    "explanation": "Esta fase se caracteriza por la seroconversión al anti-HBe, carga viral baja (<2,000) y ausencia de daño hepático activo (ALT normal).",
    "fisiopato": "Refleja un control inmunológico efectivo del virus por parte del huésped, evitando la replicación masiva.",
    "clinicalPearl": "Estos pacientes requieren seguimiento de por vida ya que pueden reactivarse a la fase de Hepatitis Crónica HBeAg Negativa.",
    "guideline": "EASL HBV Guidelines 2017/2025",
    "whyWrong": {
      "0": "Fase de inmunotolerancia.",
      "1": "Criterios de infección crónica inactiva.",
      "2": "Fase de hepatitis crónica HBeAg positiva.",
      "3": "Infección resuelta (curación funcional)."
    }
  },
  {
    "id": "seed_16",
    "topic": "pbc",
    "difficulty": "Subspecialist",
    "text": "¿Qué fármaco ha demostrado beneficio en pacientes con Colangitis Biliar Primaria (CBP) que no responden adecuadamente al Ácido Ursodesoxicólico (AUDC)?",
    "options": [
      "Azatioprina",
      "Ácido Obetivólico",
      "Prednisona",
      "Ciclosporina"
    ],
    "correctIndex": 1,
    "explanation": "El Ácido Obetivólico (agonista FXR) está aprobado como segunda línea en CBP por mejorar los niveles de fosfatasa alcalina y bilirrubina.",
    "fisiopato": "El agonismo FXR reduce la síntesis de ácidos biliares endógenos hepatotóxicos y aumenta su excreción.",
    "clinicalPearl": "El prurito es el efecto secundario más común del Ácido Obetivólico.",
    "guideline": "AASLD / EASL CBP Guidelines",
    "whyWrong": {
      "0": "No tiene rol establecido en CBP.",
      "1": "Segunda línea estándar.",
      "2": "Puede usarse en síndrome de solapamiento (Overlap) con HAI, no en CBP pura.",
      "3": "No es estándar de tratamiento."
    }
  },
  {
    "id": "seed_17",
    "topic": "diverticulitis",
    "difficulty": "Fellow",
    "text": "Según la clasificación de Hinchey modificada, ¿a qué corresponde un estadio II?",
    "options": [
      "Inflamación pericólica limitada (flemón)",
      "Absceso pélvico, retroperitoneal o a distancia",
      "Peritonitis purulenta generalizada",
      "Peritonitis fecal generalizada"
    ],
    "correctIndex": 1,
    "explanation": "Hinchey II se define por la presencia de un absceso que ya no es pericólico inmediato, sino pélvico o a distancia.",
    "fisiopato": "La perforación contenida permite la formación de una colección purulenta fuera del área inmediata del colon afecto.",
    "clinicalPearl": "Abscesos > 3-4cm en Hinchey II suelen requerir drenaje percutáneo.",
    "guideline": "ASCRS Guidelines / Manual 2025",
    "whyWrong": {
      "0": "Hinchey Ia / Ib.",
      "1": "Definición exacta de Hinchey II.",
      "2": "Hinchey III.",
      "3": "Hinchey IV."
    }
  },
  {
    "id": "seed_18",
    "topic": "esofago_barrett",
    "difficulty": "Staff",
    "text": "¿Cuál es la conducta recomendada ante un hallazgo de Metaplasia Intestinal en esófago distal confirmedo por biopsia, pero sin displasia?",
    "options": [
      "Ablación por radiofrecuencia inmediata",
      "Repetir endoscopia en 6 meses",
      "Seguimiento endoscópico cada 3 a 5 años",
      "Esofaguectomía distal"
    ],
    "correctIndex": 2,
    "explanation": "En el Barrett sin displasia, el riesgo de progresión es bajo (~0.2-0.5% anual), por lo que se recomienda vigilancia cada 3-5 años.",
    "fisiopato": "La metaplasia es un cambio adaptativo que puede mantenerse estable por décadas antes de desarrollar inestabilidad genómica.",
    "clinicalPearl": "La longitud del segmento (Praga C&M) es el principal determinante del riesgo de progresión.",
    "guideline": "ACG Barrett Management Guidelines 2022",
    "whyWrong": {
      "0": "Solo se indica si hay displasia o factores de muy alto riesgo.",
      "1": "Intervalo demasiado corto para no displasia.",
      "2": "Intervalo estándar de vigilancia.",
      "3": "Tratamiento extremo solo para adenocarcinoma invasor."
    }
  },
  {
    "id": "seed_19",
    "topic": "pbe",
    "difficulty": "Fellow",
    "text": "¿Cuál es el criterio diagnóstico citológico de Peritonitis Bacteriana Espontánea (PBE)?",
    "options": [
      "> 250 PMN/mm³ en líquido ascítico",
      "Cultivo positivo para E. coli",
      "Proteínas totales < 1 g/dL",
      "Glucosa < 50 mg/dL"
    ],
    "correctIndex": 0,
    "explanation": "El diagnóstico de PBE se establece con el recuento de polimorfonucleares (PMN) > 250/mm³, independientemente del resultado del cultivo.",
    "fisiopato": "La translocación bacteriana desde el intestino hacia el líquido ascítico pobre en defensas genera una respuesta neutrofílica.",
    "clinicalPearl": "No esperar el resultado del cultivo para iniciar tratamiento antibiótico.",
    "guideline": "EASL Cirrhosis Guidelines",
    "whyWrong": {
      "0": "Criterio diagnóstico universal.",
      "1": "El cultivo es negativo en el 40% de los casos (ascitis neutrocítica).",
      "2": "Es un factor de riesgo para PBE, no un criterio diagnóstico.",
      "3": "Sugiere peritonitis secundaria si hay otros hallazgos (Runyon criteria)."
    }
  },
  {
    "id": "seed_20",
    "topic": "polipos",
    "difficulty": "Staff",
    "text": "¿Cuándo se recomienda la primera colonoscopia de control tras la resección completa de 3 adenomas tubulares < 10mm con displasia de bajo grado?",
    "options": [
      "En 1 año",
      "En 3 años",
      "En 5 años",
      "En 10 años"
    ],
    "correctIndex": 2,
    "explanation": "Según la actualización USMSTF 2020, 3-4 adenomas pequeños (<10mm) requieren control a los 3-5 años. Se prefiere 5 años si la resección fue de alta calidad.",
    "fisiopato": "La secuencia adenoma-carcinoma tiene una cinética lenta en pólipos de bajo riesgo.",
    "clinicalPearl": "La calidad de la preparación y el tiempo de retirada son críticos para estos intervalos.",
    "guideline": "USMSTF Surveillance Guidelines 2020",
    "whyWrong": {
      "0": "Solo para pólipos muy numerosos (>10) o resección incompleta.",
      "1": "Era la norma anterior; ahora se tiende a 5 años si son <5 pólipos.",
      "2": "Intervalo actual recomendado para bajo/moderado riesgo.",
      "3": "Solo si la colonoscopia fue normal o solo con pólipos hiperplásicos rectales."
    }
  },
  {
    "id": "seed_21",
    "topic": "biologia",
    "difficulty": "Staff",
    "text": "Un paciente de 65 años con cáncer de colon metastásico es candidato a terapia con Cetuximab. ¿Qué mutación debe descartarse mediante pruebas genéticas antes de iniciar este tratamiento?",
    "options": [
      "APC",
      "MSH2",
      "K-ras",
      "SMAD4"
    ],
    "correctIndex": 2,
    "explanation": "El Cetuximab es un anticuerpo monoclonal que inhibe el receptor del factor de crecimiento epidérmico (EGFR). La presencia de mutaciones activadoras en el gen K-ras predice una mala respuesta a esta terapia.",
    "fisiopato": "Las mutaciones de K-ras activan la vía de señalización intracelular de forma constitutiva, haciendo que el bloqueo externo del EGFR sea infectivo.",
    "clinicalPearl": "El uso de anti-EGFR solo está indicado en pacientes con K-ras de tipo nativo (no mutado).",
    "guideline": "Sleisenger Review 11th Ed, Cap 1",
    "whyWrong": {
      "0": "APC es el gen supresor de tumores inicial en la mayoría de los pólipos.",
      "1": "MSH2 se asocia con inestabilidad de microsatélites.",
      "2": "La mutación de K-ras es el biomarcador predictivo negativo clave para Cetuximab.",
      "3": "SMAD4 se asocia con poliposis juvenil."
    }
  },
  {
    "id": "seed_22",
    "topic": "biologia",
    "difficulty": "Fellow",
    "text": "¿Cuál de los siguientes términos describe el proceso fisiológico por el cual las células pierden permanentemente su capacidad de dividirse?",
    "options": [
      "Apoptosis",
      "Mitosis",
      "Citocinesis",
      "Senescencia"
    ],
    "correctIndex": 3,
    "explanation": "La senescencia celular describe el proceso en el que células diploides normales pierden su capacidad de división, evitando la proliferación excesiva.",
    "fisiopato": "La pérdida de los mecanismos de senescencia es un paso crítico en la carcinogénesis.",
    "clinicalPearl": "A diferencia de la apoptosis, en la senescencia la célula sigue metabólicamente activa pero no se divide.",
    "guideline": "Sleisenger Review 11th Ed, Cap 1",
    "whyWrong": {
      "0": "Muerte celular programada y controlada.",
      "1": "División celular normal.",
      "2": "División del citoplasma.",
      "3": "Estado de arresto permanente del ciclo celular."
    }
  },
  {
    "id": "seed_23",
    "topic": "biologia",
    "difficulty": "Staff",
    "text": "¿Qué síndrome de cáncer digestivo hereditario está asociado específicamente con una mutación en el gen PTEN?",
    "options": [
      "Poliposis Juvenil",
      "Síndrome de Cowden",
      "Síndrome de Peutz-Jeghers",
      "Cáncer Gástrico Difuso Hereditario"
    ],
    "correctIndex": 1,
    "explanation": "El síndrome de Cowden es una enfermedad autosómica dominante caracterizada por múltiples hamartomas y un mayor riesgo de cáncer, causada por mutaciones en PTEN.",
    "fisiopato": "PTEN actúa como un regulador negativo de la vía PI3K/Akt, controlando el crecimiento celular.",
    "clinicalPearl": "El síndrome de Cowden a menudo presenta manifestaciones extra-digestivas como bocio nodular y lesiones cutáneas.",
    "guideline": "Sleisenger Review 11th Ed, Cap 1",
    "whyWrong": {
      "0": "Asociado a SMAD4 y BMPR1A.",
      "1": "Gen PTEN es el marcador molecular específico.",
      "2": "Asociado a LKB1/STK11.",
      "3": "Asociado a mutaciones en CDH1 (E-cadherina)."
    }
  },
  {
    "id": "seed_24",
    "topic": "biologia",
    "difficulty": "Fellow",
    "text": "¿Cómo se denomina a la mutación puntual en una secuencia de ADN que resulta en la aparición de un codons de parada (stop) prematuro?",
    "options": [
      "Mutación Missense",
      "Mutación Nonsense",
      "Mutación Silente",
      "Inserción"
    ],
    "correctIndex": 1,
    "explanation": "Una mutación Nonsense (sin sentido) es un cambio en la secuencia de nucleótidos que genera un codón de terminación, resultando en una proteína truncada.",
    "fisiopato": "Las proteínas truncadas suelen ser inestables o carecer de dominios funcionales críticos para la célula.",
    "clinicalPearl": "Estas mutaciones suelen tener consecuencias fenotípicas graves en comparación con las silentes.",
    "guideline": "Sleisenger Review 11th Ed, Cap 1",
    "whyWrong": {
      "0": "Cambia un aminoácido por otro.",
      "1": "Genera el codón de parada prematuro.",
      "2": "No altera la secuencia de aminoácidos.",
      "3": "Añade nucleótidos pero no necesariamente un codón de parada."
    }
  },
  {
    "id": "seed_25",
    "topic": "nutricion",
    "difficulty": "Fellow",
    "text": "¿Cuál es la función principal de las células M (microfold) presentes en las placas de Peyer intestinales?",
    "options": [
      "Secretar proteínas antibacterianas",
      "Producir proteasas digestivas",
      "Endocitosis de antígenos luminales",
      "Absorción de nutrientes"
    ],
    "correctIndex": 2,
    "explanation": "Las células M se especializan en la captación (endocitosis) de antígenos desde la luz intestinal para presentarlos a los linfocitos subepiteliales.",
    "fisiopato": "Carecen de microvellosidades y moco grueso para facilitar el contacto directo con los patógenos y antígenos.",
    "clinicalPearl": "Las células M son la principal puerta de entrada para la vigilancia inmunológica de la mucosa.",
    "guideline": "Sleisenger Review 11th Ed, Cap 2",
    "whyWrong": {
      "0": "Función de las células de Paneth.",
      "1": "Función de las células acinares o enterocitos.",
      "2": "Definición exacta de su rol inmunológico.",
      "3": "Su citoplasma es escaso en organelos de absorción."
    }
  },
  {
    "id": "seed_26",
    "topic": "nutricion",
    "difficulty": "Staff",
    "text": "¿Qué componente es producido por las células plasmáticas y une dos moléculas de IgA para formar el dímero de IgA secretora?",
    "options": [
      "Componente secretor",
      "Receptor de Ig polimérico",
      "Cadena J",
      "Fragmento Fc"
    ],
    "correctIndex": 2,
    "explanation": "La cadena J (Joining chain) es una proteína producida por las células plasmáticas que enlaza dos moléculas de IgA.",
    "fisiopato": "El dímero de IgA es necesario para que el receptor de inmunoglobulina polimérica (pIgR) pueda transportarlo a través del epitelio.",
    "clinicalPearl": "La cadena J también es responsable de la formación de los pentámeros de IgM.",
    "guideline": "Sleisenger Review 11th Ed, Cap 2",
    "whyWrong": {
      "0": "Es añadido por la célula epitelial durante el transporte hacia la luz.",
      "1": "Es la molécula transportadora, no la de unión original.",
      "2": "Proteína de enlace específica (J chain).",
      "3": "Parte de la estructura básica de la inmunoglobulina."
    }
  },
  {
    "id": "seed_27",
    "topic": "nutricion",
    "difficulty": "Fellow",
    "text": "¿En cuál de las siguientes capas de la pared del colon se encuentra la mayor densidad de células inflamatorias en condiciones fisiológicas normales?",
    "options": [
      "Lámina propia",
      "Muscularis mucosa",
      "Submucosa",
      "Serosa"
    ],
    "correctIndex": 0,
    "explanation": "La lámina propia es un tejido conectivo fino que contiene la mayoría de los linfocitos y células plasmáticas del colon en condiciones normales.",
    "fisiopato": "Representa la primera línea de defensa activa tras la barrera epitelial.",
    "clinicalPearl": "El aumento de inflamación en la submucosa suele ser indicativo de patología (ej. EII).",
    "guideline": "Sleisenger Review 11th Ed, Cap 2",
    "whyWrong": {
      "0": "Contiene el sistema inmune de la mucosa (GALT).",
      "1": "Es una capa delgada de músculo liso.",
      "2": "Normalmente tiene pocos infiltrados.",
      "3": "Capa externa de recubrimiento."
    }
  },
  {
    "id": "seed_28",
    "topic": "vias_biliares",
    "difficulty": "Staff",
    "text": "¿Cuál es el hallazgo colangiográfico característico (\"Gold Standard\" radiológico) de la Colangitis Esclerosante Primaria (CEP)?",
    "options": [
      "Dilatación difusa de la vía biliar intra y extrahepática",
      "Imagen en \"cuentas de rosario\" (estenosis multifocales y dilataciones segmentarias)",
      "Defecto de llenado móvil en el colédoco distal",
      "Imagen en \"cola de ratón\" en el colédoco distal"
    ],
    "correctIndex": 1,
    "explanation": "La CEP se caracteriza por una inflamación crónica y fibrosis de los conductos biliares que genera un patrón típico de estenosis multifocales alternando con segmentos normales o dilatados, conocido como imagen en cuentas de rosario.",
    "fisiopato": "La fibrosis obliterativa concéntrica de los conductos biliares (lesión en \"piel de cebolla\") interrumpe el flujo biliar, llevando a la cirrosis biliar secundaria.",
    "clinicalPearl": "Aproximadamente el 70-80% de los pacientes con CEP tienen Enfermedad Inflamatoria Intestinal asociada, principalmente Colitis Ulcerosa.",
    "guideline": "AASLD / EASL Guidelines on Primary Sclerosing Cholangitis 2024",
    "whyWrong": {
      "0": "Sugiere obstrucción mecánica distal, no CEP.",
      "1": "Hallazgo patognomónico en CPRE o ColangioRM.",
      "2": "Hallazgo típico de coledocolitiasis.",
      "3": "Sugiere cáncer de cabeza de páncreas o colangiocarcinoma distal."
    }
  },
  {
    "id": "seed_29",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el tipo de célula pancreática responsable de la formación de tejido fibrótico en la Pancreatitis Crónica independientemente de la causa?",
    "options": [
      "Células acinares",
      "Células ductales",
      "Células estelares pancreáticas",
      "Células Alfa"
    ],
    "correctIndex": 2,
    "explanation": "Las células estelares pancreáticas (PSC) se activan durante la lesión y son las principales responsables de la producción de colágeno y fibrosis.",
    "fisiopato": "En estado quiescente almacenan vitamina A; al activarse por inflamación o alcohol, se transforman en miofibroblastos.",
    "clinicalPearl": "La activación persistente de las PSC es el mecanismo final común de la insuficiencia pancreática.",
    "guideline": "Sleisenger Review 11th Ed, Cap 7",
    "whyWrong": {
      "0": "Secretan enzimas digestivas.",
      "1": "Secretan agua y bicarbonato.",
      "2": "Clave en la patogénesis de la fibrosis crónica.",
      "3": "Producen glucagón en islotes."
    }
  },
  {
    "id": "seed_30",
    "topic": "biologia",
    "difficulty": "Subspecialist",
    "text": "¿Qué enzima pancreática se secreta directamente en su forma ACTIVA, a diferencia de la mayoría que requieren activación duodenal?",
    "options": [
      "Tripsina",
      "Quimotripsina",
      "Elastasa",
      "Lipasa"
    ],
    "correctIndex": 3,
    "explanation": "La lipasa pancreática es secretada en su forma activa, aunque requiere colipasa para su funcionamiento óptimo en presencia de sales biliares.",
    "fisiopato": "La mayoría de las proteasas se secretan como proenzimas (cimógenos) para evitar la autodigestión del páncreas.",
    "clinicalPearl": "La tripsina es la enzima maestra que activa a los demás cimógenos en el duodeno.",
    "guideline": "Sleisenger Review 11th Ed, Cap 7",
    "whyWrong": {
      "0": "Se secreta como tripsinógeno.",
      "1": "Se secreta como quimotripsinógeno.",
      "2": "Se secreta como proelastasa.",
      "3": "Se secreta ya funcionalmente activa."
    }
  },
  {
    "id": "seed_31",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el antibiótico de elección para la profilaxis primaria de Peritonitis Bacteriana Espontánea (PBE) en un paciente cirrótico con proteínas en líquido ascítico < 1.5 g/dL y disfunción renal?",
    "options": [
      "Norfloxacino 400mg/día",
      "Ciprofloxacino 500mg/semana",
      "Rifaximina 550mg/12h",
      "Amoxicilina/Clavulánico"
    ],
    "correctIndex": 0,
    "explanation": "El Norfloxacino diario es el estándar para profilaxis primaria en pacientes de alto riesgo (hipoproteínascitofia + falla renal o hepática).",
    "fisiopato": "La reducción de la traslocación bacteriana intestinal mediante la descontaminación selectiva disminuye la incidencia de bacteriemia por Gram negativos.",
    "clinicalPearl": "La profilaxis con Norfloxacino ha demostrado reducir la incidencia de SHR y mejorar la supervivencia.",
    "guideline": "EASL Cirrhosis Guidelines",
    "whyWrong": {
      "0": "Opción correcta según guías actuales.",
      "1": "Dosis insuficiente y esquema no validado para profilaxis.",
      "2": "Indicada para encefalopatía, no para profilaxis de PBE.",
      "3": "No se usa para descontaminación selectiva crónica."
    }
  },
  {
    "id": "seed_32",
    "topic": "eii",
    "difficulty": "Staff",
    "text": "En un paciente con Colitis Ulcerativa Grave Hospitalizada, ¿cuál es el tiempo límite recomendado para evaluar la respuesta a corticoterapia sistémica antes de decidir terapia de rescate?",
    "options": [
      "24 horas",
      "3 a 5 días",
      "7 a 10 días",
      "2 semanas"
    ],
    "correctIndex": 1,
    "explanation": "La respuesta a los esteroides IV (vía Criterios de Travis o Ho) debe evaluarse a los 3-5 días. Prolongar más el tiempo aumenta el riesgo de complicaciones quirúrgicas.",
    "fisiopato": "La falta de respuesta temprana indica una carga inflamatoria que probablemente no cederá con esteroides (resistencia relativa).",
    "clinicalPearl": "Si la PCR > 45 o hay > 8 deposiciones al día 3, la probabilidad de colectomía es del 85%.",
    "guideline": "ECCO Guidelines",
    "whyWrong": {
      "0": "Demasiado pronto para evaluar respuesta máxima.",
      "1": "Tiempo óptimo para evitar retrasos en rescate.",
      "2": "Aumenta significativamente el riesgo de perforación y sepsis.",
      "3": "Inaceptable en el manejo de colitis aguda grave."
    }
  },
  {
    "id": "seed_33",
    "topic": "pancreatitis",
    "difficulty": "Fellow",
    "text": "¿Cuál de los siguientes criterios define a la Pancreatitis Aguda como \"Moderadamente Grave\" según la Clasificación de Atlanta 2012?",
    "options": [
      "Falla orgánica persistente (>48h)",
      "Falla orgánica transitoria (<48h) o complicaciones locales",
      "Presencia de necrosis amurallada (WON)",
      "Nivel de Lipasa > 10 veces el normal"
    ],
    "correctIndex": 1,
    "explanation": "La categoría moderadamente grave incluye falla orgánica que resuelve antes de 48h o la presencia de complicaciones locales/sistémicas sin falla orgánica persistente.",
    "fisiopato": "Refleja un SIRS que la reserva funcional del paciente logra compensar o una respuesta inflamatoria compartimentada.",
    "clinicalPearl": "La distinción clave es la TEMPORALIDAD de la falla orgánica (punto de corte: 48 horas).",
    "guideline": "Revised Atlanta Classification 2012",
    "whyWrong": {
      "0": "Define Pancreatitis Aguda Grave.",
      "1": "Definición exacta de moderadamente grave.",
      "2": "Es una complicación local, pero el término se define por la falla orgánica.",
      "3": "La magnitud de la lipasa no influye en la gravedad."
    }
  },
  {
    "id": "seed_34",
    "topic": "gastroscopia",
    "difficulty": "Staff",
    "text": "¿Cuál es el manejo recomendado para un pólipo gástrico tipo Adenoma de 15mm hallado incidentalmente?",
    "options": [
      "Vigilancia cada 2 años",
      "Biopsia y seguimiento si no hay displasia",
      "Resección endoscópica completa",
      "Tratamiento con IBP y reevaluar"
    ],
    "correctIndex": 2,
    "explanation": "Todos los adenomas gástricos deben ser resecados debido a su alto potencial de transformación maligna (hasta 50%).",
    "fisiopato": "Los adenomas representan neoplasias epiteliales precancerosas, a diferencia de los pólipos hiperplásicos o de glándulas fúndicas.",
    "clinicalPearl": "Tras la resección, se deben tomar biopsias del resto de la mucosa gástrica para buscar gastritis atrófica o metaplasia.",
    "guideline": "BSG/ASGE Gastric Polyps Guidelines",
    "whyWrong": {
      "0": "No se vigilan, se resecan.",
      "1": "El adenoma por definición tiene displasia.",
      "2": "Estándar terapéutico preventivo.",
      "3": "Los IBP no eliminan adenomas (solo pueden reducir pólipos glandulofúndicos)."
    }
  },
  {
    "id": "seed_35",
    "topic": "motilidad",
    "difficulty": "Subspecialist",
    "text": "¿Cuál es la terapia de elección para la Acalasia Tipo III (Espástica) según la evidencia actual?",
    "options": [
      "Miotomía de Heller Laparoscópica",
      "Miotomía Endoscópica Peroral (POEM)",
      "Dilatación Neumática con balón de 30mm",
      "Inyección de Toxina Botulínica"
    ],
    "correctIndex": 1,
    "explanation": "El POEM permite una miotomía más larga y proximal, necesaria para tratar las contracciones espásticas del cuerpo esofágico típicas del Tipo III.",
    "fisiopato": "En el Tipo III, la obstrucción no es solo en la unión EG, sino que hay espasmos terciarios en el cuerpo distal.",
    "clinicalPearl": "El POEM es superior a Heller en el Tipo III debido a la capacidad de extender la miotomía proximalmente.",
    "guideline": "ISDE/ACG Guidelines",
    "whyWrong": {
      "0": "Menos efectiva en Tipo III por longitud limitada de miotomía.",
      "1": "Tratamiento de elección para fenotipo espástico.",
      "2": "Resultados muy pobres en Tipo III (falla > 50%).",
      "3": "Solo paliativo, no definitivo."
    }
  },
  {
    "id": "seed_36",
    "topic": "biologia",
    "difficulty": "Fellow",
    "text": "¿Qué evento genético es responsable de la progresión de Pólipo a Adenocarcinoma en el 85% de los casos esporádicos (Vía Clásica)?",
    "options": [
      "Inestabilidad de Microsatélites",
      "Inestabilidad Cromosómica (Mutación APC)",
      "Metilación de islas CpG",
      "Mutación de BRAF"
    ],
    "correctIndex": 1,
    "explanation": "La vía de inestabilidad cromosómica comienza casi siempre con la pérdida del gen supresor tumoral APC.",
    "fisiopato": "La pérdida de APC causa acumulación de beta-catenina, activando la transcripción de oncogenes como c-Myc.",
    "clinicalPearl": "APC se conoce como el \"gatekeeper\" (portero) de la carcinogénesis colorrectal.",
    "guideline": "Sleisenger 11th Ed.",
    "whyWrong": {
      "0": "Vía alternativa (Vía de reparación de ADN).",
      "1": "Evento inicial en la secuencia adenoma-carcinoma clásica.",
      "2": "Vía serrada.",
      "3": "Asociado a la vía serrada y fenotipo CIMP."
    }
  },
  {
    "id": "seed_37",
    "topic": "nutricion",
    "difficulty": "Fellow",
    "text": "¿Cuál es el signo clínico más temprano y específico de la deficiencia de Vitamina A en pacientes con malabsorción?",
    "options": [
      "Xeroftalmía",
      "Manchas de Bitot",
      "Ceguera nocturna (Nictalopía)",
      "Hiperqueratosis folicular"
    ],
    "correctIndex": 2,
    "explanation": "La nictalopía es el primer síntoma de deficiencia funcional de vitamina A.",
    "fisiopato": "La vitamina A es precursora de la rodopsina en los bastones de la retina, necesaria para la visión en baja luz.",
    "clinicalPearl": "Preguntar siempre por la capacidad de conducir de noche en pacientes con cirugía bariátrica o Crohn.",
    "guideline": "Nutritional Guidelines in GI",
    "whyWrong": {
      "0": "Signo más avanzado de sequedad extrema.",
      "1": "Placas de queratina en conjuntiva, signo tardío.",
      "2": "Manifestación funcional más temprana.",
      "3": "Signo cutáneo inespecífico."
    }
  },
  {
    "id": "seed_38",
    "topic": "gastroscopia",
    "difficulty": "Staff",
    "text": "¿Cuál es el hallazgo endoscópico más específico para el diagnóstico de Esofagitis Eosinofílica (EoE) en un adulto con disfagia?",
    "options": [
      "Exudados blanquecinos (microabscesos)",
      "Surcos longitudinales",
      "Anillos concéntricos (traquealización)",
      "Mucosa en papel de arroz"
    ],
    "correctIndex": 2,
    "explanation": "Aunque todos son hallazgos sugerentes de EoE (según el score EREFS), la traquealización o anillos concéntricos es uno de los signos más característicos de la remodelación esofágica crónica en adultos.",
    "fisiopato": "La inflamación crónica mediada por Th2 induce fibrosis subepitelial y engrosamiento de la muscularis mucosae, causando la pérdida de distensibilidad.",
    "clinicalPearl": "Se requieren al menos 15 eosinófilos por campo de mayor aumento (php) en al menos una biopsia para el diagnóstico.",
    "guideline": "ACG / AGA Clinical Guidelines for EoE 2024",
    "whyWrong": {
      "0": "Común en EoE pero inespecífico (puede ser candidiasis).",
      "1": "Hallazgo frecuente pero menos espectacular que los anillos.",
      "2": "Signo clásico de cronicidad y remodelación.",
      "3": "Hallazgo raro asociado a fragilidad mucosa extrema."
    }
  },
  {
    "id": "seed_39",
    "topic": "hepatitis",
    "difficulty": "Fellow",
    "text": "¿Qué marcador es el primero en desaparecer tras la resolución de una infección AGUDA por Hepatitis B?",
    "options": [
      "Anti-HBs",
      "HBsAg",
      "HBeAg",
      "Anti-HBc IgM"
    ],
    "correctIndex": 2,
    "explanation": "El HBeAg suele ser el primer marcador en desaparecer, a menudo antes que el HBsAg, indicando el inicio del control de la replicación.",
    "fisiopato": "La seroconversión de HBeAg a Anti-HBe marca la transición de fase replicativa a no replicativa.",
    "clinicalPearl": "La persistencia de HBeAg por más de 3 meses sugiere una alta probabilidad de progresión a cronicidad.",
    "guideline": "AASLD HBV Guidelines",
    "whyWrong": {
      "0": "Es el último en aparecer (marcador de inmunidad).",
      "1": "Desaparece después del HBeAg en la resolución total.",
      "2": "Indica cese de replicación viral activa.",
      "3": "Persiste por varios meses (hasta 6) tras la fase aguda."
    }
  },
  {
    "id": "seed_40",
    "topic": "esofago_barrett",
    "difficulty": "Subspecialist",
    "text": "En un paciente con Esófago de Barrett y displasia de ALTO grado confirmada por dos patólogos, ¿cuál es la conducta recomendada?",
    "options": [
      "Esofaguectomía de urgencia",
      "Vigilancia estrecha cada 3 meses",
      "Terapia ablativa endoscópica (ej. RFA)",
      "IBP a dosis máximas únicamente"
    ],
    "correctIndex": 2,
    "explanation": "La terapia ablativa endoscópica (RFA) tras resecar cualquier lesión visible (EMR) es el estándar de oro actual para eliminar la displasia de alto grado.",
    "fisiopato": "La eliminación del epitelio metaplásico/displásico permite la regeneración con epitelio escamoso normal en un ambiente sin ácido.",
    "clinicalPearl": "La ablación reduce el riesgo de progresión a cáncer en un 90% en estos pacientes.",
    "guideline": "ACG Barrett Guidelines 2022",
    "whyWrong": {
      "0": "Reservado para casos con sospecha de invasión profunda o fallo del tratamiento endoscópico.",
      "1": "Riesgo de progresión a adenocarcinoma es demasiado alto para solo observar.",
      "2": "Tratamiento definitivo recomendado.",
      "3": "Manejo médico insuficiente para revertir la displasia."
    }
  },
  {
    "id": "seed_41",
    "topic": "cirrosis",
    "difficulty": "Fellow",
    "text": "¿Cuál es el umbral de granulocitos polimorfonucleares (PMN) en el líquido ascítico necesario para establecer el diagnóstico de Peritonitis Bacteriana Espontánea (PBE)?",
    "options": [
      "> 100 PMN/mm³",
      "> 250 PMN/mm³",
      "> 500 PMN/mm³",
      "> 1000 PMN/mm³"
    ],
    "correctIndex": 1,
    "explanation": "El diagnóstico de PBE se basa universalmente en un recuento de PMN ≥ 250 células/mm³ en el líquido ascítico, independientemente de los resultados del cultivo.",
    "fisiopato": "La respuesta inflamatoria a la traslocación bacteriana recluta neutrófilos al espacio peritoneal.",
    "clinicalPearl": "Si el líquido es hemático, reste 1 PMN por cada 250 glóbulos rojos para ajustar el conteo.",
    "guideline": "AASLD guidelines",
    "whyWrong": {
      "0": "Insuficiente para diagnóstico formal.",
      "1": "Criterio diagnóstico estándar.",
      "2": "Sugeriría una infección más grave o peritonitis secundaria.",
      "3": "Muy alta probabilidad de peritonitis secundaria (perforación)."
    }
  },
  {
    "id": "seed_42",
    "topic": "pancreatitis",
    "difficulty": "Staff",
    "text": "Un hallazgo de quiste pancreático en un paciente de 60 años muestra en la punción (EUS-FNA) niveles de CEA > 192 ng/mL y presencia de mucina. ¿Cuál es el diagnóstico más probable?",
    "options": [
      "Cistoadenoma Seroso",
      "Psedoquiste Pancreático",
      "Neoplasia Quística Mucinosa",
      "Tumor de Frantz"
    ],
    "correctIndex": 2,
    "explanation": "Un nivel de CEA > 192 ng/mL en el líquido del quiste es altamente sugestivo (especificidad ~80%) de una lesión mucinosa (MCN o IPMN).",
    "fisiopato": "Las células columnares productoras de mucina secretan CEA hacia el lumen del quiste.",
    "clinicalPearl": "El cistoadenoma seroso típicamente tiene niveles de CEA muy bajos (< 5 ng/mL).",
    "guideline": "ACG Pancreatic Cysts Guidelines",
    "whyWrong": {
      "0": "Típicamente CEA < 5 ng/mL. Apariencia en panal de abeja.",
      "1": "Suele tener niveles de amilasa muy altos pero CEA bajo.",
      "2": "El marcador CEA es el discriminador clave para lesiones mucinosas.",
      "3": "Suele ser sólido-quístico y ocurre en mujeres jóvenes."
    }
  },
  {
    "id": "seed_43",
    "topic": "gastroscopia",
    "difficulty": "Fellow",
    "text": "¿Cuál es el hallazgo clave en la biopsia gástrica para el diagnóstico de Gastritis Atrófica Autoinmune (Tipo A)?",
    "options": [
      "Atrofia severa en el antro con preservación del cuerpo",
      "Atrofia severa en el cuerpo con preservación del antro",
      "Pangastritis con agregados linfoides",
      "Gastritis erosiva hemorrágica"
    ],
    "correctIndex": 1,
    "explanation": "La gastritis autoinmune ataca las células parietales, localizadas predominantemente en el cuerpo y fondo oxíntico, respetando el antro.",
    "fisiopato": "Anticuerpos contra la bomba H+/K+ ATPasa y el factor intrínseco destruyen la mucosa oxíntica.",
    "clinicalPearl": "Se asocia con hipergastrinemia marcada debido a la falta de retroalimentación ácida en las células G antrales.",
    "guideline": "Sleisenger Review 11th Ed.",
    "whyWrong": {
      "0": "Patrón típico de infección por H. pylori.",
      "1": "Patrón clásico de la vía autoinmune (respeto antral).",
      "2": "Sugiere gastritis crónica activa por Helicobacter.",
      "3": "Asociado a AINEs o alcohol."
    }
  },
  {
    "id": "seed_44_repl",
    "topic": "motilidad",
    "difficulty": "Fellow",
    "text": "En un diagnóstico reciente de constipación o disinergia de vaciamiento del piso pélvico pural basal en una madre femenina general multipara, se procede a estudios estructurales, reportándose en manometría disinergia o retención de esfínter ani paradójica tipo 1 basal masiva estéril a la puja. Posterior, la colonoscopia basal constata una letal pseudoulcera necrótica masiva per se basocelular general o localizada estéril crónica de la pared distal rectal anterior sin atipia patológica. ¿Cuál es el diagnóstico sindromático que asocia estéril ulceración con prolapso crudo isquémico anal?",
    "options": [
      "Síndrome de la Úlcera Rectal Solitaria masiva y pura",
      "Ulcera Rectal Estercorácea o fecal puramente masiva general basal isquémica pura",
      "Enfermedad letal cruda infiltrativa sifilítico chancre basal del rafe",
      "Lesión de Dieulafoy masiva letal y arterial de la cúpula distal general del ano"
    ],
    "correctIndex": 0,
    "explanation": "El Síndrome de úlcera rectal solitaria suele debutar engañosamente en mujeres que sufren prolapso mucoso, constipación con un esfuerzo francamente titánico per se estéril de evacuación repetitiva (disinergia). Al presionar formal, se isquemia temporal crónicamente estéril basocelular el polo anterior del recto generando atipia foveolar polipoidea, eritema masivo general per se estéril cruda y ulterior formación necrótica plana per se estéril de ulceración letal formal ciegamente visible.",
    "fisiopato": "La mucosa redundante formal o estéril del muñón se hunde al intentar evacuar por hipercontractibilidad y presión paradójica per se puborrectal de la uretra anal, provocando estrangulación estéril mucosa venosa masiva repetitiva, e inducción colágeno masiva fibrótica de la lámina basocelular propia local.",
    "clinicalPearl": "El examen histopatológico subyacente letal o basocelular estéril per se caracterizado en base como hiperplasia fribromuscular fibrosa de la lámina estéril rectal masiva y pura de macrófagos y miofibroblastos en polo anterior diagnostica francamente u per se úlcera letal rectal solitaria general.",
    "guideline": "ASGE Guidelines on Lower Bowel Dyssynergy / Constipation.",
    "pillar": "Clinical Logic"
  },
  {
    "id": "seed_45",
    "topic": "cirrosis",
    "difficulty": "Staff",
    "text": "¿Qué fármaco ha demostrado superioridad en la prevención del resangrado variceal cuando se combina con ligadura con bandas (EVL)?",
    "options": [
      "Propranolol únicamente",
      "Carvedilol",
      "Nadalol + Nitratos",
      "Somatostatina crónica"
    ],
    "correctIndex": 1,
    "explanation": "El Carvedilol es un beta-bloqueante no selectivo con actividad alfa-1 bloqueante adicional que reduce más eficazmente la presión portal.",
    "fisiopato": "El bloqueo alfa-1 reduce la resistencia intrahepática al dilatar la microvasculatura hepática.",
    "clinicalPearl": "El Carvedilol es mejor tolerado y reduce más el gradiente de presión venosa hepática que el propranolol.",
    "guideline": "Baveno VII Consensus",
    "whyWrong": {
      "0": "Estándar antiguo; el Carvedilol es ahora preferido.",
      "2": "Efectivo pero con más efectos secundarios que Carvedilol.",
      "3": "No tiene indicación en profilaxis a largo plazo."
    }
  },
  {
    "id": "seed_46",
    "topic": "eii",
    "difficulty": "Fellow",
    "text": "¿Cuál es el hallazgo histopatológico \"patognomónico\" (aunque poco frecuente) de la enfermedad de Crohn que ayuda a distinguirla de la Colitis Ulcerativa?",
    "options": [
      "Abscesos criptas",
      "Granulomas no caseificantes",
      "Distorsión de la arquitectura de las criptas",
      "Metaplasia de células de Paneth"
    ],
    "correctIndex": 1,
    "explanation": "Los granulomas epitelioides no caseificantes son el sello distintivo de la enfermedad de Crohn, aunque solo se encuentran en ~30-50% de las biopsias.",
    "fisiopato": "Reflejan una respuesta inmune celular de tipo Th1 con activación de macrófagos.",
    "clinicalPearl": "Su hallazgo en una biopsia de una zona sospechosa confirma el diagnóstico de Crohn.",
    "guideline": "ECCO/ESCP Guidelines",
    "whyWrong": {
      "0": "Común en ambas (indica actividad).",
      "2": "Signo de cronicidad común en ambas.",
      "3": "Común en colitis ulcerativa izquierda."
    }
  },
  {
    "id": "seed_47",
    "topic": "biologia",
    "difficulty": "Subspecialist",
    "text": "¿Qué prueba de detección de cáncer de colon detecta tanto el ADN mutado en heces como la presencia de hemoglobina humana?",
    "options": [
      "FIT (Inmunoquímica)",
      "gFOBT (Guayaco)",
      "sDNA-FIT (Cologuard)",
      "Septina 9 plasmática"
    ],
    "correctIndex": 2,
    "explanation": "La prueba de ADN multiobjetivo en heces combina marcadores moleculares de mutación (KRAS, NDRG4) con una prueba inmunoquímica de sangre.",
    "fisiopato": "Las células neoplásicas se descaman más fácilmente y liberan ADN alterado hacia el lumen intestinal.",
    "clinicalPearl": "Tiene mayor sensibilidad para cáncer que el FIT, pero una tasa de falsos positivos más alta.",
    "guideline": "ACG Screening Guidelines",
    "whyWrong": {
      "0": "Solo detecta hemoglobina mediante anticuerpos.",
      "1": "Solo detecta actividad peroxidasa de la hemo.",
      "3": "Marcador en sangre, no en heces."
    }
  },
  {
    "id": "seed_48",
    "topic": "hepatitis",
    "difficulty": "Subspecialist",
    "text": "En un paciente con Hepatitis Autoinmune (HAI) que no responde a prednisona y azatioprina, ¿cuál es la terapia de \"segunda línea\" con mayor evidencia?",
    "options": [
      "Micofenolato de Mofetilo",
      "Ciclosporina",
      "Infliximab",
      "Tacrolimus"
    ],
    "correctIndex": 0,
    "explanation": "El Micofenolato de Mofetilo (MMF) es el agente de rescate más utilizado y validado para la HAI refractaria o intolerante a azatioprina.",
    "fisiopato": "Inhibe la síntesis de purinas de novo, bloqueando la proliferación de linfocitos T y B.",
    "clinicalPearl": "Se debe evitar el MMF durante el embarazo por su alta teratogenicidad.",
    "guideline": "AASLD AIH Guidelines",
    "whyWrong": {
      "1": "Se usa poco, principalmente en crisis agudas graves.",
      "2": "Evidencia limitada a series de casos.",
      "3": "Opción de tercera línea."
    }
  },
  {
    "id": "seed_49",
    "topic": "coloscopia",
    "difficulty": "Staff",
    "text": "¿Cuál es el intervalo de vigilancia recomendado tras la resección completa de 5 adenomas tubulares menores a 10 mm con displasia de bajo grado?",
    "options": [
      "1 año",
      "3 años",
      "3 a 5 años",
      "10 años"
    ],
    "correctIndex": 1,
    "explanation": "La presencia de 5 a 10 adenomas pequeños (<10mm) clasifica al paciente como de alto riesgo, requiriendo control a los 3 años.",
    "fisiopato": "Un mayor número de adenomas sincrónicos indica una mucosa con mayor inestabilidad y propensión a la neoplasia.",
    "clinicalPearl": "Las guías USMSTF 2020 simplificaron estos intervalos según el número y tipo de pólipos.",
    "guideline": "USMSTF Surveillance Guidelines 2020",
    "whyWrong": {
      "0": "Solo si son > 10 adenomas.",
      "2": "Intervalo reservado para 3-4 adenomas.",
      "3": "Intervalo para colonoscopia normal."
    }
  },
  {
    "id": "seed_50",
    "topic": "vias_biliares",
    "difficulty": "Fellow",
    "text": "¿Cuál es el tratamiento definitivo curativo para una lesión de vesícula biliar compatible con Adenomiomatosis Segmentaria?",
    "options": [
      "Ácido Ursodesoxicólico",
      "Vigilancia ecográfica anual",
      "Colecistectomía",
      "CPRE con esfinterotomía"
    ],
    "correctIndex": 2,
    "explanation": "Aunque es una lesión benigna, la variante SEGMENTARIA se asocia con un mayor riesgo de coexistencia con cáncer de vesícula, por lo que se prefiere la cirugía.",
    "fisiopato": "La adenomiomatosis implica invaginaciones de la mucosa (senos de Rokitansky-Aschoff) y fibrosis muscular.",
    "clinicalPearl": "La adenomiomatosis fúndica simple suele ser benigna y no requiere cirugía si es asintomática.",
    "guideline": "ACG Biliary Guidelines",
    "whyWrong": {
      "0": "No tiene efecto sobre la fibrosis o invaginación mucosa.",
      "1": "Insuficiente para la variante segmentaria por el riesgo neoplásico.",
      "3": "No aborda la patología de la pared de la vesícula."
    }
  },
  {
    "id": "seed_3",
    "topic": "vias_biliares",
    "difficulty": "Fellow",
    "text": "Un paciente de 45 años consulta por dolor sordo en hipocondrio derecho. La ecografía muestra una dilatación de la vía biliar intra y extrahepática (CBD 11mm). Se realiza CPRE y RM que descartan litiasis, estenosis o neoplasia. ¿Cuál es la causa más probable de dilatación biliar \"no obstructiva\" en este contexto?",
    "options": [
      "Dilatación post-colecistectomía compensatoria",
      "Disfunción del Esfínter de Oddi tipo III",
      "Quiste de colédoco tipo I de Todani",
      "Hepatopatía crónica avanzada"
    ],
    "correctIndex": 0,
    "explanation": "Tras una colecistectomía, la vía biliar puede dilatarse por pérdida de la distensibilidad del reservorio biliar (vesícula), asumiendo un rol de conducto de baja resistencia. CBD hasta 10-12mm es considerado normal en pacientes colecistectomizados si son asintomáticos.",
    "fisiopato": "La vesícula biliar actúa como un sistema de capacitancia que amortigua la presión del colédoco. Al ser removida, la presión basal de la vía biliar aumenta ligeramente, provocando una dilatación estructural por ley de Laplace.",
    "clinicalPearl": "En un post-colecistectomizado, no te asustes por un colédoco de 10mm; busca siempre la correlación con pruebas de perfil hepático.",
    "guideline": "Manual de Enfermedades Digestivas (Chile) / ACG Clinical Guideline 2024",
    "whyWrong": {
      "0": "Respuesta correcta basada en adaptación mecánica.",
      "1": "Suele cursar con dolor cólico intenso y alteraciones transitorias de las transaminasas.",
      "2": "Suele diagnosticarse por morfología quística específica en RM, no solo dilatación uniforme.",
      "3": "No causa dilatación de la vía biliar extrahepática de forma aislada."
    }
  },
  {
    "id": "seed_4",
    "topic": "intestino_ext",
    "difficulty": "Fellow",
    "text": "En el enfoque de la diarrea crónica (>4 semanas), ¿cuál de los siguientes hallazgos sugiere fuertemente una etiología osmótica sobre una secretora?",
    "options": [
      "Gap osmótico fecal > 125 mOsm/kg",
      "Persistencia de la diarrea con el ayuno",
      "Volumen fecal > 1 L/día",
      "pH fecal alcalino"
    ],
    "correctIndex": 0,
    "explanation": "La diarrea osmótica se debe a solutos no absorbidos en el lumen que retienen agua. Un Gap osmótico (290 - 2*[Na + K]) elevado indica que hay solutos distintos a los electrolitos normales causando la osmolaridad.",
    "fisiopato": "La presencia de sustancias osmóticamente activas reduce la actividad del agua intraluminal, superando la capacidad de reabsorción del colon mediante el gradiente osmótico invertido.",
    "clinicalPearl": "Diarrea que cede con el ayuno = Osmótica. Diarrea que persiste en la noche/ayuno = Secretora.",
    "guideline": "Manual de Enfermedades Digestivas Chile / AGA Guidelines on Chronic Diarrhea",
    "whyWrong": {
      "0": "Hallazgo clave que define el mecanismo osmótico.",
      "1": "Esto es típico de la diarrea secretora.",
      "2": "Los grandes volúmenes suelen ser secretores (ej. VIPoma).",
      "3": "El pH ácido sugiere malabsorción de carbohidratos, el alcalino es inespecífico."
    }
  },
  {
    "id": "seed_5",
    "topic": "intestino_ext",
    "difficulty": "Fellow",
    "text": "Un paciente con Porfiria Cutánea Tarda (PCT) presenta ampollas en zonas fotoexpuestas. ¿Cuál es el defecto enzimático subyacente y qué factor de riesgo de gastroenterología es MANDATORIO descartar?",
    "options": [
      "Deficiencia de Uroporfirinógeno descarboxilasa - Virus Hepatitis C (VHC)",
      "Deficiencia de ALA-sintetasa - Alcoholismo crónico",
      "Deficiencia de Ferroquelatasa - Sobrecarga de hierro",
      "Deficiencia de Bilirrubina UDP-GT - Sarcoidosis"
    ],
    "correctIndex": 0,
    "explanation": "La PCT es la porfiria más común. Existe una fuerte asociación (hasta 50-70%) con la infección por Virus de la Hepatitis C (VHC), la cual debe ser tamizada en todo paciente con este diagnóstico cutáneo.",
    "fisiopato": "La inhibición de la uroporfirinógeno descarboxilasa hepática lleva a la acumulación de uroporfirinas, que son fotosensibilizantes en la dermis al interactuar con luz UV.",
    "clinicalPearl": "En presencia de PCT, busca hepatitis C y hemocromatosis (sobrecarga de hierro).",
    "guideline": "EASL Guidelines for Management of HCV 2024 / Merck Manual",
    "whyWrong": {
      "0": "Asociación clásica y obligatoria en medicina interna/gastro.",
      "1": "La ALA-sintetasa es el paso limitante pero no define la PCT.",
      "2": "La ferroquelatasa está involucrada en la protoporfiria eritropoyética.",
      "3": "Referencia a síndrome de Gilbert/Crigler-Najjar."
    }
  },
  {
    "id": "seed_6",
    "topic": "intestino_ext",
    "difficulty": "Fellow",
    "text": "En un paciente con Hemorragia Digestiva Baja masiva por enfermedad diverticular, reanimado y estable, se realiza colonoscopia que evidencia un divertículo con un vaso visible no sangrante en colon derecho. ¿Cuál es el manejo endoscópico de primera elección y su justificación?",
    "options": [
      "Inyección de epinefrina sola por su alto poder vasoconstrictor",
      "Colocación de Endoclip en la base del vaso visible",
      "Coagulación con Argón Plasma (APC) sobre el ostium diverticular",
      "Cirugía urgente (Hemicolectomía derecha) sin terapia endoscópica"
    ],
    "correctIndex": 1,
    "explanation": "La terapia mecánica (endoclips/ligadura) es el estándar de oro en sangrado diverticular. Se debe clipar la arteria nutricia en el cuello o base del divertículo.",
    "fisiopato": "El sangrado diverticular ocurre por la ruptura de la \"vasa recta\" asimétrica que penetra subserosamente el cuello del divertículo extendiéndose sobre el domo. La compresión mecánica focalizada (clip) colapsa la vasa recta sin riesgo térmico perforativo transmural.",
    "clinicalPearl": "Hemostasia en sangrado diverticular: CLIPAR o LIGAR. NUNCA quemar el domo (alto riesgo de perforación por ausencia de capa muscular).",
    "guideline": "ACG Clinical Guideline: Management of Patients With Acute Lower Gastrointestinal Bleeding",
    "whyWrong": {
      "0": "La epinefrina sola tiene una alta tasa de resangrado, debe usarse como puente a otra terapia, pero en divertículos se prefiere el clip directo.",
      "1": "Es la primera línea recomendada mecanicamente.",
      "2": "Alta tasa de perforación dado que el divertículo carece de capa muscular propia.",
      "3": "Solo se indica cirugía si falla la hemostasia endoscópica/angiográfica o hay inestabilidad hemodinámica persistente."
    }
  }
];