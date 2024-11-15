import React from 'react'
import Logo from '../assets/logo-bike2.png'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>

            <div className='left-side'>

            <img src={Logo} className='navbar-logo '/>
           


            </div>

            <div className='right-side'>

              <Link to="/home">Home</Link>
              <Link to="/Shop">Shop</Link>
              <Link to="/Contact">Contact</Link>
                

            </div>


        
      
    </div>
  )
}
