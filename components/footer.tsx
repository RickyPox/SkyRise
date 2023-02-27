import {motion} from "framer-motion"


export default function Footer(){
    
    return(
        <div className='flex flex-col mt-[300px]  bg-primary py-[100px]'>
            <div className="mx-4 md:mx-[75px] xl:mx-[200px]">
                <h1 className='text-secondary contact text-[40px] lg:text-[60px] xl:text-[68px]'>Contact</h1>
                <p className='text-secondary text-[16px] lg:text-[22px] 2xl:text-[26px]'>  In order to contact us or schedule a meet, fill our form.</p>
                <div className='flex '>
                    <motion.button 
                    whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520"}}
                    transition={{ duration: 0.3 }}
                    className='text-secondary text-[18px] px-[40px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px]'>Guide me</motion.button>
                </div>
            </div>
        </div>
    )
} 
