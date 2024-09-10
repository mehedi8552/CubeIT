import React from "react";
import webicon from "../../assets/images/icon-1.svg";
import phoneicon from "../../assets/images/icon-2.svg";
import developmenticon from "../../assets/images/icon-3.svg";
import seoicon from "../../assets/images/icon-4.svg";

const WhatWeDo = () => {
  return (
    <div className=" p-10 pt-20 lg:px-60 ">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center md:pt-20">
          <h1 className="text-4xl font-bold text-gray-700">What We Do</h1>
          <p className="text-gray-700 py-5">
            Duis mollis est commodo luctus nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare
            vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo
            cursus magna, vel scelerisque nisl.
          </p>
        </div>
        <div className="space-y-2">
          <div >
            <p className="pt-20">Web Design</p>
            <div className="w-full h-1 bg-black">
              <div className="w-5/6 h-1 bg-yellow-300"></div>
            </div>
          </div>
          <div>
            <p>Web development</p>
            <div className="w-full h-1 bg-black">
              <div className="w-5/6 h-1 bg-yellow-300"></div>
            </div>
          </div>
          <div>
            <p> UI/UX Design</p>
            <div className="w-full h-1 bg-black">
              <div className="w-5/6 h-1 bg-yellow-300"></div>
            </div>
          </div>
          <div>
            <p> Marketing </p>
            <div className="w-full h-1 bg-black">
              <div className="w-5/6 h-1 bg-yellow-300"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-5 md:flex  py-20">
        <div className="space-y-3 md:pt-4 md:pr-10">
          <img className="block ml-auto mr-auto h-12" src={webicon} alt="" />
          <h1>Web Design</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </div>
        <div className="space-y-3 md:px-10">
          <img className="block ml-auto mr-auto h-12" src={phoneicon} alt="" />
          <h1>Mobile Design</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </div>
        <div className="space-y-3 md:px-10">
          <img className="block ml-auto mr-auto h-12" src={developmenticon} alt="" />
          <h1>Development</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </div>
        <div className="space-y-3 md:pl-10">
          <img className="block ml-auto mr-auto h-12" src={seoicon} alt="" />
          <h1>SEO</h1>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Cras justo cum sociis natoque magnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
