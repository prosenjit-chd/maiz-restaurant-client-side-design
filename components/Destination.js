import React from 'react';

const Destination = () => {
    return (
        <div className='container mx-auto bg-[#5B0017]'>
            <div className='grid grid-cols-12 items-center '>
                <div className='col-span-12 md:col-span-12 lg:col-span-5  flex justify-center'>
                    <img src="https://i.ibb.co/QCHMfrn/image-3.png" alt="Review" className="h-[530px]" />
                </div>

                <div className='col-span-12 md:col-span-12 lg:col-span-7 ps-8'>
                    <h1 className='text-5xl text-white font-normal'>
                        A distinctive dining destination
                    </h1>

                    <h1 className='text-5xl text-white font-normal mt-6'>
                        inspired by the culture.
                    </h1>

                    <p className='text-white text-xl font-light mt-8'>
                        Experience Al Balad old town of Jeddah vibes.
                    </p>

                    <div className='flex justify-start relative my-6 '>
                        <button className='bg-[#CC9D2F] text-[#5B0017] font-semibold ml-2 h-16 w-36 text-center'>Our Venue</button>
                        <div className='absolute top-2 border-2 border-[#CC9D2F] h-16 w-36'>

                        </div>
                    </div>

                    <div >
                        <div className='flex'>
                            <div className=''>
                                <img src="https://i.ibb.co/6YbTtNY/image-4.png" alt="Review" className="w-auto h-auto " />
                            </div>

                            <div className='ms-6'>
                                <img src="https://i.ibb.co/tH9CxK7/image-5.png" alt="Review" className="w-auto h-auto " />
                            </div>

                            <div className='ms-6'>
                                <img src="https://i.ibb.co/qknf1t2/image-6.png" alt="Review" className="w-auto h-auto " />
                            </div>

                        </div>

                        <hr className="border-[#CC9D2F] w-7/12 mt-8" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Destination;