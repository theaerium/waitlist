'use client';

import { useState } from 'react';
import InfoCard from './InfoCard';

export default function InfoCardContainer() {
  const [lastHoveredIndex, setLastHoveredIndex] = useState<number>(0);

  const handleCardHover = (index: number) => {
    setLastHoveredIndex(index);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Mobile Layout - Stacked Cards */}
      <div className="block lg:hidden space-y-4">
        <InfoCard
          title="Deposit"
          description="Deposit pictures of items you’re ready to part with"
          backgroundImage="/content/student.png"
          type="mentor"
          onHover={() => handleCardHover(0)}
          isExpanded={false}
          position="left"
          link="/students"
          isMobile={true}
        />
        
        <InfoCard
          title="Spend"
          description="Spend with you Aerium Mastercard anywhere Mastercard is accepted"
          backgroundImage="/content/professional.png"
          type="student"
          onHover={() => handleCardHover(1)}
          isExpanded={false}
          position="right"
          link="/professionals"
          isMobile={true}
        />
      </div>

      {/* Desktop Layout - Animated Cards */}
      <div className="hidden lg:block relative h-96 rounded-2xl overflow-hidden">
        <InfoCard
          title="Deposit"
          description="Deposit pictures of items you’re ready to part with"
          backgroundImage="/content/student.png"
          type="mentor"
          onHover={() => handleCardHover(0)}
          isExpanded={lastHoveredIndex === 0}
          position="left"
          link="/students"
          isMobile={false}
        />
        
        <InfoCard
          title="Spend"
          description="Spend with you Aerium Mastercard anywhere Mastercard is accepted"
          backgroundImage="/content/professional.png"
          type="student"
          onHover={() => handleCardHover(1)}
          isExpanded={lastHoveredIndex === 1}
          position="right"
          link="/professionals"
          isMobile={false}
        />
      </div>
    </div>
  );
}