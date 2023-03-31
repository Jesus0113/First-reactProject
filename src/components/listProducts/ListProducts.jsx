import React from 'react'
import Card from '../card/Card'

function ListProducts({ product }) {
    return (
        <div>
            <h1 className='fs-1 text-center'>Inventory</h1>
            <div className='list-products'>
                {product.map((producto) => (
                    <Card key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    )
}

export default ListProducts