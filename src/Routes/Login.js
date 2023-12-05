import React, { useState } from 'react';
import '../Style/login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { form_to_obj, get_form_object } from '../functions';
import Image_no_bg from '../img/gripstreet_no_bg.png';
import background from '../img/background.jpg';


export default function Login() {


    const navigate = useNavigate();

    const navigateToBlog = () => {
        navigate('/blog');
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

    const navigateToMain = () => {
        navigate('/');
    };

    const navigateToCalendar = () => {
        navigate('/calendar');
    };



    return (
        <>
        <div className="cont">
            <img id='background_image' src={background} alt='backgorund'/>
            <div className="left">
                <h1>Sveicināts Atpakaļ</h1>
                <div className='pointer flex' onclick={navigateToMain}>
                    <img src= {Image_no_bg} alt="" />
                </div>
                <div className="links">
                    <a href="https://www.tiktok.com/@gripstreetlv" target="_blank"><img src="https://www.edigitalagency.com.au/wp-content/uploads/tiktok-logo-black-png.png" alt="tiktok" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61551949856715" target="_blank"><img src="https://qwestore.com/png_images_min/10/bFacebook-logob-bBlack-iconb-FB-icon-7384.png" alt="facebook" /></a>
                    <a href="https://www.instagram.com/gripstreetlv/" target="_blank"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3270077/instagram-icon-md.png" alt="instagram" /></a>
                </div>
            </div>
            <div className="right">
                <h1>Pieslēgties</h1>
                <form name='login_form' id='login_form'>
                    <p>Epasta Adrese</p>
                    <input type='text'></input>
                    <p>Parole</p>
                    <input type='password'></input>
                    <p>Nav konta? <a onClick={navigateToRegister}>Uztaisi šeit</a></p>
                    <button name='sign_in' id='sign_in' className=''>Pieslēgties</button>
                </form>
            </div>
        </div>
        </>
    )
}