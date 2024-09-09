import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
const KeyFram = () => {
  const [RemoveAnimation, SetRemoveAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => SetRemoveAnimation(true), 5000);
  });
  return (
    <div className="flex justify-center pt-10">
      <div className="h-60 w-60 bg-yellow-300 rounded-full">
        <AnimatePresence>
          {RemoveAnimation === false && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, y: 45 }}
              transition={{ duration: 5 }}
              exit={{ opacity: 0, y: 100 }}
              className="h-44 w-44 bg-white rounded-full -m-1"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KeyFram;
