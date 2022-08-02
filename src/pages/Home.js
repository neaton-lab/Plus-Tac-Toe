import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Board from "../components/Board";
import Players from "../components/Players";

function Home() {
  const [currentBoard, setBoard] = useState(1);

  const incBoard = () => {
    setBoard(currentBoard + 1);
    console.log(currentBoard);
  };

  const decBoard = () => {
    setBoard(currentBoard - 1);
    console.log(currentBoard);
  };

  const [currentPlayers, setCurrentPlayers] = useState(2);

  return (
    <body>
      {" "}
      {/* set width and height to screen size. set background color to black. set text color to white */}
      {/* title */}
      <div className="flex justify-center text-6xl font-bold md:text-9xl">
        <h1>Plus Tac Toe</h1>
      </div>
      {/* board size option */}
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-4xl text-center font-bold mt-[80px] mb-5 md:text-6xl md:mt-[200px]">
            Size
          </h1>
          <Board
            incBoard={() => incBoard()}
            decBoard={() => decBoard()}
            currentBoard={currentBoard}
          />{" "}
          {/* Pulls code from Board File under ./components/Board */}
        </div>

        {/* num players option */}
        <div>
          <h1 className="text-4xl text-center font-bold mt-[80px] mb-5 md:text-6xl md:mt-[200px]">
            Players
          </h1>
          <Players
            currentPlayers={currentPlayers}
            setPlayers={setCurrentPlayers}
          />{" "}
          {/* Pulls code from Players File under ./components/Players */}
        </div>

        {/* start, settings, and help button. button logos imported from heroicons as svg*/}
        <div className="flex w-screen justify-center">
          <Link
            to={{
              pathname: "/game",
              state: {
                currentBoard: currentBoard,
                currentPlayers: currentPlayers,
              },
            }}
          >
            {" "}
            {/* link to game page */}
            <button
              className="absolute -translate-x-1/2 translate-y-1/2 md:bottom-[100px] md:w-[300px] bg-gray-400 hover:bg-gray-500 text-gray-800 text-3xl md:text-6xl font-bold mt-[60px] 
                md:mt-[100px] py-2 px-10 md:px-20 rounded-full"
            >
              Start
            </button>
          </Link>
          <div className="flex flex-row md:flex-col absolute bottom-0 md:absolute md:w-screen md:items-end">
            <Link to="/settings">
              {" "}
              {/* link to settings page. Icon from Hero Icons Icon-Cog  */}
              <button className="absolute -translate-x-2 md:-translate-x-2 bottom-0 md:bottom-[150px] text-center right-0 text-gray-700 bg-gray-400 hover:bg-gray-500 px-2 py-2 md:px-3 md:py-3 m-5 mr-0 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </Link>

            <Link to="/help">
              {" "}
              {/* link to help page. Icon from Hero Icons Icon-Question-Mark-Circle */}
              <button className="absolute translate-x-12 md:-translate-x-2 bottom-0 md:bottom-[50px] text-center right-0 text-gray-700  bg-gray-400 hover:bg-gray-500 px-2 py-2 md:px-3 md:py-3 m-5 mr-0 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
