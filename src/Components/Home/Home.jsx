import React from "react";
import About from "./About";
import Hero from "./Hero";
import TiltImage from "./TiltImage";



const Home = () => {
  return (
    <>
    <div className="overflow-x-hidden">

      <Hero  />
    

      <About />
      <TiltImage />
      </div>
    
    </>
  );
};

export default Home;
