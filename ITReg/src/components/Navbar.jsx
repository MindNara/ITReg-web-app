import React from 'react'
import Logo from '../assets/Logo.png'

function Navbar() {

    return (
        <div className='flex justify-between items-center'>
            <a href="#"><img src={Logo} alt="Logo" className='w-28' /></a>
            <div className='flex gap-24'>
                <ul>
                    <li><a href="#" className=''>Dashboard</a></li>
                </ul>
                <ul>
                    <li><a href="#" className=''>Review</a></li>
                </ul>
                <ul>
                    <li><a href="#" className=''>Study Plan</a></li>
                </ul>
                <ul>
                    <li><a href="#" className=''>About</a></li>
                </ul>
            </div>
            <div className='flex gap-12'>
                <button className=''>Sign In</button>
                <button className='box-btnGradient text-[#0cb6ff] px-5 py-2'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Navbar
