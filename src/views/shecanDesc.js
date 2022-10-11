import React from "react";
import Homelayout from "../components/homeLayout";
import "./shecanDesc.css";
import igire from "../assets/img/igire.jpg"
import Button from '@mui/material/Button'

const Shecandescript = () => {

    return (
        <Homelayout>
            <div className="desc-shecan-container">
                <div className="desc-content">
                    <h1>SHE CAN CODE.</h1>
                    <div className="paragraphy-content">
                        <div className="para1">
                            <p>SheCanCode School of coding,
                                a project launched by Igire Rwanda Organization( IR0) in collaboration with
                                US Embassy Kigali aiming to bridge the digital skills gap by
                                inspiring women to enter and remain in the tech industry.
                                This is a 14 weeks intensive coding bootcamp,
                                where the learners learn how to develop mobile and web applications focusing on
                                changing and entering their careers in the technology industry.
                                In addition to programming skills, the program equips students with a foundation in design,
                                innovation, entrepreneurship, so that they may go on to solve important issues facing their own communities.
                            </p>
                            <img src={igire} />

                        </div>
                        <div className="para2">
                            <p>SheCanCode inspires and trains women in Rwanda to design full
                                function web and mobile applications for a period of 14 weeks and
                                connect the finalists with tech companies for job placement.</p>
                        </div>
                    </div>
                    <a href="/payDonation"><Button style={{ backgroundColor: "#EEB00F", color: "white", marginLeft: "55%", width: "10%", height: "10vh", borderRadius: "3%", marginTop: "32%" }}>  Donate </Button></a>
                </div>
            </div>
        </Homelayout>
    )
}
export default Shecandescript