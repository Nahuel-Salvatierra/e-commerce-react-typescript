import { useEffect, useState } from "react";

import Button from "../Button";
import { INPUTS_LOGIN } from "../const/node.element.auth";
import Input from "../Input";
import useAuth from "../../hook/useAuth";
import { login } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function Login({onClose}) {
	const [form, setForm] = useState("");
	const navigate = useNavigate()
	const { setAuth } = useAuth();

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { res } = await login(form);
			setAuth({ token: res.token });
			console.log(res)
			onClose()
			navigate("/", { replace: true })
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="">
				<Input {...INPUTS_LOGIN.email} onChange={onChange} />
				<Input {...INPUTS_LOGIN.password} onChange={onChange} />
				<div className="h-full">
					<Button type={"submit"} text={"Login"} style={"btn btn-neutral w-80 mb-5 "} />
				</div>
			</form>
		</div>
	);
}
