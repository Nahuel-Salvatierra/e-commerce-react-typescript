import axios from "./axios.config";

export async function createCategory(data) {
    try {
        const response = await axios.post("http://localhost:3000/category",data);
        return response.status
    } catch (error) {
        throw error
    }
}

export async function getCategoryName() {
    try {
        const response = await axios.get("http://localhost:3000/category");
        const categoryName = response.data.map(category = category.name)
        return categoryName;
    } catch (error) {
      throw error
    }
}