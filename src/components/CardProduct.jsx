import React from 'react'

const CardProduct = ({ titleCard, cardDescription }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
        <figure><img src="https://www.sinergiaindustrial.com.ar/thumb/146C645C28B442F3B32FBF41C0D331D5_800x800.jpg" className='w-80' alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title"> {titleCard} </h2>
            <p> { cardDescription } </p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary"> Comprar </button>
            </div>
        </div>
    </div>
  )
}

export default CardProduct