import "./App.css";
import { useState } from "react";

function App() {
	let [counter, setCounter] = useState(10);

	let addValue = () => {
		counter = counter >= 20 ? 20 : counter + 1;
		console.log("Updated Value : ", counter);
		setCounter(counter);
	};

	return (
		<>
			<h1> React Counter : {counter} </h1>
			{/* Button to increment value by 1 but should not exceed 20 */}
			<button onClick={addValue}> Increment </button>
			{/* Button to increment value by 2 but should not exceed 20 */}
			<button
				onClick={() => {
					setCounter((counter) => (counter >= 20 ? 20 : counter + 1));
					setCounter((counter) => (counter >= 20 ? 20 : counter + 1));
				}}
			>
				Add Value +2
			</button>
			{/* Button to decrement value but should not drop below Zero */}
			<button
				onClick={() => {
					setCounter((counter) => (counter <= 0 ? 0 : counter - 1));
				}}
			>
				Deduct Value -1
			</button>
			<h3> Final Value : {counter}</h3>
		</>
	);
}

export default App;
