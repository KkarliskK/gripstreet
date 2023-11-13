import React, { useState } from 'react';
import '../scss/login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { form_to_obj, get_form_object } from '../functions';



export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    function loginHandler(){
        const obj = get_form_object('login_form');
        if(obj.username === '' || obj.password === ''){
            setError(true);
        }

        if(!error){
            axios.post('login.php', form_to_obj('login_form')).then((res) => {
                if(res.data.code === 0){
                    setError(true);
                }else{
                    navigate('/');
                }

            });
        }
    }

    return (
        <div className='flex'>
            <form name='login_form' id='login_form'>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
                <button name='sign_in' id='sign_in' className=''>Sign In</button>
            </form>
        </div>
    )
}