import React from "react";

function Location() {
  return (
    <div>
      {/* add google map iframe from stack overflow 
        https://stackoverflow.com/questions/66181746/how-to-embed-an-exact-place-on-google-maps-in-reactjs
        */}
      <div class="bg-neutral-800 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-4">Visit Us</h3>
        <div class="space-y-4 text-neutral-300">
          <div>
            <p class="font-semibold text-white">Studio Address</p>
            <p>
              123 Tattoo Alley
              <br />
              New York, NY 10001
            </p>
          </div>
          <div>
            <p class="font-semibold text-white">Hours</p>
            <p>
              Mon-Sat: 11AM - 8PM
              <br />
              Sun: 12PM - 6PM
            </p>
          </div>
          <div>
            <p class="font-semibold text-white">Phone</p>
            <p>(555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
