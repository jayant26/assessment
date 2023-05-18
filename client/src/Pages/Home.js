import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import {  useEffect } from "react";
import logo from '../res/logo.jpg';
import back from '../res/back.jpg';
import notification from '../res/notification.jpg';
import placeholder from '../res/placeholder.jpg';
import Dashboard from '../components/Dashboard';
import Editprofile from '../components/Editprofile';
import Help from '../components/Help';
import Network from '../components/Network';
import Profile from '../components/Profile';
const Home = () => {
    const id=useParams();
    const [name,setname]=useState("");
    console.log(id.id);
    useEffect(() => {
        axios
          .get(`http://localhost:3001/investor/${id.id}`)
          .then((response) => {
            console.log(response.data);
            setname(response.data.name);
            
          });
      }, []);

    const [showMenu, setMenu] = useState({
        dashboard: true,
        profile: false,
        editprofile: false,
        network: false,
        help: false,
        logout: false
    });
    

    const handleClick = (field) => {
        const updatedMenu = Object.keys(showMenu).reduce((acc, item) => {
            acc[item] = item === field;
            return acc;
        }, {});

        setMenu(updatedMenu);
    };

    return (
        <div>
            <div className='semicircle-container-home-1'><div class="semicircle-home-1"></div></div>
            <div className='semicircle-container-home-2'><div class="semicircle-home-2"></div></div>

            <div className='Homepage_nav'>
                <div style={{ display: "flex" }}>
                    <img src={back} className=" item1 registartion_image" />
                    <img src={logo} className='item2' />
                </div>
                <img src={notification} className="item3 registartion_image" />
            </div>
            <div className='Homepage_container'>
                <div className='Homepage_sidebar'>
                    <img src={placeholder} style={{ width: "100px", alignSelf: "center", marginBottom: "20px", marginTop: "20px" }} />
                    <div style={{ alignSelf: "center", marginBottom: "30px" }}>{name}</div>
                    <div className='item1' onClick={() => { handleClick('dashboard') }} style={{ backgroundColor: showMenu.dashboard ? "#005642" : "", color: showMenu.dashboard ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Dashboard</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('profile') }} style={{ backgroundColor: showMenu.profile ? "#005642" : "", color: showMenu.profile ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Profile</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('editprofile') }} style={{ backgroundColor: showMenu.editprofile ? "#005642" : "", color: showMenu.editprofile ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Edit Profile</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('network') }} style={{ backgroundColor: showMenu.network ? "#005642" : "", color: showMenu.network ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>My Network</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('help') }} style={{ backgroundColor: showMenu.help ? "#005642" : "", color: showMenu.help ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Need Help?</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('logout') }} style={{ backgroundColor: showMenu.logout ? "#005642" : "", color: showMenu.logout ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Logout</span>
                    </div>
                </div>
                <div className='Homepage_content' style={{ width: "100%" }}>
                    {showMenu.dashboard && <Dashboard />}
                    {showMenu.profile && <Profile />}
                    {showMenu.editprofile && <Editprofile />}
                    {showMenu.network && <Network />}
                    {showMenu.help && <Help />}
                </div>
            </div>
        </div>
    );
};

export default Home;
