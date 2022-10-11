import React from "react";
import Homelayout from "../components/homeLayout";
import "./descriptionAwe.css";
import awe from "../assets/img/awe.jpg";
import Button from '@mui/material/Button'

const awedescript = () => {

    return(
        <Homelayout>
            <div className="desc-awe-container">
                <div className="desc-content">
                  <h1>AWE Rwanda.</h1>
                  <div className="paragraphy-content">
                      <div className="Awe-para1">
                          <p>U.S. Embassy Kigali announces the opening of applications for the 2nd cohort of the Academy for Women Entrepreneurs (AWE) training program, a Department of State initiative to support women entrepreneurs globally. </p>
                               <img src={awe}/>

                      </div>
                      <div className="Awe-para2">
                          <p>Through the academy, Rwanda women entrepreneurs aged 18-35 will receive personalized business mentorship, as well as professional knowledge, tools and networks, in order to turn their ideas into successful businesses.</p>
                      </div>
                  </div>
                  <a href="/Descriptawe"><Button style={{ backgroundColor: "#EEB00F",color:"white",marginLeft:"40%",width:"10%",height:"10vh",borderRadius:"3%",marginTop:"15%"}}>  Donate </Button></a>
                </div>
            </div>
        </Homelayout>
    )
}
export default awedescript