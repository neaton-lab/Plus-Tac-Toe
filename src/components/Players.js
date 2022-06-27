import React from 'react'
import { useState } from 'react';

function Players() {
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
        <div className='flex '>
            <button className='bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-1 px-3 md:px-6 rounded-l ' onClick={decPlayers}>-</button>
            <span className='text-2xl md:text-4xl md:p-4 uppercase text-center w-[200px] md:w-[350px] '>{players}</span>
            <button className=' bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-1 px-3 md:px-6 rounded-l' onClick={incPlayers}>+</button>
        </div>
    )
}

export default Players