import React from 'react'
import Card from '../card/Card';
import FormAdd from '../formAdd/FormAdd'


function ListProducts({ product, setProducts }) {

    return (
        <div>
            <h1 className='fs-1 text-center'>Inventory</h1>
            <div className='list-products'>
                {product.map((producto) => (
                    <Card key={producto.id} producto={producto} />
                ))}
            </div>

            <FormAdd setProducts={setProducts} />
        </div>
    )
}

export default ListProducts