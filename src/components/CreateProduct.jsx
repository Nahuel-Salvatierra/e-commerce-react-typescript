export default CardProduct;
import { useState } from "react";
import Input from "./Input";
import { INPUTS_PRODUCT } from "./const/node.elements.product";
import Button from "./Button";
import { createProduct } from "../api/product.api";

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
	const res = await createProduct(productForm)
	};

	const onChange = (event) => {
			setProductForm({
					...productForm,
					[event.target.name]: event.target.value,
			});
	};

	return (
			<form onSubmit={handleSubmit}>
					<Input {...INPUTS_PRODUCT.title} onChange={onChange}/> <br />
					<Input {...INPUTS_PRODUCT.category} onChange={onChange}/><br />
					<Input {...INPUTS_PRODUCT.price} onChange={onChange}/><br />
					<label htmlFor="">Descripcion</label>
					<br />
					<textarea className="textarea textarea-bordered" id="textarea" {...INPUTS_PRODUCT.description} onChange={onChange}/><br />
		<Input {...INPUTS_PRODUCT.image} onChange={onChange}/><br/>
					<Button type={"submit"} text={"Save"} />
			</form>
	);
}