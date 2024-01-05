"use server"
import stripe from "@/lib/stripe";
import { iItem } from "@/store/useCart";

export async function handlePayment(products: iItem[], origin: string) {
  const stripe_products = products.map((product) => ({
    quantity: product.qty,
    price_data: {
      currency: "eur",
      unit_amount: Math.round(product.price * 100),
      product_data: {
        name: product.name,
        images: [`${origin}/products/${product.image}`],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    line_items: stripe_products,
    mode: "payment",
    payment_method_types: ["card", "paypal"],
    success_url: `${origin}/success`,
    cancel_url: `${origin}/cancel`,
    billing_address_collection: "required",
  });
  if(!session.url) return null
  return session.url as unknown as URL;
}
