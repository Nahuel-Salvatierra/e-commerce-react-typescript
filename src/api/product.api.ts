import { AxiosResponse } from "axios";
import axios from "./axios.config";
import * as product from "./product.json";

export const createProduct = async (data) => {
	const res = await axios.post("/product/create", data, {
		headers: { "Content-Type": "multipart/form-data: boundary=2" },
	});
	return res;
};

type Product = {
	id: number;
	category: string;
	price: number;
	description: string;
};

export const getProducts = async (): Promise<Product[]> => {
	try {
		const res = await axios.get("/product");
		return res.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getImage = async (img) => {
	try {
		const response = await axios.get(`/product/image/${img}`, {
			responseType: "arraybuffer",
		});

		const contentType = response.headers["content-type"];
		if (
			contentType &&
			(contentType.startsWith("image/jpeg") ||
				contentType.startsWith("image/png"))
		) {
			const imageUrl = URL.createObjectURL(new Blob([response.data]));
			return imageUrl;
		} else {
			console.error("La respuesta no es una imagen JPEG");
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const getOne = async (id) => {
	const response = await axios.get(`/product/${id}`);
	return response;
};