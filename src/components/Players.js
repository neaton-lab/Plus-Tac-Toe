import React from "react";
import { useState } from "react";

function Players({ currentPlayers, setPlayers }) {
  let incPlayers = () => {
    if (currentPlayers < 4) {
      setPlayers((currentPlayers) => currentPlayers + 1);
    }
  };

  let decPlayers = () => {
    if (currentPlayers > 2) {
      setPlayers((currentPlayers) => currentPlayers - 1);
    }
  };

  return (
    <div className="flex ">
      <button
        className="bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-1 px-3 md:px-6 rounded-l "
        onClick={decPlayers}
      >
        -
      </button>
      <span className="text-2xl md:text-4xl md:p-4 uppercase text-center w-[200px] md:w-[350px] ">
        {currentPlayers}
      </span>
      <button
        className=" bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-1 px-3 md:px-6 rounded-l"
        onClick={incPlayers}
      >
        +
      </button>
    </div>
  );
}

export default Players;
