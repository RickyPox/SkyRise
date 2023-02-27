import React from 'react';
import Marquee from "react-fast-marquee";


const carousel1  = [
    {
        imgsrc: "/cardinal.png"
    },
    {
        imgsrc: "/brave.png"
    },
    {
        imgsrc: "/magicEden.png"
    },
    {
        imgsrc: "/solana.png"
    },
    {
        imgsrc: "/svc.png"
    },
]

const carousel2  = [
    {
        imgsrc: "/expopulus.png"
    },
    {
        imgsrc: "/yord.png"
    },
    {
        imgsrc: "/rooniverse.png"
    },
    {
        imgsrc: "/anybodies.png"
    },
]

export default function Slider(){
    return(
    <div>     
        <Marquee className='h-[200px] mb-[0px] bg-primary '
            gradient={false}
            speed={50}>
                <div className='flex flex-row justify-around w-full items-center flex-wrap'>
                    {carousel1.map((image) =>  (
                        <div>
                            <img src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
        <Marquee className='h-[200px] mb-[0px] bg-primary '
            gradient={false}
            speed={50}
            direction={"right"}>
                <div className='flex flex-row justify-around w-full items-center flex-wrap'>
                    {carousel2.map((image) =>  (
                        <div>
                            <img src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
    
    </div>
)
}