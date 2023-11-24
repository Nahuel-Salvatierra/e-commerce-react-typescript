import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import CardProduct from "./cards/CardProduct"

export default function Layout() {
	return (
		<div className="bg-primary">
			<header>
				<NavBar />
			</header>

			<main>
				<Outlet />
				<br />
				<div className="container mx-auto flex flex-wrap gap-5" >
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
