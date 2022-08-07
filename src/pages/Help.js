import React from "react";
import { Link } from "react-router-dom";

function Help() {
  return (
    <body className="overflow-scroll">
      <Link to="/">
        {" "}
        {/* Icon from Hero Icons Icon-Arrow-Circle-Left */}
        <button className="text-gray-700 text-center bg-gray-400 hover:bg-gray-500 px-2 py-2 md:px-4 md:py-4 m-5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </button>
      </Link>
      <h1 className="text-5xl md:text-9xl text-center font-bold">
        How To Play
      </h1>
      <div>
        <ol className="text-3xl md:text-5xl mx-[75px] md:mx-[150px] lg:mx-[300px] my-20 list-decimal">
          <li className="my-10">The game will start with player 1</li>
          <li className="my-10">
            Each turn, every player will claim one, and only one tile
          </li>
          <li className="my-10">
            If a player claims every tile in a row, column, or diagonal of a
            region, they will win that region
          </li>
          <li className="my-10">
            If a region has no more empty tiles and no winner, then no player
            can win that region
          </li>
          <li className="my-10">
            Once a player has won enough regions that it is impossible for them
            to lose (i.e. if one player wins 5 regions in a 2 player game), that
            player has won the game.
          </li>
          <li className="my-10">
            Once a player has claimed a tile, the next player in the turn order
            goes. If the player was the last in the turn order, it goes back to
            the first player
          </li>
        </ol>
      </div>
    </body>
  );
}

export default Help;
