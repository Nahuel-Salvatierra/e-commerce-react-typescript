function Input({ ...props }) {
	return (
		<>
			<label className="text-white" htmlFor={props.name}>{props.label}</label>
			<br />
			{props.message?<span>{props.message}</span>:null}
			<input className="input input-bordered w-full max-w-xs mb-2" {...props} />
		</>
	);
}
export default Input;
