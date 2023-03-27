
import Head from 'next/head'
import Footer from '../components/footer'
import Cursor from '../components/Cursor'
import Navbar from '../components/navbar'
import SkyRise from '../components/skyrise'
import Video from '../components/video'
import Slider from '../components/slider'
import Incubation from '../components/Incubation'
import Marketing from '../components/Marketing'
import Tech from '../components/Tech'
import Services from '../components/Services'
import SliderMobile from '../components/slidermobile'
import SkyRiseAndVideo from '../components/SkyriseWithVideo'
import MoreServices from '../components/MoreServices'

export default function Home() {
return (
    <div>
        <Head>
            <title>SkyRiseLabs</title>
            <link rel="icon" href="/skyriselogo.svg" />
            <link rel="stylesheet" href="https://use.typekit.net/edg0nsn.css"/>
        </Head>
        <div className='hidden'>
            <Navbar></Navbar>
        </div>
        {/* Desktop */}
        <div className=' hidden md:block'>
            <SkyRiseAndVideo/>
            <Slider/>
            <Services/>
            <Footer/>
            
        </div>    

        {/* Mobile */}
        <div className="flex flex-col md:hidden space-y-[50px]">
            <SkyRiseAndVideo/>

            <SliderMobile/>
            
                <h1 className='ourServices text-primary mx-4 md:mx-[75px] overflow-x-hidden text-[20px] md:text-[45px] service_section'>Our services</h1>
                <div className='flex flex-col space-y-[100px]'>
                    <Incubation/>
                    <Marketing/>
                    <Tech/>
                    <MoreServices/>
                </div>

            <Footer/>

        </div>
        <div className='mouse'><Cursor></Cursor></div>
    </div>
)
}
