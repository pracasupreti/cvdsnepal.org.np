import React, { useState } from "react";


const Footer = () => {

    const year = new Date().getFullYear();
  
    
  return (
    <div className="h-38 bg-gray-100 border-t-[1px] border-gray-300 flex items-center justify-evenly flex-col text-gray-600 sm:text-xl text-sm text-center px-6">
      <h1>Copyright © {
    
      year
        
        
        } CVDS Nepal. All Rights Reserved.</h1>
      <h1>
        Technology Partner :
        <a href="https://pracas.net/">
          <span className="text-orange-500 font-semibold"> PRACAS</span>
        </a>
      </h1>
    </div>
  );
};

export default Footer;
