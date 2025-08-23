import Image from 'next/image';
import Item, { ItemProps } from './item';

export default function Process() {
  const items: ItemProps[] = [
    {
      image: "/items/gucci_vintage.jpg",
      title: "Vintage Gucci Bag",
      description: "Luxury vintage item",
      xOffset: 0
    },
    {
      image: "/items/what.jpg",
    //   title: "Designer Item",
    //   description: "High-end fashion",
      xOffset: 0,
      yOffset: 20
    },
  ];
  const CARD_STACK_WIDTH = 400;
  const CARD_STACK_HEIGHT = CARD_STACK_WIDTH * (3551 / 3840);

  return (
    <section className="min-h-screen bg-white flex items-start pt-12 sm:pt-16 lg:pt-20 border-t border-black pb-12 sm:pb-16 lg:pb-20">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm text-black uppercase tracking-wide mb-2 sm:mb-4">
              Our process
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
              List, spend, repeat
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl text-black">
                Upload your items
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Upload items through our app. We instantly assign a market value based on prices across multiple marketplaces and credit your account
              </p>
              <div className="flex justify-center mt-8 sm:mt-12 w-full">
                <Image 
                  src="/mocks/upload_page_mock.png" 
                  alt="Shipping page" 
                  width={CARD_STACK_WIDTH} 
                  height={CARD_STACK_HEIGHT}
                  className="w-40 sm:w-48 md:w-56 h-auto"
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl text-black">
                Shop with Aerium
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Use your Aerium card or apple pay to make a purchase anywhere that accepts Visa
              </p>
              <div className="relative mt-8">
                <Image 
                  src="/cards/card_stack.png" 
                  alt="Aerium card stack" 
                  width={CARD_STACK_WIDTH} 
                  height={CARD_STACK_HEIGHT}
                  className="w-40 sm:w-48 md:w-56 h-auto"
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl text-black">
                We handle the rest
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We&apos;ll send you pre-paid shipping labels to drop off the items at the nearest post office. We&apos;ll handle everything else and take a flat fee
              </p>
              <div className="flex justify-center mt-8 sm:mt-12 w-full">
                <Image 
                  src="/mocks/shipping_mock.png" 
                  alt="Shipping page" 
                  width={CARD_STACK_WIDTH} 
                  height={CARD_STACK_HEIGHT}
                  className="w-40 sm:w-48 md:w-56 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}