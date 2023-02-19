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
                            <img src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
    
    </div>
)
}