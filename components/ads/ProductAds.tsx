"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from "@/public/images/banner1.jpg";
import banner2 from "@/public/images/banner2.jpg";
import banner3 from "@/public/images/banner3.jpg";

const banners = [banner1, banner2, banner3];


const ProductBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top left-[20rem] w-1/2 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={banners[currentIndex].src} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={banners[currentIndex]}
            alt="Product Banner"
            className="object-cover w-[12rem] h-[6rem] rounded-lg shadow-lg"
            sizes="160px"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductBanner;
