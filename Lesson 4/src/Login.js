import './App.css'; // import the styles used for App.js
import React from 'react';
import { signInWithGoogle } from './firebase';

const Login = () => {
    return ( // the Login component just contains a Log In button
        <div> 
            <button className="button" onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    )
}

export default Login; // return the component



