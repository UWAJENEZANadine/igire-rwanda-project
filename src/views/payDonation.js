import React, { useState } from "react";
import Homelayout from "../components/homeLayout";
import "./payDonation.css"
import don from "../assets/img/don.jpg";
import dona from "../assets/img/dona.jpg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



const payDonation = () => {
    const [checked, setChecked] = ([true]);
    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };
    const [month, setMonth] = ('');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };
    const [name, setName] = ('');
    const handleChange4 = (event) => {
        setName(event.target.value);
    };



    return (
        <Homelayout>

            <div className="paydonation-container">
                <div className="donation-image">
                    <img src={don} />
                    <h2 style={{ marginTop: "40px", marginLeft: "60px" }}><strong>CHOOSE YOUR DONATION</strong></h2>
                    <div className="amount">
                        <Button style={{ marginTop: "2%", marginLeft: "60px" }}>
                            <Button style={{ marginLeft: "0%", backgroundColor: "#EEB00F", color: "white" }}>$40.00</Button>
                            <Button style={{ marginLeft: "2%", backgroundColor: "#EEB00F", color: "white" }}>$25.00</Button>
                            <Button style={{ marginLeft: "2%", backgroundColor: "#EEB00F", color: "white" }}>$30.00</Button>
                            <Button style={{ marginLeft: "2%", backgroundColor: "#EEB00F", color: "white" }}>$100.00</Button>
                            <Button style={{ marginLeft: "2%", backgroundColor: "#EEB00F", color: "white" }}>$20.00</Button>
                        </Button>
                    </div>
                    <Button style={{ backgroundColor: "#EEB00F", marginTop: "5px", marginLeft: "60px", color: "white" }}>Custom Account</Button>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        <FormControlLabel style={{ marginLeft: "40px" }}
                            label="make this donation every"
                            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                        />
                    </Box>
                    <FormControl style={{ height: "5vh", width: "20%", marginLeft: "60px" }}>
                        <InputLabel>Month</InputLabel>
                        <Select
                            // labelId="demo-simple-select-label"
                            // id="demo-simple-select"
                            value={month}
                            label=""
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Day</MenuItem>
                            <MenuItem value={20}>Week</MenuItem>
                            <MenuItem value={30}>Year</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="personal">
                        <div className="personal-info">
                            <h4>Personal Information</h4>
                            <div className="personal-data">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-name"
                                        label="First Name"
                                        value={name}
                                        onChange={handleChange4}
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Last Name"
                                        value={name}
                                        onChange={handleChange4}
                                    />

                                </Box>
                                <TextField style={{ width: "45%", marginLeft: "10px", marginTop: "10px" }} label="Email Address" id="" />

                            </div>
                            <Button style={{ backgroundColor: "#EEB00F", width: "40%", marginTop: "5%", marginLeft: "5%", color: "white" }}>
                                Donate Now
                            </Button>
                        </div>


                    </div>
                </div>




                <div className="desc-donation">
                    <h3 style={{ padding: "5%", textAlign: "center" }}>Igire Rwanda Donation</h3>
                    <div className="desc-paragraph">
                        <p>Igire Rwanda Organisation [IRO] is a Non-Governmental organisation that was established in 2016. The major foundation of the organisation was to reach out to youth with the provision of opportunities for growth to make sure that they are self-reliant and capable of helping all youth in the country to develop. Igire Rwanda Organization helps youth to use skills, talents and opportunities they have to create solutions to the challenge facing our community
                        </p>
                        <img src={dona} />
                    </div>
                    <div className="don-ti">
                        <h5 style={{color:"black",marginTop:"8%",marginLeft:"5%"}}>Your Donation Can Save life</h5>

                    </div>
                    <Button style={{ backgroundColor: "#EEB00F", width: "40%", marginLeft: "10%", color: "black",fontWeight:"bold" }}>
                        Donate Now
                    </Button>
                </div>


            </div>

        </Homelayout>
    )
}
export default payDonation;