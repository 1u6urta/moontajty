import React from "react";
import { useTranslations } from "next-intl";
import Heart from "./Heart";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  // rating: number;
  location: string;
  favorites: number;
  promo: number;
}

export default function PropertyCard({ property }: { property: Property }) {
  const t = useTranslations("Products");


  const discountedPrice =
    property.promo > 0
      ? property.price - property.price * (property.promo / 100)
      : 0;
    
  
  return (
    <div key={property.id} className="property-card">
      <div className="relative overflow-hidden rounded-lg group">
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={property.image}
            alt={property.title}
            width={200}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-4 right-3">
          <Heart />
        </div>
        <div className="pro absolute top-3 left-3">
          <Image 
          width={40}
          height={40}
          alt="P"
          src="/image 1.jpg"
          className="proImage"
          />
          <p className="proText">HADJAM JUGURTA</p>
        </div>
        <div className="p-4 bg-white rounded-b-lg">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg">{property.title}</h3>
            {/* <div className="flex items-center text-amber-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="ml-1 text-sm">{property.rating}</span>
                    </div> */}
          </div>
          <div className="text-gray-600 text-sm mt-1 flex justify-between">
            <span>{property.category}</span>
            <span>{property.location}</span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="flex">
              <span
                className={`font-bold text-[#00bf63] ${
                  property.promo > 0 ? "line-through" : ""
                }`}
              >
                {property.price} {t("DA")}
              </span>
              {property.promo > 0 && (
                <div className="text-red-500 px-5 font-bold">
                  {discountedPrice}
                  {t("DA")}
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500 flex items-center">
              <span className="mx-1">{property.favorites}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </span>
          </div>
          <button
            // href="/"
            className="mt-3 w-full bg-[#00bf63] text-white py-2 rounded-md hover:bg-[#6ba57e] transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
