import React from 'react';
import Link from 'next/link';


const Header = ({ navColor, textColor, colorSkim }) => {


    return (
        <div className={`bg-[#${navColor}] `}>
            <div className='flex justify-between py-6 container mx-auto items-center'>
                <div>
                    <img src={colorSkim === "first" ? "https://i.ibb.co/8ry1c87/logo.png" : "https://i.ibb.co/mXNJSdL/logo.png"} alt="Review" className="w-auto h-auto " />
                </div>

                <div className={`text-[#${textColor}]`}>
                    <ul className="flex justify-between space-x-14 font-light text-2xl">
                        <li>
                            <Link href='/home'>Home</Link>
                        </li>
                        <li>
                            <Link href='/menu-details'>Menu</Link>
                        </li>
                        <li>
                            <Link href='/story'>Story</Link>
                        </li>
                        <li>
                            <Link href='/story'>Events</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <img src={colorSkim === "first" ? "https://i.ibb.co/XZk8XGn/button.png" : "https://i.ibb.co/LzR5V42/button.png"} alt="Review" className="w-auto h-auto " />
                </div>
            </div>
        </div>
    );
};

export default Header;