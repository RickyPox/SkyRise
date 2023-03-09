import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";


export default function WhoWeAre(){
return(
    <div className="relative overflow-x-hidden">
        <div className="absolute left-0 top-0 right-0 text-primary text-[40px] md:text-[80px] lg:text-[100px] xl:text-[150px] z-30 mx-auto w-4/5">
            <h2>
                Experiment
            </h2>
            <h2>
                Based
            </h2>
            <h2>
                Solutions
            </h2>
        </div>
        <Controller>
                <Scene
                triggerHook={0}
                offset={-50}
                duration={"100%"}
                pin={{ pushFollowers:true }}
                indicators={true}
                >
                    <Timeline
                    target={
                        <video controls autoPlay loop muted id="skyRiseVideo" src="/skyRiseVideo.mp4"/>
                        }>
                    <Tween from={{ width:"80%", x:200, className:"null pt-[150px] relative" }} to={{width:"100%", x:0, className:"active pt-[150px] relative"}}/>
                    </Timeline>
                    </Scene>
                </Controller>
</div>
)
}