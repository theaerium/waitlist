import Image from 'next/image';

interface DetailCardProps {
  title: string;
  description: string;
  subText: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  backgroundColor?: string;
  className?: string;
  showArrow?: boolean;
  imageTouchesBottom?: boolean;
}

export default function DetailCard({
  title,
  description,
  subText,
  imageSrc,
  imageAlt,
  isReversed = false,
  backgroundColor = '#EEEFE2',
  className = '',
  showArrow = true,
  imageTouchesBottom = false
}: DetailCardProps) {
  const arrowIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    );
  };

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
              {title}
            </h3>
            <p className="text-lg sm:text-xl text-black leading-relaxed">
              {description}
            </p>
            <div className={`flex items-center ${showArrow ? 'group cursor-pointer' : ''}`}>
              <p className={`text-sm sm:text-base text-black ${showArrow ? 'pr-2' : ''}`}>
                {subText}
              </p>
              {showArrow && (
                <div className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                  {arrowIcon()}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div 
                className={`w-full h-full sm:h-80 lg:h-96 bg-gray-200 rounded-xl flex items-center justify-center ${imageTouchesBottom ? 'p-4 pb-0' : 'p-4'}`}
                style={{ backgroundColor }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="object-contain w-full h-full"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
