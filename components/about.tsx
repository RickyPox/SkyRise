import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";


export default function WhoWeAre(){
return(
    <div className="relative overflow-x-hidden" id="about">
        <div className="absolute left-0 top-0 right-0 text-primary text-[40px] md:text-[80px] lg:text-[100px] xl:text-[150px] z-30 mx-auto w-4/5">
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
        <Controller>
                <Scene
                triggerHook={0}
                offset={-50}
                duration={"100%"}
                pin={{ pushFollowers:true }}
                >
                    <Timeline
                    target={
                        <video controls autoPlay loop muted id="skyRiseVideo" src="/skyRiseVideo.mp4"/>
                        }>
                    <Tween from={{ width:"80%", xPercent:12, className:"null pt-[50px]" }} to={{width:"100%", xPercent:0, className:"active pt-[50px]"}}/>
                    </Timeline>
                    </Scene>
                </Controller>
</div>
)
}