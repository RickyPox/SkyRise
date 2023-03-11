

export default function Branding(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[200px]">
        {/* Branding  */}
        <div>
            <div>
                <h2 className="text-primary text-[60px] md:text-[120px] xl:text-[150px] xl:mb-[20px]">Branding</h2>
            </div>

            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-[100px]">

                {/* Branding Process */}
                <div className="flex flex-col w-[300px] ">
                    <div className="flex items-center col-star-1 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/branding.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Branding <br></br> Process</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We help you define your brand's identity, including your messaging, values, and visual identity.
                        </p>
                    </div>
                </div>


                {/* Web Design */}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-2 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/web.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Web <br></br> Design</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We provide design services that ensure your web3 application is not only functional but also visually stunning.
                        </p>
                    </div>
                </div>

                {/* Assets Development */}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-3 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/assets.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Assets <br></br> Development</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We create high-quality assets that reflect your brand's identity, including logos, graphics, and other visual elements.
                        </p>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}


