import React from "react";
import { useState } from "react";
import Skindred from "./images/misc/Skindred Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-blue-700/45 backdrop-blur-sm border-b border-neutral-800"
      style={{ height: "75px", minHeight: "75px" }}
    >
      <nav className="container mx-auto px-4 py-0 h-full" id="el-px7925kd" style={{ height: "100%" }}>
        <div className="flex justify-between items-center h-full" id="el-55vk1exg" style={{ height: "100%" }}>
          <div className="flex items-center space-x-3 h-full" style={{ height: "100%" }}>
            <img src={Skindred} className="h-full w-auto" style={{ maxHeight: "65px" }} />
            <div className="text-2xl font-bold text-neutral-100" id="el-1thl8lvq" style={{ fontSize: "20px" }}>
              SKINDRED SPIRITS
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 h-full" id="el-ck7avwbj" style={{ height: "100%" }}>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-5ejso3sj"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Home
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-vbqvzi59"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Artists
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-nuzlo6oi"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Walk-In Wednesday
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-98rpgmc6"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Shop
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-rhd4ezcv"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Contact
            </a>
          </div>
          <button id="mobile-menu-btn" 
          className="md:hidden text-neutral-300 h-full" 
          style={{ height: "100%" }}
          onClick={() => setMenuOpen((open) => !open)}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="el-8ihw5wqv"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                id="el-nvvkz2vc"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t px-4 pb-4 absolute left-0 right-0 top-18 z-40">
          <div className="flex flex-col gap-4 text-lg">
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-5ejso3sj"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Home
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-vbqvzi59"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Artists
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-nuzlo6oi"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Walk-In Wednesday
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-98rpgmc6"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Shop
            </a>
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors text-sm"
              id="el-rhd4ezcv"
              target="_self"
              style={{ lineHeight: "75px" }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
