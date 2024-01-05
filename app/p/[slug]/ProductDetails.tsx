"use client";
import React, { useState } from "react";
import Counter from "./Counter";
import { Button } from "@/components/ui/button";
import iProduct from "@/types/iProduct";
import useCart from "@/store/useCart";
import { toast } from "sonner";
import { handlePayment } from "@/services/stripe";

export default function ProductDetails({ product }: { product: iProduct }) {
  const { addItem, setIsCartOpen, items } = useCart();
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = () => {
    addItem({ ...product, qty: counter });
    toast(`${counter} "${product.name}" adicionado ao carrinho!`)
    setIsCartOpen(true)
  };
  const handleSingleBuy = async () => {
    setIsLoading(true)
    const url = await handlePayment([{ ...product, qty: counter }], location.origin)
    location.replace(url)
    setIsLoading(false)
  }
  return (
    <div className="flex flex-col gap-8  justify-between ">
      <div className="space-y-4">
        <span className="text-5xl font-black">{product?.name}</span>
        <Counter initialCounter={1} onCountChange={(nCounter) => setCounter(nCounter)} />
      </div>
      <div className="border rounded-full w-full" />
      <div className="space-y-2">
        <Button className="w-full" size="lg" variant="outline" onClick={handleSingleBuy}>
          {isLoading ? 'Loading...' : 'Buy now'}
        </Button>
        <Button className="w-full" size="lg" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
