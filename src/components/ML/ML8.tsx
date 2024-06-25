import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML8Props {
  text?: string;
  isAnimating?: boolean;
}

const ML8: React.FC<ML8Props> = ({ text = "Hi", isAnimating = true }) => {
  const mainAnimationRef = useRef<anime.AnimeInstance | null>(null);
  const rotationAnimationRef = useRef<anime.AnimeInstance | null>(null);

  const resetAnimation = () => {
    const elements = {
      container: document.querySelector('.ml8'),
      circleWhite: document.querySelector('.ml8 .circle-white'),
      circleContainer: document.querySelector('.ml8 .circle-container'),
      circleDark: document.querySelector('.ml8 .circle-dark'),
      lettersLeft: document.querySelector('.ml8 .letters-left'),
      bang: document.querySelector('.ml8 .bang'),
      circleDarkDashed: document.querySelector('.ml8 .circle-dark-dashed'),
    };

    if (elements.container && elements.circleWhite && elements.circleContainer && 
        elements.circleDark && elements.lettersLeft && elements.bang && elements.circleDarkDashed) {
      elements.container.setAttribute('style', 'opacity: 1');
      elements.circleWhite.setAttribute('style', 'transform: scale(0); opacity: 1');
      elements.circleContainer.setAttribute('style', 'transform: scale(0)');
      elements.circleDark.setAttribute('style', 'transform: scale(0)');
      elements.lettersLeft.setAttribute('style', 'transform: scale(0)');
      elements.bang.setAttribute('style', 'transform: scale(0) rotateZ(45deg)');
      elements.circleDarkDashed.setAttribute('style', 'transform: rotateZ(0deg)');
    }
  };

  const startAnimation = () => {
    resetAnimation();
    mainAnimationRef.current = anime.timeline({ loop: true })
      .add({
        targets: '.ml8 .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
      }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
      }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
      }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
      }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
      }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400
      });

    rotationAnimationRef.current = anime({
      targets: '.ml8 .circle-dark-dashed',
      rotateZ: 360,
      duration: 8000,
      easing: "linear",
      loop: true
    });
  };

  useEffect(() => {
    if (isAnimating) {
      startAnimation();
    } else {
      if (mainAnimationRef.current) {
        mainAnimationRef.current.pause();
      }
      if (rotationAnimationRef.current) {
        rotationAnimationRef.current.pause();
      }
      resetAnimation();
    }

    return () => {
      if (mainAnimationRef.current) {
        mainAnimationRef.current.pause();
      }
      if (rotationAnimationRef.current) {
        rotationAnimationRef.current.pause();
      }
    };
  }, [isAnimating, text]);

  return (
    <h1 className="ml8">
      <span className="letters-container">
        <span className="letters letters-left">{text}</span>
        <span className="letters bang">!</span>
      </span>
      <span className="circle circle-white"></span>
      <span className="circle circle-dark"></span>
      <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
    </h1>
  );
};

export default ML8;