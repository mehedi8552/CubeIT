import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Example = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 100 },
        opacity: { duration: 0.2 },
        ease: "easeIn",
        duration: 0.5,
      }}
      className="flex flex-row px-4 space-x-4"
    >
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <p>Home</p>
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        Service
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={AboutUsContent}>
        About Us
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        Contact
      </FlyoutLink>
    </motion.div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative font-bold">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      {/* <h3 className="font-semibold text-center">Pricing</h3> */}
      <div className="mb-3 space-y-3">
        <a href="#" className="block text-sm hover:underline">
          For Individuals
        </a>
        <a href="#" className="block text-sm hover:underline">
          For Companies
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="w-fit bg-white p-6 shadow-xl">
      {/* <h3 className="font-semibold text-center">Pricing</h3> */}
      <div className="mb-3  space-y-4 grid grid-cols-2">
        <a href="#" className="block text-sm pt-4 hover:underline">
          For Individuals
        </a>
        <a href="#" className="block text-sm hover:underline">
          For Companies
        </a>
        <a href="#" className="block text-sm hover:underline">
          For Companies
        </a>
        <a href="#" className="block text-sm hover:underline">
          For Companies
        </a>
        <a href="#" className="block text-sm hover:underline">
          For Companies
        </a>
      </div>
      <button className="w-64 rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};


export default Example;
