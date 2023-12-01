import React, { useState } from "react";

const Filter = () => {
  const [rangeValue, setRangeValue] = useState(10000);
  return (
    <div className="">
      <div className="">
        <div>
          <label
            htmlFor="priceRange"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            <h1 className="text-lg">Price Range</h1>
          </label>

          <input
            id="priceRange"
            type="range"
            min={0}
            max={10000}
            value={rangeValue}
            className="range range-xs"
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <div className="flex justify-between items-center mt-2">
            <p className="flex items-center justify-center h-8 w-16 border dark:text-white  dark:border-white">
              0
            </p>
            <p className="flex items-center justify-center h-8 w-16 border dark:text-white  dark:border-white">
              {rangeValue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
