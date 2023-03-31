import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ producto }) => {
    return (
        <Link to={`${producto.id}`}>
            <div className="card">
                <img src={producto.image} className="card-img-top" alt="Imagen del producto" />
                <div className="card-body">
                    <h2 key={producto.id} className="card-title">{producto.title}</h2>
                    <p className="card-text card-description">{producto.description}</p>
                    <p className="card-text">$Price: {producto.price}</p>
                    <button href="..." className="btn btn-primary">Buy</button>
                </div>
            </div>

        </Link>

    )
}

export default Card