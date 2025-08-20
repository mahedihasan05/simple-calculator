const Button = ({ onClick, children }) => {
	return (
		<button onClick={onClick} style={{ margin: '5px', padding: '20px 10px', fontSize: '24px'}}>
			{children}
		</button>
	);
};

export default Button;