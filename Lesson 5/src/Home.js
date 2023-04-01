import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ChatPage from './ChatPage';
import Welcome from './Welcome';
import About from './About';

const Home = ({ user }) => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>}>
                <Route path="chat" element={<ChatPage user={user}/>}/>
                <Route path="about" element={<About user={user}/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Home;

