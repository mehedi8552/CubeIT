import msglogo from "../../assets/images/icon-1.svg"
import React from "react";

const Contact = () => {
  return (
    <div className=" my-8  px-10 md:px-60">
    <div className="w-fit h-fit bg-pink-100 p-20 grid md:grid-cols-2 gap-8">
      <div className="space-y-3">
        <img className="h-14 mb-10" src={msglogo} alt="" />
        <h1 className="text-4xl font-bold text-gray-700">If you like what you see, let's work together.</h1>
        <p className="text-gray-700 py-5">
          I bring rapid solutions to make the life of my clients easier. Have
          any questions? Reach out to me from this contact form and I will get
          back to you shortly.
        </p>
      </div>
      <div className="space-y-4">
        <input className="h-14 w-full rounded-md bg-white " placeholder=" Name*" type="text" />
        <input className="h-14 w-full rounded-md bg-white" placeholder=" Email*" type="text" />
        <input className="h-14 w-full rounded-md bg-white" placeholder=" Message*" type="text" />
        <button className="bg-white text-pink-600 py-3 px-4 rounded-md hover:bg-pink-500 border-2 hover:text-white border-pink-500 font-bold mt-14"  href="">See All Project</button>
        </div>
    </div>
    </div>

  );
};

export default Contact;
