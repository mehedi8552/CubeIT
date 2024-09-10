import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import projectData from "./ProjectMap";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <div className="px-10 lg:px-60 space-y-5 mb-4 my-10">
      <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }} className="text-4xl font-bold text-gray-700">Latest Projects</motion.h1>
      <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }} className="md:flex justify-between space-y-3">
        <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }} className="text-gray-700 py-2 " >Check out some of my latest projects with creative ideas.</motion.p>
        <motion.button initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }} className="bg-white text-blue-500 py-3 px-4 rounded-md hover:bg-blue-700 border-2 hover:text-white border-blue-500 font-bold md:ml-5 mt-14"  href="">See All Project</motion.button>
      </motion.div>
      <div>
     {
        projectData.map((item,i)=>(
            <div className="h-full w-full grid lg:grid-cols-2 gap-8 bg-slate-100 px-10 my-8">
            <div  className="space-y-2" key={i}>
              <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }}  className="uppercase font-bold text-gray-500 pt-4">{item.name}</motion.h1>
              <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }}  className="text-4xl font-bold text-gray-700">{item.title}</motion.p>
              <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }}  className="text-gray-700">
              {item.des}
              </motion.p>
              <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }}  className="flex py-3">
              <button className="text-gray-700 font-bold " href="#">See Project</button>
              <FaArrowRight className="text-gray-700 mt-1 ml-1" />
              </motion.div>
            </div>
            <div>
                <motion.img initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }}  src={item.image} alt="" />
            </div>
            </div>
        ))
     }

     
      </div>
    </div>
  );
};

export default Project;
