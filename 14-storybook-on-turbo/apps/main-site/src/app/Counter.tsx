"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="black text-white">
      <p className="text-3xl">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 rounded-full bg-blue-800 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 rounded-full bg-blue-800 text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
