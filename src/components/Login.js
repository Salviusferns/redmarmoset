import React, { useState, useEffect } from 'react';
import Register from './Register';
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
        <Register/>
        </div>
);
}