

export default function IncubationV2(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[150px]">
        {/* Incubation  */}
        <div>
            <div>
                <h2 className="text-primary text-[60px] md:text-[120px] xl:text-[150px] xl:mb-[20px]">Incubation</h2>             
            </div>

            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 md:space-x-5 lg:mt-[100px] mt-[30px]">
                
                {/* Web3 Strategy */}
                <div className="flex flex-col lg:lg:w-[300px] w-full">
                    <div className="flex items-center col-star-1 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/web.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Web3 <br></br> Strategy</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Define your project's value proposition.
                        </p>
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Create a customized roadmap to guide your growth.
                        </p>
                    </div>
                </div>


                {/* Strategic Partnerships */}
                <div className="flex flex-col lg:lg:w-[300px] w-full">
                    <div className="flex items-center col-star-2 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/strategicpartner.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Strategic <br></br> Partnerships</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Connect with industry leaders.
                        </p>
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Collaborate and propel your growth.
                        </p>
                    </div>
                </div>

                

                {/* Fundraising */}
                <div className="flex flex-col lg:w-[300px] w-full">
                    <div className="flex items-center col-star-4 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/fundraising.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Fundraising</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Secure funds from premier investors.
                        </p>
                    </div>
                </div>

                {/* Legal Setup */}
                <div className="flex flex-col lg:w-[300px] w-full">
                    <div className="flex items-center col-star-5 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/legalsetup.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Legal <br></br> Setup</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Navigate complex regulatory frameworks. 
                        </p>
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Register entity.
                        </p>
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Ensure compliance with all relevant laws and regulations.
                        </p>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}


