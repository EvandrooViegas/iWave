"use client"
import data from "@/app/data";
import ProductCard from "@/components/ProductCard";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export default function ProductsSwiper() {
  const products = data.products;
  return (
   <div className="space-y-2">
    <span>Produtos que talvez possa gostar:</span>
     <Carousel opts={{ align: "start" }} >
    <CarouselContent>
    {products.map((product) => (
      <CarouselItem key={product.name} className="md:basis-1/2 lg:basis-1/4">

          <ProductCard product={product} />
      </CarouselItem>
          ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
   </div>
    );
}
