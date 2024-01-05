import data from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductImage from './ProductImage'
import getProductDiscount from '@/utils/getProductDiscount'

type Props = {
    product: typeof data.products[number]
}
export default function ProductCard(props: Props) {
    const { product } = props
  return (
    <Link
    href={`/p/${product.slug}`}
    key={product.slug}
    className="relative hover:bg-zinc-800 bg-zinc-900 transition-all h-full p-4 flex flex-col gap-0.5 justify-center items-center"
    > 
   <div className='relative w-[300px] aspect-video'>
   <ProductImage
    className='object-contain'
    fill
        src={product.image}
        alt={product.name}
      />
   </div>

      <span className="font-semibold font-xs text-neutral-400  mt-4">
        {product.name}
      </span>
      <div className="flex items-center gap-2 font-mono">
        <span className="text-xs line-through text-neutral-400">{product.price}€</span>
        <span>{getProductDiscount(product)}€</span>
      </div>

      <div className="absolute top-6 right-6 bg-primary text-black rounded-full px-4 font-mono text-sm">
        {product.discount}% off
      </div>
    </Link>
  )
}
