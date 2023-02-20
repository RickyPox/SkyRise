

export default function Identity(){
    return(

        <div className="mx-4 xl:mx-[200px]">
        {/* IDENTITY  */}
        <div>
            <div>
                <h2 className="text-white text-[60px] md:text-[120px] xl:text-[150px] xl:mb-[20px]">Identity</h2>
                <p className="text-white md:-mt-[50px] text-[12px] md:text-[22px] ">Identity is aimed to make a distinguishable and remarkable brands</p>
            </div>

            <div className="md:flex md:space-x-[20px]">
                {/* Branding Process  */}
                <div className="flex items-start mt-[50px] md:w-1/2">
                    <div className="p-[12px] rounded-[7px] bg-white"> 
                        <img className="max-w-none"  src="/branding.svg" />
                    </div>
                    <div className="ml-[20px]">
                    <p className="text-white text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Branding Process</p>
                    <p className="text-white text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                        Personalized series of branding workshops <br></br>
                        Consumer deep dive <br></br>
                        Personalized Color scheme, Typography, Moodboard concepts creation
                    </p>
                    </div>
                </div>

                {/* Web Design */}
                <div className="flex items-start mt-[50px] md:w-1/2 ">
                    <div className="p-[12px] rounded-[7px] bg-white"> 
                        <img  src="/web.svg" />
                    </div>
                    <div className="ml-[20px]">
                    <p className="text-white text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Web Design</p>
                    <p className="text-white text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                        Competitive Analysis <br></br>
                        Specifications consultation <br></br>
                        UI/UX research <br></br>
                        Wireframing and prototyping <br></br>
                        Website Development
                    </p>
                    </div>
                </div>
            </div>

            {/* Assets Development */}
            <div className="md:flex md:space-x-[20px]">
                <div className="flex items-start mt-[50px] md:w-1/2">
                    <div className="p-[12px] rounded-[7px] bg-white"> 
                        <img  src="/assets.svg" />
                    </div>
                    <div className="ml-[20px]">
                    <p className="text-white text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Assets Development</p>
                    <p className="text-white text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                        Personalized Branding Book <br></br>
                        Personalized Brand Voice Book <br></br>
                        Social media assets <br></br>
                        Design Templates
                    </p>
                    </div>
                </div>
            </div>

            

        </div>
        </div>
    )
}


