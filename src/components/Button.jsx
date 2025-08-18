const Button = ({ onClick, children }) => {
	return (
		<button onClick={onClick} style={{ margin: '4px', padding: '10px 20px', fontSize: '18px' }}>
			{children}
		</button>
	);
};

export default Button;