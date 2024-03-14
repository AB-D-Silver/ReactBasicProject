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
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
				<h1 className="text-white text-center my-3">Password Generator</h1>
				<div className="flex shadow rounded-lg overflow-hidden mb-4">
					<input
						type="text"
						placeholder="Password"
						className="outline-none w-full py-1 px-3"
						value={password}
						readOnly
						ref={passwordRef}
					/>
					<button
						onClick={copyPasswordToClipboard}
						className="outline-none bg-blue-700 text-white px-3 py-0.5"
					>
						Copy
					</button>
				</div>
				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={8}
							max={20}
							value={length}
							onChange={(e) => setLength(e.target.value)}
						/>
						<label className="cursor-pointer">Length : {length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={includeNumber}
							onChange={() => {
								setIncludeNumber((value) => !value);
							}}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={includeSpecialChar}
							onChange={() => {
								setIncludeSpecialChar((value) => !value);
							}}
						/>
						<label htmlFor="characterInput">Characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
