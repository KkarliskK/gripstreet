import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Style/index.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Image_no_bg from '../img/gripstreet_no_bg.png';
import Background from '../img/background.jpg';


export default function App() {

    const navigate = useNavigate();

    const navigateToJoin = () => {
        navigate('/join');
    };

    const navigateToGallery = () => {
        navigate('/gallery');
    };

    const navigateToContacts = () => {
        navigate('/contacts');
    };

    const navigateToCalendar = () => {
        navigate('/calendar');
    };

    return (
        <>
        <div className="cont1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@60,1000,10,10" />
            <Header />
            <div className="background">
                <div className="photo">
                    <div className="logo w3-container w3-center w3-animate-top">
                        <img src= {Image_no_bg} alt="" />
                    </div>
                    <a href="#middle" className="down"><span class="down-arrow vert-move">expand_more</span></a>
                </div>
                <div className="desc">
                    <h1>GripStreetLatvija</h1>
                </div>
            </div>



        <div className="middle" id = "middle">
            <div className="join">
                <h1>Autoklubs | Dodamies kopa izbraucienos un visādas aktivitātes, šeit var iepazīties ar cilvēkiem kam arī intresē mašīnas. Nāc un pievienojies mums!</h1>
                <button onClick={navigateToJoin} >Pievienojies šeit!</button>
            </div>
            <div className="options">
                <div className="first">
                    <h1>Galerija</h1>
                    <button onClick={navigateToGallery} >Apskatīt galeriju</button>
                </div>
                <div className="second">
                    <h1>Kalendārs</h1>
                    <button onClick={navigateToCalendar} >Apskatīt kalendārs</button>
                </div>
                <div className="third">
                    <h1>Kontakti</h1>
                    <button onClick={navigateToContacts} >Apskatīt kontaktus</button>
                </div>
            </div>
            <div className="links">
                <div className="fb">
                    <a href="https://www.facebook.com/profile.php?id=61551949856715" target="_blank">
                        <img src="https://qwestore.com/png_images_min/10/bFacebook-logob-bBlack-iconb-FB-icon-7384.png" alt="" />
                        <h1>GripStreet</h1>
                    </a>
                </div>
                <div className="tt">
                    <a href="https://www.tiktok.com/@gripstreetlv" target="_blank">
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/tiktok-logo-black-png.png" alt="" />
                        <h1>GripStreet</h1>
                    </a>
                </div>
                <div className="ig">
                    <a href="https://www.instagram.com/gripstreetlv/" target="_blank">
                        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3270077/instagram-icon-md.png" alt="" />
                        <h1>GripStreet</h1>
                    </a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
