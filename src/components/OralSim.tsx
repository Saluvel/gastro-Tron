import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Send, RotateCcw, Brain, ShieldAlert, Sparkles, User } from 'lucide-react';
import { GASTRO_TOPICS } from '../data/categories';
import { Topic } from '../types/quiz';
import { TronCard } from './TronCard';
import { GlowButton } from './GlowButton';
import { cn } from '../lib/utils';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OralSimProps {
  onExit: () => void;
}

export function OralSim({ onExit }: OralSimProps) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const startSim = async (topic: Topic) => {
    setSelectedTopic(topic);
    setIsTyping(true);
    
    const prompt = `Eres un estricto examinador del "Board" de Gastroenterología evaluando oralmente a un Fellow en el tema: ${topic.name}.
    Presenta un caso clínico complejo y abierto relacionado con este tema en 3-4 oraciones. Luego, haz UNA sola pregunta procedimental o diagnóstica de "Next Best Step".
    Tono: Académico, intimidante pero justo, directo al grano.
    No des opciones. Espera la respuesta del aspirante. Termina tu mensaje con la pregunta.`;

    try {
      const apiKey = process.env.GEMINI_API_KEY || '';
      if (!apiKey) throw new Error("API_KEY_MISSING");
      const ai = new GoogleGenAI({ apiKey });
      
      const systemMessage: Message = { role: 'system', content: prompt };
      
      const response = await ai.models.generateContent({
        model: "gemini-1.5-pro-latest",
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

      const text = response.text;
      setMessages([
        systemMessage,
        { role: 'assistant', content: text || "Error al generar caso." }
      ]);
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.message === "API_KEY_MISSING") {
        setMessages([{ role: 'assistant', content: "[ERROR] Falta GEMINI_API_KEY en tu entorno Vercel. Configura esta variable para usar la simulación oral." }]);
      } else {
        setMessages([{ role: 'assistant', content: "Error de conexión con el tribunal del Board." }]);
      }
    }
    setIsTyping(false);
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY || '';
      if (!apiKey) throw new Error("API_KEY_MISSING");
      const ai = new GoogleGenAI({ apiKey });

      const conversationHistory = newMessages.map(m => ({
        role: m.role === 'system' ? 'user' : m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      // Acomodar el sistema a un rol user falso (Gemini no siempre acepta system explícito en history normal sin instructions)
      const prompt = `El aspirante respondió: "${input}". 
      Evalúa críticamente su respuesta en un parrafito. Si está mal o incompleto, indícale por qué de forma firme. 
      Luego, si corresponde, haz una pregunta de seguimiento (follow-up) subiendo la dificultad. Si el caso ya se resolvió, dale una calificación final (Ej: "Aprobado", "Reprobado") y una perla de oro.`;

      conversationHistory.push({ role: 'user', parts: [{ text: prompt }] });

      const response = await ai.models.generateContent({
        model: "gemini-1.5-pro-latest",
        contents: conversationHistory,
      });

      setMessages([...newMessages, { role: 'assistant', content: response.text || "..." }]);
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.message === "API_KEY_MISSING") {
        setMessages([...newMessages, { role: 'assistant', content: "[ERROR] Falta GEMINI_API_KEY en tu entorno Vercel. Configura esta variable." }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', content: "Error de red." }]);
      }
    }
    setIsTyping(false);
  };

  if (!selectedTopic) {
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-12 min-h-[80vh] flex flex-col">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black text-tron-cyan uppercase tracking-tighter shrink-0 flex items-center gap-3">
              <ShieldAlert size={36} className="text-tron-yellow" /> Panel de Tribunal Evaluador
            </h2>
            <p className="text-white/40 font-serif italic mt-2">Simulador interactivo tipo "Oral Boards"</p>
          </div>
          <button 
            onClick={onExit}
            className="px-4 py-2 border border-white/10 rounded uppercase text-[10px] tracking-widest font-bold hover:bg-white/5 transition-all text-white/60"
          >
            Volver al Lobby
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GASTRO_TOPICS.map(topic => (
            <motion.div whileHover={{ scale: 1.02 }} key={topic.id}>
              <TronCard 
                accentColor="rgba(255,184,0,0.3)" 
                className="p-6 cursor-pointer hover:border-tron-yellow/50 transition-all h-full bg-tron-card/50"
                onClick={() => startSim(topic)}
              >
                <h3 className="font-bold text-lg text-white mb-2">{topic.name}</h3>
                <p className="text-xs text-white/40 font-serif line-clamp-2">{topic.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-tron-yellow uppercase tracking-widest font-black flex items-center justify-between">
                  Iniciar Tribunal <Mic size={14} />
                </div>
              </TronCard>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 h-screen flex flex-col pt-12">
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <button onClick={() => setSelectedTopic(null)} className="p-2 border border-white/10 rounded hover:bg-white/5 text-white/50">
            <RotateCcw size={16} />
          </button>
          <div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tron-yellow to-tron-cyan uppercase tracking-widest">
              Tribunal: {selectedTopic.name}
            </h2>
            <p className="text-[10px] text-white/40 font-mono">Modo de Evaluación Activo</p>
          </div>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto mb-6 pr-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.filter(m => m.role !== 'system').map((msg, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={idx} 
            className={cn(
              "flex gap-4 max-w-[85%]",
              msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <div className={cn(
              "shrink-0 w-10 h-10 rounded-full flex items-center justify-center border",
              msg.role === 'assistant' 
                ? "bg-tron-yellow/10 border-tron-yellow text-tron-yellow" 
                : "bg-tron-cyan/10 border-tron-cyan text-tron-cyan"
            )}>
              {msg.role === 'assistant' ? <Brain size={20} /> : <User size={20} />}
            </div>
            <div className={cn(
              "p-5 rounded-2xl border text-sm md:text-base leading-relaxed whitespace-pre-wrap font-serif",
              msg.role === 'assistant' 
                ? "bg-tron-yellow/5 border-tron-yellow/20 text-white shadow-[0_0_15px_rgba(255,184,0,0.05)] rounded-tl-sm italic"
                : "bg-tron-cyan/10 border-tron-cyan/30 text-white shadow-[0_0_15px_rgba(0,242,255,0.05)] rounded-tr-sm"
            )}>
              {msg.content}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex gap-4 max-w-[85%] animate-pulse opacity-50">
            <div className="shrink-0 w-10 h-10 rounded-full bg-tron-yellow/20 border border-tron-yellow/50 flex items-center justify-center">
              <Brain size={20} className="text-tron-yellow" />
            </div>
            <div className="p-4 bg-tron-yellow/5 border border-tron-yellow/20 rounded-2xl rounded-tl-sm text-tron-yellow font-mono text-xs flex items-center gap-2">
              <Sparkles size={12} /> Analizando respuesta...
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="bg-white/5 border border-white/10 p-2 rounded-xl flex gap-2">
        <input 
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={isTyping}
          placeholder="Escribe tu razonamiento clínico y manejo..."
          className="flex-1 bg-transparent px-4 py-3 outline-none text-white font-serif placeholder:text-white/20 placeholder:font-sans placeholder:italic"
        />
        <button 
          type="submit" 
          disabled={isTyping || !input.trim()}
          className="bg-tron-cyan text-black px-6 rounded-lg font-black tracking-widest uppercase text-xs hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Responder <Send size={14} />
        </button>
      </form>
    </div>
  );
}
