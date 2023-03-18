

export default function Tech(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[150px]">
        {/* Tech  */}
        <div>
            <div>
                <h2 className="text-primary text-[20px] ml-[50px] md:ml-[120px] lg:ml-0 md:text-[45px] lg:text-[120px] xl:text-[150px] xl:mb-[20px] service_section">Tech</h2>             
            </div>

            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 lg:space-x-5 lg:mt-[100px] mt-[30px]">
                
                {/* Web3 and Game Development */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/web3development.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Web3 and Game Development</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Provide cutting-edge development services that enable you to build web3 applications that are fast, secure, and scalable.
                        </p>
                    </div>
                </div>

                {/* Recruitment */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/recruitment.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Recruitment</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Help you find the best talent for your project, including developers, designers, and other key team members.
                        </p>
                    </div>
                </div>
                </div>
                
                <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 lg:space-x-5 lg:mt-[100px] mt-[30px]">
                {/* Tech Partnerships */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/techpartnership.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Tech Partnerships</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Connect you with industry-leading technology partners that can help you build and grow your project.
                        </p>
                    </div>
                </div>

                {/* Product Design */}
                <div className="flex flex-col lg:w-1/2 ml-[80px] md:ml-[240px] lg:ml-0">
                    <div className="flex items-center col-star-1 space-x-5 lg:h-[80px]">
                        <div className="bg-black rounded-[5px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                            <img className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px]" src="/techpartnership.svg"/>
                        </div>
                        <p className="text-primary text-[11px] md:text-[25px] font-semibold service_title">Product Design</p>
                    </div>
                    <div className="ml-[40px] md:ml-[50px] lg:ml-[70px]">
                        <p className="text-primary text-[9px] md:text-[18px] md:leading-[30px] service_desc"> 
                            Leverage our internal talent and external network to design functional and beautiful applications and products
                        </p>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}


