import './App.css';
import Counter  from './Counter';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from './firebase.js';

function App() {

  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const countersCol = collection(db, "counters");

    const q = query(countersCol, where("count", "<=", 250))

    getDocs(q).then(snapshot => {
      const data = snapshot.docs.map(d => d.data());
      setCounters(data);
    });
  }, []);

  return (
    <div className="App">
      {counters.map((c, index) => {
        return <Counter key={index} title={c.name} initCount={c.count} />
      })}
    </div>
  );
}

export default App;


