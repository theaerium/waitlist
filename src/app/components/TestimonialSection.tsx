'use client';

import { useRef } from 'react';
import TestimonialCarousel from './carousel/TestimonialCarousel';
import Button from './button';
import theme from '../config/theme';

export default function TestimonialSection() {
  const carouselRef = useRef<{ goToNext: () => void; goToPrevious: () => void }>(null);
  const testimonialCards = [
    {
      id: 'testimonial-1',
      backgroundColor: '#FF983F',
      text: 'I love it',
      textColor: 'white'
    },
    {
      id: 'testimonial-2',
      backgroundColor: '#EEEFE2',
      text: 'I love it',
      textColor: '#FF983F'
    },
    {
      id: 'testimonial-3',
      backgroundColor: '#000000',
      text: 'I love it',
      textColor: 'white'
    },
    {
      id: 'testimonial-4',
      backgroundColor: '#FF983F',
      text: 'I love it',
      textColor: 'white'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-8 flex items-start justify-between">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black text-left">
            Aerium has made me feel so much better about spending on everything. From groceries to my afternoon treat.
          </h2>
          <div className="flex space-x-2">
            <Button
              text=""
              backgroundColor={theme.colors.gray}
              textColor={theme.colors.black}
              hoverColor="#D4D5C8"
              padding="px-4 py-2"
              onClick={() => carouselRef.current?.goToPrevious()}
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              }
            />
            <Button
              text=""
              backgroundColor={theme.colors.gray}
              textColor={theme.colors.black}
              hoverColor="#D4D5C8"
              padding="px-4 py-2"
              onClick={() => carouselRef.current?.goToNext()}
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            />
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel ref={carouselRef} cards={testimonialCards} />
        </div>
      </div>
    </section>
  );
}
