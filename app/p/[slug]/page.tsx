import data from "@/app/data";
import Section from "@/components/Section";
import React from "react";
import ProductImage from "@/components/ProductImage";
import ProductsSwiper from "./ProductsSwiper";
import ProductDetails from "./ProductDetails";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = data.products.find((p) => p.slug === slug);
  if (!product) return null;
  return (
    <Section backgroundClassName="pt-0">
      <div className="h-screen grid md:grid-cols-[2fr_1fr] grid-cols-1    items-center gap-12 ">
        <div className="relative  p-24">
          <div className="bg-zinc-900 absolute inset-12 rounded-3xl" />
          <ProductImage
            src={product.image}
            width={500}
            height={500}
            className="relative object-contain  w-[500px] h-full mx-auto"
            alt="Image"
          />
        </div>
<ProductDetails product={product} />
      </div>
      <ProductsSwiper />
    </Section>
  );
}
