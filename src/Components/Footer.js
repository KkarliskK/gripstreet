import React, { useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import '../Style/footer.scss';
import Image_no_bg from '../img/gripstreet_no_bg.png';


export default function Footer() {

    return(
        <>
            <div className='footer-container'>
                <img src= {Image_no_bg} alt="background_img" />
                <p>Copyright © 2023 KkarliskK Excelis</p>
            </div>
        </>
    )
}