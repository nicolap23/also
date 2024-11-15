import React from 'react'
import { MenuList } from '../../helpers/MenuList'
import MenuItem from '../../components/MenuItem'
import styles from '../../styles/Shop.css'
export default function Shop() {
  return (
    
    <div className='shop'>

            <h1 className='shop-title'>Products</h1>
            <div className='shop-list'>

                {MenuList.map((menuItem, key) =>{
                    return( 

                        <MenuItem 
                          key={key}
                          image={menuItem.image} 
                          name={menuItem.name} 
                          price={`$${menuItem.price}`}
                       />

                    ) 
                    
                })}

            </div>

      
    </div>
  )
}
