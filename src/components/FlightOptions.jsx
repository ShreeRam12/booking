import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCircleDollarToSlot, faBolt, faCalendar } from '@fortawesome/free-solid-svg-icons';
const FlightOptions = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg space-y-6">
            {/* Options Row */}
            <div className="flex justify-between">
                <div className="bg-blue-950 flex justify-center items-center gap-3 p-2 rounded-lg shadow-lg w-52">
                    <div className='flex justify-center items-center'>
                        <span className="">
                            <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#f4f5f6", }} />
                        </span>
                    </div>
                    <div>
                        <div className='text-white'>
                            <div className="">Recommended</div>
                            <div className='text-xs'>$500 - 10h 20m </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-950 flex justify-center items-center gap-3 p-2 rounded-lg shadow-lg w-52">
                    <div className='flex justify-center items-center'>
                        <span className="">
                            <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ color: "#f8f9fc", }} />
                        </span>
                    </div>
                    <div>
                        <div className='text-white'>
                            <div className="">Cheapest</div>
                            <div className='text-xs'>$500 - 10h 20m </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-950 flex justify-center items-center gap-3 p-2 rounded-lg shadow-lg w-52">
                    <div className='flex justify-center items-center'>
                        <span className="">
                        <FontAwesomeIcon icon={faBolt} style={{color: "#f7f9fd",}} />
                        </span>
                    </div>
                    <div>
                        <div className='text-white'>
                            <div className="">Fastest</div>
                            <div className='text-xs'>$500 - 10h 20m </div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-700 flex justify-center items-center gap-3 p-2 rounded-lg shadow-lg w-52">
                    <div className='flex justify-center items-center'>
                        <span className="">
                        <FontAwesomeIcon icon={faCalendar} style={{color: "#f7f9fd",}} />
                        </span>
                    </div>
                    <div>
                        <div className='text-white'>
                            <div className="">Price Calender</div>
                            <div className='text-xs'>$500 - 10h 20m </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightOptions;
