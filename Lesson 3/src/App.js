import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import firebase from './firebase';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div className="App">
      {user ? <Home user={user}/> : <Login/>}
    </div>
  );
}

export default App;


