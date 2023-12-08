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
	const dataSend = JSON.stringify(data);
	let res;
	let response;
	try {
		res = await axios.post("/auth/login", dataSend, {
			headers: { "Content-Type": "application/json" },
		});
		response = {
			accessToken: res.data.accessToken,
			userData: res.data.user,
			status: res.status,
			statusCode: res.response.data.statusCode,
		};
		return response;
	} catch (error) {
		if (error instanceof AxiosError) throw new Error(error.message);
    throw new Error('Unexpected login error')
	}
}
