import React from "react";
import "../App.css";
import HomeLayout from "../components/homeLayout";
import blog from "../assets/images/blog.jpeg";
import "./queries2.css";
import "./blogs.css";
import shecancode from "../assets/images/shecancode.jpg";
import israelpc from "../assets/images/israelpc.jpeg";
import awe1 from "../assets/images/awe1.jpeg";

const Blogs = () => {
  return (
    <HomeLayout>
      <div className="blog-header">
        <img src={blog} className="blogImg" />
        <p className="headering">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetuaut
          quisquam cupiditate in est quia provident numquam harum enim, ipsum
          quae at architecto minus voluptas! Sapiente inventore aperiam in
          blanditiis!
        </p>
      </div>
      <div className="blog-container">
        <div className="sidebar1">
          <img src={shecancode} className="blog-imgs" />
          <h3 className="blog-title">SheCanCODE Graduation</h3>
          <div className="blog-content">
            <p className="blog-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetuaut quisquam cupiditate in est quia provident numquam
              harum enim, ipsum quae at architecto minus voluptas! Sapiente
              inventore aperiam in blanditiis!
            </p>
            <div className="sisebarSocial">
              <i className="topIcon fab fa-facebook-square facebook"></i>
              <i className="topIcon fab fa-instagram-square instagram"></i>
              <i className="topIcon fab fa-twitter-square twitter"></i>
              <i className="topIcon fab fa-linkedin-square linkedin"></i>
            </div>
            <div className="btn-blog">
              <a href="" className="btn-btn-blog">
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar1">
          <img src={israelpc} className="blog-imgs" />
          <h3 className="blog-title">Israel Partner</h3>
          <div className="blog-content">
            <p className="blog-paragraph">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur aut quisquam cupiditate in est quia provident numquam
              harum enim, ipsum quae at architecto minus voluptas! Sapiente
              inventore aperiam in blanditiis!
            </p>
            <div className="sisebarSocial">
              <i className="topIcon fab fa-facebook-square facebook"></i>
              <i className="topIcon fab fa-instagram-square instagram"></i>
              <i className="topIcon fab fa-twitter-square twitter"></i>
              <i className="topIcon fab fa-linkedin-square linkedin"></i>
            </div>
            <div className="btn-blog">
              <a href="" className="btn-btn-blog">
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="sidebar1">
          <img src={awe1} className="blog-imgs" />
          <h3 className="blog-title">AWE Graduation</h3>
          <div className="blog-content">
            <p className="blog-paragraph">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur aut quisquam cupiditate in est quia provident numquam
              harum enim, ipsum quae at architecto minus voluptas! Sapiente
              inventore aperiam in blanditiis!
            </p>
            <div className="sisebarSocial">
              <i className="topIcon fab fa-facebook-square facebook"></i>
              <i className="topIcon fab fa-instagram-square instagram"></i>
              <i className="topIcon fab fa-twitter-square twitter"></i>
              <i className="topIcon fab fa-linkedin-square linkedin"></i>
            </div>
            <div className="btn-blog">
              <a href="" className="btn-btn-blog">
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-video-container">
        <div className="blogs-video">
          <div className="blog-video-part">
            <h5>See More Video</h5>
            <div className="video-title">
              <iframe
                width="460"
                height="215"
                src="https://www.youtube.com/embed/aoiI6p1XxW0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="blog-date">
                <h6>SheCanCODE Rwanda</h6>
                <p>march 2, 2022</p>
              </div>
            </div>
            <div className="video-title">
              <iframe
                width="460"
                height="215"
                src="https://www.youtube.com/embed/C09DUw_JNDo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="blog-date">
                <h6>SheCanCODE Rwanda</h6>
                <p>march 2, 2022</p>
              </div>
            </div>
          </div>
          <div className="blog-pragraph">
            <h5>Visit High School Student</h5>
            <p>
              About See all Kigali, Rwanda Igire Foundation is an Organization
              intending to provide the rural, illiterate, unconsidered with the
              business skills they need to become entrepreneurs. Igire Rwanda
              Organisation [IRO] is a Non-Governmental organisation that was
              established in 2016.{" "}
            </p>
            <p>
              The major foundation of the organisation was to reach out to youth
              with the provision of opportunities for growth to make sure that
              they are self-reliant and capable of helping all youth in the
              country to develop. Igire Rwanda Organization helps youth to use
              skills, talents and opportunities they have to create solutions to
              the challenge facing our community.
            </p>

            {/* with the provision of opportunities for growth to make sure that
              they are self-reliant and capable of helping all youth in the
              country to develop. Igire Rwanda Organization helps youth to use
              skills, talents and opportunities they have to create solutions to
              the challenge facing our community */}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
export default Blogs;
