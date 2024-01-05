import { useState } from "react";
import Input from "./UI/Input";
import { INPUTS_CATEGORY, INPUTS_PRODUCT } from "./const/node.elements.product";
import Button from "./UI/Button";
import { createProduct } from "../services/product-service";
import { createCategory } from "../services/category-service";
import Textarea from "./UI/Textarea";
import Dropdown from "./UI/Dropdown";
import { useCategory } from "../hook/useCategory";

export default function CreateProduct() {
    const [productForm, setProductForm] = useState({
        title: "",
        category: "",
        description: "",
        price: "",
        image: "",
    });

    const [category] = useCategory();

    const [categoryForm, setCategoryForm] = useState({ name: "", price: "" });

    // Product
    const handleSubmit = async (event) => {
        event.preventDefault();
        const product = new FormData(event.target);
        try {
            const res = await createProduct(product);
            for (let value in productForm) {
                productForm[value] = "";
            }
        } catch (error) {}
    };

    const onChange = (event) => {
        setProductForm({
            ...productForm,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitCategory = async (event) => {
        event.preventDefault();
        const category = new FormData(event.target);
        try {
            const res = await createCategory(category);
            for (let value in categoryForm) {
                categoryForm[value] = "";
            }
        } catch (error) {
            throw error;
        }
    };

    const onChangeCategory = (event) => {
        setCategoryForm({
            ...categoryForm,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="container flex mx-auto py-10 justify-center">
            <div className="w-1/2 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="flex justify-center border w-96"
                >
                    <div className="p-10" >
                        <Input {...INPUTS_PRODUCT.title} onChange={onChange} />{" "}
                        <br />
                        <br />
                        <Dropdown
                            {...INPUTS_PRODUCT.category}
                            options={category}
                            onChange={onChange}
                        />
                        <br />
                        <Textarea
                            {...INPUTS_PRODUCT.description}
                            onChange={onChange}
                        />
                        <br />
                        <br />
                        <Input {...INPUTS_PRODUCT.image} onChange={onChange} />
                        <br />
                        <Button
                            type={"submit"}
                            text={"Guardar"}
                            style={"text-white"}
                        />
                    </div>
                </form>
            </div>

            <div className="w-1/2 flex justify-center">
                <form
                    onSubmit={handleSubmitCategory}
                    className="flex justify-center border h-72"
                >
                    <div className="p-10">
                        <Input
                            {...INPUTS_CATEGORY.name}
                            onChange={onChangeCategory}
                        />{" "}
                        <br />
                        <br />
                        <Input
                            {...INPUTS_CATEGORY.price}
                            onChange={onChangeCategory}
                        />
                        <br />
                        <br />
                        <Button
                            type={"submit"}
                            text={"Guardar"}
                            style={"text-white"}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
