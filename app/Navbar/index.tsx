"use client"
import React from "react";
import Logo from "./Logo";
import links from "./links";
import Cart from "./Cart";

export async function generateMetadata({ params }) {
  return {
    title: 'iWaveoutlet',
  }
}

export default function Navbar() {
  return (
    <nav className="z-nav fixed top-0 inset-x-0  border-b border-neutral-800 bg-background">
      <div className="max-app-width mx-auto  px-12 py-2  flex items-center justify-between">
        <Logo />

<Cart />

      </div>
    </nav>
  );
}
