function Input({ ...props }) {
  return (
    <>
      <div >
        <label className="text-black" htmlFor={props.name} >
          {props.label}
        </label>
      </div>

      {props.message ? <span>{props.message}</span> : null}
      <input className="input input-bordered w-full max-w-xs mb-2" {...props} />
    </>
  );
}
export default Input;
