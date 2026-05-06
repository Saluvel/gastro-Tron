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
  Lightbulb,
  Activity,
  ZoomIn,
  Search,
  BookMarked
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { GASTRO_TOPICS } from './data/categories';
import { SEED_QUESTIONS } from './data/seedQuestions';
import { Question, Difficulty, UserProgress, Topic } from './types/quiz';
import { generateQuestions } from './services/ai';
import { GlowButton } from './components/GlowButton';
import { TronCard } from './components/TronCard';
import { OralSim } from './components/OralSim';
import { RadarChart } from './components/RadarChart';
import { ClinicalCases } from './components/ClinicalCases';
import { Leaderboard } from './components/Leaderboard';
import { playAudio, setSoundEnabled } from './lib/audio';
import { cn } from './lib/utils';

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
  savedPearls: []
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

const apiKeyForOracle = process.env.GEMINI_API_KEY || '';
const ai = apiKeyForOracle ? new GoogleGenAI({ apiKey: apiKeyForOracle }) : ({} as GoogleGenAI);

const GastroChat = ({ onBack }: { onBack: () => void }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    playAudio('magic');
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    playAudio('magic');
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    if (!apiKeyForOracle) {
       setMessages(prev => [...prev, { role: 'model', text: "[ERROR] Falta configurar la variable GEMINI_API_KEY en tu entorno (Vercel). Configúrala para usar el Oráculo." }]);
       setIsLoading(false);
       return;
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "Eres el Oráculo de GAS-TRON, una IA experta en gastroenterología clínica. Tu objetivo es ayudar a Fellows y Residentes con dudas médicas, perlas fisiopatológicas y guías de práctica clínica (AGA, ACG, ESGE, AASLD). Tus respuestas deben ser técnicas, precisas y con un tono 'cyberpunk/tron' pero profesional. Siempre aclara que tus respuestas son informativas y no sustituyen el juicio clínico profesional."
        }
      });

      const modelText = response.text || "Error al procesar la respuesta del Oráculo.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
      playAudio('magic');
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Falla de conexión con el Oráculo. Los servidores de la Red están saturados." }]);
    } finally {
      setIsLoading(false);
    }
  };

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
  const [isSimMode, setIsSimMode] = useState(false);
  const [isSurvivalMode, setIsSurvivalMode] = useState(false);
  const [showDailyGuide, setShowDailyGuide] = useState(false);
  const [isOralMode, setIsOralMode] = useState(true); // Default to true as per user interest
  const [revealedOral, setRevealedOral] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [targetQuestionCount, setTargetCount] = useState(() => {
    const saved = localStorage.getItem('gastro_quiz_target_count');
    return saved ? parseInt(saved, 10) : 10;
  });
  const [pearlsSearch, setPearlsSearch] = useState('');
  const [pearlsFilterTopic, setPearlsFilterTopic] = useState<string | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
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
  const [showCalcs, setShowCalcs] = useState(false);
  const [showPearls, setShowPearls] = useState(false);
  const [showVisualDetail, setShowVisualDetail] = useState(false);

  const savePearl = (question: Question) => {
    if (!question.clinicalPearl) return;
    if (progress.savedPearls?.some(p => p.questionId === question.id)) return;

    playAudio('success');
    setProgress(prev => ({
      ...prev,
      savedPearls: [
        ...(prev.savedPearls || []),
        {
          questionId: question.id,
          text: question.clinicalPearl!,
          topic: question.topic,
          date: Date.now()
        }
      ]
    }));
  };

  // --- CALCULATORS COMPONENT ---
  const MedicalCalculators = () => {
    const [calcType, setCalcType] = useState<'meld' | 'fib4' | 'child' | 'maddrey'>('meld');
    
    // MELD-Na Calc
    const [meldData, setMeldData] = useState({ bil: 1.2, inr: 1.1, cr: 0.9, na: 138 });
    const meldScore = useMemo(() => {
      const { bil, inr, cr, na } = meldData;
      // Simplified MELD-Na calculation
      const m = 3.78 * Math.log(bil) + 11.2 * Math.log(inr) + 9.57 * Math.log(cr) + 6.43;
      let finalMeld = Math.round(m + 10);
      if (finalMeld > 11) {
        finalMeld = finalMeld + 1.32 * (137 - na) - 0.033 * finalMeld * (137 - na);
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
              <div className="text-6xl font-black text-white font-display tracking-tighter text-glow-cyan">{meldScore}</div>
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
    ...SEED_QUESTIONS,
    ...(Object.values(cachedQuestions).flat() as Question[])
  ], [cachedQuestions]);

  useEffect(() => {
    if (currentView === 'flashcards') {
      setFlashIndex(0);
      setIsFlipped(false);
    }
  }, [currentView]);

  const dailyPearl = useMemo(() => {
    const allPearls = SEED_QUESTIONS.map(q => ({
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
  useEffect(() => {
    localStorage.setItem('gastro_quiz_target_count', targetQuestionCount.toString());
  }, [targetQuestionCount]);

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem('gastro_quiz_progress', JSON.stringify(progress));
  }, [progress]);

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
          {/* Core Glow */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-2xl opacity-30"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <motion.svg 
            viewBox="0 0 24 24" 
            className="w-full h-full relative z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: level >= 4 ? 1 : level >= 3 ? 2 : level === 2 ? 4 : 8, repeat: Infinity, ease: "linear" }}
          >
            {/* Level 0: Base */}
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="0.5" strokeDasharray="1 4" className="opacity-30" />
            <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" strokeDasharray={level >= 1 ? "12 4" : "2 10"} className="transition-all duration-700" />
            
            {/* Level 2: Outer Ring Counter-Rotate */}
            {level >= 2 && (
              <motion.circle 
                cx="12" cy="12" r="11" 
                stroke={color} strokeWidth="0.8" 
                strokeDasharray="4 8" 
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Level 3: Inner Core */}
            {level >= 3 && (
              <circle cx="12" cy="12" r="5" fill={color} className={cn(level >= 5 ? "animate-pulse" : "opacity-90")} />
            )}

            {/* Level 4: Lightning / Sparkles */}
            {level >= 4 && (
               <motion.path 
                 d="M12 1 L12 7 M12 17 L12 23 M1 12 L7 12 M17 12 L23 12 M4 4 L8 8 M16 16 L20 20 M4 20 L8 16 M16 8 L20 4" 
                 stroke={color} strokeWidth="1.2" strokeLinecap="round"
                 animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                 transition={{ duration: 0.5, repeat: Infinity }}
               />
            )}
            
            <circle cx="12" cy="12" r="2.5" fill={color} className="opacity-80" />
          </motion.svg>
          
          {/* Particles / Shockwaves */}
          {level >= 1 && (
            <div className="absolute flex justify-center items-center pointer-events-none w-full h-full">
              <span className="absolute font-black text-2xl drop-shadow-md z-20" style={{ color: color }}>{streak}</span>
            </div>
          )}

          {level >= 2 && (
            <div className="absolute inset-0 pointer-events-none">
              <div className={cn("absolute inset-2 rounded-full border-2 animate-ping", level >= 3 ? "duration-500 scale-150 border-white/40" : "duration-1000 border-white/20 scale-125", 'opacity-0')} />
              {level >= 5 && (
                <div className="absolute inset-[-20px] rounded-full border-2 border-[#ff00ff]/50 animate-pulse shadow-[0_0_40px_#ff00ff]" />
              )}
            </div>
          )}
        </div>
        
        {level >= 1 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            key={text}
            className="flex flex-col hidden md:flex ml-2"
          >
            <span className="text-[11px] uppercase font-black tracking-[0.3em] text-white/70 mb-1 flex items-center gap-2">
              <Zap size={14} className="text-tron-yellow animate-pulse" /> 
              Serie {streak} • {msg}
            </span>
            <span 
              className={cn("text-3xl lg:text-4xl font-display font-black tracking-tighter uppercase", streakVisuals.intensity)} 
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
    const { color, text, msg } = streakVisuals;

    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.2 }}
          className="bg-black/80 backdrop-blur-xl border-4 p-12 rounded-[3rem] text-center shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
          style={{ borderColor: color }}
        >
          {/* Animated Background Rings */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-[-100%] animate-[spin_10s_linear_infinite] opacity-10" 
                  style={{ background: `conic-gradient(from 0deg, transparent, ${color}, transparent)` }} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="mb-6 p-6 rounded-full bg-white/5 border border-white/10"
            >
              <Zap size={64} style={{ color }} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 italic" style={{ color, textShadow: `0 0 30px ${color}` }}>
              {text}
            </h2>
            
            <div className="flex items-center gap-4 mb-4">
               <div className="h-px w-12 bg-white/20" />
               <span className="text-white text-2xl font-black uppercase tracking-[0.2em]">{currentStreak} ACIERTOS SEGUIDOS</span>
               <div className="h-px w-12 bg-white/20" />
            </div>
            
            <p className="text-white/60 text-xl font-serif italic max-w-md">
              {msg}
            </p>
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
      const seeds = SEED_QUESTIONS.filter(q => q.topic === t.id);
      const cached = cachedQuestions[t.id] || [];
      return [...seeds, ...cached].sort(() => Math.random() - 0.5).slice(0, 5);
    });

    const simQuestions = pools.flat().sort(() => Math.random() - 0.5);
    
    if (simQuestions.length < 10) {
      alert("Necesitas acumular más preguntas en el Data-Core para iniciar un simulacro completo. Realiza algunos módulos de temas específicos primero.");
      setCurrentView('lobby');
      setIsSimMode(false);
    } else {
      setQuestions(simQuestions);
      setAnswers(new Array(simQuestions.length).fill(null));
      setCurrentQuestionIndex(0);
      setShowFeedback(false);
      setTimeLeft(simQuestions.length * 60); // 60 seconds per question
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
    
    const allSeeds = SEED_QUESTIONS;
    const allCached = Object.values(cachedQuestions).flat() as Question[];
    const simQuestions = [...allSeeds, ...allCached].sort(() => Math.random() - 0.5);
    
    if (simQuestions.length < 10) {
      alert("Necesitas acumular más preguntas para el Modo Supervivencia.");
      setCurrentView('lobby');
      setIsSurvivalMode(false);
    } else {
      setQuestions(simQuestions);
      setAnswers(new Array(simQuestions.length).fill(null));
      setCurrentQuestionIndex(0);
      setShowFeedback(false);
      setTimeLeft(0); // No global timer, just death on wrong
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
      const mixedQuestions = SEED_QUESTIONS
        .sort(() => 0.5 - Math.random())
        .slice(0, 30);
      
      setQuestions(mixedQuestions);
      setAnswers(new Array(mixedQuestions.length).fill(null));
      setCurrentQuestionIndex(0);
      setShowFeedback(false);
      setTimeLeft(mixedQuestions.length * 60); // 1 minute per question
      setSelectedTopic({ id: 'board_sim', name: 'Simulacro Clínico Global (Board Exam)', description: 'Simulación de 30 preguntas que abarcan todas las áreas. Condición estricta de tiempo.' });
      setCurrentView('quiz');
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const startQuiz = async (topic: Topic) => {
    // Intentar reanudar si es el mismo tema y no hemos terminado
    if (!isSimMode && !isSurvivalMode && selectedTopic?.id === topic.id && questions.length > 0 && currentView !== 'results') {
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
    const seeds = SEED_QUESTIONS.filter(q => q.topic === topic.id);
    
    // 2. Get previously AI-generated questions for this topic
    const cached = cachedQuestions[topic.id] || [];
    
    // Combine them
    const existingQuestions = [...seeds, ...cached];

    try {
      let currentPool = [...existingQuestions];

      // If we don't have enough, try to generate to reach the target
      // We'll give it up to 2 attempts if the AI returns too few
      let attempts = 0;
      while (currentPool.length < targetQuestionCount && attempts < 2) {
        const needed = targetQuestionCount - currentPool.length;
        const newAIQuestions = await generateQuestions(topic.id, topic.name, selectedDifficulty, needed);
        
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
        setQuestions(finalQuestions);
        setAnswers(new Array(finalQuestions.length).fill(null));
        setCurrentQuestionIndex(0);
        setShowFeedback(false);
        setRevealedOral(false);
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
        setQuestions(fallback);
        setAnswers(new Array(fallback.length).fill(null));
        setCurrentQuestionIndex(0);
        setShowFeedback(false);
        setRevealedOral(false);
      } else {
        setCurrentView('lobby');
        alert("El sistema de IA (Gemini 3) está experimentando alta demanda o hay un problema de cuota. Por favor, intenta de nuevo en unos minutos o verifica tu API Key.");
      }
    }
    setIsLoading(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    const isAnsCorrect = index === questions[currentQuestionIndex].correctIndex;
    if (isAnsCorrect) {
      playAudio('correct');
      setCurrentStreak(prev => prev + 1);
    } else {
      playAudio('wrong');
      setCurrentStreak(0);
    }
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);
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
  };

  const nextQuestion = async () => {
    // If Survival Mode and answered wrong, game over
    if (isSurvivalMode && answers[currentQuestionIndex] !== questions[currentQuestionIndex].correctIndex) {
      finishQuiz();
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
      setRevealedOral(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
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
              const nextQuestionsBatch = await generateQuestions(selectedTopic.id, selectedTopic.name, nextLevel, neededNow);
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

  const quitQuiz = () => {
    // Direct navigation is safer in iframes than window.confirm
    setCurrentView('lobby');
  };

  // --- VIEWS ---
  
  if (currentView === 'lobby') {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-12 min-h-screen flex flex-col border-x-4 border-tron-cyan/10 relative">
        <IntroOverlay />
        <AchievementNotification />

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
              className="text-5xl md:text-6xl font-display font-black text-glow-cyan text-tron-cyan tracking-tighter flex items-center gap-3"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-12 h-12 md:w-16 md:h-16 text-tron-cyan shrink-0 drop-shadow-[0_0_15px_rgba(0,242,255,0.8)] animate-[spin_8s_linear_infinite]"
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
                            onClick={() => setTargetCount(count)}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GASTRO_TOPICS.filter(t => !['perfil_hepatico', 'eii_avanzada'].includes(t.id)).map((topic) => {
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
      <div className="max-w-6xl mx-auto p-4 md:p-12 min-h-screen py-16 border-x-4 border-tron-cyan/5">
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
                  <StreakLogo streak={currentStreak} />
                  {selectedTopic?.name} 
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
                    className="mb-8 p-10 min-h-[300px] flex flex-col bg-tron-card/50 relative"
                  >
                    {currentQuestion?.pillar && (
                      <div className="absolute -top-3 left-10">
                        <span className={cn(
                          "px-4 py-1 text-[9px] uppercase font-black tracking-widest rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] border",
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

                    <h3 className="text-2xl md:text-3xl text-white font-serif font-light leading-relaxed mb-12">
                      {currentQuestion?.text ? renderWithAcronyms(currentQuestion.text) : null}
                    </h3>

                    <motion.div 
                      layout
                      className="grid gap-4"
                    >
                      {currentQuestion?.options.map((opt, i) => {
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
                              "w-full text-left p-5 rounded-xl border-2 transition-all flex items-center gap-6 group text-lg",
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
                      <div className="mt-8 flex flex-col items-center gap-6 py-12 border-2 border-dashed border-tron-cyan/20 rounded-2xl bg-tron-cyan/[0.02] backdrop-blur-sm">
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }} 
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="p-6 bg-tron-cyan/10 rounded-full text-tron-cyan shadow-[0_0_30px_rgba(0,242,255,0.2)]"
                        >
                          <Mic size={48} />
                        </motion.div>
                        <div className="text-center space-y-2">
                          <h4 className="text-white font-black uppercase tracking-[0.3em] text-lg">¡Responde en Voz Alta!</h4>
                          <p className="text-white/40 text-sm max-w-xs mx-auto">
                            Estructura tu respuesta oral antes de revelar las alternativas científicas.
                          </p>
                        </div>
                        <GlowButton 
                          onClick={() => setRevealedOral(true)}
                          size="lg"
                          variant="cyan"
                          className="mt-4 px-12"
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
                         onClick={() => { playAudio('magic'); setIsOracleOpen(true); }}
                         className="flex-1 py-4 px-6 border border-tron-cyan/20 bg-tron-cyan/5 rounded-2xl hover:bg-tron-cyan/10 transition-all flex items-center justify-center gap-3 group"
                       >
                         <Search size={18} className="text-tron-cyan group-hover:scale-110 transition-transform" />
                         <span className="text-[10px] uppercase font-black tracking-widest text-tron-cyan">Consultar Guía Extendida (Oráculo)</span>
                       </button>
                       <button 
                         onClick={() => savePearl(currentQuestion)}
                         className={cn(
                           "px-6 py-4 border rounded-2xl transition-all flex items-center gap-3 group",
                           progress.savedPearls?.some(p => p.questionId === currentQuestion.id)
                            ? "bg-tron-yellow border-tron-yellow text-black"
                            : "bg-white/5 border-white/10 hover:border-tron-yellow hover:text-tron-yellow text-white/40"
                         )}
                       >
                         <Lightbulb size={18} className={progress.savedPearls?.some(p => p.questionId === currentQuestion.id) ? "text-black" : "text-white/40 group-hover:text-tron-yellow"} />
                         <span className="text-[10px] uppercase font-black tracking-widest">{progress.savedPearls?.some(p => p.questionId === currentQuestion.id) ? 'Guardada' : 'Guardar Perla'}</span>
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
                        "text-xl font-black uppercase tracking-tighter flex items-center gap-2",
                        isCorrect ? "text-tron-cyan" : "text-tron-yellow"
                      )}>
                        {isCorrect ? <Target /> : <AlertCircle />} 
                        {isCorrect ? "Sincronía Correcta" : "Desviación Clínica"}
                      </h4>
                      <p className="text-gray-200 text-lg leading-relaxed font-serif italic border-l-2 border-tron-cyan/30 pl-4 py-1">
                        {currentQuestion?.explanation ? renderWithAcronyms(currentQuestion.explanation) : null}
                      </p>
                    </div>

                    <TronCard accentColor="rgba(255,255,255,0.05)" className="p-6 bg-tron-feedback/60 backdrop-blur-lg">
                      <h5 className="text-sm uppercase font-black text-tron-yellow mb-4 tracking-[0.2em] flex items-center gap-2">
                        <Brain size={16} className="text-white" /> Núcleo Fisiopatológico
                      </h5>
                      <p className="text-base text-white/70 leading-relaxed font-mono">
                        {currentQuestion?.fisiopato ? renderWithAcronyms(currentQuestion.fisiopato) : null}
                      </p>
                    </TronCard>

                    <div className="bg-black/80 p-6 rounded-xl border border-tron-yellow/30 border-l-4 border-l-tron-yellow shadow-inner">
                       <h5 className="text-sm uppercase font-black text-tron-yellow mb-3 tracking-widest flex items-center gap-2 underline underline-offset-4">
                        <Lightbulb size={16} /> Perla Clínica
                      </h5>
                      <p className="text-base text-white font-serif leading-relaxed italic">
                        "{currentQuestion?.clinicalPearl ? renderWithAcronyms(currentQuestion.clinicalPearl) : null}"
                      </p>
                    </div>

                    {currentQuestion?.whyWrong && (
                      <TronCard accentColor="rgba(255,184,0,0.1)" className="p-6 bg-black/40">
                        <h5 className="text-sm uppercase font-black text-tron-yellow mb-4 tracking-[0.2em] flex items-center gap-2">
                          <AlertTriangle size={16} className="text-tron-yellow" /> ¿Por qué fallan las otras?
                        </h5>
                        <div className="space-y-4">
                          {currentQuestion.options.map((opt, idx) => {
                            if (idx === currentQuestion.correctIndex) return null;
                            const reason = currentQuestion.whyWrong?.[idx];
                            if (!reason) return null;
                            return (
                              <div key={idx} className="border-l border-white/10 pl-4 py-1">
                                <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">
                                  Opción {String.fromCharCode(65 + idx)}: {opt.length > 40 ? opt.substring(0, 40) + '...' : opt}
                                </div>
                                <p className="text-xs text-white/70 italic leading-relaxed">
                                  {renderWithAcronyms(reason)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </TronCard>
                    )}

                    <div className="flex flex-col gap-4 pt-4">
                      <div className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-widest font-mono">
                         <FileText size={12} /> Ref: {currentQuestion?.guideline}
                      </div>
                      <GlowButton 
                        size="lg" 
                        onClick={nextQuestion}
                        className="w-full text-base font-black tracking-[0.2em]"
                      >
                        Siguiente Desafío <ChevronRight size={18} className="ml-2 inline" />
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
                  <GastroChat onBack={() => setIsOracleOpen(false)} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => {
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
      <div className="max-w-4xl mx-auto p-4 md:p-8 min-h-screen flex flex-col justify-center items-center">
        <motion.div
           initial={{ scale: 0.95, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            <Trophy size={100} className={isSurvivalMode ? "text-tron-sub mb-8 mx-auto md:mx-0" : "text-tron-staff mb-8 drop-shadow-[0_0_20px_#ff9500] mx-auto md:mx-0"} />
            <h2 className={cn("text-5xl md:text-6xl font-display font-black mb-4 tracking-tighter uppercase leading-none", isSurvivalMode ? "text-tron-sub" : "text-white")}>
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
                     const extras = await generateQuestions(selectedTopic!.id, selectedTopic!.name, selectedDifficulty, 5);
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
                     console.error(e);
                     alert("Error al expandir el banco de preguntas.");
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
      ...SEED_QUESTIONS,
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
      ...SEED_QUESTIONS,
      ...(Object.values(cachedQuestions).flat() as Question[])
    ];

    const filteredPearls = allKnownQuestions.filter(q => {
      const matchesSearch = q.clinicalPearl.toLowerCase().includes(pearlsSearch.toLowerCase()) || 
                            q.text.toLowerCase().includes(pearlsSearch.toLowerCase());
      const matchesTopic = pearlsFilterTopic === 'all' || q.topic === pearlsFilterTopic;
      return matchesSearch && matchesTopic;
    });
    
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-12 min-h-screen border-x-4 border-tron-cyan/10 bg-black/40">
        <header className="mb-12 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => {
                  setCurrentView('lobby');
                  setPearlsSearch('');
                  setPearlsFilterTopic('all');
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
              <select 
                value={pearlsFilterTopic}
                onChange={(e) => setPearlsFilterTopic(e.target.value)}
                className="bg-black/40 border border-tron-cyan/30 rounded-lg py-2 px-4 text-sm text-white focus:outline-none focus:border-tron-cyan appearance-none cursor-pointer font-mono"
              >
                <option value="all">TODOS LOS TEMAS</option>
                {GASTRO_TOPICS.map(t => (
                  <option key={t.id} value={t.id}>{t.name.toUpperCase()}</option>
                ))}
              </select>
            </div>
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
      <div className="max-w-4xl mx-auto p-4 md:p-12 min-h-screen border-x-4 border-tron-cyan/10 bg-black/40 flex flex-col justify-center items-center">
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
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Barrett_esophagus_labeled.jpg/1200px-Barrett_esophagus_labeled.jpg",
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
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Colon_polyp.JPG/1200px-Colon_polyp.JPG",
        hotspot: { x: "40%", y: "40%", label: "Elevación Tipo Is" },
        longDesc: "Lesión sésil con patrón de criptas tipo III de Kudo, sugestivo de adenoma. Requiere mucosectomía endoscópica (EMR)."
      },
      { 
        id: 3,
        title: "Úlcera Gástrica (Forrest IIa)", 
        class: "Forrest IIa", 
        desc: "Vaso visible no sangrante", 
        color: "text-tron-cyan", 
        border: "border-tron-cyan/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gastric_ulcer.jpg/1200px-Gastric_ulcer.jpg",
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
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ulcerative_Colitis.jpg/1200px-Ulcerative_Colitis.jpg",
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
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Esophageal_varices_01.jpg/1200px-Esophageal_varices_01.jpg",
        hotspot: { x: "50%", y: "70%", label: "Puntos Rojos (Cherry Red)" },
        longDesc: "Várices de gran tamaño que ocupan más de un tercio de la luz. Los puntos rojos indican debilidad de la pared y alto riesgo de rotura inminente."
      },
      { 
        id: 6,
        title: "Cáncer Gástrico", 
        class: "Borrmann III", 
        desc: "Úlcera infiltrante con bordes elevados", 
        color: "text-tron-cyan", 
        border: "border-tron-cyan/30",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gastric_cancer_01.jpg/1200px-Gastric_cancer_01.jpg",
        hotspot: { x: "45%", y: "30%", label: "Borde Infiltrativo Irregular" },
        longDesc: "Lesión ulcerada con infiltración de la pared circundante. La biopsia es mandatoria para determinar histología (tipo Laurén) y grado de diferenciación."
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
      ...SEED_QUESTIONS,
      ...(Object.values(cachedQuestions).flat() as Question[])
    ].filter(q => progress.reviewIds.includes(q.id));

    return (
      <div className="max-w-7xl mx-auto p-4 md:p-12 min-h-screen border-x-4 border-tron-cyan/10 bg-black/60">
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
                     <span className="font-black text-6xl text-white text-glow-cyan leading-none tabular-nums">{accuracy}%</span>
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
      <div className="max-w-7xl mx-auto p-4 md:p-12 min-h-screen border-x-4 border-tron-cyan/10">
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
