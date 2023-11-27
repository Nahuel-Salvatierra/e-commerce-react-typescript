import { useState } from "react";
import Input from "./Input";
import { INPUTS_PRODUCT } from "./const/node.elements.product";
import Button from "./Button";
import { createProduct } from "../api/product.api";
import Textarea from "./Textarea";

export default function CreateProduct() {
	const [productForm, setProductForm] = useState({
		title: "",
		category: "",
		description: "",
		price: "",
		image: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const product = new FormData(event.target);
		console.log(product)
		try {
			const res = await createProduct(product);
			for (let value in productForm) {
				productForm[value] = "";
			}
		} catch (error) {
			console.log(error)
		}
	};

	const onChange = (event) => {
		setProductForm({
			...productForm,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			encType="multipart/form-data"
			className="flex items-center justify-center h-screen"
		>
			<div>
				<Input {...INPUTS_PRODUCT.title} onChange={onChange} /> <br />
				<Input {...INPUTS_PRODUCT.category} onChange={onChange} />
				<br />
				<Input {...INPUTS_PRODUCT.price} onChange={onChange} />
				<br />
				<Textarea {...INPUTS_PRODUCT.description} onChange={onChange} />
				<br />
				<Input {...INPUTS_PRODUCT.image} onChange={onChange} />
				<br />
				<Button type={"submit"} text={"Save"} />
			</div>
		</form>
	);
}
