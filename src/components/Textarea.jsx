function Textarea({...props}) {
	return (
		<>
      <label className="text-white" htmlFor={props.name}>{props.label}</label><br/>
			<textarea className="textarea  textarea-bordered w-full max-w-xs mb-2"{...props}></textarea>
		</>
	);
}

export default Textarea
