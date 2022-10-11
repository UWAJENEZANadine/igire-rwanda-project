import React from "react";
import HomeLayout from "../../components/homeLayout";
import can from "../../assets/images/claire.jpg";

const Team3 = () => {
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
                  Claire Nkamushaba
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-2">
                  Operations Manager & Partners Coordinator at Igire Rwanda
                  Organization
                </h3>
                <p className="paragraph">
                  An adept all-round person with a passion for the issues that
                  concern the community especially youth. Proficient at
                  planning, monitoring, and operations of different
                  youth-targeted projects, and also experienced in other fields
                  as Public Health. I have been able to acquire various
                  recognitions under those fields and have always been motivated
                  by the need for change and improvement.
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
export default Team3;
