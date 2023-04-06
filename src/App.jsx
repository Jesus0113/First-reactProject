
import './index.css'
import { useContext, useEffect, useState } from 'react';
import db from '../db/firebase-config'
import { collection, getDocs } from 'firebase/firestore';
import ListProducts from './components/listProducts/ListProducts';
import Nabvar from './components/nabvar/Nabvar';
import Footer from './components/footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/hom/Home';
import Cart from './components/carrito/Cart';
import Contact from './components/contact/Contact';
import { ProductsListContext } from './contexts/ProductsListContext';
import ProductItem from './components/productItem/ProductItem';
import { CartContext } from './contexts/CartContext';

function App() {


  const [products, setProducts] = useState([]);

  const [carrito, setCarrito] = useState([]);



  const itemsColectionRef = collection(db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsColectionRef);
    setProducts(
      itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const cartColectionRef = collection(db, "cart");

  const getCart = async () => {
    const itemsCollection = await getDocs(cartColectionRef);
    setCarrito(
      itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
  }


  

  useEffect(() => {
    getItems();
    getCart();
  }, []);

  return (
    <>
      <header>
        <CartContext.Provider value={{ carrito, setCarrito }}>
          <Nabvar />
        </CartContext.Provider>
        <h1 className='texto-h1'>¡ Welcome to my App !</h1>
      </header>

      <section>
        <ProductsListContext.Provider value={{ products, setProducts }}>
          <CartContext.Provider value={{ carrito, setCarrito, getCart }}>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/ListProducts' element={<ListProducts />} />
              <Route path='/ListProducts/:id' element={<ProductItem />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path="*" element={<h2 className='fs-1 m-5 text-center p-5'>Error 404 'Wrong URL'</h2>} />
            </Routes>
          </CartContext.Provider>
        </ProductsListContext.Provider>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
