import Image from 'next/image';

interface CarouselCardProps {
  backgroundColor: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  text?: string;
  textColor?: string;
  bottomText?: string;
  bottomTextColor?: string;
  className?: string;
}

export default function CarouselCard({
  backgroundColor,
  imageSrc,
  imageAlt,
  imagePosition = 'center',
  text,
  textColor = 'black',
  bottomText,
  bottomTextColor = 'black',
  className = ''
}: CarouselCardProps) {
  const getImagePositionClasses = () => {
    switch (imagePosition) {
      case 'top':
        return 'items-start justify-center pt-4';
      case 'bottom':
        return 'items-end justify-center';
      case 'left':
        return 'items-center justify-start pl-4';
      case 'right':
        return 'items-center justify-end pr-4';
      default:
        return 'items-center justify-center';
    }
  };

  const arrowIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    );
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div 
        className={`w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-xl flex ${getImagePositionClasses()}`}
        style={{ backgroundColor }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={243}
          height={238}
          className="object-contain w-32 sm:w-36 lg:w-40 xl:w-48"
          style={{ height: 'auto' }}
          draggable={false}
        />
        {text && (
          <div className="absolute bottom-4 left-4 right-4">
            <p 
              className="text-sm font-medium"
              style={{ color: textColor }}
            >
              {text}
            </p>
          </div>
        )}
      </div>
      {bottomText && (
        <div className="mt-3 flex items-center group">
          <p 
            className="text-lg font-medium pr-2"
            style={{ color: bottomTextColor }}
          >
            {bottomText}
          </p>
          <div className="transition-transform duration-200 ease-out group-hover:translate-x-1">
            {arrowIcon()}
          </div>
        </div>
      )}
    </div>
  );
}
