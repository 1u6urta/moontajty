"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import styles from "./flower.module.css";

export default function Flower() {
  const [activeIndex, setActiveIndex] = useState(0);

  const petals = [
    { className: "top-left", image: "/image 1.jpg" },
    { className: "top-right", image: "/image 1.jpg" },
    { className: "bottom-right", image: "/image 1.jpg" },
    { className: "bottom-left", image: "/image 1.jpg" }, // repeat or change image
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % petals.length);
    }, 3000); // change petal every 2 seconds

    return () => clearInterval(interval);
  }, [petals.length]);

  return (
    <div className="flower">
      {petals.map((petal, index) => (
        <div
          key={index}
          className={`petal ${petal.className} 
          ${
            index === activeIndex ? "active" : ""
          }`}
        >
          <Image
            className="img"
            src={petal.image}
            width={200}
            height={200}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
