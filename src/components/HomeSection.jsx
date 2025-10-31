import React from 'react'
import {
    RiFlowerLine,
    RiPlantLine,
    RiLeafLine,
    RiFacebookFill,
    RiTwitterXLine,
    RiInstagramLine,
    RiLinkedinFill,
} from 'react-icons/ri'
import homeImage from '../assets/cart-3.png'
import { Link } from 'react-scroll'
function HomeSection() {
    return (
    <section id='home' className='py-20 md:py-28 bg-green-950'>
        <div className='container mx-auto 2xl:w-[90%] '>
        <div className=" md:hidden lg:block w-64 h-64 bg-green-700 rounded-full 
        blur-3xl z-10 opacity-40  absolute top-[210px] left-[610px] "></div>
        <div className="w-64 h-64 bg-green-700 rounded-full
        blur-3xl z-10 opacity-40  absolute right-10 bottom-5"></div>
        <div className='mx-6 flex flex-col items-center justify-between gap-10 lg:flex-row'>
            {/* النص */}
            <div className='w-full space-y-6 text-center lg:text-left'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-snug'>
                <span className='text-yellow-500'>Plants</span> make a
                <br />
                positive <span className='text-yellow-500'>impact</span> on
                <br />
                your environment
            </h1>
            <p className='text-slate-300 text-[18px] max-w-xl mx-auto lg:mx-0 lobster-regular'>
                We believe that plants are not just decorations, but a lifestyle
                that promotes health and adds positive energy to every space.
                Join us to discover natural and eco-friendly products and
                decorate your day with the beauty of nature wherever you are.
            </p>
            <div className='flex gap-4 mt-6 justify-center lg:justify-start'>
                <button className='flex items-center gap-2 bg-yellow-500
                border border-yellow-500 px-5 py-3 rounded-xl duration-300 ease-in hover:scale-107'>
                <Link to='popular' smooth={true} className='font-bold'>Shop Now</Link>
                <RiLeafLine />
                </button>
                <button className='flex items-center gap-2 bg-transparent
                border border-yellow-500 px-5 py-3 rounded-xl duration-300 ease-in hover:scale-107'>
                <Link to='about' smooth={true} className='font-bold'>Know More</Link>
                <RiLeafLine />
                </button>
            </div>
            <p className='text-slate-300 text-xl flex justify-center lg:justify-start lobster-regular'>
                You will get 30-days free trial.
            </p>
            <div className='flex items-center justify-center lg:justify-start gap-5 text-2xl mt-8'>
                <RiFacebookFill onClick={()=>window.open('https://www.facebook.com','_blank')}
                className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer' />
                <RiTwitterXLine onClick={()=>window.open('https://twitter.com','_blank')}
                className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer' />
                <RiInstagramLine onClick={()=>window.open('https://www.instagram.com','_blank')}
                className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer' />
                <RiLinkedinFill onClick={()=>window.open('https://www.linkedin.com','_blank')}
                className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer' />
            </div>
            </div>

            {/* الصورة */}
            <div className='w-full relative flex justify-center'>
            <img
                src={homeImage}
                alt='Home'
                className='max-w-sm md:max-w-md z-10 '
            />
            <div className='absolute top-0 right-0 opacity-30'>
                <RiLeafLine className='text-yellow-500 text-6xl animate-[float_6s_ease-in-out_infinite]' />
            </div>
            <div className='absolute bottom-0 left-0 opacity-30'>
                <RiFlowerLine className='text-yellow-500 text-6xl animate-[circle_8s_ease-in-out_infinite]' />
            </div>
            <div className='absolute top-0 left-5 opacity-30'>
                <RiPlantLine className='text-yellow-500 text-6xl animate-[float_10s_ease-in-out_infinite]' />
            </div>
            </div>
        </div>
        </div>
    </section>
    )
}

export default HomeSection
