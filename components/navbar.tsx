import { Disclosure,  Transition } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const navigation = [
{ name: 'Services', href: '#services'},
{ name: 'Our Relationships', href: '#relationships'},
]

function classNames(...classes: String[]) {
return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    const [isShown,setIsShown] = useState(false);


    // Disable scroll when navbar is open
    if(isShown === true){
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    } else {
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'unset';
        }
    }

    
return (
<Disclosure as="nav">
    {({ open }) => (
    <>  
        <div className="pt-[50px] top-0 absolute w-full z-50">
        <div className="relative flex h-16 items-center justify-between mx-4 xl:mx-[150px]">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary">
                <span className="sr-only">Open main menu</span>
                {open ? (
                <XMarkIcon className="block h-[50px] w-[50px] z-50" aria-hidden="true" onClick={() => setIsShown(!isShown)} />
                ) : (
                <Bars3Icon className="block h-[50px] w-[50px]" aria-hidden="true" onClick={() => setIsShown(!isShown)} />
                )}
            </Disclosure.Button> */}


            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
            <div className="flex flex-shrink-0 items-center">

                <img
                className="hidden h-8 w-auto md:block"
                src="/skyriselogo.svg"
                alt="SkyRise"
                />
            </div>
            <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-[50px]">
                {navigation.map((item) => (
                    <a 
                    key={item.name}
                    href={item.href}
                    className='font-[Elza] text-primary text-[16px] py-[10px] px-[20px] rounded-xl hover:bg-primary hover:text-secondary transition-all duration-300'
                    >
                    {item.name}
                    </a>
                ))}
                </div>
            </div>
            <div className='md:block hidden'>   
                <a href="#contacts" className='font-[Elza] text-primary text-[16px] py-[10px] px-[20px] rounded-xl hover:bg-primary hover:text-secondary transition-all duration-300'>Contact Us</a>
            </div>   
            </div>
        
        </div>
        </div>
       {/*  <Transition
            show={isShown}
            enter="transition-all duration-75"
            enterFrom="scale-0"
            enterTo=" scale-100"
            leave="transition-all duration-150"
            leaveFrom=" scale-100"
            leaveTo="scale-0">
                
                <Disclosure.Panel className="md:hidden w-screen h-screen absolute pt-[50px] backdrop-blur-3xl">
        <div className="flex flex-col space-y-[100px] px-2 pt-2 pb-3 justify-start items-center h-screen ">
            <div className='flex'>
            <img
                className="block h-[48px] w-auto md:hidden"
                src="/skyriselogo.svg"
                alt="SkyRise"
                />
            </div>
            {navigation.map((item) => (
            <Disclosure.Button
                onClick={() => setIsShown(!isShown)}
                key={item.name}
                as="a"
                href={item.href}
                className='font-[Elza] text-primary text-[32px]'
            >
                {item.name}
                
            </Disclosure.Button>
            ))}
            <Disclosure.Button>
            <div className='md:hidden block'>   
                <a
                    onClick={() => setIsShown(!isShown)}
                    href="#contacts" className='font-[Elza] text-primary text-[32px]'>Contact Us</a>
            </div>
            </Disclosure.Button>
        </div>
        </Disclosure.Panel>

            </Transition> */}
    </>
    
    )}
    
</Disclosure>
)
}
