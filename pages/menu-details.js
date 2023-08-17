import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Map from '@/components/Map';
import Menu from '@/components/Menu';
import React from 'react';

const menu_details = () => {
    return (
        <div>
            <Header navColor="5B0017" textColor="FFFFFF" colorSkim="first" />
            <Menu />
            <div className='py-24 px-16 mx-auto bg-[#5B0017]'>
                <Map bgColor="243054" />
            </div>
            <Footer />

        </div>
    );
};

export default menu_details;
