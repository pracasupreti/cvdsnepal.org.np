import React from "react";
import PageTitle from "../Header/PageTitle";
import More from "../Home/More";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Objective = () => {
  return (
    <>
      <>
        <PageTitle page="Objectives" title="Objectives" />
        <div className="px-6 lg:px-0 lg:container mx-auto my-30 font-extralight flex flex-col items-start justify-between gap-14 text-justify ">
          <div className="flex flex-col gap-4">
            <h1 className="sm:text-4xl text-2xl font-bold">Objectives</h1>
            <div className="flex items-start justify-start gap-3 ">
              <p className="text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 sm:first-letter:text-6xl first-letter:text-4xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:font-serif first-letter:float-left first-letter:mr-3">
                With realizations that love, harmony and peace are necessary for
                the enhancing the life of our target groups, CVDS aims at
                creating avenues so that the existing negative views and
                socialcenter prejudice towards them can slowly be eradicated.
                The organization is clear about its objectives, which can be
                cited as under:
              </p>
            </div>
          </div>
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold  mb-4">Broad objective:</h1>

            <p className="flex items-start gap-2  sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 text-justify before:content-['•'] before:mr-2 ">
              To overshadow the prejudice prevalent in Nepal regarding the image
              of psychiatrist disabled people and hence provide equal
              opportunities for them till they live.
            </p>
          </div>
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold  mb-4">Specific objective:</h1>

            <div className="flex flex-col gap-4">
              <p className="flex items-start gap-2  sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 text-justify before:content-['•'] before:mr-2">
                To provide comprehensive medical service to children with
                disabilities - Medical/Clinical, Nutritional and Psychological
                treatment.
              </p>
              <p className="flex items-start gap-2  sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 text-justify before:content-['•'] before:mr-2">
                To provide education and related materials, specific to project
                beneficiaries.
              </p>
              <p className="flex items-start gap-2  sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 text-justify before:content-['•'] before:mr-2">
                To offer creative skills i.e. music and art.
              </p>
              <p className="flex items-start gap-2  sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 text-justify before:content-['•'] before:mr-2">
                To provide education and awareness to parents and related
                stakeholders on autism and CP of children.
              </p>
            </div>
          </div>
        </div>
        <More />
      </>
    </>
  );
};

export default Objective;
