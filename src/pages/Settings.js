import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Settings() {
    const [darkChecked, setDarkChecked] = useState(true);
    const [debugChecked, setDebugChecked] = useState(false);

    let handleTheme = () => {
        if(darkChecked) {
            setDarkChecked(!darkChecked);
            alert('Dark mode off');
        }
        else {
            setDarkChecked(!darkChecked);
            alert('Dark mode on');
        }
    }

    let handleDebug = () => {
        if(debugChecked) {
            setDebugChecked(!debugChecked);
            alert('Debug mode off');
        }
        else {
            setDebugChecked(!debugChecked);
            alert('Debug mode on');
        }
    }

    return (
        <div className='w-screen h-screen bg-[#121212] text-white/90'>
            <header className='text-left'>
                <Link to="/"> {/* Icon from Hero Icons Icon-Arrow-Circle-Left */}
                    <button className='text-gray-700 text-center bg-gray-400 hover:bg-gray-500 px-4 py-4 m-5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                    </button>
                </Link>
            </header>
            
            <main class="flex flex-col justify-center mt-14">
                <label class="inline-flex justify-center items-center mb-20">
                    <input type="checkbox" checked={debugChecked} onChange={handleDebug} class="form-checkbox h-12 w-12" />
                    <span class="ml-4 text-7xl">Debug Mode</span>
                </label>
                <label class="inline-flex justify-center items-center">
                    <input type="checkbox" checked={darkChecked} onChange={handleTheme} class="form-checkbox h-12 w-12" />
                    <span class="ml-4 text-7xl">Dark Mode</span>
                </label>
                <div className='flex flex-col items-center mt-32'>
                    <h1 className='text-7xl uppercase'>Credits</h1>
                    <div className='flex justify-center flex-col my-10'>
                        <h2 className='text-5xl text-center'>Demir Altay</h2>
                        <h2 className='text-5xl text-center'>Noelle Eaton</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Settings