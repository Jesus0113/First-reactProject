
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { deleteDoc, doc } from 'firebase/firestore';
import db from '../../../db/firebase-config';


const ItemCart = () => {

    const { carrito, getCart } = useContext(CartContext);


    const deleteitems = async (id) => {

        await deleteDoc(doc(db, "cart", id));

        getCart();
        

    };


    return (
        <>
        {carrito.map( (product)=>(
            <tr key={product.id} >
            <th scope="row">{product.id}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td></td>
            <td><button className='btn-Delete' onClick={()=>{deleteitems(product.id)}}>Delete</button></td>
        </tr>

        ))}

</>
            


    )
}

export default ItemCart