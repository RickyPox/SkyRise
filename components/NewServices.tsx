
import Growth from "./Growth";
import Identity from "./Identity";
import Tech from "./Tech";
import { useEffect, useRef, useState } from 'react';

export default function NewServices(){ 

  const services = [
    { name:'Growth', component: <Growth/> },
    { name:'Identity', component: <Identity/> },
    { name:'Tech', component: <Tech/> },
  ];
  
  const [selectedService, setSelectedService] = useState({ name: "Growth", component: <Growth/> });
  const selectService = (service: any) => {
    setSelectedService(service);
  };
  
  return (
    <div className="flex flex-col mt-[100px]">
      <div></div>
      <h1 className='services_title text-white mx-[200px] overflow-x-hidden text-[40px] lg:text-[60px] xl:text-[68px] mb-[50px]'>Our services</h1>
      <div className="flex justify-center space-x-4 md:space-x-8 mb-[40px] lg:mb-[100px]">
        {services.map((service) => (
          <button
            onClick={() => selectService(service)}
            
            className={`rounded-full font-[Elza] text-[12px] w-[75px] md:text-[26px] md:w-[180px] xl:text-[] ${
              selectedService.name == service.name ? 'bg-white text-black scale-125' : 'bg-transparent text-white border border-black py-[5px]'}`}
          >
            {service.name}
          </button>
        ))}
      </div>
      {selectedService && selectedService.component}
    </div>
  );
}


