import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScaleAnim = () => {
  return (
    <div>
      <div className="flex justify-center pt-12 ">
        <div className="h-60 w-60 bg-yellow-300 flex justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [null, 1.2, 1.4, 1.5, 1],
              backgroundColor: [
                null,
                "#ffffff",
                "#ff0000",
                "#00ff00",
                "#0000ff",
              ],
            }}
            transition={{ duration: 5 }}
            className="w-20 h-20 bg-yellow-300 z-10"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScaleAnim;
