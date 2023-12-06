import axios from "./axios.config";

export async function editProfile(data, id) {
    let response
    try {
        const res = await axios.put(`/user/${id}`, data);
        res = {
            name: res.data?.name,
            lastName: res.data?.lastName,
            email: res.data?.email,
            numberPhone: res.data?.numberPhone,
            status: res.status
        }
        return response
    } catch (err) {
        response = {
            status: err.status
        }
    }
}