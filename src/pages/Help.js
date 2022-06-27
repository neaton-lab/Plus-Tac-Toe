import React from 'react'
import { Link } from 'react-router-dom';

function Help() {
    return (
        <div className='w-screen h-screen bg-[#121212] text-white/90'>
            <Link to="/"> {/* Icon from Hero Icons Icon-Arrow-Circle-Left */}
                <button className='text-gray-700 text-center bg-gray-400 hover:bg-gray-500 px-4 py-4 m-5 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </button>
            </Link>
            <h1 className='text-9xl text-center font-bold'>How To Play</h1>
            <div>
                <h2 className='text-4xl text-center mx-14 my-20'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique arcu ac metus suscipit, eu lobortis urna laoreet.
                    Nullam malesuada eleifend ex. Proin imperdiet aliquet velit, id lacinia enim volutpat et. Phasellus at dolor sagittis,
                    euismod tellus at, porttitor tortor. Sed urna lacus, consequat eu lorem sed, gravida pellentesque justo.
                    Cras vulputate magna quis neque finibus vestibulum. Etiam non condimentum lectus. Curabitur et lorem ac justo ultricies feugiat efficitur sed metus.
                    Donec justo urna, semper ut mauris nec, dictum faucibus sem. In vel ipsum sagittis, blandit felis quis, ultrices augue. Praesent non sodales sapien,
                    et pellentesque elit. Morbi tellus nisl, vulputate at tortor nec, varius rutrum sem. Suspendisse euismod mi sit amet porttitor interdum. Nunc in luctus augue.
                    Quisque porttitor molestie justo dapibus convallis. Aenean bibendum mauris ac quam placerat interdum.
                </h2>
            </div>
        </div>
    )
}

export default Help