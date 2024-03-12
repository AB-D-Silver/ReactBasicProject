function Button({ color, setColor }) {
	return (
		<button
			className="outline-none px-4 rounded-lg"
			style={{ backgroundColor: color }}
			onClick={() => setColor(color)}
		>
			{color}
		</button>
	);
}

export default Button;
