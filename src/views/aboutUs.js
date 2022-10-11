import react from "react";
import HomeLayout from "../components/homeLayout";
import background from "../assets/images/background.jpeg";
import {
  SketchOutlined,
  EyeOutlined,
  ExceptionOutlined,
} from "@ant-design/icons";

import "../css/aboutUs.css";
const AboutUS = () => {
  return (
    <HomeLayout>
      <div className="aboutUS-container">
        <div className="bacground-image">
          <h1 className="about-header">About us </h1>
        </div>
        <div className="container-fluid ">
          <div className="row justify-content-around d-flex roww">
            <div className="col-10 col-sm-10 col-md-6 col-lg-3 column1">
              <SketchOutlined className="antdesign" />
              <h1 className="col1-header">MISSION</h1>
              <p style={{ color: "black" }} className="col1-paragrapgh">
                he mission of Igire Rwanda Organization is to assist youth to
                amass knowledge and skills that lead to their self-reliance and
                enable them to create opportunities for other youth.
              </p>
            </div>
            <div className="col-10 col-sm-10 col-md-6 col-lg-3 column2">
              <EyeOutlined className="antdesign" />
              <h1 className="col2-header">VISION</h1>
              <p style={{ color: "black" }} className="col2-paragrapgh">
                To target and work with youth in their communities across the
                continent to empower them to create their own individual,
                dynamic life plans and support them in achieving their goals
                through improving access to knowledge, information and basic
                skills.
              </p>
            </div>
            <div className="col-10 col-sm-10 col-md-6 col-lg-3 column3">
            <ExceptionOutlined  className="antdesign" />
              <h1 className="col3-header">OUR PROJECT</h1>
              <p style={{ color: "black" }} className="col3-paragrapgh">
                We are currently running @ShecancodeRwanda we training to young
                women 18 -25 years with skills to code, build web design, and we
                running @AWERwanda to solve community problems through
                entrepreneurial trainings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUS;
