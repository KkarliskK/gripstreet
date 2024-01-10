import { getCookie, setCookie, deleteCookie } from "./Cookie";

// export function getUserID( ) {
//     return getCookie( 'user_id' );
// }

// export async function getUserData( ) {
//     const user_id = getUserID( );

//     if ( !user_id ) {
//         return { };
//     }

//     const response = await fetch( 
//         `http://abc.sites.hex.lv/todo/api.php?method_name=getUserData&user_id=${ user_id }`
//     );

//     const json = await response.json( );
//     return json[ 0 ];
// }

// export function logOut( setRedirect = null ) {
//     deleteCookie( 'user_id' );

//     if ( setRedirect != null )
//         setRedirect( '/auth' );
// }

// export async function logIn( username, password ) {
//     const response = await fetch( 
//         `http://abc.sites.hex.lv/todo/api.php?method_name=getLogin&username=${ username }&password=${ password }`
//     );

//     const data = await response.json( );

//     if ( data.message )
//         return false;

//     const user_id = data[ 0 ].user_id;
//     setCookie( 'user_id', user_id, 14 );

//     return true;
// }

export function UserLogin (values) {
    let error = {}

    const username_pattern = new RegExp(".{8,}");
    const password_pattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");

    if(values.username == ""){
        error.username = "Lietotājvārda ievadlauks ir tukšs!";
    }else if(!username_pattern.test(values.username)){
        error.username = "Lietotājvārdam jabūt vismaz 8 rakstzīmēm";
    }else{
        error.username = "";
    }

    if(values.password == ""){
        error.password = "Paroles ievadlauks ir tukšs!";
    }else if(!password_pattern.test(values.password)){
        error.password = "Parolei jābūt vismaz vienam ciparam un vienam lielajam un mazajam burtam un vismaz 8 vai vairāk rakstzīmēm";
    }else{
        error.password = "";
    }
    return error;
}

export function UserRegister (values) {
    let error = {}

    const username_pattern = new RegExp(".{8,}");
    const email_pattern = new RegExp('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$');
    const password_pattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");

    if(values.username == ""){
        error.username = "Lietotājvārda ievadlauks ir tukšs!";
    }else if(!username_pattern.test(values.username)){
        error.username = "Lietotājvārdam jabūt vismaz 8 rakstzīmēm!";
    }else{
        error.username = "";
    }

    if(values.email == ""){
        error.email = "E-pasta ievadlauks ir tukšs!";
    }else if(!email_pattern.test(values.email)){
        error.email = "E-pasts nederīgs!";
    }else{
        error.email = "";
    }

    if(values.password == ""){
        error.password = "Paroles ievadlauks ir tukšs!";
    // }else if(!password_pattern.test(values.password)){
    //     error.password = "Parolei jābūt vismaz vienam ciparam un vienam lielajam un mazajam burtam un vismaz 8 vai vairāk rakstzīmēm";
    }else{
        error.password = "";
    }

    if(values.rep_password == ""){
        error.rep_password = "Atkartotās paroles ievadlauks ir tukšs!";
    }else if(values.password == values.rep_password){
        error.rep_password = "Parole nesakrīt!"
    }else{
        error.rep_password = "";
    }

    return error;
}