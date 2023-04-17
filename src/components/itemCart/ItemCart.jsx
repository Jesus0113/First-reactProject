
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const ItemCart = () => {

    const { carrito, setCarrito, getCart } = useContext(CartContext);


    const deleteitems = (id) => {

        if (carrito.some(product => product.amount > 1)) {

            const items = carrito.map(product => {
                if (product.id === id) {
                    product.amount--;
                    return product;
                } else {
                    return product;
                }
            });

            setCarrito([...items]);

        } else {

            const actCart = carrito.filter(product => product.id !== id);

            setCarrito(actCart);

        }

    };

    return (
        <>
            {carrito.map((product) => (
                <tr key={product.id} >
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.amount}</td>
                    <td><button className='btn-Delete' onClick={() => { deleteitems(product.id) }}>Delete</button></td>
                </tr>

            ))

            }

        </>

    )
}

export default ItemCart