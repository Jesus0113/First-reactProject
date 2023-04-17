import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ItemCart from '../itemCart/ItemCart';
import db from '../../../db/firebase-config';
import { addDoc, collection } from 'firebase/firestore';


const Cart = () => {

    const { carrito, setCarrito } = useContext(CartContext);


    const restarForm = () => {
        setCarrito([]);
    };

    const aggCart = async () => {

        // const cartColectionRef = collection(db, "cart");

        // await addDoc(cartColectionRef, carrito);

        setTimeout(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Well done!`,
                showConfirmButton: false,
                timer: 5000
            });
            restarForm();
        }, 2000);
    }


    return (
        <div className='cart'>
            <table className="table border border-secondary p-2 border-opacity-75 mt-4 bg-info bg-gradient bg-opacity-50">
                <thead>
                    <tr>
                        <th scope="col">Name Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>

                    <ItemCart />

                </tbody>

                <tfoot>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">{}</th>
                        <th scope="col">{}</th>
                        <th></th>
                    </tr>

                </tfoot>
            </table>

            <div className='div-buttons'>
                <button className='btn btn-success' onClick={() => aggCart()}>Buy</button>

                <button className='btn btn-warning'>Empty cart</button>


            </div>

        </div>
    )
}

export default Cart