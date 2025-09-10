'use client';

import InfoCardContainer from './infoCard/InfoCardContainer';

export default function Process() {
  return (
    <section id="process" className="min-h-screen flex items-center justify-center relative" style={{ backgroundColor: '#ED4848' }}>
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm text-black uppercase tracking-wide mb-4">
            Our process
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-bold">
            Spending.... but not like you&apos;re used to
          </h1>
        </div>

        {/* Process Cards */}
        <div
          style={{
            perspective: `100000px`,
            transformStyle: 'preserve-3d',
          }}
          className="relative h-96"
        >
          <InfoCardContainer />
        </div>
      </div>
    </section>
  );
}