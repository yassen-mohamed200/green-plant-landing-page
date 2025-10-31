import React from 'react'
import {
    RiFacebookFill,
    RiTwitterXLine,
    RiInstagramLine,
    RiLinkedinFill,
    RiLeafFill
} from 'react-icons/ri'
import { Link } from 'react-scroll'
export default function Footer() {


  return (
    <footer className='bg-yellow-100 relative py-20 flex flex-col gap-6 justify-center items-center text-green-950' >
        <div className="w-[70%] m-auto absolute top-[-140px] px-6
        py-10 bg-green-800 mt-16 rounded-2xl" >
            <h2 className='text-xl md:text-2xl lg:text-3xl text-center font-bold mb-4 text-white'><span className='text-yellow-500'>Subscribe</span> to our Newsletter</h2>
            <form action="">
                <div className="flex  md:flex-row
                gap-6 justify-center items-center">
                    <input type="email" placeholder='Enter your email'
                    className='p-2 rounded-lg w-[400px] md:w-[800px]
                    border border-green-950 bg-white' />
                    <button className='bg-yellow-500 text-white p-2 rounded-md'>Subscribe</button>
                </div>
            </form>
        </div>
        <div className="flex items-center justify-center gap-6 text-center mt-20">
            <div className="w-130 h-[1.7px] bg-green-950"></div>
            <div className="flex items-center justify-center gap-2 text-center">
                <RiFacebookFill onClick={() => window.open('https://www.facebook.com', '_blank')}
                className='text-green-950
                text-xl hover:text-yellow-500' />
                <RiTwitterXLine onClick={() => window.open('https://www.twitter.com', '_blank')}
                className='text-green-950 text-xl hover:text-yellow-500' />
                <RiInstagramLine onClick={() => window.open('https://www.instagram.com', '_blank')}
                className='text-green-950 text-xl hover:text-yellow-500' />
                <RiLinkedinFill onClick={() => window.open('https://www.linkedin.com', '_blank')}
                className='text-green-950 text-xl hover:text-yellow-500' />
            </div>
            <div className="w-130 h-[1.7px] bg-green-950"></div>
        </div>
            <div className="w-[70%] m-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 text-center mt-16 mx-6">
            <div className="flex flex-col items-center justify-center">
            <RiLeafFill className='text-green-900 text-9xl' />
            <h1 className='text-7xl sm:text-2xl  text-green-950 logo-dancing transform duration-300 ease-in
        hover:text-green-900 hover:scale-110 cursor-pointer'>Green Planet</h1>
            </div>
            <div className="mt-6 content1 flex flex-col">
                <h2 className='text-green-950 text-2xl font-bold mb-3'>quick links</h2>
                <Link smooth={true} to='home' className='cursor-pointer hover:text-yellow-500'>Home</Link>
                <Link smooth={true} to='about' className='cursor-pointer hover:text-yellow-500'>About</Link>
                <Link smooth={true} to='review' className='cursor-pointer hover:text-yellow-500'>Review</Link>
                <Link smooth={true} to='popular' className='cursor-pointer hover:text-yellow-500'>Popular</Link>
            </div>
                <div className="mt-6 content1">
                <h2 className='text-green-950 text-2xl font-bold mb-3'>Our Services</h2>
                <p className='cursor-pointer hover:text-yellow-500'>Tree planting</p>
                <p className='cursor-pointer hover:text-yellow-500'>Grass Cutting</p>
                <p className='cursor-pointer hover:text-yellow-500'>Weeds control</p>
                <p className='cursor-pointer hover:text-yellow-500'>Plant Care</p>
            </div>
                <div className="mt-6 content1">
                <h2 className='text-green-950 text-2xl font-bold mb-3'>Contact Us</h2>
                <p className='cursor-pointer hover:text-yellow-500'>Email: info@greenplanet.com</p>
                <p className='cursor-pointer hover:text-yellow-500'>Phone: +123456789</p>
                <p className='cursor-pointer hover:text-yellow-500'>Address: 123 Green St, Eco City</p>
            </div>
            </div>
            <p className='text-green-950 text-center mt-20'>&copy; 2025 Green Planet. All rights reserved.</p>
    </footer>
  )
}
