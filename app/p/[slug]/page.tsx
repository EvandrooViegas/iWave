import data from "@/app/data";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = data.products.find((p) => p.slug === slug);
  return (
    <Section className="h-screen grid md:grid-cols-2 grid-cols-1 items-center gap-12 " backgroundClassName="pt-0" >
      <div>
       <div className="flex flex-col justify-center h-full">
       <div className="relative w-full h-[500px]">
          <Image
            src={`/products/${product?.image}`}
            className="object-contain"
            fill
            alt="Image"
          />
        </div>
       </div>
      </div>
        <div className="space-y-2">
          <span>{product?.name}</span>
        </div>
    </Section>
  );
}
