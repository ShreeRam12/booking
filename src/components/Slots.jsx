import React from 'react';

const flights = [
  {
    id: 1,
    name: 'Indigo',
    source: 'Chennai',
    destination: 'Delhi',
    departure: '10:00 AM',
    arrival: '12:00 PM',
    perks: ['Free Wi-Fi', 'Extra Legroom', 'In-flight Entertainment'],
    benefits: 'Priority Boarding',
    logo: '✈️', // Placeholder for an icon
  },
  {
    id: 2,
    name: 'Qatar',
    source: 'Mumbai',
    destination: 'Dubai',
    departure: '2:00 PM',
    arrival: '6:00 PM',
    perks: ['Complimentary Meals', 'Extra Legroom', 'Window Seats'],
    benefits: 'Lounge Access',
    logo: '🌍', // Placeholder for an icon
  },
  {
    id: 3,
    name: 'Emirates',
    source: 'Mumbai',
    destination: 'Abhu Dahabi',
    departure: '12:00 PM',
    arrival: '6:00 PM',
    perks: ['Complimentary Meals', 'Extra Legroom', 'Window Seats'],
    benefits: 'Lounge Access',
    logo: '🌍', // Placeholder for an icon
  },
  {
    id: 4,
    name: 'Indigo',
    source: 'Mumbai',
    destination: 'Dubai',
    departure: '2:00 PM',
    arrival: '6:00 PM',
    perks: ['Complimentary Meals', 'Extra Legroom', 'Window Seats'],
    benefits: 'Lounge Access',
    logo: '🌍', // Placeholder for an icon
  },
  {
    id: 5,
    name: 'Spicejet',
    source: 'Chennai',
    destination: 'Thoothukudi',
    departure: '8:30 AM',
    arrival: '10:30 AM',
    perks: ['Complimentary Meals', 'Extra Legroom', 'Window Seats'],
    benefits: 'Lounge Access',
    logo: '🌍', // Placeholder for an icon
  },
  {
    id: 6,
    name: 'Vistara',
    source: 'Mumbai',
    destination: 'Mauritius',
    departure: '2:00 PM',
    arrival: '7:30 PM',
    perks: ['Complimentary Meals', 'Extra Legroom', 'Window Seats'],
    benefits: 'Lounge Access',
    logo: '🌍', // Placeholder for an icon
  },
  // Add more flights here...
];

const Slot = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 text-lg font-bold text-gray-700">
              <span>{flight.logo}</span> {/* Flight Logo/Icon */}
              <span>{flight.name}</span>
            </div>
            <div className="text-sm text-gray-500">
              {flight.source} - {flight.destination}
            </div>
            <div className="text-lg font-bold text-gray-700">
              {flight.departure} - {flight.arrival}
            </div>
            <div className="text-sm text-gray-500">Departure - Arrival</div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 items-center">
            <ul className="text-sm text-gray-700 space-y-2">
              {flight.perks.map((perk, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
            <div className="text-sm text-blue-500 font-semibold mt-4 md:mt-0">
              {flight.benefits}
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slot;
