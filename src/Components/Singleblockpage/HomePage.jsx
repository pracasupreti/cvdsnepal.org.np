import React, { useState } from "react";
import NavBar from "./NavBar";
import { BsTwitterX } from "react-icons/bs";
import {
  FaAngleDown,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { ImArrowUpLeft } from "react-icons/im";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [donationType, setDonationType] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState("£50");
  return (
    <>
      {/* urgent funding */}
      <div className="relative min-h-screen w-full bg-gray-50 mt-40">
        <div className="h-[85vh] w-full bg-[url(/images/i19.png)] bg-center bg-cover">
          <NavBar />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[65%]  bg-white px-14  pt-8 pb-4 flex justify-around">
          <div className="w-[50%] ">
            <h1 className="text-4xl font-extrabold leading-12">
              <span className="text-4xl uppercase font-extrabold">URGENT:</span>
              Funding cuts put millions in dangeraround
            </h1>
            <p className="text-xl mt-5 leading-10">
              Global cuts to humanitarian aid could force 40+ nutrition centres
              to shut down. 10,000 children are at risk of malnutrition and
              starvation. You can help
            </p>
          </div>
          <div className="w-[40%] bg-yellow-400 px-6 flex items-start justify-center gap-6 flex-col h-52">
            <div className="flex">
              <div className="bg-white flex items-center pl-4 flex-grow">
                <span className="text-2xl font-bold">£</span>
                <input
                  type="text"
                  defaultValue="50"
                  className="text-2xl font-bold w-full p-3 outline-none"
                />
              </div>
              <div className="bg-white p-3 flex items-center">
                <span className="text-xl font-bold">GBP</span>
              </div>
            </div>
            <button className=" cursor-pointer bg-black text-white px-6 py-3 font-bold float-left">
              Donate
            </button>
          </div>
        </div>
      </div>
      {/* climate change */}
      <div className=" w-full bg-black text-white overflow-hidden ">
        <div className="h-[80vh] w-full bg-[url(/images/i19.png)] bg-center bg-cover overflow-hidden">
          <NavBar />
        </div>
        <div className="flex justify-center gap-40 mt-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-xl text-yellow-400">Crisis Watch</h1>
            <h1 className="text-5xl font-extrabold">Climate Change</h1>
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
          <div className="w-xl text-lg">
            <p>
              The International Rescue Committee (IRC) helps people affected by
              humanitarian crises - including the climate crisis - to survive,
              recover and rebuild their lives. Working in some of the most
              climate-vulnerable countries in the world, the IRC is committed to
              responding to the impacts of climate change.
            </p>
          </div>
        </div>
      </div>
      {/* social enterprise uk */}
      <div className="min-h-screen">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-2xl font-bold">
                S
              </div>
              <div className="ml-2">
                <div className="font-bold text-black">Social</div>
                <div className="font-bold text-black">Enterprise UK</div>
              </div>
            </div>

            <nav className="hidden lg:flex gap-6">
              <div className="relative ">
                <button className="py-2 cursor-pointer flex items-center gap-2 justify-center font-medium hover:text-gray-600">
                  About Us
                  <FaChevronDown />
                </button>
              </div>
              <div className="relative group">
                <button className="py-2 cursor-pointer  flex items-center font-medium gap-2 justify-center hover:text-gray-600">
                  All about social enterprise
                  <FaChevronDown />
                </button>
              </div>
              <div className="relative group">
                <button className="py-2  cursor-pointer flex items-center font-medium gap-2 justify-center hover:text-gray-600">
                  Get involved
                  <FaChevronDown />
                </button>
              </div>
              <div className="relative group">
                <button className="py-2  cursor-pointer flex items-center font-medium gap-2 justify-center hover:text-gray-600">
                  News & stories
                  <FaChevronDown />
                </button>
              </div>
              <div className="relative group">
                <button className="py-2 cursor-pointer  flex items-center font-medium gap-2 justify-center hover:text-gray-600">
                  Evidence & policy
                  <FaChevronDown />
                </button>
              </div>
            </nav>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-white py-2 px-4">
              <a href="#" className="block py-2 hover:bg-gray-100">
                About Us
              </a>
              <a href="#" className="block py-2 hover:bg-gray-100">
                All about social enterprise
              </a>
              <a href="#" className="block py-2 hover:bg-gray-100">
                Get involved
              </a>
              <a href="#" className="block py-2 hover:bg-gray-100">
                News & stories
              </a>
              <a href="#" className="block py-2 hover:bg-gray-100">
                Evidence & policy
              </a>
            </div>
          )}
        </header>

        <div className="relative h-[90vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center h-full w-full"
            style={{
              backgroundImage: `url('/images/i8.png')`,
              filter: "brightness(0.7)",
            }}
          ></div>

          <div className="relative h-full flex flex-col justify-center items-center text-center px-4 py-32">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 max-w-4xl">
              The national voice for
              <br />
              social enterprise
            </h1>

            <div className="mt-8">
              <button className="  text-white cursor-pointer">
                <FaAngleDown className="bg-none text-7xl  " />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Donate now */}
      <div className=" w-full  bg-yellow-400 text-white  relative">
        <div className="h-[70vh] w-full bg-[url(/images/i19.png)] bg-center bg-cover overflow-hidden relative">
          <div className="container mx-auto pt-4 flex items-start justify-start px-30 ">
            <div className="h-32 w-26 text-black bg-amber-400 uppercase text-2xl font-[900] flex flex-col items-center justify-center">
              <ImArrowUpLeft className="text-7xl" />
              Rescue
            </div>
          </div>

          <h1 className=" absolute text-6xl font-extrabold z-10 left-[20%] bottom-[10%]">
            Donate Now
          </h1>
        </div>
        <div className="container mx-auto px-30 py-10 text-black pr-162">
          <h1 className="text-2xl">
            Millions of families are fleeing conflict and disaster in places
            like Lebanon, Gaza and Sudan.
          </h1>
          <h1 className="text-2xl font-extrabold">
            Help people impacted by crises survive, recover and rebuild their
            lives by donating today.
          </h1>
          <h1 className="text-2xl">
            In the last year, the International Rescue Committee has responded
            to more than 24 crises across the globe, in Ukraine, in Sudan and
            most recently Gaza. When a crisis strikes, the IRC responds quickly
            and stays as long as we are needed.
          </h1>
        </div>
        <div className=" absolute w-122 text-black  bg-white z-40 top-[30%] right-[15%]">
          <div className="bg-white p-4 rounded">
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 text-2xl rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                1
              </div>
              <div className="h-px bg-gray-300 w-30"></div>
              <div className="w-8 h-8 text-2xl rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                2
              </div>
              <div className="h-px bg-gray-300 w-30"></div>
              <div className="w-8 h-8 text-2xl rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                3
              </div>
            </div>

            {/* Form Title */}
            <h2 className="text-2xl font-bold text-center mb-6">
              Select your donation
            </h2>

            {/* Donation Type Selector */}
            <div className="grid grid-cols-2 gap-0 mb-6 text-2xl">
              <button
                className={` cursor-pointer  py-3 px-4 text-center font-medium ${
                  donationType === "once"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setDonationType("once")}
              >
                Give once
              </button>
              <button
                className={` cursor-pointer  py-3 px-4 text-center font-medium ${
                  donationType === "monthly"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setDonationType("monthly")}
              >
                Give monthly
              </button>
            </div>

            {/* Amount Selector */}
            <div className="grid grid-cols-2 gap-3 font-extrabold mb-6 text-xl">
              <button
                className={` cursor-pointer  py-3 px-4 text-center  ${
                  selectedAmount === "£30"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedAmount("£30")}
              >
                £30
              </button>
              <button
                className={` cursor-pointer  py-3 px-4 text-center  ${
                  selectedAmount === "£50"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedAmount("£50")}
              >
                £50
              </button>
              <button
                className={` cursor-pointer  py-3 px-4 text-center  ${
                  selectedAmount === "£75"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedAmount("£75")}
              >
                £75
              </button>
              <button
                className={` cursor-pointer  py-3 px-4 text-center  ${
                  selectedAmount === "£100"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedAmount("£100")}
              >
                £100
              </button>
              <button
                className={` cursor-pointer  py-3 px-4 text-center  ${
                  selectedAmount === "£200"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedAmount("£200")}
              >
                £200
              </button>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  £
                </span>
                <input
                  type="text"
                  className="pl-8 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Other Amount"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className=" cursor-pointer w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 px-6 font-bold text-xl flex items-center justify-center">
              PAYMENT INFORMATION
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      \
    </>
  );
};

export default HomePage;
