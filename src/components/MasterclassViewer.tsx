import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight, ChevronLeft, Lightbulb, CheckCircle2, ListChecks, Play, Zap } from 'lucide-react';
import { MASTERCLASS_DATA, MasterclassData } from '../data/masterclassContent';
import { GlowButton } from './GlowButton';
import { TronCard } from './TronCard';
import { cn } from '../lib/utils';
import { playAudio } from '../lib/audio';

interface MasterclassViewerProps {
  topicId: string;
  onComplete: () => void;
  onExit: () => void;
}

export const MasterclassViewer: React.FC<MasterclassViewerProps> = ({ topicId, onComplete, onExit }) => {
  const data = MASTERCLASS_DATA[topicId];
  const [currentStep, setCurrentStep] = useState(0); // 0: Intro, 1...n: Sections, n+1: Summary

  if (!data) return null;

  const totalSteps = data.sections.length + 2;

  const handleNext = () => {
    playAudio('click');
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    playAudio('click');
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-tron-cyan font-black tracking-widest uppercase text-xs">Protocolo Masterclass: {topicId}</h2>
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1 w-8 rounded-full transition-all",
                currentStep === i ? "bg-tron-cyan shadow-[0_0_10px_#00f2ff]" : 
                currentStep > i ? "bg-tron-cyan/40" : "bg-white/10"
              )} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="space-y-6"
          >
            <TronCard accentColor="rgba(0,242,255,0.2)" className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-tron-cyan/10 border-2 border-tron-cyan rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <BookOpen size={40} className="text-tron-cyan" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic">
                {data.title}
              </h1>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto font-serif">
                Bienvenido al módulo de alta especialización. Al finalizar este bloque teórico, se activará la fase de evaluación crítica.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto bg-black/40 p-6 rounded-2xl border border-white/5">
                <h3 className="col-span-full text-tron-cyan font-black text-[10px] tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
                  <ListChecks size={14} /> Objetivos de Sincronía
                </h3>
                {data.objectives.map((obj, i) => (
                  <div key={i} className="flex gap-3 text-xs text-white/70 italic leading-relaxed">
                    <span className="text-tron-cyan font-black">0{i+1}</span>
                    {obj}
                  </div>
                ))}
              </div>
            </TronCard>
          </motion.div>
        )}

        {currentStep > 0 && currentStep <= data.sections.length && (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <TronCard className="h-full bg-tron-aside/50 border-tron-cyan/30">
                  <h2 className="text-2xl font-black text-white mb-6 tracking-tight">
                    {data.sections[currentStep - 1].title}
                  </h2>
                  <div className="text-lg text-white/80 font-serif leading-relaxed italic whitespace-pre-wrap">
                    {data.sections[currentStep - 1].content}
                  </div>
                </TronCard>
              </div>

              <div className="md:col-span-1 space-y-6">
                {data.sections[currentStep - 1].pearl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-tron-yellow/10 border border-tron-yellow/30 p-6 rounded-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-all">
                        <Lightbulb size={64} className="text-tron-yellow" />
                      </div>
                      <h4 className="text-tron-yellow font-black text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2">
                        <Zap size={14} /> Perla Técnica
                      </h4>
                      <p className="text-sm text-white/80 italic font-serif leading-snug">
                        "{data.sections[currentStep - 1].pearl}"
                      </p>
                    </div>
                  </motion.div>
                )}
                
                <div className="p-6 border border-white/5 bg-white/2 rounded-2xl">
                  <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Referencia</p>
                  <p className="text-[10px] text-white/60 italic">Manual Chileno de Gastroenterología 2025 / Guías Internacionales Seleccionadas.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === totalSteps - 1 && (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 py-12"
          >
            <div className="w-24 h-24 bg-tron-cyan/20 border-2 border-tron-cyan shadow-[0_0_30px_#00f2ff] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} className="text-tron-cyan" />
            </div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Carga de Datos Completa</h2>
            <p className="text-white/60 max-w-md mx-auto italic font-serif">
              Has asimilado el núcleo teórico de esta Masterclass. Procede a la evaluación obligatoria para certificar tu nivel de sincronía.
            </p>
            <div className="flex justify-center gap-4">
              <GlowButton onClick={handleNext} className="px-12 py-4">
                Iniciar Evaluación <Play size={18} className="ml-2 inline-block" />
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center pt-8 border-t border-white/10">
        <button 
          onClick={currentStep === 0 ? onExit : handleBack}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-all uppercase text-[10px] font-black tracking-widest"
        >
          <ChevronLeft size={16} /> {currentStep === 0 ? "Salir de la Red" : "Protocolo Anterior"}
        </button>
        {currentStep < totalSteps - 1 && (
          <GlowButton onClick={handleNext} className="px-8 py-3">
            {currentStep === 0 ? "Comenzar Inyección" : "Continuar"} <ChevronRight size={16} />
          </GlowButton>
        )}
      </div>
    </div>
  );
};
