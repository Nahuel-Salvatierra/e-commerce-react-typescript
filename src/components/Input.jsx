function Input({ ...props }) {
	return (
		<>
			<label>{props.label}</label>
			<br />
			{props.message?<span>{props.message}</span>:null}
			<div/>
			<input className="input input-bordered w-full max-w-xs mb-2" {...props} />
		</>
	);
}
export default Input;
