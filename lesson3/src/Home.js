import React from 'react';
import { auth } from './firebase';
import './App.css';

const Home = ({ user }) => {    
    return (
        <div className="home">
            <h1>Hi, {user.displayName}</h1>
            <img src={user.photoURL} alt=""/>
            <button className="signout" 
            onClick={() => auth.signOut()}>Sign Out
            </button>
        </div>
    )
}

export default Home;

