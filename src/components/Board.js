import React from "react";
import { useState } from "react";

export default function Board({ currentBoard, incBoard, decBoard }) {
  const boards = ["Speed", "Standard", "Advanced"];
  return (
    <div>
      <div className="flex h-[60px] items-center">
        <button
          className="bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-1 md:py-2 px-3 md:px-6 rounded-l"
          onClick={decBoard}
        >
          -
        </button>
        <span className="text-2xl md:text-4xl md:p-4 uppercase text-center w-[200px] md:w-[350px]">
          {boards[Math.abs(currentBoard % 3)]}
        </span>
        <button
          className=" bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-1 md:py-2 px-3 md:px-6 rounded-r"
          onClick={incBoard}
        >
          +
        </button>
      </div>
    </div>
  );
}
