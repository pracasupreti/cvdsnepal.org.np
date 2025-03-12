import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosCall, IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { VscCallIncoming } from "react-icons/vsc";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMail } from "react-icons/io5";

const Nav = () => {
  const [activitiesHovered, setActivitiesHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener only on lg screens and above
    if (window.innerWidth >= 1024) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (window.innerWidth >= 1024) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <div
        className={`w-[100vw] z-50 ${
          window.innerWidth >= 1024
            ? `fixed top-0 left-0 ${
                isScrolled ? "bg-[#233a71] shadow-2xl" : "bg-[#233a71]"
              }`
            : "fixed bg-[#233a71] top-0 left-0"
        }`}
      >
        {/* Top Section */}
        <div className="lg:h-20 h-20 w-full border-b-[1px] border-b-[#152447]">
          <div className="lg:container mx-auto h-full w-full flex items-center justify-evenly lg:justify-between ">
            <p
              className={`2xl:text-sm lg:text-[16px] font-semibold hidden lg:flex leading-6 w-[30%] ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              <span className="flex flex-col gap-3">
                <a
                  className="hidden lg:flex  gap-2 items-center"
                  href="mailto:info@cvdsnepal.org.np"
                >
                  <IoMail /> : info@cvdsnepal.org.np
                </a>

                <a
                  className="flex gap-2 items-center"
                  href="tel:+9779851160868
                "
                >
                  <FaPhone />: +977-9851160868
                </a>
              </span>
            </p>
            <div>
              <a href="tel:+9779851160868">
                <FaPhone className="text-white text-xl mt-2 lg:hidden" />
              </a>
            </div>
            <Link to="/" className="lg:h-[75%] h-[55%] sm:h-[50%] lg:w-[60%] sm:w-[20%] w-[30%] mt-[-10px] lg:mt-0">
              <div className="h-full flex items-center pt-4">
                <img className="h-full " src="/imgs/logo.png" alt="logo" />
              </div>
            </Link>

            <button
              onClick={() => setIsClicked(!isClicked)}
              className="mt-2 text-3xl text-white lg:hidden transition-transform duration-300 ease-in-out"
            >
              {isClicked ? (
                <RxCross2 className="transition-transform duration-300 ease-in-out rotate-180" />
              ) : (
                <IoMdMenu className="transition-transform duration-300 ease-in-out rotate-0" />
              )}
            </button>

            {/* <div className="hidden lg:block"></div> */}
          </div>
        </div>

        {/* Navigation Links (Visible only on lg screens and above) */}
        <div className="hidden lg:block lg:container mx-auto h-20 w-full ">
          <ul className="w-full h-full lg:flex lg:flex-wrap xl:flex-nowrap lg:items-center 2xl:justify-between lg:justify-between 2xl:text-lg xl:text-[sm] xl:font-medium">
            <li>
              <Link to="/" className={isScrolled ? "text-white" : "text-white"}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isScrolled ? "text-white" : "text-white"}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/member-staff"
                className={isScrolled ? "text-white" : "text-white"}
              >
                MEMBERS & STAFFS
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className={isScrolled ? "text-white" : "text-white"}
              >
                PROJECT PATRNERSHIP
              </Link>
            </li>

            {/* ACTIVITIES Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActivitiesHovered(true)}
              onMouseLeave={() => setActivitiesHovered(false)}
            >
              <div
                className={`cursor-pointer inline-flex items-center gap-2 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                ACTIVITES
                <AiFillCaretDown className="ml-1" />
              </div>

              {/* Dropdown Content */}
              {activitiesHovered && (
                <>
                  <div className="absolute h-3 w-full top-full left-0"></div>
                  <div className="absolute top-[calc(100%+0.75rem)] w-52 h-16 bg-blue-100 text-black z-10">
                    <Link
                      to="/pipeline"
                      className="group flex items-center justify-center text-2xl w-full h-full"
                    >
                      PIPELINE
                    </Link>
                  </div>
                </>
              )}
            </li>

            <li>
              <Link
                to="/gallery"
                className={isScrolled ? "text-white" : "text-white"}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/objective"
                className={isScrolled ? "text-white" : "text-white"}
              >
                OBJECTIVES
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={isScrolled ? "text-white" : "text-white"}
              >
                SUPPORT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isScrolled ? "text-white" : "text-white"}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {isClicked && (
          <div
            className={`fixed top-0 left-0 z-10 w-[250px] h-[100vh] bg-gray-300 
      transition-transform duration-300 ease-in-out ${
        isClicked ? "translate-x-0" : "-translate-x-full"
      }`}
          >
            <ul className="w-full h-full flex flex-col items-start justify-start gap-3 pl-5 pt-4">
              <li cn=" w-full">
                <Link
                  to="/"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  HOME{" "}
                </Link>
              </li>
              <li cn=" w-full">
                <Link
                  to="/about"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  ABOUT{" "}
                </Link>
              </li>
              <li cn=" w-full">
                <Link
                  to="/member-staff"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  MEMBERS & STAFFS{" "}
                </Link>
              </li>
              <li cn=" w-full">
                <Link
                  to="/project"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  PROJECT PARTNERSHIP{" "}
                </Link>
              </li>
              <li className="text-black">
                <div className="text-black text-[18px] flex items-center">
                  ACTIVITIES <AiFillCaretDown className="ml-1 text-black" />
                </div>
                <div className="pl-14 p-3 w-full">
                  <Link to="/pipeline" onClick={() => setIsClicked(false)}>
                    PIPELINE
                  </Link>
                </div>
              </li>
              <li cn=" w-full">
                <Link
                  to="/gallery"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  GALLERY{" "}
                </Link>
              </li>
              <li cn=" w-full">
                <Link
                  to="/objective"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  OBJECTIVES{" "}
                </Link>
              </li>
              <li cn=" w-full">
                <Link
                  to="/support"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  SUPPORT US{" "}
                </Link>
              </li>
              <li cn=" w-full">
                <Link
                  to="/contact"
                  className="text-black text-[18px]"
                  onClick={() => setIsClicked(false)}
                >
                  {" "}
                  CONTACT US{" "}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
