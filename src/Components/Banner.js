import React from 'react';
import banner from "./assets/banner.jpg";

export default function Banner({ isDarkMode }) {
    const handleBrowseClick = () => {
        const popularSection = document.getElementById('popular');
        if (popularSection) {
            // Scroll to the popular section using smooth behavior
            popularSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={`mx-32 my-10 py-7 flex justify-center rounded-lg ${isDarkMode ? 'bg-neutral-600' : 'bg-violet-100'}`}>
            <div>
                <div className="absolute top-56 left-72">
                    <h1 className="pb-6 text-xl text-white">Welcome to GameGrid</h1>
                    <p className="pb-8 text-4xl uppercase font-bold text-white"><span className="text-violet-500">Browse</span> our popular<br></br>Games here</p>
                    <button
                        className="px-12 py-2 rounded-md text-base font-semibold bg-violet-500 text-white hover:bg-orange-500 transition duration-300"
                        onClick={handleBrowseClick}
                    >Browse now</button>

                </div>
                <img src={banner} alt="banner" className="rounded-3xl w-full"></img>
            </div>

        </div>
    )
}
