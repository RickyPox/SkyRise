
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
        <div className='flex flex-col mt-[400px] mx-[200px]'>
            <div className="grid grid-cols-12 gap-[20px]">
                <h1 className='text-right text-white collaborations col-span-11'>Our Reaches</h1>
            </div>
            <div className="grid grid-cols-12 gap-[20px] mt-[100px]">
                <div className="col-start-2 col-span-5 grid grid-cols-4 gap-[20px] justify-items-center">
                    {images.map((image, index) =>  (
                        <img className="h-[30px] mb-[50px]" src={image.src} />
                    ))}
                </div>
                <div className="col-start-8 col-span-4 gap-[20px]">
                    
                    <p className="text-white text-right">These are some of our previous collaborations within the web3 space.</p>
                </div>
            </div>
        </div>
    )
} 
