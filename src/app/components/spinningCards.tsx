import Image from 'next/image';

export default function SpinningCards() {
    const CARD_WIDTH = 600;
    const CARD_HEIGHT = CARD_WIDTH * 1792.9 / 1856;
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] animate-spin" style={{ animationDuration: '0s' }}>
        <Image
          src="/cards/home_cards.png"
          alt="Aerium Cards"
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}