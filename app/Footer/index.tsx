import React from 'react'
import { SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import MbwAY from "./mbway.png"
import { FaCcAmex, FaTiktok } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from 'next/image';
import Section from '@/components/Section';
const paymentMethods = [
<SiVisa key={1}  />,
<RiMastercardFill key={2} />,
<FaPaypal key={3} />,
<FaCcAmex key={4} />,
<Image src={MbwAY} width={60} height={60} key={5} alt='mb way' />
]
const socialMedias = [
    { href: "/", icon: <FaInstagram /> },
    { href: "/", icon: <FaTiktok /> }
]

export default function Footer() {
  return (
<Section backgroundClassName='bg-black' withPadding={false}>
<footer className=' flex flex-col justify-center items-center gap-4 p-4'>
        <span className='font-black'>@iWave outlet - 2024</span>
    <ul className='flex flex-wrap gap-4 text-2xl mt-12'>
        {paymentMethods.map((i, idx) => (
            <li key={idx}>
                {i}
            </li>   
        ))}
    </ul>
  <div >
  <span className='text-xs font-semibold text-neutral-400 font-mono'>Nossas redes sociais:</span>
    <ul className='flex items-center justify-center gap-4'>
            {socialMedias.map(s => (
                <li key={s.href}>
                    {s.icon}
                </li>
            ))}
    </ul>
  </div>
    </footer>
</Section>
  )
}
