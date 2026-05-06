import { Topic } from '../types/quiz';

export interface MasterclassSection {
  title: string;
  content: string;
  pearl?: string;
  image?: string;
}

export interface MasterclassData {
  topicId: string;
  title: string;
  objectives: string[];
  sections: MasterclassSection[];
}

export const MASTERCLASS_DATA: Record<string, MasterclassData> = {
  'perfil_hepatico': {
    topicId: 'perfil_hepatico',
    title: 'Masterclass: Interpretación Avanzada del Hepatograma',
    objectives: [
      'Diferenciar patrones de daño: Hepatocelular vs Colestásico.',
      'Interpretar la disociación de transaminasas (AST/ALT).',
      'Evaluar la función de síntesis hepática (Albúmina, INR).',
      'Abordaje clínico de la hiperbilirrubinemia.'
    ],
    sections: [
      {
        title: '1. El Patrón Hepatocelular',
        content: 'Se define primariamente por la elevación de las aminotransferasas (ALT y AST). ALT es más específica del hígado. Una elevación >1000 UI/L sugiere necrosis aguda: hepatitis viral aguda, isquemia (hígado de choque) o toxicidad por paracetamol.',
        pearl: 'Cociente AST/ALT > 2 sugiere fuertemente etiología alcohólica o cirrosis avanzada.'
      },
      {
        title: '2. El Patrón Colestásico',
        content: 'Caracterizado por elevación de Fosfatasa Alcalina (FA) y Gamas-glutamil transferasa (GGT). Si la GGT es normal, la FA podría tener origen óseo. La Bilirrubina puede estar elevada o no (colestasis anictérica).',
        pearl: 'En colestasis intrahepática (CBP/CEP), la FA sube antes que la bilirrubina. En colestasis extrahepática (obstrucción), la subida suele ser simultánea.'
      },
      {
        title: '3. Evaluación de la Capacidad de Síntesis',
        content: 'Las transaminasas indican DAÑO, no FUNCIÓN. La verdadera función se mide con el INR (factor VII de vida corta) y la Albúmina (vida media 20 días).',
        pearl: 'Un INR prolongado que no corrige con Vitamina K parenteral sugiere falla hepática grave.'
      }
    ]
  },
  'eii_avanzada': {
    topicId: 'eii_avanzada',
    title: 'Masterclass: EII - Manejo de Fallas a Biológicos',
    objectives: [
      'Entender la monitorización terapéutica de fármacos (TDM).',
      'Diferenciar falla primaria de pérdida de respuesta secundaria.',
      'Algoritmo de manejo ante niveles bajos vs formación de anticuerpos.',
      'Optimización de dosis y cambio de clase (Switching vs Swapping).'
    ],
    sections: [
      {
        title: '1. Monitorización Terapéutica (TDM)',
        content: 'La medición de niveles valle de biológicos (Infliximab, Adalimumab) es mandatoria ante pérdida de respuesta. Niveles óptimos para Infliximab en mantenimiento suelen ser >5-10 ug/mL según STRIDE-II.',
        pearl: 'La TDM proactiva (medir sin síntomas) es controversial pero cada vez más aceptada en inducción.'
      },
      {
        title: '2. Tipos de Falla',
        content: 'Falla Primaria: No hay respuesta inicial (considerar diagnóstico erróneo o vía no mediada por TNF). Pérdida de Respuesta Secundaria: Respondió inicialmente y luego recayó.',
        pearl: 'Antes de declarar falla al biológico, descarte infecciones sobrepuestas como C. difficile o CMV.'
      },
      {
        title: '3. Anticuerpos Anti-fármaco',
        content: 'La inmunogenicidad es una causa mayor de falla. Si hay anticuerpos a títulos altos con niveles bajos, se debe cambiar de fármaco (generalmente de clase).',
        pearl: 'El uso de inmunomoduladores (Azatioprina/Metotrexato) asociados reduce significativamente la formación de anticuerpos.'
      }
    ]
  }
};
