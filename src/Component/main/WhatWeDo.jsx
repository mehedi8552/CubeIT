import React from "react";
import webicon from "../../assets/images/icon-1.svg";
import phoneicon from "../../assets/images/icon-2.svg";
import developmenticon from "../../assets/images/icon-3.svg";
import seoicon from "../../assets/images/icon-4.svg";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <div className=" p-10 pt-20 lg:px-60">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center pt-10 lg:pt-20 ">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 0.5,
            }}
            className="text-4xl font-bold text-gray-700"
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 0.2 },
              // ease:"easeIn",
              duration: 0.5,
            }}
            className="text-gray-700 py-5"
          >
            Duis mollis est commodo luctus nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare
            vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo
            cursus magna, vel scelerisque nisl.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 0.5,
          }}
          className="space-y-2"
        >
          <div className=" font-bold text-gray-700">
            <p className="pt-20">Web Design</p>
            <div className="w-full h-2 bg-gray-500 my-2">
              <motion.div
                whileInView={{
                  width: "89%",
                }}
                transition={{
                  duration: 3,
                }}
                className="w-2 h-2 bg-pink-400"
              ></motion.div>
            </div>
          </div>
          <div>
            <p className=" font-bold text-gray-700">Web development</p>
            <div className="w-full h-2 bg-gray-500 my-2">
              <motion.div
                whileInView={{
                  width: "89%",
                }}
                transition={{
                  duration: 2,
                }}
                className="w-2 h-2 bg-pink-400"
              ></motion.div>
            </div>
          </div>
          <div>
            <p className=" font-bold text-gray-700"> UI/UX Design</p>
            <div className="w-full h-2 bg-gray-500 my-2">
              <motion.div whileInView={{
                  width: "89%",
                }}
                transition={{
                  duration: 3,
                }} className="w-2 h-2 bg-pink-400"></motion.div>
            </div>
          </div>
          <div>
            <p className=" font-bold text-gray-700"> Marketing </p>
            <div className="w-full h-2 bg-gray-500 my-2">
              <motion.div whileInView={{
                  width: "89%",
                }}
                transition={{
                  duration: 2,
                }} className="w-2 h-2 bg-pink-400"></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* grid for icons */}
      <div className="text-center grid md:grid-cols-2 lg:grid-cols-4  gap-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "pink",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
          transition={{
            delay: 0.1,
            y: { type: "spring", stiffness: 100 },
            opacity: { duration: 0.2 },
            ease: "easeInOut",
            duration: 0.8,
          }}
          className="space-y-3 mt-2 h-full w-full bg-slate-200 p-10  rounded-md "
        >
          <img className="block ml-auto mr-auto h-12" src={webicon} alt="" />
          <h1 className="text-2xl font-bold text-gray-700">Web Design</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "pink",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
          transition={{
            delay: 0.1,
            y: { type: "spring", stiffness: 90 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 0.3,
          }}
          className="space-y-3 lg:pt-4 lg:pr-10 h-full w-full bg-slate-200 p-10  rounded-md my-2"
        >
          <img className="block ml-auto mr-auto h-12" src={phoneicon} alt="" />
          <h1 className="text-2xl font-bold text-gray-700">Mobile Design</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "pink",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 85 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 0.3,
          }}
          className="space-y-3 lg:pt-4  h-full w-full bg-slate-200 p-10  rounded-md my-2"
        >
          <img
            className="block ml-auto mr-auto h-12"
            src={developmenticon}
            alt=""
          />
          <h1 className="text-2xl text-center  font-bold text-gray-700">Developer</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "pink",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
          transition={{
            delay: 0.1,
            y: { type: "spring", stiffness: 80 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 0.3,
          }}
          className="space-y-3 lg:pt-4 lg:pr-10 h-full w-full bg-slate-200 p-10  rounded-md my-2"
        >
          <img className="block ml-auto mr-auto h-12" src={seoicon} alt="" />
          <h1 className="text-2xl font-bold text-gray-700">SEO</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
