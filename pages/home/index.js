import Banner from '@/components/Banner';
import Destination from '@/components/Destination';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Review from '@/components/Review';
import TitleMenu from '@/components/TitleMenu';
import React from 'react';

const index = () => {
    return (
        <div>
            <Header navColor="5B0017" textColor="FFFFFF" />

            <div className='bg-[#5B0017]'>
                <Banner />
                <Destination />
                <div className='mb-18'></div>
                <Review />
                <TitleMenu />
            </div>
            <Footer />
        </div>
    );
};

export default index;

