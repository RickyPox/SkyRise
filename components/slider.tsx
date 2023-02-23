import React from 'react';
import Marquee from "react-fast-marquee";


const carousel  = [
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
export default function Slider(){
    return(
    <div>     
        <Marquee className='h-[200px] mb-[0px] bg-primary '
            gradient={false}
            speed={100}>
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