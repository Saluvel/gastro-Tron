let isSoundEnabled = true;

export const setSoundEnabled = (enabled: boolean) => {
  isSoundEnabled = enabled;
};

export const getSoundEnabled = () => isSoundEnabled;

export const playAudio = (type: 'hover' | 'click' | 'correct' | 'wrong' | 'start' | 'achievement' | 'laugh' | 'magic') => {
  if (!isSoundEnabled) return;
  
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    if (type === 'laugh') {
      // Create a sequence of descending notes for a "creepy laugh"
      const now = audioCtx.currentTime;
      [0, 0.15, 0.3, 0.45, 0.6].forEach((delay, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150 - (i * 20), now + delay);
        osc.frequency.exponentialRampToValueAtTime(80 - (i * 15), now + delay + 0.1);
        
        gain.gain.setValueAtTime(0.1, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.1);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.1);
      });
      return;
    }

    if (type === 'magic') {
      const now = audioCtx.currentTime;
      // Rising ethereal scale
      [880, 1108.73, 1318.51, 1661.22, 1760].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + (i * 0.08));
        
        gain.gain.setValueAtTime(0.05, now + (i * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.08) + 0.3);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + (i * 0.08));
        osc.stop(now + (i * 0.08) + 0.3);
      });
      return;
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === 'hover') {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(400, now);
      oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.05);
      gainNode.gain.setValueAtTime(0.02, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      oscillator.start();
      oscillator.stop(now + 0.05);
    } else if (type === 'click') {
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(800, now);
      gainNode.gain.setValueAtTime(0.05, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      oscillator.start();
      oscillator.stop(now + 0.1);
    } else if (type === 'correct') {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, now);
      oscillator.frequency.setValueAtTime(800, now + 0.1);
      oscillator.frequency.setValueAtTime(1200, now + 0.2);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
      oscillator.start();
      oscillator.stop(now + 0.3);
    } else if (type === 'wrong') {
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(200, now);
      oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.3);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
      oscillator.start();
      oscillator.stop(now + 0.3);
    } else if (type === 'start') {
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(300, now);
      oscillator.frequency.setValueAtTime(400, now + 0.2);
      oscillator.frequency.setValueAtTime(600, now + 0.4);
      oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.6);
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.1, now + 0.2);
      gainNode.gain.linearRampToValueAtTime(0, now + 0.6);
      oscillator.start();
      oscillator.stop(now + 0.6);
    }
  } catch (e) {
    // Ignore audio errors (e.g., if user hasn't interacted with page yet)
  }
};
