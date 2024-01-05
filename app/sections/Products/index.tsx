import Section from "@/components/Section";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/app/data";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <Section title="Produtos" subtitle="A lista dos nossos produtos">
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {data.products.map((product) => (
         <ProductCard product={product} key={product.name} />
        ))}
      </ul>
    </Section>
  );
}
