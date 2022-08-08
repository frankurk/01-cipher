import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import OffsetContext from '../context/Context';
import '../index.css';

function Home() {
  const { offset, handleChange } = useContext(OffsetContext);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden items-center justify-center bg-stone-800">
      <div className="flex items-center justify-center flex-col bg-teal-900 lg:w-7/12 rounded-2xl shadow-xl lg:p-8 p-3">
        <h1 className="font-monofett lg:text-9xl text-8xl text-[#e2d784] pointer-events-none">
          CODEME
        </h1>
        <label className="font-jockey text-4xl text-stone-50 text-center">
          LEVEL
          <input
            className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-4 w-full"
            type="range"
            min="1"
            max="10"
            value={offset}
            onChange={handleChange}
          />
        </label>
        <output className="font-jockey text-4xl text-stone-50">{offset}</output>
        <Link to="/encode">
          <button
            type="button"
            className="bg-[#e2d784] text-stone-800 font-monofett text-3xl rounded-2xl p-3 shadow-xl m-3"
          >
            ENCODE
          </button>
        </Link>
        <Link to="/decode">
          <button
            type="button"
            className="bg-[#e2d784] text-stone-800 font-monofett text-3xl rounded-2xl p-3 shadow-xl m-3"
          >
            DECODE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
