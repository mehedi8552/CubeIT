import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ProgressBar = () => {
    return (
        <div>
          <div className="w-full h-20 bg-black">
        <motion.div
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 5,
          }}
          className="w-1/12 h-20 bg-yellow-300"
        ></motion.div>
      </div>
      {/* -------------------- */}
      <div className="flex justify-center">
        <div className="h-20 w-full bg-black">
          <motion.div
          initial={{x:0}}
          animate={{x:"calc(100vw - 100%)"}}
          transition={{duration:5}}
          className="h-20 w-40 bg-lime-300"></motion.div>
        </div>
      </div>
      {/* -------------------- */}  
        </div>
    );
};

export default ProgressBar;