import React from 'react';

const cardData = [
    { id: 1, title: 'Bukhari', imageUrl: 'https://i.ibb.co/2FGRVdj/menu-1.png' },
    { id: 2, title: 'Saudi Makboos', imageUrl: 'https://i.ibb.co/YkfDydf/menu-9.png' },
    { id: 3, title: 'Zurbiam', imageUrl: 'https://i.ibb.co/wz86Xqt/menu-8.png' },
    { id: 4, title: 'Kabsa', imageUrl: 'https://i.ibb.co/McMc8dQ/menu-7.png' },
    { id: 5, title: 'Madfoon', imageUrl: 'https://i.ibb.co/F5qSPhg/menu-6.png' },
    { id: 6, title: 'Math Lootha', imageUrl: 'https://i.ibb.co/hf0gtZw/menu-5.png' },
    { id: 7, title: 'Margoug', imageUrl: 'https://i.ibb.co/Jn5ZDXd/menu-4.png' },
    { id: 8, title: 'Sayadya', imageUrl: 'https://i.ibb.co/42pMtKS/menu-3.png' },
    { id: 9, title: 'Saleeg', imageUrl: 'https://i.ibb.co/NWQdRbH/menu-2.png' }
];

const Menu = () => {
    return (
        <div className="bg-[#5B0017]  text-white">

            <div className='container mx-auto'>
                <div className="flex mb-8">

                    <div className="w-1/2 pr-4 py-16">
                        <div className='flex items-center'>
                            <p className="text-sm mb-2 text-[#CC9D2F]">OUR MENU</p>
                            <div className='ms-2 h-0.5 w-8  mb-1.5 border-b border-white' />
                        </div>
                        <h1 className="text-5xl font-normal mb-2">Discover</h1>
                        <h1 className="text-5xl font-normal mb-2">Our Menu</h1>
                    </div>


                    <div className="w-1/2 flex items-center justify-center py-16">
                        <div className="text-[#B8B8B8]">
                            There is a wide selection of choices served by top<br /> Saudi chefs, prepared using best quality local<br /> ingredients.
                        </div>
                    </div>
                </div>

                <div className="flex mb-8">
                    <p className="me-7 font-semibold">All</p>
                    <p className="me-7 text-[#B8B8B8]">Feast</p>
                    <p className="me-7 text-[#B8B8B8]">Coffee</p>
                    <p className="me-7 text-[#B8B8B8]">Cocktails</p>
                    <p className="text-[#B8B8B8]">dessert</p>
                </div>


                <div className="grid grid-cols-3 gap-8 mb-8">
                    {cardData.map((card) => (
                        <div key={card.id} className="mb-4 bg-[#243054]">
                            <img src={card.imageUrl} alt={card.title} className="w-full h-auto" />
                            <div className=' py-6'>
                                <h2 className="text-2xl font-normal ms-6">{card.title}</h2>
                            </div>

                        </div>
                    ))}
                </div>


                <button className="border border-white text-white py-2 px-4 mx-auto block">Show More</button>
            </div>
        </div>
    );
};

export default Menu;
