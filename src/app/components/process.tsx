import Image from 'next/image';
import Item, { ItemProps } from './item';

export default function Process() {
  const items: ItemProps[] = [
    {
      image: "/items/gucci_vintage.jpg",
    //   title: "Vintage Gucci Bag",
    //   description: "Luxury vintage item",
      xOffset: 0
    },
    {
      image: "/items/what.jpg",
    //   title: "Designer Item",
    //   description: "High-end fashion",
      xOffset: 10,
      yOffset: 0
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 flex items-start pt-20">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-sm text-black uppercase tracking-wide mb-4">
              Our process
            </h2>
            <h1 className="text-5xl text-black">
              List, spend, repeat
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl text-black">
                Upload your items
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upload items through our app. We instantly assign a market value based on prices across multiple marketplaces and credit your account
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {items.map((item, index) => (
                  <Item 
                    key={index}
                    image={item.image}
                    title={item.title || ""}
                    description={item.description || ""}
                    xOffset={item.xOffset}
                    yOffset={item.yOffset}
                  />
                ))}
              </div>
            </div>

            {/* Column 2: Shop with Aerium */}
            <div className="space-y-6">
              <h3 className="text-2xl text-black">
                Shop with Aerium
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use your Aerium card or apple pay to make a purchase anywhere that accepts Visa
              </p>
              <div className="relative mt-8">
                <div className="flex justify-center">
                  {/* Stack of cards */}
                  <div className="relative">
                    {/* Bottom card (lime green) */}
                    <div className="w-32 h-20 bg-lime-400 rounded-lg shadow-lg transform rotate-6 translate-y-2"></div>
                    {/* Middle card (blue) */}
                    <div className="w-32 h-20 bg-blue-500 rounded-lg shadow-lg transform rotate-3 translate-y-1 absolute top-0 left-0"></div>
                    {/* Top card (silver) */}
                    <div className="w-32 h-20 bg-gray-300 rounded-lg shadow-lg absolute top-0 left-0">
                      <div className="p-2">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col space-y-1">
                            <div className="w-2 h-3 bg-black"></div>
                            <div className="w-2 h-5 bg-black"></div>
                            <div className="w-2 h-2 bg-black"></div>
                            <div className="w-2 h-4 bg-black"></div>
                          </div>
                          <div className="text-xs font-bold text-black">Aerium</div>
                        </div>
                        <div className="absolute bottom-2 right-2 text-xs font-bold text-black">VISA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: We handle the rest */}
            <div className="space-y-6">
              <h3 className="text-2xl text-black">
                We handle the rest
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ll send you pre-paid shipping labels to drop off the items at the nearest post office. We&apos;ll handle everything else and take a flat fee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}