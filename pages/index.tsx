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


const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  /* useEffect(() => {
    setLoading (true)
    setTimeout (() =>{
      setLoading(false)
    },3000)
  }, []) */



  
  return (
    <div>

      <Head>
        <title>SkyRiseLabs</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/edg0nsn.css"/>
      </Head>
      {
      loading ? 
      <div className='w-screen h-screen flex' >
        <video className="w-screen h-screen" autoPlay muted id="LoadVideo" src="/loadingvideo.mp4"></video>
      </div>
    
      :

      <div>
      <Navbar></Navbar>
      <SkyRise></SkyRise>
      <About></About>
      <Slider></Slider>
      <NewServices></NewServices>
      <Footer></Footer>
      <div className='hidden md:block'>
        <Mouse></Mouse>
      </div>
      </div>
    }
      


    </div>
  )
}

export default Home
