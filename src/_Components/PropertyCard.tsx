import React from 'react';
import { useTranslations } from "next-intl";
import Heart from './Heart';
import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCard() {

  const t = useTranslations("Products");

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
    <div className="card max-w-sm">
      {/* Image avec badge Data Card et icône favoris */}
      <div className="imageCon relative">
        <Image 
          src="/image 4.jpg" 
          alt="" 
          width={600}
          height={600}
          className="img w-full cursor-pointer"
        ></Image>
        <div className="absolute top-4 right-4">
          <div className="text-white">
            <Heart />
          </div>
        </div>
      </div>
      
      {/* Informations sur la propriété */}
      <div className="px-4 pt-3">
        <div className="text text-sm font-medium mb-1">MOONTAJTY BAG • 5M OLD</div>
        <div className="flex items-center mb-1">
          <div className={`text text-2xl font-bold m ${promo > 0 ? 'line-through' : ''}`}>
            {formatPrice(originalPrice)}
          </div>
          {promo > 0 && (
            <div className="text-red-500 text-2xl font-bold">
              {formatPrice(discountedPrice)}
            </div>
          )}
        </div>
        <div className="text-gray-500 text-sm mb-4">742 {t("Favoris")}</div>
        <Link 
          href="/products/1"
          className="details text-white font-medium py-2 px-4 rounded transition duration-200"
        >
          {t("ViewDetails")}
        </Link>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="px-4 py-3">
          <div className="text-gray-500 text-xs mb-2">{t("Producer")}</div>
          <div className="flex items-center">
            <Image
              src="/image 1.jpg" 
              width={200}
              height={200}
              alt="" 
              className="rounded-full w-10 h-10 m"
            />
            <div>
              <Link href="/producteurs/1" className="text font-medium">HADJAM JUGURTA</Link>
              <div className="text-gray-500 text-sm">0791770731</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}