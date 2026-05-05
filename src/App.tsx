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
  ShieldCheck
} from 'lucide-react';
import { MeldCalculator, ChildPughCalculator } from './components/Calculators';
import { GASTRO_TOPICS } from './data/categories';
import { SEED_QUESTIONS } from './data/seedQuestions';
import { Question, Difficulty, UserProgress, Topic } from './types/quiz';
import { generateQuestions } from './services/ai';
import { GlowButton } from './components/GlowButton';
import { TronCard } from './components/TronCard';
import { cn } from './lib/utils';

// --- INITIAL STATE & PERSISTENCE ---
const INITIAL_PROGRESS: UserProgress = {
  totalAttempted: 0,
  totalCorrect: 0,
  byTopic: {},
  weakTopics: [],
  streak: 0,
  lastSession: new Date().toISOString(),
};

export default function App() {
  const [currentView, setCurrentView] = useState<'lobby' | 'quiz' | 'results' | 'pearls' | 'sim' | 'bookmarks'>('lobby');
  const [isSimMode, setIsSimMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [targetQuestionCount, setTargetCount] = useState(10);
  const [pearlsSearch, setPearlsSearch] = useState('');
  const [pearlsFilterTopic, setPearlsFilterTopic] = useState<string | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('Fellow');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('gastro_quiz_progress');
    return saved ? JSON.parse(saved) : INITIAL_PROGRESS;
  });

  const [cachedQuestions, setCachedQuestions] = useState<Record<string, Question[]>>(() => {
    const saved = localStorage.getItem('gastro_quiz_cached_questions');
    return saved ? JSON.parse(saved) : {};
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('gastro_quiz_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

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

  // --- LOGIC ---
  const currentQuestion = questions[currentQuestionIndex];

  const userRank = useMemo(() => {
    const xp = progress.totalCorrect * 10;
    if (xp > 3000) return { name: 'Gastro-Chief (Staff)', color: 'text-tron-sub' };
    if (xp > 2000) return { name: 'Senior Fellow', color: 'text-tron-staff' };
    if (xp > 1200) return { name: 'Fellow Gastro', color: 'text-tron-fellow' };
    if (xp > 600) return { name: 'Residente R3 (Chief)', color: 'text-tron-cyan' };
    if (xp > 200) return { name: 'Residente R2', color: 'text-tron-yellow' };
    return { name: 'Residente R2 (Base)', color: 'text-white/60' };
  }, [progress.totalCorrect]);

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
    setIsLoading(true);
    setIsSimMode(true);
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
  const startQuiz = async (topic: Topic) => {
    setSelectedTopic(topic);
    setIsSimMode(false);
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

      if (currentPool.length < targetQuestionCount) {
        const needed = targetQuestionCount - currentPool.length;
        const newAIQuestions = await generateQuestions(topic.name, selectedDifficulty, Math.min(needed, 10));
        
        // Save to cache
        setCachedQuestions(prev => ({
          ...prev,
          [topic.id]: [...(prev[topic.id] || []), ...newAIQuestions]
        }));
        
        currentPool = [...currentPool, ...newAIQuestions];
      }
      
      // Shuffle and pick the target count
      const finalQuestions = currentPool.sort(() => Math.random() - 0.5).slice(0, targetQuestionCount);
      
      if (finalQuestions.length > 0) {
        setQuestions(finalQuestions);
        setAnswers(new Array(finalQuestions.length).fill(null));
        setCurrentQuestionIndex(0);
        setShowFeedback(false);
      } else {
        throw new Error("No hay preguntas disponibles");
      }
    } catch (error) {
      console.error(error);
      if (existingQuestions.length > 0) {
        const fallback = existingQuestions.sort(() => Math.random() - 0.5).slice(0, targetQuestionCount);
        setQuestions(fallback);
        setAnswers(new Array(fallback.length).fill(null));
        setCurrentQuestionIndex(0);
        setShowFeedback(false);
      } else {
        alert("Error al cargar protocolos. Verifica tu conexión.");
        setCurrentView('lobby');
      }
    }
    setIsLoading(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);
    setShowFeedback(true);
  };

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
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

    setProgress(prev => ({
      ...prev,
      totalAttempted: prev.totalAttempted + attemptedCount,
      totalCorrect: prev.totalCorrect + correctCount,
      byTopic: newByTopic,
      weakTopics: newWeakTopics,
      streak: newStreak,
      lastSession: new Date().toISOString()
    }));

    setCurrentView('results');
  };

  const quitQuiz = () => {
    // Direct navigation is safer in iframes than window.confirm
    setCurrentView('lobby');
  };

  // --- VIEWS ---
  
  if (currentView === 'lobby') {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-12 min-h-screen flex flex-col border-x-4 border-tron-cyan/10">
        <header className="flex justify-between items-center mb-12 border-b border-tron-cyan/30 pb-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-display font-black text-glow-cyan text-tron-cyan tracking-tighter"
            >
              GASTRO-TRON <span className="text-xs font-mono tracking-[0.3em] text-tron-yellow ml-4 uppercase opacity-70">Fellowship Protocol</span>
            </motion.h1>
            <p className="text-cyan-200/60 font-medium uppercase tracking-[0.2em] mt-2 italic text-sm">
              Especialidad Médica & Perlas Fisiopatológicas
            </p>
          </div>
            <div className="flex gap-4">
              <GlowButton 
                variant="outline"
                size="sm"
                onClick={() => setCurrentView('bookmarks')}
                className="text-[10px] uppercase font-bold tracking-widest"
              >
                <ShieldCheck size={12} className="mr-2" /> Mis Marcadores ({bookmarks.length})
              </GlowButton>
              <GlowButton 
                variant="outline"
                size="sm"
                onClick={() => setCurrentView('pearls')}
                className="text-[10px] uppercase font-bold tracking-widest"
              >
                <Lightbulb size={12} className="mr-2" /> Galería de Perlas
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
                    {progress.totalCorrect * 10} <span className="text-xs text-tron-cyan">XP</span>
                  </p>
                </div>
                <div className="w-[1px] bg-tron-cyan/20"></div>
                <div className="text-right">
                  <p className="text-[10px] text-tron-yellow uppercase tracking-widest font-bold mb-1">Rendimiento</p>
                  <p className="text-4xl font-mono text-white leading-none">
                    {progress.totalAttempted > 0 ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100) : 0}%
                  </p>
                </div>
              </div>
            </div>
        </header>

        <main className="grid grid-cols-12 gap-8 flex-1">
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-tron-aside border border-tron-cyan/20 p-5 rounded-xl">
              <p className="text-[10px] text-tron-cyan uppercase font-bold mb-4 tracking-widest flex items-center gap-2">
                <Target size={12} /> Estado de Protocolo
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-tighter mb-1 text-white/40 font-bold">
                    <span>Nivel de Acceso</span>
                    <span className="text-tron-staff">{selectedDifficulty}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-tron-staff w-1/3 shadow-[0_0_5px_#ff9500]" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {(['Fellow', 'Staff', 'Subspecialist'] as Difficulty[]).map(lvl => (
                    <button 
                      key={lvl}
                      onClick={() => setSelectedDifficulty(lvl)}
                      className={cn(
                        "w-full text-left p-3 text-xs border-l-2 transition-all uppercase tracking-widest font-bold",
                        selectedDifficulty === lvl 
                          ? "bg-tron-cyan/10 border-tron-cyan text-tron-cyan"
                          : "border-transparent text-white/30 hover:bg-white/5 hover:text-white/60"
                      )}
                    >
                      {lvl}
                    </button>
                  ))}
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
             <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <TronCard accentColor="rgba(255,184,0,0.4)" className="p-8 border-2 border-tron-yellow/50 bg-tron-yellow/5 h-full">
                   <p className="text-tron-yellow font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                     <ShieldCheck size={16} /> Protocolo de Simulacro
                   </p>
                   <h2 className="text-2xl font-bold text-white mb-2">Prueba de Suficiencia Fellow</h2>
                   <p className="text-xs text-white/50 font-serif italic mb-6">
                     Examen trans-temático. 60 segundos por pregunta. Sin retroalimentación inmediata.
                   </p>
                   <GlowButton 
                    variant="staff" 
                    onClick={startSimMode}
                    className="w-full"
                   >
                     Iniciar Simulación
                   </GlowButton>
                </TronCard>

                <TronCard accentColor="rgba(0,242,255,0.4)" className="p-8 border-2 border-tron-cyan/20 bg-tron-cyan/5 h-full">
                   <p className="text-tron-cyan font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                     <LayoutDashboard size={16} /> Configuración Global
                   </p>
                   <h2 className="text-xl font-bold text-white mb-6">Carga de Protocolo</h2>
                   
                   <div className="space-y-4">
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Cantidad de Preguntas por Sesión</p>
                      <div className="flex gap-2">
                        {[5, 10, 15, 20].map(count => (
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
                </TronCard>
              </div>

              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-display font-black text-white uppercase tracking-tighter italic">
                   Módulos Especializados <span className="text-tron-cyan opacity-50 ml-2">[{targetQuestionCount} Preguntas]</span>
                 </h2>
                 <div className="h-[1px] flex-1 bg-gradient-to-r from-tron-cyan/40 to-transparent ml-6" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GASTRO_TOPICS.map((topic) => (
                <motion.div
                  key={topic.id}
                  whileHover={{ scale: 1.01, x: 5 }}
                  onClick={() => startQuiz(topic)}
                  className="cursor-pointer"
                >
                  <TronCard 
                    accentColor={progress.weakTopics.includes(topic.id) ? "rgba(255,68,68,0.3)" : "rgba(0,242,255,0.2)"}
                    className="h-full group hover:border-tron-cyan/50 transition-all flex flex-col"
                  >
                    <h3 className="text-lg font-bold text-white group-hover:text-glow-cyan group-hover:text-tron-cyan transition-all">
                      {topic.name}
                    </h3>
                    <p className="text-xs text-white/40 mt-2 font-serif leading-relaxed italic">
                      {topic.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
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
              ))}
            </div>
          </section>
        </main>

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
        <header className="flex justify-between items-end mb-12 border-b border-tron-cyan/20 pb-6 text-tron-text">
          <div className="flex items-center gap-6">
            <button 
              onClick={quitQuiz}
              className="p-1 px-4 border border-white/10 rounded hover:bg-white/5 hover:text-tron-yellow transition-colors flex items-center gap-2 group"
            >
              <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" /> 
              <span className="text-[10px] uppercase font-bold tracking-widest">Menú Principal</span>
            </button>
            <h2 className="text-tron-cyan font-display text-4xl font-black tracking-tighter flex items-center gap-4">
              <Stethoscope size={32} className="text-tron-yellow" /> 
              {selectedTopic?.name} 
              <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-white/40 font-mono tracking-widest ml-4 border border-white/10 uppercase">
                {selectedDifficulty}
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
               onClick={() => toggleBookmark(currentQuestion.id)}
               className={cn(
                 "p-2 rounded-lg border transition-all hover:scale-110 active:scale-95",
                 bookmarks.includes(currentQuestion.id) 
                   ? "bg-tron-yellow text-black border-tron-yellow shadow-[0_0_15px_#ffb800]" 
                   : "bg-white/5 text-white/30 border-white/10 hover:border-tron-yellow/50"
               )}
            >
              <ShieldCheck size={20} fill={bookmarks.includes(currentQuestion.id) ? "currentColor" : "none"} />
            </button>
            {isSimMode && (
              <div className={cn(
                "px-4 py-2 border rounded-lg font-mono text-xl shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-3 animate-in fade-in slide-in-from-right-4",
                timeLeft < 60 ? "text-tron-sub border-tron-sub animate-pulse" : "text-white border-white/20"
              )}>
                <Timer size={20} /> {formatTime(timeLeft)}
              </div>
            )}
            <div className="text-right">
            <span className="text-4xl font-mono text-white">
              {String(currentQuestionIndex + 1).padStart(2, '0')}
              <span className="text-white/10 mx-1">/</span>
              {String(questions.length).padStart(2, '0')}
            </span>
            <div className="w-32 h-1 bg-white/5 mt-2 rounded-full overflow-hidden">
               <motion.div 
                className="h-full bg-tron-cyan shadow-[0_0_10px_cyan]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
               />
            </div>
          </div>
        </div>
      </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-40">
            <div className="relative">
              <div className="w-24 h-24 border-2 border-tron-cyan/10 rounded-full animate-ping absolute inset-0" />
              <div className="w-24 h-24 border-4 border-tron-yellow/20 border-t-tron-yellow rounded-full animate-spin" />
            </div>
            <p className="text-tron-yellow mt-12 font-mono uppercase tracking-[0.5em] text-sm animate-pulse">Sincronizando Heurística...</p>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <TronCard 
                    accentColor="rgba(0,242,255,0.4)" 
                    className="mb-8 p-10 min-h-[300px] flex flex-col bg-tron-card/50"
                  >
                    <h3 className="text-2xl md:text-3xl text-white font-serif font-light leading-relaxed mb-12">
                      {currentQuestion?.text}
                    </h3>

                    <div className="grid gap-4">
                      {currentQuestion?.options.map((opt, i) => {
                        const isSelected = answers[currentQuestionIndex] === i;
                        const isCorrectOption = currentQuestion.correctIndex === i;
                        
                        let styleClass = "border-white/10 hover:border-tron-cyan/40 hover:bg-white/5";
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
                            <span className="flex-1 leading-tight">{opt}</span>
                            {showFeedback && isCorrectOption && <CheckCircle2 size={24} className="text-tron-cyan" />}
                            {showFeedback && isSelected && !isCorrectOption && <XCircle size={24} className="text-tron-yellow" />}
                          </button>
                        );
                      })}
                    </div>
                  </TronCard>
                </motion.div>
              </AnimatePresence>
            </div>

            <aside className="col-span-12 lg:col-span-4">
              <AnimatePresence>
                {showFeedback ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className={cn(
                      "p-6 rounded-2xl border-2 flex flex-col gap-4 shadow-lg",
                      isCorrect ? "border-tron-cyan bg-tron-cyan/5 shadow-tron-cyan/20" : "border-tron-yellow bg-tron-yellow/5 shadow-tron-yellow/20"
                    )}>
                      <h4 className={cn(
                        "text-xl font-black uppercase tracking-tighter flex items-center gap-2",
                        isCorrect ? "text-tron-cyan" : "text-tron-yellow"
                      )}>
                        {isCorrect ? <Target /> : <AlertCircle />} 
                        {isCorrect ? "Sincronía Correcta" : "Desviación Clínica"}
                      </h4>
                      <p className="text-gray-200 text-lg leading-relaxed font-serif italic border-l-2 border-tron-cyan/30 pl-4 py-1">
                        {currentQuestion.explanation}
                      </p>
                    </div>

                    <TronCard accentColor="rgba(255,255,255,0.05)" className="p-6 bg-tron-feedback/60 backdrop-blur-lg">
                      <h5 className="text-sm uppercase font-black text-tron-yellow mb-4 tracking-[0.2em] flex items-center gap-2">
                        <Brain size={16} className="text-white" /> Núcleo Fisiopatológico
                      </h5>
                      <p className="text-base text-white/70 leading-relaxed font-mono">
                        {currentQuestion.fisiopato}
                      </p>
                    </TronCard>

                    <div className="bg-black/80 p-6 rounded-xl border border-tron-yellow/30 border-l-4 border-l-tron-yellow shadow-inner">
                       <h5 className="text-sm uppercase font-black text-tron-yellow mb-3 tracking-widest flex items-center gap-2 underline underline-offset-4">
                        <Lightbulb size={16} /> Perla Clínica
                      </h5>
                      <p className="text-base text-white font-serif leading-relaxed italic">
                        "{currentQuestion.clinicalPearl}"
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 pt-4">
                      <div className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-widest font-mono">
                         <FileText size={12} /> Ref: {currentQuestion.guideline}
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
            <Trophy size={100} className="text-tron-staff mb-8 drop-shadow-[0_0_20px_#ff9500] mx-auto md:mx-0" />
            <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-4 tracking-tighter uppercase leading-none">
              Protocolo <br/><span className="text-tron-cyan text-glow-cyan text-4xl">Finalizado</span>
            </h2>
            <p className="text-white/30 uppercase tracking-[0.4em] text-xs font-mono mb-8 border-l-2 border-tron-yellow pl-6 py-2">
              Módulo: {selectedTopic?.name} <br/>
              Status: <span className={scorePercent >= 70 ? "text-tron-cyan" : "text-tron-yellow"}>
                {scorePercent >= 70 ? "Competencia Aprobada" : "Refuerzo Requerido"}
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <GlowButton 
                variant="outline" 
                onClick={() => setCurrentView('lobby')}
                className="flex-1"
              >
                Menú de Protocolos
              </GlowButton>
              <GlowButton 
                variant="cyan"
                onClick={() => startQuiz(selectedTopic!)}
                className="flex-1"
              >
                Reiniciar Módulo
              </GlowButton>
              {/* Added option for AI expansion */}
              <GlowButton 
                variant="staff"
                onClick={async () => {
                   setIsLoading(true);
                   try {
                     const extras = await generateQuestions(selectedTopic!.name, selectedDifficulty, 5);
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
      ...Object.values(cachedQuestions).flat()
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
                      <h3 className="text-xl font-serif text-white leading-relaxed">{q.text}</h3>
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
                        {q.explanation}
                      </p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                      <h4 className="text-[10px] uppercase font-black text-tron-yellow tracking-widest mb-4">Perla de Fellowship</h4>
                      <p className="text-base text-gray-300 font-mono italic">
                        "{q.clinicalPearl}"
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
      ...Object.values(cachedQuestions).flat()
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
                      {q.clinicalPearl}
                    </p>

                    <div className="space-y-2 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                      <p className="text-[10px] text-tron-cyan uppercase tracking-widest font-bold">Contexto Original:</p>
                      <p className="text-xs text-white/60 font-serif leading-relaxed line-clamp-2">
                        {q.text}
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
      </div>
    );
  }

  return null;
}
