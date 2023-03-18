

export default function Incubation(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[150px]">
        {/* Incubation  */}
        <div>
            <div>
                <h2 className="text-primary text-[20px] ml-[50px] md:ml-[120px] lg:ml-0 md:text-[45px] lg:text-[120px] xl:text-[150px] xl:mb-[20px] service_section">Incubation</h2>             
            </div>

            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 lg:space-x-5 lg:mt-[100px] mt-[30px]">
                
                {/* Web3 Strategy */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/web.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Web3 Strategy</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc "> 
                            Define your project's value proposition.
                        </p>
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Create a customized roadmap to guide your growth.
                        </p>
                    </div>
                </div>

                {/* Strategic Partnerships */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/strategicpartner.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Strategic Partnerships</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Connect with industry leaders.
                        </p>
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Collaborate and propel your growth.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 lg:space-x-5 lg:mt-[100px] mt-[30px]">
                {/* Fundraising */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/fundraising.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Fundraising</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Secure funds from premier investors.
                        </p>
                    </div>
                </div>

                {/* Legal Setup */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/legalsetup.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Legal Setup</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Navigate complex regulatory frameworks.
                        </p>
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Register entity.
                        </p>
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Ensure compliance with all relevant laws and regulations.
                        </p>
                    </div>
                </div>




            </div>
        </div>
        </div>
    )
}


