import axios from "./axios.config";

export const createProduct = async (data) => {
    const res = await axios.post("/product/create", data, {
        headers: { "Content-Type": "multipart/form-data: boundary=2" },
    });
    return res;
};

export const getProducts = async ()=>{
	try {
		const res = await axios.get("/product");
		return res.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getProductsFiltered = async (name)=>{
	try {
		const res = await axios.get(`/product/category/${name}`);
        
		return res.data;
	} catch (error) {
		throw new Error(error.message);
	}
}

export const getOne = async (id) => {
    const response = await axios.get(`/product/${id}`);
    return response;
};


