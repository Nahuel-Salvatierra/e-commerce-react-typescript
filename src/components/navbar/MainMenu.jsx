import { Link } from "react-router-dom"
import {CategoryDropDown, Logo} from './navbarImports'
import { useProductContext } from "../../hook/useProducts"

export default function MainMenu(){

  const {restore} = useProductContext
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<Link
									className="ps-5 text-xl "
									to="/"
									onClick={restore}
								>
									<img
										src={Logo}
										alt="logo animarte"
										className="nav-logo w-10 bg-white rounded-[50%] hidden sm:block"
									/>
								</Link>
								<div className="hidden items-center sm:ml-6 sm:block">
									<div className="flex items-center justify-start gap-3 pr-5">
										<Link
											className="text-white font-semibold"
											to="/"
											onClick={restore}
										>
											Inicio
										</Link>
										<details className="dropdown dropdown-center">
											<summary className=" text-white font-semibold">
												Productos
											</summary>
											<CategoryDropDown />
										</details>
									</div>
								</div>
							</div>
  )
}