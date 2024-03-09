import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function AnotherApp() {
// 	return (
// 		<div>
// 			<h1> Testing Function in React Render !</h1>
// 		</div>
// 	);
// }

// const reactElement = (
// 	<a href="www.google.com" target="_blank">
// 		Click to visit Google
// 	</a>
// );

// const evaluatedExpresssion = "PipeTube";

// const anotherReactElement = React.createElement(
// 	"a",
// 	{ href: "www.google.com", target: "_blank" },
// 	"Click to Visit Google Web",
// 	evaluatedExpresssion
// );

ReactDOM.createRoot(document.getElementById("root")).render(
	// Rendering Function in React
	//<AnotherApp />
	//AnotherApp()

	// Rendering Element in React
	// reactElement
	// anotherReactElement

	<React.StrictMode>
		<App />
	</React.StrictMode>
);
