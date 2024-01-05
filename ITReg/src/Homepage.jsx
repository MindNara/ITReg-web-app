import React from 'react'
import Homepage_bg from './assets/Homepage_bg.png'
import Navbar from './components/Navbar';

function Homepage() {

    return (
        <div style={{ backgroundImage: `url(${Homepage_bg})` }}
            className='bg-no-repeat bg-cover bg-center h-screen px-40 py-16 bg-[#181754] text-white'
        >
            <Navbar />

            <div className='h-full flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-[80px] tracking-[2px]'>HOW TO</h2>
                <h1 className='font-bold text-[120px] tracking-[15px] mt-[-50px] textTitleGradient'
                >
                    REGISTER</h1>
                <div className='flex flex-col items-center text-[22px] font-light mt-2'>
                    <p className=''>There are several steps to help you get ready for your college experience</p>
                    <p className=''>here are some tips on how to register for college classes.</p>
                </div>
                <button className='box-btnGradient font-medium text-[20px] text-[#0cb6ff] px-9 py-3 mt-20'>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Homepage;