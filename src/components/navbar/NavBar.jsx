import React, { useState } from "react";
import "../../App.css";
import { useProductContext } from "../../hook/useProductsContext";
import { Disclosure } from "@headlessui/react";
import {
	Modal,
	MainMenu,
	PanelHidden,
	Bars3Icon,
	XMarkIcon,
	MainIconMenu,
} from "./navbarImports";

const NavBar = () => {
	const [cartOffcanvasShow, setCartOffcanvasShow] = useState(false);
	const [userOffcanvasShow, setUserOffcanvasShow] = useState(false);

	const handleCart = () => {
		setCartOffcanvasShow(true);
	};
	const handleUser = () => {
		setUserOffcanvasShow(true);
	};
	const closeCart = () => {
		setCartOffcanvasShow(false);
		setUserOffcanvasShow(false);
	};

	return (
		<Disclosure as="nav" className="bg-neutral">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<MainMenu/>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<MainIconMenu
									cartOffcanvasShow={cartOffcanvasShow}
									userOffcanvasShow={userOffcanvasShow}
									handleCart={handleCart}
									closeCart={closeCart}
									handleUser={handleUser}
								/>
							</div>
						</div>
					</div>
					<PanelHidden />
					<Modal />
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
