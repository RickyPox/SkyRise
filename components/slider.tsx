import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";


const carousel1  = [
    {
        imgsrc: "/slider/anybodies.png"
    },
    {
        imgsrc: "/slider/blocksmithlabs.png"
    },
    {
        imgsrc: "/slider/brave.png"
    },
    {
        imgsrc: "/slider/cardinal.png"
    },
    {
        imgsrc: "/slider/clutchy.png"
    },
    {
        imgsrc: "/slider/cupcake.png"
    },
    {
        imgsrc: "/slider/expopulus.png"
    },
    {
        imgsrc: "/slider/magiceden.png"
    },
    
]

const carousel2  = [
    {
        imgsrc: "/slider/masterblox.png"
    },
    {
        imgsrc: "/slider/metaplex.png"
    },
    {
        imgsrc: "/slider/ottersec.png"
    },
    {
        imgsrc: "/slider/rooniverse.png"
    },
    {
        imgsrc: "/slider/smyths.png"
    },
    {
        imgsrc: "/slider/solana.png"
    },
    {
        imgsrc: "/slider/svc.png"
    },
    {
        imgsrc: "/slider/ubiklabs.png"
    },
    {
        imgsrc: "/slider/yord.png"
    },
]




export default function Slider(){


    return(
    <div id="relationships" className='pt-[50px]'>     

        <Marquee className='md:h-[200px] mb-[0px] overflow-y-hidden'
            gradient={false}
            speed={50}
        >
                <div className='flex flex-row items-center justify-center justify-items-center'>
                    {carousel1.map((image) =>  (
                        <div className='flex justify-center'>
                            <img className='w-1/2 mx-[50px]' src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
        <Marquee className='md:h-[200px] mb-[0px] overflow-y-hidden'
            gradient={false}
            speed={50}
            direction={"right"}
            >
                <div className='flex flex-row items-center justify-center justify-items-center'>
                    {carousel2.map((image) =>  (
                        <div className='flex justify-center'>
                            <img className='w-1/2 mx-[50px]' src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
 
    </div>
)
}