import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Header = ({ navColor, textColor }) => {

    // Dynamic Right Button Section
    const router = useRouter();
    const { type } = router.query;

    let logoImageUrl = 'https://i.ibb.co/mXNJSdL/logo.png';

    if (type === 'http://localhost:3000/story') {
        logoImageUrl = 'https://i.ibb.co/mXNJSdL/logo.png';
    } else {
        logoImageUrl = 'https://i.ibb.co/8ry1c87/logo.png';
    }




    return (
        <div className={`bg-[#${navColor}] `}>
            <div className='flex justify-between py-6 container mx-auto items-center'>
                <div>
                    <img src={logoImageUrl} alt="Review" className="w-auto h-auto " />
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
                    <img src="https://i.ibb.co/XZk8XGn/button.png" alt="Review" className="w-auto h-auto " />
                </div>
            </div>
        </div>
    );
};

export default Header;