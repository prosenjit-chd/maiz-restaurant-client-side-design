import React from 'react';

const Map = ({ bgColor }) => {
    return (
        <div className="flex container mx-auto">
            {/* Left Side */}
            <div className={`w-2/6 py-16 px-12 bg-[#${bgColor}]`}>
                <div className="mb-8">
                    <h1 className="text-xl font-bold mb-2 text-[#CC9D2F]">Working Hours</h1>
                    <div className='text-white'>Sunday to Saturday</div>
                    <div className='text-white'>09:00 AM to 11:00 PM</div>
                    <div className='text-white'>Friday</div>
                    <div className='text-white'>02:00 PM to 1:00 AM</div>
                </div>

                <div className="mb-8">
                    <h1 className="text-xl font-bold mb-2 text-[#CC9D2F]">Location</h1>
                    <div className='text-white'>Street - 127, Jeddah,</div>
                    <div className='text-white'>Saudi Arabia</div>
                    <div className='text-white'>546544</div>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-2 text-[#CC9D2F]">Contact us</h1>
                    <div className='text-white'>+123456789</div>
                    <div className='text-white'>service@maizresturant.com</div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-4/6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306104.542187608!2d38.805948482458334!3d26.602536676998778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1691599086583!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                {/* <img src="https://i.ibb.co/hWNBjDv/Map.png" alt="Map" className="w-full h-full object-cover" /> */}
            </div>
        </div>
    );
};

export default Map;
