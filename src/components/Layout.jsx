import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import CardProduct from "./cards/CardProduct"

export default function Layout() {

	return (
		<div className="bg-primary">
			<header>
				<NavBar/>
			</header>

				<Outlet/>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}
