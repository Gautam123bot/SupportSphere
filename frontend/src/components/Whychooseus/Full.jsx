import React from "react";
import Whychooseus from "./Whychooseus.jsx";
import { Link } from "react-router-dom";

function Full() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="contentt text-center">
          <p className="text-lg text-gray-600">FEATURES LIST</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-cyan-600">Only platform</span> that you will ever need
          </h1>
          <p className="text-lg text-gray-800 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore temporibus harum ex distinctio, minima necessitatibus. Autem porro labore eum fugiat.
          </p>
          <Link to="/register">
            <button className="bg-black px-6 py-3 rounded-full text-white font-bold shadow-lg mt-6 hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">

                Get registered with us
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-12">
          <Whychooseus />
          <Whychooseus />
          <Whychooseus />
          <Whychooseus />
          <Whychooseus />
          <Whychooseus />
        </div>
      </div>
    </div>
  );
}

export default Full;
