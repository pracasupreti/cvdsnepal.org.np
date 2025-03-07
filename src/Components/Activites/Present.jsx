import React from "react";

import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import More from "../Home/More";

const Present = () => {
  return (
    <>
      <div className="bg-[#333333] h-62 xl:h-92 w-full flex items-center justify-center flex-col gap-6 text-white  lg:mt-[240px]">
        <h1 className="text-5xl xl:text-8xl font-bold">Present</h1>
        <div className="flex items-center justify-center  gap-4 text-[22px] font-semibold">
          <p className="hover:text-orange-500">
            <Link to="/">Home</Link>
          </p>
          <FaPlay className="text-[10px]" />
          <p className="font-light text-gray-300">Present</p>
          <FaPlay className="text-[10px]" />
          <Link to="/pipeline" className="text-orange-500">
            <p >Pipeline</p>
          </Link>
        </div>
      </div>

      <div className="px-6 lg:px-0 lg:container mx-auto my-30 font-extralight">
        <h1 className="text-4xl font-bold  mb-4">Present</h1>
        <div className="flex items-center justify-start gap-3 ">
         
          <p className="text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:font-serif first-letter:float-left first-letter:mr-3">
            To date, we have been renting houses to provide a good home for a
            resent activities (self employment scheme)
          </p>
        </div>
        <p className="text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2">
          The areas in which empowerment training is being imparted are:
        </p>

        <div className="flex items-center justify-start gap-3 mt-10 text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 ">
          <FaPlay className="text-[10px]" />
          <p>Handicraft( Paper production and Paper craft)</p>
        </div>
      </div>

      <More />
    </>
  );
};

export default Present;
