import React from 'react';
import Marquee from "react-fast-marquee";


const carousel  = [
    {
        imgsrc: "/react.svg"
    },
    {
        imgsrc: "/react.svg"
    },
    {
        imgsrc: "/react.svg"
    },
    {
        imgsrc: "/react.svg"
    },
    {
        imgsrc: "/react.svg"
    },
]
export default function Slider(){
    return(
    <div>        
        <Marquee className='h-[70px] mb-[0px]'
            gradient={false}
            speed={40}>
                <div className='flex flex-row justify-around w-full'>
                    {carousel.map((image) =>  (
                        <div>
                            <img className=" py-[8px] px-[50px] bg-gradient-to-tr from-white to-[#EEEEEE]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] dark:from-[#1d1d1d] rounded-3xl" src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
    
    </div>
)
}