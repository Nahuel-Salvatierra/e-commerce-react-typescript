import axios from "./axios.config";
import { AxiosError } from "axios";

export async function signUp(data) {
    const dataSend = JSON.stringify(data);
    const res = await axios.post("/auth/signup", dataSend, {
        headers: { "Content-Type": "application/json" },
    });

    return {
        res: {
            data: res.data,
            status: res.status,
        },
    };
}

export async function login(data) {
    let res;
    let response;
    try {
        res = await axios.post("/auth/login", data, {
            headers: { "Content-Type": "application/json" },
        });
        response = {
            accessToken: res.data.accessToken,
            userData: res.data.user,
            status: res.status,
        };
        return response; 
    } catch (error) {
        if (error.response?.status === 401) throw new Error('Correo o contraseña incorrectos')
        if (error instanceof AxiosError) throw new Error(error.message);
        throw new Error("Unexpected login error");
    }
}

