import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Home.css'


export default function Home() {
  return (
    <div className='home'>

        <div className='header-container'>
          <h1>Nada como salir a pedalear.</h1>

          <Link to="/Shop">
          
            <button className='cta-btn'>Comprar</button>
          
          </Link>


        </div>
        
    </div>
  )
}
