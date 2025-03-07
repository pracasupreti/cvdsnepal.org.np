import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { PiMicrophoneStageBold } from "react-icons/pi";

const About = () => {
  return (
    <div>
      <div className="mt-[50px] lg:container mx-auto  w-full flex flex-col   xl:flex-row lg:gap-6">
        <div className="w-full xl:w-2/5 p-2 lg:p-6">
          <div className="h-full flex flex-col xl:items-start justify-center gap-[20px] lg:gap-[30px] px-4 lg:px-0">
            <div className="h-[16px] lg:h-[20px] ">
              <img
                className="h-full "
                src="https://cvdsnepal.org.np/assets/media/general/ui-decor-1.png"
                alt=""
              />
            </div>
            <h1 className="sm:text-5xl text-3xl xl:text-4xl  font-bold lg:text-6xl lg:font-medium text-orange-500">
              Welcome <span className="ml-2 text-black">To</span>
            </h1>

            <p className="sm:text-3xl text-xl xl:text-[20px] text-black font-medium">
              We make you smile & life impactful through our services.
            </p>
            <p className="sm:text-[20px] text-sm xl:text-[16px] sm:leading-9 leading-6   xl:leading-7  font-extralight text-justify">
              We, CDVS family welcome to you all with love, harmony and peace,
              necessary for the enhancing the life of our target groups.It has
              been established in 2005 with a mission to enhance opportunities
              and uplift the livelihood of child with disabilities (cwd’s) in
              Nepal.CVDS aims at creating avenues so that the existing negative
              views and social prejudice towards them can slowly be
              eradicated.CVDS has been supporting people who have been affected
              by political, social, and cultural violence and provide a good
              shelter for a homeless child and kids with different facilities.
            </p>
          </div>
        </div>

        <div className="w-full xl:w-3/5 bg-gray-200 mt-4 lg:mt-10 flex items-start justify-evenly gap-14 lg:gap-0 flex-col py-8 lg:py-4 lg:pt-10 lg:pb-10">
          <div className="flex-col lg:flex-row flex items-start justify-center gap-4 lg:gap-0 w-full mt-4 px-10 lg:px-0">
            <div className="flex items-start justify-start lg:justify-center gap-10 w-[30%] h-full ">
              <PiMicrophoneStageBold className="w-10 h-10 " />
              <h2 className="text-6xl font-bold text-orange-500">
                <AiOutlineMinus className="hidden lg:block" />
              </h2>
            </div>
            <div className="flex items-start justify-end lg:w-[60%] flex-col gap-4 lg:gap-8">
              <h1 className="sm:text-5xl text-xl xl:text-4xl  font-bold lg:text-6xl lg:font-medium text-orange-500">
                About us
              </h1>{" "}
              <p className="sm:text-[20px] text-sm xl:text-[16px] sm:leading-9 leading-6   xl:leading-7  font-extralight text-justify">
                {" "}
                Conflict Victim and Disable Society-Nepal (CVDS-Nepal
                hereinafter) is a non profit social organization established in
                2005 with a mission to enhance opportunities and uplift the
                livelihood of conflict victims and child with disabilities
                (cwd’s) in Nepal.
              </p>
            </div>
          </div>
          <div className="flex-col lg:flex-row flex items-start justify-center gap-4 lg:gap-0 w-full mt-4 px-10 lg:px-0">
            <div className="flex items-start justify-start lg:justify-center gap-10 w-[30%] h-full ">
              <PiMicrophoneStageBold className="w-10 h-10 " />
              <h2 className="text-6xl font-bold text-orange-500">
                <AiOutlineMinus className="hidden lg:block" />
              </h2>
            </div>
            <div className="flex items-start justify-end lg:w-[60%] flex-col gap-4 lg:gap-8">
              <h1 className="sm:text-5xl text-xl xl:text-4xl  font-bold lg:text-6xl lg:font-medium text-orange-500">
                Our Objectives
              </h1>{" "}
              <p className="sm:text-[20px] text-sm xl:text-[16px] sm:leading-9 leading-6   xl:leading-7  font-extralight text-justify">
                With realizations that love, harmony and peace are necessary for
                the enhancing the life of our target groups, The goal of CVDS is
                to open doors for the gradual eradication of societal prejudice
                and the current unfavorable opinions about them.
              </p>
            </div>
          </div>
          <div className="flex-col lg:flex-row flex items-start justify-center gap-4 lg:gap-0 w-full mt-4 px-10 lg:px-0">
            <div className="flex items-start justify-start lg:justify-center gap-10 w-[30%] h-full ">
              <PiMicrophoneStageBold className="w-10 h-10 " />
              <h2 className="text-6xl font-bold text-orange-500">
                <AiOutlineMinus className="hidden lg:block" />
              </h2>
            </div>
            <div className="flex items-start justify-end lg:w-[60%] flex-col gap-4 lg:gap-8">
              <h1 className="sm:text-5xl text-xl xl:text-4xl  font-bold lg:text-6xl lg:font-medium text-orange-500">
                Photo Gallery
              </h1>{" "}
              <p className="sm:text-[20px] text-sm xl:text-[16px] sm:leading-9 leading-6   xl:leading-7  font-extralight text-justify">
                Vist our photo gallery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
