import React, { useState, useEffect } from 'react';

import './Login.css'
import { GoogleLogin , GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Hamburger from './Hamburger';
export default function Login(){
    const [ profile, setProfile ] = useState([]);
    const clientId = '294381744071-jehb8dq6p517k231f0rnp18cjuo21fp3.apps.googleusercontent.com';

    useEffect(() => {
    const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
        });
        };
    gapi.load('client:auth2', initClient);
});
    const onSuccess = (res) => {
        console.log('success:', res);
        setProfile(res.profileObj);

    };
    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };
    
    return(
        <div>
            
        <h2>Redmarmoset</h2>
        <br />
        <br />
        {profile ? (
            <div className='blur'>
                <img src={profile.imageUrl} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
            </div>
        ) : (
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        )}
    </div>
);
}
    
