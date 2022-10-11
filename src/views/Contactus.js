import React from "react";
import Homelayout from "../components/homeLayout";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Form, Input, InputNumber, Button } from 'antd';
import SendIcon from '@mui/icons-material/Send';
import "./Contactus.css";
import {
  EnvironmentFilled,
  PhoneFilled,
  MailFilled
} from "@ant-design/icons"



const Contactus = () => {
  const { TextArea } = Input;
  return (
    <Homelayout>
      <div className="contactus-container">
        <div className="contactus-form">
          <div className="get-button">
            <Button variant="contained" sendIcon={<SendIcon />} style={{ backgroundColor: "green", color: "white", height: "6vh", fontWeight: "bold", float: "right", marginLeft: "-15%" }}>Get Started</Button>
          </div>
          <div className="contact-title">
            <h2>GET IN TOUNCH!</h2>
            <p>Level Up Your Brand</p>
          </div>
          <div className="contact-address">
            <div className="icons-contact">
              {/* <MailFilled style={{marginLeft:"90%",fontSize:"300%"}} /> */}
              <EnvironmentFilled style={{ marginLeft: "5%", fontSize: "250%", color: "black" }} />
              <p style={{ marginTop: "10%", marginLeft: "-15%" }}>102streetkn29</p>
              <PhoneFilled style={{ marginLeft: "20%", fontSize: "250%", color: "black" }} />
              <p style={{ marginTop: "10%", marginLeft: "-17%" }}>0788737287</p>
              <MailFilled style={{ marginLeft: "23%", fontSize: "250%", color: "black" }} />
              <p style={{ marginTop: "10%", marginLeft: "-20%" }}>iro@gmail.com</p>

            </div>
          </div>
          <div className="personal-contact">
            <div className="form">
              <Box
                // onFinish={onFinishSendMail}
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: "250px", color: "#000" },
                }}
                noValidate
                autoComplete="off"

              >
                <TextField id="standard-basic" label="Name" variant="standard" />
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Phone" variant="standard" />
              </Box>
            </div>
            <div className="contact-message">
              <p>type your message</p>
              <TextArea style={{ backgroundColor: "#DAE8E7", height: "30vh", width: "100%" }} />
            </div>
          </div>
          <div className="batoni">
            <Button variant="contained" sendIcon={<SendIcon />} style={{ backgroundColor: "#CFF4F2", color: "black", height: "8vh", marginTop: "1%", marginLeft: "15%", fontSize: "100%", fontWeight: "bold", borderRadius: "5%" }}>send message </Button>

          </div>
        </div>
      </div>
    </Homelayout>
  )
}
export default Contactus;
