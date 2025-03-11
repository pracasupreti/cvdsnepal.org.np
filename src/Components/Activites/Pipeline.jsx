import React from "react";
import More from "../Home/More";
import PageTitle from "../Header/PageTitle";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pipeline = () => {
  return (
    <>
      <>
        <div className="bg-gray-300 text-[#233a71] h-62 xl:h-92 w-full flex items-center justify-center flex-col gap-6  mt-20 lg:mt-40">
          <h1 className="text-5xl xl:text-8xl font-bold">Pipeline</h1>
          <div className="flex items-center justify-center  gap-4 text-[22px] font-semibold">
            <p className="hover:text-orange-500">
              <Link to="/">Home</Link>
            </p>
            <FaPlay className="text-[10px]" />
            <Link to="/present">
              <p className="text-orange-500">Present</p>
            </Link>
            <FaPlay className="text-[10px]" />
            <p className="font-light   text-[#233a71] ">Pipeline</p>
          </div>
        </div>
      </>
      <div className="px-6 lg:px-0 lg:container mx-auto my-30 font-extralight">
        <h1 className="text-4xl font-bold  mb-4">Pipeline</h1>
        <div className="flex items-center justify-start gap-3 ">
         
          <p className="text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:font-serif first-letter:float-left first-letter:mr-3">
            To date, we have been renting houses to provide a good home for a
            child or children. However, in the near future, we plan to possess
            our own facility and give a child with disabilities better
            amenities. Due to a mental illness called cerebral palsy, which
            their families have neglected, there are many homeless children in
            Nepal.
          </p>
        </div>
      </div>
      <More />
    </>
  );
};

export default Pipeline;
