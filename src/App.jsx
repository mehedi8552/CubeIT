import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonAnim from './Component/ButtonAnim';
import './index.css';
import NavAnimation from './Component/NavAnimation';
// import Hero from './Component/main/Hero';
import Home from './Component/main/Home';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
