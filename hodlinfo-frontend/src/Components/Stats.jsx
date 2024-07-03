import React from "react";

function Stats() {
  return (
    // Section container with padding and responsiveness classes
    <section className="py-2 sm:py-3 lg:py-6">
      {/* Container for content with max width and padding */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Text center aligned heading */}
        <div className="text-center">
          <h4 className="text-2xl font-medium text-gray-400">
            Best Price To Trade
          </h4>
        </div>

        {/* Grid layout with responsive columns */}
        <div className="grid grid-cols-1 gap-1  px-6 mt-3 sm:px-0 lg:mt-4 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3">
          {/* First grid item */}
          <div className="overflow-hidden   rounded-lg">
            <div class="px-4 py-6">
              {/* Content inside the grid item */}
              <div className="ml-4">
                {/* Large text for percentage */}
                <h4 className="text-4xl  font-bold text-center text-primary-color">
                  0.1 %
                </h4>
                {/* Subtitle text */}
                <p className="mt-1.5 text-lg font-medium text-center leading-tight text-gray-500">
                  5 Min
                </p>
              </div>
            </div>
          </div>

          {/* Second grid item */}
          <div className="overflow-hidden   rounded-lg">
            <div className="px-4 py-6">
              <h4 className="text-4xl font-bold text-center text-primary-color">
                0.9 %
              </h4>
              <p className="mt-1.5 text-lg text-center font-medium leading-tight text-gray-500">
                1 Hour
              </p>
            </div>
          </div>

          {/* Third grid item spanning two columns */}
          <div className="col-span-2   rounded-lg">
            <div className="px-4 py-6">
              <div className="ml-4">
                {/* Large text for monetary value */}
                <h4 className="text-6xl font-bold  text-center text-gray-50">
                  ₹ 27,56,110
                </h4>
              </div>
            </div>
          </div>

          {/* Fourth grid item */}
          <div className="overflow-hidden   rounded-lg">
            <div className="px-4 py-6">
              <div className="ml-4">
                <h4 className="text-4xl font-bold text-center text-primary-color">
                  2.73%
                </h4>
                <p className="mt-1.5 text-lg font-medium text-center leading-tight text-gray-500">
                  1 Day
                </p>
              </div>
            </div>
          </div>

          {/* Fifth grid item */}
          <div className="overflow-hidden   rounded-lg">
            <div className="px-4 py-6">
              <div className="ml-4">
                <h4 className="text-4xl font-bold text-center text-primary-color">
                  7.51%
                </h4>
                <p className="mt-1.5 text-lg font-medium text-center leading-tight text-gray-500">
                  7 Days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional informational text */}
        <p className="mt-1.5 text-md text-gray-400 text-center font-sm leading-tight text-gray-500">
          Average BTC/INR net price including Commission
        </p>
      </div>
    </section>
  );
}

export default Stats;
