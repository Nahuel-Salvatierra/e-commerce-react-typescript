import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CreateProduct from "./components/CreateProduct";
import Home from "./pages/home/Home";
import RequireAuth from "./components/auth/RequiredAuth";
import Dashboard from "./pages/dasboard/Dashboard";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import CardPage from "./pages/cardPage/CardPage";
import { useProductContext } from "./hook/useProductsContext";
import { CardCategoryPage } from "./pages/cardCategoryPage/CardCategoryPage";
import { useCategory } from "./hook/useCategory";

function App() {
    const { product } = useProductContext();

    const [category] = useCategory();

    const ROLES = {
        user: "user",
        admin: "admin",
    };

    return (
        <Routes>
            <Route path="" element={<Layout />}>
                {/* public routes */}
                <Route path="/" element={<Home />} />

                <Route path="/unauthorized" element={<Unauthorized />} />

                {/* Card Product  */}
                {product.map((products) => (
                    <Route
                        key={products.title}
                        path={`/${products.id}`}
                        element={<CardPage product={products} />}
                    />
                ))}

                {/* Category Page */}
                {category.map((category) => (
                    <Route
                        key={category}
                        path={`/${category}`}
                        element={<CardCategoryPage product={category} />}
                    />
                ))}

                {/* we want to protect these routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.user, ROLES.admin]} />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                
                <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
                    <Route path="/product" element={<CreateProduct />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
