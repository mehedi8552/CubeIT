import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import projectData from "./ProjectMap";
const Project = () => {
  return (
    <div className="px-10 md:px-60 space-y-5 mb-4">
      <h1 className="text-4xl font-bold text-gray-700">Latest Projects</h1>
      <div className="md:flex justify-between space-y-3">
        <p className="text-gray-700 py-2 " >Check out some of my latest projects with creative ideas.</p>
        <button className="bg-white text-blue-500 py-3 px-4 rounded-md hover:bg-blue-700 border-2 hover:text-white border-blue-500 font-bold md:ml-5 mt-14"  href="">See All Project</button>
      </div>
      <div>
     {
        projectData.map((item,i)=>(
            <div className="h-full w-full grid md:grid-cols-2 gap-8 bg-slate-100 px-10 my-8">
            <div className="space-y-2" key={i}>
              <h1 className="uppercase font-bold text-gray-500 pt-4">{item.name}</h1>
              <p className="text-4xl font-bold text-gray-700">{item.title}</p>
              <p className="text-gray-700">
              {item.des}
              </p>
              <div className="flex py-3">
              <button className="text-gray-700 font-bold " href="#">See Project</button>
              <FaArrowRight className="text-gray-700 mt-1 ml-1" />
              </div>
              
            </div>
            <div>
                <img src={item.image} alt="" />
            </div>
            </div>
        ))
     }

     
      </div>
    </div>
  );
};

export default Project;
