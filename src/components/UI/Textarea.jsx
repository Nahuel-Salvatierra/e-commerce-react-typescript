function Textarea({...props}) {
	return (
		<>
      <label  htmlFor={props.name}>{props.label}</label><br/>
			<textarea className="textarea  textarea-bordered w-full max-w-xs mb-2"{...props}></textarea>
		</>
	);
}

export default Textarea
