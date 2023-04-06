import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsListContext } from '../../contexts/ProductsListContext';
import { CartContext } from '../../contexts/CartContext';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import { useEffect } from 'react';


const ProductItem = () => {

    const { id } = useParams();

    const { products } = useContext(ProductsListContext);

    const { setCarrito } = useContext(CartContext);

    const [prueba, setPrueba] = useState({});


    const producto = products.find((producto) => producto.id == id);

    
    // const getItems = async (id) => {

    //     const refDoc = doc(db, "cart", id);

    //     const docSnap = await getDoc(refDoc);


    //     console.log(docSnap);


    //     if(docSnap.exists()){
    //         console.log('existe');

    //         setPrueba(docSnap.data());

    //         console.log( "hola", + prueba.title);



    //     }else{console.log('no existe');}
    // };




    const aggCart = async (producto) => {

        const itemCart = {
            title: producto.title,
            price: producto.price,
        }


        const cartColectionRef = collection(db, "cart");

        await addDoc(cartColectionRef, itemCart);
        const itemsCollection = await getDocs(cartColectionRef);
        setCarrito(
            itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        // getItems(producto.id);


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
                    <button href="..." className="btn btn-primary" onClick={() => aggCart(producto)}>Buy</button>
                </div>
            </div>
        </div >
    )
}

export default ProductItem