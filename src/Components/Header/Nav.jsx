import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

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
            ? `fixed top-0 left-0 ${isScrolled ? "bg-white" : "bg-[#1f1f1f]"}`
            : "relative bg-[#1f1f1f]"
        }`}
      >
        {/* Top Section */}
        <div className="lg:h-30 h-22 sm:h-26 w-full border-b-[1px] border-b-gray-600">
          <div className="lg:container mx-auto h-full w-full flex items-center justify-evenly lg:justify-start">
            <p
              className={`2xl:text-xl lg:text-[16px] hidden lg:block font-semibold leading-6 w-[30%] ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <span>
                <a href="mailto:info@cvdsnepal.org.np">
                  Email : info@cvdsnepal.org.np
                </a>
              </span>
            </p>
            <Link to="/" className="lg:h-[75%] h-[45%] sm:h-[60%]">
              <div className="h-full flex items-center pt-4">
                <img
                  className="h-full"
                  src="/imgs/logo.png"
                  alt="logo"
                />
              </div>
            </Link>

            <button
              onClick={() => setIsClicked(!isClicked)}
              className="text-3xl text-white lg:hidden transition-transform duration-300 ease-in-out"
            >
              {isClicked ? (
                <RxCross2 className="transition-transform duration-300 ease-in-out rotate-180" />
              ) : (
                <IoMdMenu className="transition-transform duration-300 ease-in-out rotate-0" />
              )}
            </button>

            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Navigation Links (Visible only on lg screens and above) */}
        <div className="hidden lg:block lg:container mx-auto h-30 w-full">
          <ul className="w-full h-full lg:flex lg:flex-wrap xl:flex-nowrap lg:items-center 2xl:justify-between lg:justify-between 2xl:text-xl xl:text-[18px] xl:font-medium">
            <li>
              <Link to="/" className={isScrolled ? "text-black" : "text-white"}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isScrolled ? "text-black" : "text-white"}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/member-staff"
                className={isScrolled ? "text-black" : "text-white"}
              >
                MEMBERS & STAFFS
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className={isScrolled ? "text-black" : "text-white"}
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
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                ACTIVITES
                <AiFillCaretDown className="ml-1" />
              </div>

              {/* Dropdown Content */}
              {activitiesHovered && (
                <>
                  <div className="absolute h-3 w-full top-full left-0"></div>
                  <div className="absolute top-[calc(100%+0.75rem)] w-42 h-16 bg-white text-black z-10">
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
                className={isScrolled ? "text-black" : "text-white"}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/objective"
                className={isScrolled ? "text-black" : "text-white"}
              >
                OBJECTIVES
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={isScrolled ? "text-black" : "text-white"}
              >
                SUPPORT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isScrolled ? "text-black" : "text-white"}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {isClicked && (
          <div
            className={`fixed top-0 left-0 z-10 w-[60vw] h-[100vh] bg-black 
      transition-transform duration-300 ease-in-out ${
        isClicked ? "translate-x-0" : "-translate-x-full"
      }`}
          >
            <ul className="w-full h-full flex flex-col items-start justify-start gap-3 pl-5 pt-4">
              <li>
                <Link to="/" className="text-white text-[18px]"onClick={() => setIsClicked(false)} >
                  {" "}
                  HOME{" "}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-[18px]" onClick={() => setIsClicked(false)}>
                  {" "}
                  ABOUT{" "}
                </Link>
              </li>
              <li>
                <Link to="/member-staff" className="text-white text-[18px]" onClick={() => setIsClicked(false)}>
                  {" "}
                  MEMBERS & STAFFS{" "}
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-white text-[18px]" onClick={() => setIsClicked(false)}>
                  {" "}
                  PROJECT PARTNERSHIP{" "}
                </Link>
              </li>
              <li className="text-white">
                <div className="text-white text-[18px] flex items-center">
                  ACTIVITIES <AiFillCaretDown className="ml-1 text-white" />
                </div>
                <div className="pl-14 p-3 w-full">
                  <Link to="/pipeline" onClick={() => setIsClicked(false)}>PIPELINE</Link>
                </div>
              </li>
              <li>
                <Link to="/gallery" className="text-white text-[18px]" onClick={() => setIsClicked(false)}>
                  {" "}
                  GALLERY{" "}
                </Link>
              </li>
              <li>
                <Link to="/objective" className="text-white text-[18px]" onClick={() => setIsClicked(false)}>
                  {" "}
                  OBJECTIVES{" "}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white text-[18px]" onClick={() => setIsClicked(false)}>
                  {" "}
                  SUPPORT US{" "}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-[18px]" onClick={() => setIsClicked(false)}>
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
