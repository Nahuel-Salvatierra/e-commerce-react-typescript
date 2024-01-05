import { useState, useEffect } from "react";

import { useTitleAuth } from "../../hook/useCart";
import {
	OffCanvas,
	CartOffCanvas,
	LayoutAsk,
	IconCart,
	IconSun,
	IconUser,
	IconMoon,
} from "./navbarImports";

export default function MainIconMenu({
	cartOffcanvasShow,
	userOffcanvasShow,
	handleCart,
	closeCart,
	handleUser,
}) {
	const [bodyStyle, setBodyStyle] = useState(true);

	const handleBodyStyle = () => {
		setBodyStyle((theme) => !theme);
	};
	const [checkRegister, setCheckRegister] = useTitleAuth();

	useEffect(() => {
		if (bodyStyle) {
			layoutContainer.classList.toggle("theme-dark");
			// textDasboard.classList.toggle("theme-dark");
			// labelInput.classList.toggle("theme-dark");
		} else {
			layoutContainer.classList.toggle("theme-dark");
		}
	}, [bodyStyle]);

	return (
		<div className="flex gap-3">
			<div className="flex justify-center text-white">
				<button onClick={handleBodyStyle}>
					{bodyStyle ? (
						<IconMoon
							className={
								"w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
							}
						/>
					) : (
						<IconSun
							className={
								"w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
							}
						/>
					)}
				</button>
			</div>

			<button data-cy="buy-icon" onClick={handleCart}>
				{
					<IconCart
						className={
							"w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
						}
					/>
				}
				{cartOffcanvasShow && (
					<OffCanvas
						offcanvasTitle={"Carrito de Compras"}
						offcanvasContent={<CartOffCanvas />}
						onClose={closeCart}
						showButton={true}
					/>
				)}
			</button>
			<button id="userIcon" onClick={handleUser}>
				{
					<IconUser
						className={
							"w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
						}
					/>
				}

				{userOffcanvasShow && (
					<OffCanvas
						offcanvasTitle={checkRegister ? "Register" : "Login"}
						offcanvasContent={
							<LayoutAsk
								onClose={closeCart}
								checkRegister={checkRegister}
								setCheckRegister={setCheckRegister}
							/>
						}
						onClose={closeCart}
					/>
				)}
			</button>
		</div>
	);
}
