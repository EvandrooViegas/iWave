"use client";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";
import { Check } from "lucide-react"
import useCart from "@/store/useCart";
export default function Wrapper() {
  const { clearCart } = useCart()
  useEffect(() => {
    clearCart()
  }, [])
  return (
    <Section className="text-5xl h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center gap-2 text-5xl">
        <span>Pagamento Concluído</span>
        <span>
          <Check />
        </span>
      </div>
      <Link href="/">
        <Button>Voltar à página inicial</Button>
      </Link>
    </Section>
  );
}
