import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TronCard } from './TronCard';
import { GlowButton } from './GlowButton';
import { Network, Activity, ChevronRight, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
import { playAudio } from '../lib/audio';

interface Node {
  id: string;
  text: string;
  options: { label: string; nextId: string; type: 'correct' | 'wrong' | 'neutral'; feedback?: string }[];
}

const CASES: Record<string, { title: string, startNode: string, nodes: Record<string, Node> }> = {
  'case-1': {
    title: 'Hemorragia Digestiva Alta',
    startNode: 'start',
    nodes: {
      'start': {
        id: 'start',
        text: 'Paciente masculino de 65 años con cirrosis hepática ingresa por hematemesis masiva. FC 110 lpm, PA 90/60 mmHg. Confusión leve. ¿Cuál es su primer paso?',
        options: [
          { label: 'Endoscopia inmediata (dentro de 1 hora)', nextId: 'endo-early', type: 'wrong', feedback: 'No debes hacer endoscopia sin estabilizar hemodinámicamente al paciente. Alto riesgo de mortalidad.' },
          { label: 'Reanimación con cristaloides y transfusión si Hb < 7 g/dL', nextId: 'stabilize', type: 'correct' },
          { label: 'Iniciar infusión de omeprazol y esperar', nextId: 'pumpi', type: 'wrong', feedback: 'Sola terapia con IBP no es adecuada en paciente cirrótico con probable sangrado variceal; falta reanimación y vasoactivos.' }
        ]
      },
      'stabilize': {
        id: 'stabilize',
        text: 'Paciente estabilizado. PA sube a 100/70. Se sospecha sangrado variceal. ¿Qué farmacoterapia inicial indicas antes de la EDA?',
        options: [
          { label: 'Terlipresina/Octreotida + Antibióticos profilácticos', nextId: 'meds-correct', type: 'correct' },
          { label: 'Solo bomba de IBP', nextId: 'ibp-only', type: 'wrong', feedback: 'El sangrado variceal requiere drogas vasoactivas (Terlipresina u Octreotida) y TODOS los cirróticos con sangrado necesitan ATB profilácticos (ej. Ceftriaxona).' },
          { label: 'Ácido tranexámico', nextId: 'tranex', type: 'wrong', feedback: 'Falta evidencia para ácido tranexámico en HDA variceal, y no previene la PBE recurrente.' }
        ]
      },
      'meds-correct': {
        id: 'meds-correct',
        text: 'Excelente. Iniciaste vasoactivos y Ceftriaxona. A las 12h se realiza la EDA, mostrando várices esofágicas grandes con sangrado activo a chorro. ¿Manejo endoscópico?',
        options: [
          { label: 'Escleroterapia de várices', nextId: 'eso-esclero', type: 'wrong', feedback: 'La escleroterapia tiene más complicaciones anatómicas comparada con la ligadura.' },
          { label: 'Ligadura endoscópica con bandas (LEV)', nextId: 'win', type: 'correct' }
        ]
      },
      'win': {
        id: 'win',
        text: '¡Sangrado controlado con éxito mediante Ligadura! El paciente es derivado a UCI para monitorización. Caso superado.',
        options: []
      }
    }
  }
};

export const ClinicalCases: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const currentCase = CASES['case-1'];
  const [currentNodeId, setCurrentNodeId] = useState(currentCase.startNode);
  const [caseHistory, setCaseHistory] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ text: string, type: 'correct' | 'wrong' } | null>(null);

  const node = currentCase.nodes[currentNodeId];

  const handleOption = (opt: any) => {
    if (opt.type === 'wrong') {
      playAudio('wrong');
      setFeedback({ text: opt.feedback || 'Decisión incorrecta. El paciente se desestabiliza.', type: 'wrong' });
      // Reset after a moment:
      setTimeout(() => {
        setFeedback(null);
        setCurrentNodeId(currentCase.startNode);
        setCaseHistory([]);
      }, 5000);
    } else {
      playAudio('correct');
      setCaseHistory([...caseHistory, currentNodeId]);
      if (opt.feedback) {
        setFeedback({ text: opt.feedback, type: 'correct' });
        setTimeout(() => {
          setFeedback(null);
          setCurrentNodeId(opt.nextId);
        }, 3000);
      } else {
        setCurrentNodeId(opt.nextId);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-12 min-h-screen">
       <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-glow-cyan text-tron-cyan tracking-tighter uppercase flex items-center gap-4">
              <Network size={40} className="text-tron-cyan" /> Casos Ramificados
            </h1>
            <p className="text-white/40 font-mono tracking-widest uppercase text-xs mt-2">Simulador de Decisiones Secuenciales</p>
          </div>
          <button 
            onClick={() => { playAudio('click'); onExit(); }}
            className="p-2 px-6 border border-white/10 rounded uppercase font-bold text-[10px] tracking-widest hover:bg-white/5 transition-all text-white/60"
          >
            Lobby
          </button>
        </header>

        <TronCard accentColor="rgba(0,242,255,0.3)" className="p-8 border-2 border-tron-cyan/30 bg-tron-card/80">
           <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 text-tron-cyan font-bold uppercase tracking-widest">
             <Activity size={18} /> {currentCase.title}
           </div>

           <AnimatePresence mode="wait">
             {feedback ? (
               <motion.div
                 key="feedback"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className={`p-8 rounded border-2 text-center my-12 ${feedback.type === 'correct' ? 'bg-tron-cyan/10 border-tron-cyan text-tron-cyan' : 'bg-tron-sub/10 border-tron-sub text-tron-sub'}`}
               >
                  {feedback.type === 'correct' ? <CheckCircle2 size={48} className="mx-auto mb-4" /> : <ShieldAlert size={48} className="mx-auto mb-4" />}
                  <p className="text-xl font-serif italic">{feedback.text}</p>
                  {feedback.type === 'wrong' && <p className="text-xs uppercase font-mono mt-4 opacity-50">Reiniciando simulación de caso...</p>}
               </motion.div>
             ) : (
               <motion.div
                 key={node.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
               >
                 <p className="text-xl text-white font-serif leading-relaxed mb-10 p-6 bg-black/40 rounded border-l-4 border-tron-cyan/50">
                   {node.text}
                 </p>

                 {node.options.length > 0 ? (
                   <div className="space-y-4">
                     {node.options.map((opt, i) => (
                       <button
                         key={i}
                         onMouseEnter={() => playAudio('hover')}
                         onClick={() => handleOption(opt)}
                         className="w-full p-4 bg-white/5 hover:bg-tron-cyan/10 border border-white/10 hover:border-tron-cyan/50 rounded flex justify-between items-center transition-all group text-left"
                       >
                         <span className="text-white/80 font-mono text-sm group-hover:text-tron-cyan transition-colors">{opt.label}</span>
                         <ChevronRight size={16} className="text-white/20 group-hover:text-tron-cyan transition-colors" />
                       </button>
                     ))}
                   </div>
                 ) : (
                   <div className="text-center py-8">
                     <GlowButton variant="cyan" onClick={() => { playAudio('click'); onExit(); }}>Completar Expediente</GlowButton>
                   </div>
                 )}
               </motion.div>
             )}
           </AnimatePresence>
        </TronCard>
    </div>
  );
};
