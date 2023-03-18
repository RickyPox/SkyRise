import {motion} from "framer-motion"


export default function Footer(){
    return(
        <div className="bg-primary">
            <div className='flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 mt-[300px]  py-[100px] px-4 md:px-[75px] xl:px-[200px] lg:items-center border-b-[0.5px] border-white' id="contacts">
                    <div className="row-start-1">
                        <h1 className='text-secondary contact text-[40px] lg:text-[60px] xl:text-[68px]'>Contact</h1>
                    </div>
                    <div className="row-start-2">
                        <p className='text-secondary text-[16px] lg:text-[22px] 2xl:text-[26px]'>  In order to contact us, schedule a meeting or send an email.</p>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row sm:space-x-5 row-start-3'>
                        <motion.button 
                        whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520"}}
                        transition={{ duration: 0.3 }}
                        className='text-secondary text-[18px] px-[20px] md:px-[40px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px] lg:mt-0'>Send An Email</motion.button>

                        <motion.button 
                        whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520"}}
                        transition={{ duration: 0.3 }}
                        className='text-secondary text-[18px] px-[20px] md:px-[40px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px] lg:mt-0'>Schedule a Meeting</motion.button>

                    </div>
                <div className="col-start-2 row-start-2 lg:text-center mt-[50px] lg:mt-0">
                    <p className='text-secondary text-[16px] lg:text-[22px] 2xl:text-[26px] mt-[50px] md:mt-0'>You can also find us on:</p>
                </div>
                <div className="flex flex-row lg:justify-evenly row-start-3 mt-[30px] lg:mt-0">
                    <img src="/twitter.svg" className="w-[50px] h-[50px]"/>
                </div>
            </div>

            <div className="flex flex-col items-center py-[10px] space-y-5">
                
                <svg width="30" height="21" viewBox="0 0 60 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 30.0106V41.2512H11.2498L30.005 22.5061L48.7502 41.2512H60V30.0014L29.9986 0L7.5008 22.5061L0 30.0106Z" fill="white"/>
                    <path d="M11.2507 7.50098H0V18.7517H11.2507V7.50098Z" fill="white"/>
                </svg>
                <p className="text-white text-[10px] text-center ">© SkyRise All Rights Reserved - 2023</p>
            </div>
        </div>
    )
} 
