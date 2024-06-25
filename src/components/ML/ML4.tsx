import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ml4Props {
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  text?: string;
}

const ML4: React.FC<ml4Props> = ({ durationIn = 800, durationOut = 600, delay = 500, text = "Ready Set Go!" }) => {
  useEffect(() => {
    // Split text into words
    const words = text.split(" ");

    // Create animation timeline
    const ml4Animation = anime.timeline({ loop: true });

    // Add animations for each word
    words.forEach((word, index) => {
      ml4Animation.add({
        targets: `.ml4 .letters-${index + 1}`,
        opacity: [0, 1],
        scale: [0.2, 1],
        duration: durationIn,
        easing: "easeInOutQuad"
      }).add({
        targets: `.ml4 .letters-${index + 1}`,
        opacity: 0,
        scale: 3,
        duration: durationOut,
        easing: "easeInExpo",
        delay: delay
      });
    });

    // Fade out the entire element
    ml4Animation.add({
      targets: '.ml4',
      opacity: 0,
      duration: 500,
      delay: 500
    });

    return () => {
      ml4Animation.pause(); // Pause animation on component unmount
    };
  }, [durationIn, durationOut, delay, text]);

  const words = text.split(" "); // Declare the 'words' variable
  
  return (
      <h1 className="ml4">
        {words.map((word, index) => (
          <span key={index} className={`letters letters-${index + 1}`}>{word}</span>
        ))}
      </h1>
    );
};

export default ML4;
