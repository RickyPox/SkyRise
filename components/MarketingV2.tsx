

export default function MarketingV2(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[150px]">
        {/* Incubation  */}
        <div>
            <div>
                <h2 className="text-primary text-[60px] md:text-[120px] xl:text-[150px] xl:mb-[20px]">Marketing</h2>             
            </div>

            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 md:space-x-5 lg:mt-[100px] mt-[30px]">
                
                {/* Branding Process */}
                <div className="flex flex-col lg:lg:w-[300px] w-full">
                    <div className="flex items-center col-star-1 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/web.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Branding <br></br> Process</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Define your brand's identity, including your messaging, values, and visual identity.
                        </p>
                    </div>
                </div>


                {/* Web Design */}
                <div className="flex flex-col lg:lg:w-[300px] w-full">
                    <div className="flex items-center col-star-2 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/strategicpartner.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Web <br></br> Design</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Provide design services that ensure your web3 application is not only functional but also visually stunning.
                        </p>
                    </div>
                </div>

                

                {/* Go To Market */}
                <div className="flex flex-col lg:w-[300px] w-full">
                    <div className="flex items-center col-star-4 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/fundraising.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Go-To <br></br> Market</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Create a powerful go-to-market plan that will drive user adoption and engagement.
                        </p>
                    </div>
                </div>

                {/* Assets Development */}
                <div className="flex flex-col lg:w-[300px] w-full">
                    <div className="flex items-center col-star-5 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/legalsetup.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Assets <br></br> Development</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            Create high-quality assets that reflect your brand's identity, including logos, graphics, and other visual elements.
                        </p>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}


