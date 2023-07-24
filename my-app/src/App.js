import React from 'react';

import Navbar from "./pages/home/1-Navbar";
import Main from "./pages/home/2-Main";
import About from "./pages/home/3-About";
import Genre from "./pages/home/4-Genre";
import Footer from "./pages/home/5-Footer";

function App() {
  return (
    <>
      <Navbar /> 
      <Main />
      <About />
      <Genre />
      <Footer />
    </>
    
  );
}

export default App;
