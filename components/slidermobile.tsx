import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";


const carousel1  = [
    {
        imgsrc: "/slider/mobile/anybodies.svg"
    },
    {
        imgsrc: "/slider/mobile/aptos.svg"
    },
    {
        imgsrc: "/slider/mobile/blocksmithlabs.png"
    },
    {
        imgsrc: "/slider/mobile/boringprotocol.svg"
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
        imgsrc: "/slider/mobile/econia.svg"
    },
    {
        imgsrc: "/slider/mobile/expopulus.png"
    },
    {
        imgsrc: "/slider/rove.svg"
    },

    
]

const carousel2  = [
    {
        imgsrc: "/slider/mobile/madoath.svg"
    },
    {
        imgsrc: "/slider/mobile/magiceden.png"
    },
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
        imgsrc: "/slider/mobile/polygon.svg"
    },
    {
        imgsrc: "/slider/mobile/rooniverse.png"
    },
    {
        imgsrc: "/slider/mobile/solana.png"
    },
    {
        imgsrc: "/slider/mobile/sui.svg"
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
    <div id="relationships">  

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