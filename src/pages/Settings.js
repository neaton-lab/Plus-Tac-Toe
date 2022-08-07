import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChangeTheme from "../components/Theme";

function Settings() {
  const [debugChecked, setDebugChecked] = useState(false);

  let handleDebug = () => {
    if (debugChecked) {
      setDebugChecked(!debugChecked);
      alert("Debug mode off");
    } else {
      setDebugChecked(!debugChecked);
      alert("Debug mode on");
    }
  };

  return (
    <body className="w-full h-full md:h-screen">
      <header className="text-left">
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
      </header>

      <main className="flex flex-col justify-center mt-14">
        <label className="inline-flex justify-center items-center mb-20">
          <input
            type="checkbox"
            checked={debugChecked}
            onChange={handleDebug}
            className="form-checkbox w-9 h-9 md:h-12 md:w-12"
          />
          <span className="ml-4 text-4xl md:text-7xl">Debug Mode</span>
        </label>
        <div className="inline-flex justify-center items-center mb-20">
          <ChangeTheme />
        </div>
        <div className="flex flex-col items-center md:mt-32">
          <h1 className="text-5xl md:text-7xl uppercase">Credits</h1>
          <div className="flex justify-center flex-col my-10 text-4xl md:text-5xl">
            <h2 className="text-center">Demir Altay</h2>
            <h2 className="text-center">Noelle Eaton</h2>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Settings;
