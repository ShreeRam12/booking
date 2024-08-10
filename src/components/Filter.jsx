import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaPlaneDeparture, FaPlaneArrival, FaSuitcase, FaSuitcaseRolling } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudMoon, faSun} from '@fortawesome/free-solid-svg-icons';
const Filter = () => {
  // State to manage selected checkboxes
  const [selectedFilters, setSelectedFilters] = useState({
    airlines: [],
    stopovers: [],
    departureTime: [],
  });

  // State to manage pricing range
  const [priceRange, setPriceRange] = useState([1000, 5000]);

  // Handle price range change
  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const [selectedStopovers, setSelectedStopovers] = useState('');

  const handleStopoverChange = (value) => {
    setSelectedStopovers(value);
  };


  const [cabinBaggage, setCabinBaggage] = useState(0);
  const [checkedBaggage, setCheckedBaggage] = useState(0);

  const handleBaggageChange = (type, operation) => {
    if (type === 'cabin') {
      setCabinBaggage((prev) => (operation === 'increase' ? prev + 1 : prev > 0 ? prev - 1 : 0));
    } else if (type === 'checked') {
      setCheckedBaggage((prev) => (operation === 'increase' ? prev + 1 : prev > 0 ? prev - 1 : 0));
    }
  };
  // Handle checkbox changes
  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const categoryFilters = prevFilters[category];
      if (categoryFilters.includes(value)) {
        // If the value is already selected, remove it
        return {
          ...prevFilters,
          [category]: categoryFilters.filter((item) => item !== value),
        };
      } else {
        // Otherwise, add the value to the selected filters
        return {
          ...prevFilters,
          [category]: [...categoryFilters, value],
        };
      }
    });
  };

  return (
    <div className="p-4 border rounded shadow-lg max-w-sm bg-white navfont container mx-auto">
      <h2 className="text-xl font-semibold mb-4">Filter Flights</h2>

      {/* Airlines Filter */}
      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2"> Prefered Airlines</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            value="ABC Air Technologies"
            onChange={() => handleCheckboxChange('airlines', 'ABC Air Technologies')}
          />
          <span>ABC Air Technologies</span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            value="Emirates Airlines"
            onChange={() => handleCheckboxChange('airlines', 'Emirates Airlines')}
          />
          <span>Emirates Airlines</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            value="Qatar Airlines"
            onChange={() => handleCheckboxChange('airlines', 'Qatar Airlines')}
          />
          <span>Qatar Airlines</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            value="Ethiad Airlines"
            onChange={() => handleCheckboxChange('airlines', 'Ethiad Airlines')}
          />
          <span>Ethiad Airlines</span>
        </label>
      </div>

      {/* Stopovers Filter */}
      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2">Stopovers</h3>
        <div className="flex space-x-4 mb-4">
          <div
            className={`cursor-pointer px-4 py-2 border rounded ${selectedStopovers === 'Non-stop' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleStopoverChange('Non-stop')}
          >
            Non-stop
          </div>

          <div
            className={`cursor-pointer px-4 py-2 border rounded ${selectedStopovers === '1 Stop' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleStopoverChange('1 Stop')}
          >
            1 Stop
          </div>

          <div
            className={`cursor-pointer px-4 py-2 border rounded ${selectedStopovers === '2+ Stops' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleStopoverChange('2+ Stops')}
          >
            2+ Stops
          </div>
        </div>
      </div>


      {/* Price Range Filter */}
      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2">Price Range</h3>
        <Slider
          range
          min={0}
          max={10000}
          value={priceRange}
          onChange={handlePriceRangeChange}
          trackStyle={[{ backgroundColor: 'blue' }]}
          handleStyle={[
            { borderColor: 'blue' },
            { borderColor: 'blue' },
          ]}
          railStyle={{ backgroundColor: 'gray' }}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
      {/* Price Range Filter */}
      <div className="mb-4">
        <div className='flex justify-between'>
          <div>
            <h3 className="font-medium mb-2">Onward Duration</h3>
          </div>
          <div className='navfont w-20 bg-blue-300 flex justify-center items-center'>
            <div className='text-blue-700'>Reset</div>
          </div>
        </div>

        <Slider
          range
          min={0}
          max={10000}
          value={priceRange}
          onChange={handlePriceRangeChange}
          trackStyle={[{ backgroundColor: 'blue' }]}
          handleStyle={[
            { borderColor: 'blue' },
            { borderColor: 'blue' },
          ]}
          railStyle={{ backgroundColor: 'gray' }}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
      {/* Departure and Arrival Time Section */}
      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2">Departure Time</h3>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-200 p-2 rounded-md text-center ">
            <div>
              <FontAwesomeIcon icon={faCloudSun} />
            </div>
            <div>
              <div>12PM-6PM</div>
            </div>
          </div>
          <div className="bg-blue-200 p-2 rounded-md text-center ">
            <div>
              <FontAwesomeIcon icon={faCloudMoon} />
            </div>
            <div>
              <div>After 6PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2">Arrival</h3>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-200 p-2 rounded-md text-center ">
            <div>
              <FontAwesomeIcon icon={faCloudSun} />
            </div>
            <div>
              <div>12PM-6PM</div>
            </div>
          </div>
          <div className="bg-blue-200 p-2 rounded-md text-center ">
            <div>
            <FontAwesomeIcon icon={faSun} />
            </div>
            <div>
              <div>After 6PM</div>
            </div>
          </div>
          <div className="bg-blue-200 p-2 rounded-md text-center ">
            <div>
              <FontAwesomeIcon icon={faCloudSun} />
            </div>
            <div>
              <div>12PM-6PM</div>
            </div>
          </div>
          <div className="bg-blue-200 p-2 rounded-md text-center ">
            <div>
              <FontAwesomeIcon icon={faCloudMoon} />
            </div>
            <div>
              <div>After 6PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bags Section */}
      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2">Bags</h3>
        <div className="flex flex-col space-y-2">
          {/* Cabin Baggage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaSuitcase />
              <span>Cabin Baggage</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 border rounded bg-gray-200"
                onClick={() => handleBaggageChange('cabin', 'decrease')}
              >
                -
              </button>
              <span>{cabinBaggage}</span>
              <button
                className="px-2 py-1 border rounded bg-gray-200"
                onClick={() => handleBaggageChange('cabin', 'increase')}
              >
                +
              </button>
            </div>
          </div>

          {/* Checked Baggage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaSuitcaseRolling />
              <span>Checked Baggage</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 border rounded bg-gray-200"
                onClick={() => handleBaggageChange('checked', 'decrease')}
              >
                -
              </button>
              <span>{checkedBaggage}</span>
              <button
                className="px-2 py-1 border rounded bg-gray-200"
                onClick={() => handleBaggageChange('checked', 'increase')}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2">Connections</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            value="ABC Air Technologies"
            onChange={() => handleCheckboxChange('airlines', 'ABC Air Technologies')}
          />
          <span>Self-transfer to different station/airport</span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            value="Emirates Airlines"
            onChange={() => handleCheckboxChange('airlines', 'Emirates Airlines')}
          />
          <span>Allow return from a different station/airport</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            value="Qatar Airlines"
            onChange={() => handleCheckboxChange('airlines', 'Qatar Airlines')}
          />
          <span>Allow return to a different station/airport</span>
        </label>
      </div>
      <div className="mb-4 mt-10">
        <div className='flex gap-5'>
          <div>
            <h3 className="font-medium mb-2">Duration</h3>
          </div>
          <div className='navfont flex justify-center items-center'>
            <div className='text-blue-500'>Any</div>
          </div>
        </div>

        <Slider
          range
          min={0}
          max={10000}
          value={priceRange}
          onChange={handlePriceRangeChange}
          trackStyle={[{ backgroundColor: 'blue' }]}
          handleStyle={[
            { borderColor: 'blue' },
            { borderColor: 'blue' },
          ]}
          railStyle={{ backgroundColor: 'gray' }}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
      <div className="mb-4">
        <div className='flex gap-3'>
          <div>
            <h3 className="font-medium mb-2">Stopover</h3>
          </div>
          <div className='navfont flex justify-center items-center'>
            <div className='text-blue-700'>2-25 hours</div>
          </div>
        </div>

        <Slider
          range
          min={0}
          max={10000}
          value={priceRange}
          onChange={handlePriceRangeChange}
          trackStyle={[{ backgroundColor: 'blue' }]}
          handleStyle={[
            { borderColor: 'blue' },
            { borderColor: 'blue' },
          ]}
          railStyle={{ backgroundColor: 'gray' }}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      {/* Stopovers Filter */}
      <div className="mb-4 mt-10">
        <h3 className="font-medium mb-2">Stopovers</h3>
        <div className="flex space-x-4 mb-4">
          <div
            className="cursor-pointer px-4 py-2 border rounded text-gray-700 bg-gray-200"
            onClick={() => handleStopoverChange('Non-stop')}
          >
            Non-stop
          </div>
          <div
            className="cursor-pointer px-4 py-2 border rounded text-gray-700 bg-gray-200"
            onClick={() => handleStopoverChange('2+ Stops')}
          >
            Return
          </div>
        </div>
        <div className='navfont flex gap-3'>
          <div className="bg-blue-100 w-10 p-2 rounded-full flex justify-center items-center">
            <div className="text-gray-500">M</div>
          </div>
          <div className="bg-blue-100 w-10 p-2 rounded-full flex justify-center items-center">
            <div className="text-gray-500">T</div>
          </div>
          <div className="bg-blue-100 w-10 p-2 rounded-full flex justify-center items-center">
            <div className="text-gray-500">W</div>
          </div>
          <div className="bg-blue-100 w-10 p-2 rounded-full flex justify-center items-center">
            <div className="text-gray-500">T</div>
          </div>
          <div className="bg-blue-100 w-10 p-2 rounded-full flex justify-center items-center">
            <div className="text-gray-500">F</div>
          </div>
          <div className="bg-blue-100 w-10 p-2 rounded-full flex justify-center items-center">
            <div className="text-gray-500">S</div>
          </div>
          <div className="bg-blue-100 w-10 p-2 rounded-full flex justify-center items-center">
            <div className="text-gray-500">S</div>
          </div>
        </div>
        <div className='mt-10'>Exclude Countries</div>
      </div>

    </div>
  );
};

export default Filter;
