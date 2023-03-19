import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";


const carousel1  = [
    {
        imgsrc: "/slider/mobile/anybodies.png"
    },
    {
        imgsrc: "/slider/mobile/blocksmithlabs.png"
    },
    {
        imgsrc: "/slider/mobile/brave.png"
    },
    {
        imgsrc: "/slider/mobile/cardinal.png"
    },
    {
        imgsrc: "/slider/mobile/clutchy.png"
    },
    {
        imgsrc: "/slider/mobile/cupcake.png"
    },
    {
        imgsrc: "/slider/mobile/expopulus.png"
    },
    {
        imgsrc: "/slider/mobile/magiceden.png"
    },
    
]

const carousel2  = [
    {
        imgsrc: "/slider/mobile/masterblox.png"
    },
    {
        imgsrc: "/slider/mobile/metaplex.png"
    },
    {
        imgsrc: "/slider/mobile/ottersec.png"
    },
    {
        imgsrc: "/slider/mobile/rooniverse.png"
    },
    {
        imgsrc: "/slider/mobile/smyths.png"
    },
    {
        imgsrc: "/slider/mobile/solana.png"
    },
    {
        imgsrc: "/slider/mobile/svc.png"
    },
    {
        imgsrc: "/slider/mobile/ubiklabs.png"
    },
    {
        imgsrc: "/slider/mobile/yord.png"
    },
]


export default function SliderMobile(){
    return(
    <div id="relationships" className='pt-[50px]'>  

        <Marquee className='md:h-[200px] h-[100px] mb-[0px] overflow-y-hidden'
            gradient={false}
            speed={50}
        >
                <div className='flex flex-row items-center justify-center justify-items-center'>
                    {carousel1.map((image) =>  (
                        <div className='flex justify-center'>
                            <img className='mx-[20px]' src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>

        <Marquee className='md:h-[200px] h-[100px] mb-[0px] overflow-y-hidden'
            gradient={false}
            speed={50}
            direction={"right"}
            >
                <div className='flex flex-row items-center justify-center justify-items-center'>
                    {carousel2.map((image) =>  (
                        <div className='flex justify-center'>
                            <img className='mx-[20px]' src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
        
    </div>
)
}