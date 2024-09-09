
import React from "react";
import image from "../../assets/images/hero-banner.jpg";
import shape from "../../assets/images/hero-shape.svg";
const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 bg-gray-100 p-10 md:px-60 ">
      <div className="relative">
        <img className="w-fit h-fit object-cover rounded-full " src={image} alt="" />
        <img className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2" src={shape} alt="" />
      </div>
      <div className="text-center md:text-left  flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-700">
          I'm User Interface Designer & Developer.
        </h1>
        <p className="text-gray-700 py-5">
          Hello! I'm Julia, a freelance user interface designer & developer
          based in London. I’m very passionate about the work that I do.
        </p>
        <div className="pt-10">
          <a className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md" href="#" >
            See My Works
          </a>

          <a className="bg-white text-blue-500 py-3 px-4 rounded-md hover:bg-blue-700 border-2 hover:text-white border-blue-500 font-bold ml-5" href="#" >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
