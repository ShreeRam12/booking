import React from 'react';
import './Booking.css';

const Footer = () => {
    return (
        <div className='bg-blue-900'>
            <footer className=" text-white py-8 navfont">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <div className="mb-6 lg:mb-0">
                            <p className="text-sm">
                                Subscribe to our newsletter for regular updates about Offers, Coupons & more
                            </p>
                            <form className="flex flex-col lg:flex-row mt-5">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="p-2 mb-2 w-full lg:mb-0 lg:mr-2 border border-gray-600 rounded-md"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <div>FOLLOW US</div>
                            <div className='flex gap-5 mt-3'>
                                <div className='flex justify-center items-center '>
                                    <i class="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className="">
                                    <i class="fa-brands fa-square-twitter" style={{ color: "#fbfcfe" }}></i>
                                </div>

                                <div className="">
                                    <i class="fa-brands fa-instagram" style={{ color: "#f5f5f5" }}></i>
                                </div>
                                <div className="">
                                    <i class="fa-brands fa-youtube" style={{ color: "#f7f7f8" }}></i>
                                </div>
                                <div className="">
                                    <i class="fa-brands fa-linkedin" style={{ color: "#f6f7f9" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between navfont mt-32'>
                        <div>
                            <div className='font-bold'>Company</div>
                            <ul className='mt-3 space-y-2'>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Partnerships</li>
                                <li>Blog</li>
                                <li>Advertising</li>
                                <li>How we work</li>
                            </ul>
                        </div>
                        <div>
                            <div className='font-bold'>Policies</div>
                            <ul className='mt-3 space-y-2'>
                                <li>Privacy</li>
                                <li>Terms of Use</li>
                                <li>Accessibility</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                        <div>
                            <div className='font-bold'>Help</div>
                            <ul className='mt-3 space-y-2'>
                                <li>Support</li>
                                <li>Cancel your booking</li>
                                <li>Refund Policies</li>
                                <li>Use a coupon</li>
                                <li>Travel Documents</li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <div className='font-bold'>More</div>
                            <ul className='mt-3 space-y-2'>
                                <li>Airline fees</li>
                                <li>Airlines</li>
                                <li>Low fare trips</li>
                                <li>Badges & Certificates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center mt-8 bg-black navfont p-5">
                <p className="text-sm text-white">&copy; {new Date().getFullYear()} Flight Booking. All rights reserved.</p>
            </div>
        </div>

    );
};

export default Footer;
