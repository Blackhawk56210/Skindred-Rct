import React from "react";
import Alex from "./images/tatoo-img/Alex/alex profile.jpg";
import Gabe from "./images/tatoo-img/Gabe/Gabe profile image.jpg";
import Mitch from "./images/tatoo-img/Mitch/mitch profile.jpg";

function Artists() {
  return (
    <div>
      <section id="artists" className="py-20 px-4 bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Artists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-700 gap-8">
            <div
              className="bg-white rounded-lg overflow-hidden border border-neutral-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={Gabe}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Gabe"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Gabe
                </h3>
                <p className="text-neutral-600 mb-4">
                  Traditional &amp; Neo-Traditional
                </p>
                <p className="text-sm text-neutral-500">
                  30+ years specializing in bold lines and vibrant colors
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-lg overflow-hidden border border-neutral-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={Alex}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Alex"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Alex
                </h3>
                <p className="text-neutral-600 mb-4">
                  Blackwork &amp; Realism
                </p>
                <p className="text-sm text-neutral-500">
                  Award-winning artist focused on intricate details and shadows
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-lg overflow-hidden border border-neutral-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={Mitch}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Mitch"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Mitch
                </h3>
                <p className="text-neutral-600 mb-4">
                  Watercolor &amp; Fine Line
                </p>
                <p className="text-sm text-neutral-500">
                  Master of delicate designs and flowing watercolor techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artists;
