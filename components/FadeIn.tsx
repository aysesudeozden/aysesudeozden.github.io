'use client';

import React, { useEffect, useRef, useState } from 'react';

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    animationName?: 'animate-fade-up' | 'animate-scale';
    style?: React.CSSProperties;
};

const FadeIn = ({ children, delay = 0, className = '', animationName = 'animate-fade-up', style = {} }: FadeInProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '0px 0px -50px 0px', // Adjust to trigger slightly before/after leaving view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Initial style logic moved inline

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? `animate-on-scroll ${animationName}` : ''}`}
            style={{
                ...(isVisible ? { animationDelay: `${delay}ms` } : { opacity: 0 }),
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
