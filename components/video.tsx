import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";


export default function Video(){
return(
    <div>
        <div className="relative overflow-x-hidden">
            <div className="absolute left-0 top-10 right-0 text-primary text-[60px] md:text-[80px] lg:text-[100px] xl:text-[150px] z-30 mx-auto w-4/5">
                <h2>
                    Building
                </h2>
                <h2>
                    In The
                </h2>
                <h2>
                    Bear
                </h2>
            </div>

            {/* Desktop Video */}
            <div className='hidden md:block overflow-x-hidden'>
            <Controller>
                    <Scene
                    triggerHook={0}
                    offset={-50}
                    duration={"100%"}
                    pin={{ pushFollowers:true }}
                    >
                        <Timeline
                        target={
                                <video autoPlay loop muted  src="/skyRiseVideo.mp4" />
                            }>
                        <Tween from={{ scale:"0.8", className:"null pt-[50px] w-screen"}} to={{scale:"1", className:"active pt-[50px] w-screen"}}/>
                        </Timeline>

                        </Scene>
                    </Controller>
                </div>
                
        </div>
        {/* Mobile Video */}
        <div className='block md:hidden'>
            <video controls autoPlay loop muted className='h-screen w-screen object-cover' src="/skyRiseVideo_mobile.mp4"/>
        </div>
    </div>
)
}