import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Login from "./auth/Login.jsx";
import Register from './auth/Register.jsx'
import LogOut from "./auth/LogOut.jsx";
import useAuth from "../hook/useAuth.js";

function LayoutAsk( {onClose} ) {
  const [compRegistrarse, setCompRegistrarse] = useState(false);
  const { auth } = useAuth();

  const toggleRegistrarse = () => {
    setCompRegistrarse(!compRegistrarse);
  };

  return (
    <div>
      {compRegistrarse ? compRegistrarse == auth?.user? (<LogOut />) : <Register onClose={onClose}/> : <Login onClose={onClose} /> }
      <p className="" id='askRegister'>
        {compRegistrarse ? "¿Tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
        <a href="#" onClick={toggleRegistrarse} className="text-blue-600">
          {compRegistrarse ? "Inicia sesión aquí.": "Regístrate aquí."}
        </a>
      </p>
    </div>
  );
}

export default LayoutAsk;
