import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';

const Welcome = ({ user }) => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Welcome</Link>
                </li>
                <li>
                    <Link to="/chat">Chat</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Welcome;

