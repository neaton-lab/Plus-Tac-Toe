import React from 'react'
import { useState } from 'react';

function Players() {
    const [players, setPlayers] = useState(2);

    let incPlayers = () => {
        if (players < 4) {
            setPlayers(players => players + 1);
        }
        else {
            setPlayers(2);
        }
    }

    let decPlayers = () => {
        if (players > 2) {
            setPlayers(players => players - 1);
        }
        else {
            setPlayers(4);
        }
    }
    return (
        <div>
            <div className='flex'>
                <button className='bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-2 px-6 rounded-l' onClick={decPlayers}>-</button>
                <span className='text-4xl p-4 text-center w-[350px]'>{players}</span>
                <button className=' bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-2 px-6 rounded-r' onClick={incPlayers}>+</button>
            </div>
        </div>
    )
}

export default Players