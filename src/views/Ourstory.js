import React from "react";
import "./queries2.css";
import "./Ourstory.css";
import HomeLayout from "../components/homeLayout";
import found from "../assets/img/found.jpg";
import { DownCircleOutlined } from "@ant-design/icons";



const Ourstory = () => {
  return (
    <HomeLayout>
      <>
        <div className="story-container">
            <div className="story1-image">
            <img src={found} />
            <h1><strong>OUR STORY</strong></h1>
          </div>  
          <div className="story1-container">
            <div className="story-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aoiI6p1XxW0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="story-discription">
              <h3 className="story-heading">VIDEO ABOUT OUR STORY</h3>
              <p className="story-paragraph">
                Igire Rwanda Organisation [IRO] is a Non-Governmental
                organisation that was established in 2016. The major foundation
                of the organisation was to reach out to youth with the provision
                of opportunities for growth to make sure that they are
                self-reliant and capable of helping all youth in the country to
                develop. Igire Rwanda Organization helps youth to use skills,
                talents and opportunities they have to create solutions to the
                challenge facing our community
              </p>
              <div className="btn-blog">
                <a href="" className="btn-btn-blog">
                  Read More &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* <div className="story1"></div> */}
          {/* <div className="story1"></div>
    <div className="story1"></div> */}
        </div>

        <div className="story-card">
          <div>
            <h3 className="story-our">
              <DownCircleOutlined
                style={{
                  paddingRight: "1rem",
                  fontSize: "40px",
                  color: "green",
                }}
              />
              Our Story
            </h3>
            <p className="our-paragraph">
            SheCanCode School of coding, a project launched by Igire Rwanda Organization( IR0) in collaboration with US Embassy Kigali aiming to bridge the digital skills gap by inspiring women to enter and remain in the tech industry.
            </p>
          </div>
          <div>
            <h3 className="story-our">
              <DownCircleOutlined
                style={{
                  paddingRight: "1rem",
                  fontSize: "40px",
                  color: "green",
                }}
              />
              Our Story
            </h3>
            <p className="our-paragraph">
            Through the academy, Rwanda women entrepreneurs aged 18-35 will receive personalized business mentorship, as well as professional knowledge, tools and networks, in order to turn their ideas into successful businesses.
            </p>
          </div>
          <div>
            <h3 className="story-our">
              <DownCircleOutlined
                style={{
                  paddingRight: "1rem",
                  fontSize: "40px",
                  color: "green",
                }}
              />
              Our Story
            </h3>
            <p className="our-paragraph">
            Igire Rwanda Organization runs 2 major Programs namely; ‘SheCanCode’ and ‘Academy for Women Entrepreneurs- Rwanda’ as a foundation to reach out to youth with the provision of opportunities for growth to make sure that they are self-reliant and capable of helping all youth in the country to develop.
            </p>
          </div>
        </div>
      </>
    </HomeLayout>
  );
};
export default Ourstory;
