import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML4Props {
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML4: React.FC<ML4Props> = ({ 
  durationIn = 800, 
  durationOut = 600, 
  delay = 500, 
  text = "Ready Set Go!", 
  isAnimating = true 
}) => {
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    const words = text.split(" ");
    const wrapper = document.querySelector('.ml4');
    
    if (isAnimating && wrapper) {
      // Reset opacity and scale for all words
      words.forEach((_, index) => {
        const letters = document.querySelector(`.ml4 .letters-${index + 1}`);
        if (letters) {
          letters.setAttribute('style', 'opacity: 0; transform: scale(0.2)');
        }
      });
      wrapper.setAttribute('style', 'opacity: 1');

      if (animationRef.current) {
        animationRef.current.pause();
      }

      const ml4Animation = anime.timeline({ loop: true });

      words.forEach((_, index) => {
        ml4Animation
          .add({
            targets: `.ml4 .letters-${index + 1}`,
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: durationIn,
            easing: "easeInOutQuad"
          })
          .add({
            targets: `.ml4 .letters-${index + 1}`,
            opacity: 0,
            scale: 3,
            duration: durationOut,
            easing: "easeInExpo",
            delay: delay
          });
      });

      ml4Animation.add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });

      animationRef.current = ml4Animation;
    } else if (!isAnimating && animationRef.current) {
      animationRef.current.pause();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [durationIn, durationOut, delay, text, isAnimating]);

  const words = text.split(" ");

  return (
    <h1 className="ml4">
      {words.map((word, index) => (
        <span key={index} className={`letters letters-${index + 1}`}>{word}</span>
      ))}
    </h1>
  );
};

export default ML4;