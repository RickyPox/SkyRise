import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function SkyRise(){
return(
    <div className='min-h-screen flex flex-col items-center mx-4 md:mx-[75px] xl:mx-[150px] justify-center'>
        <img className="md:w-[70%]" src="/skyrisenamedlogo.svg" ></img>
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
                style={{ color:"black" }}
                wrapper="p" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely 
                cursor={false}
                />
            </div>
            <motion.a 
            whileHover={{ backgroundColor:"#0D1520", color:"#FFFFFF" }}
            transition={{ duration: 0.3 }}
            href="https://calendly.com/skyriselabs" target="_blank"
            className='section_text  md:text-[18px] px-[20px] md:px-[30px] py-[15px] rounded-[20px] border-[1px] border-primary mt-[120px]' >Elevate Your Vision</motion.a>
        </div>

)
}