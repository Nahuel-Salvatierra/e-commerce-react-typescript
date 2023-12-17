import { useEffect, useState } from "react";
import Input from "../UI/Input";
import { INPUTS_REGISTER } from "../const/node.element.auth";
import Button from "../UI/Button";
import { signUp } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function Register({ onClose }) {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        INPUTS_REGISTER.confirmPassword.pattern = form.password;
    }, [form.password]);

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        delete form.confirmPassword;

        try {
            const { res } = await signUp(form);
            onClose();
            if (res.status === 201) navigate("/", { replace: true });
        } catch (error) {
            throw error;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input {...INPUTS_REGISTER.name} onChange={onChange} />

            <Input {...INPUTS_REGISTER.lastName} onChange={onChange} />

            <Input {...INPUTS_REGISTER.email} onChange={onChange} />

            <Input {...INPUTS_REGISTER.password} onChange={onChange} />

            <Input {...INPUTS_REGISTER.confirmPassword} onChange={onChange} />

            <Button
                text={"Register"}
                type={"submit"}
                style={"w-80 btn-neutral"}
            />
        </form>
    );
}
