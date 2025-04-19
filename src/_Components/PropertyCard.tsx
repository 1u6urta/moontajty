import React from 'react';
import Heart from './Heart';
import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCard() {

  // const hasPromo = Math.random() > 0.3;
  // const promo = hasPromo ? parseFloat((Math.random() * 15).toFixed(1)) : 0;

  // const originalPrice = Math.floor(Math.random() * (1500 - 300 + 1) + 300);
  
  // const discountedPrice = promo > 0 ? originalPrice - (originalPrice * (promo / 100)) : 0;
  
  
  const formatPrice = (price: number): string => {
    return price.toLocaleString()+ 'DA';
  };
  
  const promo = 20;
  const originalPrice = 750;
  const discountedPrice = promo > 0 ? originalPrice - (originalPrice * (promo / 100)) : 0;
  return (
    <div className="card max-w-sm shadow-lg">
      {/* Image avec badge Data Card et icône favoris */}
      <div className="relative">
        <Image 
          src="/image 4.jpg" 
          alt="Maison détachée" 
          width={600}
          height={600}
          className="w-full cursor-pointer"
        ></Image>
        <div className="absolute top-4 right-4">
          <div className="text-white">
            <Heart />
          </div>
        </div>
      </div>
      
      {/* Informations sur la propriété */}
      <div className="px-4 py-3">
        <div className="text-gray-500 text-sm font-medium mb-1">DETACHED HOUSE • 5Y OLD</div>
        <div className="flex items-center mb-1">
          <div className={`text-gray-800 text-2xl font-bold mr-2 ${promo > 0 ? 'line-through' : ''}`}>
            {formatPrice(originalPrice)}
          </div>
          {promo > 0 && (
            <div className="text-red-500 text-2xl font-bold">
              {formatPrice(discountedPrice)}
            </div>
          )}
        </div>
        <div className="text-gray-600 text-sm mb-4">742 Favoris</div>
        <Link 
          href="/products/1"
          className="w-full details text-white font-medium py-2 px-4 rounded transition duration-200"
        >
          View Property Details
        </Link>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="px-4 py-3">
          <div className="text-gray-400 text-xs mb-2">REALTOR</div>
          <div className="flex items-center">
            <Image
              src="/image 1.jpg" 
              width={200}
              height={200}
              alt="Agent immobilier" 
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <Link href="/producteurs/1" className="text-gray-800 font-medium">Tiffany Heffner</Link>
              <div className="text-gray-500 text-sm">(555) 555-4321</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}