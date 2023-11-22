function Input({ ...props }) {
	return (
		<>
			<label>{props.label}</label>
			<br />
			{props.message?<span>{props.message}</span>:null}
			<div/>
			<input {...props} />
		</>
	);
}
export default Input;
