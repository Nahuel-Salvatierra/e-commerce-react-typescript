import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const storedToken = localStorage.getItem("token");
	const storedUser = localStorage.getItem("user");
	if (storedUser === "undefined") {
		localStorage.removeItem("user");
		localStorage.removeItem('token')
	}
	const readableUser = storedUser;
	JSON.parse(storedUser);

	const [auth, setAuth] = useState(
		storedToken && readableUser
			? { token: storedToken, user: readableUser }
			: {}
	);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
