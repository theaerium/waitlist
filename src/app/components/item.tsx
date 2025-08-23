import Image from 'next/image';

export interface ItemProps {
    image: string | string[];
    title?: string;
    description?: string;
    xOffset?: number;
    yOffset?: number;
}

export default function Item({ image, title, description, xOffset, yOffset }: ItemProps) {
    const IMAGE_HEIGHT = 384;
    
    // Convert single image to array for consistent handling
    const images = Array.isArray(image) ? image : [image];
    const displayImages = images.slice(0, 4); // Max 4 images
    
    return (
        <div>
        <div className={`relative bg-white border border-black overflow-hidden ${xOffset ? `translate-x-[${xOffset * 100}%]` : ''} ${yOffset ? `translate-y-[${yOffset * 100}%]` : ''}`}>
            {title && (
                <div className="p-2 sm:p-3 pb-1 sm:pb-2">
                    <h4 className="text-xs sm:text-sm font-medium text-black">{title}</h4>
                </div>
            )}
            <div className="relative w-full h-64 sm:h-80 md:h-96">
                {displayImages.length === 1 ? (
                    <Image
                        src={displayImages[0]}
                        alt={title || "Item"}
                        height={IMAGE_HEIGHT}
                        width={IMAGE_HEIGHT}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="grid grid-cols-2 gap-0.5 sm:gap-1 w-full h-full p-0.5 sm:p-1">
                        {displayImages.map((img, index) => (
                            <div key={index} className="relative">
                                <Image
                                    src={img}
                                    alt={`${title || "Item"} ${index + 1}`}
                                    height={IMAGE_HEIGHT}
                                    width={IMAGE_HEIGHT}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        {description && (
            <div className="pt-1 sm:pt-2">
                <p className="text-xs text-black leading-relaxed">{description}</p>
            </div>
        )}
        </div>
    );
}