
function Dropdown({ label, name, options }) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select id={name} name={name}>
                {options.map((option) => (
                    <option key={option} value={option}>{option.toUpperCase()}</option>
                ))}
            </select>
        </>
    );
}

export default Dropdown;
