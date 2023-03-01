import React, {useEffect, useState} from "react";
import { doc, setDoc } from "firebase/firestore";
import db from './firebase';

function Counter(props) {

	const [count, setCount] = useState(props.initCount);

	useEffect(() => {
		const myDoc = doc(db, "counters", props.title);
		setDoc(myDoc, {name: props.title, count: count})
	}, [count]);

	const increment = () => {
		setCount(count + 1);
	}

	const decrement = () => {
		setCount(count - 1);
	}

	return (
		<div className="Counter">
			<h1>{props.title}</h1>
			<h2>{count}</h2>
			<button onClick={increment}>+ 1</button>
			<button onClick={decrement}>- 1</button>
		</div>
	);
}

export default Counter;

