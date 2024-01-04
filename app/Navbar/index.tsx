import React from 'react'
import Logo from './Logo'
import { BsBag } from "react-icons/bs";
import links from './links';
export default function Navbar() {
  return (
    <nav className='z-nav fixed top-0 inset-x-0  border-b border-neutral-800 bg-background'>
          <div className='max-app-width mx-auto  px-12 py-2  flex items-center justify-between'>
            <Logo />
            <ul className='flex items-center  gap-5'>
            {links.map(link => (
                <li key={link.name} className='hover:underline text-neutral-300 text-xs '>
                    <a href={link.link}>
                    {link.name}
                    </a>
                </li>
            ))}
            </ul>

            <button className='relative'>
<BsBag />
<div className='absolute bg-red-600 rounded-full w-5 h-5  flex items-center justify-center p-1 text-xs top-1/2 left-1/2'>
              3
</div>
            </button>
          </div>
    </nav>
  )
}
