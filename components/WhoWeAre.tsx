import Slider from "./slider";

export default function WhoWeAre(){
    return(
        <div>

        <div className="grid grid-cols-12 gap-[20px] mx-[200px] mb-[50px]">

            <div className="col-span-5">
                <h1 className="text-white mission">Who we are</h1>
                <div className="mt-[60px]">
                    <p className="text-white">
                        We are SkyRise.
                    </p><br></br>
                    <p className="text-white">
                        We help incubate your projects to reach the next level of growth. With a talented and diverse team, SkyRise can help you with a variety of needs including.
                    </p>
                    <br></br>
                    <ul className="text-white list-disc pl-[60px]">
                        <li>
                            <p>
                                Raise Capital
                            </p>
                        </li> <br></br>
                        <li>
                            <p>
                                Technical and product development
                            </p>
                        </li> <br></br>
                        <li>
                            <p>
                                Launch successful marketing campaigns
                            </p>
                        </li><br></br>
                    </ul> <br></br>
                    <p className="text-white">
                        SkyRise is helping bring the best ideas into mainstream adoption within web3.
                    </p>
                </div>
            </div>
            </div>
            <Slider></Slider>
        </div>
    )
}