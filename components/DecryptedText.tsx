"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useHover?: boolean;
  className?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover' | 'load';
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useHover = false,
  className = '',
  parentClassName = '',
  animateOn = 'load',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  const getNextChar = () => chars[Math.floor(Math.random() * chars.length)];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    if (animateOn === 'load' || (animateOn === 'hover' && isHovering)) {
      setIsAnimating(true);
      interval = setInterval(() => {
        setDisplayText((prevText) =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration / maxIterations * text.length) {
                return text[index];
              }
              return getNextChar();
            })
            .join('')
        );

        iteration++;
        if (iteration >= maxIterations * text.length) {
          setDisplayText(text);
          setIsAnimating(false);
          clearInterval(interval);
        }
      }, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [text, isHovering, animateOn, speed, maxIterations]);

  return (
    <div
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={className}>{displayText}</span>
    </div>
  );
}
