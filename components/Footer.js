import React from 'react';
import FacebookSVG from './svg/FacebookSVG';
import InstragramSVG from './svg/InstragramSVG';
import TwitterSVG from './svg/TwitterSVG';
import GitSVG from './svg/GitSVG';

const Footer = () => {
    return (
        <div className=''>

            <footer className="bg-[#CC9D2F] text-center">
                <div className="py-2 ">

                    <button className='bg-[#000000] text-[#FFFFFF] font-semibold py-4 px-6 my-12'>MAIZ المعز</button>

                    <div className="flex flex-col md:flex-row mb-8 text-[#5B0017] justify-center font-semibold">

                        <p className="lg:me-7">Home</p>
                        <p className="lg:me-7">About</p>
                        <p className="lg:me-7">Menu</p>
                        <p className="lg:me-7">Venue</p>
                        <p className="lg:me-7"> Events</p>
                        <p className="">Contact us</p>

                    </div>

                    <hr className="border-gray-500 " />

                    <div className='flex flex-wrap sm:justify-center sm:text-center md:justify-between  lg:justify-between py-4 container mx-auto'>
                        <div className='text-[#243054]'>
                            © 2021 | All rights reserved.
                        </div>
                        <div>
                            <ul className="flex lg:pe-72 md:pe-72 justify-between space-x-2 font-medium text-[#243054]">
                                <li>
                                    <a><FacebookSVG /></a>
                                </li>
                                <li>
                                    <a><InstragramSVG /></a>
                                </li>
                                <li>
                                    <a><TwitterSVG /></a>
                                </li>
                                <li>
                                    <a><GitSVG /></a>
                                </li>
                            </ul>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>

            </footer>




        </div>
    );
};

export default Footer;