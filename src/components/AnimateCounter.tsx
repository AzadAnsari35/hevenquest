"use client";
import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // prevent re-animation
          animateCounter();
          if (counterRef.current) {
            observer.unobserve(counterRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target]);

  const animateCounter = () => {
    const increment = target / 80; // Adjust for animation speed
    let currentCount = 0;

    const updateCount = () => {
      if (currentCount < target) {
        currentCount += increment;
        setCount(Math.ceil(currentCount));
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    updateCount();
  };

  return <div ref={counterRef}>{count}</div>;
};

export default AnimatedCounter;
