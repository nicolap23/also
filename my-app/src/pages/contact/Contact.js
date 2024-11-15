import React from 'react'
import contacFoto from '../../assets/contacfoto.jpg'
import styles from '../../styles/Contact.css'

export default function Contact() {
  return (
    
    
    <div className='contact'>

        <div className='left-side'
        style={{backgroundImage:`url(${contacFoto})`}}
        
        ></div>
        
        
        <div className='right-side'>

            <h1>Contact Us</h1>

            <form id='contact-form' method=''>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='enter full name...' type='text'/>


                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='enter Email...' type='email'/>


                <label htmlFor='message'>Message</label>
                <textarea rows="6"  name='message' placeholder='enter message...' required></textarea>

                <button>Send Message</button>
            </form>

        </div>
      
    </div>
  )
}
