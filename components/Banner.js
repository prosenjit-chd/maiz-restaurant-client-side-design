import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#5B0017] py-16'>
            <div className='container mx-auto grid grid-cols-12 justify-between relative'>

                <div className='col-span-5'>

                </div>
                <div className='absolute top-10 left-0 z-10 w-[700px]'>
                    <div className='bg-[#5B0017]/70'>
                        <h1 className='text-[60px] text-white font-semibold'>Taste the authentic
                        </h1>
                        <h1 className='text-[60px] text-white font-semibold'>
                            Saudi cuisine</h1>
                    </div>
                    <p className='text-white w-1/2'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>

                    <button className="mt-6 border border-[#CC9D2F] text-[#CC9D2F] py-2 px-4 block">Our Menu</button>
                </div>

                <div className='col-span-7 relative'>
                    <img src="https://i.ibb.co/Yfd76Cn/image-1.png" alt="Review" className="w-auto h-auto " />
                    <div className='absolute -top-8 -right-8'>
                        <img src="https://i.ibb.co/DDLPxXR/Vector.png" alt="TitleMenu" className="w-16 h-16" />
                    </div>
                </div>

                <div className='absolute -bottom-10 left-0'>
                    <img src="https://i.ibb.co/h2MpmMz/Vector-1.png" alt="TitleMenu" className="w-16 h-16" />
                </div>

            </div>
        </div>
    );
};

export default Banner;