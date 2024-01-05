import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-7xl'>
      <span className='font-black'>Não foi possíel encontrar esta página</span>
    <Button>
      <Link href="/">
      Voltar à página inicial
      </Link>
    </Button>
    </div>
  )
}
