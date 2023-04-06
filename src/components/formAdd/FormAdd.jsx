import React, { useContext, useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import db from '../../../db/firebase-config'
import { ProductsListContext } from '../../contexts/ProductsListContext';



const FormAdd = () => {

    const [inputTitle, setInputTitle] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputImage, setInputImage] = useState("");

    const { setProducts } = useContext(ProductsListContext);

    const addItem = async (e) => {
        e.preventDefault();

        const item = {
            title: inputTitle,
            price: inputPrice,
            description: inputDescription,
            image: inputImage
        }
        const itemsColectionRef = collection(db, "items");

        await addDoc(itemsColectionRef, item);

        const itemsCollection = await getDocs(itemsColectionRef);
        setProducts(
            itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        setInputTitle("");
        setInputPrice("");
        setInputDescription("");
        setInputImage("");

    };
    return (
        <div>
            <h2 className="fs-2 text-center m-5">Add Item</h2>

            <form className='contact' onSubmit={addItem}>

                <input type="text" className='contact__input' placeholder='title' value={inputTitle} onChange={(e) => { setInputTitle(e.target.value) }} />
                <input type="text" className='contact__input' placeholder='price' value={inputPrice} onChange={(e) => { setInputPrice(e.target.value) }} />
                <input type="text" className='contact__input' placeholder='description' value={inputDescription} onChange={(e) => { setInputDescription(e.target.value) }} />
                <input type="text" className='contact__input' placeholder='image(URL)' value={inputImage} onChange={(e) => { setInputImage(e.target.value) }} />
                {/* <button className='btn btn-primary mt-3 ' type='submit'>Agg</button> */}
            </form>
        </div>
    )
}

export default FormAdd

