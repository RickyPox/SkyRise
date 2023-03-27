import { motion } from "framer-motion";


export default function MoreServices(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[150px]">
        
        {/* More Services  */}
            <div className="ml-[50px] lg:ml-0">
            <div>
                <h2 className="text-primary text-[20px] md:text-[45px] lg:text-[60px] xl:text-[68px] xl:mb-[20px] service_section">More Services</h2>             
            </div>
                <div className="flex flex-col lg:w-1/2  lg:ml-0 md:space-y-[50px]">
                    <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] section_text"> 
                        We provide tailored service offerings per request. If your business needs additional services and support, please set up a meeting and we can discuss possible solutions.
                    </p>
                    <div className="flex ">
                            <motion.a 
                            whileHover={{ backgroundColor:"#0D1520", color:"#FFFFFF"}}
                            transition={{ duration: 0.3 }}
                            href="https://calendly.com/skyriselabs" target="_blank"
                            className='text-primary section_text md:text-[18px] px-[20px] md:px-[30px] py-[15px] rounded-[20px] border-[1px] border-primary mt-[30px] lg:mt-0'>Schedule a Meeting</motion.a>
                        </div>

            </div>
            </div>
        </div>
    )
}


