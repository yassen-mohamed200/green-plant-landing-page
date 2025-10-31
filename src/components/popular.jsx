import React from 'react'
import { PopularData } from './Data'
import { FaRegStarHalfStroke, FaStar,FaRegStar } from "react-icons/fa6";

export default function Popular() {
  return (
    <section className='py-10' id='popular'>    
      <div className="heading">
        <h2 className='font-bold text-yellow-500 text-4xl sm:text-5xl text-center mt-2'>Popular Plants</h2>
        <p className='text-center text-lg text-gray-300 lobster-regular'>Most popular plants based on sales</p>
        <div className="w-40 h-[1.7px] bg-yellow-500 mx-auto mt-4"></div>
      </div>
      <div className="py-16 px-5 max-w-[1280px] mx-auto 2xl:w-[95%] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 mt-34">
        {PopularData.map((item)=>{
        return <div className=" relative bg-green-800 flex flex-col justify-center items-center
        shadow-md rounded-lg  px-5 py-10 sm:mt-28 lg:mt-0" key={item.id}>
        <div className="bg-yellow-200 m-auto absolute top-[-20px]  w-[250px] h-[0px] flex justify-center items-center rounded-br-lg">
          <img src={item.imgSrc} alt="...plant" /> 
        </div>
        <div className="text-center">
          <p className='text-xl lobster-regular mt-18 text-center'>{item.title}</p>
          <h3 className='text-2xl mt-2'>{item.heading}</h3>
          <div className="flex justify-center text-yellow-500 mt-2 gap-1">
            <span><FaStar/></span>
            <span><FaStar/></span>
            <span><FaStar/></span>
            <span><FaRegStarHalfStroke/></span>
            <span><FaRegStar/></span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <p className='text-lg font-bold'>{item.price}</p>
            <span className='text-4xl px-1 py-1 bg-yellow-500 rounded-sm duration-300 ease-in-out hover:text-green-800'>{item.icon}</span>
          </div>
        </div>
      </div>
      })}
      
      </div>
    </section>
  )
}
