import axios from "./axios.config";

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
    // const dataSend = JSON.stringify(data)
    let loginResponse;
    let res;
    try {
        res = await axios.post("/auth/login", data, {
            headers: { "Content-Type": "application/json" },
        });
        loginResponse = {
            accessToken: res.data.accessToken,
            userData: res.data.user,
            status: res.status,
        };
        
    } catch (error) {
        loginResponse = {
            status: error.response.status,
        };
    }
    return loginResponse;
}
