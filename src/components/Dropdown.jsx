
function Dropdown({ label, name, options }) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select className="dropdown-content z-[1] menu p-2 rounded w-full border bg-base-100 w-52" id={name} name={name}>
                {options.map((option) => (
                    <option key={option} value={option}>{option.toUpperCase()}</option>
                ))}
            </select>
        </>
    );
}

export default Dropdown;

<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
<li><a>Item 1</a></li>
<li><a>Item 2</a></li>
</ul>
