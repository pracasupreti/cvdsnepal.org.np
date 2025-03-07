import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Aboutus from "../About/Aboutus";
import Home from "../Home/Home";
import Member from "../Members/Member";
import Partner from "../Partners/Partner";
import Pipeline from "../Activites/Pipeline";
import Objective from "../Objectives/Objective";
import Support from "../Supports/Support";
import Contact from "../Contacts/Contact";
import Present from "../Activites/Present";
import Gallery from "../Gallerys/Gallery";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  const routesWithTitles = {
    "/": "Conflict Victim and Disable Society | Nepal.",
    "/about": "About Us | Conflict Victim and Disable Society | Nepal",
    "/member-staff": "Members | Conflict Victim and Disable Society | Nepal",
    "/project": "Project | Conflict Victim and Disable Society | Nepal",
    "/pipeline": "Pipeline | Conflict Victim and Disable Society | Nepal",
    "/present": "Present | Conflict Victim and Disable Society | Nepal",
    "/gallery": "Gallery | Conflict Victim and Disable Society | Nepal",
    "/objective": "Objectives | Conflict Victim and Disable Society | Nepal",
    "/support": "Support Us | Conflict Victim and Disable Society | Nepal",
    "/contact": "Contact Us | Conflict Victim and Disable Society | Nepal",
  };

  const location = useLocation();

  useEffect(() => {
    document.title = routesWithTitles[location.pathname];
  }, [location]);
  return null;
};

const Routing = () => {
  return (
    <>
    <TitleUpdater/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/member-staff" element={<Member />} />
        <Route path="/project" element={<Partner />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/present" element={<Present />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default Routing;
