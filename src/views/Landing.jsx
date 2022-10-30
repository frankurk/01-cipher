import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden items-center justify-center bg-stone-800">
      <h1 className="font-monofett lg:text-9xl text-7xl text-[#e2d784] pointer-events-none">
        CODEME
      </h1>
      <p className="text-gray-200 text-center lg:text-4xl md:text-4xl text-2xl font-jockey w-3/4 pt-10 pb-5">
        CODEME is a cipher based on the Caesar Code. Just choose a level and
        the ENCODE option, then you just have to send your friends the encoded message
        and the encoding level so they can decode it in CODEME.
      </p>
      <p className="text-gray-200 text-center lg:text-4xl md:text-4xl text-2xl font-jockey w-3/4 py-5">Try it out and put it to good use!</p>

      <Link to="/home">
        <button
          type="button"
          className="bg-[#e2d784] text-stone-800 font-monofett text-3xl rounded-2xl p-3 shadow-xl m-3"
        >
          START
        </button>
      </Link>
    </div>
  );
}

export default Landing;
