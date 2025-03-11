import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const PageTitle = ({page,title}) => {

  return (
    <div className="bg-gray-300  h-62 xl:h-92 w-full flex items-center justify-center flex-col gap-6 text-[#233a71]  lg:mt-40 mt-20">
      <h1 className="text-3xl xl:text-8xl font-bold">{title}</h1>
      <div className="flex items-center justify-center  gap-4 text-sm xl:text-2xl font-semibold">
        <p className="hover:text-orange-500">
          <Link to="/">Home</Link>
        </p>
        <FaPlay className="text-[10px]" />
        <p className="font-light">{page}</p>
      </div>
    </div>
  );
};

export default PageTitle;
