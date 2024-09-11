import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import {motion} from "framer-motion"
import { HiOutlineXMark } from "react-icons/hi2";
const DropdownMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ismenu, setIsMenu] = useState(true);
  const handleToggle = () => {
    setIsMenu(!ismenu);
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="h-fit w-full bg-pink-200 flex justify-between py-4 px-10 lg:px-60">
      <div>
        <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }} className="text-3xl font-bold text-gray-700">CubeIT</motion.h1>
      </div>
      <div className="hidden md:flex">
        <motion.ul initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, x: { type: "spring", stiffness: 100 }, opacity: { duration: 0.1 }, ease: "easeIn", duration: 0.5 }} className="flex text-gray-700 py-3">
          <li>
            <a className="mr-5 font-bold" href="">
              Home
            </a>
          </li>
          <li>
            <a className="mr-5 font-bold" href="">
              Service
            </a>
          </li>
          <li>
            <a className="mr-5 font-bold" href="">
              About Us
            </a>
          </li>
          <li>
            <a className="mr-5 font-bold" href="">
              Contact
            </a>
          </li>
        </motion.ul>
      </div>
      <div className="md:hidden relative">
        <button
          onClick={handleToggle}
          class="inline-flex items-center px-4 py-2  text-sm font-medium text-gray-700 rounded-lg hover:bg-pink-300"
        >
         { ismenu ? <RiMenu2Fill  className="h-6 w-6" /> : <HiOutlineXMark  className="h-6 w-6" />} 
        </button>
      </div>
      {isExpanded && (
        <div className="absolute z-50 top-16 right-0 w-48 bg-white rounded-md shadow-md py-2">
          <a
            href=""
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href=""
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Service
          </a>
          <a
            href=""
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            About Us
          </a>
          <a
            href=""
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default DropdownMenu;
