import React, {useEffect} from 'react';


const CardPage = ( {product} ) => {

  return (
    <div className='container mx-auto flex justify-center gap-3'>
      <div className='w-1/3'>
        <img src={product.images} alt={product.title + " image"} className='w-96 h-50 object-contain' />
      </div>
      <div className='w-2/3 text-center'>
        <h1 className='text-4xl border-b border-gray-500' >{product.title}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default CardPage