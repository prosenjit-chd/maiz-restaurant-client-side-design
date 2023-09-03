import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Map from '@/components/Map';
import React from 'react';



const story = () => {


    return (
        <div>
            <Header navColor="CC9D2F" textColor="5B0017" colorSkim="second" />

            <div className='bg-[#CC9D2F]'>
                <div >
                    <div className="container mx-auto py-36">
                        {/* edit area  */}

                        <div className="grid grid-cols-12 gap-2 md:gap-6 lg:gap-24">
                            {/* Left Side */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-6">
                                <h1 className="text-5xl font-semibold  mb-4 text-[#5B0017]">Our Story</h1>
                                <p className="mb-20 text-[#5B0017]">We’re an absolute leader in the Saudi cuisine-themed restaurants.</p>
                                <div className="grid grid-cols-2 gap-16">
                                    <div className="pt-10">
                                        <img src="https://i.ibb.co/wywJY4r/story-picture-1.png" alt="Image 1" className="w-50 md:w-75 lg:w-full h-auto  hover:scale-110 overflow-hidden duration-500" />
                                    </div>
                                    <div className="">
                                        <img src="https://i.ibb.co/YDF0sBC/story-picture-2.png" alt="Image 2" className="w-50 md:w-75 lg:w-full h-auto hover:scale-110 overflow-hidden duration-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="col-span-12 md:col-span-12 lg:col-span-6 text-justify">
                                <h2 className="text-2xl font-medium mb-4 text-white">One of the best restaurants in Saudi Arabia.</h2>
                                <p className="mb-6 text-[#5B0017]">
                                    Your one direction to high-quality Saudi feasts, since 1998 we served in Saudi Arabia.

                                </p>
                                <p className="mb-6 text-[#5B0017]">
                                    Locals who are proud of the country and want to introduce it to visitors from around the world.
                                </p>
                                <p className="mb-6 text-[#5B0017]">
                                    We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry.
                                </p>
                                <p className='text-[#5B0017]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem. Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus lorem.
                                </p>
                                <p className="mb-6 text-[#5B0017]">
                                    We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry.
                                </p>
                                <p className='text-[#5B0017]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem. Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus lorem.
                                </p>
                            </div>
                        </div></div>

                    {/* Year Section */}
                    <div className='bg-[#5B0017] py-36 mx-auto px-4 md:px-12 lg:px-24 mb-16 container '>
                        <div className='relative'>
                            <hr className='absolute top-[9px] left-0 w-full border-2 border-dashed border-gray-500/60' />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Part 1 */}
                                <div className="pb-4">
                                    <hr className="border-b-4 border-[#CC9D2F]  w-10 my-2" />
                                    <h1 className="text-xl font-bold mb-2 text-white">1998</h1>
                                    <h2 className="text-lg font-semibold mb-2 text-white">Milestone One</h2>
                                    <p className='text-[#CC9D2F]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                {/* Part 2 */}
                                <div className="pb-4">
                                    <hr className="border-b-4 border-[#CC9D2F] w-10 my-2" />
                                    <h1 className="text-xl font-bold mb-2 text-white">2005</h1>
                                    <h2 className="text-lg font-semibold mb-2 text-white">Milestone Two</h2>
                                    <p className='text-[#CC9D2F]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>

                                {/* Part 3 */}
                                <div className=" pb-4">
                                    <hr className="border-b-4 border-[#CC9D2F] w-10 my-2" />
                                    <h1 className="text-xl font-bold mb-2 text-white">2012</h1>
                                    <h2 className="text-lg font-semibold mb-2 text-white">Milestone Three</h2>
                                    <p className='text-[#CC9D2F]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>

                                {/* Part 4 */}
                                <div>
                                    <hr className="border-b-4 border-[#CC9D2F] w-10 my-2" />
                                    <h1 className="text-xl font-bold mb-2 text-white">2021</h1>
                                    <h2 className="text-lg font-semibold mb-2 text-white">Milestone Four</h2>
                                    <p className='text-[#CC9D2F]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#243054] py-20'>
                        <Map bgColor="5B0017" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default story;
