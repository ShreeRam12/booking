import React, { useState } from 'react';
import './Booking.css';
import Trip from './Trip';
import Filter from './Filter';
import Carousel from './Carousel';
import Slot from './Slots';
import FlightOptions from './FlightOptions';

const BookingPage = ({ onTripTypeChange }) => {
    const [tripType, setTripType] = useState('one-way');

    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
        onTripTypeChange(e.target.value);
    };

    return (
        <div className="p-4 flex flex-col space-y-4 navfont bg-gray-200">
            <div className="flex space-x-4 mt-1 container mx-auto">
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="one-way"
                        checked={tripType === 'one-way'}
                        onChange={handleTripTypeChange}
                        className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2">One Way Trip</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="round-trip"
                        checked={tripType === 'round-trip'}
                        onChange={handleTripTypeChange}
                        className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2">Round Trip</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="multiple-way"
                        checked={tripType === 'multiple-way'}
                        onChange={handleTripTypeChange}
                        className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2">Multiple Way</span>
                </label>
            </div>

            <Trip />

            <div className="p-4 sm:p-2 flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-full lg:w-1/4 xl:w-1/5 mx-auto">
                    <Filter />
                </div>
                <div className="w-full lg:w-3/4 xl:w-4/5 container mx-auto mt-6 lg:mt-0 space-y-6">
                    <div className="w-full">
                        <Carousel />
                    </div>
                    <div className="w-full">
                        <FlightOptions />
                    </div>
                    <div className="w-full">
                        <Slot />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingPage;
