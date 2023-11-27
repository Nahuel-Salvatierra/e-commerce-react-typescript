import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Layout from "./components/Layout";
import CreateProduct from "./components/CreateProduct";
import  Home  from "./pages/home/Home";
import Test from  "./pages/home/Test"
function App() {
	return (
		<Routes>
			<Route path="" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/test" element={<Test />}/>
				<Route path="/product" element={<CreateProduct />} />
			</Route>
		</Routes>
	);
}

export default App;
