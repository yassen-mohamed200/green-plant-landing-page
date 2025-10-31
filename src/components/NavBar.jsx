import React, { useState } from "react";
import leaf1 from "../assets/leaf-1.png";
import leaf2 from "../assets/leaf-2.png";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
function NavBar() {
const [isOpen, setIsOpen] = useState(false);
const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "popular", label: "Popular" },
    { id: "review", label: "Review" },
    ];
return (
    <header className="w-full bg-green-950 fixed z-50 top-0 left-0">
    <nav className="w-[95%]  m-auto flex items-center justify-between h-16 sm:h-20 px-15">
        <div className="text-7xl sm:text-2xl  text-white logo-dancing transform duration-300 ease-in
        hover:text-yellow-500 hover:scale-110 cursor-pointer">Green Plant</div>

        {/* اللينكات العادية على الشاشات الكبيرة */}
        <ul className="hidden md:flex items-center gap-10 text-white  ">
        {links.map((link) => (
            <li key={link.id} className="nav-links">
            <Link className="cursor-pointer"
            to={link.id} 
            smooth={true} 
            duration={500}
            spy={true} 
            activeClass="text-yellow-500"
            offset={-70}>{link.label}</Link>
            </li>
        ))}
        </ul>

        {/* المنيو على الشاشات الصغيرة */}
        <div
        id="navMenu"
        className={`absolute top-0 min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm 
        flex flex-col items-center justify-center duration-300 overflow-hidden md:hidden
        ${isOpen ? "left-0" : "left-[-100%]"}`}
        >
        <ul className="flex flex-col items-center gap-8 text-white text-lg mb-10">
            {links.map((link) => (
            <li
                key={link.id}
                className="nav-links"
                onClick={() => setIsOpen(false)} // تغلق المنيو لما تضغط على اللينك
            >
                <Link className="cursor-pointer"
                to={link.id}
                smooth={true}
                duration={500} 
                spy={true} 
                offset={-70}
                activeClass="text-yellow-500">
                    {link.label}
                </Link>
            </li>
        ))}
        </ul>

        {/* الصور تظهر فقط لما المنيو مفتوح على الشاشات الصغيرة */}
        {isOpen && (
            <>
            <div className="absolute bottom-0 right-10 opacity-90">
                <img src={leaf1} alt="leaf..." className="w-32" />
            </div>
            <div className="absolute top-5 left-5 rotate-90 opacity-90">
                <img src={leaf2} alt="leaf..." className="w-32" />
            </div>
            </>
        )}
        </div>

        {/* أيقونة المنيو للموبايل بس */}
        <div className="text-xl sm:text-3xl cursor-pointer z-50 text-white md:hidden hover:text-yellow-500">
        <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose /> : <RiMenu4Line />}
        </div>
        </div>
    </nav>
    </header>
);
}

export default NavBar;


