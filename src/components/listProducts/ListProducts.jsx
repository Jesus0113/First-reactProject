import React, { useContext } from 'react'
import Card from '../card/Card';
import { ProductsListContext } from '../../contexts/ProductsListContext';
import FormAdd from '../formAdd/FormAdd';



function ListProducts() {

    const {products} =  useContext(ProductsListContext);

    return (
        <div>
            
                <h1 className='fs-1 text-center'>Inventory</h1>

                <div className='list-products'>
                {products.map((producto) => (
                    <Card key={producto.id} producto={producto} />
                ))}
            </div>
            
            
                <FormAdd /> 
        
        </div>
    )
}

export default ListProducts