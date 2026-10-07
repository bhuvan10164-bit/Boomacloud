import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

/**
 * ScrollReveal Component
 * Mirrors Astrion's Framer Motion whileInView reveal and stagger mechanics.
 * Smoothly lifts and fades in elements as the user scrolls down into view.
 */
export default function ScrollReveal({
  children,
  staggerDelay = 0,
  yOffset = 32,
  duration = 0.65,
  threshold = 0.1,
  className = '',
  as: Component = 'div',
  style = {},
  ...props
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Use IntersectionObserver with Astrion's rootMargin
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold]);

  return (
    <Component
      ref={elementRef}
      className={`scroll-reveal-item ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{
        '--reveal-y': `${yOffset}px`,
        '--reveal-duration': `${duration}s`,
        '--stagger-delay': `${staggerDelay}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
