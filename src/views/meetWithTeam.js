import React, { useState } from "react";
import HomeLayout from "../components/homeLayout";
// import allTeam from "../assets/constants/team.json";
// import MeetTeamCard from "../components/meetTeamCard";
import IgireApis from "../services/IgireApis";
import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import "../css/meetWithOurTeam.css";
import { Space, Spin } from "antd";

import Mbanda from "../assets/images/mbanda.jpg";

import jean from "../assets/images/jean jacke.jpg";
import Claire from "../assets/images/claire.jpg";
import Benjamin from "../assets/images/benjamin.jpg";

const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;
const MeetWithOurTeam = () => {
  const [allTeamData, setAllteamsData] = useState([]);
  useEffect(() => {
    IgireApis.getAllTeammate().then((res) => {
      console.log(res);
      setAllteamsData(res.data.data);
    });
  }, []);
  return (
    <HomeLayout>
      <div className="header-container">
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Meeet  </span>
              <span className="heading-primary--sub">With our team</span>
            </h1>
          </div>
        </header>
      </div>
      <div className="container-fluid meet-withTeam-container">
        <div className="row justify-content-around row-teamate-container">
          <div className="col col-md-5 col-lg-5 col1">
            <figure className="col1__shape">
              <img src={Mbanda} alt="teammate" className="teamate-image" />
              <h1 className="heading-primary">Mbanda Innocent</h1>
              <figcaption className="story__caption">
                CEO and cofounder
                <br />
                <a href="team1" className="btn-text">
                  Go to profile &rarr;{" "}
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col  col-md-5 col-lg-5 col1">
            <figure className="col1__shape">
              <img src={jean} alt="teammate" className="teamate-image" />
              <h1 className="heading-primary">Jean Jacques Iradukunda</h1>
              <figcaption className="story__caption--p2">
                CEO and cofounder
                <br />
                <a href="team2" className="btn-text">
                  Go to profile &rarr;{" "}
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col  col-md-5 col-lg-5 col1">
            <figure className="col1__shape">
              <img src={Claire} alt="teammate" className="teamate-image" />
              <h1 className="heading-primary">Claire Nkamushaba</h1>
              <figcaption className="story__caption--p3">
                CEO and cofounder
                <br />
                <a href="team3" className="btn-text">
                  Go to profile &rarr;{" "}
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col  col-md-4 col-lg-4 col1">
            <figure className="col1__shape">
              <img src={Benjamin} alt="teammate" className="teamate-image" />
              <h1 className="heading-primary">Iyamuremye Benjamin</h1>
              <figcaption className="story__caption--p4">
                CEO and cofounder
                <br />
                <a href="team4" className="btn-text">
                  Go to profile &rarr;{" "}
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default MeetWithOurTeam;
