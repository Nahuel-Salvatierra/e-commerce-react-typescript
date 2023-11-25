import React from 'react';

const CartOffCanvas = ({  }) => {
  return (
    <div className="flex bg-neutral w-full p-2">
      <div className="flex-shrink-0" >
        <img className="object-contain h-48 w-50" src="https://www.libreriaascorti.com.ar/4118-large_default/cuaderno-america-terra-a4-80-hojas-rayado.jpg" alt="Producto" />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <div>
          <h3 className="text-xl font-bold">title</h3>
          {/* <h3 className="text-xl font-bold">{product.title}</h3> */}
        </div>
        <div>
          <p className="text-lg font-bold">$123123</p>
          {/* <p className="text-lg font-bold">${product.precio}</p> */}
        </div>
        <div>
          <div id="carrito-cantidad" className="flex items-center">
            <button className="border px-2" onClick={() => console.log('Restar')}> - </button>
            <span className="mx-2">cantidad</span>
            {/* <span className="mx-2">{product.cantidad}</span> */}
            <button className="border px-2" onClick={() => console.log('Sumar')}> + </button>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <img className="h-6" src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png" alt="Eliminar" />
      </div>
    </div>
  );
}

export default CartOffCanvas;
