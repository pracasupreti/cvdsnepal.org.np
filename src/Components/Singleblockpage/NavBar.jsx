import React, { useState } from 'react'
import { BsTwitterX } from "react-icons/bs";

import { ImArrowUpLeft } from "react-icons/im";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegHeart,
  FaSearch,
  FaTiktok,
  FaToolbox,
  FaYoutube,
} from "react-icons/fa";
import { TbSpeakerphone, TbWorld } from "react-icons/tb";

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pt-4 flex items-start justify-center gap-10">
    <div className="h-32 w-26 text-black bg-amber-400 uppercase text-2xl font-[900] flex flex-col items-center justify-center">
      <ImArrowUpLeft className="text-7xl" />
      Rescue
      {/* <img src="/images/1.png" className="h-full w-full" alt="" /> */}
    </div>
    <div className="w-7xl">
      <div className="  px-6 bg-black flex justify-between text-white tracking-tighter">
        <div className="flex items-center py-4">
          <span className="text-red-500 mr-1">●</span>
          <span className="text-[12px]">Crisis watch: </span>
          <a
            href=""
            className="text-sm font-bold border-b border-yellow-500  ml-1"
          >
            Gaza ceasefire highlights urgent need for aid
          </a>
        </div>
        <div className="flex items-center gap-10 ">
          <a
            href=""
            className="text-sm flex items-center gap-1 hover:bg-yellow-500 hover:text-black px-4 h-full"
          >
            <TbSpeakerphone className="text-neutral-400" />
            Join our mailing list
          </a>
          <a
            href=""
            className="text-sm flex items-center gap-1 hover:bg-yellow-500 hover:text-black px-4 h-full"
          >
            <FaToolbox className="text-neutral-400  " /> Careers{" "}
          </a>

          <div
            className="relative h-full  hover:bg-yellow-500 min-w-[150px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href=""
              className={`text-sm flex items-center gap-1 hover:text-black ${
                isHovered ? "text-black" : "text-white"
              } px-2 h-full`}
            >
              <TbWorld />
              <span className="text-sm">United Kingdom</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>

            {isHovered && (
              <div className="absolute top-full left-0 bg-yellow-500 shadow-md z-10 min-w-[150px] text-black">
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-amber-200 "
                >
                  United States
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-amber-200 "
                >
                  Canada
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-amber-200 "
                >
                  Australia
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-amber-200 "
                >
                  Germany
                </a>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-amber-200"
                >
                  France
                </a>
              </div>
            )}
          </div>
          <div className="flex gap-4 text-[16px] text-white bg-black">
            <a href="">
              <BsTwitterX />
            </a>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaTiktok />
            </a>
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="pl-1 bg-white flex i justify-between text-black tracking-tight">
        <div className="flex items-center">
          <a className="py-5 font-extrabold hover:bg-yellow-400 px-6">
            WHO WE ARE
          </a>
          <a className="py-5 font-extrabold hover:bg-yellow-400 px-6">
            WHERE WE WORK
          </a>
          <a className="py-5 font-extrabold hover:bg-yellow-400 px-6">
            WHAT WE DO
          </a>
          <a className="py-5 font-extrabold hover:bg-yellow-400 px-6">
            HOW TO HELP
          </a>
          <a className="py-5 font-extrabold hover:bg-yellow-400 px-6 ">
            LATEST
          </a>
        </div>
        <div className="flex items-center gap-4 text-black">
          <button className=" cursor-pointer hover:text-yellow-400 text-xl border-l-1 border-gray-400 px-4">
            <FaSearch />
          </button>
          <div className="w-52 h-full bg-yellow-400 flex items-center justify-center gap-2 text-xl font-extrabold">
            Donate
            <FaRegHeart className="font-bold" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar