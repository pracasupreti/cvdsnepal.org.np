import React from "react";
import About from "./About";
import Hero from "./Hero";
import Titleimage from './Titleimage';



const Home = () => {
  return (
    <>
    <div className="overflow-x-hidden ">

      <Hero  />
    

      <About />
      <Titleimage />
      </div>
    
    </>
  );
};

export default Home;
