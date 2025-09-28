import Image from 'next/image';

export interface ItemProps {
    image: string | string[];
    title?: string;
    description?: string;
}

export default function Item({ image, title, description }: ItemProps) {
    
    return (
        <div>

        </div>
    );
}