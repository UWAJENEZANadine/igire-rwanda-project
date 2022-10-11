import React from "react";
import logo from "../assets/image/igire.jpg";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container-footer ">
        <div className="row rows justify-content-around">
          <div className="col-10 col-xs-10 cols1 col-sm-2 h-2 col-md-5 col-lg-3 cols1">
            <div className="logo">
              <img src={logo} />
            </div>

            <p style={{ width: "100%" }}>
              IRO is a non-governmental organization with the aim of empowering
              the youth to achieve self-reliance. We are currently running
              <a href=""> @ShecancodeRw</a> and <a href="">@AWERwanda</a>
            </p>

            <div className="footer-icon" style={{ alignItems: "center" }}>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social"
                  style={{ background: "#3B5998", marginLeft: "50px" }}
                />
              </a>
              <a href="https://twitter.com/igirerwandaorg">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social"
                  style={{ background: "#55ACEE" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="social"
                  icon={faGooglePlusG}
                  style={{ background: "#DD4B39" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="social"
                  icon={faLinkedinIn}
                  style={{ background: "#0976B4" }}
                />
              </a>
            </div>
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 col-lg-2 px-4 cols2 ">
            <h1>
              Navigation{" "}
              <hr style={{ height: "2px", color: "white", width: "35%" }} />{" "}
            </h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutUS">Who we are?</a>
              </li>
              <li>
                <a href="/aweprogram">Our Program</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/Contactus">Contact US</a>
              </li>
              {/* <li>
                <a href="#">Gallery</a>
              </li> */}
            </ul>
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 mb-2 col-lg-3 cols3">
            <h1>
              Our Services{" "}
              <hr style={{ height: "2px", color: "white", width: "20%" }} />{" "}
            </h1>

            <p>SheCanCode Program </p>
            <p>guide youth to achieve self-reliance.</p>
            <p>skills </p>
            <p>STEM training program</p>
            <p>Application for Admission</p>
            {/* <p>project skills </p> */}
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 col-lg-3 cols4 ">
            <h1>
              Contact US{" "}
              <hr style={{ height: "2px", color: "white", width: "20%" }} />{" "}
            </h1>

            <p>
              {" "}
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;kacyiru, 549 IRO
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                style={{ fontSize: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;igirerwanda@gmail.com
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+250 788 737 287</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPrint} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+1(614) 816-7227</a>
            </p>
          </div>
          <hr className="big-line" />
          <div className="sub-footer">
            <p style={{ margin: "0 auto", alignItems: "center" }}>
              &copy; 2020 Copyright: <a href="">Igire Rwanda</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
