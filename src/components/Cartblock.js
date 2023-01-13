import React from 'react';
import '../styling/Cartblock.css';
import { useProducts } from '../Context';
import products from './Shoes';

function Cartblock(props)
{
   const {data,setdata}=useProducts()

  
  
  
  const deleteFromCart=(id)=>{

    

    const updatedCart=data.cartProducts.filter((item)=>{return item.id!==id})
    
    setdata((prev)=>({
        ...prev,
        cartProducts:updatedCart
    }))
    

  }



   const starPerc=(props.rating/5)*100;
   const starPercRounded=`${Math.round(starPerc/10)*10}%`;


    return (
      
            <div class="cart-container" >
            <img className="cart-img" src={props.img}/>
            <img className='cart-cancel-icon' src="/img/cancel.png" onClick={()=>deleteFromCart(props.id)} />
            <div className="cart-footer">
                <h4>{props.name}</h4>
                <h6>Rs {props.price}</h6>
            </div> 
            </div>
        
        
    );
}

export default Cartblock;