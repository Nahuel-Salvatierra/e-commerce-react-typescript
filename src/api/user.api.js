import axios from "./axios.config";

export async function getUserById(id) {
    let response;
    try {
        const res = await axios.get(`/user/${id}`);
        response = {
            name: res.data.name,
            lastName: res.data.lastName,
            email: res.data.email,
            phone: res.data?.numberPhone,
            status: res.status,
        };
    } catch (err) {
        response = {
            status: err.status,
        };
    }
    return response;
}
