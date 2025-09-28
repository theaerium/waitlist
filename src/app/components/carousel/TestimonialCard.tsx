interface TestimonialCardProps {
  backgroundColor: string;
  text?: string;
  textColor?: string;
  bottomText?: string;
  bottomTextColor?: string;
  className?: string;
}

export default function TestimonialCard({
  backgroundColor,
  text,
  textColor = 'black',
  bottomText,
  bottomTextColor = 'black',
  className = ''
}: TestimonialCardProps) {
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
        className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-xl flex items-center justify-center relative"
        style={{ backgroundColor }}
      >
        <div className="absolute top-4 left-4 text-6xl lg:text-7xl xl:text-8xl font-medium" style={{ color: textColor, fontFamily: 'General Sans', fontWeight: 500 }}>
            {'"'}
        </div>

        {text && (
          <div className="flex items-center justify-center px-8">
            <p 
              className="text-lg lg:text-xl xl:text-2xl font-medium text-center leading-tight"
              style={{ color: textColor, fontFamily: 'General Sans', fontWeight: 500 }}
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
            style={{ color: bottomTextColor, fontFamily: 'General Sans', fontWeight: 500 }}
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
