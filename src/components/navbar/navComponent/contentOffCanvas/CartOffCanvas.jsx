import React, { useState, useEffect } from "react";
import useCart from "./../../../../hook/useCart";

const CartOffCanvas = (...props) => {

  



  return (
    <div>
			{console.log(...props)}
      {cartItems.map((item, index) => (
        <div className="flex bg-neutral w-full p-2" key={index}>
          <div className="flex-shrink-0">
            <img
              className="object-contain h-48 w-50"
              src={item.images}
              alt="Producto"
            />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <div>
              <h3 className="text-xl font-bold"> {item.title} </h3>
              {/* <h3 className="text-xl font-bold">{product.title}</h3> */}
            </div>
            <div>
              <p className="text-lg font-bold"> ${item.price} </p>
              {/* <p className="text-lg font-bold">${product.precio}</p> */}
            </div>
            <div>
              <div id="carrito-cantidad" className="flex items-center">
                <button
                  className="border px-2"
                  onClick={() => console.log("Restar")}
                >
                  {" "}
                  -{" "}
                </button>
                <span className="mx-2">cantidad</span>
                {/* <span className="mx-2">{product.cantidad}</span> */}
                <button
                  className="border px-2"
                  onClick={() => console.log("Sumar")}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png"
              alt="Eliminar"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartOffCanvas;
