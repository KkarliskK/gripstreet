import React, { useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import '../Style/header.scss';
import Image_no_bg from '../img/gripstreet_no_bg.png';


export default function Header() {

    const navigate =useNavigate();

    const navigateToBlog = () => {
        navigate('/blog');
    };

    const navigateToMain = () => {
        navigate('/');
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToCalendar = () => {
        navigate('/calendar');
    };

    const navigateToStore = () => {
        navigate('/store');
    };

    return(
        <div className='main_bar'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className = "logo">
                <img onclick={navigateToMain} src={Image_no_bg} alt="background_img" />
            </div>
            <div className = "buttons">
                <div className='header_item'>
                    <h1 onClick={navigateToBlog}>Blogs <span class="material-symbols-outlined">import_contacts</span></h1>
                </div>
                <div className='header_item'>
                    <h1 onClick={navigateToStore}>Mercha bode <span class="material-symbols-outlined">store</span></h1>
                </div>
                <div className='header_item'>
                    <h1 onClick={navigateToCalendar}>Kalendārs <span class="material-symbols-outlined">calendar_month</span></h1>
                </div>
                <div className='header_item'>
                    <h1 onClick={navigateToLogin}>Pierakstīties <span class="material-symbols-outlined">login</span></h1>
                </div>
            </div>
        </div>
    )
}
