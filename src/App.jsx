import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Layout from "./components/Layout";
import CreateProduct from "./components/CreateProduct";
import Home from "./pages/home/Home";
import RequireAuth from "./components/auth/RequiredAuth";
import Dashboard from "./pages/dasboard/Dashboard";
import Unauthorized from './pages/Unauthorized'
// Enrutado
import axios from "axios";
import { getImage } from "./api/product.api";
import CardPage from "./pages/cardPage/CardPage";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product");
        const updatedProducts = await Promise.all(
          response.data.map(async (product) => {
            const image = product.image;
            const imageUrl = await getImage(image);
            product.amount = 1;
            return { ...product, images: imageUrl };
          })
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);

  const ROLES ={
    user:'user',
    admin:'admin'
  }

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<CreateProduct />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {products.map((product) => (
          <Route
            key={product.title}
            path={`/${product.id}`}
            element={<CardPage product={product} />}
          />
        ))}
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.user, ROLES.admin]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
