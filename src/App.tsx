import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Brain, 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  Target, 
  AlertCircle,
  FileText,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingDown,
  LayoutDashboard,
  Timer,
  ShieldCheck,
  TrendingUp,
  Mic,
  User,
  Image as ImageIcon,
  Activity,
  Zap,
  Camera,
  X,
  Star,
  Settings,
  Volume2,
  VolumeX,
  Trash2,
  Palette,
  AlertTriangle,
  Skull,
  Database,
  MessageSquare,
  Send,
  Loader2,
  BookOpen,
  ZoomIn,
  Search,
  BookMarked,
  Smartphone,
  Tablet,
  Monitor,
  Cpu,
  Eye
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { GASTRO_TOPICS } from './data/categories';
import { SEED_QUESTIONS } from './data/seedQuestions';
import { PRELOADED_QUESTIONS } from './data/questionBank';
import { Question, Difficulty, UserProgress, Topic } from './types/quiz';
import { auth, db, loginWithGoogle, logout, handleFirestoreError, serverTimestamp } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, deleteDoc, writeBatch } from 'firebase/firestore';

const ALL_PRELOADED_QUESTIONS = [...SEED_QUESTIONS, ...PRELOADED_QUESTIONS];
import { generateQuestions } from './services/ai';
import { GlowButton } from './components/GlowButton';
import { TronCard } from './components/TronCard';
import { OralSim } from './components/OralSim';
import { RadarChart } from './components/RadarChart';
import { ClinicalCases } from './components/ClinicalCases';
import { Leaderboard } from './components/Leaderboard';
import { MasterclassViewer } from './components/MasterclassViewer';
import { playAudio, setSoundEnabled } from './lib/audio';
import { cn } from './lib/utils';

export const shuffleQuestionOptions = (questions: Question[]): Question[] => {
  return questions.map(q => {
    let optionsWithIndex = q.options.map((opt: string, idx: number) => ({ text: opt, originalIndex: idx }));
    for (let i = optionsWithIndex.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
    }
    const newCorrectIndex = optionsWithIndex.findIndex(o => o.originalIndex === q.correctIndex);
    const newOptions = optionsWithIndex.map(o => o.text);
    
    let newWhyWrong: any = undefined;
    if (q.whyWrong) {
      newWhyWrong = {};
      optionsWithIndex.forEach((o, newIdx) => {
        if (o.originalIndex !== q.correctIndex && q.whyWrong && q.whyWrong[String(o.originalIndex)]) {
          newWhyWrong[String(newIdx)] = q.whyWrong[String(o.originalIndex)];
        } else if (o.originalIndex !== q.correctIndex && q.whyWrong && q.whyWrong[o.originalIndex]) {
          // Fallback if keys were integers not strings
          newWhyWrong[newIdx] = q.whyWrong[o.originalIndex];
        }
      });
    }
    
    return {
      ...q,
      options: newOptions,
      correctIndex: newCorrectIndex,
      whyWrong: newWhyWrong || q.whyWrong
    };
  });
};

  // --- INITIAL STATE & PERSISTENCE ---
const INITIAL_PROGRESS: UserProgress = {
  totalAttempted: 0,
  totalCorrect: 0,
  byTopic: {},
  weakTopics: [],
  reviewIds: [],
  streak: 0,
  lastSession: new Date().toISOString(),
  achievements: [],
  hasCompletedTutorial: false,
  lastMissionDate: new Date().toISOString(),
  missionProgress: 0,
  settings: {
    sound: true,
    theme: 'tron'
  },
  savedPearls: [],
  activeQuiz: undefined
};

const ACHIEVEMENTS = [
  { id: 'first_win', name: 'Primer Diagnóstico', desc: 'Responde correctamente tu primera pregunta.', icon: <Activity className="text-tron-cyan" size={20} /> },
  { id: 'streak_5', name: 'Racha Caliente', desc: 'Alcanza una racha de 5 aciertos seguidos.', icon: <Zap className="text-tron-yellow" size={20} /> },
  { id: 'master_endo', name: 'Maestro Endoscopista', desc: 'Completa 20 preguntas con >90% de precisión.', icon: <Camera className="text-tron-sub" size={20} /> },
  { id: 'survival_survivor', name: 'Sobreviviente', desc: 'Supera el modo Supervivencia.', icon: <Trophy className="text-tron-yellow" size={20} /> },
];

