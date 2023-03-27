
import Tech from "./Tech";
import { useEffect, useRef, useState } from 'react';
import Incubation from "./Incubation";
import Marketing from "./Marketing";
import MoreServices from "./MoreServices";

export default function Services(){ 

  const services = [
    { name:'Incubation', component: <Incubation/> },
    { name:'Marketing', component: <Marketing/> },
    { name:'Tech', component: <Tech/> },
    { name:'More', component: <MoreServices/> },
  ];
  
  const [selectedService, setSelectedService] = useState({ name: "Incubation", component: <Incubation/> });
  const selectService = (service: any) => {
    setSelectedService(service);
  };
  
  return (
    <div className="flex flex-col pt-[100px]" id="services">
      <h1 className='text-primary mx-4 md:mx-[75px] xl:mx-[150px] overflow-x-hidden md:text-[65px] lg:text-[85px] mb-[50px] section_title'>Our services</h1>

      {/* Bigger Screens */}
      <div className="md:flex justify-center space-x-4 md:space-x-8  xl:space-x-[50px] mb-[40px] lg:mb-[50px] hidden">
        {services.map((service) => (
          <button
            onClick={() => selectService(service)}
            
            className={`rounded-[20px] font-[Elza] text-[12px] w-[75px] md:w-[180px] lg:w-[260px] xl:w-[300px] md:text-[26px]  xl:text-[40px] px-[20px] md:px-[30px] py-[15px] ${
              selectedService.name == service.name ? 'bg-primary text-secondary' : 'bg-transparent text-primary border border-primary py-[5px] hover:bg-primary hover:text-secondary transition-all duration-300'}`}
          >
            {service.name}
          </button>
        ))}
      </div>
      <div className="md:block hidden">
        {selectedService && selectedService.component}
      </div>

    </div>
  );
}


