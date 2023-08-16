import React from 'react';

const Review = () => {
    return (
        <div className="my-16 container mx-auto bg-[#CC9D2F]">

            <div className='grid grid-cols-12 items-center'>

                <div className="col-span-5 text-[#243054]  px-12">
                    {/* Left Side */}
                    <div className=" text-2xl">
                        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                    </div>


                    <div className='mt-32'>
                        <div className="flex justify-between">

                            <div className="">
                                <h2 className="text-xl font-bold">Khalid Al Dawsry</h2>
                                <p>Jeddah, Saudi</p>
                            </div>
                            <img src="https://i.ibb.co/qsQWJyx/Image.png" alt="Profile" className="rounded-full w-16 h-16" />
                        </div>
                    </div>

                    <hr className="border-gray-600 mt-4" />

                </div>


                {/* Right Side */}
                <div className="col-span-7">
                    <div className='relative '>
                        <img src="https://i.ibb.co/JrJZjdK/review.png" alt="Review" className="w-full h-full object-cover" />
                        {/* <div className='absolute top-0 h-full w-full flex justify-center items-center'> */}
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer h-12 w-12' src="https://i.ibb.co/5kKDhFL/Play.png" />

                        {/* </div> */}

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Review;
