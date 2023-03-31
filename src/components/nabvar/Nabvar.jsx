import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nabvar() {
    return (
        <nav className='nabvar'>
            <NavLink to="/Home" className={({ isActive, isPending}) =>
            isPending ? "isPending": isActive ? "isActive": ""
        
        }>
            <p>Home</p>
            </NavLink>

            <NavLink to="ListProducts" className={({ isActive, isPending}) =>
            isPending ? "isPending": isActive ? "isActive" : ""
        
        }>
            <p>Products</p>
            </NavLink>

            <NavLink to="Contact" className={({ isActive, isPending}) =>
            isPending ? "isPending": isActive ? "isActive" : ""
        
        } >
            <p>Contact</p>
            </NavLink>

            <Link to="Cart" >
            <img className='carrito' src=".././public/cart.jpg" alt="" />
            </Link>
        </nav>
    
    )
}

export default Nabvar
