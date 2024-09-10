import msglogo from "../../assets/images/icon-1.svg";
import {motion} from "framer-motion"
import React from "react";
const Contact = () => {
  return (
    <div className=" px-10 lg:px-60">
      <div className="w-fit h-fit bg-pink-100 p-10 grid lg:grid-cols-2 gap-8 my-8">
        <div className="space-y-3">
          <motion.img initial={{ opacity: 0, x: -100 }}
                      whileInView={{opacity:1,x:0}}
                      
                      transition={{
                        delay: 0.3,
                        x:{type:"spring",stiffness:100},
                        opacity:{duration:0.2},
                        ease:"easeIn",
                        duration:0.5                                                                                                                                 
                      }} className="h-14 mb-10" src={msglogo} alt="" />
          <motion.h1 initial={{ opacity: 0, x: -100 }}
                      whileInView={{opacity:1,x:0}}
                      
                      transition={{
                        delay: 0.5,
                        x:{type:"spring",stiffness:100},
                        opacity:{duration:0.2},
                        ease:"easeIn",
                        duration:0.5                                                                                                                                 
                      }} className="text-4xl font-bold text-gray-700">
            If you like what you see, let's work together.
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -100 }}
                      whileInView={{opacity:1,x:0}}
                      
                      transition={{
                        delay: 0.7,
                        x:{type:"spring",stiffness:100},
                        opacity:{duration:0.2},
                        ease:"easeIn",
                        duration:0.5                                                                                                                                 
                      }} className="text-gray-700 py-5">
            I bring rapid solutions to make the life of my clients easier. Have
            any questions? Reach out to me from this contact form and I will get
            back to you shortly.
          </motion.p>
        </div>
        <div className="space-y-4">
          <motion.input 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{opacity:1,x:0}}
          
          transition={{
            delay: 0.3,
            x:{type:"spring",stiffness:100},
            opacity:{duration:0.2},
            ease:"easeIn",
            duration:0.5                                                                                                                                 
          }}
            className="h-14 w-full rounded-md bg-white "
            placeholder=" Name*"
            type="text"
          />
          <motion.input 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{opacity:1,x:0}}
          
          transition={{
            delay: 0.3,
            x:{type:"spring",stiffness:100},
            opacity:{duration:0.2},
            ease:"easeIn",
            duration:0.5                                                                                                                                 
          }}
            className="h-14 w-full rounded-md bg-white"
            placeholder=" Email*"
            type="text"
          />
          <motion.input 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{opacity:1,x:0}}
         
          transition={{
            delay: 0.3,
            x:{type:"spring",stiffness:100},
            opacity:{duration:0.2},
            ease:"easeIn",
            duration:0.5                                                                                                                                 
          }}
            className="h-14 w-full rounded-md bg-white"
            placeholder=" Message*"
            type="text"
          />
          <motion.button 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{opacity:1,x:0}}
          whileHover={{ scale: 1.2,transition:{duration:0.3} }}
          whileTap={{ scale: 0.9,transition:{duration:0.3} }}
          transition={{
            delay: 0.3,
            x:{type:"spring",stiffness:100},
            opacity:{duration:0.2},
            ease:"easeIn",
            duration:0.5                                                                                                                                 
          }}
            className="bg-white text-pink-600 py-3 px-4 rounded-md hover:bg-pink-500 border-2 hover:text-white border-pink-500 font-bold mt-14"
            href=""
          >
            See All Project
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
