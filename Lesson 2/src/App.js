import './App.css';
import Counter from './Counter'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const countersCol = collection(db, "counters");

    getDocs(countersCol).then(snapshot => {
      const docsArray = snapshot.docs.map(d => {return d.data()})
      console.log(docsArray);
      setCounters(docsArray);
    })
  }, [])


  return (
    <div className="App">
      {/* <Counter title="Dogs" initCount={4}/> */}
      {counters.map(d => {
        return <Counter title={d.name} initCount={d.count} />
      })}
    </div>
  );
}

export default App;
