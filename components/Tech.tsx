

export default function Tech(){
    return(

        <div className="mx-4 xl:mx-[200px]">
        {/* TECH  */}
        <div>
            <div>
                <h2 className="text-primary text-[60px] md:text-[120px] xl:text-[150px] xl:mb-[20px]">Tech</h2>
                <p className="text-primary md:-mt-[50px] text-[12px] md:text-[22px] ">Tech is aimed to pushing boundaries of innovation</p>
            </div>

            <div className="md:flex md:space-x-[20px]">
                {/* Web 3 Development  */}
                <div className="flex items-start mt-[50px] md:w-1/2">
                    <div className="p-[12px] rounded-[7px] bg-white"> 
                        <img className="max-w-none"  src="/web3development.svg" />
                    </div>
                    <div className="ml-[20px]">
                    <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Web 3 Development</p>
                    <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                        Custom Web3 Platform/Tooling <br></br>
                        Mint website creation <br></br>
                        Art generation support <br></br>
                        Web3 Intergrations 
                    </p>
                    </div>
                </div>

                {/* Recruitment */}
                <div className="flex items-start mt-[50px] md:w-1/2 ">
                    <div className="p-[12px] rounded-[7px] bg-white"> 
                        <img  src="/web.svg" />
                    </div>
                    <div className="ml-[20px]">
                    <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Recruitment</p>
                    <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                        Talent Scouting <br></br>
                        In-house/Outsourced
                    </p>
                    </div>
                </div>
            </div>

            {/* Tech Partnerships */}
            <div className="md:flex md:space-x-[20px]">
                <div className="flex items-start mt-[50px] md:w-1/2">
                    <div className="p-[12px] rounded-[7px] bg-white"> 
                        <img  src="/legalsetup.svg" />
                    </div>
                    <div className="ml-[20px]">
                    <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Tech Partnerships</p>
                    <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                        Introduction to other Protocols and Tech partners
                    </p>
                    </div>
                </div>
            </div>

            

        </div>
        </div>
    )
}


