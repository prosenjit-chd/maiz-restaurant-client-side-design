import React from 'react';

const TitleMenu = () => {
    return (
        <div>
            <div className='relative'>
                <img src="https://i.ibb.co/prStJdh/image-4.png" alt="TitleMenu" className="w-full h-screen" />

                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  flex items-center justify-center'>
                    <div>
                        <div className='flex justify-center'>
                            <img src="https://i.ibb.co/DDLPxXR/Vector.png" alt="TitleMenu" className="w-auto h-auto" />
                        </div>
                        <h1 className='text-white text-5xl font-light my-4 text-center'>A unique menu that reflects the<br />
                            true essence of the Saudi cuisine</h1>

                        <div className='flex justify-center relative my-6 '>
                            <button className='bg-[#CC9D2F] text-[#5B0017] font-semibold h-16 w-36 text-center'>Our Menu</button>
                            <div className='absolute top-2 mr-4 border-2 border-[#CC9D2F] h-16 w-36'>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleMenu;