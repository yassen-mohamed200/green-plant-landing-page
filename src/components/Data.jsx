import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiHeadsetDuotone } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import cart1 from '../assets/cart-1.png'
import cart2 from '../assets/cart-2.png'
import cart3 from '../assets/cart-3.png'
import cart4 from '../assets/cart-4.png'

export const ServicesData=[
    {
        id:1,
        title:"Fast Delivery",
        description:"We are committed to providing a fast and secure delivery service that ensures your products arrive promptly and with the highest quality and accuracy, because your comfort is our priority.",
        icon:<MdOutlineLocalShipping/>
    },
    {
        id:2,
        title:"Customer Service",
        description:"We pride ourselves on providing exceptional customer service, ensuring all your inquiries and needs are met quickly and professionally to ensure a unique shopping experience that satisfies you and exceeds your expectations.",
        icon:<PiHeadsetDuotone/>
    },
    {
        id:3,
        title:"Original Plants",
        description:"Enjoy the beauty of nature with our selection of native plants, carefully cultivated to give your homes and offices an authentic green touch that reflects the purity and quality of nature.",
        icon:<RiPlantLine/>
    },
    {
        id:4,
        title:"Affordable Price",
        description:"We offer you the perfect combination of quality and affordability, so you can enjoy the best shopping experience without compromising on service or product quality.",
        icon:<AiOutlineDollarCircle/>
    }
]
export const PopularData=[
    {
        id:1,
        imgSrc:cart1,
        title:"Nephrolepis",
        heading:"Boston fern",
        price:"5$",
        icon:<TiShoppingCart/>
    },
    {
        id:2,
        imgSrc:cart2,
        title:"Ficus elastica",
        heading:"Rubber Plant",
        price:"8$",
        icon:<TiShoppingCart/>
    },
    {
        id:3,
        imgSrc:cart3,
        title:"Spathiphyllum walisii",
        heading:"Peace Lily",
        price:"10$",
        icon:<TiShoppingCart/>
    },    
    {
        id:4,
        imgSrc:cart4,
        title:"Adenium obesum",
        heading:"Desert Rose",
        price:"12$",
        icon:<TiShoppingCart/>
    },

]