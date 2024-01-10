import React, { useState } from 'react';
import '../Style/login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { form_to_obj, get_form_object } from '../functions';
import Image_no_bg from '../img/gripstreet_no_bg.png';
import background from '../img/background.jpg';

import { getCookie, setCookie, deleteCookie } from '../utils/Cookie'
import { UserLogin } from '../utils/AuthController'


export default function Login() {

    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/register');
    };

    const navigateToMain = () => {
        navigate('/');
    };

    const [ Values, setValues ] = useState( {
        username: '',
        password: ''
    } );
    const [ error, setError ] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const HandleSubmit = (event) => {
        event.preventDefault(); 
        setError(UserLogin(Values));
    }




    //     const username = usernameRef.current.value;
    //     const password = passwordRef.current.value;

    //     if ( isLogin ) {
    //         setIsLoading( true );

    //         const response = await fetch( 
    //             `http://abc.sites.hex.lv/todo/api.php?method_name=getLogin&username=${ username }&password=${ password }`
    //         );

    //         const data = await response.json( );

    //         if ( data.message ) {
    //             setError('Invalid credentials');
    //             setIsLoading( false );
    //             return;
    //         }

    //         const user_id = data[ 0 ].user_id;

    //         setCookie( 'user_id', user_id, 14 );

    //         setError( '' );
    //         setStatus( 'Login successful, redirecting in 3 seconds...' );

    //         setTimeout( ( ) => {
    //             setRedirect( '/groups' );
    //         }, 3000 );

    //         setIsLoading( false );
    //     } else {
    //         setIsLoading( true );

    //         const email = emailRef.current.value;

    //         if ( !email.includes( '@' ) ) {
    //             setError( 'You inputted an invalid email' );
    //             setIsLoading( false );
    //             return;
    //         }

    //         if ( username.length < 3 || username.length > 16 ) {
    //             setError( 'Username must be between 3 and 16 characters long' );
    //             setIsLoading( false );
    //             return;
    //         } 

    //         if ( password.length < 8 ) {
    //             setError( 'Password must be atleast 8 characters long' );
    //             setIsLoading( false );
    //             return;
    //         }

    //         const formData = new FormData( );
    //         formData.append( 'username', username );
    //         formData.append( 'password', password );
    //         formData.append( 'email', email );

    //         const response = await fetch( 'http://abc.sites.hex.lv/todo/api.php?method_name=insertUser', {
    //             method: 'POST',
    //             body: formData
    //         } );

            
    //         let fail = false;
    //         const data = await response.json( ).catch( err => fail = true );
            
    //         if ( data.message ) {
    //             setError( data.message );
    //             setIsLoading( false );
    //             return;
    //         }

    //         setCookie( 'user_id', data.id );

    //         if (!fail) {
    //             setError( '' );
    //             setStatus( 'Registration successful, redirecting in 3 seconds...' );
    //             setIsLoading( false );
    
    //             setTimeout( ( ) => {
    //                 setRedirect( '/groups' );
    //             }, 3000 );
    //         } else {
    //             setError( 'Internal error' );
    //         }
    //     }
    // }


    return (
        <>
        <div className="cont">
            <img id='background_image' src={background} alt='backgorund'/>
            <div className="left">
                <h1>Sveicināts Atpakaļ</h1>
                <div >
                    <img src= {Image_no_bg} onClick={navigateToMain} alt="" />
                </div>
                <div className="links">
                    <a href="https://www.tiktok.com/@gripstreetlv" target="_blank"><img src="https://www.edigitalagency.com.au/wp-content/uploads/tiktok-logo-black-png.png" alt="tiktok" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61551949856715" target="_blank"><img src="https://qwestore.com/png_images_min/10/bFacebook-logob-bBlack-iconb-FB-icon-7384.png" alt="facebook" /></a>
                    <a href="https://www.instagram.com/gripstreetlv/" target="_blank"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3270077/instagram-icon-md.png" alt="instagram" /></a>
                </div>
            </div>
            <div className="right">
                <h1>Pieslēgties</h1>
                <form action = "" onSubmit = { HandleSubmit }>

                    <label>Lietotājvārds</label>
                    <input type='text' id='username' name='username' onChange = { handleInput }></input>
                    { error.username != '' && <p id='error-text'>{ error.username }</p> }

                    <label>Parole</label>
                    <input type='password' id='password' name='password' onChange = { handleInput }></input>
                    { error.password != '' && <p id='error-text'>{ error.password }</p> }

                    <p>Nav konta? <a onClick={navigateToRegister}>Uztaisi šeit</a></p>
                    <button id='sign_in' className='submit'>Pieslēgties</button>
                </form>
            </div>
        </div>
        </>
    )
}