import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML5Props {
  duration?: number;
  text?: string;
}

const ML5: React.FC<ML5Props> = ({ duration = 4000, text = "Signal & Noise" }) => {
  const [textLeft, textRight] = text.split(' & ');

  useEffect(() => {
    // Animation timeline setup
    const ml5Animation = anime.timeline({ loop: true });

    ml5Animation
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el: any, i: number) => (-0.625 + 0.625 * 2 * i) + "em"
      }, '-=700') // Offset the start time relative to the previous animation
      .add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
      }, '-=600')
      .add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
      }, '-=300')
      .add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
      }, '-=600')
      .add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    return () => {
      ml5Animation.pause(); // Pause animation on component unmount
    };
  }, [duration, textLeft, textRight]);

  return (
    <h1 className="ml5">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters letters-left">{textLeft}</span>
        <span className="letters ampersand">&amp;</span>
        <span className="letters letters-right">{textRight}</span>
        <span className="line line2"></span>
      </span>
    </h1>
  );
};

export default ML5;
