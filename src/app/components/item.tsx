import Image from 'next/image';

export interface ItemProps {
    image: string;
    title?: string;
    description?: string;
    xOffset?: number;
    yOffset?: number;
}

export default function Item({ image, title, description, xOffset, yOffset }: ItemProps) {
    const IMAGE_HEIGHT = 288;
    return (
        <div className={`relative bg-white overflow-hidden ${xOffset ? `translate-x-[${xOffset * 100}%]` : ''} ${yOffset ? `translate-y-[${yOffset * 100}%]` : ''}`}>
            <div className="relative w-full h-72">
                <Image
                    src={image}
                    alt={title || "Item"}
                    height={IMAGE_HEIGHT}
                    width={IMAGE_HEIGHT}
                    className="object-cover"
                />
            </div>
            {title && (
                <div className="p-3">
                    <h4 className="text-sm font-medium text-black">{title}</h4>
                    {description && (
                        <p className="text-xs text-gray-600 mt-1">{description}</p>
                    )}
                </div>
            )}
        </div>
    );
}