'use client';

import { useRef } from 'react';
import Carousel from './carousel/Carousel';
import Button from './button';
import theme from '../config/theme';

export default function CarouselSection() {
  const carouselRef = useRef<{ goToNext: () => void; goToPrevious: () => void }>(null);
  const carouselCards = [
    {
      id: 'deposit',
      backgroundColor: theme.colors.gray,
      imageSrc: '/carousel/deposit.png',
      imageAlt: 'Deposit items',
      imagePosition: 'center' as const,
      bottomText: 'Deposit',
      bottomTextColor: 'black'
    },
    {
      id: 'spend-card',
      backgroundColor: theme.colors.gray,
      imageSrc: '/carousel/carousel_card.png',
      imageAlt: 'Spend with card',
      imagePosition: 'bottom' as const,
      bottomText: 'Spend',
      bottomTextColor: 'black'
    },
    {
      id: 'spend-shipping',
      backgroundColor: theme.colors.orange,
      imageSrc: '/carousel/shipping_label.png',
      imageAlt: 'Send with shipping label',
      imagePosition: 'center' as const,
      bottomText: 'Send',
      bottomTextColor: 'black'
    },
    {
      id: 'security',
      backgroundColor: theme.colors.black,
      imageSrc: '/carousel/lock.png',
      imageAlt: 'Security',
      imagePosition: 'center' as const,
      bottomText: 'Security',
      bottomTextColor: 'black'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        {/* Section Header with Navigation */}
        <div className="mb-8 flex items-start justify-between">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black text-left">
            The only way to spend without anxiety
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

        {/* Carousel */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Carousel ref={carouselRef} cards={carouselCards} />
        </div>
      </div>
    </section>
  );
}
