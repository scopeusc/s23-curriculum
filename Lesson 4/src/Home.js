import React from 'react';
import Chat from './Chat';
import { auth, db } from './firebase';
import { setDoc, doc, getDocs, collection } from 'firebase/firestore';
import './App.css';
import { useState, useEffect } from 'react';

const Home = ({ user }) => {
    
    const [users, setUsers] = useState([]);
    const [curChat, setCurChat] = useState(null);

    // When the component first renders, get the list of all users we can chat with
    useEffect(() => {

        const userPayload = {
            name: user.displayName,
            email: user.email,
        }

        // stores this user in the DB if they're new
        const userDoc = doc(db, "users", user.email)
        setDoc(userDoc, userPayload)

        // grab all the users and store it in state
        getDocs(collection(db, "users")).then(snapshot => {
            const data = snapshot.docs.map(d => d.data());

            // filter out the user who's actually logged in here
            const filtered = data.filter(u => u.email !== user.email);
            setUsers(filtered);
        })        
    }, []);

    return (
        <div className="Home">
            <div>
                {users.map((u, i) => {
                    return <button key={i} onClick={() => setCurChat(u)}>{u.name}</button>
                })}
            </div>
            
            {curChat !== null ? <Chat localUser={user} otherUser={curChat}/> : null}
            <button className="signout" 
            onClick={() => auth.signOut()}>Sign Out
            </button>
        </div>
    )
}

export default Home;

