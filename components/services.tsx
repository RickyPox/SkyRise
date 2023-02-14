import React, { useState } from "react";
import {motion} from "framer-motion";


const services = [
  {
    id: 1,
    name: "Growth",
    description: "Strategic Partnerships/Marketing" + "\n" + 
    "Web3 Strategy" + "\n" + 
    "Legal Setup" + "\n" +  "Fundraising",
    image:"growth.svg"
  },
  {
    id: 2,
    name: "Identity",
    description: "Branding" + "\n" + 
    "Assets Development" + "\n" + 
    "Web Design"  + "\n" + " " ,
    image:"identity.svg"
  },
  {
    id: 3,
    name: "Tech",
    description: "Web3 Development" + "\n" + 
    "Recruitment" + "\n" + 
    "Tech partnerships" + "\n" + " " ,
    image:"tech.svg"
  }
];

const ServiceList = () => {
  const [expandedServiceId, setExpandedServiceId] = useState(1);

  const handleClick = (id: React.SetStateAction<number>) => {
    setExpandedServiceId(id === expandedServiceId ? 1 : id);
  };

  return (
    <div>
      <h1 className="text-center text-white services_title mt-[400px] mb-[100px]">Our Services</h1>
      <div className="grid grid-cols-12 gap-[20px]">
        {services.map((service, index) => (

          // Main Div With
          <motion.div layout 
          transition={{ duration: 0.25 }}
            key={service.id}
            className={`col-start-${
              expandedServiceId === null || expandedServiceId === service.id
                ? 2 + index * 3
                : 2 + index * 3 + (index >= expandedServiceId ? 1 : 0)
            } col-span-${
              service.id === expandedServiceId ? 4 : 3
            } h-[250px] border border-white rounded-lg flex flex-col justify-center items-center hover:bg-white  hover:text-black ${
              service.id === expandedServiceId
                ? "bg-white"
                : "bg-transparent flex justify-center items-center"
            }  ${
              service.id === expandedServiceId
                ? "text-black"
                : "text-white"}`}
            onClick={() => handleClick(service.id)}
          >
          {/* Title and image */}
            <div>
              <div className="flex items-center">
              {service.id === expandedServiceId && (
              <img className="w-[25px] h-[25px] mr-[15px]"
              src={service.image}
              alt={service.name}
              />
              )}
                <h3 className="text-[26px]" 
                  >{service.name}</h3>
              </div>

              {service.id === expandedServiceId && (
              <div className="mt-[15px] ml-[40px]">
                <ul>
                  {service.description.split("\n").map((item, index) => (
                    <li key={index} className="text-black">{item}</li>
                  ))}
                </ul>
            </div>
            )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default ServiceList;
