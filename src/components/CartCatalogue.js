import React from 'react'
import { useProducts } from '../Context'
import Cartblock from './Cartblock';

const CartCatalogue = () => {

  const {data,setdata}=useProducts()
  
  
  return (
    
    <div className='store-block right-block'>
            
            <div className='block-topbar' >
                  <h2>CART</h2>
                  
                  <img src='/img/bag.png' className="store-icon" />
                                    
                </div>


                <div className='cart-flow' >
                    {
                        data.cartProducts.length===0?<p className='cart-empty-text'>What's stopping You ?</p>:<></>
                    }
                    
                     
                    {
                            data.cartProducts.map(item=>(
                                <Cartblock id={item.id} name={item.name} img={item.src} rating={item.rating} price={item.price} />
                            ))
                    }
                        

              
               </div>
               <div>
                <div className='block-footer'>
                  <a href='#'><img className='store-icon' src="/img/location.png" />Home</a>
                  <a href='#'><img className='store-icon' src="/img/calendar.png" />Select Date</a>
                  <br />

                  <button className='store-btn'>Order Now</button>                                       
 
                </div>  

               </div>
                 
              
            </div>

  )
}

export default CartCatalogue