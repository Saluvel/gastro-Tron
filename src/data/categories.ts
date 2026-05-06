import { Topic } from '../types/quiz';

export const GASTRO_TOPICS: Topic[] = [
  { id: 'dolor_abdominal', name: 'Dolor Abdominal', description: 'Enfrentamiento agudo y crónico, ALICIAS y patrones clínicos.' },
  { id: 'diarrea_aguda', name: 'Diarrea Aguda', description: 'Mecanismos osmóticos, secretores e inflamatorios.' },
  { id: 'diarrea_cronica', name: 'Diarrea Crónica', description: 'Mala absorción, causas orgánicas vs funcionales.' },
  { id: 'hda', name: 'Hemorragia Digestiva Alta', description: 'Várices, úlceras, Forrest y manejo de urgencia.' },
  { id: 'hdb', name: 'Hemorragia Digestiva Baja', description: 'Divertículos, isquemia, angiodisplasias y score de Oakland.' },
  { id: 'erge', name: 'ERGE', description: 'Criterios de Lyon 2.0, esofagitis y monitoreo de pH.' },
  { id: 'motores_esofago', name: 'Trastornos Motores Esófago', description: 'Acalasia, Chicago 4.0 y manometría de alta resolución.' },
  { id: 'cancer_esofago', name: 'Cáncer de Esófago', description: 'Esófago de Barrett, ACE y CEE, estadiaje TNM.' },
  { id: 'h_pylori', name: 'Infección por H. pylori', description: 'Tratamientos de primera línea, resistencia y erradicación.' },
  { id: 'ulcera_peptica', name: 'Úlcera Péptica', description: 'H. pylori vs AINES, complicaciones y cicatrización.' },
  { id: 'cancer_gastrico', name: 'Cáncer Gástrico', description: 'Prevención, OLGA/OLGIM y resección endoscópica.' },
  { id: 'celiaca', name: 'Enfermedad Celíaca', description: 'HLA-DQ2/DQ8, serología y clasificación de Marsh.' },
  { id: 'eii', name: 'Enfermedad Inflamatoria Intestinal', description: 'Crohn y Colitis Ulcerosa, terapias biológicas y brote grave.' },
  { id: 'hepatitis', name: 'Hepatitis Virales y Autoinmune', description: 'VHA, VHB, VHC, VHE y HAI.' },
  { id: 'masld', name: 'MASLD / Esteatosis', description: 'Disfunción metabólica, MASH y riesgo cardiovascular.' },
  { id: 'cirrosis', name: 'Cirrosis y Complicaciones', description: 'Ascitis, PBE, SHR y Encefalopatía Hepática.' },
  { id: 'pancreatitis', name: 'Pancreatitis Aguda y Crónica', description: 'Criterios de Atlanta, necrosis y secreción exocrina.' },
  { id: 'vias_biliares', name: 'Litiasis Biliar y Cáncer de Vesícula', description: 'Colelitiasis, coledocolitiasis y colangitis.' },
  {
    id: 'biologia',
    name: 'Biología y Genética',
    description: 'Bases celulares, oncogenes y síndromes hereditarios.'
  },
  {
    id: 'nutricion',
    name: 'Nutrición e Inmunología',
    description: 'Absorción de micronutrientes, inmunidad mucosa y TPN.'
  },
  {
    id: 'perfil_hepatico',
    name: 'Interpretación de Hepatograma',
    description: 'Taller de casos clínicos: patrones de daño, enzimas y escenarios complejos.'
  },
  {
    id: 'eii_avanzada',
    name: 'EII: Manejo y Fallas',
    description: 'Decisión clínica en biológicos: falla primaria/secundaria y manejo de RAM.'
  },
  {
    id: 'muerte_subita',
    name: 'Muerte Súbita y Emergencias',
    description: 'Paro cardiorrespiratorio en endoscopia, arritmias y soporte vital avanzado.'
  },
  {
    id: 'protocolo_simulacro',
    name: 'Protocolo Simulacro',
    description: 'Escenarios críticos de alta fidelidad: toma de decisiones bajo presión y liderazgo.'
  }
];
