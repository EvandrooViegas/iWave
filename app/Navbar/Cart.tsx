import useCart from "@/store/useCart";
import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductImage from "@/components/ProductImage";
import Counter from "../p/[slug]/Counter";
import { Button } from "@/components/ui/button";
import { handlePayment } from "@/services/stripe";
import { toast } from "sonner";
export default function Cart() {
  const { size, items, isCartOpen, setIsCartOpen, setItemQty, clearCart } =
    useCart();
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const url = await handlePayment(items, location.origin);
      console.log(url)
      if (!url) return new Error();
      location.replace(url);
    } catch (error) {
      return toast.error("Ouve algum erro! Tente novamente");
    } finally  {
        setIsLoading(false)
    }
  };
  return (
    <Sheet onOpenChange={(isOpen) => setIsCartOpen(isOpen)} open={isCartOpen}>
      <SheetTrigger asChild>
        <button className="relative text-xl">
          <BsBag />
          <div className="absolute bg-red-600 rounded-full w-5 h-5  flex items-center justify-center p-1 text-xs top-1/2 left-1/2">
            {size}
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>O seu carrinho de compras</SheetTitle>
          <SheetDescription>
            Todos os seus produtos estão listados aqui
          </SheetDescription>
        </SheetHeader>

        {size > 0 ? (
          <div className="space-y-2">
            <div className="flex flex-col md:gap-4 gap-16 mt-4 border border-zinc-900 p-4 rounded-lg  overflow-y-auto max-h-[60vh]">
              {items.map((item) => (
                <div className="flex flex-col md:flex-row items-center  gap-6" key={item.slug}>
                  <div className="bg-neutral-900 p-4 rounded-xl">
                    <ProductImage
                      src={item.image}
                      width={90}
                      height={90}
                      alt="Image"
                    />
                  </div>
                  <div className="flex flex-col gap-0.1  w-full">
                    <span className="font-semibold">{item.name}</span>
                    <Counter
                      initialCounter={item.qty}
                      onCountChange={(n) => setItemQty(item.slug, n)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Button variant="link" onClick={clearCart}>
              Limpar
            </Button>
          </div>
        ) : (
          <span>Nenhum produto no carrinho</span>
        )}
        <Button onClick={handleCheckout}>
          {isLoading ? "Carregando..." : "Finalizar"}
        </Button>
      </SheetContent>
    </Sheet>
  );
}
