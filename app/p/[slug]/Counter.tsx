"use client";
import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0)
  const incrementCounter = () => {
    setCounter(counter + 1)
  }
  const decrementCounter = () => {
    const nCounter = counter - 1
    setCounter(nCounter < 0 ? 0 : nCounter)
}
    return (
    <div className="space-y-1">
        <span className="text-sm  text-zinc-400">Quantidade: </span>
        <div className="grid text-center grid-cols-[1fr_3fr_1fr] border p-4 max-w-[400px]">
      <button className="border-r" onClick={decrementCounter}>-</button>
      <div className="border-r">{counter}</div>
      <button onClick={incrementCounter}>+</button>
    </div>
    </div>
  );
}
