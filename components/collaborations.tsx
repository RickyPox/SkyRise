
const images = [
    {
        src: "/cardinal.png",
    },
    {
        src: "/magicEden.png",
    },
    {
        src: "/solana.png",
    },
    {
        src: "/brave.png",
    },
    {
        src: "/svc.png",
    },

  ];

export default function Collaborations(){
    
    return(
        <div className='flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-2 lg:gap-[20px] mx-4 md:mx-[75px] xl:mx-[200px]'>
            <div className="lg:col-span-10 lg:col-start-2">
                <h1 className='text-right text-white collaborations text-[40px] lg:text-[60px] xl:text-[68px]'>Our Reaches</h1>
            </div>
            <div className="flex flex-wrap mt-[50px] justify-center space-x-[20px] lg:mt-0 lg:col-start-2 lg:col-span-5 lg:row-start-2">
                    {images.map((image, index) =>  (
                        <img className="h-[30px] mb-[50px]" src={image.src} />
                    ))}
            </div>
        </div>
    )
} 
