import { Disclosure,  Transition } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const navigation = [
{ name: 'Home', href: '#'},
{ name: 'Our Mission', href: '#'},
{ name: 'Services', href: '#'},
{ name: 'Our Reaches', href: '#'},
]

function classNames(...classes: String[]) {
return classes.filter(Boolean).join(' ')
}


export default function Example() {
    const [isShown,setIsShown] = useState(false);
return (
<Disclosure as="nav">
    {({ open }) => (
    <>
        <div className="mx-4 md:mx-[75px] xl:mx-[200px]">
        <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                <XMarkIcon className="block h-[50px] w-[50px]" aria-hidden="true" onClick={() => setIsShown(!isShown)} />
                ) : (
                <Bars3Icon className="block h-[50px] w-[50px]" aria-hidden="true" onClick={() => setIsShown(!isShown)} />
                )}
            </Disclosure.Button>


            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">

                <img
                className="hidden h-8 w-auto lg:block"
                src="/skyriselogo.svg"
                alt="SkyRise"
                />
            </div>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-[20px]">
                {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className='font-[Elza] text-white text-[16px]'
                    >
                    {item.name}
                    </a>
                ))}
                </div>
            </div>
            <div className='sm:block hidden'>   
                <a className='font-[Elza] text-white text-[16px]'>Contacts</a>
            </div>   
            </div>
        
        </div>
        </div>
        <Transition
            show={isShown}
            enter="transition-all duration-75"
            enterFrom="scale-0"
            enterTo=" scale-100"
            leave="transition-all duration-150"
            leaveFrom=" scale-100"
            leaveTo="scale-0">
                
                <Disclosure.Panel className="sm:hidden w-screen h-screen absolute">
        <div className="flex flex-col space-y-[50px] px-2 pt-2 pb-3 justify-start items-center h-screen backdrop-blur-3xl">
            <div className='flex'>
            <img
                className="block h-8 w-auto lg:hidden"
                src="/skyriselogo.svg"
                alt="SkyRise"
                />
            </div>
            {navigation.map((item) => (
            <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className='font-[Elza] text-white text-[16px]'
            >
                {item.name}
                
            </Disclosure.Button>
            ))}
            <Disclosure.Button>
            <div className='sm:hidden block'>   
                <a className='font-[Elza] text-white text-[16px]'>Contacts</a>
            </div>
            </Disclosure.Button>
        </div>
        </Disclosure.Panel>

            </Transition>
        
    </>
    )}
</Disclosure>
)
}
