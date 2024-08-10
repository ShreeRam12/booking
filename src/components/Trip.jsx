import React, { useState } from 'react';

const Trip = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [tripClass, setTripClass] = useState('');
    const [passenger, setPassenger] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ from, to, departureTime, returnDate, tripClass, passenger });
    };

    return (
        <div className="p-4 flex flex-col space-y-4 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-between container mx-auto">
                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700">From</label>
                        <select
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="form-select mt-1 block p-2 border border-gray-300 rounded-md "
                        >
                            <option  className='selected visibility hidden' value="">Select Departure</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700">To</label>
                        <select
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            className="form-select mt-1 block p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select Destination</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Kolkata">Kolkata</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Departure Time</label>
                        <input
                            type="datetime-local"
                            value={departureTime}
                            onChange={(e) => setDepartureTime(e.target.value)}
                            className="form-input mt-1 block p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Return Date</label>
                        <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="form-input mt-1 block p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex flex-col space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Class</label>
                            <select
                                value={tripClass}
                                onChange={(e) => setTripClass(e.target.value)}
                                className="form-select mt-1 block p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select Class</option>
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First Class">First Class</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Passenger</label>
                            <input
                                type="number"
                                value={passenger}
                                onChange={(e) => setPassenger(e.target.value)}
                                min="1"
                                className="form-input mt-1 block p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Find Flight
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Trip;
