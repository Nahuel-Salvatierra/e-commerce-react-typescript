import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import CardProduct from "./cards/CardProduct"

export default function Layout() {

	const { cartItems, addToCart } = useCart();

	return (
		<div className="bg-primary">
			<header>
				<NavBar {...cartItems}/>
			</header>

				<Outlet {addToCart}/>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}
