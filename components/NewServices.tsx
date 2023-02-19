
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';
import Growth from "./Growth";
import Identity from "./Identity";
import Tech from "./Tech";
import { useEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);





export default function NewServices(){
  const titletrigger =useRef(null)
  
  useEffect(() => {
    let servicesTitle = document.querySelectorAll(".services_title")

    let titleanimation = gsap.fromTo(servicesTitle,
      {x:window.innerWidth},{x:0,
      scrollTrigger:
      {
      trigger: titletrigger.current,
      scrub: 1,
      start:"top 50%",
      end:"bottom 30%",
    },});
  }, []);

  const services = [
    { name:'Growth', component: <Growth/> },
    { name:'Identity', component: <Identity/> },
    { name:'Tech', component: <Tech/> },
  ];
  
  type services= {
    name: string; 
    component: JSX.Element;
  }
  
  const [selectedService, setSelectedService] = useState<{name: null | string, component: null | JSX.Element}>({ name: null, component: null });

  const selectService = (service: services) => {
    setSelectedService(service);
  };
  

  return (
    <div className="flex flex-col">
      <div className="flex justify-center space-x-4">

        {services.map((service) => (
          <button
            onClick={() => selectService(service)}
            
            className={`px-4 py-2 rounded ${
              selectedService.name == service.name ? 'bg-blue-500 text-white' : 'bg-black text-white' }`}
          >
            {service.name}
          </button>
        ))}
      </div>
      {selectedService && selectedService.component}
    </div>
  );
}


