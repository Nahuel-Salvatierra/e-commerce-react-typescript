import React from "react";
import useAuth from "../../hook/useAuth"; 
import { Admin, User } from "./index";

const Dashboard = () => {
	const { auth } = useAuth();
	return (
		<div>
			This is a Dashboard
			{auth.user.userRole == "admin" ? <Admin/> : <User/>}
		</div>
	);
};

export default Dashboard;
