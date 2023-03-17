import {motion} from "framer-motion"


export default function Footer(){
    return(
        <div className='grid grid-cols-2 grid-rows-3 mt-[300px] bg-primary py-[100px] px-4 md:px-[75px] xl:px-[200px]' id="contacts">
                <div className="row-start-1">
                    <h1 className='text-secondary contact text-[40px] lg:text-[60px] xl:text-[68px]'>Contact</h1>
                </div>
                <div className="row-start-2">
                    <p className='text-secondary text-[16px] lg:text-[22px] 2xl:text-[26px]'>  In order to contact us or schedule a meet, fill our form.</p>
                </div>
                <div className='flex space-x-5 row-start-3'>
                    <motion.button 
                    whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520"}}
                    transition={{ duration: 0.3 }}
                    className='text-secondary text-[18px] px-[40px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px]'>Contact Us</motion.button>

                    <motion.button 
                    whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520"}}
                    transition={{ duration: 0.3 }}
                    className='text-secondary text-[18px] px-[40px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px]'>Schedule a Meeting</motion.button>
                </div>
            <div className="col-start-2 row-start-2 text-center">
                <p className='text-secondary text-[16px] lg:text-[22px] 2xl:text-[26px]'>You can also find us on:</p>
            </div>
            <div className="flex flex-row justify-evenly row-start-3">
                <img src="/twitter.svg" className="w-[50px] h-[50px]"/>
                <img src="/discord.svg" className="w-[50px] h-[50px]"/>
            </div>
        </div>
    )
} 
