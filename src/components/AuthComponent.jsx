import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Login from "./auth/Login.jsx";
import Register from './auth/Register.jsx'
import LogOut from "./auth/LogOut.jsx";
import useAuth from "../hook/useAuth.js";
import { useTitleAuth } from "../hook/useCart.jsx";

function LayoutAsk( {onClose, checkRegister, setCheckRegister} ) {
  const [compRegistrarse, setCompRegistrarse] = useState(false);
  const { auth } = useAuth();
  
  const toggleRegistrarse = () => {
    setCompRegistrarse(!compRegistrarse);
    setCheckRegister((prev)=>!prev)
  };

  return (
    <div>
      {compRegistrarse ? compRegistrarse == auth?.user? (<LogOut />) : <Register onClose={onClose}/> : <Login onClose={onClose} /> }
      <p className="" id='askRegister'>
        {compRegistrarse ? "¿Tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
        <a href="#" onClick={toggleRegistrarse} className="text-blue-600">
          {checkRegister ? "Inicia sesión aquí.": "Regístrate aquí."}
        </a>
      </p>
    </div>
  );
}

export default LayoutAsk;
