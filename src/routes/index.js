import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import Contactus from "../views/Contactus";
import MeetWithOurTeam from "../views/meetWithTeam";
import Donate from "../views/Donate";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../components/dashboard/adminDashboard";
import Program from "../views/program";
import AllTeamMember from "../views/dashoardPAges/meetTeam";
import AweProgram from "../views/aweProgram";
import Blogs from "../views/blog";
import OurFounder from "../views/ourFounder";
import PayDonation from "../views/payDonation";
import NewProgramPost from "../views/dashboard/newProgram";
import AboutUs from "../views/aboutUs";

import Descshecan from "../views/shecanDesc";
import Descawe from "../views/descriptionAwe";

import Team1 from "../views/ourTeam/team1";
import Team2 from "../views/ourTeam/team2";
import Team3 from "../views/ourTeam/team3";
import Team4 from "../views/ourTeam/team4";
// import Descshecan from "../views/shecanDesc";

import Ourstory from "../views/Ourstory";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contactus" element={<Contactus />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Program" element={<Program />} />
      <Route path="/aboutUS" element={<AboutUs />} />
      <Route path="/aweprogram" element={<AweProgram />} />
      <Route path="/meetWithTeam" element={<MeetWithOurTeam />}></Route>
      <Route path="/Donate" element={<Donate />} />
      <Route path="/postprogram" element={<NewProgramPost />}></Route>
      <Route path="/meetTeam" element={<AllTeamMember />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/payDonation" element={<PayDonation />}></Route>
      <Route path="/ourFounder" element={<OurFounder />}></Route>
      <Route path="/ourstory" element={<Ourstory />}></Route>
      <Route path="/team1" element={<Team1 />}></Route>
      <Route path="/team2" element={<Team2 />}></Route>
      <Route path="/team3" element={<Team3 />}></Route>
      <Route path="/team4" element={<Team4 />}></Route>

      <Route path="/shecandesc" element={<Descshecan />}></Route>

      <Route path="/Descriptawe" element={<Descawe />}></Route>
    </Routes>
  );
};

export default Index;
