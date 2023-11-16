import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Style/index.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Image_no_bg from '../img/gripstreet_no_bg.png';


export default function App() {
    return (
        <>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@60,1000,10,10" />
            <Header />
            {/**HERE WE NEED TO MAKE THE MAIN PAGE**/}
            <div className="background">
                <div className="logo w3-container w3-center w3-animate-top">
                    <img src={Image_no_bg} alt="gripstreet_logo_no_bg" />
                </div>
                <div className="down"><span class="down-arrow vert-move">expand_more</span></div>
            </div>
            <div className="desc">
                <h1>GripStreetLatvija</h1>
            </div>
        </>
    )
}
