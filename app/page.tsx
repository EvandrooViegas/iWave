import Products from "./sections/Products";

export default function Home() {
  return (
  <main >
    <div className="bg-img h-[300px]  relative">
    <div className="absolute inset-0 bg-black/80 flex justify-center items-center p-6 md:text-left text-center">
      
      <h3 className="text-4xl font-bold">
      iWave Outlet, a tua loja apple de escolha
      </h3>
    </div>
    </div>
    <Products />
    nao acabei porque tava com sono
  </main>
  
  )
}
