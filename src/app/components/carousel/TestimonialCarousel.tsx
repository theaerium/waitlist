'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  cards: Array<{
    id: string;
    backgroundColor: string;
    text?: string;
    textColor?: string;
    bottomText?: string;
    bottomTextColor?: string;
  }>;
  className?: string;
}

const TestimonialCarousel = forwardRef<{ goToNext: () => void; goToPrevious: () => void }, TestimonialCarouselProps>(
  ({ cards, className = '' }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const currentX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const [dynamicCardWidth, setDynamicCardWidth] = useState(272);
  const firstCardWrapperRef = useRef<HTMLDivElement>(null);

  const duplicatedCards = [...cards, ...cards, ...cards, ...cards, ...cards];
  const totalCards = cards.length;

  useEffect(() => {
    const calculateCardWidth = () => {
      if (firstCardWrapperRef.current) {
        const width = firstCardWrapperRef.current.getBoundingClientRect().width;
        setDynamicCardWidth(width);
      }
    };

    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, []);

  useImperativeHandle(ref, () => ({
    goToNext: () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
        setTimeout(() => setIsTransitioning(false), 300);
      }
    },
    goToPrevious: () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
        setTimeout(() => setIsTransitioning(false), 300);
      }
    }
  }));

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const diff = startX.current - currentX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev + 1) % totalCards);
          setTimeout(() => setIsTransitioning(false), 300);
        }
      } else {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
          setTimeout(() => setIsTransitioning(false), 300);
        }
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const diff = startX.current - currentX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev + 1) % totalCards);
          setTimeout(() => setIsTransitioning(false), 300);
        }
      } else {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
          setTimeout(() => setIsTransitioning(false), 300);
        }
      }
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={containerRef}
        className="overflow-hidden flex items-end"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${(currentIndex + totalCards) * dynamicCardWidth}px)`,
            width: `${duplicatedCards.length * dynamicCardWidth}px`
          }}
        >
          {duplicatedCards.map((card, index) => (
            <div key={`${card.id}-${index}`} className="flex-shrink-0 mr-4" ref={index === 0 ? firstCardWrapperRef : null}>
              <TestimonialCard
                backgroundColor={card.backgroundColor}
                text={card.text}
                textColor={card.textColor}
                bottomText={card.bottomText}
                bottomTextColor={card.bottomTextColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

TestimonialCarousel.displayName = 'TestimonialCarousel';

export default TestimonialCarousel;
