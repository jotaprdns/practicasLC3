import React from 'react'

const BeerItem = ({ id, beerName, beerStyle, price }) => {
    let dolar = 760;
    return (
        <div className='div-card'>
            <h2>Nombre: {beerName}</h2>
            <p>Estilo: {beerStyle}</p>
            <p>Precio: {price * dolar}</p>
        </div>
    )
}

export default BeerItem