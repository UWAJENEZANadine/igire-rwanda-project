import React from "react";
import HomeLayout from "../../components/homeLayout";
import can from "../../assets/images/benjamin.jpg";

const Team4 = () => {
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
      <main className="main-about-container">
        <section className="section-stories">
          <div className="row2">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={can}
                  alt="a person on atour"
                  className="story-image"
                />
                <figcaption className="story__captions">
                  Iyamuremye Benjamin
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-2">
                  Full-Stack Software Developer
                </h3>
                <p className="paragraph">
                  I am a Full-stack software developer, have been working with
                  web development since 2016, the period during which I have
                  worked in different environments, from big consultancy
                  companies to start-ups. I am a self-motivated and self-taught
                  professional who likes to solve problems. I merge a passion
                  for usability and user experience with technical knowledge to
                  create cool digital experiences.
                </p>
                <a href="meetWithTeam" className="btn-texts">
                Go Back To Team &rarr;{" "}
              </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
};
export default Team4;
