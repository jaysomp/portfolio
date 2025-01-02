import { useCallback } from 'react';

export function useTypewriterSound() {
  const playKeySound = useCallback(() => {
    const audio = new Audio('https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {
      // Silently handle autoplay restrictions
    });
  }, []);

  return { playKeySound };
}