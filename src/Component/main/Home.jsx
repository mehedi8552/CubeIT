import React from 'react';
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
           <Hero/> 
           <WhatWeDo/>
           <Project/>
           <Contact/>
        </div>
    );
};

export default Home;