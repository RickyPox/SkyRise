

export default function Incubation(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[150px]">
        {/* Marketing  */}
        <div>
            <div>
                <h2 className="text-primary ml-[50px] lg:ml-0 text-[20px] md:text-[45px] lg:text-[60px] xl:text-[68px] xl:mb-[20px] service_section">Marketing</h2>             
            </div>

            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 lg:space-x-10 lg:mt-[100px] mt-[30px]">
                
                {/* Branding Process */}
                <div className="flex flex-col lg:w-1/2 ml-[50px] md:ml-[120px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/branding.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_name">Branding Process</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] section_text"> 
                            Define your brand's identity, including your messaging, values, and visual identity.
                        </p>
                    </div>
                </div>

                {/* Web Design */}
                <div className="flex flex-col lg:w-1/2 ml-[50px] md:ml-[120px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/web.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_name">Web Design</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] section_text"> 
                            Provide design services that ensure your web3 application is not only functional but also visually stunning.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 lg:space-x-10 lg:mt-[100px] mt-[30px]">
                {/* Go To Market */}
                <div className="flex flex-col lg:w-1/2 ml-[50px] md:ml-[120px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/gotomarket.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_name">Go To Market</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] section_text"> 
                            Create a powerful go-to-market plan that will drive user adoption and engagement.
                        </p>
                    </div>
                </div>

                {/* Assets Development */}
                <div className="flex flex-col lg:w-1/2 ml-[50px] md:ml-[120px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/assets.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_name">Assets Development</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] section_text"> 
                            Create high-quality assets that reflect your brand's identity, including logos, graphics, and other visual elements.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}


