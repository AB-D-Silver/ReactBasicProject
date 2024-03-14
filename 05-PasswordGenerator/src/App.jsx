import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [includeNumber, setIncludeNumber] = useState(false);
	const [includeSpecialChar, setIncludeSpecialChar] = useState(false);
	const [password, setPassword] = useState("");

	const passwordGenerator = useCallback(() => {
		let password = "";
		let placeholder = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

		if (includeNumber) placeholder += "0123456789";
		if (includeSpecialChar) placeholder += "!#$%&()*+-/:;<=>?@[\\]^_{|}~";

		for (let index = 1; index <= length; index++) {
			const position = Math.floor(Math.random() * placeholder.length + 1);
			password += placeholder.charAt(position);
		}
		setPassword(password);
	}, [length, includeNumber, includeSpecialChar, setPassword]);

	useEffect(() => {
		passwordGenerator();
	}, [length, includeNumber, includeSpecialChar, passwordGenerator]);

	const passwordRef = useRef(null);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 20);
		window.navigator.clipboard.writeText(password);
	}, [password]);

	return (
		<>
			<div className="bg-slate-500">
				<h1 className="text-center text-4xl text-white">Password Generator</h1>
				<div>
					<input
						type="text"
						placeholder="password"
						value={password}
						readOnly
						ref={passwordRef}
					></input>
					<button onClick={copyPasswordToClipboard}> Copy </button>
				</div>
				<div>
					<input
						type="range"
						min={8}
						max={20}
						value={length}
						onChange={(e) => setLength(e.target.value)}
					/>
					<label className="cursor-pointer">Length : {length}</label>
					<input
						type="checkbox"
						defaultChecked={includeNumber}
						onChange={() => {
							setIncludeNumber((value) => !value);
						}}
					/>
					<label className="bg-white">Numbers</label>
					<input
						type="checkbox"
						defaultChecked={includeSpecialChar}
						onChange={() => {
							setIncludeSpecialChar((value) => !value);
						}}
					/>
					<label className="bg-white">Characters</label>
				</div>
			</div>
		</>
	);
}

export default App;
