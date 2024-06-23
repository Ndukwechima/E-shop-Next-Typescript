"use client";

import { Button } from "@/components/ui/button";
import { addItem, cartItem, removeItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  // Get our cart Items
  const items = useSelector((state: RootState) => state.cart.items);
  //   Calculate the total quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  //   Calculate the total price
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Calculate Vat (15%)
  const vat = (+totalPrice * 0.15).toFixed(2);

  //   Total price with vat
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);
  //   console.log({ totalPrice, vat, totalPriceWithVat });

  // Get authenticate user
  const { user } = useUser();

  //    ADD ITEM
  const addItemHandler = (item: cartItem) => {
    dispatch(addItem(item));
  };

  //    REMOVE ITEM
  const removeItemHandler = (id: number) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* If cart is empty */}
      {items.length === 0 && (
        <div className=" w-full h-[80vh] flex flex-col items-center justify-center">
          <Image
            src="/images/cart.svg"
            alt="empty_cart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is Empty</h1>
          <Link href="/">
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
      )}
      {/* If cart is not empty */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
          {/* Cart Items */}
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700">
              Your Cart has ({totalQuantity} Items)
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold ">
                        Category : {item.category}
                      </h1>
                      <h1 className="md:text-lg text-sm font-bold text-blue-950">
                        ${item.price}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Quantity : {item.quantity}
                      </h1>
                      <div className="flex items-center mt-4 space-x-2">
                        <Button onClick={() => addItemHandler(item)}>
                          Add More
                        </Button>
                        <Button
                          onClick={() => removeItemHandler(item.id)}
                          variant={"destructive"}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart summary */}
          <div className="xl:col-span-2">
            <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg">
              <h1 className="text-center mt-8 mb-8 text-3xl font-semibold text-white">
                Summary
              </h1>
              <div className="w-full h-[1.3px] bg-white bg-opacity-20"></div>
              <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>VAT</span>
                <span>${vat}</span>
              </div>
              <div className="flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="w-full h-[1.3px] bg-white bg-opacity-20"></div>
              <div className="flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Total</span>
                <span>{totalPriceWithVat}</span>
              </div>

              {!user && (
                <Link href="/sign-in">
                  <Button className="w-full bg-orange-500">
                    Sign In to Checkout
                  </Button>
                </Link>
              )}

              {user && (
                // Paypal Button
                <Button className="w-full bg-orange-500">Paypal</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
