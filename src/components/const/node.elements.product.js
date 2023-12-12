const styleInputsProducts = "border w-full rounded h-10";

export const INPUTS_PRODUCT = {
	title: {
		id: 1,
		name: "title",
		type: "text",
		label: "Título",
		className: styleInputsProducts,
	},
	category: {
		id: 2,
		name: "category",
		type: "text",
		label: "Categoría",
		className: styleInputsProducts,
	},
	description: {
		id: 3,
		name: "description",
		type: "text",
		label: "Descripción",
		className: styleInputsProducts,
	},
	image: {
		id: 4,
		name: "image",
		type: "file",
		label: "Imagen",
		className: 'block w-full file:rounded file:bg-white',
	},
};

export const INPUTS_CATEGORY = {
	name: {
		id: 1,
		name: "name",
		type: "text",
		label: "Category",
		className: styleInputsProducts,
	},
	price: {
		id: 2,
		name: "price",
		type: "number",
		label: "Precio",
        className: styleInputsProducts
	},
};
