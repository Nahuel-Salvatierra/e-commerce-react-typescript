import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
import {ProductProvider} from "./context/ProductContext.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
	<BrowserRouter>
		<AuthProvider>
			<ProductProvider>
				<CartProvider>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</CartProvider>
			</ProductProvider>
		</AuthProvider>
	</BrowserRouter>
);
