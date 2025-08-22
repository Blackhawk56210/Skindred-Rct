import React from "react";
import Skindred from "./images/misc/Skindred Logo.png";

function Navbar() {
  return (
    <header
      id="header"
      class="fixed top-0 left-0 right-0 z-50 bg-blue-700/45 backdrop-blur-sm border-b border-neutral-800"
    >
      <nav class="container mx-auto px-4 py-4" id="el-px7925kd">
        <div class="flex justify-between items-center" id="el-55vk1exg">
          <div class="flex items-center space-x-3">
            <img src={Skindred} className="h-31 w-21" />
            <div class="text-2xl font-bold text-neutral-100" id="el-1thl8lvq">
              SKINDRED SPIRITS
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-8" id="el-ck7avwbj">
            <a
              href="#home"
              class="text-neutral-300 hover:text-white transition-colors"
              id="el-5ejso3sj"
              target="_self"
            >
              Home
            </a>
            <a
              href="#home"
              class="text-neutral-300 hover:text-white transition-colors"
              id="el-vbqvzi59"
              target="_self"
            >
              Artists
            </a>
            <a
              href="#home"
              class="text-neutral-300 hover:text-white transition-colors"
              id="el-nuzlo6oi"
              target="_self"
            >
              Walk-In Wednesday
            </a>
            <a
              href="#home"
              class="text-neutral-300 hover:text-white transition-colors"
              id="el-98rpgmc6"
              target="_self"
            >
              Shop
            </a>
            <a
              href="#home"
              class="text-neutral-300 hover:text-white transition-colors"
              id="el-rhd4ezcv"
              target="_self"
            >
              Contact
            </a>
          </div>
          <button id="mobile-menu-btn" class="md:hidden text-neutral-300">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="el-8ihw5wqv"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
                id="el-nvvkz2vc"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        class="hidden md:hidden bg-neutral-900 border-t border-neutral-800"
      >
        <div class="px-4 py-2 space-y-2" id="el-coic96e3">
          <a
            href="#home"
            class="block py-2 text-neutral-300 hover:text-white transition-colors"
            id="el-oux5zfpl"
            target="_self"
          >
            Home
          </a>
          <a
            href="#home"
            class="block py-2 text-neutral-300 hover:text-white transition-colors"
            id="el-30w0rl8e"
            target="_self"
          >
            Artists
          </a>
          <a
            href="#home"
            class="block py-2 text-neutral-300 hover:text-white transition-colors"
            id="el-q1jduk2t"
            target="_self"
          >
            Walk-In Wednesday
          </a>
          <a
            href="#home"
            class="block py-2 text-neutral-300 hover:text-white transition-colors"
            id="el-r54x6zo4"
            target="_self"
          >
            Shop
          </a>
          <a
            href="#home"
            class="block py-2 text-neutral-300 hover:text-white transition-colors"
            id="el-0pitlsgi"
            target="_self"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
