import Link from 'next/link';
import React from 'react'
import { MdOutlineWaves } from "react-icons/md";
export default function Logo() {
  return (
    <Link href='/' className='text-blue-300 text-3xl flex items-center '>
     <MdOutlineWaves  />
    </Link>
  )
}
