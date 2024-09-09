import React from 'react';
import { motion } from 'framer-motion';
const ButtonAnim = () => {
    return (
        <div className='flex justify-center pt-10'>
           <motion.button 
           whileHover={{scale:1.1,
            backgroundColor:"red",
            color:"white",
            borderRadius:"0%"
           }}
           whileTap={{scale:0.7}}
           transition={{duration:.5}}
           className='bg-yellow-500 py-1 px-3 rounded font-bold'>Submit</motion.button> 
        </div>
    );
};

export default ButtonAnim;