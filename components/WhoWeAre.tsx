import Slider from "./slider";

export default function WhoWeAre(){
    
    return(
        <div className="flex flex-col ">
        <div className="relative px-4">
            <div className="text-white">
                <h2 className="text-[42px]">
                    Experiment
                </h2>
                <h2 className="text-[42px]">
                    Based
                </h2>
                <h2 className="text-[42px]">
                    Solutions
                </h2>
            </div>
            <div className="absolute -z-50 right-0 top-0">
                <video className="w-[270px] aspect-video" autoPlay loop muted id="placeholdervideo" src="/placeholdervideo.mp4"></video>
            </div>
        </div>
        <Slider></Slider>
        </div>
    )
}