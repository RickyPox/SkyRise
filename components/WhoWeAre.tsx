import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";


export default function WhoWeAre(){


return(
    <div className="relative">
        <div className="absolute left-0 top-0 text-primary text-[40px] md:text-[80px] lg:text-[100px] xl:text-[120px] z-30 mx-4 md:mx-[75px] xl:mx-[200px] w-4/5">
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
                duration={800}
                pin={{ pushFollowers:true }}
                indicators={true}
                >
                    <Timeline
                    target={
                        <video  className="float-right -z-50 " autoPlay loop muted id="placeholdervideo" src="/placeholdervideo.mp4"/>
                        }>
                    <Tween from={{ width:"80%" }} to={{width:"100%"}}/>
                    </Timeline>
                    </Scene>
                </Controller>
</div>
)
}