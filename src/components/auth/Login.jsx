import { useEffect, useState } from "react";

import Button from "../Button";
import { INPUTS_LOGIN } from "../const/node.element.auth";
import Input from "../Input";
import useAuth from "../../hook/useAuth";
import { login } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Alerts from "../Alerts";

export default function Login({ onClose }) {
    const notify = () => toast("Campos incorrectos");
    const [form, setForm] = useState("");
    const navigate = useNavigate();
    const { setAuth } = useAuth();
	
	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let res;
		try {
			res = await login(form);
			navigate("/", { replace: true });
			setAuth({ user: res.userData, token: res.accessToken });
			window.localStorage.setItem("token", res.accessToken);
			window.localStorage.setItem("user", JSON.stringify(res.userData));
		} catch (err) {
			alert(err.message);
		}
	};

    return (
        <div>
            <form onSubmit={handleSubmit} className="">
                <Input {...INPUTS_LOGIN.email} onChange={onChange} />
                <Input {...INPUTS_LOGIN.password} onChange={onChange} />
                <div className="h-full">
                    <Button
                        type={"submit"}
                        text={"Login"}
                        style={"btn btn-neutral w-80 mb-5 "}
                    />
                    <Alerts />
                </div>
            </form>
        </div>
    );
}
