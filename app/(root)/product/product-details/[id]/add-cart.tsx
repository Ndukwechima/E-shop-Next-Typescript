"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addItem, cartItem } from "@/store/cartSlice";
import { Product } from "@/types";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addCartHandler = () => {
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to cart`,
      variant: "success",
      duration: 5000,
    });
    dispatch(addItem(product));
  };
  return (
    <Button
      onClick={() => {
        addCartHandler();
      }}
      className="mt-6 "
    >
      Add to cart
    </Button>
  );
};

export default AddToCart;
