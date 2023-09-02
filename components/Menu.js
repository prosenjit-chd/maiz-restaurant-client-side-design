import React, { useMemo, useState } from 'react';



const Menu = () => {
    const categories = ["All", "Feast", "Coffee", "Cocktails", "Dessert"];

    const cardData = [
        { id: 1, title: 'Bukhari', imageUrl: 'https://i.ibb.co/2FGRVdj/menu-1.png', type: 'Feast' },
        { id: 2, title: 'Saudi Makboos', imageUrl: 'https://i.ibb.co/YkfDydf/menu-9.png', type: 'Feast' },
        { id: 3, title: 'Zurbiam', imageUrl: 'https://i.ibb.co/wz86Xqt/menu-8.png', type: 'Cocktails' },
        { id: 4, title: 'Kabsa', imageUrl: 'https://i.ibb.co/McMc8dQ/menu-7.png', type: 'Cocktails' },
        { id: 5, title: 'Madfoon', imageUrl: 'https://i.ibb.co/F5qSPhg/menu-6.png', type: 'dessert' },
        { id: 6, title: 'Math Lootha', imageUrl: 'https://i.ibb.co/hf0gtZw/menu-5.png', type: 'dessert' },
        { id: 7, title: 'Margoug', imageUrl: 'https://i.ibb.co/Jn5ZDXd/menu-4.png', type: 'Coffee' },
        { id: 8, title: 'Sayadya', imageUrl: 'https://i.ibb.co/42pMtKS/menu-3.png', type: 'Coffee' },
        { id: 9, title: 'Saleeg', imageUrl: 'https://i.ibb.co/NWQdRbH/menu-2.png', type: 'Feast' }
    ];

    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredData = useMemo(() => {
        if (selectedCategory.toLowerCase() === "all") {
            return cardData;
        } else {
            return cardData.filter((card) => card.type.toLowerCase() === selectedCategory.toLowerCase())
        }
    }, [cardData, selectedCategory])



    return (
        <div className="bg-[#5B0017]  text-white">

            <div className='container mx-auto'>
                <div className="grid grid-cols-12 mb-8">

                    <div className="col-span-12 md:col-span-12  lg:col-span-6 pr-1 md:pr-2 lg:pr-4 py-2 md:py-4 lg:py-16">
                        <div className='flex items-center'>
                            <p className="text-sm mb-2 text-[#CC9D2F]">OUR MENU</p>
                            <div className='ms-2 h-0.5 w-8  mb-1.5 border-b border-white' />
                        </div>
                        <h1 className="text-5xl font-normal mb-2">Discover</h1>
                        <h1 className="text-5xl font-normal mb-2">Our Menu</h1>
                    </div>


                    <div className="col-span-12 md:col-span-6  lg:col-span-6 flex items-center justify-center py-2 md:py-4 lg:py-16">
                        <div className="text-[#B8B8B8]">
                            There is a wide selection of choices served by top<br /> Saudi chefs, prepared using best quality local<br /> ingredients.
                        </div>
                    </div>
                </div>

                <div className='lg:block  hidden'>

                    <div className="flex mb-8 ">
                        {categories.map(category => (
                            <button onClick={() => setSelectedCategory(category)} className={`me-7 ${category.toLowerCase() === selectedCategory.toLowerCase() ? 'text-white' : 'text-[#B8B8B8]'} `} key={category}>
                                {category}
                            </button>
                        ))}

                    </div>
                </div>
                <div className='lg:hidden block'>
                    <select onChange={(e) => setSelectedCategory(e.target.value)} defaultChecked={selectedCategory} className='text-black sm:mb-2 md:mb-2'>
                        {categories.map(category => (
                            <option value={category}>
                                {category}
                            </option>
                        ))}

                    </select>
                </div>


                <div className="grid grid:cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {filteredData.map((card) => (
                        <div key={card.id} className="mb-4 bg-[#243054] group  overflow-hidden">
                            <img src={card.imageUrl} alt={card.title} className="w-full h-auto group-hover:scale-110 duration-500" />
                            <div className=' py-6'>
                                <h2 className="text-2xl font-normal ms-6 group-hover:text-yellow-500">{card.title}</h2>
                            </div>

                        </div>
                    ))}
                </div>


                <button className="border border-white text-white py-2 px-4 mx-auto block hover:text-yellow-400 hover:border-yellow-700">Show More</button>
            </div>
        </div>
    );
};

export default Menu;
