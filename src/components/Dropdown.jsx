
function Dropdown({ label, name, options }) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select className="dropdown-content z-[1] menu p-2 rounded w-full border bg-white" id={name} name={name}>
                {options.map((option) => (
                    <option key={option} value={option}>{option.toUpperCase()}</option>
                ))}
            </select>
        </>
    );
}

export default Dropdown;
