import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Mouse from '../components/mouse'
import Navbar from '../components/navbar'
import SkyRise from '../components/skyrise'
import { useEffect, useState } from 'react'
import Video from '../components/video'
import Slider from '../components/slider'
import {motion} from "framer-motion"
import Incubation from '../components/Incubation'
import Marketing from '../components/Marketing'
import Tech from '../components/Tech'
import Services from '../components/Services'
import SliderMobile from '../components/slidermobile'

export default function Home() {
return (
    <div>
        <Head>
            <title>SkyRiseLabs</title>
            <link rel="icon" href="/skyriselogo.svg" />
            <link rel="stylesheet" href="https://use.typekit.net/edg0nsn.css"/>
        </Head>
        <Navbar></Navbar>
        {/* Desktop */}
        <div className=' hidden md:block'>
            <SkyRise/>
            <Video/>
            <Slider/>
            <Services/>
            <Footer/>
            
        </div>    

        {/* Mobile */}
        <div className="flex flex-col md:hidden scroll-snap-container">
            <section className='h-screen'>
                <SkyRise/>
            </section>

            <section className='h-screen'>
                <Video/>
            </section>
            <SliderMobile/>
            <section className="h-screen flex items-center">
                <div>
                    <h1 className='ourServices text-primary mx-4 md:mx-[75px] overflow-x-hidden text-[20px] md:text-[45px] mb-[50px] service_section'>Our services</h1>
                    <Incubation/>
                </div>
            </section>

            <section className="h-screen flex items-center">
                <Marketing/>
            </section>

            <section className="h-screen flex items-center">
                <Tech/>
            </section>

            <section>
                <Footer/>
            </section>

        </div>
        <div className='mouse'><Mouse></Mouse></div>
    </div>
)
}
