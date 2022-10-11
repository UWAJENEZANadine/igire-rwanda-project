import React, { useState, useEffect } from "react";
import Video from "../components/video/Video.mp4";
import "../css/meetTeamCard.css";


const MeetTeamCard = ({data}) => {
 
  return (
    <>
      <div className="container meetTeamCard-container">
        <div className="row justify-content-around d-block">
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 meet-contaniner-col">
            <div className="team-image">
              <img
               
                src={data.profileImage}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  margin: "50px 0px 0px 40px",
                }}
              />
              <p style={{marginLeft:"50px", fontWeight:"900"}}>{data?.names}</p>
            </div>
            <div className="data-container">
              <h1 style={{ fontWeight: "900", marginLeft:"20%" }}>Position: {data?.Position}</h1>
              <p style={{ fontSize: "17px", letterSpacing:"1px"}} >{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTeamCard;

