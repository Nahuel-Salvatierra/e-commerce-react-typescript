import React, {useEffect} from 'react';


const CardPage = ( {product} ) => {

  const iconCheck = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
  const iconShield = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>
const iconTruck = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>




  return (
    <div className='container mx-auto flex justify-center gap-3 my-8'>
      <div className='w-1/2 mr-3'>
        <img src={product.images} alt={product.title + " image"} className='w-[500] h-[90%] object-contain' />
      </div>
      <div className='w-1/2'>
        {/* Titulo */}
        <h1 className='text-3xl border-b border-gray-600 pb-2' >{product.title}</h1>
        {/* Precios */}
        <div className='border-b border-gray-600 text-info'>
          <p className='text-4xl py-7 ms-7'> $ {product.price} </p>
        </div>
        {/* Garantia, Stock y Envio */}
        <div className='border-b border-gray-600 flex flex-col gap-3 text-success'>
          <p className='flex h-1/3' >{iconShield} Garantía </p>
          <p className='flex h-1/3' >{iconCheck} Stock disponible </p>
          <p className='flex h-1/3' >{iconTruck} Envio a todo el país </p>
        </div>
        {/* Agregar carrito */}
        <button className='btn btn-neutral w-80 mt-5' >Agregar al carrito</button>
      </div>
    </div>
  )
}

export default CardPage