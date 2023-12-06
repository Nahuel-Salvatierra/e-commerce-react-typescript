import { AxiosResponse } from "axios";
import axios from "./axios.config";
import * as product from "./product.json";

export const createProduct = async (data) => {
	const res = await axios.post("/product/create", data, {
		headers: { "Content-Type": "multipart/form-data: boundary=2" },
	});
	return res;
};

class Product {
  id: number;
  category: string;
  price: number;
  description: string;

  constructor(data: any) {
    this.id = data.id;
    this.category = data.category;
    this.price = data.price;
    this.description = data.description;
  }
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res: AxiosResponse<Product[]> = await axios.get("/product");

    if (res.data) {
      const productArray: Product[] = res.data.map((product: any) => new Product(product));
      return productArray;
    }

    throw new Error("No data received from the server");

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
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
