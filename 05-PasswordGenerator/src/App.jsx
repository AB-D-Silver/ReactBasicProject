import { useState } from "react";
import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [includeNumber, setIncludeNumber] = useState(false);
	const [includeSpecialChar, setIncludeSpecialChar] = useState(false);
	const [password, setPassword] = useState("");
	return (
		<>
			<h1 className="text-center text-4xl text-white">Password Generator</h1>
		</>
	);
}

export default App;
