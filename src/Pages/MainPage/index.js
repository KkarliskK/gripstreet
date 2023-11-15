import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';

export default function App() {
    return (
        <>
            <Header />
            {/**HERE WE NEED TO MAKE THE MAIN PAGE**/}
            <div className='bg-white'><p>Hello</p></div>
        </>
    )
}
