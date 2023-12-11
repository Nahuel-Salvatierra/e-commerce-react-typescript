import axios from "./axios.config";

export async function createCategory(data) {
    const res = await axios.post("/category", data, {
        headers: { "Content-Type": "application/json" }
    });
    return res
}

export async function getCategoryName() {
    try {
        const res = await axios.get("/category");
        const categoryName = res.data.map(category = category.title)
        return categoryName;
    } catch (error) {
        throw error
    }
}