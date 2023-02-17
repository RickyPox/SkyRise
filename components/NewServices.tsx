
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Growth from "./Growth";
import Identity from "./Identity";
import Tech from "./Tech";
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger)

export default function NewServices(){
  const scroller = useRef(null);
  const titletrigger =useRef(null)

  useEffect(() => {
    let servicesSet = gsap.utils.toArray('.skill-set');
    let servicesTitle = document.querySelectorAll(".services_title")
    let to = gsap.to(servicesSet, {
      xPercent: () => -100 * (servicesSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (servicesSet.length - 1),
          duration: 0.1,
          delay: 0.1,
          ease: "none"},
          invalidateOnRefresh:true,
          markers: {startColor: "green", endColor: "red", fontSize: "12px"},
          end: () => '+=' + window.innerWidth,
        
      },
    });
    
    let titleanimation = gsap.fromTo(servicesTitle,
      {x:window.innerWidth},{x:0,
      scrollTrigger:
      {
      trigger: titletrigger.current,
      scrub: 1,
      start:"top 50%",
      end:"bottom 30%",


    },});
    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className='mt-[400px] mx-4 '>
      <h1 ref={titletrigger} className='services_title text-white mx-4 xl:mx-[200px] overflow-x-hidden text-[40px] lg:text-[60px] xl:text-[68px] '>Our services</h1>
      <div className="overflow-hidden flex">
        <div className="overflow-hidden ">
          <div
            id="services"
            ref={scroller}
            className=" flex overflow-x-hidden text-white w-[500vw] m-0 relative h-screen items-start"
          >
          <section

              className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item z-50"
            >
            </section>
            <section

              className="skill-set px-12 w-screen h-full bg-black ns-horizontal-section__item z-50"
            >
              <Growth/>
            </section>
            <section

              className="skill-set px-12 w-screen h-full bg-black ns-horizontal-section__item z-50"
            >
              <Identity/>
            </section>
            <section

              className="skill-set px-12 w-screen h-full bg-black ns-horizontal-section__item z-50 "
            >
              <Tech/>
            </section>
            <section

              className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item z-50"
            >
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


