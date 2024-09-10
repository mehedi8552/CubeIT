import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/hero-banner.jpg";
import shape from "../../assets/images/hero-shape.svg";
const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-10 bg-gray-100 p-10 lg:px-60 ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 0.1 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="relative"
      >
        <img
          className="w-fit h-fit object-cover rounded-full "
          src={image}
          alt=""
        />
        <img
          className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
          src={shape}
          alt=""
        />
      </motion.div>
      <div className="text-center md:text-left  flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 0.9,
          }}
          className="text-4xl font-bold text-gray-700"
        >
          I'm User Interface Designer & Developer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 0.5,
          }}
          className="text-gray-700 py-5"
        >
          Hello! I'm Julia, a freelance user interface designer & developer
          based in London. I’m very passionate about the work that I do.
        </motion.p>
        <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0,  }}
                    transition={{
                      delay: 0.3,
                      x: { type: "spring", stiffness: 100 },
                      opacity: { duration: 0.2 },
                      ease: "easeIn",
                      duration: 0.5,
                    }}
          className="pt-10"
        >
          <a
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-2 rounded-md"
            href="#"
          >
            See My Works
          </a>

          <a
            className="bg-white text-blue-500 py-3 px-2  rounded-md hover:bg-blue-700 border hover:text-white border-blue-500 font-bold ml-5"
            href="#"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
