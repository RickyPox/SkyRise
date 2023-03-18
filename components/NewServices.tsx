
import Tech from "./Tech";
import { useEffect, useRef, useState } from 'react';
import Incubation from "./Incubation";
import Marketing from "./Marketing";

export default function NewServices(){ 

  const services = [
    { name:'Incubation', component: <Incubation/> },
    { name:'Marketing', component: <Marketing/> },
    { name:'Tech', component: <Tech/> },
  ];
  
  const [selectedService, setSelectedService] = useState({ name: "Incubation", component: <Incubation/> });
  const selectService = (service: any) => {
    setSelectedService(service);
  };
  
  return (
    <div className="flex flex-col pt-[100px]" id="services">
      <h1 className='services_title text-primary mx-4 md:mx-[75px] xl:mx-[150px] overflow-x-hidden text-[20px] md:text-[45px] lg:text-[60px] xl:text-[68px] mb-[50px]'>Our services</h1>

      {/* Bigger Screens */}
      <div className="lg:flex justify-center space-x-4 md:space-x-8  xl:space-x-[50px] mb-[40px] lg:mb-[100px] hidden">
        {services.map((service) => (
          <button
            onClick={() => selectService(service)}
            
            className={`rounded-full font-[Elza] text-[12px] w-[75px] md:w-[180px] xl:w-[300px] md:text-[26px]  xl:text-[40px] ${
              selectedService.name == service.name ? 'bg-primary text-white' : 'bg-transparent text-primary border border-primary py-[5px]'}`}
          >
            {service.name}
          </button>
        ))}
      </div>
      <div className="lg:block hidden">
        {selectedService && selectedService.component}
      </div>



      {/* Mobile */}
      <div className="block lg:hidden">

      <div className="h-screen">
        <Incubation></Incubation>
      </div>

      <div className="h-screen">
        <Marketing></Marketing>
      </div>

      <div className="h-screen">
        <Tech></Tech>
      </div>

      </div>
    </div>
  );
}


