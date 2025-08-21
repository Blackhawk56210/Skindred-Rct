import React from "react";

function Navbar() {
  return (
    <div>
      <header
        id="header"
        class="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800"
      >
        <nav class="container mx-auto px-4 py-4" id="el-5ynwkbr0">
          <div class="flex justify-between items-center" id="el-ga0hll6p">
            <div class="text-2xl font-bold text-neutral-100" id="el-2h3nhy61">
              INK STUDIO
            </div>
            <div class="hidden md:flex items-center space-x-8" id="el-mpk4svgc">
              <a
                href="#home"
                class="text-neutral-300 hover:text-white transition-colors"
                id="el-e1hvv3u6"
                target="_self"
              >
                Home
              </a>
              <a
                href="#home"
                class="text-neutral-300 hover:text-white transition-colors"
                id="el-x2oeha7d"
                target="_self"
              >
                Artists
              </a>
              <a
                href="#home"
                class="text-neutral-300 hover:text-white transition-colors"
                id="el-p0t5zfta"
                target="_self"
              >
                Walk-In Wednesday
              </a>
              <a
                href="#home"
                class="text-neutral-300 hover:text-white transition-colors"
                id="el-d3orhhjg"
                target="_self"
              >
                Shop
              </a>
              <a
                href="#home"
                class="text-neutral-300 hover:text-white transition-colors"
                id="el-fgd3ycpl"
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
                id="el-gq5gfq8z"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  id="el-t19enkq1"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          id="mobile-menu"
          class="hidden md:hidden bg-neutral-900 border-t border-neutral-800"
        >
          <div class="px-4 py-2 space-y-2" id="el-qmmenelm">
            <a
              href="#home"
              class="block py-2 text-neutral-300 hover:text-white transition-colors"
              id="el-m2ah0wa3"
              target="_self"
            >
              Home
            </a>
            <a
              href="#home"
              class="block py-2 text-neutral-300 hover:text-white transition-colors"
              id="el-itzz6gdm"
              target="_self"
            >
              Artists
            </a>
            <a
              href="#home"
              class="block py-2 text-neutral-300 hover:text-white transition-colors"
              id="el-itxanxd4"
              target="_self"
            >
              Walk-In Wednesday
            </a>
            <a
              href="#home"
              class="block py-2 text-neutral-300 hover:text-white transition-colors"
              id="el-1tzroan8"
              target="_self"
            >
              Shop
            </a>
            <a
              href="#home"
              class="block py-2 text-neutral-300 hover:text-white transition-colors"
              id="el-363tiklt"
              target="_self"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
