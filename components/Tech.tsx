

export default function Tech(){
    return(
    <div className="mx-[200px]">
        <div>
        {/* Identity  */}
        <div className="grid grid-cols-12 gap-[20px]">
            <div className="col-start-2 col-span-10">
            <h2 className="text-white">Tech</h2>
            <p className="text-white -mt-[50px]">Tech is aimed to pushing boundaries of innovation</p>
            </div>

            {/* WEB3 DEVELOPMENT */}
            <div className="col-start-2 col-span-4 flex items-start mt-[70px] ">
                <div className="p-[12px] rounded-[7px] bg-white"> 
                    <img  src="/web3development.svg" />
                </div>
                <div className="ml-[20px]">
                <p className="text-white font-semibold">Web3 Development</p>
                <p className="text-white text-[16px] leading-[30px] mt-[10px]"> 
                    Custom Web3 Platform/Tooling <br></br>
                    Mint website creation <br></br>
                    Art generation support <br></br>
                    Web3 Intergrations 
                    </p>
                </div>
            </div>

            {/* RECRUITMENT */}
            <div className="col-start-7 col-span-4 flex items-start mt-[70px] ">
                <div className="p-[12px] rounded-[7px] bg-white"> 
                    <img  src="/recruitment.svg" />
                </div>
                <div className="ml-[20px]">
                <p className="text-white font-semibold">Recruitment</p>
                <p className="text-white text-[16px] leading-[30px] mt-[10px]"> 
                    Talent Scouting <br></br>
                    In-house/Outsourced 
                </p>
                </div>
            </div>

            {/* TECH PARTNERSHIPS */}
            <div className="col-start-2 col-span-4 flex items-start mt-[70px] ">
                <div className="p-[12px] rounded-[7px] bg-white"> 
                    <img  src="/techpartnership.svg" />
                </div>
                <div className="ml-[20px]">
                <p className="text-white font-semibold">Tech Partnerships</p>
                <p className="text-white text-[16px] leading-[30px] mt-[10px]"> 
                    Introduction to other Protocols and Tech partners
                    </p>
                </div>
            </div>


        </div>
        </div>
    </div>
    )
}


