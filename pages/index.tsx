import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Collaborations from '../components/collaborations'
import Contact from '../components/contact'
import Mouse from '../components/mouse'
import Navbar from '../components/navbar'
import NewServices from '../components/NewServices'
import WhoWeAre from '../components/WhoWeAre'

import SkyRise from '../components/skyrise'

const Home: NextPage = () => {
  return (
    <div className='my-[100px]'>
      <Head>
        <title>SkyRiseLabs</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/edg0nsn.css"/>
      </Head>
      <Navbar></Navbar>
      <SkyRise></SkyRise>
      <WhoWeAre></WhoWeAre>
      <NewServices></NewServices>
      <Collaborations></Collaborations>
      <Contact></Contact>
      <Mouse></Mouse>
    </div>
  )
}

export default Home