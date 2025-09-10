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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
                {/* Split Equally - Top Left with rotation */}
                <div className="absolute top-8 left-8 lg:top-16 lg:left-16 transform -rotate-2">
                    <div className="mb-3">
                        <p className="text-white text-xs lg:text-sm font-sans mb-1 transform rotate-1">one bill, equal bites</p>
                        <h3 className="text-white text-xl lg:text-3xl font-serif font-bold transform -rotate-1">CLOTHING</h3>
                    </div>
                    <div className="w-64 h-64 lg:w-96 lg:h-96 relative transform rotate-3">
                        <Image
                            src="/items/shirt.png"
                            alt="Clothing"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* By Individual - Top Right with rotation */}
                <div className="absolute top-12 right-8 lg:top-20 lg:right-16 transform rotate-1">
                    <div className="mb-3">
                        <p className="text-white text-xs lg:text-sm font-sans mb-1 transform -rotate-1">this one's on you, that one's on me</p>
                        <h3 className="text-white text-xl lg:text-3xl font-serif font-bold transform rotate-2">ELECTRONICS</h3>
                    </div>
                    <div className="w-48 h-48 lg:w-72 lg:h-72 relative transform -rotate-2">
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
                        <h3 className="text-white text-xl lg:text-3xl font-serif font-bold mb-1 transform -rotate-1">BEAUTY PRODUCTS</h3>
                        <p className="text-white text-xs lg:text-sm font-sans transform rotate-1">slice it by % nice and neat</p>
                    </div>
                    <div className="w-48 h-48 lg:w-64 lg:h-64 relative transform rotate-2">
                        <Image
                            src="/items/perfume.png"
                            alt="By Percentage"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* By Adjustment - Bottom Left with rotation */}
                <div className="absolute bottom-24 left-8 lg:bottom-32 lg:left-16 transform rotate-2">
                    <div className="mb-3">
                        <h3 className="text-white text-xl lg:text-3xl font-serif font-bold mb-1 transform -rotate-1">ACCESSORIES</h3>
                        <p className="text-white text-xs lg:text-sm font-sans transform rotate-1">add a little, shave a little</p>
                    </div>
                        <div className="w-48 h-48 lg:w-64 lg:h-64 relative transform -rotate-3">
                        <Image
                            src="/items/watch.png"
                            alt="Accessories"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* By Shares - Bottom Right with rotation */}
                <div className="absolute bottom-12 right-8 lg:bottom-20 lg:right-16 transform -rotate-1">
                    <div className="mb-3">
                        <h3 className="text-white text-xl lg:text-3xl font-serif font-bold mb-1 transform rotate-1">BAGS & PURSES</h3>
                        <p className="text-white text-xs lg:text-sm font-sans transform -rotate-1">2 shares for dad, 1 for kid (you get it)</p>
                    </div>
                    <div className="w-32 h-32 lg:w-48 lg:h-48 relative transform rotate-2">
                        <Image
                            src="/items/chanel.png"
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