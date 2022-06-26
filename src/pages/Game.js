import React from 'react'
import { Link } from 'react-router-dom'

function Game() {
    return (
        <div className='w-screen h-screen bg-[#121212] text-white/90'>
            <Link to="/">
                <button className='text-gray-700 text-center bg-gray-400 hover:bg-gray-500 px-4 py-4 m-5 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </button>
            </Link>
            <h1 className='text-9xl text-center font-bold'>Game</h1>
        </div>
    )
}

export default Game