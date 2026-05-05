import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TronCard } from './TronCard';
import { Trophy, Network, User } from 'lucide-react';
import { playAudio } from '../lib/audio';

const DUMMY_PEERS = [
  { id: '1', name: 'Dr_House_89', score: 14500, accuracy: 92, rank: 'ATTENDING' },
  { id: '2', name: 'FellowGastro25', score: 12400, accuracy: 88, rank: 'ATTENDING' },
  { id: '3', name: 'EndoNinja', score: 9800, accuracy: 81, rank: 'SENIOR' },
  { id: '4', name: 'USER_LOCAL', score: 8500, accuracy: 78, rank: 'SENIOR', isCurrentUser: true },
  { id: '5', name: 'R1_Lost', score: 4200, accuracy: 65, rank: 'JUNIOR' },
  { id: '6', name: 'HepatoFan', score: 3800, accuracy: 61, rank: 'JUNIOR' },
];

export const Leaderboard: React.FC<{ onExit: () => void, localProgress: any }> = ({ onExit, localProgress }) => {
  // Integrate local user's data
  const accuracy = localProgress.totalAttempted > 0 ? Math.round((localProgress.totalCorrect / localProgress.totalAttempted) * 100) : 0;
  const rank = accuracy >= 80 ? 'ATTENDING' : accuracy >= 60 ? 'SENIOR' : 'JUNIOR';
  // Just a fake score calculation
  const calculatedScore = (localProgress.totalCorrect * 100) + (localProgress.streak * 50);

  const mergedPeers = [...DUMMY_PEERS];
  const userIdx = mergedPeers.findIndex(p => p.isCurrentUser);
  if (userIdx !== -1) {
    if (localProgress.totalAttempted > 0) {
      mergedPeers[userIdx].score = calculatedScore;
      mergedPeers[userIdx].accuracy = accuracy;
      mergedPeers[userIdx].rank = rank;
    }
  }

  mergedPeers.sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-12 min-h-screen">
       <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-glow-cyan text-tron-cyan tracking-tighter uppercase flex items-center gap-4">
              <Network size={40} className="text-tron-cyan" /> La Red
            </h1>
            <p className="text-white/40 font-mono tracking-widest uppercase text-xs mt-2">Salón de la Fama - Top Fellows</p>
          </div>
          <button 
            onClick={() => { playAudio('click'); onExit(); }}
            className="p-2 px-6 border border-white/10 rounded uppercase font-bold text-[10px] tracking-widest hover:bg-white/5 transition-all text-white/60"
          >
            Lobby
          </button>
        </header>

        <TronCard accentColor="rgba(255,184,0,0.3)" className="p-0 border-2 border-tron-yellow/30 bg-tron-card/80 overflow-hidden">
          <div className="flex bg-black/40 border-b border-white/10 p-4 text-[10px] uppercase font-bold tracking-widest text-white/40">
             <div className="w-16 text-center">Rango</div>
             <div className="flex-1">ID Usuario</div>
             <div className="w-32 text-center">Score Grid</div>
             <div className="w-24 text-center">Precisión</div>
          </div>
          <div className="divide-y divide-white/5">
            {mergedPeers.map((peer, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={peer.id}
                onMouseEnter={() => playAudio('hover')}
                className={`flex p-4 items-center transition-colors hover:bg-white/5 ${peer.isCurrentUser ? 'bg-tron-cyan/10 border-l-4 border-l-tron-cyan' : ''}`}
              >
                 <div className="w-16 text-center flex justify-center">
                   {i === 0 ? <Trophy size={20} className="text-tron-yellow" /> : 
                    i === 1 ? <Trophy size={18} className="text-gray-400" /> :
                    i === 2 ? <Trophy size={16} className="text-amber-700" /> :
                    <span className="font-mono text-white/40 text-sm">#{i + 1}</span>}
                 </div>
                 <div className="flex-1 flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-full border border-white/10 bg-black flex items-center justify-center ${peer.isCurrentUser ? 'border-tron-cyan text-tron-cyan' : 'text-white/20'}`}>
                     <User size={14} />
                   </div>
                   <span className={`font-mono font-bold ${peer.isCurrentUser ? 'text-tron-cyan text-glow-cyan' : 'text-white/80'}`}>
                     {peer.name} {peer.isCurrentUser && '(You)'}
                   </span>
                 </div>
                 <div className="w-32 text-center font-mono text-tron-yellow font-black">
                   {peer.score.toLocaleString()}
                 </div>
                 <div className="w-24 text-center font-mono text-sm text-tron-staff">
                   {peer.accuracy}%
                 </div>
              </motion.div>
            ))}
          </div>
        </TronCard>
    </div>
  );
};
