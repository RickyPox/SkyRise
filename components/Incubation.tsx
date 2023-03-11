

export default function Incubation(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[200px]">
        {/* Incubation  */}
        <div>
            <div>
                <h2 className="text-primary text-[60px] md:text-[120px] xl:text-[150px] xl:mb-[20px]">Incubation</h2>             
            </div>

            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-[100px]">

                {/* Web3 Strategy */}
                <div className="flex flex-col w-[300px] ">
                    <div className="flex items-center col-star-1 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/web.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Web3 <br></br> Strategy</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We help you define your project's value proposition and create a customized roadmap to guide your growth.
                        </p>
                    </div>
                </div>


                {/* Strategic Partnerships */}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-2 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/strategicpartner.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Strategic <br></br> Partnerships</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We connect you with industry-leading partners that can help you build and grow your project.
                        </p>
                    </div>
                </div>

                {/* Go-To Market */}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-3 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/gotomarket.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Go-to <br></br> Market</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We help you create a powerful go-to-market plan that will drive user adoption and engagement.
                        </p>
                    </div>
                </div>

                {/* Fundraising */}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-4 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/fundraising.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Fundraising</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We help you secure funding from strategic investors that can help fuel your growth.
                        </p>
                    </div>
                </div>

                {/* Legal Setup */}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-5 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/legalsetup.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Legal <br></br> Setup</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We help you navigate complex regulatory frameworks and ensure compliance with all relevant laws and regulations.
                        </p>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}


