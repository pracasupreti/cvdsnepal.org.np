import React from "react";
import PageTitle from '../Header/PageTitle';
import More from '../Home/More';


const Partner = () => {
  return (
    <>
      <PageTitle page="Project" title = "Project" />

      <div className="px-6 lg:px-0 lg:container mx-auto my-30 font-extralight flex flex-col justify-center items-start">
        <h1 className="sm:text-xl text-sm  border-black border-[2px] border-dotted p-1  mb-4 text-justify">
          Note: CVDS-Nepal has prioritized socially marginalized, backward
          caste, women and extremely poor conflict victim & pwd’s groups for its
          entrepreneurship training program:
        </h1>
        <ul className="list-disc p-4 sm:text-xl text-sm flex flex-col gap-2">
          <li>National Child Right Council</li>
          <li>Local Goverment</li>
          <li>Individual Donors</li>
        </ul>
      </div>

      <More />
    </>
  );
};

export default Partner;
