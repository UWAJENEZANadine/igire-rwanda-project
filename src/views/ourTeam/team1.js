import React from "react";
import HomeLayout from "../../components/homeLayout";
import can from "../../assets/images/mbanda.jpg";

const Team1 = () => {
  return (
    <HomeLayout>
      <div className="header-container">
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Meeet </span>
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
                  Mbanda Innocent
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-2">
                  Software Engineer at JPMorgan Chase & Co. | Co-founder of
                  SheCanCODE School
                </h3>
                <p className="paragraph">
                  Experienced software development passionate about technology
                  with a focus innovation and creating solutions that matter to
                  people’s lives. Skilled in Java, Spring, Hibernate JPA,
                  JavaScript, MVC, HTML, CSS, Flexbox, Grid, TDD, Agile (Scrum),
                  Object-Oriented Programming (OOP), AJAX, JSON, Restful APIs,
                  Responsive Design / Mobile, Structured Query Language (SQL),
                  Relational Databases, Source Control / Git.
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
export default Team1;
