import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './header.scss';

export default function Header() {
    return(
        <div className='main_bar'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className = "logo">
                <img src="https://o.remove.bg/downloads/6aa115b2-d423-4ae9-8da7-ef56293505a7/383840235_122096789102064995_2141397398844886008_n-removebg-preview.png" alt="" />
            </div>
            <div className = "buttons">
                <div className='header_item'>
                    <h1>Blogs <span class="material-symbols-outlined">import_contacts</span></h1>
                </div>
                <div className='header_item'>
                    <h1>Kalendārs <span class="material-symbols-outlined">calendar_month</span></h1>
                </div>
                <div className='header_item'>
                    <h1>Pierakstīties <span class="material-symbols-outlined">login</span></h1>
                </div>
            </div>
        </div>
    )
}
