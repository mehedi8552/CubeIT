import React from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import Project from "./Project";
import Contact from "./Contact";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhatWeDo />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
