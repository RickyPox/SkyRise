
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Controller, Scene } from "react-scrollmagic";
import Growth from "./Growth";
import Identity from "./Identity";
import Tech from "./Tech";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function NewServices(){
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        pin: true,
        markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      },
      x: -500,
      duration: 2,
    });
  }, []);

  return (
    <div ref={ref}>
      <Growth></Growth>
    </div>
  );
}


