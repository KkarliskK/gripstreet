export function setCookie(name, value, exdays = 1) {
    const d = new Date( );
    d.setTime(d.getTime( ) + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function deleteCookie(name) {
    document.cookie = `${ name }=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) 
        return parts.pop( ).split(';').shift( );
}