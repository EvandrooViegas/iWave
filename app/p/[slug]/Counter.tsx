"use client";
import React, { useState } from "react";

export default function Counter({
  initialCounter,
  onCountChange,
}: {
  initialCounter: number;
  onCountChange?: (nCount: number) => void;
}) {

  const [counter, setCounter] = useState(initialCounter)
  const setNewCounter = (nCounter: number) => {
    setCounter(nCounter);
    onCountChange?.(nCounter);
  };
  const inc = () => {
    const nCounter = counter + 1;
    setNewCounter(nCounter);
  };
  const dec = () => {
    const nCounter = counter - 1;
    setNewCounter(nCounter < 1 ? 1: nCounter);
  };

  return (
    <div className="space-y-1">
      <span className="text-sm  text-zinc-400">Quantidade: </span>
      <div className="grid text-center grid-cols-[1fr_2fr_1fr] border p-4 max-w-[400px]">
        <button className="border-r" onClick={dec}>
          -
        </button>
        <div className="border-r">{counter}</div>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}
