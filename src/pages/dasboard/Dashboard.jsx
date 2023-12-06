import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Admin, User } from "./index";
import { getUserById } from "./../../api/user.api";

const Dashboard = () => {
    const { auth } = useAuth();
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            const res = await getUserById(auth.user.userId);
            console.log(res);
            if (res.status == 200) {
                delete res.status;
                setUser(res);
            }
        };
        getUser();
    }, []);

    return (
        <div>
            <div>
                <h2>Detalles del Usuario</h2>
                <ul>
                    {Object.keys(user).map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong> {user[key]}
                        </li>
                    ))}
                </ul>
            </div>
            {auth.user.userRole == "admin" ? <Admin /> : <User {...user} />}
        </div>
    );
};

export default Dashboard;
