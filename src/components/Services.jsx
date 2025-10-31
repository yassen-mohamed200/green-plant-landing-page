import React from 'react'
import { ServicesData } from './Data'
function Services() {
  return (
    <section  className='bg-white py-20 px-14 m-auto cursor-pointer
    grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8'>
      {ServicesData.map((item)=>{
        return <div key={item.id} className='py-3 px-3 border-[2px] text-green-950
        border-green-950 transform ease-in duration-400 hover:translate-y-[-20px]
        hover:bg-green-950 hover:text-slate-300'>
          <h2 className='flex items-center gap-1 text-yellow-500 
          text-2xl font-[500]'><span>{item.icon}</span>{item.title}</h2>
          <p className='mt-2 lobster-regular'>{item.description}</p>
        </div>
      })}

    </section>
  )
}

export default Services