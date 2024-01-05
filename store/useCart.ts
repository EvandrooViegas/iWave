import iProduct from "@/types/iProduct";
import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

const useCart = create(
  persist<Store>(
    (set, get) => ({
      items: [],
      size: 0,
      addItem: (nItem: iItem) => {
        const items = get().items;
        const alreadyExists = items.some((i) => i.slug === nItem.slug);
        let nItems = items;
        if (alreadyExists) {
          nItems = nItems.map((i) =>
            i.slug === nItem.slug ? { ...i, qty: i.qty + nItem.qty } : i
          );
        } else {
          nItems.push(nItem);
        }
        set({ size: nItems.length, items: nItems });
      },
      setItemQty: (slug: string, qty: number) => {
        const items = get().items
        const nItems = items.map(i => i.slug === slug ? ({ ...i, qty: qty }) : i)
        set({ items: nItems })
      },
      clearCart: () => set({ items: [], size: 0 }),
      isCartOpen: false,
      setIsCartOpen: (n) => {
        set({ isCartOpen: n })
      }
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

export type iItem = iProduct & { qty: number };
type Store = {
  items: iItem[];
  size: number;
  isCartOpen: boolean,
  setIsCartOpen: (n: boolean) => void,
  addItem: (nItem: iItem) => void;
  setItemQty: (slug: string, qty: number) => void
  clearCart: () => void
};
