"use client"
import React from "react";
import Logo from "./Logo";
import links from "./links";
import Cart from "./Cart";
export default function Navbar() {
  return (
    <nav className="z-nav fixed top-0 inset-x-0  border-b border-neutral-800 bg-background">
      <div className="max-app-width mx-auto  px-12 py-2  flex items-center justify-between">
        <Logo />
        <ul className="flex items-center  gap-5">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:underline text-neutral-300 text-sm "
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

<Cart />

      </div>
    </nav>
  );
}
