import { useCategory } from "../../../hook/useCategory";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function CategoryDropDown() {


  const handleCategoryNav = async (e) => {
		const category = e.target.textContent;
		const response = await getProductsFiltered(category);
		const updatedProducts = await Promise.all(
			response.map(async (product) => {
				const image = product.image;
				const imageUrl = await getImage(image);
				product.amount = 1;
				return { ...product, images: imageUrl };
			})
		);
		filterProducts(updatedProducts);
	};

	const [categoryName] = useCategory();
	return (
		<ul className="bg-base-100 p-2 shadow menu dropdown-content z-[1] rounded-box w-48">
			{categoryName.map((category, index) => (
				<div key={index}>
					<Disclosure.Button>
						<li
							name={category}
							className="px-1 hover:bg-neutral hover:text-white hover:rounded hover:cursor-pointer"
							onClick={handleCategoryNav}
						>
							<Link to={`/${category}`}>{category}</Link>
						</li>
					</Disclosure.Button>
				</div>
			))}
		</ul>
	);
}
