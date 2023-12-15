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
import { useProductContext } from "./hook/useProducts";
import { CardCategoryPage } from "./pages/cardCategoryPage/CardCategoryPage";
import { useCategory } from "./hook/useCategory";

function App() {
  const { product } = useProductContext();
    let array
    if (product) {
        array = Object.values(product);
    }
    console.log("Este es", product)
  const [category] = useCategory()





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

        {/* Card Product  */}
        {product.map((products) => (
          <Route
            key={products.title}
            path={`/${products.id}`}
            element={<CardPage product={products} />}
          />
        ),console.log("asdaqweqweqweqweqweqweqw",product))}

        {/* Category Page */}
        {category.map((category) => (
          <Route
            key={category}
            path={`/${category}`}
            element={<CardCategoryPage product={category} />}
          />
        ), console.log("qweqw", category))}

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.user, ROLES.admin]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
