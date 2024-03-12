import { useState } from "react";
import Button from "./component/Button";

function App() {
	const [color, setColor] = useState("lightgreen");

	return (
		<div
			className="w-full h-screen duration-100"
			style={{ backgroundColor: color }}
		>
			<div className="flex flex-wrap justify-center inset-x-1 px-2 py-4">
				<div className="flex flex-wrap bg-white px-2 py-2 gap-2 rounded-xl">
					<Button color="cyan" setColor={setColor} />
					<Button color="magenta" setColor={setColor} />
					<Button color="lightsalmon" setColor={setColor} />
				</div>
			</div>
		</div>
	);
}

export default App;
