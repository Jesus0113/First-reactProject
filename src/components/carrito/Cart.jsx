import React from 'react'

const Cart = () => {
    return (
        <div className='cart'>
            <table class="table border border-secondary p-2 border-opacity-75 mt-4 bg-info bg-gradient bg-opacity-50">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>1</td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>1</td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>1</td>
                        <td> X </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Cart