import React from 'react'
import { useParams } from 'react-router-dom'

const ProductItem = ({ product }) => {

    const { id } = useParams();

    const producto = product.find((producto) => producto.id == id);
    return (

        <div>
            <h2 className='fs-1 text-center m-5'>Detailed Product</h2>
            <div className="card-item">
                <img src={producto.image} className="card-img-top-item" alt="Imagen del producto" />
                <div className="card-body-item">
                    <h2 key={producto.id} className="card-title-item">{producto.title}</h2>
                    <p className="card-text">{producto.category}</p>
                    <p className="card-text card-description-item">{producto.description}</p>
                    <p className="card-text">$Price: {producto.price}</p>
                    <p>rating: {producto.rating.rate}</p>
                    <button href="..." className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div >
    )
}

export default ProductItem