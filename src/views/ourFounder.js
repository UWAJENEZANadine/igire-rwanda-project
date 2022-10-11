import React from "react";
import Homelayout from "../components/homeLayout";
import "./ourFounder.css"
import Mbanda2 from "../assets/img/mbanda2.jpg";
import jajay from "../assets/img/jajay.jpg";
import found from "../assets/img/found.jpg"



const OurFounder = () => {
    return (
        <Homelayout>
            <div className="container-fluid ourfounder-container">

                <div className="container-founder">
                    <img src={found} />
                    <h1><strong>ABOUT OUR FOUNDER</strong></h1>
                </div>

                <div className="image-founder">
                    {/* <h5 style={{marginLeft:"10rem"}}>FOUNDER OF IRO</h5> */}
                    <img src={Mbanda2} />

                    <p>Innocent Mbanda

                        is a social entrepreneur and founder of Igire Rwanda Foundation,
                        an organisation that works with youth to help them become
                        self-reliant socio-economically, through entrepreneurship, capacity building
                        and varied opportunities.
                    </p>

                </div>
                <div className="image-founder2">
                    <img src={jajay} />
                    <p>Jean Jacques Iradukunda, (born June 1994, Rwanda), is a Rwandan development practitioner, who CoFounded Igire Rwanda Organization. Jean Jacques graduated his high school education as a Languages
                        Teacher from a teacher training institution. In 2015, he was admitted to Kepler University Program to pursue his Bachelor of Healthcare Management with Global Perspectives in Concentration from Southern
                        New Hampshire University. In 2016, he was offered a Teaching Assistant position of Professional Competencies class at Kepler. He was later promoted to become a Full Time Lecturer in Communications and
                        Professional Competencies where he facilitated the first-year students to acquire those important skills
                        they need to access job opportunities. He worked as an Academic Advisor to students Kepler students
                        working on their College for America projects so as to receive their degrees from Southern New Hampshire University. In 2019, Jean Jacques decided to dedicate his full-time efforts to the development of Igire
                        Rwanda Organization so as to serve the Rwandan community with development projects that the organization implements.
                    </p>
                </div>
            </div>

        </Homelayout>
    )

}
export default OurFounder;