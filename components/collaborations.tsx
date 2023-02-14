
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
    {
        src: "/svc.png",
    }
  ];

export default function Collaborations(){
    
    return(
        <div className='flex flex-col mt-[400px]'>
            <h1 className='text-center text-white collaborations'>Collaborations</h1>
            <div className="grid grid-cols-5 justify-items-center mt-[100px]">
                {images.map((image, index) =>  (
                    <img className="h-[30px] mb-[50px]" src={image.src} />
                ))}
            </div>
        </div>
    )
} 
