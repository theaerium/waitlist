import Image from 'next/image';

export default function SpinningCards() {
    const CARD_WIDTH = 600;
    const CARD_HEIGHT = CARD_WIDTH * 1792.9 / 1856;
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[600px] h-[600px] animate-spin" style={{ animationDuration: '0s' }}>
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