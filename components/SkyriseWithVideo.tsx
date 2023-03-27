import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function SkyRiseAndVideo(){
return(
    <div className='min-h-screen flex flex-col items-center justify-center relative'>
        {/* Desktop Video */}
        <video className="absolute -z-20 w-screen h-screen object-cover hidden md:block overflow-x-hidden brightness-50" loop={true} muted={true} autoPlay={true} playsInline={true}>
            <source src="/skyRiseVideo.mp4"/>
        </video>

        {/* Mobile Video */}
        <video className='absolute -z-20 w-screen h-screen object-cover block md:hidden brightness-50' playsInline 
    webkit-playsinline
    autoPlay={true} 
    loop  muted={true}>
            <source  src="/skyRiseVideo_mobile.mp4"/>
        </video>
            <img className="md:w-[70%] mx-4" src="/skyrisenamedlogowhite.svg" ></img>
                <div className="mt-[50px]">
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={[
                    'We Raise it',
                    1000,
                    'We Build it',
                    1000,
                    'We Grow it',
                    1000,
                    'We Brand it',
                    1000,
                    'We Accelerate it',
                    1000,
                    ]}
                    speed={40} // Custom Speed from 1-99 - Default Speed: 40
                    style={{ color:"white" }}
                    wrapper="p" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely 
                    cursor={false}
                    />
                </div>
                <motion.a 
                whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520" }}
                transition={{ duration: 0.3 }}
                href="https://calendly.com/skyriselabs" target="_blank"
                className='section_text text-secondary md:text-[18px] px-[20px] md:px-[30px] py-[15px] rounded-[20px] border-[1px] border-white mt-[120px]'>Elevate Your Vision</motion.a>
    </div>

)
}