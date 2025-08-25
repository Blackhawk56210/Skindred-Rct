import React from "react";

function Location() {
  return (
    <div className="bg-neutral-800 p-8 flex flex-col items-center text-center" data-editable="true">
      <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
      <div className="space-y-4 text-neutral-300">
        <div>
          <p className="font-semibold text-white">Shop Address</p>
          <p>
            488 US-90<br />
            DeFuniak Springs, FL 32433
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Hours</p>
          <p>
            Tues-Fri: 10am-7pm<br />
            Sat: 11am-7pm<br />
            Sun-Mon: CLOSED
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Phone</p>
          <p>(850)-951-0609</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
