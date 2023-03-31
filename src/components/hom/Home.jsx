import React from 'react'

const Home = () => {
    return (
        <div>
            <h2 className=' fs-1 text-center m-5'>Home</h2>
            <div className='contenedor-img'>
                <img className='contenedor-img__child' src=".././public/ciudad.jpg" alt="" />
                <img className='contenedor-img__child--Active' src=".././public/life.jpg" alt="" />
                <img className='contenedor-img__child' src=".././public/playa.jpg" alt="" />

            </div>
        </div>
    )
}

export default Home