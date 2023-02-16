import { TypeAnimation } from "react-type-animation"

export default function SkyRise(){
return(
    <div className='min-h-screen pt-[360px] flex flex-col items-center mx-[200px]'>
        <div className="flex items-center">
        <img src="/skyrisenamedlogo.svg" className=''></img>
        <div className="ml-[40px]">
            <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                'We Build',
                1000,
                'We Rise',
                1000,
                'We Brand',
                1000,
                'We Solve',
                1000,
                ]}
                speed={40} // Custom Speed from 1-99 - Default Speed: 40
                style={{ color:"white" }}
                wrapper="p" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely 
                />
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='text-white text-[26px] p-[10px] rounded-[20px] border-[1px] border-white mt-[30px]'>Make me Rise</button>
        </div>
    </div>
)
}