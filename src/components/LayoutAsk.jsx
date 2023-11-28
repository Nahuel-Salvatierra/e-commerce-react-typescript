import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Login from "./auth/Login.jsx";
import Register from './auth/Register.jsx'

function LayoutAsk() {
  const [compRegistrarse, setCompRegistrarse] = useState(false);

  const toggleRegistrarse = () => {
    setCompRegistrarse(!compRegistrarse);
  };

  return (
    <div>
      {compRegistrarse ? <Register /> : <Login /> }
      <p className="text-center">
        {compRegistrarse ? "¿Tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
        <a href="#" onClick={toggleRegistrarse} className="text-blue-600">
          {compRegistrarse ? "Regístrate aquí." : "Inicia sesión aquí."}
        </a>
      </p>
    </div>
  );
}

export default LayoutAsk;
