
import './index.css'
import Nabvar  from "./components/nabvar/Nabvar";
import Footer from "./components/footer/Footer";
import Home from './components/hom/Home';
import ListProducts from "./components/listProducts/ListProducts";
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
// import axios from 'axios'
import Contact from './components/contact/Contact';
import ProductItem from './components/productItem/ProductItem';
import Cart from './components/carrito/Cart';

import db from '../db/firebase-config'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

function App() {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  const itemsColectionRef = collection(db, "items");


  const getItems = async () => {
  //Obtengo ref document
    const itemsCollection = await getDocs(itemsColectionRef);
    setProducts(
      itemsCollection.docs.map((doc) =>({...doc.data(), id: doc.id}))
    );
  };

  useEffect(()=>{
    getItems();
  }, []);


  // const getProducts = async () => {
  //   const res = await axios.get('https://fakestoreapi.com/products');
  //   setProduct(res.data);
  // }
  // useEffect(() => {
  //   getProducts();
  // }, [])


  return (
    <div>
      <Nabvar/>
      <h1 className='texto-h1'>¡ Welcome to my App !</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path='/Home'  element={<Home/>}/>
        <Route path='/ListProducts'  element={<ListProducts product={products} setProducts={setProducts}/>}/>
        <Route path='/Contact'  element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/ListProducts/:id'  element={<ProductItem product={products}/>}/>
        <Route path="*" element={<h2 className='fs-1 m-5 text-center p-5'>Error 404 'Wrong URL'</h2>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
