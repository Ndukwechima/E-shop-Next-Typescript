import Link from "next/link";
import React from "react";
import SearchBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ProductAds from '@/components/ads/ProductAds'

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-rose-600 shadow-md">
      <div className="flex items-center justify-between w-[95%] md-w-4/5 mx-auto h-full">
        {/* Logo */}
        <Link href="/" className="md:text-4xl text-2xl  text-white font-bold">
        E-shop
        </Link>

        <ProductAds />

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* SearchBox */}
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} />

          {/* ShoppingCartButton */}
          <ShoppingCartButton />

          {/* User button */}

          {/* SignIn User */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Not SignIn */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
