import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import CreateProduct from "./components/CreateProduct";
import  Home  from "./pages/home/Home";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/product" element={<CreateProduct />} />
			</Route>
		</Routes>
	);
}

export default App;