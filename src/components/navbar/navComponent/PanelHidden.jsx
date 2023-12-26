import { useProductContext } from "../../../hook/useProductsContext";
import { Disclosure } from "@headlessui/react";
import CategoryDropDown from "./CategoryDropdown";
import { Link } from "react-router-dom";
export default function PanelHidden() {

  const {restore} = useProductContext()
	return (
		<Disclosure.Panel className="sm:hidden">
			<div className="space-y-1 px-2 pb-3 pt-2">
				<div className="flex items-center justify-end gap-3 pr-5">
					<Disclosure.Button>
						<Link
							className="text-white font-semibold"
							to="/"
							onClick={restore}
						>
							Inicio
						</Link>
					</Disclosure.Button>
					<details className="dropdown dropdown-center">
						<summary className=" text-white font-semibold">
							Productos
						</summary>
						<CategoryDropDown />
					</details>
				</div>
			</div>
		</Disclosure.Panel>
	);
}
