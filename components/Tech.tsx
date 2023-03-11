

export default function Tech(){
    return(

        <div className="mx-4 lg:mx-[60px] md:mx-[40px] xl:mx-[200px]">
        {/* Tech  */}
        <div>
            <div>
                <h2 className="text-primary text-[60px] md:text-[120px] xl:text-[150px] xl:mb-[20px]">Tech</h2>
            </div>

            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-[100px]">

                {/* Web3 Development */}
                <div className="flex flex-col w-[300px] ">
                    <div className="flex items-center col-star-1 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/web3development.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Web3 <br></br> Development</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                        We provide cutting-edge development services that enable you to build web3 applications that are fast, secure, and scalable.
                        </p>
                    </div>
                </div>


                {/* Recruitment */}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-2 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/recruitment.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Recruitment</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We help you find the best talent for your project, including developers, designers, and other key team members.

                        </p>
                    </div>
                </div>

                {/* Tech Partnership*/}
                <div className="flex flex-col w-[300px]">
                    <div className="flex items-center col-star-3 space-x-5 h-[80px]">
                        <div className="bg-black rounded-[5px] w-[50px] h-[50px] flex items-center justify-center">
                            <img src="/techpartnership.svg"/>
                        </div>
                        <p className="text-primary text-[16px] xl:text-[26px] md:text-[22px] font-semibold">Tech <br></br> Partnerships</p>
                    </div>
                    <div className="ml-[70px]">
                        <p className="text-primary text-[12px] md:text-[16px] md:leading-[30px] mt-[10px]"> 
                            We connect you with industry-leading technology partners that can help you build and grow your project.
                        </p>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}


