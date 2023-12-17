import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Admin, User } from "./index";
import { getUserById } from "./../../api/user.api";
import { IconArrowLeft } from "../../components/IconHero";
import Button from "../../components/UI/Button";

const Dashboard = () => {
    const { auth } = useAuth();
    const [user, setUser] = useState({});
    const [edit, setEdit] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const res = await getUserById(auth.user.userId);
            if (res.status == 200) {
                delete res.status;
                setUser(res);
            }
        };
        getUser();
    }, []);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <section>
            <div>
                <div>
                    <h2>Detalles del Usuario</h2>
                    <button className="btn border-0 bg-neutral text-white hover:bg-green-700" onClick={handleEdit} > {edit ? "Editar" :  <div className="flex items-center"> <IconArrowLeft className={"h-4 w-4"} /> &nbsp; Volver </div> } </button>
                </div>

                {edit 
                ? (<ul >
                    {Object.keys(user).map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong> {user[key]}
                        </li>
                    ))}
                </ul>) 
                : ( auth.user.userRole == "admin" ? <Admin /> : <User {...user} /> ) }
                
                
            </div>
            
        </section>
    );
};

export default Dashboard;
