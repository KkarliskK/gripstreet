import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/header.scss';

export default function Header() {
    return(
        <div className='main_bar'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className = "logo">
                <img src="https://o.remove.bg/downloads/36823833-fd19-49f8-9c67-85e2b3b139f2/383840235_122096789102064995_2141397398844886008_n-removebg-preview.png" alt="" />
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
