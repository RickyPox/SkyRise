import Image from 'next/image'

export default function Navbar(){
return(
    <div className="grid grid-cols-12 gap-[20px] items-center navbar mx-[200px]">
        <Image src="/skyriselogo.svg" alt="skyriseLogo" width={60} height={40}/>
                <a className='text-white text-center text-[16px] col-start-5'>
                    Home
                </a>
                <a className='text-white text-center text-[16px] col-start-6'>
                    Our Mission
                </a>
                <a className='text-white text-center text-[16px] col-start-7'>
                    Services
                </a>
                <a className='text-white text-center text-[16px] col-start-8'>
                    Colaborations
                </a>
                <a className='text-white text-center text-[16px] col-start-12'>
                    Contact
                </a>
    </div>
)
}