import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Board from '../components/Board';
import Players from '../components/Players';

function Home() {
  const [players, setPlayers] = useState(2);

  let incPlayers = () => {
    if (players < 4) {
      setPlayers(players => players + 1);
    }
  }

  let decPlayers = () => {
    if (players > 2) {
      setPlayers(players => players - 1);
    }
  }



  return (
    <div className='w-screen h-screen bg-[#121212] text-white/90'> {/* set width and height to screen size. set background color to black. set text color to white */}

      {/* Title */}
      <div className='flex justify-center text-6xl font-bold md:text-9xl text-white'>
        <h1>Plus Tac Toe</h1>
      </div>

      {/* board size option */}
      <div className="flex flex-col items-center">
        <div>
          <h1 className='text-4xl text-center font-bold mt-[80px] mb-5 md:text-6xl md:mt-[200px]'>Size</h1>
            <Board /> {/* Pulls code from Board File under ./components/Board */}
        </div>

        {/* num players option */}
        <div>
          <h1 className='text-4xl text-center font-bold mt-[80px] mb-5 md:text-6xl md:mt-[200px]'>Players</h1>
            <Players /> {/* Pulls code from Players File under ./components/Players */}
        </div>

        {/* start, settings, and help button. button logos imported from heroicons as svg*/}
        <div className='flex w-screen justify-center'>

          <Link to='/game'> {/* link to game page */}
            <button className='flex w-[300px] bg-gray-400 hover:bg-gray-500 text-gray-800  text-3xl md:text-6xl font-bold mt-[100px] 
                md:mt-[150px] py-2 px-10 md:px-20 rounded-full'>
              Start
            </button>
          </Link>
          <div className='flex flex-col absolute w-screen items-end'>

            <Link to="/settings"> {/* link to settings page */}
              <button className='text-gray-700 text-center bg-gray-400 hover:bg-gray-500 px-3 py-3 m-5 mr-20 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </Link>

            <Link to="/help"> {/* link to help page */}
              <button className='text-gray-700 text-center bg-gray-400 hover:bg-gray-500 px-3 py-3 m-5 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home