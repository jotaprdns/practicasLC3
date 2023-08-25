import React from 'react'
import "./BeerItem.css"

const BeerItem = ({ id, beerName, beerStyle, price }) => {
    let dolar = 760;
    return (
        <div className="beer-item-container">
            <h2>Nombre: {beerName}</h2>
            <p>Estilo: {beerStyle}</p>
            <p>Precio: {price * dolar}</p>
        </div>
    )
}

export default BeerItem