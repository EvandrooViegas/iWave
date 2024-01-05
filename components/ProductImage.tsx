import Image from 'next/image'
import React, { ComponentProps } from 'react'

export default function ProductImage(props: {
    src: string | undefined
} & ComponentProps<typeof Image>) {
    const { src, ...rest } = props
  return (
    <Image src={`/products/${src}`} {...rest} alt='Product Image' />
  )
}
