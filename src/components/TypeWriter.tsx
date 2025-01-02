import React, { useState, useEffect } from 'react';
import { useTypewriterSound } from '../hooks/useTypewriterSound';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  withSound?: boolean;
}

export default function TypeWriter({ text, delay = 100, className = '', withSound = false }: TypeWriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { playKeySound } = useTypewriterSound();

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        if (withSound && text[currentIndex] !== ' ') {
          playKeySound();
        }
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, withSound, playKeySound]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">_</span>
    </span>
  );
}