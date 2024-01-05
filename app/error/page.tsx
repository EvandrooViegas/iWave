"use client";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Check, X } from "lucide-react";
export default function Wrapper() {
  return (
    <Section className="text-5xl h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center gap-2 text-5xl">
        <span>Pagamento Cancelado</span>
        <span>
          <X />
        </span>
      </div>
      <Link href="/" className="text-5xl">
        <Button className="flex items-center gap-2">
          <span>Voltar à página inicial</span>
        </Button>
      </Link>
    </Section>
  );
}
