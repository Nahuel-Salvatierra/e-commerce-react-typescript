import { useState } from "react";
import Input from "./Input";
import { INPUTS_CATEGORY, INPUTS_PRODUCT } from "./const/node.elements.product";
import Button from "./Button";
import { createProduct } from "../api/product.api";
import { createCategory } from "../api/category.api";
import Textarea from "./Textarea";

export default function CreateProduct() {
    const [productForm, setProductForm] = useState({
        title: "",
        category: "",
        description: "",
        price: "",
        image: "",
    });

	const [categoryForm, setCategoryForm] = useState({title:"", price: ""})


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

	
	// Category
	const handleSubmitCategory = async (event) => {
		event.preventDefault();
		const category = new FormData(event.target);
		try {
			const res = await createCategory(category);
			for (let value in categoryForm) {
				categoryForm[value] = "";
			}
		} catch (error) {
			console.log(error);
		}
	}

	const onChangeCategory = (event) => {
        setCategoryForm({
            ...categoryForm,
            [event.target.name]: event.target.value,
        });
    };



    return (
        <div className="container flex mx-auto my-10 justify-center">
            <div className="w-1/2 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="flex justify-center border w-96"
                >
                    <div className="p-10">
                        <Input {...INPUTS_PRODUCT.title} onChange={onChange} />{" "}
                        <br />
                        <Input
                            {...INPUTS_PRODUCT.category}
                            onChange={onChange}
                        />
                        <br />
                        <Input {...INPUTS_PRODUCT.price} onChange={onChange} />
                        <br />
                        <Textarea
                            {...INPUTS_PRODUCT.description}
                            onChange={onChange}
                        />
                        <br />
                        <Input {...INPUTS_PRODUCT.image} onChange={onChange} />
                        <br />
                        <Button type={"submit"} text={"Save"} />
                    </div>
                </form>
            </div>




            <div className="w-1/2 flex justify-center">
                <form
                    onSubmit={handleSubmitCategory}
                    className="flex justify-center border h-72"
                >
                    <div className="p-10">
                        <Input {...INPUTS_CATEGORY.title} onChange={onChangeCategory} />{" "}
                        <br />
                        <Input
                            {...INPUTS_CATEGORY.price} onChange={onChangeCategory}
                        />
                        <br />
                        <Button type={"submit"} text={"Save"} />
                    </div>
                </form>
            </div>
        </div>
    );
}
