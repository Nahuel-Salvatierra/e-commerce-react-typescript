export default function Button({ type, onClick, text, style }) {
	return (
		<button type={type} onClick={onClick} className={`btn btn-secondary border-none shadow ${style}`}>
			{text}
		</button>
	);
}
