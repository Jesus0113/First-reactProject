import React, { useState } from 'react'

const Contact = () => {


    const [inputName, setInputName] =useState();
    const [inputLastName, setInputLastName] =useState();
    const [inputEmail, setInputEmail] =useState();
    const [inputMessage, setInputMessage] =useState();


    return (
        <div className=''>
            <h2 className="fs-1 text-center m-5">Form</h2>
            <form className='contact' action="">
                
                    <label className='contact__label' htmlFor="">Name</label>
                    <input className='contact__input' type="text" placeholder="Name"  value={inputName} onChange={(e)=>{setInputName(e.target.value)} } />
                

                
                    <label className='contact__label' htmlFor="">Last Name</label>
                    <input className='contact__input' type="text" placeholder="Last Name"  value={inputLastName} onChange={(e)=>{setInputLastName(e.target.value)} }/>
                

                
                    <label className='contact__label' htmlFor="">Email</label>
                    <input className='contact__input' type="email" placeholder='Email'  value={inputEmail} onChange={(e)=>{setInputEmail(e.target.value)} } />
                

                
                    <label className='contact__label' htmlFor="">Message</label>
                    <textarea name="" id="" cols="20" rows="1" placeholder='Message'></textarea>

                    <button type='submit' className='btn btn-primary mt-3 '>Enviar</button>
                

            </form>
        </div>
    )
}

export default Contact