const Acronym = ({ term, definition }: { term: string; definition: string; key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <span className="relative inline-block" onMouseLeave={() => setIsOpen(false)}>
      <span 
        onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
        onMouseEnter={() => setIsOpen(true)}
        className="border-b border-dashed border-tron-cyan text-tron-cyan cursor-pointer hover:bg-tron-cyan/10 transition-colors px-0.5"
        title={definition}
      >
        {term}
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.span 
            initial={{ opacity: 0, y: 5, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max max-w-[250px] bg-tron-aside border border-tron-cyan/30 p-2 text-[10px] sm:text-xs text-white rounded shadow-xl z-[1000] text-center font-sans not-italic leading-tight pointer-events-none"
          >
            {definition}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

const ACRONYMS_DICT: Record<string, string> = {
  "ASGE": "American Society for Gastrointestinal Endoscopy",
  "ESGE": "European Society of Gastrointestinal Endoscopy",
  "AGA": "American Gastroenterological Association",
  "IDSA": "Infectious Diseases Society of America",
  "SHEA": "Society for Healthcare Epidemiology of America",
  "CDI": "Clostridioides difficile infection",
  "ERGE": "Enfermedad por Reflujo Gastroesofágico",
  "IBP": "Inhibidor de la Bomba de Protones",
  "IBPs": "Inhibidores de la Bomba de Protones",
  "AET": "Acid Exposure Time",
  "HDA": "Hemorragia Digestiva Alta",
  "GES": "Garantías Explícitas en Salud",
  "EII": "Enfermedad Inflamatoria Intestinal",
  "CU": "Colitis Ulcerosa",
  "ECCO": "European Crohn's and Colitis Organisation",
  "PCR": "Proteína C Reactiva",
  "OLGIM": "Operative Link on Gastric Intestinal Metaplasia",
  "ACHED": "Asociación Chilena de Endoscopia Digestiva",
  "HAI": "Hepatitis Autoinmune",
  "AZA": "Azatioprina",
  "EASL": "European Association for the Study of the Liver",
  "IRP": "Integrated Relaxation Pressure",
  "DLP": "Distal Latency Period",
  "POEM": "Peroral Endoscopic Myotomy",
  "ISDE": "International Society for Diseases of the Esophagus",
  "ACG": "American College of Gastroenterology",
  "IAP": "International Association of Pancreatology",
  "APA": "American Pancreatic Association",
  "WON": "Walled-off Necrosis",
  "TIPS": "Transjugular Intrahepatic Portosystemic Shunt",
  "STRIDE-II": "Selecting Therapeutic Targets in Inflammatory Bowel Disease II",
  "IOIBD": "International Organization for the Study of Inflammatory Bowel Diseases",
  "HBV": "Hepatitis B Virus",
  "HBeAg": "Hepatitis B e Antigen",
  "HBsAg": "Hepatitis B surface Antigen",
  "CBP": "Colangitis Biliar Primaria",
  "AUDC": "Ácido Ursodesoxicólico",
  "AASLD": "American Association for the Study of Liver Diseases",
  "FXR": "Farnesoid X Receptor",
  "ASCRS": "American Society of Colon and Rectal Surgeons",
  "PBE": "Peritonitis Bacteriana Espontánea",
  "USMSTF": "US Multi-Society Task Force on Colorectal Cancer",
  "EGFR": "Epidermal Growth Factor Receptor",
  "PI3K": "Fosfoinosítido 3-quinasa",
  "GALT": "Gut-Associated Lymphoid Tissue",
  "PSC": "Células Estelares Pancreáticas (Pancreatic Stellate Cells)",
  "SHR": "Síndrome Hepatorrenal",
  "SIRS": "Síndrome de Respuesta Inflamatoria Sistémica",
  "BSG": "British Society of Gastroenterology",
  "NASPGHAN": "North American Society for Pediatric Gastroenterology, Hepatology, and Nutrition",
  "EGD": "Esófagogastroduodenoscopia",
  "TAC": "Tomografía Axial Computarizada",
  "TC": "Tomografía Computarizada",
  "RFA": "Ablación por Radiofrecuencia (Radiofrequency Ablation)",
  "EMR": "Resección Mucosa Endoscópica (Endoscopic Mucosal Resection)",
  "EUS-FNA": "Endoscopic Ultrasound-Guided Fine-Needle Aspiration",
  "EUS": "Endoscopic Ultrasound",
  "FNA": "Fine-Needle Aspiration",
  "CEA": "Antígeno Carcinoembrionario (Carcinoembryonic Antigen)",
  "MCN": "Mucinous Cystic Neoplasm",
  "IPMN": "Intraductal Papillary Mucinous Neoplasm",
  "EGJOO": "Esophagogastric Junction Outflow Obstruction",
  "FA": "Fibrilación Auricular",
  "IMA": "Isquemia Mesentérica Aguda",
  "AMS": "Arteria Mesentérica Superior",
  "NBI": "Narrow Band Imaging",
  "FICE": "Flexible Spectral Imaging Color Enhancement",
  "BLI": "Blue Light Imaging",
  "LCI": "Linked Color Imaging",
  "AINEs": "Antiinflamatorios No Esteroideos",
  "AINE": "Antiinflamatorio No Esteroideo"
};

const acronymKeys = Object.keys(ACRONYMS_DICT).sort((a,b) => b.length - a.length);
const acronymsRegex = new RegExp(`\\b(${acronymKeys.join('|')})\\b`, 'g');

export const renderWithAcronyms = (text: string) => {
  if (!text) return null;
  const parts = text.split(acronymsRegex);
  return parts.map((part, index) => {
    if (ACRONYMS_DICT[part]) {
      return <Acronym key={index} term={part} definition={ACRONYMS_DICT[part]} />;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const GastroChat = ({ onBack, contextQuestion = null }: { onBack: () => void; contextQuestion?: Question | null }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Use a ref to ensure automatic fetch happens only once
  const initialized = React.useRef(false);

  const sendMessage = async (textToProcess?: string) => {
    const userMsg = textToProcess || input.trim();
    if (!userMsg || isLoading) return;
    
    playAudio('magic');
    if (!textToProcess) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API_KEY_MISSING");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      let contextStr = "";
      if (contextQuestion) {
        contextStr = `\nCONTEXTO DE PREGUNTA ACTUAL QUE ESTÁ VIENDO EL USUARIO:\nPregunta: ${contextQuestion.text}\nOpciones: ${contextQuestion.options.join(" | ")}\nRespuesta Correcta: ${contextQuestion.options[contextQuestion.correctIndex]}\nExplicación: ${contextQuestion.explanation || 'No disponible'}\n`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: userMsg,
        config: {
          systemInstruction: "Eres el Oráculo de GAS-TRON, una IA de ultra-élite experta en gastroenterología clínica. Tu base de datos principal es el Manual Chileno de Gastroenterología (2025) y guías internacionales (AGA, ACG, ESGE, AASLD, ECCO). Tu objetivo es ayudar a Fellows y Residentes con dudas complejas, perlas fisiopatológicas y algoritmos. Mantén un tono professional 'cyberpunk/tron'. Siempre cita guías si es posible. " + contextStr
        }
      });

      const modelText = response.text || "Error al procesar la respuesta del Oráculo.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
      playAudio('magic');
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.message === "API_KEY_MISSING") {
        setMessages(prev => [...prev, { role: 'model', text: "[ERROR] Falta configurar la variable GEMINI_API_KEY." }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: "Falla de conexión con el Oráculo. Red inestable." }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    playAudio('magic');
    if (contextQuestion && !initialized.current) {
        initialized.current = true;
        sendMessage("Analiza y profundiza fisiopatológicamente la pregunta que acabo de responder. ¿Por qué es la opción correcta según la última evidencia y cuál es el 'pivote' diagnóstico principal?");
    }
  }, [contextQuestion]);

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] md:h-[calc(100vh-200px)] border border-tron-cyan/20 bg-tron-card/50 rounded-2xl overflow-hidden backdrop-blur-md">
       <div className="p-4 border-b border-tron-cyan/20 bg-tron-cyan/5 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full border-2 border-tron-cyan/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.2)] animate-slow-spin">
                <div className="w-6 h-6 rounded-full border-2 border-tron-cyan flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-tron-cyan shadow-[0_0_10px_#00f2ff]" />
                </div>
             </div>
             <div>
                <h3 className="text-sm font-black text-white tracking-widest uppercase">Oráculo GAS-TRON</h3>
                <span className="text-[8px] text-tron-cyan/60 font-mono uppercase tracking-tighter">Status: En Línea (Gemini Protocol)</span>
             </div>
          </div>
          <button onClick={onBack} className="text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
       </div>

       <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
          {messages.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center opacity-30 text-center px-8">
                <MessageSquare size={48} className="mb-4" />
                <p className="uppercase tracking-[0.2em] italic font-black text-xs">Cargando interfaz de consulta... Haz una pregunta técnica sobre Gastroenterología.</p>
             </div>
          )}
          {messages.map((msg, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
               animate={{ opacity: 1, x: 0 }}
               className={cn(
                 "max-w-[85%] p-4 rounded-xl border",
                 msg.role === 'user' 
                  ? "ml-auto bg-tron-cyan/10 border-tron-cyan/30 text-white" 
                  : "mr-auto bg-white/5 border-white/10 text-cyan-50"
               )}
             >
                <div className="text-[10px] uppercase font-black tracking-widest mb-1 opacity-50">
                   {msg.role === 'user' ? 'Fellow_ID' : 'Oráculo_AI'}
                </div>
                <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
             </motion.div>
          ))}
          {isLoading && (
             <div className="mr-auto bg-white/5 border border-white/10 p-4 rounded-xl max-w-[85%]">
                <Loader2 size={20} className="animate-spin text-tron-cyan" />
             </div>
          )}
       </div>

       <div className="p-4 border-t border-tron-cyan/20 bg-black/40">
          <div className="relative">
             <input 
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
               placeholder="Ingrese consulta para el Oráculo..."
               className="w-full bg-black/60 border border-tron-cyan/30 rounded-full py-3 px-6 pr-14 text-white focus:outline-none focus:border-tron-cyan/60 transition-colors placeholder:text-white/20 italic"
             />
             <button 
               onClick={sendMessage}
               disabled={isLoading || !input.trim()}
               className="absolute right-2 top-1.5 p-2 bg-tron-cyan rounded-full text-black hover:bg-white transition-all disabled:opacity-30"
             >
                <Send size={18} />
             </button>
          </div>
          <p className="mt-2 text-[8px] text-center text-white/20 uppercase tracking-widest">Atención: La simulación AI puede generar datos inexactos. Verifique con guías clínicas.</p>
       </div>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<'lobby' | 'quiz' | 'results' | 'pearls' | 'sim' | 'bookmarks' | 'oral_sim' | 'flashcards' | 'atlas' | 'profile' | 'cases' | 'ranking' | 'archive' | 'chat'>('lobby');
  const [scalingMode, setScalingMode] = useState<'auto' | 'phone' | 'tablet' | 'pc'>(() => {
    const saved = localStorage.getItem('app_scaling_mode');
    return (saved as any) || 'auto';
  });

  useEffect(() => {
    localStorage.setItem('app_scaling_mode', scalingMode);
  }, [scalingMode]);
  
  useEffect(() => {
    const scale = () => {
      let width = window.innerWidth;
      
      if (scalingMode === 'auto') {
        const ua = navigator.userAgent.toLowerCase();
        const isMobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sphone/i.test(ua);
        const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua);
        
        if (isTablet) {
          width = 768;
        } else if (isMobile) {
          width = 390;
        } else {
          width = 1280;
        }
      } else {
        width = scalingMode === 'phone' ? 390 :
                scalingMode === 'tablet' ? 768 : 1280;
      }

      if (width < 430) {
        document.documentElement.style.fontSize = '14px';
      } else if (width < 900) {
        document.documentElement.style.fontSize = '15px';
      } else {
        document.documentElement.style.fontSize = '16px';
      }
    };
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, [scalingMode]);

  const [isSimMode, setIsSimMode] = useState(false);
  const [isSurvivalMode, setIsSurvivalMode] = useState(false);
  const [showDailyGuide, setShowDailyGuide] = useState(false);
  const [isOralMode, setIsOralMode] = useState(true); // Default to true as per user interest
  const [isStudyMode, setIsStudyMode] = useState(true); // Default to true
  const [isReviewingMode, setIsReviewingMode] = useState(false);
  const [revealedOral, setRevealedOral] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [targetQuestionCount, setTargetCount] = useState(() => {
    const saved = localStorage.getItem('gastro_quiz_target_count');
    return saved ? parseInt(saved, 10) : 10;
  });
  const [pearlsSearch, setPearlsSearch] = useState('');
  const [pearlsFilterTopic, setPearlsFilterTopic] = useState<string | 'all'>('all');
  const [pearlsCategory, setPearlsCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const PEARL_CATEGORIES: Record<string, string[]> = {
    'hepatobiliares': ['hepatitis', 'masld', 'cirrosis', 'vias_biliares', 'perfil_hepatico'],
    'esofago_gastricas': ['erge', 'motores_esofago', 'cancer_esofago', 'h_pylori', 'ulcera_peptica', 'cancer_gastrico'],
    'intestinales': ['diarrea_aguda', 'diarrea_cronica', 'celiaca', 'eii', 'eii_avanzada', 'dolor_abdominal'],
    'pancreato_biliar': ['pancreatitis'],
    'hemorragias': ['hda', 'hdb'],
    'miscelaneas': ['biologia', 'nutricion', 'muerte_subita', 'protocolo_simulacro']
  };

  const CATEGORY_NAMES: Record<string, string> = {
    'hepatobiliares': 'Hepatobiliares',
    'esofago_gastricas': 'Gástricas y Esofágicas',
    'intestinales': 'Intestinales y Colon',
    'pancreato_biliar': 'Páncreas',
    'hemorragias': 'Hemorragias',
    'miscelaneas': 'Misceláneas'
  };
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('Fellow');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAtlasItem, setSelectedAtlasItem] = useState<any>(null);
  const [achievementNotify, setAchievementNotify] = useState<any>(null);
  const [isTimedMode, setIsTimedMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [resetDoubleCheck, setResetDoubleCheck] = useState(false);
  const [selectedPearl, setSelectedPearl] = useState<any>(null);
  const [flashIndex, setFlashIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOracleOpen, setIsOracleOpen] = useState(false);
  const [oracleContextMode, setOracleContextMode] = useState<boolean>(false);
  const [showCalcs, setShowCalcs] = useState(false);
  const [showPearls, setShowPearls] = useState(false);
  const [showVisualDetail, setShowVisualDetail] = useState(false);
  const [isMasterclassRoute, setIsMasterclassRoute] = useState(false);

  const savePearl = async (question: Question | undefined) => {
    if (!question || !question.clinicalPearl) return;
    if (progress.savedPearls?.some(p => p.questionId === question.id)) return;

    playAudio('achievement');
    
    const newPearl = {
      questionId: question.id,
      text: question.clinicalPearl,
      topic: question.topic,
      date: Date.now()
    };
    
    setProgress(prev => ({
      ...prev,
      savedPearls: [
        ...(prev.savedPearls || []),
        newPearl
      ]
    }));

    if (authUser) {
      try {
        const pearlId = question.id || `pearl_${Date.now()}`;
        const payload = {
          qId: question.id || "",
          text: question.clinicalPearl,
          explanation: question.explanation || "",
          fisiopato: question.fisiopato || "",
          topic: question.topic,
          createdAt: serverTimestamp()
        };
        await setDoc(doc(db, 'users', authUser.uid, 'pearls', pearlId), payload);
      } catch (error) {
        console.error("Failed to sync pearl to cloud:", error);
      }
    }
  };

  // --- CALCULATORS COMPONENT ---
  const MedicalCalculators = () => {
    const [calcType, setCalcType] = useState<'meld' | 'fib4' | 'child' | 'maddrey'>('meld');
    
    // MELD-Na Calc
    const [meldData, setMeldData] = useState({ bil: 1.2, inr: 1.1, cr: 0.9, na: 138 });
    const meldScore = useMemo(() => {
      const { bil, inr, cr, na } = meldData;
      // MELD variables bounded
      const bBil = Math.max(1, bil);
      const bInr = Math.max(1, inr);
      const bCr = Math.min(4, Math.max(1, cr)); // Max 4.0
      const bNa = Math.min(137, Math.max(125, na));

      // MELD calculation
      const m = 3.78 * Math.log(bBil) + 11.2 * Math.log(bInr) + 9.57 * Math.log(bCr) + 6.43;
      let finalMeld = Math.round(m);
      
      if (finalMeld > 11) {
        finalMeld = finalMeld + 1.32 * (137 - bNa) - (0.033 * finalMeld * (137 - bNa));
      }
      return Math.round(Math.min(40, Math.max(6, finalMeld)));
    }, [meldData]);

    return (
      <div className="space-y-6">
        <div className="flex gap-1 p-1 bg-white/5 rounded-lg border border-white/10 overflow-x-auto no-scrollbar">
          {(['meld', 'fib4', 'child', 'maddrey'] as const).map(t => (
            <button
              key={t}
              onClick={() => setCalcType(t)}
              className={cn(
                "flex-1 py-2 px-3 rounded-md text-[9px] uppercase font-black tracking-widest transition-all whitespace-nowrap",
                calcType === t ? "bg-tron-cyan text-black" : "text-white/40 hover:text-white"
              )}
            >
              {t === 'maddrey' ? 'Maddrey' : t === 'meld' ? 'MELD-Na' : t === 'fib4' ? 'FIB-4' : 'Child-Pugh'}
            </button>
          ))}
        </div>

        {calcType === 'meld' && (
          <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-white/40 font-bold">Bilirrubina (mg/dl)</label>
              <input type="number" step="0.1" value={meldData.bil} onChange={e => setMeldData({...meldData, bil: +e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white font-mono focus:border-tron-cyan focus:outline-none transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-white/40 font-bold">INR</label>
              <input type="number" step="0.1" value={meldData.inr} onChange={e => setMeldData({...meldData, inr: +e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white font-mono focus:border-tron-cyan focus:outline-none transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-white/40 font-bold">Creatinina (mg/dl)</label>
              <input type="number" step="0.1" value={meldData.cr} onChange={e => setMeldData({...meldData, cr: +e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white font-mono focus:border-tron-cyan focus:outline-none transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-white/40 font-bold">Sodio (mEq/L)</label>
              <input type="number" value={meldData.na} onChange={e => setMeldData({...meldData, na: +e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white font-mono focus:border-tron-cyan focus:outline-none transition-colors" />
            </div>
            <div className="col-span-2 p-6 border border-tron-cyan/20 bg-tron-cyan/5 text-center rounded-2xl group transition-all hover:bg-tron-cyan/10">
              <div className="text-[10px] uppercase text-tron-cyan tracking-[0.4em] mb-2 font-black">Score de Priorización MELD-Na</div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tighter text-glow-cyan">{meldScore}</div>
              <div className="text-[10px] text-white/40 mt-4 italic uppercase tracking-wider">Pronóstico de supervivencia a 90 días optimizado</div>
            </div>
          </div>
        )}

        {calcType !== 'meld' && (
          <div className="p-12 text-center border border-white/5 bg-white/2 rounded-2xl italic text-white/30 flex flex-col items-center gap-3">
            <Database className="opacity-20" size={32} />
            <p className="text-xs uppercase tracking-widest font-black">Módulo de Precisión en Desarrollo</p>
          </div>
        )}
      </div>
    );
  };

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('gastro_quiz_progress');
    const parsed = saved ? JSON.parse(saved) : INITIAL_PROGRESS;
    return { 
      ...INITIAL_PROGRESS, 
      ...parsed, 
      settings: parsed?.settings || INITIAL_PROGRESS.settings,
      reviewIds: parsed?.reviewIds || [],
      hasCompletedTutorial: parsed?.hasCompletedTutorial ?? false
    };
  });

  const [cachedQuestions, setCachedQuestions] = useState<Record<string, Question[]>>(() => {
    const saved = localStorage.getItem('gastro_quiz_cached_questions');
    return saved ? JSON.parse(saved) : {};
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('gastro_quiz_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const allKnownQuestions = useMemo(() => [
    ...ALL_PRELOADED_QUESTIONS,
    ...(Object.values(cachedQuestions).flat() as Question[])
  ], [cachedQuestions]);

  useEffect(() => {
    if (currentView === 'flashcards') {
      setFlashIndex(0);
      setIsFlipped(false);
    }
  }, [currentView]);

  const dailyPearl = useMemo(() => {
    const validQuestions = ALL_PRELOADED_QUESTIONS.filter(q => q && q.clinicalPearl);
    if (validQuestions.length === 0) return { text: "No hay pearls", topic: "General", ref: "", question: "", explanation: "" };
    
    const allPearls = validQuestions.map(q => ({
      text: q.clinicalPearl,
      topic: GASTRO_TOPICS.find(t => t.id === q.topic)?.name,
      ref: q.guideline,
      question: q.text,
      explanation: q.explanation
    }));
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return allPearls[dayOfYear % allPearls.length];
  }, []);

  const unlockAchievement = (id: string) => {
    if (progress.achievements?.includes(id)) return;
    
    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    if (achievement) {
      playAudio('achievement');
      setAchievementNotify(achievement);
      setProgress(prev => ({
        ...prev,
        achievements: [...(prev.achievements || []), id]
      }));
      setTimeout(() => setAchievementNotify(null), 5000);
    }
  };

  const AchievementNotification = () => (
    <AnimatePresence>
      {achievementNotify && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-black/90 border-2 border-tron-yellow p-4 rounded-xl shadow-[0_0_30px_rgba(255,184,0,0.3)] backdrop-blur-md min-w-[300px]"
        >
           <div className="w-12 h-12 rounded-full bg-tron-yellow/20 flex items-center justify-center border border-tron-yellow">
             {achievementNotify.icon}
           </div>
           <div>
             <div className="text-[10px] text-tron-yellow uppercase font-black tracking-widest">¡Logro Desbloqueado!</div>
             <div className="text-white font-bold uppercase">{achievementNotify.name}</div>
             <div className="text-[10px] text-white/40">{achievementNotify.desc}</div>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const IntroOverlay = () => {
    const [step, setStep] = useState(0);
    const steps = [
      {
        title: "INICIALIZANDO KERNEL",
        text: "Bienvenido, Fellow. El sistema GAS-TRON ha sido cargado para optimizar tu rendimiento clínico en gastroenterología.",
        icon: <Zap className="text-tron-cyan" size={48} />
      },
      {
        title: "EL DISCO DE IDENTIDAD",
        text: "Tu progreso se almacena en el núcleo. Cada acierto aumenta tu Sincronía (Sync Level). Un nivel bajo indica datos corruptos en tu formación.",
        icon: <User className="text-tron-yellow" size={48} />
      },
      {
        title: "LA RED DE CONOCIMIENTO",
        text: "Navega por los sectores (Hepatología, Endoscopia, etc.) y limpia la corrupción respondiendo correctamente. ¡Buena suerte en la simulación!",
        icon: <Activity className="text-tron-sub" size={48} />
      }
    ];

    if (progress.hasCompletedTutorial) return null;

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border-2 border-tron-cyan border-dashed rounded-full"
             />
             {steps[step].icon}
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-tron-cyan tracking-tighter uppercase text-glow-cyan">
              {steps[step].title}
            </h2>
            <p className="text-white/70 font-serif italic text-lg leading-relaxed">
              {steps[step].text}
            </p>
          </div>

          <div className="flex justify-center gap-2">
            {steps.map((_, i) => (
              <div key={i} className={cn("w-2 h-2 rounded-full transition-colors", step === i ? "bg-tron-cyan shadow-[0_0_8px_cyan]" : "bg-white/10")} />
            ))}
          </div>

          <GlowButton 
            onClick={() => {
              playAudio('click');
              if (step < steps.length - 1) setStep(step + 1);
              else setProgress(prev => ({ ...prev, hasCompletedTutorial: true }));
            }}
            className="w-full py-4 text-lg"
          >
            {step === steps.length - 1 ? "Entrar en la Red" : "Continuar Protocolo"}
          </GlowButton>
        </motion.div>
      </motion.div>
    );
  };

  // Save target count
  const [authUser, setAuthUser] = useState<FirebaseUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // Sync to Firebase on login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthUser(user || null);
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
             const data = userDoc.data();
             setProgress(prev => {
               return {
                 ...prev,
                 totalAttempted: data.totalAttempted ?? prev.totalAttempted,
                 totalCorrect: data.totalCorrect ?? prev.totalCorrect,
                 streak: data.streak ?? prev.streak,
                 byTopic: data.byTopic ?? prev.byTopic,
                 reviewIds: data.reviewIds ?? prev.reviewIds,
                 achievements: data.achievements ?? prev.achievements,
                 activeQuiz: data.activeQuiz ?? prev.activeQuiz
               };
             });
             
             // Fetch pearls
             try {
               const pearlsSnapshot = await getDocs(collection(db, 'users', user.uid, 'pearls'));
               const loadedPearls = pearlsSnapshot.docs.map(d => {
                  const pearlData = d.data();
                  return {
                      questionId: pearlData.qId,
                      text: pearlData.text,
                      topic: pearlData.topic,
                      date: pearlData.createdAt?.toMillis ? pearlData.createdAt.toMillis() : Date.now()
                  };
               });
               if (loadedPearls.length > 0) {
                 setProgress(prev => {
                   const newPearls = [...(prev.savedPearls || [])];
                   for (const cloudP of loadedPearls) {
                     if (!newPearls.some(p => p.questionId === cloudP.questionId)) {
                        newPearls.push(cloudP);
                     }
                   }
                   return { ...prev, savedPearls: newPearls };
                 });
               }
             } catch (e) {
               console.error("Failed to load cloud pearls", e);
             }
          }
        } catch (error) {
           console.error("Failed to load cloud profile", error);
        }
      }
      setIsAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch {}
  };

  useEffect(() => {
    localStorage.setItem('gastro_quiz_target_count', targetQuestionCount.toString());
  }, [targetQuestionCount]);

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem('gastro_quiz_progress', JSON.stringify(progress));
    
    // Cloud Sync
    if (authUser && !isAuthLoading) {
      const syncToCloud = async () => {
         try {
           const payload = {
             uid: authUser.uid,
             totalAttempted: progress.totalAttempted,
             totalCorrect: progress.totalCorrect,
             streak: progress.streak,
             byTopic: progress.byTopic,
             reviewIds: progress.reviewIds,
             achievements: progress.achievements,
             activeQuiz: progress.activeQuiz || null,
             updatedAt: serverTimestamp()
           };
           await setDoc(doc(db, 'users', authUser.uid), payload, { merge: true });
         } catch(e) {
           console.warn("Cloud sync failed");
         }
      };
      // Simple debounce
      const timer = setTimeout(() => {
        syncToCloud();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [progress, authUser, isAuthLoading]);

  // Save cached questions
  useEffect(() => {
    localStorage.setItem('gastro_quiz_cached_questions', JSON.stringify(cachedQuestions));
  }, [cachedQuestions]);

  // Save bookmarks
  useEffect(() => {
    localStorage.setItem('gastro_quiz_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Apply settings
  useEffect(() => {
    setSoundEnabled(progress.settings?.sound ?? true);
    
    const root = document.documentElement;
    const t = progress.settings?.theme || 'tron';
    if (t === 'neon') {
      root.style.setProperty('--color-tron-cyan', '#ff00ff');
      root.style.setProperty('--color-tron-yellow', '#00e5ff');
      root.style.setProperty('--color-tron-bg', '#0c0514');
      root.style.setProperty('--color-tron-aside', '#130a1c');
    } else if (t === 'hacker') {
      root.style.setProperty('--color-tron-cyan', '#00ff00');
      root.style.setProperty('--color-tron-yellow', '#33ff33');
      root.style.setProperty('--color-tron-bg', '#020a02');
      root.style.setProperty('--color-tron-aside', '#051405');
    } else {
      root.style.setProperty('--color-tron-cyan', '#00f2ff');
      root.style.setProperty('--color-tron-yellow', '#ffb800');
      root.style.setProperty('--color-tron-bg', '#050508');
      root.style.setProperty('--color-tron-aside', '#0a0a14');
    }
  }, [progress.settings]);

  // --- LOGIC ---
  const currentQuestion = questions[currentQuestionIndex];

  // REAL-TIME STREAK TRACKING (Current Session)
  const [currentStreak, setCurrentStreak] = useState(0);
  const [showStreakMsg, setShowStreakMsg] = useState(false);

  useEffect(() => {
    if (currentStreak > 0 && currentStreak % 5 === 0) {
      setShowStreakMsg(true);
      const timer = setTimeout(() => setShowStreakMsg(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStreak]);

  const streakVisuals = useMemo(() => {
    if (currentStreak >= 20) return { color: '#ff00ff', shadow: '0 0 60px #ff00ff', text: 'DIOS DE LA GASTROENTEROLOGÍA', msg: '¡Imparable! Protocolo Omega Activado.', intensity: 'animate-pulse-fast', level: 5 };
    if (currentStreak >= 15) return { color: '#ffb800', shadow: '0 0 50px #ffb800', text: 'MAESTRÍA ABSOLUTA', msg: 'Sincronía divina... estás on fire.', intensity: 'animate-pulse-fast', level: 4 };
    if (currentStreak >= 10) return { color: '#00f2ff', shadow: '0 0 40px #00f2ff', text: 'ESTADO DE GRACIA', msg: '¡Una máquina clínica! God Mode.', intensity: 'animate-pulse-fast', level: 3 };
    if (currentStreak >= 6) return { color: '#ffffff', shadow: '0 0 30px #ffffff', text: 'OVERDRIVE ACTIVADO', msg: '¡Excelente racha! Sigue así.', intensity: 'animate-pulse', level: 2 };
    if (currentStreak >= 3) return { color: '#00f2ff', shadow: '0 0 20px #00f2ff', text: 'SINCRONÍA ESTABLE', msg: '¡Buen ritmo! Sigue acertando.', intensity: '', level: 1 };
    return { color: '#00f2ff', shadow: 'none', text: '', msg: '', intensity: '', level: 0 };
  }, [currentStreak]);

  // --- STREAK LOGO COMPONENT ---
  const StreakLogo = ({ streak }: { streak: number }) => {
    const { level, color, text, msg } = streakVisuals;
    
    return (
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center flex-shrink-0">
          {/* Backplate / Shadow */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-2xl opacity-40 mix-blend-screen"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <motion.svg 
            viewBox="0 0 24 24" 
            className="w-full h-full relative z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: level >= 4 ? 1 : level >= 3 ? 2 : level === 2 ? 4 : 8, repeat: Infinity, ease: "linear" }}
          >
            {/* Base Grid Pattern */}
            <defs>
              <pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse">
                <path d="M 2 0 L 0 0 0 2" fill="none" stroke={color} strokeWidth="0.1" opacity="0.3" />
              </pattern>
            </defs>
            <circle cx="12" cy="12" r="11" fill="url(#grid)" className="opacity-20" />

            {/* Level 0: Base */}
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="0.5" strokeDasharray="1 4" className="opacity-40" />
            <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" strokeDasharray={level >= 1 ? "12 4" : "2 10"} className="transition-all duration-700" />
            
            {/* Level 1: Outer glowing ring */}
            {level >= 1 && (
              <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="0.2" className="opacity-50 blur-[1px]" />
            )}

            {/* Level 2: Outer Ring Counter-Rotate */}
            {level >= 2 && (
              <motion.circle 
                cx="12" cy="12" r="11" 
                stroke={color} strokeWidth="0.8" 
                strokeDasharray="4 8 2 6" 
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Level 3: Inner Core */}
            {level >= 3 && (
              <motion.circle 
                cx="12" cy="12" r="5" fill={color} className={cn(level >= 5 ? "opacity-100" : "opacity-90")} 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}

            {/* Level 4: Lightning / Sparkles */}
            {level >= 4 && (
               <motion.path 
                 d="M12 0 L12 24 M0 12 L24 12 M3.5 3.5 L20.5 20.5 M20.5 3.5 L3.5 20.5" 
                 stroke={color} strokeWidth="0.5" strokeDasharray="1 6"
                 animate={{ opacity: [0, 1, 0, 1, 0], scale: [0.9, 1.2, 0.8, 1.1, 0.9], rotate: [0, 90] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
               />
            )}
            
            <circle cx="12" cy="12" r="2.5" fill={color} className="opacity-90" />
            {level >= 5 && <circle cx="12" cy="12" r="1.5" fill="#fff" className="opacity-100 animate-ping" />}
          </motion.svg>
          
          {/* Number Display */}
          {level >= 1 && (
            <div className="absolute flex justify-center items-center pointer-events-none w-full h-full">
              <motion.span 
                key={streak}
                initial={{ scale: 1.5, rotateY: 90, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute font-black text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20 mix-blend-plus-lighter" 
                style={{ color: '#ffffff', textShadow: `0 2px 10px ${color}` }}
              >
                {streak}
              </motion.span>
            </div>
          )}

          {/* Level Up Shockwaves via CSS/Framer */}
          {level >= 2 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <motion.div 
                key={streak}
                className="absolute w-full h-full rounded-full border-2"
                style={{ borderColor: color }}
                initial={{ scale: 0.8, opacity: 1, borderWidth: "8px" }}
                animate={{ scale: 2, opacity: 0, borderWidth: "1px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className={cn("absolute inset-2 z-0 rounded-full border border-white/20 animate-ping", level >= 3 ? "duration-500 scale-150 border-white/40" : "duration-1000 border-white/20 scale-[1.3]")} />
              
              {level >= 4 && (
                <motion.div 
                  className="absolute w-[200%] h-[2px] opacity-30 mix-blend-screen" 
                  style={{ backgroundColor: color }}
                  animate={{ rotate: 360, scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              )}

              {level >= 5 && (
                <div className="absolute inset-[-30px] rounded-full border-4 border-[#ff00ff]/60 border-dashed animate-[spin_3s_linear_infinite] shadow-[0_0_60px_#ff00ff]" />
              )}
            </div>
          )}
        </div>
        
        {level >= 1 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: -20, skewX: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0, skewX: 0 }}
            key={text}
            className="flex flex-col hidden md:flex ml-2 relative"
          >
            {level >= 3 && (
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-transparent to-transparent opacity-20 pointer-events-none"
                style={{ backgroundImage: `linear-gradient(to right, ${color}, transparent)` }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <span className="text-[11px] uppercase font-black tracking-[0.3em] text-white/70 mb-1 flex items-center gap-2 relative z-10">
              <Zap size={14} className={cn("text-tron-yellow", level >= 3 ? "animate-bounce" : "animate-pulse")} /> 
              Serie {streak} • {msg}
            </span>
            <span 
              className={cn("text-3xl lg:text-5xl font-display font-black tracking-tighter uppercase relative z-10 drop-shadow-2xl", streakVisuals.intensity)} 
              style={{ color, textShadow: streakVisuals.shadow }}
            >
              {text}
            </span>
          </motion.div>
        )}
      </div>
    );
  };

  // --- STREAK MOTIVATION OVERLAY ---
  const StreakMotivation = () => {
    if (!showStreakMsg) return null;
    const { color, text, msg, intensity, level } = streakVisuals;

    return (
      <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden flex justify-center">
         {/* Screen Flash Effect for high levels */}
         {level >= 3 && (
           <motion.div 
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-0 mix-blend-screen"
              style={{ backgroundColor: color }}
           />
         )}
         
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50, rotateX: 45 }}
          animate={{ opacity: 1, scale: 1, y: 30, rotateX: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20, filter: "blur(10px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative flex justify-center w-full px-4"
          style={{ perspective: 1000 }}
        >
          <div 
            className="bg-black/90 backdrop-blur-xl border-2 p-5 md:p-8 rounded-[2rem] flex items-center gap-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] max-w-3xl w-full relative overflow-hidden"
            style={{ borderColor: color, boxShadow: `0 0 ${40 + level * 10}px ${color}50` }}
          >
            {/* Background scanner line */}
            <motion.div 
               className="absolute top-0 bottom-0 w-16 opacity-30 mix-blend-screen"
               style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
               animate={{ left: ["-100%", "200%"] }}
               transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />

            <motion.div 
              className="p-4 md:p-5 rounded-[1.5rem] bg-white/5 border-2 border-white/20 relative z-10" 
              style={{ color, borderColor: `${color}80`, boxShadow: `inset 0 0 20px ${color}40` }}
              animate={{ rotateZ: [0, -10, 10, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Zap size={36} className={cn(intensity, "drop-shadow-lg")} />
            </motion.div>
            
            <div className="flex flex-col relative z-10 flex-1">
              <motion.h2 
                className="text-2xl md:text-4xl font-display font-black tracking-tighter uppercase italic drop-shadow-xl" 
                style={{ color, textShadow: `0 0 10px ${color}80` }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {text}
              </motion.h2>
            <div className="flex items-center gap-2">
              <span className="text-white text-xs font-black uppercase tracking-widest">{currentStreak} ACIERTOS SEGUIDOS</span>
              <span className="text-white/40 text-[10px] uppercase">— {msg}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    );
  };

  const userRank = useMemo(() => {
    const xp = progress.totalCorrect * 10;
    if (xp > 5000) return { name: 'Maestro Consultor (Chief)', color: 'text-tron-sub' };
    if (xp > 2500) return { name: 'Senior Fellow', color: 'text-tron-staff' };
    if (xp > 1200) return { name: 'Fellow Gastro', color: 'text-tron-fellow' };
    if (xp > 500) return { name: 'Residente R3 (Senior)', color: 'text-tron-cyan' };
    if (xp > 150) return { name: 'Residente R2', color: 'text-tron-yellow' };
    return { name: 'Residente R2 (Base)', color: 'text-white/60' };
  }, [progress.totalCorrect]);

  const stats = useMemo(() => {
    const topicsArray = Object.keys(progress.byTopic);
    const worstTopicId = topicsArray.reduce((prev, curr) => {
      const prevStats = progress.byTopic[prev];
      const currStats = progress.byTopic[curr];
      const prevRatio = prevStats.correct / prevStats.attempted;
      const currRatio = currStats.correct / currStats.attempted;
      return prevRatio < currRatio ? prev : curr;
    }, topicsArray[0] || '');

    const worstTopicName = GASTRO_TOPICS.find(t => t.id === worstTopicId)?.name || 'Sin datos';
    
    return {
      accuracy: progress.totalAttempted > 0 
        ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100) 
        : 0,
      worstTopic: worstTopicName,
      totalXp: progress.totalCorrect * 10
    };
  }, [progress]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };
  const isCorrect = useMemo(() => {
    if (!showFeedback || answers[currentQuestionIndex] === null) return null;
    return answers[currentQuestionIndex] === questions[currentQuestionIndex]?.correctIndex;
  }, [showFeedback, currentQuestionIndex, answers, questions]);

  const startSimMode = async () => {
    if (isSimMode && !isSurvivalMode && questions.length > 0 && currentView !== 'results') {
      playAudio('start');
      setCurrentView('quiz');
      return;
    }

    playAudio('start');
    setIsLoading(true);
    setIsSimMode(true);
    setIsSurvivalMode(false);
    setCurrentView('quiz');
    
    // Pick 5 questions from each major topic pool (seeds + cache)
    const pools = GASTRO_TOPICS.map(t => {
      const seeds = ALL_PRELOADED_QUESTIONS.filter(q => q.topic === t.id);
      const cached = cachedQuestions[t.id] || [];
      return [...seeds, ...cached].sort(() => Math.random() - 0.5).slice(0, 5);
    });

    const simQuestions = pools.flat().sort(() => Math.random() - 0.5);
    
    if (simQuestions.length < 10) {
      alert("Necesitas acumular más preguntas en el Data-Core para iniciar un simulacro completo. Realiza algunos módulos de temas específicos primero.");
      setCurrentView('lobby');
      setIsSimMode(false);
    } else {
      setQuestions(shuffleQuestionOptions(simQuestions));
      setAnswers(new Array(simQuestions.length).fill(null));
      setCurrentQuestionIndex(0);
      setShowFeedback(false);
      const initialTime = simQuestions.length * 60;
      setTimeLeft(initialTime); // 60 seconds per question
      
      const shuffled = shuffleQuestionOptions(simQuestions);
      setQuestions(shuffled);
      const initialAnswers = new Array(shuffled.length).fill(null);
      setAnswers(initialAnswers);

      // Update activeQuiz
      setProgress(prev => ({
        ...prev,
        activeQuiz: {
          topicId: 'sim',
          currentIndex: 0,
          questions: shuffled,
          answers: initialAnswers,
          mode: 'sim',
          targetCount: shuffled.length,
          isSimMode: true,
          isSurvivalMode: false,
          isStudyMode: false,
          timeLeft: initialTime
        }
      }));
    }
    setIsLoading(false);
  };

  const startSurvivalMode = async () => {
    if (isSurvivalMode && !isSimMode && questions.length > 0 && currentView !== 'results') {
      playAudio('laugh');
      setCurrentView('quiz');
      return;
    }

    playAudio('laugh');
    setIsLoading(true);
    setIsSimMode(false);
    setIsSurvivalMode(true);
    setCurrentView('quiz');
    
    const allSeeds = ALL_PRELOADED_QUESTIONS;
    const allCached = Object.values(cachedQuestions).flat() as Question[];
    const simQuestions = [...allSeeds, ...allCached].sort(() => Math.random() - 0.5);
    
    if (simQuestions.length < 10) {
      alert("Necesitas acumular más preguntas para el Modo Supervivencia.");
      setCurrentView('lobby');
      setIsSurvivalMode(false);
    } else {
      const shuffled = shuffleQuestionOptions(simQuestions);
      setQuestions(shuffled);
      const initialAnswers = new Array(shuffled.length).fill(null);
      setAnswers(initialAnswers);
      setCurrentQuestionIndex(0);
      setShowFeedback(false);
      setTimeLeft(0); // No global timer, just death on wrong

      // Update activeQuiz
      setProgress(prev => ({
        ...prev,
        activeQuiz: {
          topicId: 'survival',
          currentIndex: 0,
          questions: shuffled,
          answers: initialAnswers,
          mode: 'survival',
          targetCount: shuffled.length,
          isSimMode: false,
          isSurvivalMode: true,
          isStudyMode: false
        }
      }));
    }
    setIsLoading(false);
  };

  // Timer logic for Sim Mode
  useEffect(() => {
    let timer: any;
    if (currentView === 'quiz' && isSimMode && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isSimMode && currentView === 'quiz') {
      finishQuiz();
    }
    return () => clearInterval(timer);
  }, [currentView, isSimMode, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const updateSettings = (updates: Partial<typeof INITIAL_PROGRESS.settings>) => {
    playAudio('click');
    setProgress(prev => ({
      ...prev,
      settings: { ...prev.settings, ...updates } as any
    }));
  };

  const resetAllProgress = () => {
    playAudio('wrong');
    setProgress(INITIAL_PROGRESS);
    setCachedQuestions({});
    setBookmarks([]);
    localStorage.removeItem('gastro_quiz_progress');
    localStorage.removeItem('gastro_quiz_cached_questions');
    localStorage.removeItem('gastro_quiz_bookmarks');
    setShowSettings(false);
    setResetDoubleCheck(false);
  };

  const startGlobalBoardSim = async () => {
    playAudio('start');
    setIsLoading(true);
    setIsSimMode(true);
    setIsSurvivalMode(false); // Global Board Simulator uses timer, not survival
    // We will pick 10 random topics from GASTRO_TOPICS and generate 2 questions each?
    // Since AI generation per topic takes time, we will use seedQuestions.
    // In a real scenario we'd use generateQuestions with a generalized topic, or batch requests.
    // For now, let's use all seed questions mixed, or generate a batch on the fly.
    try {
      const mixedQuestions = ALL_PRELOADED_QUESTIONS
        .sort(() => 0.5 - Math.random())
        .slice(0, 30);
      
      const shuffled = shuffleQuestionOptions(mixedQuestions);
      setQuestions(shuffled);
      const initialAnswers = new Array(mixedQuestions.length).fill(null);
      setAnswers(initialAnswers);
      setCurrentQuestionIndex(0);
      setShowFeedback(false);
      const initialTime = mixedQuestions.length * 60;
      setTimeLeft(initialTime); // 1 minute per question
      setSelectedTopic({ id: 'board_sim', name: 'Simulacro Clínico Global (Board Exam)', description: 'Simulación de 30 preguntas que abarcan todas las áreas. Condición estricta de tiempo.' });
      setCurrentView('quiz');

      // Update activeQuiz
      setProgress(prev => ({
        ...prev,
        activeQuiz: {
          topicId: 'board_sim',
          currentIndex: 0,
          questions: shuffled,
          answers: initialAnswers,
          mode: 'sim',
          targetCount: shuffled.length,
          isSimMode: true,
          isSurvivalMode: false,
          isStudyMode: false,
          timeLeft: initialTime
        }
      }));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const startQuiz = async (topic: Topic) => {
    const isMasterclass = ['perfil_hepatico', 'eii_avanzada'].includes(topic.id);
    
    // Si es masterclass y no hemos visto la teoría aún en esta sesión (o forzamos verla)
    if (isMasterclass && !isMasterclassRoute && currentView !== 'quiz') {
      setSelectedTopic(topic);
      setIsMasterclassRoute(true);
      return;
    }

    // Intentar reanudar si es el mismo tema y no hemos terminado (y el conteo coincide)
    if (!isSimMode && !isSurvivalMode && selectedTopic?.id === topic.id && questions.length === targetQuestionCount && currentView !== 'results') {
      playAudio('start');
      setCurrentView('quiz');
      return;
    }

    playAudio('start');
    setSelectedTopic(topic);
    setIsSimMode(false);
    setIsSurvivalMode(false);
    setIsLoading(true);
    setCurrentView('quiz');
    
    // 1. Get hardcoded seeds
    const seeds = ALL_PRELOADED_QUESTIONS.filter(q => q.topic === topic.id);
    
    // 2. Get previously AI-generated questions for this topic
    const cached = cachedQuestions[topic.id] || [];
    
    // Combine them
    const existingQuestions = [...seeds, ...cached];

    // Identify previously failed ones for reinforcement
    const failedQuestions = existingQuestions.filter(q => progress.reviewIds.includes(q.id));

    try {
      let currentPool = [...existingQuestions];

      // If we don't have enough, try to generate to reach the target
      // We'll give it up to 2 attempts if the AI returns too few
      let attempts = 0;
      while (currentPool.length < targetQuestionCount && attempts < 2) {
        const needed = targetQuestionCount - currentPool.length;
        const newAIQuestions = await generateQuestions(topic.id, topic.name, selectedDifficulty, needed, existingQuestions, failedQuestions);
        
        if (newAIQuestions && newAIQuestions.length > 0) {
          // Save to cache
          setCachedQuestions(prev => ({
            ...prev,
            [topic.id]: [...(prev[topic.id] || []), ...newAIQuestions]
          }));
          
          currentPool = [...currentPool, ...newAIQuestions];
        }
        attempts++;
        if (newAIQuestions.length >= needed) break; // AI fulfilled the request
      }
      
      // Shuffle and pick the target count
      const finalQuestions = currentPool.sort(() => Math.random() - 0.5).slice(0, targetQuestionCount);
      
      if (finalQuestions.length > 0) {
        const shuffled = shuffleQuestionOptions(finalQuestions);
        setQuestions(shuffled);
        const initialAnswers = new Array(shuffled.length).fill(null);
        setAnswers(initialAnswers);
        setCurrentQuestionIndex(0);
        setShowFeedback(false);
        setRevealedOral(false);

        // Update activeQuiz
        setProgress(prev => ({
          ...prev,
          activeQuiz: {
            topicId: topic.id,
            currentIndex: 0,
            questions: shuffled,
            answers: initialAnswers,
            mode: 'normal',
            targetCount: shuffled.length,
            isSimMode: false,
            isSurvivalMode: false,
            isStudyMode: isStudyMode
          }
        }));
      } else {
        throw new Error("No hay preguntas disponibles");
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.message === "MISSING_API_KEY") {
        alert("Falta la variable de entorno GEMINI_API_KEY. Configúrala en los ajustes para que la IA funcione.");
      } else {
        // More descriptive error
        console.warn("La generación por IA falló o está saturada. Usando banco de semillas por defecto.");
      }
      
      if (existingQuestions.length > 0) {
        const fallback = [...existingQuestions].sort(() => Math.random() - 0.5).slice(0, targetQuestionCount);
        setQuestions(shuffleQuestionOptions(fallback));
        setAnswers(new Array(fallback.length).fill(null));
        setCurrentQuestionIndex(0);
        setShowFeedback(false);
        setRevealedOral(false);
      } else {
        setCurrentView('lobby');
        const errorMsg = error instanceof Error ? error.message : "Desconocido";
        alert(`Error al generar: ${errorMsg}\n\nEl sistema de IA está experimentando alta demanda o hay un problema de cuota. Por favor, intenta de nuevo en unos minutos o verifica tu API Key.`);
      }
    }
    setIsLoading(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (showFeedback || isReviewingMode) return;
    const isActiveQuiz = progress.activeQuiz && currentView === 'quiz';
    const isAnsCorrect = index === questions[currentQuestionIndex].correctIndex;
    
    if (isStudyMode) {
      if (isAnsCorrect) {
        playAudio('correct');
        setCurrentStreak(prev => prev + 1);
      } else {
        playAudio('wrong');
        setCurrentStreak(0);
      }
    }
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);

    // Sync activeQuiz answers
    if (isActiveQuiz) {
      setProgress(prev => {
        if (!prev.activeQuiz) return prev;
        return {
          ...prev,
          activeQuiz: { ...prev.activeQuiz, answers: newAnswers }
        };
      });
    }
    
    if (isStudyMode) {
      setShowFeedback(true);
      if (isAnsCorrect) {
        unlockAchievement('first_win');
        if (progress.streak + 1 >= 5) unlockAchievement('streak_5');
        if (progress.totalCorrect + 1 >= 20 && (progress.totalCorrect + 1) / (progress.totalAttempted + 1) >= 0.9) unlockAchievement('master_endo');
      } else {
        // Track missed question for "Corrupted Data" review
        const qId = questions[currentQuestionIndex].id;
        if (qId && !progress.reviewIds.includes(qId)) {
          setProgress(prev => ({
            ...prev,
            reviewIds: [...prev.reviewIds, qId]
          }));
        }
      }
    } else {
      const nextIdx = currentQuestionIndex + 1;
      // Not study mode (Exam mode), go to next automatically without feedback
      if (nextIdx < questions.length) {
        setTimeout(() => {
          moveToQuestion(nextIdx);
        }, 150);
      } else {
        setTimeout(() => finishQuiz(), 150);
      }
    }
  };

  const nextQuestion = async () => {
    // If Survival Mode and answered wrong, game over
    if (isSurvivalMode && answers[currentQuestionIndex] !== questions[currentQuestionIndex].correctIndex) {
      finishQuiz();
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      const nextIdx = currentQuestionIndex + 1;
      moveToQuestion(nextIdx);
    } else {
      finishQuiz();
    }
  };

  const moveToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    if (!isReviewingMode) {
      setShowFeedback(false);
    }
    setRevealedOral(false);
    
    // Critical: Update activeQuiz in progress to ensure session persistence
    setProgress(prev => {
      if (!prev.activeQuiz || currentView !== 'quiz') return prev;
      return {
        ...prev,
        activeQuiz: { ...prev.activeQuiz, currentIndex: index }
      };
    });
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const startReviewMode = () => {
    setIsReviewingMode(true);
    setCurrentQuestionIndex(0);
    setShowFeedback(true);
    setCurrentView('quiz');
  };

  const finishQuiz = () => {
    // Clear activeQuiz
    setProgress(prev => ({ ...prev, activeQuiz: undefined }));

    // Update progress
    const correctCount = answers.filter((ans, idx) => ans === questions[idx].correctIndex).length;
    const attemptedCount = questions.length;
    
    const newByTopic = { ...progress.byTopic };
    const topicId = selectedTopic!.id;
    const existing = newByTopic[topicId] || { attempted: 0, correct: 0 };
    newByTopic[topicId] = {
      attempted: Math.min(20, existing.attempted + attemptedCount), // Cap at 20 for completion
      correct: existing.correct + correctCount
    };

    // If total attempted across all sessions for this topic hits 20, they "completed" it effectively for the bar
    // but we still track total for accuracy. Actually, user says 100% at 20.
    // Let's not cap it for the logic, but for the UI.
    newByTopic[topicId] = {
      attempted: existing.attempted + attemptedCount,
      correct: existing.correct + correctCount
    };

    // Weakness detection: if success rate < 70%
    const currentRate = (newByTopic[topicId].correct / newByTopic[topicId].attempted);
    let newWeakTopics = [...progress.weakTopics];
    if (currentRate < 0.7 && !newWeakTopics.includes(topicId)) {
      newWeakTopics.push(topicId);
    } else if (currentRate >= 0.7 && newWeakTopics.includes(topicId)) {
      newWeakTopics = newWeakTopics.filter(id => id !== topicId);
    }

    // Streak logic: increment if all correct, otherwise reset
    const newStreak = correctCount === questions.length ? progress.streak + 1 : 0;

    // Daily Mission Update: 10 questions per mission
    const missionUpdatedRecord = { ...progress };
    const today = new Date().toISOString().split('T')[0];
    const lastDate = progress.lastMissionDate?.split('T')[0];
    let missionProgress = progress.missionProgress || 0;
    
    if (today !== lastDate) {
      missionProgress = Math.min(10, attemptedCount);
    } else {
      missionProgress = Math.min(10, missionProgress + attemptedCount);
    }

    setProgress(prev => ({
      ...prev,
      totalAttempted: prev.totalAttempted + attemptedCount,
      totalCorrect: prev.totalCorrect + correctCount,
      byTopic: newByTopic,
      weakTopics: newWeakTopics,
      streak: newStreak,
      lastSession: new Date().toISOString(),
      lastMissionDate: today,
      missionProgress: missionProgress
    }));

    setCurrentView('results');
  };

  const resetTopicProgress = (topicId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    playAudio('click');
    const confirmed = window.confirm(`¿Seguro que deseas resetear el progreso de este tema? Las preguntas marcadas (bookmarks) permanecerán intactas.`);
    if (confirmed) {
      setProgress(prev => {
        const newByTopic = { ...prev.byTopic };
        delete newByTopic[topicId];
        return {
          ...prev,
          byTopic: newByTopic
        };
      });
    }
  };

  const upgradeDifficultyMidQuiz = async () => {
    const levels: Difficulty[] = ['Fellow', 'Staff', 'Subspecialist'];
    const currentIndex = levels.indexOf(selectedDifficulty);
    
    if (currentIndex < levels.length - 1) {
      const nextLevel = levels[currentIndex + 1];
      setSelectedDifficulty(nextLevel);
      playAudio('magic');

      if (selectedTopic && currentView === 'quiz') {
        setIsLoading(true);
        try {
          const remainingCount = questions.length - (currentQuestionIndex + 1);
          if (remainingCount > 0) {
            let collectedNew = [];
            let attempts = 0;
            while (collectedNew.length < remainingCount && attempts < 2) {
              const neededNow = remainingCount - collectedNew.length;
              const allKnownForTopic = [...ALL_PRELOADED_QUESTIONS.filter(q => q.topic === selectedTopic.id), ...(cachedQuestions[selectedTopic.id] || [])];
              const failedQuestions = allKnownForTopic.filter(q => progress.reviewIds.includes(q.id));
              const nextQuestionsBatch = await generateQuestions(selectedTopic.id, selectedTopic.name, nextLevel, neededNow, allKnownForTopic, failedQuestions);
              if (nextQuestionsBatch && nextQuestionsBatch.length > 0) {
                collectedNew = [...collectedNew, ...nextQuestionsBatch];
                // Also save to cache for later
                setCachedQuestions(prev => ({
                  ...prev,
                  [selectedTopic.id]: [...(prev[selectedTopic.id] || []), ...nextQuestionsBatch]
                }));
              }
              attempts++;
              if (nextQuestionsBatch.length >= neededNow) break;
            }

            if (collectedNew.length > 0) {
              setQuestions(prev => {
                const updated = [...prev];
                // Replace remaining questions with higher difficulty ones (limit to original count if we got more)
                const toInsert = collectedNew.slice(0, remainingCount);
                updated.splice(currentQuestionIndex + 1, remainingCount, ...toInsert);
                return updated;
              });
            }
          }
        } catch (error) {
          console.error("Failed to upscale difficulty:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const resumeQuiz = () => {
    const active = progress.activeQuiz;
    if (!active) return;
    
    playAudio('start');
    setQuestions(active.questions);
    setAnswers(active.answers);
    setCurrentQuestionIndex(active.currentIndex);
    setIsSimMode(active.isSimMode);
    setIsSurvivalMode(active.isSurvivalMode);
    setIsStudyMode(active.isStudyMode ?? true);
    setTimeLeft(active.timeLeft || 0);
    
    const topic = GASTRO_TOPICS.find(t => t.id === active.topicId);
    if (topic) {
       setSelectedTopic(topic);
    } else if (active.topicId === 'board_sim') {
       setSelectedTopic({ id: 'board_sim', name: 'Simulacro Clínico Global (Board Exam)', description: 'Recuperado de sesión anterior.' });
    }
    
    setCurrentView('quiz');
  };

  const quitQuiz = () => {
    playAudio('click');
    setCurrentView('lobby');
  };

  // --- VIEWS ---
  
  if (isMasterclassRoute && selectedTopic) {
    return (
      <div className="min-h-screen bg-tron-bg">
        <MasterclassViewer 
          topicId={selectedTopic.id} 
          onComplete={() => {
            setIsMasterclassRoute(false);
            // After masterclass theory, start the quiz
            startQuiz(selectedTopic);
          }}
          onExit={() => setIsMasterclassRoute(false)}
        />
      </div>
    );
  }

  if (currentView === 'lobby') {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12 min-h-screen flex flex-col border-x-0 sm:border-x-4 border-tron-cyan/10 relative">
        <IntroOverlay />
        <AchievementNotification />

        {/* Device Scaling Selector */}
        <div className="absolute top-2 right-4 sm:right-6 lg:right-12 z-50 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-tron-cyan/20 p-1 rounded-full text-[9px] uppercase font-bold tracking-tighter">
          <button 
            onClick={() => { playAudio('click'); setScalingMode('auto'); }}
            className={cn("p-1.5 px-2 rounded-full flex items-center gap-1 transition-colors", scalingMode === 'auto' ? "bg-tron-cyan text-black" : "text-white/40 hover:text-white/70")}
            title="Auto-detección"
          >
            <Cpu size={12} /> <span className="hidden min-[380px]:inline">Auto</span>
          </button>
          <button 
            onClick={() => { playAudio('click'); setScalingMode('phone'); }}
            className={cn("p-1.5 px-2 rounded-full flex items-center gap-1 transition-colors", scalingMode === 'phone' ? "bg-tron-cyan text-black" : "text-white/40 hover:text-white/70")}
            title="Smartphone Mode"
          >
            <Smartphone size={12} /> <span className="hidden min-[380px]:inline">Móvil</span>
          </button>
          <button 
            onClick={() => { playAudio('click'); setScalingMode('tablet'); }}
            className={cn("p-1.5 px-2 rounded-full flex items-center gap-1 transition-colors", scalingMode === 'tablet' ? "bg-tron-cyan text-black" : "text-white/40 hover:text-white/70")}
            title="iPad / Tablet Mode"
          >
            <Tablet size={12} /> <span className="hidden min-[380px]:inline">iPad</span>
          </button>
          <button 
            onClick={() => { playAudio('click'); setScalingMode('pc'); }}
            className={cn("p-1.5 px-2 rounded-full flex items-center gap-1 transition-colors", scalingMode === 'pc' ? "bg-tron-cyan text-black" : "text-white/40 hover:text-white/70")}
            title="Desktop Mode"
          >
            <Monitor size={12} /> <span className="hidden min-[380px]:inline">PC</span>
          </button>
        </div>

        {progress.activeQuiz && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-tron-yellow/10 border-2 border-tron-yellow/50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
          >
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tron-yellow/20 flex items-center justify-center text-tron-yellow animate-pulse">
                   <RotateCcw size={24} />
                </div>
                <div className="text-left">
                   <h3 className="text-tron-yellow font-black uppercase tracking-widest text-sm">Sesión Interrumpida</h3>
                   <p className="text-white/60 text-xs text-left">Tienes un protocolo activo en {
                     progress.activeQuiz?.topicId === 'survival' ? 'Modo Supervivencia' :
                     progress.activeQuiz?.topicId === 'board_sim' ? 'Simulacro Global' :
                     GASTRO_TOPICS.find(t => t.id === progress.activeQuiz?.topicId)?.name || 'Módulo Desconocido'
                   }</p>
                   <p className="text-[10px] text-white/40 font-mono mt-1 text-left">PROGRESO: {progress.activeQuiz.currentIndex + 1} / {progress.activeQuiz.targetCount}</p>
                </div>
             </div>
             <div className="flex gap-3 w-full md:w-auto">
                <GlowButton size="sm" variant="outline" onClick={() => setProgress(prev => ({ ...prev, activeQuiz: undefined }))}>
                   Descartar
                </GlowButton>
                <GlowButton size="sm" onClick={resumeQuiz}>
                   Reanudar Protocolo
                </GlowButton>
             </div>
          </motion.div>
        )}

        {/* Floating Chat FAB */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, shadow: "0 0 20px rgba(0,242,255,0.6)" }}
          onClick={() => { playAudio('magic'); setCurrentView('chat'); }}
          className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-tron-cyan rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,242,255,0.4)] border-4 border-white/20 group"
        >
          <MessageSquare size={30} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-10 right-0 bg-tron-cyan text-black text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Consultar Oráculo
          </div>
        </motion.button>
        
        <AnimatePresence>
          {showSettings && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-tron-card border border-tron-cyan/30 rounded-2xl w-full max-w-md shadow-[0_0_50px_rgba(0,242,255,0.1)] overflow-hidden"
              >
                <div className="flex justify-between items-center p-6 border-b border-tron-cyan/20">
                  <h2 className="text-xl font-display font-black text-tron-cyan uppercase tracking-widest flex items-center gap-3">
                    <Settings size={20} /> Configuración del Sistema
                  </h2>
                  <button onClick={() => { playAudio('click'); setShowSettings(false); setResetDoubleCheck(false); }} className="text-white/40 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-[10px] text-white/50 uppercase font-black tracking-[0.2em] flex items-center gap-2 mb-4">
                      <Palette size={14} /> Protocolo Visual
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {(['tron', 'neon', 'hacker'] as const).map(th => (
                        <button
                          key={th}
                          onClick={() => updateSettings({ theme: th })}
                          className={cn(
                            "py-3 px-2 rounded border uppercase text-[10px] font-bold tracking-widest transition-all",
                            progress.settings?.theme === th 
                              ? "bg-tron-cyan/10 border-tron-cyan text-tron-cyan shadow-[0_0_15px_rgba(0,242,255,0.2)]" 
                              : "bg-black/40 border-white/10 text-white/40 hover:border-white/30"
                          )}
                        >
                          {th}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[10px] text-white/50 uppercase font-black tracking-[0.2em] flex items-center gap-2 mb-4">
                      <Volume2 size={14} /> Feedback Auditivo
                    </h3>
                    <button
                      onClick={() => updateSettings({ sound: !progress.settings?.sound })}
                      className="w-full py-4 border border-white/10 rounded flex items-center justify-between px-6 bg-black/20 hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm font-bold uppercase text-white/80">Sensor Acústico</span>
                      {progress.settings?.sound ? <Volume2 className="text-tron-cyan" /> : <VolumeX className="text-white/30" />}
                    </button>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-red-500/20">
                    <h3 className="text-[10px] text-red-500/50 uppercase font-black tracking-[0.2em] flex items-center gap-2 mb-4">
                      <AlertTriangle size={14} /> Zona de Riesgo
                    </h3>
                    
                    {!resetDoubleCheck ? (
                      <button
                        onClick={() => { playAudio('wrong'); setResetDoubleCheck(true); }}
                        className="w-full py-4 border border-red-500/30 rounded flex items-center justify-center gap-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold uppercase text-sm tracking-widest transition-all"
                      >
                        <Trash2 size={18} /> Purgar Datos
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-[10px] text-red-400 font-mono text-center uppercase">¿Confirmas la aniquilación total de tu progreso?</p>
                        <div className="flex gap-3">
                           <button
                              onClick={() => { playAudio('click'); setResetDoubleCheck(false); }}
                              className="flex-1 py-3 border border-white/20 rounded text-white/60 hover:text-white uppercase text-xs font-bold transition-all"
                            >
                              Abortar
                            </button>
                            <button
                              onClick={resetAllProgress}
                              className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white border border-red-500 rounded uppercase text-xs font-black shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all"
                            >
                              Confirmar Purga
                            </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <header className="flex justify-between items-center mb-12 border-b border-tron-cyan/30 pb-6 relative z-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-glow-cyan text-tron-cyan tracking-tighter flex items-center gap-3"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-10 h-10 sm:w-16 sm:h-16 text-tron-cyan shrink-0 drop-shadow-[0_0_15px_rgba(0,242,255,0.8)] animate-[spin_8s_linear_infinite]"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" strokeDasharray="16 4" />
                <circle cx="12" cy="12" r="6" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.7" />
                <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.9" />
              </svg>
              <div className="flex flex-col leading-[0.8] items-start font-black tracking-tighter text-tron-cyan text-glow-cyan">
                <span>GAS-</span>
                <span>TRON</span>
              </div>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-tron-yellow ml-2 md:ml-4 uppercase opacity-70 self-end mb-2 hidden sm:inline-block">
                Fellowship Protocol
              </span>
            </motion.h1>
            <p className="text-cyan-200/60 font-medium uppercase tracking-[0.2em] mt-2 italic text-sm">
              Especialidad Médica & Perlas Fisiopatológicas
            </p>
          </div>
            <div className="flex gap-2 sm:gap-4 items-center">
              <button 
                onClick={() => { playAudio('click'); setShowSettings(true); }}
                className="flex items-center justify-center h-9 w-9 border-2 border-tron-cyan/30 rounded-lg text-tron-cyan hover:bg-tron-cyan/10 hover:border-tron-cyan hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all"
                title="Configuración"
              >
                <Settings size={16} />
              </button>
              <GlowButton 
                variant="outline"
                onClick={() => setCurrentView('bookmarks')}
                className="h-9 px-3 sm:px-4 text-[10px] uppercase font-bold tracking-widest flex flex-row items-center justify-center !py-0"
              >
                <ShieldCheck size={14} className="mr-1 sm:mr-2" /> <span className="hidden sm:inline">Mis Marcadores</span><span className="sm:hidden">Marcadores</span> ({bookmarks.length})
              </GlowButton>
              <GlowButton 
                variant="outline"
                onClick={() => setCurrentView('pearls')}
                className="h-9 px-3 sm:px-4 text-[10px] uppercase font-bold tracking-widest flex flex-row items-center justify-center !py-0"
              >
                <Lightbulb size={14} className="mr-1 sm:mr-2" /> <span className="hidden sm:inline">Galería de Perlas</span><span className="sm:hidden">Perlas</span>
              </GlowButton>
              <div className="hidden md:flex gap-8">
                <div className="text-right">
                  <p className="text-[10px] text-tron-yellow uppercase tracking-widest font-bold mb-1">Rango Actual</p>
                  <p className={cn("text-xl font-mono font-black italic", userRank.color)}>
                    {userRank.name}
                  </p>
                </div>
                <div className="w-[1px] bg-tron-cyan/20"></div>
                <div className="text-right">
                  <p className="text-[10px] text-tron-yellow uppercase tracking-widest font-bold mb-1">Total Acumulado</p>
                  <p className="text-4xl font-mono text-white leading-none">
                    {stats.totalXp} <span className="text-xs text-tron-cyan">XP</span>
                  </p>
                </div>
                <div className="w-[1px] bg-tron-cyan/20"></div>
                <div className="text-right">
                  <p className="text-[10px] text-tron-yellow uppercase tracking-widest font-bold mb-1">Rendimiento</p>
                  <p className="text-4xl font-mono text-white leading-none">
                    {stats.accuracy}%
                  </p>
                </div>
              </div>
            </div>
        </header>

        <main className="grid grid-cols-12 gap-8 flex-1">
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-tron-aside border border-tron-cyan/20 p-5 rounded-xl">
              <p className="text-[10px] text-tron-cyan uppercase font-bold mb-4 tracking-widest flex items-center gap-2">
                <LayoutDashboard size={12} /> Análisis de Sectores
              </p>
              <div className="grid grid-cols-6 lg:grid-cols-4 gap-2">
                {GASTRO_TOPICS.map(topic => {
                  const tStats = progress.byTopic[topic.id] || { attempted: 0, correct: 0 };
                  const tPercent = tStats.attempted > 0 ? (tStats.correct / tStats.attempted) * 100 : 0;
                  const status = tPercent >= 80 ? 'stable' : tPercent >= 50 ? 'warning' : tStats.attempted > 0 ? 'critical' : 'unknown';
                  
                  return (
                    <div 
                      key={topic.id}
                      className={cn(
                        "h-8 border flex items-center justify-center relative group transition-all",
                        status === 'stable' ? "border-tron-cyan/40 bg-tron-cyan/10" :
                        status === 'warning' ? "border-tron-yellow/40 bg-tron-yellow/10" :
                        status === 'critical' ? "border-tron-sub/40 bg-tron-sub/5 animate-pulse" :
                        "border-white/5 bg-white/[0.02]"
                      )}
                      title={`${topic.name}: ${Math.round(tPercent)}%`}
                    >
                       <span className="text-[7px] text-white/30 font-mono tracking-tighter uppercase px-1 truncate">
                         {topic.id.slice(0, 3)}
                       </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-tron-aside border border-tron-cyan/20 p-5 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                  <p className="text-[10px] text-tron-cyan uppercase font-bold tracking-widest flex items-center gap-2">
                    <Zap size={14} /> Misión Diaria
                  </p>
                  <span className="text-[10px] text-white/40 font-mono">{(progress.missionProgress || 0)}/10</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, ((progress.missionProgress || 0) / 10) * 100)}%` }}
                    className="h-full bg-tron-cyan shadow-[0_0_10px_cyan]"
                  />
              </div>
              <p className="mt-3 text-[8px] text-white/40 font-serif italic uppercase tracking-wider leading-relaxed">
                Sincroniza 10 protocolos hoy para mantener la integridad.
              </p>
            </div>

            <div className="bg-tron-aside border border-tron-cyan/20 p-5 rounded-xl">
              <p className="text-[10px] text-tron-cyan uppercase font-bold mb-4 tracking-widest flex items-center gap-2">
                <Brain size={12} /> ADN de Rendimiento
              </p>
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded border border-white/5">
                  <p className="text-[9px] text-white/40 uppercase mb-1 font-bold">Punto Débil Crítico</p>
                  <p className={cn(
                    "text-xs font-bold truncate",
                    stats.accuracy < 50 ? "text-tron-yellow" : "text-tron-sub"
                  )}>
                    {stats.worstTopic}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-white/5 rounded">
                    <p className="text-[8px] text-white/40 uppercase">Precisión</p>
                    <p className="text-lg font-mono text-tron-cyan">{stats.accuracy}%</p>
                  </div>
                  <div className="p-2 bg-white/5 rounded">
                    <p className="text-[8px] text-white/40 uppercase">Racha</p>
                    <p className="text-lg font-mono text-tron-yellow">{progress.streak} <span className="text-[8px]">WIN</span></p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mt-2">Dificultad de Sesión</p>
                  {(['Fellow', 'Staff', 'Subspecialist'] as Difficulty[]).map(lvl => (
                    <button 
                      key={lvl}
                      onClick={() => setSelectedDifficulty(lvl)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-[10px] border-l-2 transition-all uppercase tracking-widest font-bold",
                        selectedDifficulty === lvl 
                          ? "bg-tron-cyan/10 border-tron-cyan text-tron-cyan"
                          : "border-transparent text-white/20 hover:bg-white/5 hover:text-white/40"
                      )}
                    >
                      {lvl === 'Subspecialist' ? 'Nivel Board (Ultra)' : lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-tron-aside border border-tron-yellow/20 p-5 rounded-xl">
               <p className="text-[10px] text-tron-yellow uppercase font-bold mb-4 tracking-widest flex items-center gap-2">
                 <Trophy size={12} /> Logros
               </p>
               <div className="flex flex-wrap gap-2">
                 <div className={cn("p-2 rounded border", progress.achievements?.includes('first_win') ? "border-tron-yellow text-tron-yellow bg-tron-yellow/10 shadow-[0_0_10px_rgba(255,184,0,0.3)]" : "border-white/10 text-white/30 bg-white/5 opacity-50 filter grayscale")} title="Primer Diagnóstico">
                    <Activity size={16} />
                 </div>
                 <div className={cn("p-2 rounded border", progress.achievements?.includes('streak_5') ? "border-tron-cyan text-tron-cyan bg-tron-cyan/10 shadow-[0_0_10px_rgba(0,242,255,0.3)]" : "border-white/10 text-white/30 bg-white/5 opacity-50 filter grayscale")} title="Racha Caliente">
                    <Zap size={16} />
                 </div>
                 <div className={cn("p-2 rounded border", progress.achievements?.includes('master_endo') ? "border-tron-sub text-tron-sub bg-tron-sub/10 shadow-[0_0_10px_rgba(255,68,68,0.3)]" : "border-white/10 text-white/30 bg-white/5 opacity-50 filter grayscale")} title="Maestro Endoscopista">
                    <Camera size={16} />
                 </div>
                 <div className={cn("p-2 rounded border", progress.achievements?.includes('survival_survivor') ? "border-white text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "border-white/10 text-white/30 bg-white/5 opacity-50 filter grayscale")} title="Sobreviviente">
                    <Trophy size={16} />
                 </div>
               </div>
            </div>

            {progress.weakTopics.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-5 rounded-xl border border-tron-sub/20 bg-tron-sub/5"
              >
                <p className="text-[10px] text-tron-sub uppercase font-bold mb-2 tracking-widest flex items-center gap-2">
                  <AlertCircle size={12} /> Debilidad Detectada
                </p>
                <p className="text-xs text-white/80 leading-relaxed font-serif italic">
                  Refuerza los módulos con bajo rendimiento para desbloquear insignias de especialidad.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {progress.weakTopics.slice(0, 3).map(id => (
                    <span key={id} className="text-[9px] bg-tron-sub/20 text-tron-sub px-1 rounded border border-tron-sub/30">
                      {GASTRO_TOPICS.find(t => t.id === id)?.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="bg-tron-aside border border-tron-cyan/10 p-5 rounded-xl">
              <p className="text-[10px] text-white/40 uppercase font-bold mb-4 tracking-widest">Protocolos de Estudio</p>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentView('oral_sim')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'oral_sim' 
                      ? "bg-tron-sub/20 border-tron-sub text-tron-sub" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Mic size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Simulador Board Oral</span>
                </button>
                <button 
                  onClick={() => setCurrentView('pearls')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'pearls' 
                      ? "bg-tron-cyan/20 border-tron-cyan text-tron-cyan" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Target size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Galería de Perlas</span>
                </button>
                <button 
                  onClick={() => setCurrentView('bookmarks')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'bookmarks' 
                      ? "bg-tron-yellow/20 border-tron-yellow text-tron-yellow" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <ShieldCheck size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Casos Guardados</span>
                </button>
                <button 
                  onClick={() => setCurrentView('archive')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'archive' 
                      ? "bg-tron-sub/20 border-tron-sub text-tron-sub shadow-[0_0_15px_rgba(255,68,68,0.3)]" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Database size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Memory Core (Corrupto)</span>
                </button>
                <button 
                  onClick={() => setCurrentView('flashcards')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'flashcards' 
                      ? "bg-tron-yellow/20 border-tron-yellow text-tron-yellow" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Brain size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Memoria (Flashcards)</span>
                </button>
                <button 
                  onClick={() => setCurrentView('atlas')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'atlas' 
                      ? "bg-tron-cyan/20 border-tron-cyan text-tron-cyan" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <LayoutDashboard size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Atlas Visual</span>
                </button>
                <button 
                  onClick={() => setCurrentView('cases')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'cases' 
                      ? "bg-tron-cyan/20 border-tron-cyan text-tron-cyan" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Activity size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Casos Ramificados</span>
                </button>
                <button 
                  onClick={() => setCurrentView('ranking')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'ranking' 
                      ? "bg-tron-yellow/20 border-tron-yellow text-tron-yellow" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Trophy size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">La Red (Ranking)</span>
                </button>
                <button 
                  onClick={() => setCurrentView('profile')}
                  className={cn(
                    "w-full p-3 rounded flex items-center gap-3 transition-all border",
                    currentView === 'profile' 
                      ? "bg-tron-cyan/20 border-tron-cyan text-tron-cyan" 
                      : "bg-white/5 border-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <User size={18} />
                  <span className="text-xs uppercase font-bold tracking-tight">Disco de Identidad</span>
                </button>
              </div>
            </div>

            <div className="bg-tron-aside border border-tron-cyan/10 p-5 rounded-xl">
                {GASTRO_TOPICS.map(topic => {
                  const stats = progress.byTopic[topic.id] || { attempted: 0, correct: 0 };
                  const percent = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
                  return (
                    <div key={topic.id} className="space-y-1">
                      <div className="flex justify-between text-[9px] uppercase tracking-widest font-mono">
                        <span className="truncate w-32">{topic.name}</span>
                        <span className={cn(
                          percent > 75 ? "text-tron-cyan" : percent > 40 ? "text-tron-yellow" : "text-white/20"
                        )}>{percent}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className={cn(
                            "h-full transition-all",
                            percent > 75 ? "bg-tron-cyan" : "bg-tron-yellow"
                          )}
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
          </aside>

          <section className="col-span-12 lg:col-span-9">
             <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <TronCard accentColor="rgba(255,184,0,0.4)" className="p-8 border-2 border-tron-yellow/50 bg-tron-yellow/5 h-full">
                   <p className="text-tron-yellow font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                     <ShieldCheck size={16} /> Protocolo Simulacro
                   </p>
                   <h2 className="text-2xl font-bold text-white mb-2">Time Attack</h2>
                   <p className="text-xs text-white/50 font-serif italic mb-6">
                     Trans-temático. 60s por preg.
                   </p>
                   <GlowButton 
                    variant="staff" 
                    onClick={startSimMode}
                    className="w-full mt-auto"
                   >
                     Iniciar
                   </GlowButton>
                </TronCard>

                <TronCard accentColor="rgba(255,68,68,0.4)" className="p-8 border-2 border-tron-sub/50 bg-tron-sub/5 h-full">
                   <p className="text-tron-sub font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                     <Target size={16} /> Muerte Súbita
                   </p>
                   <h2 className="text-2xl font-bold text-white mb-2">Supervivencia</h2>
                   <p className="text-xs text-white/50 font-serif italic mb-6">
                     Un error y se acaba el protocolo. ¿Cuántas lograrás?
                   </p>
                   <GlowButton 
                    variant="sub" 
                    onClick={startSurvivalMode}
                    className="w-full mt-auto border-tron-sub flex items-center justify-center gap-2"
                   >
                     <Skull size={32} /> Iniciar Protocolo
                   </GlowButton>
                </TronCard>

                <TronCard accentColor="rgba(0,242,255,0.4)" className="p-8 border-2 border-tron-cyan/20 bg-tron-cyan/5 h-full">
                   <p className="text-tron-cyan font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                     <LayoutDashboard size={16} /> Configuración
                   </p>
                   <h2 className="text-xl font-bold text-white mb-6">Carga de Protocolo</h2>
                   
                   <div className="space-y-4">
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Cantidad de Preguntas por Sesión</p>
                      <div className="flex gap-2">
                        {[5, 10, 20, 30].map(count => (
                          <button
                            key={count}
                            onClick={() => {
                              setTargetCount(count);
                              localStorage.setItem('gastro_quiz_target_count', count.toString());
                            }}
                            className={cn(
                              "flex-1 py-2 rounded font-mono text-sm border transition-all",
                              targetQuestionCount === count 
                                ? "bg-tron-cyan/20 border-tron-cyan text-tron-cyan shadow-[0_0_10px_rgba(0,242,255,0.3)]" 
                                : "bg-white/5 border-white/10 text-white/30 hover:bg-white/10"
                            )}
                          >
                            {count}q
                          </button>
                        ))}
                      </div>
                      <p className="text-[9px] text-tron-yellow/60 font-mono italic">
                        * Afecta tanto módulos individuales como simulacros.
                      </p>
                   </div>

                   <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Modo de Evaluación</p>

                      <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 relative overflow-hidden">
                         <div 
                           className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] bg-tron-cyan/20 rounded-lg border border-tron-cyan/50 transition-transform duration-300 pointer-events-none"
                           style={{ transform: !isStudyMode ? 'translateX(0)' : 'translateX(100%)' }}
                         />
                         <button
                           onClick={() => setIsStudyMode(false)}
                           className={cn(
                             "flex-1 py-3 text-xs uppercase font-bold tracking-widest z-10 transition-colors",
                             !isStudyMode ? "text-tron-cyan" : "text-white/40 hover:text-white"
                           )}
                         >
                           Simulacro
                         </button>
                         <button
                           onClick={() => setIsStudyMode(true)}
                           className={cn(
                             "flex-1 py-3 text-xs uppercase font-bold tracking-widest z-10 transition-colors",
                             isStudyMode ? "text-tron-cyan" : "text-white/40 hover:text-white"
                           )}
                         >
                           Modo Estudio
                         </button>
                      </div>

                      <button 
                        onClick={() => setIsOralMode(!isOralMode)}
                        className={cn(
                          "w-full p-4 rounded-xl border flex items-center justify-between transition-all group",
                          isOralMode ? "bg-tron-cyan/10 border-tron-cyan shadow-[0_0_15px_rgba(0,242,255,0.1)]" : "bg-white/5 border-white/10 opacity-60"
                        )}
                      >
                        <div className="flex items-center gap-3 text-left">
                          <Mic size={20} className={isOralMode ? "text-tron-cyan" : "text-white/40"} />
                          <div>
                            <p className={cn("text-xs font-bold uppercase", isOralMode ? "text-tron-cyan" : "text-white")}>Interrogatorio Oral</p>
                            <p className="text-[9px] text-white/30 uppercase">Oculta opciones hasta que verbalices</p>
                          </div>
                        </div>
                        <div className={cn(
                          "w-10 h-5 rounded-full relative transition-colors",
                          isOralMode ? "bg-tron-cyan" : "bg-white/10"
                        )}>
                          <div className={cn(
                            "absolute top-1 w-3 h-3 rounded-full bg-black transition-all",
                            isOralMode ? "right-1" : "left-1"
                          )} />
                        </div>
                      </button>
                    </div>
                </TronCard>
              </div>

              <div className="flex items-center justify-between mb-6 pt-4">
                 <h2 className="text-2xl font-display font-black text-white uppercase tracking-tighter italic">
                   Clínicas Especializadas <span className="text-tron-yellow opacity-50 ml-2">Masterclass</span>
                 </h2>
                 <div className="h-[1px] flex-1 bg-gradient-to-r from-tron-yellow/40 to-transparent ml-6" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {GASTRO_TOPICS.filter(t => ['perfil_hepatico', 'eii_avanzada'].includes(t.id)).map((topic) => {
                const topicStats = progress.byTopic[topic.id] || { attempted: 0, correct: 0 };
                const completionPercent = Math.min(100, Math.round((topicStats.attempted / 20) * 100));
                
                return (
                  <motion.div
                    key={topic.id}
                    whileHover={{ scale: 1.01, x: 5 }}
                    onClick={() => startQuiz(topic)}
                    className="cursor-pointer relative group"
                  >
                    <TronCard 
                      accentColor="rgba(255,184,0,0.3)"
                      className="h-full group hover:border-tron-yellow/50 transition-all flex flex-col border-tron-yellow/20 bg-tron-yellow/[0.02]"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-black text-white group-hover:text-tron-yellow transition-all flex items-center gap-2">
                          <BookOpen size={16} className="text-tron-yellow" />
                          {topic.name}
                        </h3>
                        {topicStats.attempted > 0 && (
                          <button 
                            onClick={(e) => resetTopicProgress(topic.id, e)}
                            className="p-1 text-white/20 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <RotateCcw size={12} />
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-white/60 mt-2 font-serif leading-relaxed italic">
                        {topic.description}
                      </p>
                      <div className="mt-auto pt-6">
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-tron-yellow shadow-[0_0_10px_rgba(255,184,0,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${completionPercent}%` }}
                          />
                        </div>
                      </div>
                    </TronCard>
                  </motion.div>
                );
              })}
              </div>

              <div className="flex items-center justify-between mb-6 pt-4">
                 <h2 className="text-2xl font-display font-black text-white uppercase tracking-tighter italic">
                   Protocolos Base <span className="text-tron-cyan opacity-50 ml-2">[{targetQuestionCount} Preguntas]</span>
                 </h2>
                 <div className="h-[1px] flex-1 bg-gradient-to-r from-tron-cyan/40 to-transparent ml-6" />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 rounded-2xl border-2 border-tron-sub/40 bg-tron-sub/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lightbulb size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-tron-sub text-black text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest shadow-[0_0_10px_rgba(255,68,68,0.5)]">
                      High-Yield Daily Pearl
                    </span>
                    <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest">
                      Protocolo #{new Date().getDate()} | {dailyPearl.topic}
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl text-white font-serif italic leading-tight mb-4 pr-12">
                    "{renderWithAcronyms(dailyPearl.text)}"
                  </p>
                  <div className="flex items-center gap-4 text-[9px] text-tron-sub/60 uppercase font-bold tracking-[0.2em]">
                    <span className="flex items-center gap-1"><FileText size={10} /> Evidencia: {dailyPearl.ref}</span>
                    <button onClick={() => setShowDailyGuide(true)} className="hover:text-tron-sub transition-colors underline decoration-dotted underline-offset-4">Ver Guía Completa</button>
                  </div>
                </div>
              </motion.div>
              
              {/* Specialized Mastery Section: Differential Diagnosis */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-10 p-1 border-2 border-tron-yellow/30 bg-tron-yellow/5 rounded-[2rem] overflow-hidden group hover:border-tron-yellow/60 transition-all cursor-pointer"
                onClick={() => {
                  const topic = GASTRO_TOPICS.find(t => t.id === 'dx_diferencial_mastery');
                  if (topic) startQuiz(topic);
                }}
              >
                <div className="bg-black/60 p-8 rounded-[1.8rem] border border-tron-yellow/20 flex flex-col md:flex-row items-center gap-8 relative">
                   <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                      <Target size={240} className="text-tron-yellow" />
                   </div>
                   
                   <div className="w-20 h-20 rounded-full bg-tron-yellow/10 flex items-center justify-center border-2 border-tron-yellow/40 shadow-[0_0_20px_rgba(255,184,0,0.2)] group-hover:scale-110 transition-transform">
                      <ShieldCheck className="text-tron-yellow" size={40} />
                   </div>
                   
                   <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                         <span className="bg-tron-yellow text-black text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(255,184,0,0.4)]">
                            Nuevo Módulo Mastery
                         </span>
                         <span className="border border-tron-yellow/30 text-tron-yellow text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">
                            {progress.byTopic['dx_diferencial_mastery']?.attempted || 0} Completadas
                         </span>
                      </div>
                      <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2 group-hover:text-tron-yellow transition-colors">
                        Causas de Enf y Dx Diferenciales
                      </h2>
                      <p className="text-white/60 font-serif italic max-w-xl text-sm leading-relaxed">
                        Entrenamiento de alta intensidad enfocado en enumeración de causas frecuentes, fallas terapéuticas y diagnósticos diferenciales de oro. 
                        Incluye 20 retos del Fellow y generación por IA adaptativa.
                      </p>
                   </div>
                   
                   <div className="flex flex-col items-center gap-2">
                       <GlowButton variant="yellow" className="px-10 py-4 text-xs font-black">
                          INICIAR MASTERY
                       </GlowButton>
                       <span className="text-[8px] text-tron-yellow/40 font-mono uppercase tracking-[0.3em] font-bold">Nivel: Expert Fellow</span>
                   </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GASTRO_TOPICS.filter(t => !['perfil_hepatico', 'eii_avanzada', 'dx_diferencial_mastery'].includes(t.id)).map((topic) => {
                const topicStats = progress.byTopic[topic.id] || { attempted: 0, correct: 0 };
                const completionPercent = Math.min(100, Math.round((topicStats.attempted / 20) * 100));
                
                return (
                  <motion.div
                    key={topic.id}
                    whileHover={{ scale: 1.01, x: 5 }}
                    onClick={() => startQuiz(topic)}
                    className="cursor-pointer relative group"
                  >
                    <TronCard 
                      accentColor={progress.weakTopics.includes(topic.id) ? "rgba(255,68,68,0.3)" : "rgba(0,242,255,0.2)"}
                      className="h-full group hover:border-tron-cyan/50 transition-all flex flex-col"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-white group-hover:text-glow-cyan group-hover:text-tron-cyan transition-all">
                          {topic.name}
                        </h3>
                        {topicStats.attempted > 0 && (
                          <button 
                            onClick={(e) => resetTopicProgress(topic.id, e)}
                            className="p-1 text-white/20 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                            title="Resetear Progreso de Tema"
                          >
                            <RotateCcw size={12} />
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-white/40 mt-2 font-serif leading-relaxed italic">
                        {topic.description}
                      </p>
                      
                      <div className="mt-auto pt-6">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-[9px] uppercase tracking-widest text-white/30 font-black">Progreso Módulo</span>
                          <span className="text-[10px] font-mono text-tron-cyan">{completionPercent}%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-tron-cyan shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${completionPercent}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-1">
                          {[1,2,3].map(i => (
                            <div key={i} className={cn(
                              "w-4 h-1 rounded-full",
                              (progress.byTopic[topic.id]?.correct || 0) > i * 10 ? "bg-tron-cyan shadow-[0_0_5px_cyan]" : "bg-white/5"
                            )} />
                          ))}
                        </div>
                        <ChevronRight size={14} className="text-tron-cyan opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </TronCard>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </main>

        <AnimatePresence>
          {showDailyGuide && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowDailyGuide(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl"
              >
                <TronCard accentColor="rgba(0,242,255,0.4)" className="p-8 border-2 border-tron-cyan/30 bg-tron-card/95 relative shadow-[0_0_50px_rgba(0,242,255,0.1)]">
                  <button 
                    onClick={() => setShowDailyGuide(false)}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                  >
                     <RotateCcw size={16} />
                  </button>
                  <div className="flex items-center gap-3 text-tron-cyan mb-6">
                    <Brain size={24} />
                    <h3 className="font-black text-2xl uppercase tracking-tighter">Análisis de Perla</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-2">Contexto Clínico</h4>
                      <p className="text-white/80 font-serif leading-relaxed text-sm p-4 bg-white/5 rounded border border-white/5">
                        {renderWithAcronyms(dailyPearl.question)}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] text-tron-yellow uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                        <Lightbulb size={12} /> Perla Dorada
                      </h4>
                      <p className="text-xl text-tron-yellow font-serif italic border-l-2 border-tron-yellow/50 pl-4 py-1">
                        "{renderWithAcronyms(dailyPearl.text)}"
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-2">Explicación Racional</h4>
                      <div className="text-white/70 font-sans text-sm leading-loose p-5 bg-black/40 rounded border border-white/10 space-y-4">
                        <div className="whitespace-pre-wrap">{renderWithAcronyms(dailyPearl.explanation || "No hay explicación extendida disponible.")}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] uppercase font-bold text-white/40 tracking-widest">
                    <span>{dailyPearl.topic}</span>
                    <span className="flex items-center gap-2"><FileText size={12} className="text-tron-sub" /> {dailyPearl.ref}</span>
                  </div>
                </TronCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-12 flex justify-between items-center py-6 border-t border-white/5">
          <div className="flex gap-3 items-center opacity-30">
             <div className="w-2 h-2 bg-tron-cyan rounded-full animate-pulse shadow-[0_0_10px_cyan]" />
             <span className="text-[10px] font-mono tracking-widest uppercase">Kernel Sync Active | v5.4.1</span>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">Protocolo de Evaluación © 2025</p>
        </footer>
      </div>
    );
  }

  if (currentView === 'quiz') {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-12 min-h-screen py-16 border-x-0 sm:border-x-4 border-tron-cyan/5">
        <AnimatePresence>
          {showStreakMsg && <StreakMotivation />}
        </AnimatePresence>
        <AchievementNotification />
        <header className="flex justify-between items-end mb-12 border-b border-tron-cyan/20 pb-6 text-tron-text">
          <div className="flex items-center gap-6">
            <button 
              onClick={quitQuiz}
              className="p-1 px-4 border border-white/10 rounded hover:bg-white/5 hover:text-tron-yellow transition-colors flex items-center gap-2 group"
            >
              <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" /> 
              <span className="text-[10px] uppercase font-bold tracking-widest">Menú Principal</span>
            </button>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-1">
                <h2 className="text-tron-cyan font-display text-4xl font-black tracking-tighter flex items-center gap-4">
                  {isReviewingMode ? "REVISIÓN" : <StreakLogo streak={currentStreak} />}
                  {isReviewingMode ? "" : selectedTopic?.name} 
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-white/40 font-mono tracking-widest border border-white/10 uppercase">
                    {selectedDifficulty}
                  </span>
                  <span className="text-[10px] font-black text-tron-cyan bg-tron-cyan/10 px-2 py-0.5 rounded border border-tron-cyan/20 uppercase tracking-widest">
                    Pregunta {currentQuestionIndex + 1} de {questions.length}
                  </span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0}%` }}
                  className="h-full bg-tron-cyan shadow-[0_0_10px_#00f2ff]"
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => { playAudio('click'); setShowPearls(!showPearls); }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-tron-yellow/10 hover:border-tron-yellow/30 transition-all group flex items-center gap-3"
            >
              <Lightbulb size={16} className="text-tron-yellow group-hover:scale-110 transition-transform" />
              <span className="text-[10px] uppercase font-black tracking-tighter text-white/60 hidden md:inline">Diario de Perlas</span>
              <span className="bg-tron-yellow/20 text-tron-yellow px-1.5 py-0.5 rounded text-[8px] font-black">{progress.savedPearls?.length || 0}</span>
            </button>
            <button 
              onClick={() => { playAudio('click'); setShowCalcs(!showCalcs); }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-tron-cyan/10 hover:border-tron-cyan/30 transition-all group flex items-center gap-3"
            >
              <Activity size={16} className="text-tron-cyan group-hover:scale-110 transition-transform" />
              <span className="text-[10px] uppercase font-black tracking-tighter text-white/60 hidden md:inline">Calculadoras</span>
            </button>
          </div>
        </header>

        {/* MODAL: MEDICAL CALCULATORS */}
        <AnimatePresence>
          {showCalcs && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full max-w-lg bg-tron-dark border border-white/10 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
              >
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-tron-cyan/10 rounded-2xl border border-tron-cyan/30">
                        <Activity className="text-tron-cyan" size={24} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Protocolos de Precisión</h3>
                        <p className="text-[9px] text-tron-cyan font-black tracking-[0.2em] uppercase opacity-60">Motor de cálculo clínico avanzado</p>
                     </div>
                  </div>
                  <button onClick={() => setShowCalcs(false)} className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                    <X size={20} className="text-white/40" />
                  </button>
                </div>
                
                <MedicalCalculators />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* MODAL: PEARLS LIBRARY */}
        <AnimatePresence>
          {showPearls && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                className="w-full max-w-2xl bg-tron-dark border border-white/10 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative max-h-[85vh] flex flex-col"
              >
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-tron-yellow/10 rounded-2xl border border-tron-yellow/30">
                        <Lightbulb className="text-tron-yellow" size={24} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Cognoscitium: Diario de Perlas</h3>
                        <p className="text-[9px] text-tron-yellow font-black tracking-[0.2em] uppercase opacity-60">Repositorio de insights clínicos guardados</p>
                     </div>
                  </div>
                  <button onClick={() => setShowPearls(false)} className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                    <X size={20} className="text-white/40" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                  {(!progress.savedPearls || progress.savedPearls.length === 0) ? (
                    <div className="h-full flex flex-col items-center justify-center py-20 text-white/20 italic text-center px-10 gap-4">
                      <Search size={48} className="opacity-10" />
                      <p className="text-sm uppercase tracking-widest font-black leading-relaxed">Tu diario está vacío. Acierta preguntas complejas y guarda sus perlas para desbloquear el conocimiento.</p>
                    </div>
                  ) : (
                    progress.savedPearls.map(pearl => (
                      <div key={pearl.questionId} className="p-6 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.03] transition-all group flex gap-5">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tron-yellow/10 flex items-center justify-center border border-tron-yellow/20">
                          <Zap size={14} className="text-tron-yellow" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 bg-tron-cyan/10 text-tron-cyan rounded-md border border-tron-cyan/20">
                              {GASTRO_TOPICS.find(t => t.id === pearl.topic)?.name}
                            </span>
                            <span className="text-[8px] font-mono text-white/20 tracking-tighter uppercase">
                              DATA_LINK_ESTABLISHED: {new Date(pearl.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-lg text-white/90 leading-relaxed font-serif italic pr-4">
                            "{pearl.text}"
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      {/* Identity Discs & Grid Background Effects */}
      <AnimatePresence>
        {currentStreak >= 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          >
             {currentStreak >= 10 && (
               <motion.div 
                 animate={{ opacity: [0.05, 0.15, 0.05] }}
                 transition={{ duration: 0.5, repeat: Infinity }}
                 className="absolute inset-0 bg-tron-yellow/5"
               />
             )}
          </motion.div>
        )}
      </AnimatePresence>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-40">
            <div className="relative">
              <div className="w-24 h-24 border-2 border-tron-cyan/10 rounded-full animate-ping absolute inset-0" />
              <div className="w-24 h-24 border-4 border-tron-yellow/20 border-t-tron-yellow rounded-full animate-spin" />
            </div>
            <p className="text-tron-yellow mt-12 font-mono uppercase tracking-[0.5em] text-sm animate-pulse">Sincronizando Heurística...</p>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <TronCard 
                    accentColor="rgba(0,242,255,0.4)" 
                    className="mb-8 mt-6 p-8 md:p-10 min-h-[300px] flex flex-col bg-tron-card/50 relative"
                  >
                    {currentQuestion?.pillar && (
                      <div className="mb-6 z-10 flex">
                        <span className={cn(
                          "px-4 py-1.5 text-[9px] uppercase font-black tracking-widest rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] border",
                          currentQuestion.pillar === 'Must-Know' ? "bg-tron-sub/20 text-tron-sub border-tron-sub" :
                          currentQuestion.pillar === 'Board Prep' ? "bg-tron-cyan/20 text-tron-cyan border-tron-cyan" :
                          "bg-tron-yellow/20 text-tron-yellow border-tron-yellow"
                        )}>
                          Pilar: {currentQuestion.pillar}
                        </span>
                      </div>
                    )}

                    {/* Feature 1: Visual Atlas Component during Question */}
                    {currentQuestion?.visualHint && (
                      <div className="mb-12">
                        <button 
                          onClick={() => { playAudio('magic'); setShowVisualDetail(!showVisualDetail); }}
                          className={cn(
                            "w-full p-6 border rounded-3xl transition-all flex items-center gap-6 group text-left",
                            showVisualDetail 
                              ? "bg-tron-cyan/5 border-tron-cyan/40 shadow-[0_0_20px_rgba(0,242,255,0.1)]" 
                              : "bg-black/40 border-white/5 hover:border-tron-cyan/30"
                          )}
                        >
                          <div className="p-4 bg-tron-cyan/10 rounded-2xl group-hover:scale-105 transition-transform">
                            <ZoomIn size={24} className="text-tron-cyan" />
                          </div>
                          <div className="flex-1">
                             <h4 className="text-xs uppercase font-black tracking-[0.2em] text-tron-cyan mb-1">Evidencia Visual Disponible (ATLAS_v2)</h4>
                             <p className="text-xs text-white/40 italic">Haz clic para revelar el hallazgo de endoscopia/biopsia/imagen.</p>
                          </div>
                          {showVisualDetail && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-tron-cyan">
                               <Star size={20} className="animate-pulse" />
                            </motion.div>
                          )}
                        </button>

                        <AnimatePresence>
                          {showVisualDetail && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 p-8 bg-tron-cyan/5 border border-tron-cyan/20 rounded-3xl font-serif italic text-white/90 leading-relaxed text-lg border-dashed">
                                <div className="flex items-center gap-3 mb-4 opacity-30">
                                  <ImageIcon size={14} />
                                  <span className="text-[10px] uppercase font-black tracking-widest underline">Descripción de Hallazgo Patognomónico</span>
                                </div>
                                {currentQuestion.visualHint}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    <h3 className="text-lg md:text-xl text-white font-serif leading-relaxed mb-8">
                      {currentQuestion?.text ? renderWithAcronyms(currentQuestion.text) : null}
                    </h3>

                    <motion.div 
                      layout
                      className="grid gap-3"
                    >
                      {currentQuestion?.options?.map((opt, i) => {
                        const isSelected = answers[currentQuestionIndex] === i;
                        const isCorrectOption = currentQuestion?.correctIndex === i;
                        
                        let styleClass = "border-white/10 hover:border-tron-cyan/40 hover:bg-white/5";
                        if (isOralMode && !revealedOral && !showFeedback) {
                          styleClass = "border-white/5 bg-white/[0.02] cursor-not-allowed filter blur-[4px] pointer-events-none";
                        }
                        
                        let labelBg = "bg-white/5 text-white/40";
                        
                        if (showFeedback) {
                          if (isCorrectOption) {
                            styleClass = "border-tron-cyan bg-tron-cyan/5 text-tron-cyan shadow-[0_0_15px_rgba(0,242,255,0.1)]";
                            labelBg = "bg-tron-cyan text-black";
                          } else if (isSelected) {
                            styleClass = "border-tron-yellow bg-tron-yellow/5 text-tron-yellow opacity-100 shadow-[0_0_15px_rgba(255,184,0,0.1)]";
                            labelBg = "bg-tron-yellow text-black";
                          } else {
                            styleClass = "opacity-30 border-white/5";
                          }
                        }

                        return (
                          <button
                            key={i}
                            disabled={showFeedback}
                            onClick={() => handleAnswerSelect(i)}
                            className={cn(
                              "w-full text-left p-3 md:p-3.5 rounded-xl border-2 transition-all flex items-center gap-4 group text-[13px] md:text-[14px]",
                              styleClass
                            )}
                          >
                            <span className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shrink-0 transition-colors",
                              labelBg
                            )}>
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="flex-1 leading-tight">{renderWithAcronyms(opt)}</span>
                            {showFeedback && isCorrectOption && <CheckCircle2 size={24} className="text-tron-cyan" />}
                            {showFeedback && isSelected && !isCorrectOption && <XCircle size={24} className="text-tron-yellow" />}
                          </button>
                        );
                      })}
                    </motion.div>

                    {isOralMode && !revealedOral && !showFeedback && (
                      <div className="mt-4 flex flex-col items-center gap-3 py-6 border-2 border-dashed border-tron-cyan/20 rounded-2xl bg-tron-cyan/[0.02] backdrop-blur-sm">
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }} 
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="p-4 bg-tron-cyan/10 rounded-full text-tron-cyan shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                        >
                          <Mic size={28} />
                        </motion.div>
                        <div className="text-center space-y-1">
                          <h4 className="text-white font-black uppercase tracking-[0.2em]">¡Responde en Voz Alta!</h4>
                          <p className="text-white/40 text-xs max-w-xs mx-auto">
                            Estructura tu respuesta oral antes de revelar las alternativas científicas.
                          </p>
                        </div>
                        <GlowButton 
                          onClick={() => setRevealedOral(true)}
                          size="sm"
                          variant="cyan"
                          className="mt-2 px-8"
                        >
                          Revelar Alternativas
                        </GlowButton>
                      </div>
                    )}
                  </TronCard>
                </motion.div>
              </AnimatePresence>
            </div>

            <aside className="col-span-12 lg:col-span-4 space-y-8">
               <AnimatePresence>
                {showFeedback ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4">
                       <button 
                         onClick={() => { playAudio('magic'); setOracleContextMode(true); setIsOracleOpen(true); }}
                         className="flex-1 py-4 px-6 border border-tron-cyan/20 bg-tron-cyan/5 rounded-2xl hover:bg-tron-cyan/10 transition-all flex items-center justify-center gap-3 group"
                       >
                         <Search size={18} className="text-tron-cyan group-hover:scale-110 transition-transform" />
                         <span className="text-[10px] uppercase font-black tracking-widest text-tron-cyan">Disección por IA (Oráculo)</span>
                       </button>
                       <button 
                         onClick={() => savePearl(currentQuestion)}
                         className={cn(
                           "px-6 py-4 border rounded-2xl transition-all flex items-center gap-3 group",
                           currentQuestion && progress.savedPearls?.some(p => p.questionId === currentQuestion.id)
                            ? "bg-tron-yellow border-tron-yellow text-black"
                            : "bg-white/5 border-white/10 hover:border-tron-yellow hover:text-tron-yellow text-white/40"
                         )}
                       >
                         <Lightbulb size={18} className={currentQuestion && progress.savedPearls?.some(p => p.questionId === currentQuestion.id) ? "text-black" : "text-white/40 group-hover:text-tron-yellow"} />
                         <span className="text-[10px] uppercase font-black tracking-widest">{currentQuestion && progress.savedPearls?.some(p => p.questionId === currentQuestion.id) ? 'Guardada' : 'Guardar Perla'}</span>
                       </button>
                     </motion.div>

                    <div className={cn(
                      "p-6 rounded-2xl border-2 flex flex-col gap-4 shadow-lg relative overflow-hidden",
                      isCorrect ? "border-tron-cyan bg-tron-cyan/5 shadow-tron-cyan/20" : "border-tron-yellow bg-tron-yellow/5 shadow-tron-yellow/20"
                    )}>
                      <div className="absolute top-0 right-0 px-2 py-1 bg-white/5 text-[8px] font-mono uppercase tracking-widest text-white/30 border-b border-l border-white/10">
                        EBM Grade: 1A (High)
                      </div>
                      <h4 className={cn(
                        "text-sm font-black uppercase tracking-tighter flex items-center gap-2",
                        isCorrect ? "text-tron-cyan" : "text-tron-yellow"
                      )}>
                        {isCorrect ? <Target size={16} /> : <AlertCircle size={16} />} 
                        {isCorrect ? "Sincronía Correcta" : "Desviación Clínica"}
                      </h4>
                      <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed font-serif italic border-l-2 border-tron-cyan/30 pl-4 py-1">
                        {currentQuestion?.explanation ? renderWithAcronyms(currentQuestion.explanation) : null}
                      </p>
                    </div>

                    <TronCard accentColor="rgba(255,255,255,0.05)" className="p-4 bg-tron-feedback/60 backdrop-blur-lg">
                      <h5 className="text-[10px] uppercase font-black text-tron-yellow mb-2 tracking-[0.2em] flex items-center gap-2">
                        <Brain size={12} className="text-white" /> Núcleo Fisiopatológico
                      </h5>
                      <p className="text-[12px] md:text-[13px] text-white/70 leading-relaxed font-mono">
                        {currentQuestion?.fisiopato ? renderWithAcronyms(currentQuestion.fisiopato) : null}
                      </p>
                    </TronCard>

                    {currentQuestion?.etiologyList && currentQuestion.etiologyList.length > 0 && (
                      <TronCard accentColor="rgba(0,255,255,0.1)" className="p-4 bg-black/40 border border-tron-cyan/30">
                        <h5 className="text-[10px] uppercase font-black text-tron-cyan mb-3 tracking-[0.2em] flex items-center gap-2">
                          <Target size={12} className="text-tron-cyan" /> Top Causas (Más a Menos Frecuente)
                        </h5>
                        <ul className="space-y-2">
                          {currentQuestion.etiologyList.map((cause, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[15px] text-gray-300 font-serif">
                              <span className="text-tron-cyan text-[10px] mt-1 font-mono">{(idx + 1).toString().padStart(2, '0')}</span>
                              <span>{renderWithAcronyms(cause)}</span>
                            </li>
                          ))}
                        </ul>
                      </TronCard>
                    )}

                    {currentQuestion?.differentialDiagnosis && (
                      <div className="bg-black/60 p-4 rounded-lg border border-purple-500/30 border-l-2 border-l-purple-500 shadow-inner">
                         <h5 className="text-[10px] uppercase font-black text-purple-400 mb-2 tracking-widest flex items-center gap-2 underline underline-offset-4">
                          <Eye size={12} /> Diagnósticos Diferenciales
                        </h5>
                        <p className="text-[13px] md:text-sm text-white/80 font-serif leading-relaxed italic">
                          {renderWithAcronyms(currentQuestion.differentialDiagnosis)}
                        </p>
                      </div>
                    )}

                    <div className="bg-black/80 p-4 rounded-lg border border-tron-yellow/30 border-l-2 border-l-tron-yellow shadow-inner">
                       <h5 className="text-[10px] uppercase font-black text-tron-yellow mb-2 tracking-widest flex items-center gap-2 underline underline-offset-4">
                        <Lightbulb size={12} /> Perla Clínica
                      </h5>
                      <p className="text-[13px] md:text-[14px] text-white font-serif leading-relaxed italic">
                        "{currentQuestion?.clinicalPearl ? renderWithAcronyms(currentQuestion.clinicalPearl) : null}"
                      </p>
                    </div>

                    {currentQuestion?.whyWrong && (
                      <TronCard accentColor="rgba(255,184,0,0.1)" className="p-4 bg-black/40">
                        <h5 className="text-[10px] uppercase font-black text-tron-yellow mb-3 tracking-[0.2em] flex items-center gap-2">
                          <AlertTriangle size={12} className="text-tron-yellow" /> ¿Por qué fallan las otras?
                        </h5>
                        <div className="space-y-2">
                          {currentQuestion.options.map((opt, idx) => {
                            if (idx === currentQuestion.correctIndex) return null;
                            const reason = currentQuestion.whyWrong?.[idx] || currentQuestion.whyWrong?.[String(idx)];
                            if (!reason) return null;
                            return (
                              <div key={idx} className="border-l border-white/10 pl-3 py-1">
                                <div className="text-[9px] text-white/40 uppercase font-black tracking-widest mb-0.5">
                                  Opción {String.fromCharCode(65 + idx)}: {opt.length > 40 ? opt.substring(0, 40) + '...' : opt}
                                </div>
                                <p className="text-[12px] md:text-[13px] text-white/60 italic leading-relaxed">
                                  {renderWithAcronyms(reason)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </TronCard>
                    )}

                    <div className="flex flex-col gap-4 pt-4">
                      {isReviewingMode && currentQuestionIndex > 0 && (
                        <GlowButton 
                          size="lg" 
                          variant="outline"
                          onClick={prevQuestion}
                          className="w-full text-base font-black tracking-[0.2em] mb-2"
                        >
                           <ChevronRight size={18} className="mr-2 inline rotate-180" /> Pregunta Anterior
                        </GlowButton>
                      )}
                      <div className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-widest font-mono">
                         <FileText size={12} /> Ref: {currentQuestion?.guideline}
                      </div>
                      <GlowButton 
                        size="lg" 
                        onClick={nextQuestion}
                        className="w-full text-base font-black tracking-[0.2em]"
                      >
                        {isReviewingMode && currentQuestionIndex === questions.length - 1 ? "Finalizar Revisión" : (isReviewingMode ? "Siguiente Pregunta" : "Siguiente Desafío")} <ChevronRight size={18} className="ml-2 inline" />
                      </GlowButton>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl p-12 text-center opacity-30">
                    <Brain size={48} className="text-white/20 mb-6" />
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Laboratorio de Análisis</p>
                    <p className="text-white/20 text-[10px] mt-2 italic font-serif">Esperando selección de respuesta para procesar retroalimentación...</p>
                  </div>
                )}
              </AnimatePresence>
            </aside>
          </div>
        )}

        {/* Floating Oracle Chat Button */}
        <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
          <AnimatePresence>
            {isOracleOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-[350px] md:w-[450px] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              >
                <div className="h-[500px]">
                  <GastroChat onBack={() => { setIsOracleOpen(false); setOracleContextMode(false); }} contextQuestion={oracleContextMode ? questions[currentQuestionIndex] : null} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => {
              if (isOracleOpen) { setOracleContextMode(false); }
              setIsOracleOpen(!isOracleOpen);
              playAudio('click');
            }}
            className={cn(
              "group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500",
              isOracleOpen ? "rotate-180" : ""
            )}
          >
            <div className="absolute inset-0 rounded-full border-2 border-tron-cyan/30 animate-slow-spin shadow-[0_0_20px_rgba(0,242,255,0.2)]" />
            <div className="absolute inset-2 rounded-full border-2 border-tron-cyan group-hover:border-white transition-colors flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              <div className="w-2 h-2 rounded-full bg-tron-cyan group-hover:bg-white animate-pulse" />
            </div>
            
            {/* Tooltip */}
            {!isOracleOpen && (
              <div className="absolute right-full mr-4 px-3 py-1 bg-tron-cyan text-black text-[10px] font-black uppercase tracking-widest rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Consultar Oráculo
              </div>
            )}
          </button>
        </div>
      </div>
    );
  }

  if (currentView === 'results') {
    const correctCount = answers.filter((ans, idx) => ans === questions[idx].correctIndex).length;
    const scorePercent = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 min-h-screen flex flex-col justify-center items-center">
        <motion.div
           initial={{ scale: 0.95, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            <Trophy size={100} className={isSurvivalMode ? "text-tron-sub mb-8 mx-auto md:mx-0" : "text-tron-staff mb-8 drop-shadow-[0_0_20px_#ff9500] mx-auto md:mx-0"} />
            <h2 className={cn("text-3xl sm:text-5xl lg:text-6xl font-display font-black mb-4 tracking-tighter uppercase leading-none", isSurvivalMode ? "text-tron-sub" : "text-white")}>
              {isSurvivalMode ? "Fin de la Línea" : "Protocolo"} <br/><span className={isSurvivalMode ? "text-tron-sub/50 text-4xl" : "text-tron-cyan text-glow-cyan text-4xl"}>{isSurvivalMode ? "Simulación Terminada" : "Finalizado"}</span>
            </h2>
            <p className={cn("uppercase tracking-[0.4em] text-xs font-mono mb-8 border-l-2 pl-6 py-2", isSurvivalMode ? "text-tron-sub border-tron-sub" : "text-white/30 border-tron-yellow")}>
              {isSurvivalMode ? "Muerte Súbita" : `Módulo: ${selectedTopic?.name}`} <br/>
              Status: <span className={isSurvivalMode ? "text-white" : (scorePercent >= 70 ? "text-tron-cyan" : "text-tron-yellow")}>
                {isSurvivalMode ? `Superaste ${correctCount} niveles` : (scorePercent >= 70 ? "Competencia Aprobada" : "Refuerzo Requerido")}
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <GlowButton 
                variant="outline" 
                onClick={() => {
                  setCurrentView('lobby');
                  // Limpiar sesión al volver deliberadamente desde resultados
                  setSelectedTopic(null);
                  setQuestions([]);
                  setAnswers([]);
                  setCurrentQuestionIndex(0);
                  setIsSimMode(false);
                  setIsSurvivalMode(false);
                }}
                className="flex-1"
              >
                Menú de Protocolos
              </GlowButton>
              {!isSurvivalMode && (
                <GlowButton 
                  variant="cyan"
                  onClick={() => startQuiz(selectedTopic!)}
                  className="flex-1"
                >
                  Reiniciar Módulo
                </GlowButton>
              )}
              {!isSurvivalMode && answers.length > 0 && (
                 <GlowButton 
                   variant="yellow"
                   onClick={startReviewMode}
                   className="flex-1"
                 >
                   Revisar Respuestas
                 </GlowButton>
              )}
              {isSurvivalMode && (
                <GlowButton 
                  variant="sub"
                  onClick={startSurvivalMode}
                  className="flex-1 border-tron-sub flex items-center justify-center gap-2"
                >
                  <Skull size={32} /> Nuevo Intento
                </GlowButton>
              )}
              {/* Added option for AI expansion */}
              {!isSurvivalMode && (
                <GlowButton 
                  variant="staff"
                onClick={async () => {
                   setIsLoading(true);
                   try {
                     const allKnownForTopic = [...ALL_PRELOADED_QUESTIONS.filter(q => q.topic === selectedTopic!.id), ...(cachedQuestions[selectedTopic!.id] || [])];
                     const failedQuestions = allKnownForTopic.filter(q => progress.reviewIds.includes(q.id));
                     const extras = await generateQuestions(selectedTopic!.id, selectedTopic!.name, selectedDifficulty, 5, allKnownForTopic, failedQuestions);
                     const updatedQuestions = [...questions, ...extras];
                     // Save to persistent cache
                     setCachedQuestions(prev => ({
                        ...prev,
                        [selectedTopic!.id]: [...(prev[selectedTopic!.id] || []), ...extras]
                     }));
                     setQuestions(updatedQuestions);
                     setAnswers(prev => [...prev, ...new Array(extras.length).fill(null)]);
                     setCurrentQuestionIndex(questions.length); 
                     setShowFeedback(false);
                     setCurrentView('quiz');
                   } catch (e) {
                     console.error("AI Generation Error: ", e);
                   }
                   setIsLoading(false);
                }}
                className="flex-1 sm:w-full md:mt-2"
              >
                Expandir con IA (+5)
              </GlowButton>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <TronCard accentColor="#ffb800" className="p-8 bg-tron-card/80">
              <div className="flex justify-between items-end mb-4 font-display italic">
                 <span className="text-xs text-white/40 uppercase tracking-widest font-black">Sincronía Lograda</span>
                 <span className="text-5xl font-mono font-bold text-white tracking-widest">{correctCount}</span>
              </div>
              <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${scorePercent}%` }}
                  className={cn(
                    "h-full rounded-full shadow-[0_0_10px_currentColor]",
                    scorePercent >= 70 ? "bg-tron-cyan" : "bg-tron-yellow"
                  )}
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-5 rounded-lg border border-white/5">
                   <p className="text-[10px] text-white/20 uppercase font-bold mb-1">Eficacia</p>
                   <p className="text-3xl font-mono text-white text-glow-cyan">{scorePercent}%</p>
                 </div>
                 <div className="bg-white/5 p-5 rounded-lg border border-white/5">
                   <p className="text-[10px] text-white/20 uppercase font-bold mb-1">XP Bonus</p>
                   <p className="text-3xl font-mono text-white">+{correctCount * 50}</p>
                 </div>
              </div>
            </TronCard>

            {scorePercent < 70 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-tron-yellow/5 border-2 border-tron-yellow/20 rounded-2xl flex items-start gap-4 shadow-xl shadow-tron-yellow/5"
              >
                <TrendingDown className="text-tron-yellow shrink-0" size={32} />
                <div>
                  <h4 className="text-tron-yellow font-black text-xs uppercase tracking-widest mb-1">Análisis de Brecha</h4>
                  <p className="text-white/60 text-base font-serif leading-relaxed italic">
                    Nivel de maestría por debajo de los estándares del Fellowship. Los algoritmos de diagnóstico diferencial en {selectedTopic?.name} requieren iteración inmediata.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  if (currentView === 'bookmarks') {
    const bookmarkedQuestions = [
      ...ALL_PRELOADED_QUESTIONS,
      ...(Object.values(cachedQuestions).flat() as Question[])
    ].filter(q => bookmarks.includes(q.id));
    
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-12 min-h-screen border-x-4 border-tron-cyan/10">
        <header className="flex justify-between items-center mb-12 border-b border-tron-cyan/30 pb-6">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setCurrentView('lobby')}
              className="p-1 px-4 border border-white/10 rounded hover:bg-white/5 hover:text-tron-yellow transition-colors flex items-center gap-2 group"
            >
              <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" /> 
              <span className="text-[10px] uppercase font-bold tracking-widest">Volver</span>
            </button>
            <h2 className="text-tron-yellow font-display text-4xl font-black tracking-tighter uppercase italic">
              Mis Marcadores <span className="text-white text-2xl ml-4 opacity-50">Casos en Revisión</span>
            </h2>
          </div>
        </header>

        {bookmarkedQuestions.length === 0 ? (
          <div className="py-40 text-center opacity-30">
             <ShieldCheck size={64} className="mx-auto mb-6" />
             <p className="font-mono uppercase tracking-[0.3em]">Sin marcadores activos</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {bookmarkedQuestions.map((q) => (
              <motion.div key={q.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <TronCard accentColor="#ffb800" className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] text-tron-cyan uppercase font-black tracking-widest block mb-2">{q.topic}</span>
                      <h3 className="text-xl font-serif text-white leading-relaxed">{renderWithAcronyms(q.text)}</h3>
                    </div>
                    <button 
                      onClick={() => toggleBookmark(q.id)}
                      className="text-tron-yellow hover:text-white transition-colors"
                    >
                      <XCircle size={24} />
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase font-black text-white/40 tracking-widest">Resumen Clínico</h4>
                      <p className="text-white font-serif italic text-lg leading-relaxed border-l-2 border-tron-yellow/30 pl-6">
                        {renderWithAcronyms(q.explanation)}
                      </p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                      <h4 className="text-[10px] uppercase font-black text-tron-yellow tracking-widest mb-4">Perla de Fellowship</h4>
                      <p className="text-base text-gray-300 font-mono italic">
                        "{renderWithAcronyms(q.clinicalPearl)}"
                      </p>
                    </div>
                  </div>
                </TronCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (currentView === 'pearls') {
    const allKnownQuestions = [
      ...ALL_PRELOADED_QUESTIONS,
      ...(Object.values(cachedQuestions).flat() as Question[])
    ];

    const filteredPearls = allKnownQuestions.filter(q => {
      if (!q || !q.clinicalPearl) return false;
      const pearlText = q.clinicalPearl;
      const textParam = q.text || "";
      const matchesSearch = pearlText.toLowerCase().includes(pearlsSearch.toLowerCase()) || 
                            textParam.toLowerCase().includes(pearlsSearch.toLowerCase());
      
      let matchesCategory = true;
      if (pearlsCategory !== 'all') {
        const categoryTopics = PEARL_CATEGORIES[pearlsCategory] || [];
        matchesCategory = categoryTopics.includes(q.topic);
      }
      
      return matchesSearch && matchesCategory;
    });
    
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12 min-h-screen border-x-0 sm:border-x-4 border-tron-cyan/10 bg-black/40">
        <header className="mb-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => {
                  setCurrentView('lobby');
                  setPearlsSearch('');
                  setPearlsCategory('all');
                }}
                className="p-1 px-4 border border-white/10 rounded hover:bg-white/5 hover:text-tron-yellow transition-colors flex items-center gap-2 group"
              >
                <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" /> 
                <span className="text-[10px] uppercase font-bold tracking-widest">Volver</span>
              </button>
              <h2 className="text-tron-yellow font-display text-4xl md:text-5xl font-black tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,184,0,0.3)]">
                Data-Core <span className="text-white text-3xl font-light">Perlas Clínicas</span>
              </h2>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Buscar perla..."
                  value={pearlsSearch}
                  onChange={(e) => setPearlsSearch(e.target.value)}
                  className="bg-black/40 border border-tron-cyan/30 rounded-lg py-2 px-10 text-sm text-white focus:outline-none focus:border-tron-cyan w-full font-mono placeholder:text-white/20"
                />
                <Target size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-tron-cyan opacity-50" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => setPearlsCategory('all')}
              className={cn(
                "px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors border",
                pearlsCategory === 'all' 
                  ? "bg-tron-cyan/20 border-tron-cyan text-tron-cyan" 
                  : "bg-black/30 border-white/10 text-white/50 hover:bg-white/5 hover:text-white"
              )}
            >
              TODAS LAS PERLAS
            </button>
            {Object.entries(CATEGORY_NAMES).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setPearlsCategory(key)}
                className={cn(
                  "px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors border",
                  pearlsCategory === key 
                    ? "bg-tron-yellow/20 border-tron-yellow text-tron-yellow" 
                    : "bg-black/30 border-white/10 text-white/50 hover:bg-white/5 hover:text-white"
                )}
              >
                {name}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPearls.length === 0 ? (
            <div className="col-span-full py-40 text-center opacity-30">
               <Brain size={64} className="mx-auto mb-6" />
               <p className="font-mono uppercase tracking-[0.3em]">Protocolos No Encontrados</p>
            </div>
          ) : (
            filteredPearls.map((q, idx) => (
              <motion.div
                key={`${q.id}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => { playAudio('click'); setSelectedPearl(q); }}
                className="cursor-pointer"
              >
                <TronCard accentColor="#ffb800" className="p-6 h-full flex flex-col justify-between group hover:border-tron-yellow/50 transition-all bg-tron-card/40 backdrop-blur-md">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex flex-col">
                        <span className="text-[8px] text-tron-yellow uppercase tracking-[0.3em] font-black mb-1">Registro Médico</span>
                        <span className="text-[10px] text-white/40 font-mono">ID: {q.id.toUpperCase()}</span>
                      </div>
                      <div className="bg-tron-yellow/10 p-2 rounded-lg group-hover:shadow-[0_0_10px_#ffb800] transition-all">
                        <Lightbulb size={20} className="text-tron-yellow" />
                      </div>
                    </div>
                    
                    <p className="text-white text-lg font-serif leading-relaxed italic mb-6 border-l-2 border-tron-yellow/30 pl-6 border-dotted">
                      {renderWithAcronyms(q.clinicalPearl)}
                    </p>

                    <div className="space-y-2 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                      <p className="text-[10px] text-tron-cyan uppercase tracking-widest font-bold">Contexto Original:</p>
                      <p className="text-xs text-white/60 font-serif leading-relaxed line-clamp-2">
                        {renderWithAcronyms(q.text)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center bg-black/20 -mx-6 -mb-6 px-6 py-3 rounded-b-xl">
                    <span className="text-[9px] uppercase font-black text-tron-yellow tracking-widest">{q.topic}</span>
                    <span className="text-[9px] text-white/30 font-mono uppercase">Ref: {q.guideline}</span>
                  </div>
                </TronCard>
              </motion.div>
            ))
          )}
        </div>

        {/* --- Pearl Expansion Modal --- */}
        <AnimatePresence>
          {selectedPearl && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedPearl(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-tron-card border-2 border-tron-cyan/30 rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_0_100px_rgba(0,242,255,0.15)]"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative p-8 pt-12">
                   <button 
                     onClick={() => setSelectedPearl(null)}
                     className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-all"
                   >
                     <X size={24} />
                   </button>

                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-tron-yellow/10 flex items-center justify-center border border-tron-yellow/20">
                       <Lightbulb className="text-tron-yellow" size={24} />
                     </div>
                     <div>
                       <div className="text-[10px] uppercase font-black tracking-[0.3em] text-tron-yellow/60">Perla Clínica</div>
                       <div className="text-sm text-white/50">{selectedPearl.topic}</div>
                     </div>
                   </div>

                   <div className="space-y-8">
                     <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed text-glow-yellow">
                          "{selectedPearl.clinicalPearl}"
                        </p>
                     </div>

                     <div className="space-y-6">
                        <div>
                          <h4 className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-3 flex items-center gap-2">
                             <Target size={12} /> Contexto Médico
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed border-l-2 border-tron-cyan/30 pl-4 py-1">
                            {selectedPearl.text}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-3 flex items-center gap-2">
                             <Activity size={12} /> Referencia y Guía
                          </h4>
                          <p className="text-tron-yellow text-xs font-mono bg-tron-yellow/5 py-2 px-4 rounded border border-tron-yellow/10 inline-block uppercase">
                            {selectedPearl.guideline}
                          </p>
                        </div>
                     </div>
                   </div>
                </div>
                <div className="p-6 bg-black/40 border-t border-white/5 flex justify-center">
                   <GlowButton onClick={() => setSelectedPearl(null)} className="px-12">
                      Entendido
                   </GlowButton>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (currentView === 'flashcards') {
    if (allKnownQuestions.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <p>Cargando banco de perlas...</p>
          <GlowButton onClick={() => setCurrentView('lobby')} className="mt-4">Regresar</GlowButton>
        </div>
      );
    }
    
    const nextCard = () => {
      setIsFlipped(false);
      setTimeout(() => {
        setFlashIndex(prev => (prev + 1) % allKnownQuestions.length);
      }, 150);
    };

    const q = allKnownQuestions[flashIndex] || allKnownQuestions[0];

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-12 min-h-screen border-x-0 sm:border-x-4 border-tron-cyan/10 bg-black/40 flex flex-col justify-center items-center">
        <header className="absolute top-0 w-full p-8 flex justify-between items-center max-w-4xl">
          <button 
            onClick={() => setCurrentView('pearls')}
            className="p-1 px-4 border border-white/10 rounded hover:bg-white/5 hover:text-tron-yellow transition-colors flex items-center gap-2"
          >
            <RotateCcw size={14} /> 
            <span className="text-[10px] uppercase font-bold tracking-widest">Volver a Perlas</span>
          </button>
          <div className="text-white/40 font-mono text-sm">
             Memoria {flashIndex + 1}/{allKnownQuestions.length}
          </div>
        </header>

        <div className="w-full aspect-[4/3] max-w-2xl [perspective:1000px] group">
          <motion.div 
            className="w-full h-full relative [transform-style:preserve-3d] transition-all duration-500 ease-out"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
          >
            {/* FRONT */}
            <div className="absolute inset-0 backface-hidden [backface-visibility:hidden]">
              <TronCard 
                accentColor="rgba(0,242,255,0.3)" 
                className="w-full h-full flex flex-col items-center text-center p-8 md:p-12 bg-tron-card/80 hover:border-tron-cyan transition-colors relative"
                onClick={() => setIsFlipped(true)}
              >
                <div className="w-full h-full flex flex-col justify-center overflow-y-auto custom-scrollbar px-2" onClick={(e) => e.stopPropagation()}>
                  <Brain size={48} className="text-tron-cyan mb-8 opacity-50 shrink-0 mx-auto" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-serif leading-relaxed">
                    {renderWithAcronyms(q.text)}
                  </h3>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
                    className="mt-8 mx-auto py-2 px-6 bg-tron-cyan/10 border border-tron-cyan/40 rounded-full text-tron-cyan text-[10px] uppercase font-black hover:bg-tron-cyan/20 transition-all tracking-[0.2em]"
                  >
                    Revelar Perla
                  </button>
                </div>
              </TronCard>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <TronCard 
                accentColor="rgba(255,184,0,0.4)" 
                className="w-full h-full flex flex-col items-center text-center p-8 md:p-12 bg-tron-yellow/5 border-tron-yellow/50 relative"
                onClick={() => setIsFlipped(false)}
              >
                <div className="w-full h-full flex flex-col justify-center overflow-y-auto custom-scrollbar px-2" onClick={(e) => e.stopPropagation()}>
                  <Lightbulb size={48} className="text-tron-yellow mb-6 shadow-[0_0_15px_#ffb800] rounded-full shrink-0 mx-auto" />
                  <p className="text-lg md:text-xl lg:text-2xl text-white font-serif leading-relaxed italic border-x-2 border-tron-yellow/30 px-6">
                    "{renderWithAcronyms(q.clinicalPearl)}"
                  </p>
                  <div className="mt-8 py-3 px-6 bg-black/40 rounded-full border border-tron-yellow/20 shrink-0 mx-auto w-fit">
                    <p className="text-xs text-white/50 font-mono uppercase">Ref: {q.guideline}</p>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                    className="mt-6 mx-auto py-1 px-4 text-white/40 text-[9px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Volver a pregunta
                  </button>
                </div>
              </TronCard>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex gap-6">
           <GlowButton variant="staff" size="lg" onClick={(e) => { e.stopPropagation(); nextCard(); }}>
             Siguiente Perla <ChevronRight size={18} className="ml-2 inline" />
           </GlowButton>
        </div>
      </div>
    );
  }

  if (currentView === 'oral_sim') {
    return <OralSim onExit={() => setCurrentView('lobby')} />;
  }

  if (currentView === 'atlas') {
    const atlasItems = [
      { 
        id: 1,
        title: "Esófago de Barrett", 
        class: "Praga C2M5", 
        desc: "Epitelio columnar metaplásico", 
        color: "text-tron-sub", 
        border: "border-tron-sub/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Barretts_esophagus.jpg/800px-Barretts_esophagus.jpg",
        hotspot: { x: "50%", y: "45%", label: "Unión Escamocolumnar Desplazada" },
        longDesc: "Presencia de epitelio columnar que tapiza el esófago distal. La clasificación de Praga evalúa la extensión circunferencial (C) y máxima (M)."
      },
      { 
        id: 2,
        title: "Pólipo Sésil (Adenoma)", 
        class: "Paris Is, Kudo III", 
        desc: "Adenoma tubular con displasia", 
        color: "text-tron-yellow", 
        border: "border-tron-yellow/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Colon_polyp.jpg/800px-Colon_polyp.jpg",
        hotspot: { x: "40%", y: "40%", label: "Elevación Tipo Is" },
        longDesc: "Lesión sésil con patrón de criptas tipo III de Kudo, sugestivo de adenoma. Requiere mucosectomía endoscópica (EMR)."
      },
      { 
        id: 3,
        title: "Úlcera Gástrica", 
        class: "Forrest IIa", 
        desc: "Vaso visible no sangrante", 
        color: "text-tron-cyan", 
        border: "border-tron-cyan/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Cameron_ulcers_1.jpg/800px-Cameron_ulcers_1.jpg",
        hotspot: { x: "55%", y: "50%", label: "Vaso Visible (Alto Riesgo)" },
        longDesc: "Úlcera de base limpia con vaso prominente. Riesgo de recidiva hemorrágica del 43%. Indicación de terapia dual (Adrenalina + Clip/Térmico)."
      },
      { 
        id: 4,
        title: "Colitis Ulcerosa", 
        class: "Mayo 3", 
        desc: "Eritema severo, friabilidad, úlceras", 
        color: "text-tron-sub", 
        border: "border-tron-sub/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ulcerative_colitis.jpg/800px-Ulcerative_colitis.jpg",
        hotspot: { x: "30%", y: "60%", label: "Friabilidad y Exudado" },
        longDesc: "Mucosa con pérdida total de patrón vascular, sangrado espontáneo y ulceración extensa. Sugiere actividad moderada-severa (Mayo 3)."
      },
      { 
        id: 5,
        title: "Várices Esofágicas", 
        class: "Grado III", 
        desc: "Cordones gruesos confluyentes", 
        color: "text-tron-yellow", 
        border: "border-tron-yellow/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Esophageal_varices_-_1.jpg/800px-Esophageal_varices_-_1.jpg",
        hotspot: { x: "50%", y: "70%", label: "Puntos Rojos (Cherry Red)" },
        longDesc: "Várices de gran tamaño que ocupan más de un tercio de la luz. Los puntos rojos indican debilidad de la pared y alto riesgo de rotura inminente."
      },
      { 
        id: 6,
        title: "Mucosa Gástrica Normal", 
        class: "Normal", 
        desc: "Mucosa de aspecto conservado", 
        color: "text-tron-cyan", 
        border: "border-tron-cyan/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Normal_gastric_mucosa.jpg/800px-Normal_gastric_mucosa.jpg",
        hotspot: { x: "45%", y: "30%", label: "Pliegues gástricos normales" },
        longDesc: "Estudio que muestra pliegues gástricos de textura, coloración y distensibilidad conservadas. No hay lesiones focales ni signos inflamatorios."
      },
    ];

    return (
      <div className="max-w-6xl mx-auto p-4 md:p-12 min-h-screen">
        <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-glow-cyan text-tron-cyan tracking-tighter uppercase flex items-center gap-4">
              <Camera size={40} className="text-tron-cyan" /> Atlas Interactivo
            </h1>
            <p className="text-white/40 font-mono tracking-widest uppercase text-xs mt-2">Detección y Clasificación Visual</p>
          </div>
          <button 
            onClick={() => { playAudio('click'); setCurrentView('lobby'); }}
            className="p-2 px-6 border border-white/10 rounded uppercase font-bold text-[10px] tracking-widest hover:bg-white/5 transition-all flex items-center gap-2 text-white/60"
          >
            <RotateCcw size={14} /> Volver
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {atlasItems.map((item, idx) => (
            <TronCard 
              key={idx} 
              accentColor="rgba(255,255,255,0.1)" 
              className={`p-0 overflow-hidden border cursor-pointer group hover:scale-[1.02] transition-all duration-300 ${item.border}`}
              onClick={() => { playAudio('click'); setSelectedAtlasItem(item); }}
            >
               <div className="h-48 bg-black border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                 <img 
                   src={item.url} 
                   alt={item.title}
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded font-mono text-[9px] text-white/50 border border-white/10 z-10">
                   IMG_REF_{1000 + idx}
                 </div>
               </div>
               <div className="p-5 bg-tron-card/80">
                  <h3 className={`font-black text-xl mb-1 uppercase ${item.color}`}>{item.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={12} className={item.color} />
                    <span className="font-mono text-xs text-white/60 uppercase tracking-widest">{item.class}</span>
                  </div>
                  <p className="text-sm font-serif italic text-white/40 mb-4">{item.desc}</p>
                  <button className="w-full py-2 bg-white/5 group-hover:bg-tron-cyan/10 border border-white/10 group-hover:border-tron-cyan/40 rounded uppercase text-[10px] font-bold tracking-widest transition-all">
                    Analizar Imagen
                  </button>
               </div>
            </TronCard>
          ))}
        </div>

        {/* Modal de Análisis Detallado */}
        <AnimatePresence>
          {selectedAtlasItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
              onClick={() => setSelectedAtlasItem(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="max-w-5xl w-full bg-tron-card border-2 border-tron-cyan/40 rounded-xl overflow-hidden shadow-[0_0_80px_rgba(0,242,255,0.2)]"
                onClick={e => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-square lg:aspect-auto h-[400px] lg:h-[600px] bg-black border-r border-white/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src={selectedAtlasItem.url} 
                      className="w-full h-full object-contain"
                      alt="Tactical Scan"
                    />
                    
                    {/* Hotspot */}
                    <div 
                      className="absolute"
                      style={{ left: selectedAtlasItem.hotspot.x, top: selectedAtlasItem.hotspot.y }}
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }} 
                        transition={{ repeat: Infinity, duration: 2.5 }}
                        className="w-12 h-12 -ml-6 -mt-6 rounded-full border-2 border-tron-cyan bg-tron-cyan/20 blur-sm" 
                      />
                      <div className="w-4 h-4 -ml-2 -mt-2 bg-tron-cyan rounded-full shadow-[0_0_15px_#00f2ff]" />
                      
                      <div className="ml-6 -mt-2 w-48 p-3 bg-black/80 border border-tron-cyan/50 backdrop-blur-md rounded-md">
                        <div className="text-[10px] text-tron-cyan uppercase font-black tracking-widest mb-1">Detección Confirmada</div>
                        <div className="text-xs text-white/90 font-mono">{selectedAtlasItem.hotspot.label}</div>
                      </div>
                    </div>

                    {/* Scanning Line Effect */}
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-px bg-tron-cyan/50 shadow-[0_0_10px_#00f2ff] z-10 pointer-events-none"
                    />
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-between h-full bg-gradient-to-br from-tron-card to-black">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <div className={`text-xs font-black uppercase tracking-[0.3em] mb-2 ${selectedAtlasItem.color}`}>
                            CLASIFICACIÓN: {selectedAtlasItem.class}
                          </div>
                          <h2 className="text-4xl font-black text-white uppercase tracking-tighter text-glow-cyan">
                            {selectedAtlasItem.title}
                          </h2>
                        </div>
                        <button 
                          onClick={() => { playAudio('click'); setSelectedAtlasItem(null); }} 
                          className="p-2 hover:bg-white/5 rounded-full text-white/30 hover:text-white transition-all"
                        >
                          <X size={32} />
                        </button>
                      </div>

                      <div className="space-y-8">
                        <div className="relative">
                          <p className="text-lg text-white/80 font-serif leading-relaxed italic border-l-4 border-tron-cyan/40 pl-6 py-2">
                            "{selectedAtlasItem.longDesc}"
                          </p>
                          <Activity size={48} className="absolute -right-4 -top-4 text-white/5 rotate-12" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                              <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-2">Hallazgos Clave</div>
                              <div className="text-sm text-tron-staff font-mono uppercase tracking-tight">Arquitectura Vascular Irregular</div>
                           </div>
                           <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                              <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-2">Protocolo Sugerido</div>
                              <div className="text-sm text-tron-cyan font-mono uppercase tracking-tight">Biopsia dirigida / Escisión</div>
                           </div>
                        </div>

                        <div className="mt-6 p-4 bg-tron-cyan/5 border border-tron-cyan/20 rounded-lg">
                           <h4 className="text-[10px] text-tron-cyan uppercase font-black tracking-widest mb-2 flex items-center gap-2">
                             <ShieldCheck size={12} /> Nota de Especialidad
                           </h4>
                           <p className="text-xs text-white/60 font-serif italic">
                             Siempre correlacionar con la clínica del paciente y las guías <Acronym term="ASGE" definition="American Society for Gastrointestinal Endoscopy" />/<Acronym term="ESGE" definition="European Society of Gastrointestinal Endoscopy" /> vigentes para el manejo de lesiones premalignas.
                           </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 flex gap-4">
                       <button 
                         onClick={() => { playAudio('click'); setSelectedAtlasItem(null); }}
                         className="flex-1 py-4 bg-tron-cyan/10 hover:bg-tron-cyan/20 border border-tron-cyan/30 hover:border-tron-cyan text-tron-cyan font-black uppercase tracking-widest rounded-lg transition-all"
                       >
                         Cerrar Escaneo
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (currentView === 'archive') {
    const errorQuestions = [
      ...ALL_PRELOADED_QUESTIONS,
      ...(Object.values(cachedQuestions).flat() as Question[])
    ].filter(q => progress.reviewIds.includes(q.id));

    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12 min-h-screen border-x-0 sm:border-x-4 border-tron-cyan/10 bg-black/60">
        <header className="flex justify-between items-center mb-12 border-b border-tron-sub/30 pb-6">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { playAudio('click'); setCurrentView('lobby'); }}
              className="p-1 px-4 border border-white/10 rounded hover:bg-white/5 hover:text-tron-sub transition-colors flex items-center gap-2 group"
            >
              <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" /> 
              <span className="text-[10px] uppercase font-bold tracking-widest">Volver</span>
            </button>
            <h2 className="text-tron-sub font-display text-4xl font-black tracking-tighter uppercase italic">
              Memory Core <span className="text-white text-2xl ml-4 opacity-50">Datos Corruptos</span>
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8">
           {errorQuestions.length === 0 ? (
             <div className="py-40 text-center">
                <ShieldCheck size={64} className="mx-auto mb-6 text-tron-cyan opacity-20" />
                <p className="font-mono uppercase tracking-[0.3em] text-white/20">Integridad del Sistema al 100%</p>
             </div>
           ) : (
             errorQuestions.map(q => (
               <motion.div key={q.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                 <TronCard accentColor="#ff4444" className="p-8 border-tron-sub/40 bg-tron-sub/5 shadow-[inset_0_0_40px_rgba(255,68,68,0.05)]">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] text-tron-sub uppercase font-black tracking-widest block mb-2">{q.topic}</span>
                        <h3 className="text-xl font-serif text-white/90 italic line-through decoration-tron-sub/50 decoration-2">{renderWithAcronyms(q.text)}</h3>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                      <div className="space-y-4">
                        <h4 className="text-[10px] uppercase font-black text-tron-sub tracking-widest">Corrección de Falla</h4>
                        <p className="text-white font-serif italic text-lg leading-relaxed bg-tron-sub/10 p-4 border-l-2 border-tron-sub">
                          {renderWithAcronyms(q.explanation)}
                        </p>
                      </div>
                      <div className="bg-black/40 p-6 rounded-xl border border-tron-sub/20">
                        <h4 className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-4">Racional Fisiopatológico</h4>
                        <p className="text-base text-gray-300 font-mono italic">
                          {q.fisiopato}
                        </p>
                      </div>
                    </div>
                 </TronCard>
               </motion.div>
             ))
           )}
        </div>
      </div>
    );
  }

  if (currentView === 'profile') {
    const accuracy = progress.totalAttempted > 0 ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100) : 0;
    
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-12 min-h-screen flex flex-col">
        <header className="mb-12 flex justify-between items-end">
          <button 
            onClick={() => setCurrentView('lobby')}
            className="p-2 px-6 border border-white/10 rounded uppercase font-bold text-[10px] tracking-widest hover:bg-white/5 transition-all text-white/60 flex items-center gap-2"
          >
            <RotateCcw size={14} /> Lobby
          </button>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative mb-16 scale-110 md:scale-125 transition-transform">
              {/* Identity Disk: Professional Clinical Grade */}
              <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full flex items-center justify-center relative">
                 {/* Background Pulse */}
                 <motion.div 
                    className="absolute inset-0 rounded-full bg-tron-cyan/5 blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                 />

                 {/* Outer Navigation Ring */}
                 <div className="absolute inset-0 rounded-full border-[6px] border-tron-cyan/10" />
                 <div className="absolute inset-0 rounded-full border-2 border-tron-cyan/40 border-dashed animate-[spin_30s_linear_infinite]" />
                 
                 {/* Mid-Tier Tactical Ring */}
                 <div className="absolute inset-10 rounded-full border border-tron-cyan/20" />
                 <motion.div 
                    className="absolute inset-10 rounded-full border-t-4 border-r-4 border-tron-cyan shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 />

                 {/* Inner Sensory Ring */}
                 <div className="absolute inset-20 rounded-full border border-tron-cyan/10 animate-[spin_10s_linear_infinite_reverse]" />
                 
                 {/* Core Processor: Enhanced Size and Detail */}
                 <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 md:w-64 md:h-64 bg-tron-card rounded-full flex flex-col items-center justify-center border-4 border-tron-cyan shadow-[0_0_60px_rgba(0,242,255,0.4),inset_0_0_30px_rgba(0,242,255,0.5)] backdrop-blur-xl z-10 relative group"
                 >
                   <div className="absolute inset-2 rounded-full border border-white/5 pointer-events-none" />
                   <User size={56} className="text-tron-cyan mb-4 drop-shadow-[0_0_12px_#00f2ff] group-hover:scale-110 transition-transform" />
                   <div className="flex flex-col items-center">
                     <span className="font-black text-4xl sm:text-5xl lg:text-6xl text-white text-glow-cyan leading-none tabular-nums">{accuracy}%</span>
                     <div className="flex items-center gap-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-tron-cyan animate-pulse" />
                        <span className="uppercase text-[11px] tracking-[0.5em] text-tron-cyan font-black">SYNC_LEVEL: STABLE</span>
                     </div>
                   </div>
                 </motion.div>
              </div>
            </div>

           <div className="w-full max-w-2xl bg-tron-card/50 border border-tron-cyan/20 rounded-2xl p-8 backdrop-blur-md">
             <h2 className="text-2xl font-black uppercase text-center text-tron-cyan mb-8 tracking-widest flex items-center justify-center gap-3">
                <Activity size={24} /> Estadísticas de Sistema
             </h2>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
               <div className="bg-white/5 p-4 rounded text-center border border-white/10">
                 <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Intentos</p>
                 <p className="text-2xl font-black text-white">{progress.totalAttempted}</p>
               </div>
               <div className="bg-white/5 p-4 rounded text-center border border-white/10">
                 <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Aciertos</p>
                 <p className="text-2xl font-black text-tron-cyan">{progress.totalCorrect}</p>
               </div>
               <div className="bg-white/5 p-4 rounded text-center border border-white/10">
                 <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Racha</p>
                 <p className="text-2xl font-black text-tron-yellow">{progress.streak}</p>
               </div>
               <div className="bg-white/5 p-4 rounded text-center border border-white/10">
                 <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Rango</p>
                 <p className="text-xl font-black text-tron-staff mt-1">
                   {accuracy >= 80 ? 'ATTENDING' : accuracy >= 60 ? 'SENIOR' : 'JUNIOR'}
                 </p>
               </div>
             </div>



             <div className="mb-12">
               <h3 className="text-[10px] uppercase text-white/30 font-black tracking-[0.4em] mb-6 flex items-center gap-2">
                 <Database size={14} className="text-tron-cyan" /> Sincronización Cloud
               </h3>
               {authUser ? (
                 <div className="bg-tron-cyan/10 border border-tron-cyan/30 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-tron-cyan font-bold uppercase tracking-widest text-sm mb-1">{authUser.email}</p>
                      <p className="text-[10px] text-white/60">Tu progreso está cifrado y resguardado en la Red.</p>
                    </div>
                    <GlowButton variant="outline" size="sm" onClick={logout}>Desconectar</GlowButton>
                 </div>
               ) : (
                 <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">Backup Local</p>
                      <p className="text-[10px] text-white/40">Inicia sesión con Google para sincronizar tu Identidad en la nube.</p>
                    </div>
                    <GlowButton variant="cyan" onClick={handleLogin}>
                       Vincular Cuenta
                    </GlowButton>
                 </div>
               )}
             </div>

             <div className="mb-12">
               <h3 className="text-[10px] uppercase text-white/30 font-black tracking-[0.4em] mb-6 flex items-center gap-2">
                 <Star size={14} className="text-tron-yellow" /> Archivo de Logros
               </h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {ACHIEVEMENTS.map(ach => (
                   <div 
                    key={ach.id} 
                    className={cn(
                      "p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-500",
                      progress.achievements?.includes(ach.id) 
                        ? "bg-white/5 border-tron-yellow/30 shadow-[0_0_20px_rgba(255,184,0,0.1)]" 
                        : "bg-black/20 border-white/5 opacity-20 filter grayscale scale-95"
                    )}
                   >
                     <div className={cn(
                       "w-12 h-12 rounded-full flex items-center justify-center mb-3 border backdrop-blur-sm",
                       progress.achievements?.includes(ach.id) ? "bg-tron-yellow/10 border-tron-yellow/50" : "bg-black/40 border-white/5"
                     )}>
                       {ach.icon}
                     </div>
                     <span className="text-[9px] font-black uppercase text-white tracking-[0.1em] leading-tight">{ach.name}</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="space-y-4">
                <h3 className="text-xs uppercase text-white/50 font-bold tracking-widest mb-4">Mapeo de Competencias</h3>
                
                {Object.keys(progress.byTopic).length >= 3 && (
                  <div className="flex justify-center my-8">
                    <RadarChart 
                      data={Object.entries(progress.byTopic).map(([topicId, statsVar]) => {
                        const stats = statsVar as { attempted: number; correct: number };
                        const topic = GASTRO_TOPICS.find(t => t.id === topicId);
                        const pct = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
                        return { label: topic?.name?.substring(0, 10) + '...' || topicId, value: pct };
                      })}
                      size={250}
                    />
                  </div>
                )}

                {Object.entries(progress.byTopic).map(([topicId, statsVar]) => {
                  const stats = statsVar as { attempted: number; correct: number };
                  const topic = GASTRO_TOPICS.find(t => t.id === topicId);
                  if (!topic) return null;
                  const pct = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
                  return (
                    <div key={topicId} className="flex items-center gap-4">
                      <span className="w-1/3 text-xs font-mono text-white/70 truncate">{topic.name}</span>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className={cn("h-full", pct > 70 ? "bg-tron-cyan" : pct > 40 ? "bg-tron-yellow" : "bg-tron-sub")} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-12 text-right text-xs font-mono">{pct}%</span>
                    </div>
                  );
                })}
             </div>
           </div>
        </div>
      </div>
    );
  }

  if (currentView === 'cases') {
    return <ClinicalCases onExit={() => setCurrentView('lobby')} />;
  }

  if (currentView === 'ranking') {
    return <Leaderboard onExit={() => setCurrentView('lobby')} localProgress={progress} />;
  }

  if (currentView === 'chat') {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12 min-h-screen border-x-0 sm:border-x-4 border-tron-cyan/10">
        <header className="flex justify-between items-center mb-12">
          <button 
            onClick={() => { playAudio('click'); setCurrentView('lobby'); }}
            className="p-1 px-4 border border-white/10 rounded hover:bg-white/5 hover:text-tron-cyan transition-colors flex items-center gap-2 group"
          >
            <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" /> 
            <span className="text-[10px] uppercase font-bold tracking-widest">Volver</span>
          </button>
          <div className="text-right">
             <h2 className="text-white font-display text-4xl font-black tracking-tighter uppercase italic">
               Oracle <span className="text-tron-cyan">Interface</span>
             </h2>
             <p className="text-[10px] text-tron-cyan/40 font-mono tracking-widest">GEMINI_PROTOCOL_V3</p>
          </div>
        </header>
        <GastroChat onBack={() => setCurrentView('lobby')} />
      </div>
    );
  }

  return null;
}
