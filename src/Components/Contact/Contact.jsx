import React from "react";
import PageTitle from "../Header/PageTitle";
import More from "../Home/More";
import { LiaMapSolid } from "react-icons/lia";
import { VscCallIncoming } from "react-icons/vsc";
import { IoMailOpenOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <PageTitle page="Get in Touch" title = "Contact" />
      <div className="mx-6  lg:container lg:mx-auto flex flex-col gap-16 items-center my-[145px]">
        <div className="w-22 ">
          <img
            className="w-full h-full"
            src="https://cvdsnepal.org.np/assets/media/general/ui-decor-1.png"
            alt=""
          />
        </div>
        <h1 className="sm:text-3xl text-2xl  font-semibold text-center sm:leading-12 leading-8 ">
          Contact us if you need our services. We will be happy to make your
          events memorable!
        </h1>
        <div className="flex flex-col 2xl:flex-row gap-14 2xl:gap-0 items-center justify-around w-full  min-h-92">
          <div className=" w-full 2xl:w-[30%] h-full bg-[#01cb93] rounded-tl-4xl rounded-br-4xl 2xl:py-10 sm:py-28 p-14 px-16">
            <div className="w-full  flex justify-end text-5xl text-white font-extralight">
              <LiaMapSolid />
            </div>
            <div className="2xl:mt-10 sm:text-2xl text-sm 2xl:leading-10 sm:leading-12 leading-8  font-medium text-white">
              <h1 className="text-xl">Address</h1>
              <h1>
                Shankharapur Municipality ward-6 ,Shalambutar, Sankhu, Kathmandu
              </h1>
            </div>
          </div>
          <div className="w-full 2xl:w-[30%] h-full bg-[#0170CB] rounded-tl-4xl rounded-br-4xl 2xl:py-10 sm:py-28 p-14 px-16">
            <div className="w-full  flex justify-end text-5xl text-white font-extralight">
              <VscCallIncoming />
            </div>
            <div className="2xl:mt-10 text-xl 2xl:leading-10 sm:leading-12 leading-8  font-medium text-white">
              <h1 className="text-2xl mb-4">Phone</h1>
              <h1>+977-9851160868</h1>
              <h1>+977-9841360868</h1>
            </div>
          </div>
          <div className="w-full 2xl:w-[30%] h-full bg-[#555555] rounded-tl-4xl rounded-br-4xl 2xl:py-10 sm:py-28 p-14 px-16">
            <div className="w-full  flex justify-end text-5xl text-white font-extralight">
              <IoMailOpenOutline />
            </div>
            <div className="2xl:mt-10 text-xl 2xl:leading-10 sm:leading-12 leading-8  font-medium text-white">
              <h1 className="text-2xl mb-4">Email</h1>
              <h1>info@cvdsnepal.org.np</h1>
              <h1>cvdsnepal@yahoo.com</h1>
            </div>
          </div>
        </div>
        <div className="w-full">
              

        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6365879360455!2d85.44972131425837!3d27.728504731170393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdf278703661089!2zMjfCsDQzJzQyLjYiTiA4NcKwMjcnMDYuOSJF!5e0!3m2!1sen!2snp!4v1656056609239!5m2!1sen!2snp"
        // width="1800"
        // height="450"
        // style={{ border: 0 }}
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full  h-[650px] "
      ></iframe>          </div>
      </div>
      <More />
    </>
  );
};

export default Contact;
