import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ItemCart from '../itemCart/ItemCart';


const Cart = () => {

    const { carrito } = useContext(CartContext);


    return (
        <div className='cart'>
            <table className="table border border-secondary p-2 border-opacity-75 mt-4 bg-info bg-gradient bg-opacity-50">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>

                    <ItemCart />

                </tbody>
            </table>

        </div>
    )
}

export default Cart