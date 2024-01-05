import iProduct from "@/types/iProduct";

export default function getProductDiscount(product: iProduct) {
    return Math.round(product.price - (product.price * (product.discount / 100)))
}