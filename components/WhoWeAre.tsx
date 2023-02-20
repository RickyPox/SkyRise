import Slider from "./slider";
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';
import { useEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
import { Controller, Scene } from 'react-scrollmagic';



export default function WhoWeAre(){

    const videotrigger = useRef(null);

    useEffect(() =>{
        const videotriggeranimation = document.querySelectorAll(".videoanimation")
        if(videotrigger.current != null){
        const videoanimation = gsap.fromTo(videotriggeranimation,
            {y:0},{y:50,
            scrollTrigger:
            {
            trigger: videotrigger.current,
            markers: {startColor: "green", endColor: "red", fontSize: "12px"},
            start:"top top",
            end:"bottom top",
        },});
    }
        }, []);

    return(
    <div className="flex flex-col px-4 ">
        <div>
            <div className="text-white top-0">
                <h2 className="text-[42px] md:text-[80px] lg:text-[110px] xl:text-[180px]">
                    Experiment
                </h2>
                <h2 className="text-[42px] md:text-[80px] lg:text-[110px] xl:text-[180px]">
                    Based
                </h2>
                <h2 className="text-[42px] md:text-[80px] lg:text-[110px] xl:text-[180px]">
                    Solutions
                </h2>
            </div>
        </div>

        <Controller>
            <div>
                <Scene 
                    triggerHook={0.5}
                    offset={0}
                    duration={800} 
                    pin={true}
                    indicators={true}>
                    <div className="-z-50 w-[85%] h-full">
                        <video className="videoanimation" autoPlay loop muted id="placeholdervideo" src="/placeholdervideo.mp4"></video>
                    </div>
                </Scene>
            </div>
            </Controller>

        <Slider></Slider>
    </div>
    )
}