import {motion} from "framer-motion"


export default function Footer(){
    return(
        <div className="bg-primary h-screen relative flex items-center md:block md:h-auto text-center md:text-left justify-center">
            <div className='flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 md:mt-[300px] py-[100px] px-4 md:px-[75px] xl:px-[200px] items-center' id="contacts">
                    <div className="row-start-1">
                        <h1 className='text-secondary md:text-[45px] lg:text-[60px] xl:text-[68px] section_title'>Contact</h1>
                    </div>
                    <div className="row-start-2">
                        <p className='text-secondary section_text md:text-[18px] 2xl:text-[26px]'>  In order to contact us, schedule a meeting or send an email.</p>
                    </div>
                    
                    <div className='flex space-x-5 row-start-3'>
                        <div className="flex">
                            <motion.a 
                            whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520"}}
                            transition={{ duration: 0.3 }}
                            href="mailto: info@skyriselabs.io"
                            className='text-secondary section_text md:text-[18px] px-[20px] md:px-[30px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px] lg:mt-0'>Send An Email</motion.a>
                        </div>
                        <div className="flex">
                            <motion.a 
                            whileHover={{ backgroundColor:"#FFFFFF", color:"#0D1520"}}
                            transition={{ duration: 0.3 }}
                            href="https://calendly.com/skyriselabs" target="_blank"
                            className='text-secondary section_text md:text-[18px] px-[20px] md:px-[30px] py-[15px] rounded-[20px] border-[1px] border-white mt-[30px] lg:mt-0'>Schedule a Meeting</motion.a>
                        </div>
                    </div>
                <div className="col-start-2 row-start-2 lg:text-center md:mt-[50px] lg:mt-0">
                    <p className='text-secondary section_text md:text-[18px] 2xl:text-[26px] mt-[50px] md:mt-0'>You can also find us on:</p>
                </div>
                <div className="flex flex-row lg:justify-evenly row-start-3 mt-[30px] lg:mt-0 ">
                    <a href="https://twitter.com/SkyRiseLabs" target="_blank">
                        <img src="/twitter.svg" className="twitter md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] hover:scale-150 transition-all duration-300"/>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center py-[10px] space-y-5 absolute bottom-0 w-screen border-t-[0.5px] border-white">
                
                <svg width="30" height="21" viewBox="0 0 60 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 30.0106V41.2512H11.2498L30.005 22.5061L48.7502 41.2512H60V30.0014L29.9986 0L7.5008 22.5061L0 30.0106Z" fill="white"/>
                    <path d="M11.2507 7.50098H0V18.7517H11.2507V7.50098Z" fill="white"/>
                </svg>
                <p className="text-white text-[12px] text-center ">© SkyRise All Rights Reserved - 2023</p>
            </div>
        </div>
    )
} 
