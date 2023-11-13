import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../scss/header.scss';

export default function Header() {
    return(
        <div className='main_bar'>
            <div className='header_item'>
                <h1>Home</h1>
            </div>
            <div className='header_item'>
                <h1>Profile</h1>
            </div>
            <div className='header_item'>
                <h1>Settings</h1>
            </div>
        </div>
    )
}
