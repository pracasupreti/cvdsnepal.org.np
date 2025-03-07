import React from "react";
import PageTitle from "../Header/PageTitle";
import More from "../Home/More";

const Support = () => {
  return (
    <>
      <PageTitle page="Support Us" title= "Support Us" />
      <div className="px-6 lg:px-0 lg:container mx-auto my-30 font-extralight">
        <div>
          <h1 className="sm:text-4xl text-2xl font-bold  mb-4 leading-12">Welcome to CVDS Nepal</h1>
          <div className="flex items-start justify-start gap-0 ">
          
            <p className="text-justify text-sm sm:text-xl leading-6 font-extralight sm:leading-9 first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:font-serif first-letter:float-left first-letter:mr-3">
              Thank you for your interest in supporting our work. Here are some
              of the ways you can help.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mx-10 mb-20 lg:mb-0 lg:container lg:mx-auto bg-[#01cb93] h-auto py-20 rounded-tl-4xl rounded-br-4xl flex flex-col text-center items-center justify-center gap-4 px-8">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">Make a Donation</h1>
        <p className="text-white text-sm leading-6 sm:text-[26px] sm:leading-10 sm:font-medium font-medium ">
          Please make a financial gift today to support our work throughout the
          world. Your contribution to CVDS-Nepal can make a real difference in
          the livelihoods of child with disabilities. Your support will be
          highly appreciated.
        </p>
        <div className="text-sm sm:text-[27px] text-orange-600 font-semibold flex flex-col gap-1">
          <p>Bank Detail:</p>
          <p>Bank of Kathmandu, Nepal</p>
          <p>A/C number : 050000023543</p>
          <p>A/c name : Conflict victim and disable society nepal</p>
        </div>
        
      </div>
      <More />
    </>
  );
};

export default Support;
