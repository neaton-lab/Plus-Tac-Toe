import React from 'react'
import { useState } from 'react';

function Board() {
    const [board, setBoard] = useState(1);
    const boards = ["Speed", "Standard", "Advanced"];

    const incBoard = () => {
        if (board < boards.length - 1) {
            setBoard(board + 1);
        }
        else {
            setBoard(0);
        }
    }

    const decBoard = () => {
        if (board > 0) {
            setBoard(board => board - 1);
        }
        else {
            setBoard(boards.length - 1);
        }
    }
    return (
        <div>
            <div className='flex'>
                <button className='bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-2 px-6 rounded-l' onClick={decBoard}>-</button>
                <span className='text-4xl p-4 uppercase text-center w-[350px]'>{boards[board]}</span>
                <button className=' bg-gray-400 hover:bg-gray-500 text-4xl text-gray-800 font-bold py-2 px-6 rounded-r' onClick={incBoard}>+</button>
            </div>
        </div>
    )
}

export default Board