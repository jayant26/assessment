import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import name from '../res/name.jpg';
import Mail from '../res/Mail.jpg';
import phone from '../res/phone.jpg';
import link from '../res/link.jpg';
import Flag from '../res/Flag.jpg';
import Country from '../res/Country.jpg';
import City from '../res/City.jpg';
import Pin from '../res/Pin.png';
import shape1 from '../res/shape1.png';
import shape2 from '../res/shape2.png'
const Registration = () => {
    const navigate = useNavigate();
    const [i_name, seti_name] = useState("");
    const [i_email, seti_email] = useState("");
    const [No, setNo] = useState("");
    const [linkedin, setlinkedin] = useState("");
    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [pin, setpin] = useState("");
    const [ischecked, setischecked] = useState(false);
    const [showInput, setShowInput] = useState({
        name: false,
        email: false,
        phone: false,
        linkedin: false,
        country: false,
        state: false,
        city: false,
        pin: false,
    });

    const handlesubmit = () => {
        Axios.post("http://localhost:3001/investor/register", {
            i_name: i_name,
            i_email: i_email,
            Number: No,
            linkedin: linkedin,
            country: country,
            state: state,
            city: city,
            pin: pin
        }).then((response) => {
            console.log(response);
            // alert(response.data.message);
            if(response.data.message)
            {
               
                alert(response.data.message);
                // window.location.reload(false);
            }
            else
            {
                navigate(`/home/${response.data.id}`);
            }
            

        });
    }
    const handleClick = (field) => {
        setShowInput((prev) => ({ ...prev, [field]: true }));
    };

    return (
        <div className='register-page'>
<div className='semicircle-container-register'><div class="semicircle-register"></div></div>
            <h1 align='center'>
                <span>Create </span>
                <span
                    style={{
                        color: '#005642',
                    }}
                >
                    Investor <span className='underlined-text'>Profile</span>
                </span>
            </h1>
            <div style={{ display: "flex", justifyContent: "space-between" }} >
                <div className='registration_background_image' style={{ alignSelf: "flex-start" }}>
                    <img src={shape1} style={{ position: "absolute", width: "30%" }} />
                    <img src={shape2} style={{ width: "35vh" }} />
                </div>
                <div className="registration_container" style={{ marginRight: "180px" }}>
                    <div className="registration_input" onClick={() => handleClick('name')}>
                        <img src={name} className="registartion_image" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div><label for="name">Name</label></div>
                            {showInput.name && <input type="text" id="name" onChange={(e) => { seti_name(e.target.value) }} required />}
                        </div>
                    </div>
                    <div className="registration_input" onClick={() => handleClick('email')}>
                        <img src={Mail} className="registartion_image" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div><label for="email">Email</label></div>
                            {showInput.email && <input type="text" id="email" onChange={(e) => { seti_email(e.target.value) }} required />}
                        </div>
                    </div>
                    <div className="registration_input" onClick={() => handleClick('phone')}>
                        <img src={phone} className="registartion_image" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div><label for="number">Phone no.</label></div>
                            {showInput.phone && <input type="text" id="number" onChange={(e) => { setNo(e.target.value) }} required />}
                        </div>
                    </div>
                    <div className="registration_input" onClick={() => handleClick('linkedin')}>
                        <img src={link} className="registartion_image" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div><label for="link">Linkedin Link</label></div>
                            {showInput.linkedin && <input type="text" id="link" onChange={(e) => { setlinkedin(e.target.value) }} required />}
                        </div>
                    </div>
                    <div className="registration_input" onClick={() => handleClick('country')}>
                        <img src={Flag} className="registartion_image" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div><label for="country">Country</label></div>
                            {showInput.country && <input type="text" id="country" onChange={(e) => { setcountry(e.target.value) }} required />}
                        </div>
                    </div>
                    <div className="registration_input" onClick={() => handleClick('state')}>
                        <img src={Country} className="registartion_image" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div><label for="state">State</label></div>
                            {showInput.state && <input type="text" id="state" onChange={(e) => { setstate(e.target.value) }} required />}
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className="registration_input" style={{ width: '45%', marginRight: '18px' }} onClick={() => handleClick('city')}>
                            <img src={City} className="registartion_image" />
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div><label for="city">City</label></div>
                                {showInput.city && <input type="text" id="city" style={{ width: '70%' }} onChange={(e) => { setcity(e.target.value) }} required />}
                            </div>
                        </div>
                        <div className="registration_input" style={{ width: '45%' }} onClick={() => handleClick('pin')}>
                            <img src={Pin} className="registartion_image" />
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div><label for="pin">Pin code</label></div>
                                {showInput.pin && <input type="text" id="pin" style={{ width: '70%' }} onChange={(e) => { setpin(e.target.value) }} required />}
                            </div>
                        </div>
                    </div>
                    <div className="registration_input" style={{padding:"15px"}}>
                        <input
                            type="checkbox"
                            style={{
                                width: "40px",
                                marginRight: "15px",

                            }}
                            onClick={() => {
                                setischecked(!ischecked);
                            }}
                        />

                        <p style={{ fontSize: "12px" }}>
                            I hereby by agree to terms and conditions and whatever information is asked for i have provided the right information
                        </p>
                    </div>
                    {ischecked ? (<><button onClick={handlesubmit}>Next</button></>) : (<button style={{ backgroundColor: "gray" }}>Next</button>)}


                </div>
            </div>
        </div>
    );
};

export default Registration;
