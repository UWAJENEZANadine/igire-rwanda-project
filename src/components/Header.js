import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "./Header.css";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const menu = (
    <Menu style={{ width: "150%", paddingLeft: "20%", marginTop: "-10px" }}>
      <Menu.Item>
        <a trel="#" href="aboutUs" style={{ textDecoration: "none" }}>
          About Us
        </a>
      </Menu.Item>
      <Menu.Item>

        <a href="/ourFounder" style={{ textDecoration: "none" }}>

          About Our Founder
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="meetWithTeam" style={{ textDecoration: "none" }}>
          Meet Our Team
        </a>
      </Menu.Item>
      <Menu.Item>

        <a  href="/ourstory" style={{ textDecoration: "none" }}>

          Our Story
        </a>
      </Menu.Item>
    </Menu>
  );
  const menus = (
    <Menu style={{ width: "130%", paddingLeft: "20%", marginTop: "-10px" }}>
      <Menu.Item>
        <a
          href="https://www.shecancodeschool.org/"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          SHECANCODE
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href="https://awe-rwanda.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          AWERwanda
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="nav-area">
      <div className="logo-header">
        <img src={logo} />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className="menu-area">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Who we are
              </Link>
            </li>
          </Dropdown>
          <Dropdown overlay={menus} placement="bottomLeft" arrow>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Our Program
              </Link>
            </li>
          </Dropdown>

          <li className="nav-item">
            <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link
              to="/Contactus"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

     
      <div className="button-container" >
        <i>Call-Us:<b>(+250)788-737-287&nbsp;</b></i>
        
        <a href="/payDonation"> <button  style={{ backgroundColor: "#00390A", padding:"0.5rem 2rem", color: "white", borderRadius: "6px" }}>Donate</button></a> 

      
      </div>
    </div>
  );
};

export default Header;
