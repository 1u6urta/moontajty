'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';


export default function AnimatedText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const t = useTranslations('HeroPage');
  const words : string[] = t.raw('animatedWords');
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // pause before deleting
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex,words]);

  return (
    <span className="displayText">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
}
