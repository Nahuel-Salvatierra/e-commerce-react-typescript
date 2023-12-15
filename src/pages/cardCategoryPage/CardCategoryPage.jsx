import React from 'react'
import CardProduct from '../../components/cards/CardProduct'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../../hook/useProducts';

export function CardCategoryPage({}) {

  const navigate = useNavigate()
  

  const { product } = useProductContext();
  let array
    if (product) {
        array = Object.values(product);
    }

  return (
    <div>
        <CardProduct
          handleProductNavigate={()=>navigate({to:`${product.id}`}, {replace: true})}
        />
    </div>
  )
}

