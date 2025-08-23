"use client"

import Image from 'next/image';
import Item, { ItemProps } from './item';
import { useState } from 'react';

// Items list for easy customization
const ITEMS: ItemProps[] = [
    {
        image: ['/items/margeila.png', '/items/tabby_loafers.png', '/items/cowboy.png'],
        title: 'Footwear',
        description: 'Sneakers, shoes, heels, and other footwear (including cowboy boots)',
    },
    {
        image: ['/items/aritzia_pants.webp', '/items/babaton_dress.png', '/items/beautiful.png',],
        title: 'Clothing',
        description: 'Premium, designer, streetwear, and performance apparel across all sizes',
    },
    {
        image: ['/items/gucci_vintage.jpg', '/items/what.jpg', '/items/chanel.webp'],
        title: 'Handbags',
        description: 'Handbags and small leather items (wallets, purses, etc.)',
    },
    {
        image: ['/items/cartier.jpg', '/items/mk_watch.png', '/items/chanel_glasses.webp',],
        title: 'Accessories',
        description: 'Watches, fine jewelry, and other accessories (sunglasses, belts, etc.)',
    },
];

export default function LookFor() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === ITEMS.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? ITEMS.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="items" className="min-h-screen bg-white flex items-start pt-12 sm:pt-16 lg:pt-20 border-t border-black">
            <div className="px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-xs sm:text-sm text-black uppercase tracking-wide mb-2 sm:mb-4">
                            What we look for
                        </h2>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                            Footwear, clothing, and everything in between
                        </h1>
                    </div>

                    {/* Navigation Buttons - Top */}
                    <div className="flex items-center mb-6 sm:mb-8">
                        <button
                            onClick={prevSlide}
                            className="bg-white border border-black text-white w-8 h-8 sm:w-10 sm:h-10 mr-2 flex items-center justify-center hover:bg-aether-primary/10 transition-colors"
                            aria-label="Previous slide"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white border border-black text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-aether-primary/10 transition-colors"
                            aria-label="Next slide"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Carousel */}
                    <div className="relative mb-8 sm:mb-12">
                        <div className="flex overflow-hidden">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ 
                                    transform: `translateX(-${currentIndex * (100 / ITEMS.length)}%)`,
                                    width: `${ITEMS.length * 100}%`
                                }}
                            >
                                {ITEMS.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex justify-center px-2 sm:px-4"
                                        style={{ width: `${100 / ITEMS.length}%` }}
                                    >
                                        <div className="w-64 sm:w-72 md:w-80">
                                            <Item {...item} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center space-x-1 sm:space-x-2">
                        {ITEMS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'w-4 h-1.5 sm:w-6 sm:h-2 bg-black' 
                                        : 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black opacity-50 hover:opacity-75'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}