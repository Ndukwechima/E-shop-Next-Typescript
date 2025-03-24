import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import BannerAds from '@/components/ads/BannerAds'

const Hero = () => {
  return (
    <div className="w-full flex justify-center flex-col md:mb-8 my-0
     bg-orange-50 border border-rose-100 shadow-md py-10">
      {/* Define grid */}
      <div className="w-full px-4 md:px-10 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            🛍️ Shop with <span className="text-rose-600">confidence</span> offer
            up to <span className="text-orange-500">60%</span> off
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            {`Discover an endless selection of top-quality products from trusted
            vendors worldwide—all in one place! Whether you're shopping for
            fashion, electronics, home essentials, or unique handmade items, our
            multi-vendor marketplace connects you with the best deals and
            exclusive finds.🚀`}
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button size={"lg"} className="bg-orange-600">
              Shop Now
            </Button>
            <Button size={"lg"} className="bg-rose-600">
              Explore More!
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="hidden lg:block">
          <Image
            src="/images/hero.jpg"
            alt="hero-img"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
      <BannerAds />
    </div>
  );
};

export default Hero;
