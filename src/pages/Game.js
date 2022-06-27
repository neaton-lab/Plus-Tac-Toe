import React from 'react'
import { Link } from 'react-router-dom'
import RenderGame from '../components/RenderGame'

function Game() {
    return (
        <div className='w-screen h-screen bg-[#121212] text-white/90'>
            <Link to="/">
                {/* Icon from Hero Icons Icon-Arrow-Circle-Left */}
                <button className='text-gray-700 text-center bg-gray-400 hover:bg-gray-500 px-4 py-4 m-5 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </button>
            </Link>
            <div className='flex left-0 flex-row'>
                <div className='w-[400px]'>
                    <h1 className='text-center text-5xl mb-12'>History</h1>
                    <div className='h-[900px] text-center text-3xl'>
                        {/* History goes here */}
                    </div>
                </div>
                <div className='absolute text-center w-full justify-center'>
                    <RenderGame />
                </div>
            </div>
            <footer>
                <div className='grid grid-cols-4 text-center text-4xl'>
                    <h1 className='text-[#d12360]'>Player 1: X</h1>
                    <h1 className='text-[#2b76d4]'>Player 2: O</h1>
                    <h1 className='text-[#f5f431]'>Player 3: ✓</h1>
                    <h1 className='text-[#ff8100]'>Player 4: #</h1>
                </div>
            </footer>
        </div>
    )
}

export default Game