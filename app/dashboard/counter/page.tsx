"use client";
import { useState } from "react";

const Counterpage = () => {
  const [counter, setCounter] = useState(10);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Counterpage;
