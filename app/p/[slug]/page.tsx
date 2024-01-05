import data from "@/app/data";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import Counter from "./Counter";
import { Button } from "@/components/ui/button";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = data.products.find((p) => p.slug === slug);
  return (
    <Section className="h-screen grid md:grid-cols-[2fr_1fr] grid-cols-1 items-center gap-12 " backgroundClassName="pt-0">
       <div className="relative w-full h-full p-24">
        <div className="bg-zinc-900 w-full h-full rounded-xl">
          <Image
            src={`/products/${product?.image}`}
            className="object-contain"
            fill
            alt="Image"
          />

        </div>
        </div>
        <div className="flex flex-col gap-8 justify-between ">
         <div className="space-y-4">
         <span className="text-5xl font-black">{product?.name}</span>
          <Counter />
         </div>
          <div className="border rounded-full w-full" /> 
          <div className="space-y-2">
            
          <Button className="w-full" size="lg" variant="outline">Buy now</Button>
          <Button className="w-full" size="lg">Add to Cart</Button>
          </div>
        </div>
    </Section>
  );
}
