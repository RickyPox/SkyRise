import React from 'react';
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
    <div>     
        <Marquee className='h-[200px] mb-[0px] '
            gradient={false}
            speed={50}>
                <div className='flex flex-row w-full items-center'>
                    {carousel1.map((image) =>  (
                        <div className='mx-[50px]'>
                            <img src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
        <Marquee className='h-[200px] mb-[0px]'
            gradient={false}
            speed={50}
            direction="right">
                <div className='flex flex-row w-full items-center'>
                    {carousel2.map((image) =>  (
                        <div className='mx-[50px]'>
                            <img src={image.imgsrc} />
                        </div>
                    ))}
                </div>
        </Marquee>
    </div>
)
}