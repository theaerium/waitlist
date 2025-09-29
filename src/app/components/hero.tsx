'use client';

import Image from 'next/image';

export default function Hero() {



  const cardDimensions = (cardWidth: number) => {
    const width = 453;
    const height = 485;
    const aspectRatio = width / height;
    const newWidth = cardWidth;
    const newHeight = newWidth / aspectRatio;
    return { width: newWidth, height: newHeight };
  };
  const phoneDimensions = (phoneWidth: number) => {
    const width = 252.52;
    const height = 536;
    const aspectRatio = width / height;
    const newWidth = phoneWidth;
    const newHeight = newWidth / aspectRatio;
    return { width: newWidth, height: newHeight };
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4">
        {/* Top Section - Main Headline */}
        <div className="pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black leading-tight">
            Your closet, your cash
          </h1>
              </div>
              
          <div className="relative">
            <div className="bg-gradient-to-b from-cream to-orange rounded-xl sm:rounded-[1rem] lg:rounded-[1rem] pt-10 sm:pt-14 lg:pt-18 px-10 sm:px-14 lg:px-18 pb-6 sm:pb-8 lg:pb-10 min-h-[60vh] sm:min-h-[65vh] md:min-h-[65vh] lg:min-h-[75vh] xl:min-h-[80vh] max-h-[90vh]">
              <div className="h-full flex flex-col min-h-[50vh] relative">
                  <div className="flex justify-center items-center -mt-8 sm:-mt-4 lg:-mt-2 flex-shrink-0 flex-grow">
                    <div className="relative">
                      <Image
                        src="/mocks/phone_main.png"
                        alt="Aerium App on Phone"
                        width={phoneDimensions(280).width}
                        height={phoneDimensions(280).height}
                        className="object-contain translate-x-8 w-[160px] sm:w-[180px] md:w-[160px] lg:w-[200px] xl:w-[280px] 2xl:w-[320px]"
                        draggable={false}
                      />
                      <Image
                        src="/cards/aerium_card.png"
                        alt="Aerium Visa Card"
                        width={cardDimensions(220).width}
                        height={cardDimensions(220).height}
                        className="object-contain absolute bottom-0 left-1/2 -translate-x-24 sm:-translate-x-32 md:-translate-x-28 lg:-translate-x-36 xl:-translate-x-48 2xl:-translate-x-64 z-10 w-[120px] sm:w-[130px] md:w-[120px] lg:w-[140px] xl:w-[200px] 2xl:w-[240px]"
                        draggable={false}
                      />
                </div>
                  </div>
                
                <div className="sticky bottom-0 left-0 right-0 z-20">
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-12 xl:pb-16 2xl:pb-20">
                    <p className="text-sm sm:text-lg lg:text-xl lg:mt-20 text-white leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                      A spending account that improves your relationship with money. Turn your closet into cash and spend without purchase anxiety
                    </p>
                  </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}