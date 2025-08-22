import React from "react";
import Alex from "./images/tatoo-img/Alex/alex profile.jpg";
import Gabe from "./images/tatoo-img/Gabe/Gabe profile image.jpg";
import Mitch from "./images/tatoo-img/Mitch/mitch profile.jpg";

function Artists() {
  return (
    <div>
      <section id="artists" class="py-20 px-4 bg-neutral-50">
        <div class="max-w-7xl mx-auto" id="el-ajx4200e">
          <h2
            class="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900"
            id="el-pvzg9x01"
          >
            Artists
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="el-22zpte1s">
            <div
              class="bg-white rounded-lg overflow-hidden border border-neutral-200"
              id="el-vji0gl2f"
            >
              <img
                src={Gabe}
                className="w-full h-80 object-cover active-edit-image"
                id="el-v2bx4vzv"
              />
              <div class="p-6" id="el-486ho8mx">
                <h3 class="text-2xl font-bold mb-2" id="el-gok8ll5l">
                  Alex Rivera
                </h3>
                <p class="text-neutral-600 mb-4" id="el-xoe9wf3o">
                  Traditional &amp; Neo-Traditional
                </p>
                <p class="text-sm text-neutral-500" id="el-7v8dqu8c">
                  10+ years specializing in bold lines and vibrant colors
                </p>
              </div>
            </div>
            <div
              class="bg-white rounded-lg overflow-hidden border border-neutral-200"
              id="el-wh8ryri9"
            >
              <img
                src={Alex}
                className="w-full h-80 object-cover"
                id="el-zu0aa11x"
              />
              <div class="p-6" id="el-uuraz9sp">
                <h3 class="text-2xl font-bold mb-2" id="el-h78nfp5b">
                  Maya Chen
                </h3>
                <p class="text-neutral-600 mb-4" id="el-zabnc8c8">
                  Blackwork &amp; Realism
                </p>
                <p class="text-sm text-neutral-500" id="el-dl2ign6q">
                  Award-winning artist focused on intricate details and shadows
                </p>
              </div>
            </div>
            <div
              class="bg-white rounded-lg overflow-hidden border border-neutral-200"
              id="el-s8d7x105"
            >
              <img
                src={Mitch}
                className="w-full h-80 object-cover"
                id="el-8xn0v9ah"
              />
              <div class="p-6" id="el-l8te11p8">
                <h3 class="text-2xl font-bold mb-2" id="el-co48b4z8">
                  Jordan Lee
                </h3>
                <p class="text-neutral-600 mb-4" id="el-yjjjysry">
                  Watercolor &amp; Fine Line
                </p>
                <p class="text-sm text-neutral-500" id="el-80kujii5">
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
