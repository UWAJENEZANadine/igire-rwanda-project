import React from "react";
import HomeLayout from "../../components/homeLayout";
import can from "../../assets/images/jean jacke.jpg";

const Team2 = () => {
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
                  Jean Jacques Iradukunda
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-2">
                  Chief Executive Officer at Igire Rwanda Organization
                </h3>
                <p className="paragraph">
                  Jean Jacques’ professional career started as he co-founded
                  Igire Rwanda Organization, a youth empowerment organization
                  that seeks to provide young people with skills they need to
                  access job opportunities or create their own small businesses.
                  
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
export default Team2;
