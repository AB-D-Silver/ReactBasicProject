import "./App.css";
import Card from "./components/Card";
function App() {
	return (
		<>
			<h1 className="bg-green-400 text-white p-4 rounded-xl mb-4">
				Working with Tailwind
			</h1>
			<Card userName="Alexa" btnText="Click Me" />
			<Card userName="Jazz" btnText="Visit Me" />
		</>
	);
}

export default App;
