import React from 'react'
import plant1 from '../assets/plant-1.png'
import plant2 from '../assets/plant-2.png'
import plant3 from '../assets/leaf-3.png'

function About() {
return (
<section id='about' className="relative overflow-x-hidden py-16 px-6 sm:px-10 lg:px-14 max-w-[1280px] mx-auto 2xl:w-[90%]">
    {/* الزينة */}
    <div className="absolute top-[-5px] right-0 w-20 sm:w-32 lg:w-56">
    <img src={plant3} alt="plant..." className="w-full h-auto" />
    </div>

    {/* العنوان */}
    <div className="flex flex-col items-center mt-6 text-center">
    <h2 className="font-bold text-yellow-500 text-4xl sm:text-5xl">
        About Us
    </h2>
    <p className="text-slate-300 lobster-regular mt-2 text-lg">
        Follow instruction for more
    </p>
    <div className="w-40 h-[1.7px] bg-yellow-500 mx-auto mt-4"></div>
    </div>

    {/* المحتوى */}
    <div className="flex flex-col">
    {/* Section 1 */}
    <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="img w-full md:w-1/2 flex justify-center">
        <img src={plant1} alt="plant..." className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-10 ">
        <h3 className="font-bold text-2xl sm:text-3xl">
            Make your <span className="text-yellow-500">organic</span>
            <br /> garden
        </h3>
        <p className="text-slate-300 lobster-regular mt-5">
            Start a healthy and sustainable lifestyle today! Create your own
            garden to grow your own alcohol, without any weeds or harmful
            chemicals. Enjoy a 100% natural meal, protect your health and the
            health of your family, and contribute to protecting the
            environment at the same time.
        </p>
        </div>
    </div>

    {/* Section 2 */}
    <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col justify-center px-4 md:px-10  order-2 md:order-1">
        <h3 className="font-bold text-2xl sm:text-3xl">
            Come with grow us <br />
            <span className="text-yellow-500">grow up</span> your plants
        </h3>
        <p className="text-slate-300 lobster-regular mt-5">
            Join us on our green growth journey. Come and cultivate your
            passion for plants with us, and discover how every tiny seed can
            become a source of life, energy, and inspiration. With us, you'll
            learn to grow your own plants, nurture them with love, and watch
            them grow healthy and natural, without any chemicals.
        </p>
        </div>
        <div className="img w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img src={plant2} alt="plant..." className="max-w-full h-auto" />
        </div>
    </div>
    </div>
</section>
)
}

export default About

