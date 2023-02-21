import React, {useState} from "react";

function Counter(props) {
  const title = props.title;
  const initCount = props.initCount;
  const [count, setCount] = useState(initCount);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  return (
   <div>
    <h1>{title}</h1>
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
   </div> 
  );
}

export default Counter
