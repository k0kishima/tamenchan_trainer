import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '@/data/lottie/76649-checked.json';

export const CorrectAnswerAnimation: React.FC = () => {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef.current!,
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      lottie.play();
    };
  }, []);

  return <div ref={lottieRef} />;
};
