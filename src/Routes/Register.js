import React, { useState } from 'react';
import '../Style/login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { form_to_obj, get_form_object } from '../functions';
import Image_no_bg from '../img/gripstreet_no_bg.png';
import background from '../img/background.jpg';

import { getCookie, setCookie, deleteCookie } from '../utils/Cookie'
import { UserRegister } from '../utils/AuthController'

export default function Register() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    const [ Values, setValues ] = useState( {
        username: '',
        email: '',
        password: '',
        rep_password: ''
    } );
    const [ error, setError ] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const HandleSubmit = (event) => {
        event.preventDefault(); 
        setError(UserRegister(Values));
        if(error.username === "" && error.email === "" && error.password === "" && error.rep_password === ""){
            axios.post('http://localhost:3000/register', Values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err)); 
        }
    }

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
                        <form onSubmit = {HandleSubmit}>
                            <label>Lietotajvārds
                                <input type='text' name = "username" onChange={handleInput}></input>
                                { error.username != '' && <p id='error-text'>{ error.username }</p> }
                            </label>
                            <label>Epasta Adrese
                                <input type='text' name = "email" onChange={handleInput}></input>
                                { error.email != '' && <p id='error-text'>{ error.email }</p> }
                            </label>
                            <label>Parole
                                <input type='password' name = "password" onChange={handleInput}></input>
                                { error.password != '' && <p id='error-text'>{ error.password }</p> }
                            </label>
                            <label>Atkārtota Parole
                                <input type='password' name = "rep_password" onChange={handleInput}></input>
                                { error.rep_password != '' && <p id='error-text'>{ error.rep_password }</p> }
                            </label>
                            <p>Jau ir konts? <a onClick={navigateToLogin}>Pieslēdzies šeit!</a></p>
                            <button name='sign_up' id='sign_up'>Izveidot kontu</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }