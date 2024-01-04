import Section from "@/components/Section";
import React from "react";
import products from "./products";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <Section title="Produtos" subtitle="A lista dos nossos produtos">
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {products.map((product) => (
          <Link
          href={`/p/${product.name}`}
          key={product.name}
          
          > 
          <li
            className="hover:bg-zinc-800 bg-zinc-900 transition-all h-full p-4 flex flex-col gap-0.5 justify-center items-center"
          >
            <Image
              src={`/products/${product.image}`}
              width={100}
              height={100}
              alt={product.name}
            />

            <span className="font-semibold font-xs text-neutral-400  mt-4">
              {product.name}
            </span>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-xs line-through text-neutral-400">{product.oldPrice}€</span>
              <span>{product.newPrice}€</span>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </Section>
  );
}
