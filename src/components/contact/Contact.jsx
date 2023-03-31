import React from 'react'

const Contact = () => {
    return (
        <div className=''>
            <h2 className="fs-1 text-center m-5">Form</h2>
            <form className='contact' action="">
                
                    <label className='contact__label' htmlFor="">Name</label>
                    <input className='contact__input' type="text" placeholder="Name" />
                

                
                    <label className='contact__label' htmlFor="">Last Name</label>
                    <input className='contact__input' type="text" placeholder="Last Name" />
                

                
                    <label className='contact__label' htmlFor="">Email</label>
                    <input className='contact__input' type="email" placeholder='Email' />
                

                
                    <label className='contact__label' htmlFor="">Message</label>
                    <textarea name="" id="" cols="20" rows="1" placeholder='Message'></textarea>

                    <button type='submit' className='btn btn-primary mt-3 '>Enviar</button>
                

            </form>
        </div>
    )
}

export default Contact