"use client"

import Image from 'next/image';

// Split methods data
const SPLIT_METHODS = [
    {
        title: "SPLIT EQUALLY",
        subtitle: "one bill, equal bites",
        image: "/items/chanel.png",
        position: "top-left"
    },
    {
        title: "BY INDIVIDUAL", 
        subtitle: "this one's on you, that one's on me",
        image: "/items/chanel.png",
        position: "top-right"
    },
    {
        title: "BY PERCENTAGE",
        subtitle: "slice it by % nice and neat", 
        image: "/items/chanel.png",
        position: "center"
    },
    {
        title: "BY ADJUSTMENT",
        subtitle: "add a little, shave a little",
        image: "/items/chanel.png",
        position: "bottom-left"
    },
    {
        title: "BY SHARES",
        subtitle: "2 shares for dad, 1 for kid (you get it)",
        image: "/items/chanel.png",
        position: "bottom-right"
    }
];

export default function LookFor() {
    return (
        <section id="items" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#185D40' }}>
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

            {/* Scattered Benjamin images */}
            <div className="absolute inset-0 z-0">
                {/* Benjamin 1 - Top Left */}
                <div className="absolute top-20 left-20 transform rotate-12 opacity-20">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={180}
                        height={90}
                        className="object-contain"
                    />
                </div>

                {/* Benjamin 2 - Top Right */}
                <div className="absolute top-32 right-32 transform -rotate-8 opacity-15">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={225}
                        height={112}
                        className="object-contain"
                    />
                </div>

                {/* Benjamin 3 - Middle Left */}
                <div className="absolute top-1/2 left-16 transform rotate-6 opacity-25">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={157}
                        height={78}
                        className="object-contain"
                    />
                </div>

                {/* Benjamin 4 - Middle Right */}
                <div className="absolute top-1/3 right-20 transform -rotate-12 opacity-18">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={202}
                        height={101}
                        className="object-contain"
                    />
                </div>

                {/* Benjamin 5 - Bottom Left */}
                <div className="absolute bottom-32 left-40 transform rotate-3 opacity-22">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={190}
                        height={95}
                        className="object-contain"
                    />
                </div>

                {/* Benjamin 6 - Bottom Right */}
                <div className="absolute bottom-20 right-16 transform -rotate-5 opacity-20">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={168}
                        height={84}
                        className="object-contain"
                    />
                </div>

                {/* Benjamin 7 - Center */}
                <div className="absolute top-2/3 left-1/2 transform translate-x-8 rotate-9 opacity-16">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={145}
                        height={72}
                        className="object-contain"
                    />
                </div>

                {/* Benjamin 8 - Top Center */}
                <div className="absolute top-40 left-1/2 transform -translate-x-12 -rotate-4 opacity-19">
                    <Image
                        src="/items/benjamin.png"
                        alt="Benjamin"
                        width={213}
                        height={106}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Mobile Layout - Stacked List */}
            <div className="block lg:hidden relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="space-y-8">
                    {/* CLOTHING */}
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                                src="/items/shirt.png"
                                alt="Clothing"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-1">CLOTHING</h3>
                            <p className="text-white text-sm">Shirts, shoes, and pants</p>
                        </div>
                    </div>

                    {/* ELECTRONICS */}
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                                src="/items/mac.png"
                                alt="Electronics"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-1">ELECTRONICS</h3>
                            <p className="text-white text-sm">Ipads, laptops, and phones</p>
                        </div>
                    </div>

                    {/* BEAUTY PRODUCTS */}
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                                src="/items/perfume.png"
                                alt="Beauty Products"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-1">BEAUTY PRODUCTS</h3>
                            <p className="text-white text-sm">Unopened makeup, skincare, and perfumes</p>
                        </div>
                    </div>

                    {/* ACCESSORIES */}
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                                src="/items/watch.png"
                                alt="Accessories"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-1">ACCESSORIES</h3>
                            <p className="text-white text-sm">Watches, jewelry, and other small items</p>
                        </div>
                    </div>

                    {/* BAGS & PURSES */}
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                                src="/items/bag.png"
                                alt="Bags & Purses"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-1">BAGS & PURSES</h3>
                            <p className="text-white text-sm">Bags, purses, and clutches</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Scattered Design */}
            <div className="hidden lg:block relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
                {/* Split Equally - Top Left with rotation */}
                <div className="absolute top-16 left-16 transform -rotate-2">
                    <div className="mb-3">
                        <p className="text-white text-sm font-sans mb-1 transform rotate-1">Shirts, shoes, and pants</p>
                        <h3 className="text-white text-3xl font-serif font-bold transform -rotate-1">CLOTHING</h3>
                    </div>
                    <div className="w-96 h-96 relative transform rotate-3">
                        <Image
                            src="/items/shirt.png"
                            alt="Clothing"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* By Individual - Top Right with rotation */}
                <div className="absolute top-20 right-16 transform rotate-1">
                    <div className="mb-3">
                        <p className="text-white text-sm font-sans mb-1 transform -rotate-1">Ipads, laptops, and phones</p>
                        <h3 className="text-white text-3xl font-serif font-bold transform rotate-2">ELECTRONICS</h3>
                    </div>
                    <div className="w-72 h-72 relative transform -rotate-2">
                        <Image
                            src="/items/mac.png"
                            alt="Electronics"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* By Percentage - Center with slight offset */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-1">
                    <div className="mb-3 text-center">
                        <h3 className="text-white text-3xl font-serif font-bold mb-1 transform -rotate-1">BEAUTY PRODUCTS</h3>
                        <p className="text-white text-sm font-sans transform rotate-1">Unopened makeup, skincare, and perfumes</p>
                    </div>
                    <div className="w-64 h-64 relative transform rotate-2">
                        <Image
                            src="/items/perfume.png"
                            alt="By Percentage"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* By Adjustment - Bottom Left with rotation */}
                <div className="absolute bottom-32 left-16 transform rotate-2">
                    <div className="mb-3">
                        <h3 className="text-white text-3xl font-serif font-bold mb-1 transform -rotate-1">ACCESSORIES</h3>
                        <p className="text-white text-sm font-sans transform rotate-1">Watches, jewelry, and other small items</p>
                    </div>
                        <div className="w-64 h-64 relative transform -rotate-3">
                        <Image
                            src="/items/watch.png"
                            alt="Accessories"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* By Shares - Bottom Right with rotation */}
                <div className="absolute bottom-20 right-16 transform -rotate-1">
                    <div className="mb-3">
                        <h3 className="text-white text-3xl font-serif font-bold mb-1 transform rotate-1">BAGS & PURSES</h3>
                        <p className="text-white text-sm font-sans transform -rotate-1">Bags, purses, and clutches</p>
                    </div>
                    <div className="w-64 h-64 relative transform rotate-2">
                        <Image
                            src="/items/bag.png"
                            alt="By Shares"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}