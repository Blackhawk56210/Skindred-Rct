import React from "react";
import placeholder1 from "./images/tatoo-img/Alex/alex back.jpg";
import placeholder2 from "./images/misc/walk-in.jpg";

function Walkin() {
  return (
    <div className="relative min-h-screen">
      {/* Background image absolutely positioned */}
      <img
        src="https://images.unsplash.com/photo-1617088079324-d2f13c851659?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bmVvbiUyMHRhdHRvbyUyMHNpZ25hZ2V8ZW58MXwwfHx8MTc1NTgxMTM0MXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        alt="Tattoo Piercing Neon Sign"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        loading="lazy"
        aria-hidden="true"
      />
      {/* Overlay for darkening the background if needed */}
      <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
      {/* Main content above background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Walk-In Wednesday
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Every Wednesday, no appointment needed. Get inked on the spot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-red-600 rounded-lg p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                This Wednesday Only
              </h3>
              <p className="text-white text-lg mb-4">
                Flash tattoos starting at $50
              </p>
              <div className="text-6xl font-bold text-white mb-4">
                50% OFF
              </div>
              <p className="text-white">
                All walk-in designs
              </p>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                What to expect:
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">
                    •
                  </span>
                  <span>Arrive between 11AM - 7PM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">
                    •
                  </span>
                  <span>Same-day ink guaranteed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">
                    •
                  </span>
                  <span>Bring valid ID</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={placeholder1}
              className="w-full rounded-lg shadow-2xl active-edit-image"
              loading="lazy"
              alt="Tattoo example"
            />
            <img
              src={placeholder2}
              alt="Neon signs in downtown"
              className="w-full rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            target="_self"
          >
            Book Your Walk-In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Walkin;
