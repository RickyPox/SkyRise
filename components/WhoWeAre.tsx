import Slider from "./slider";

export default function WhoWeAre(){
    return(
        <div>

        <div className="flex flex-col lg:flex-row space-y-[20px] lg:space-y-[0px] lg:space-x-[20px] mx-4 md:mx-[75px] xl:mx-[200px] mb-[50px]">

            <div>
                <h1 className="text-white mission text-[40px] lg:text-[60px] xl:text-[68px]">Who we are</h1>
                <div className="mt-[30px]">
                    <p className="text-white text-[16px] lg:text-[22px] 2xl:text-[26px] ">
                        We are SkyRise.
                    </p><br></br>
                    <p className="text-white text-[16px] lg:text-[22px] 2xl:text-[26px]">
                        We help incubate your projects to reach the next level of growth. With a talented and diverse team, SkyRise can help you with a variety of needs including.
                    </p>
                    <br></br>
                    <ul className="text-white list-disc pl-[30px] text-[16px] lg:text-[22px] 2xl:text-[26px]">
                        <li>
                            <p>
                                Raise Capital
                            </p>
                        </li> 
                        <li>
                            <p>
                                Technical and product development
                            </p>
                        </li> 
                        <li>
                            <p>
                                Launch successful marketing campaigns
                            </p>
                        </li>
                    </ul> <br></br>
                    <p className="text-white text-[16px] lg:text-[22px] 2xl:text-[26px]">
                        SkyRise is helping bring the best ideas into mainstream adoption within web3.
                    </p>
                </div>
            </div>
                <div className="w-full aspect-video bg-gray-100"></div>
            </div>
            <Slider></Slider>
        </div>
    )
}