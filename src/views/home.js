import React from "react";
import { Carousel } from "antd";

import "./home.css";
import HomeLayout from "../components/homeLayout";
import Video from "../components/video/vvideo2.mp4";
import "./query.css";
import can from "../assets/img/can.jpg";
import awe from "../assets/img/awe.jpg";
import igire from "../assets/img/igire.jpg";

import currentBlogs from "../assets/constants/currentBlogs.json";
const Home = () => {
  const contentStyle = {
    height: "100px",
    color: "#fff",
    lineHeight: "100px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <HomeLayout>
      <div className="home-container">
        <div class="video-container">
          <video autoPlay loop muted>
            <source
              src={Video}
              type="video/mp4"
              style={{ width: "30%", height: "40%" }}
            />
          </video>
          <div class="card">
            <div class="image"></div>
            <div class="details">
              <h2 style={{ color: "white", marginTop: "2rem" }}>
                IGIRE RWANDA{" "}
              </h2>

              <div class="center">
                <h1>
                  Build Your Future
                  <br />
                  <span>Is Our Goal</span>
                </h1>
                <p>
                  IRO is a non-governmental organization with the aim of
                  empowering the youth to achieve self-reliance. We are
                  currently running @ShecancodeRw and @AWERwanda.
                </p>
              </div>
            </div>
            <button
              style={{
                zIndex: "11",
                color: "black",
                marginRight: "8rem",
                width: "40%",
              }}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="blog-container">
          <div className="sidebar1">
            <div className="container-img">
              <img src={can} className="blog-imgs" />
              <div className="donate-txt">
                <a href="/payDonation">Donate</a>
              </div>
            </div>

            <h3 className="blog-title">SheCanCODE Rwanda</h3>
            <div className="blog-content">
              <p className="blog-paragraph">
                SheCanCode School of coding, a project launched by Igire Rwanda
                Organization( IR0) in collaboration with US Embassy Kigali
                aiming to bridge the digital skills gap by inspiring women to
                enter and remain in the tech industry.
              </p>
              <div className="sisebarSocial">
                <i className="topIcon fab fa-facebook-square facebook"></i>
                <i className="topIcon fab fa-instagram-square instagram"></i>
                <i className="topIcon fab fa-twitter-square twitter"></i>
                <i className="topIcon fab fa-linkedin-square linkedin"></i>
              </div>
              <div className="btn-blog">
                <a href="/Donate" className="btn-btn-blog">
                  Read More &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar1">
            <div className="container-img">
              <img src={awe} className="blog-imgs" />
              <div className="donate-txt">
                <a href="/payDonation">Donate</a>
              </div>
            </div>
            <h3 className="blog-title">AWE Rwanda</h3>
            <div className="blog-content">
              <p className="blog-paragraph">
                U.S. Embassy initiative to support women entrepreneurs. Rwanda
                women entrepreneurs aged 18-35 will receive personalized
                business mentorship, as well as professional knowledge, tools
                and networks, in order to turn their ideas into successful
                {/* businesses. */}
              </p>
              <div className="sisebarSocial">
                <i
                  href="https://www.facebook.com/igirerwandaorganization/"
                  className="topIcon fab fa-facebook-square facebook"
                ></i>
                <i className="topIcon fab fa-instagram-square instagram"></i>
                <i className="topIcon fab fa-twitter-square twitter"></i>
                <i className="topIcon fab fa-linkedin-square linkedin"></i>
              </div>
              <div className="btn-blog">
                <a href="/Donate" className="btn-btn-blog">
                  Read More &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="sidebar1">
            <div className="container-img">
              <img src={igire} className="blog-imgs" />
              <div className="donate-txt">
                <a href="/payDonation">Donate</a>
              </div>
            </div>
            <h3 className="blog-title">IRO Rwanda</h3>
            <div className="blog-content">
              <p className="blog-paragraph">
                Igire Rwanda Organization runs 2 major Programs namely ;
                ‘SheCanCode’ and ‘AWE - Rwanda’ as a foundation to reach out to
                helps youth to use skills, talents and opportunities they have
                to create solutions to the challenge facing our community
              </p>
              <div className="sisebarSocial">
                <i className="topIcon fab fa-facebook-square facebook"></i>
                <i className="topIcon fab fa-instagram-square instagram"></i>
                <i className="topIcon fab fa-twitter-square twitter"></i>
                <i className="topIcon fab fa-linkedin-square linkedin"></i>
              </div>
              <div className="btn-blog">
                <a href="/Donate" className="btn-btn-blog">
                  Read More &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-container">
          <Carousel autoplay>
            {currentBlogs.map((blog) => (
              <>
                <div>
                  <img
                    src={blog.image[0]}
                    style={{ height: "20rem", margin: "0 auto" }}
                  />
                </div>
                <div className="title">{blog.title}</div>
                <div className="description">{blog.description}</div>
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
