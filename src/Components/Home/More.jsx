import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <div className="w-full  bg-gray-200 ">
            <div className="w-full h-full  container mx-auto flex-col flex xl:flex-row gap-20 xl:gap-0 justify-between bg-gray-200 pt-30 pb-30">
              <div className="flex flex-col items-start justify-between w-full xl:w-1/3 text-justify gap-6 px-6 lg:px-0">
                <div className=" flex items-center justify-center gap-4">
                  <AiOutlineMinus className="text-orange-500 font-extrabold text-4xl" />
                  <h1 className="text-xl font-semibold">About Us</h1>
                </div>
                <div className="xl:text-lg sm:text-xl text-sm leading-6 sm:leading-8 text-justify font-extralight ">
                  Conflict Victim and Disable Society (CVDS-Nepal) is one of these
                  non- profit organizations located at Shankarapur Municipality-6,
                  Shalambutar,Sankhu,Kathmandu.This organization has been devoting
                  unceasingly with the aim of supporting the people with disability
                  in Nepal since 2005. The organization has been providing food,
                  clothes, shelter, basic care and support mentally and physically
                  disabled children through the ‘Rehabilitation Center for Children
                  with disability due to Cerebral Palsy (CP)’ project.
                </div>
                <div className="relative group px-8 py-2 rounded-3xl border-2 border-white font-black overflow-hidden cursor-pointer">
                  <span className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"></span>
                  <Link
                    to="/about"
                    className="relative z-10 text-black group-hover:text-white transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start  text-justify gap-6 px-6 lg:px-0">
                <div className=" flex items-center justify-center gap-4">
                  <AiOutlineMinus className="text-orange-500 font-extrabold text-4xl" />
                  <h1 className="text-xl font-semibold"> Keep In Touch</h1>
                </div>
    
                <div className="flex flex-col justify-start items-start gap-2 sm:text-xl text-sm ">
                  <h1 className="flex gap-4 items-center justify-around">
                    <span>
                      {" "}
                      <GrMapLocation />{" "}
                    </span>{" "}
                    Shalambutar, Sakhu, Kathmandu
                  </h1>
                  <h1 className="flex gap-4 items-center justify-around">
                    {" "}
                    <IoCallOutline /> +977-9851160868
                  </h1>
                  <h1 className="flex gap-4 items-center justify-around">
                    {" "}
                    <CiMail /> info@cvdsnepal.org.np
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start  text-justify gap-6 w-full xl:w-[26%]">
                <div className=" flex items-center justify-center gap-4">
                  <AiOutlineMinus className="text-orange-500 font-extrabold text-4xl" />
                  <h1 className="text-xl font-semibold"> Events Gallery</h1>
                </div>
    
                <Link to="/gallery" className="w-full">
                <div className="grid grid-cols-3 grid-rows-2 text-xl bg-red-200  xl:h-[300px] w-full">
                <img
                  className="w-full h-full"
                  src="/imgs/footer-1.jpg"
                  alt=""
                />
                <img
                  className="w-full h-full"
                  src="/imgs/footer-2.jpg"
                  alt=""
                />
                <img
                  className="w-full h-full"
                  src="/imgs/footer-3.jpg"
                  alt=""
                />
                <img
                  className="w-full h-full"
                  src="/imgs/footer-4.jpg"
                  alt=""
                />
                <img
                  className="w-full h-full"
                  src="/imgs/footer-5.jpg"
                  alt=""
                />
                <img
                  className="w-full h-full"
                  src="/imgs/footer-6.jpg"
                  alt=""
                />
              </div>
                </Link>
              </div>
            </div>
          </div>
  );
};

export default More;
