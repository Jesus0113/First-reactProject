import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsListContext } from '../../contexts/ProductsListContext';
import { CartContext } from '../../contexts/CartContext';



const ProductItem = () => {

    const { id } = useParams();

    const { products } = useContext(ProductsListContext);

    const {carrito, setCarrito} = useContext(CartContext);


    const producto = products.find((producto) => producto.id == id);


    const aggCart = (producto) => {

        const itemCart = {
            title: producto.title,
            price: producto.price,
            amount: 1,
            id: producto.id
        }

        
    if (carrito.some(product => product.id === producto.id)) {

        const items = carrito.map(product => {
            if (product.id === producto.id) {
                product.amount++;
                return product;
            } else {
                return product;
            }
        });

        setCarrito([...items]);

    }else{
        setCarrito([...carrito, itemCart]); 
    }


    }





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
                    <button href="..." className="btn btn-primary" onClick={() => aggCart(producto)}>Agg Cart</button>
                </div>
            </div>
        </div >
    )
}

export default ProductItem