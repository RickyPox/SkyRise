

export default function Identity(){
    return(
    <div>
        <div>
        {/* Identity  */}
        <div className="grid grid-cols-12 gap-[20px]">
            <div className="col-start-2 col-span-10">
            <h2 className="text-white">Identity</h2>
            <p className="text-white -mt-[50px]">Identity is aimed to make a distinguishable and remarkable brands</p>
            </div>

            {/* Branding Process */}
            <div className="col-start-2 col-span-4 flex items-start mt-[70px] ">
                <div className="p-[12px] rounded-[7px] bg-white"> 
                    <img  src="/branding.svg" />
                </div>
                <div className="ml-[20px]">
                <p className="text-white font-semibold">Branding Process</p>
                <p className="text-white text-[16px] leading-[30px] mt-[10px]"> Strategic introductions to ecosystem projects <br></br>
                    Personalized series of branding workshops <br></br>
                    Consumer deep dive <br></br>
                    Personalized Color scheme, Typography, Moodboard concepts creation
                    </p>
                </div>
            </div>

            {/* WEB DESIGN */}
            <div className="col-start-7 col-span-4 flex items-start mt-[70px] ">
                <div className="p-[12px] rounded-[7px] bg-white"> 
                    <img  src="/web.svg" />
                </div>
                <div className="ml-[20px]">
                <p className="text-white font-semibold">Web Design</p>
                <p className="text-white text-[16px] leading-[30px] mt-[10px]"> 
                    Competitive Analysis <br></br>
                    Specifications consultation <br></br>
                    UI/UX research <br></br>
                    Wireframing and prototyping <br></br>
                    Website Development

                </p>
                </div>
            </div>

            {/* ASSETS DEVELOPMENTS */}
            <div className="col-start-2 col-span-4 flex items-start mt-[70px] ">
                <div className="p-[12px] rounded-[7px] bg-white"> 
                    <img  src="/legalsetup.svg" />
                </div>
                <div className="ml-[20px]">
                <p className="text-white font-semibold">Assets Development</p>
                <p className="text-white text-[16px] leading-[30px] mt-[10px]"> 
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


