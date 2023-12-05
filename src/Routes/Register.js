import React, { useState } from 'react';
import '../Style/login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { form_to_obj, get_form_object } from '../functions';
import Image_no_bg from '../img/gripstreet_no_bg.png';
import background from '../img/background.jpg';

export default function Register() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
            <>
                <div className="cont">
                    <img id='background_image' src={background} alt='backgorund'/>
                    <div className="left">
                        <h1>Pievienojies mums</h1>
                        <img src= {Image_no_bg} alt="" />
                        <div className="links">
                            <a href="https://www.tiktok.com/@gripstreetlv" target="_blank"><img src="https://www.edigitalagency.com.au/wp-content/uploads/tiktok-logo-black-png.png" alt="" /></a>
                            <a href="https://www.facebook.com/profile.php?id=61551949856715" target="_blank"><img src="https://qwestore.com/png_images_min/10/bFacebook-logob-bBlack-iconb-FB-icon-7384.png" alt="" /></a>
                            <a href="https://www.instagram.com/gripstreetlv/" target="_blank"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3270077/instagram-icon-md.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="right">
                        <h1>Izveidot kontu</h1>
                        <form name='register_form' id='register_form'>
                            <label>Lietotajvārds
                                <input type='text'></input>
                            </label>
                            <label>Epasta Adrese
                                <input type='text'></input>
                            </label>
                            <label>Parole
                                <input type='password'></input>
                            </label>
                            <label>Atkārtota Parole
                                <input type='rep_password'></input>
                            </label>
                            <p>Jau ir konts? <a onClick={navigateToLogin}>Pieslēdzies šeit!</a></p>
                            <button name='sign_up' id='sign_up'>Izveidot kontu</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }