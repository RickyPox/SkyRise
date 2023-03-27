
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Intro() {
  
  const router = useRouter();
  useEffect(() => {
    setTimeout (() =>{
      router.push("/Home");
    },2000)
  }, [])

  return (
    <div>
      <Head>
        <title>SkyRiseLabs</title>
        <link rel="icon" href="/skyriselogo.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/edg0nsn.css"/>
      </Head>
          <div className='w-screen h-screen flex' >
            <video className="w-screen h-screen object-cover" muted={true} autoPlay={true} playsInline={true}>
              <source src="/loadingvideo.mp4"/>
            </video>
          </div> 
    </div>
  )
}
