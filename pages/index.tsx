import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Mouse from '../components/mouse'
import Navbar from '../components/navbar'
import NewServices from '../components/NewServices'
import SkyRise from '../components/skyrise'
import { useEffect, useState } from 'react'
import About from '../components/about'
import Slider from '../components/slider'
import {motion} from "framer-motion"

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoading (true)
    setTimeout (() =>{
      setLoading(false)
      setLoaded(true)
    },3000)
  }, [])



  
  return (
    <div>
      <Head>
        <title>SkyRiseLabs</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/edg0nsn.css"/>
      </Head>
      {
      
      loading && (

          <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          transition={{ duration: 1.5, ease:"easeOut" }}
          className='w-screen h-screen flex' >
            <video className="w-screen h-screen object-cover" autoPlay muted id="LoadVideo" src="/loadingvideo.mp4"></video>
          </motion.div> )
}
      
{loaded && (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          transition={{ duration: 1.5, ease:"easeOut" }}
      >
      <Navbar></Navbar>
      <SkyRise></SkyRise>
      <About></About>
      <Slider></Slider>
      <NewServices></NewServices>
      <Footer></Footer>
      <div className='hidden md:block'>
        <Mouse></Mouse>
      </div>
      </motion.div>
)
    }
    </div>
  )
}
export default Home
