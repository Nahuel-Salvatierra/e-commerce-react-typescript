import { useEffect, useState } from "react";

import Button from "./Button";
import { INPUTS_LOGIN } from "./const/node.element.auth";
import Input from "./Input";
import useAuth from "../hook/useAuth";
import { login } from "../api/auth.api";

export default function Login() {
	const [form, setForm] = useState("");
	const { setAuth } = useAuth();

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e)=>{
		e.preventDefault()
		const res = await login(form)
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input {...INPUTS_LOGIN.email} onChange={onChange} />
			<br />
			<Input {...INPUTS_LOGIN.password} onChange={onChange}/>
			<br />
			<Button type={"submit"} text={"Login"} style={"secondary"} />
		</form>
	);
}
