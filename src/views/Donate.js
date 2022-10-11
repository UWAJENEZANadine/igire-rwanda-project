import React, { useState } from "react";
import Button from '@mui/material/Button';
import Homelayout from "../components/homeLayout";
import { useNavigate } from 'react-router-dom'
import "./Donate.css";
import { Input, notification, Space } from "antd";
import { Modal, Form, InputNumber, Checkbox } from "antd";
import { DownOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";

// import code from "../assets/img/code.jpg";
import can from "../assets/img/can.jpg";
import awe from "../assets/img/awe.jpg";
import igire from "../assets/img/igire.jpg"





const Donate = () => {
    const { Search } = Input;
    const [visible, setVisible] = useState(false);
    const [donatevisible, setDonateVisible] = useState(false);
    const navigate = useNavigate();


    return (
        <Homelayout>


            {/* 76 css donate-card */}
            <div className="image-container">
                <h2 style={{ width:"80%", marginLeft:"10%", textAlign: "center", marginTop: "10px", fontSize: "150%" }}> Youth With The Provision Of Opportunities For Growth The Country To Develop.
                    Find Donation Causes You Like to Support</h2>

            </div>

            <ul class="donate-cards">
                <li>
                    <a href="" class="donate-card">
                        <img src={can} />
                        <div className="description2">
                        <div class="donate-card__header-text">
                                
                                <h3 class="donate-card__title">She Can Code</h3>            
                            </div>
                            <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>

                        </div>
                        <div class="donate-card__overlay">
                            <div className="buto">
                       <a href="/shecandesc"> <Button style={{ backgroundColor: "#EEB00F",color:"white",marginLeft:"30%",width:"40%",height:"10vh",borderRadius:"5%",marginBottom:"3%"}}>  Donate </Button></a>
                        </div>
                            <div class="donate-card__header">
                                
                               
                            </div>
                          

                        </div>
                    </a>
                </li>
                <li>
                    <a href="" class="donate-card">
                        <div class="donate-card__overlay">
                        <div className="buto">
                        <a href="/Descriptawe"><Button style={{ backgroundColor: "#EEB00F",color:"white",marginLeft:"30%",width:"40%",height:"10vh",borderRadius:"5%",marginBottom:"3%" }}>  Donate </Button></a>
                        </div>
                            <div class="donate-card__header">
                                
                            </div>
                           
                              
                          
                        </div>
                        <img src={awe} />
                        <div className="description2">
                        <div class="donate-card__header-text">
                                    <h3 class="donate-card__title">Awe Rwanda</h3>
                                </div>
                            <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>

                        </div>




                       

                    </a>
                </li>
                <li>
                    <a href="" class="donate-card">
                        <img src={igire} />
                      
                        <div className="description2">
                        <div class="donate-card__header-text">
                                    <h3 class="donate-card__title">Igire Rwanda Organisation</h3>
                                </div>
                            <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>

                        </div>
                        <div class="donate-card__overlay">
                            <div className="buto">
                        <a href="/payDonation"><Button style={{ backgroundColor: "#EEB00F", color:"white",marginLeft:"30%",width:"40%",height:"10vh",borderRadius:"5%",marginBottom:"3%" }}>  Donate </Button></a>
                        </div>
                            <div class="donate-card__header">
                                
                            </div>
                           
                        </div>
                    </a>
                </li>
            </ul>



        </Homelayout>
    )



}
export default Donate;
