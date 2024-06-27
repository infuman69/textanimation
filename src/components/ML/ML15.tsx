import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML15Props {
  duration?: number;
  delay?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML15: React.FC<ML15Props> = ({ 
  duration = 800, 
  delay = 1000, 
  text = "Out now", 
  isAnimating = true 
}) => {
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    const words = text.split(" ");
    const wrapper = document.querySelector('.ml15');
    
    if (isAnimating && wrapper) {
      // Reset scale and opacity for all words
      words.forEach((_, index) => {
        const word = document.querySelector(`.ml15 .word-${index + 1}`);
        if (word) {
          word.setAttribute('style', 'opacity: 0; transform: scale(14)');
        }
      });
      wrapper.setAttribute('style', 'opacity: 1');

      if (animationRef.current) {
        animationRef.current.pause();
      }

      const ml15Animation = anime.timeline({ loop: true });
      words.forEach((_, index) => {
        ml15Animation.add({
          targets: `.ml15 .word-${index + 1}`,
          scale: [14, 1],
          opacity: [0, 1],
          easing: "easeOutCirc",
          duration: duration,
          delay: (el, i) => duration * i
        });
      });
      ml15Animation.add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: delay
      });

      animationRef.current = ml15Animation;
    } else if (!isAnimating && animationRef.current) {
      animationRef.current.pause();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [duration, delay, text, isAnimating]);

  const words = text.split(" ");

  return (
    <h1 className="ml15">
      {words.map((word, index) => (
        <span key={index} className={`word word-${index + 1}`}>{word}</span>
      ))}
    </h1>
  );
};

export default ML15;