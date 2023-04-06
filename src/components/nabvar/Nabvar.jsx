import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

function Nabvar() {

    const {carrito} = useContext(CartContext);

    return (
        <nav className='nabvar'>
            <NavLink to="/Home" className={({ isActive, isPending}) =>
            isPending ? "isPending": isActive ? "isActive": ""}>
            <p>Home</p>
            </NavLink>

            <NavLink to="ListProducts" className={({ isActive, isPending}) =>
            isPending ? "isPending": isActive ? "isActive" : ""}>
            <p>Products</p>
            </NavLink>

            <NavLink to="Contact" className={({ isActive, isPending}) =>
            isPending ? "isPending": isActive ? "isActive" : ""} >
            <p>Contact</p>
            </NavLink>

            <Link to="Cart" >
            <img className='carrito' src=".././public/cart.jpg" alt="Imagen Carrito" />
            {carrito.length ? <p className='cart__length'>{carrito.length}</p> : null}
            </Link>
        </nav>
    
    )
}

export default Nabvar
