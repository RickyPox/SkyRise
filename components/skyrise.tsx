import { TypeAnimation } from "react-type-animation"

export default function SkyRise(){
return(
    <div className='min-h-screen pt-[360px] flex flex-col items-center mx-4 md:mx-[75px] xl:mx-[200px]'>
        <div className="flex flex-col xl:flex-row items-start xl:items-center">
        <img src="/skyrisenamedlogo.svg" className=''></img>
        <div className="ml-[40px]">
            <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                'We Rise it',
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
        </div>
        <div className='flex justify-center'>
            <button className='text-white text-[18px]  px-[40px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px]'>Make me Rise</button>
        </div>
    </div>
)
}