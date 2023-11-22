import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import {AuthProvider} from "./context/AuthProvider.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
	<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</AuthProvider>
	</BrowserRouter>
);
