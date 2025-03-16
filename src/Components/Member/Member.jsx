import React from "react";
import More from "../Home/More";
import PageTitle from "../Header/PageTitle";

const Member = () => {
  return (
    <>
      <PageTitle page="Members & Staffs" title="Members & Staffs" />
      <div className="px-6 lg:px-0 lg:container mx-auto my-30 font-extralight">
        <h1 className="sm:text-4xl text-2xl font-bold  mb-4">Members & Staffs</h1>
        <div className="flex items-center justify-start gap-3 ">
          <p className="text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:font-serif first-letter:float-left first-letter:mr-3">
            The organization has a total 09 executive members from good
            background. It also has full time working staffs and consultant and
            legal advisors. The number of employees varies as per various
            projects undertaken are experienced person for the child with
            disabilities with person. There are 5 person in decision making
            level in the organization. The organization operates its capacity
            building & community outreach programs through its staffs and
            volunteers.
          </p>
        </div>
      </div>
      <More />
    </>
  );
};

export default Member;
