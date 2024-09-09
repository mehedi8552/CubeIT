import { animate, motion } from 'framer-motion';
import { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className='flex justify-center'>
        <div>


      <button className='bg-green-300 w-fit px-2 mt-6'
       onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <ul className='bg-green-300 w-fit py-5 px-10'>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </motion.div>
      </div>
    </div>
  );
}
export default DropdownMenu;