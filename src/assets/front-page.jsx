import React from "react";
import front from "./images/misc/front.JPG";

function Frontpage() {
  return (
    <div className="relative min-h-screen">
      {/* Background image absolutely positioned */}
      <img
        src={front}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        alt="Studio front"
        loading="lazy"
        aria-hidden="true"
      />
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
      {/* Main content above background */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          id="el-j0gpz2cs"
        >
          Where Art Meets Skin
        </h1>
        <p
          className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto"
          id="el-si3zxj5z"
        >
          Experience world-class tattoo artistry in a modern, clean studio
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          id="el-p1db5nyc"
        >
          <a
            href="#contact"
            className="bg-white text-neutral-900 px-8 py-4 font-semibold hover:bg-neutral-200 transition-colors"
            id="el-0vc3i4pw"
            target="_self"
          >
            Book Appointment
          </a>
          <a
            href="#artists"
            className="bg-white text-neutral-900 px-8 py-4 font-semibold hover:bg-neutral-200 transition-colors"
            id="el-vl6nj493"
            target="_self"
          >
            Meet Our Artists
          </a>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
