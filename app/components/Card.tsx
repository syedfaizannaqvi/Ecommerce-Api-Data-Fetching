import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  imageUrl: string;
  header?: boolean;
}

const Card = ({ id, title, category, price, imageUrl, header }: CardProps) => {
  return (
    <Link href={`/product/${id}`} className="group w-full">
      <div className="h-full flex flex-col border hover:opacity-90 transition-all duration-300 p-4">
        {/* Fixed height image container */}
        <div className="relative w-full aspect-square mb-2 bg-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain p-2 transition-all duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Card content with fixed height */}
        <div className="flex flex-col gap-1 p-2 flex-grow">
          <div className="flex flex-col gap-1">
            {header && (
              <h3 className="font-medium text-black text-sm group-hover:underline">
                {header}
              </h3>
            )}
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-medium text-black text-sm group-hover:underline line-clamp-2">
                {title}
              </h3>
              <span className="text-sm font-medium whitespace-nowrap">
                ${price.toFixed(2)}
              </span>
            </div>
            <p className="text-gray-500 text-sm capitalize">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;