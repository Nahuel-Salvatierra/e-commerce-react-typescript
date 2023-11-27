import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ProductProvider } from "./context/ProductProvider.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
	<BrowserRouter>
		<AuthProvider>
			<ProductProvider>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</ProductProvider>
		</AuthProvider>
	</BrowserRouter>
);
