import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProducts } from '../Context'
import { calculateRating } from '../utils/calculateRating'
import axios from 'axios'


import '../styling/SingleProduct.css'

const SingleProduct = () => {
  
  const bluechess='/img/bluechess.jpg',blackchess='/img/blackchess.png'
  const {data,setdata}=useProducts()
  const {id}=useParams()
  let history=useParams()
  
  const [product,setproduct]=useState({});
  console.log(product)
  const starRating=calculateRating(product.rating)
  

  useEffect(()=>{
    getProductById()
  },[])


  const getProductById=async()=>{
     
      const res=await axios.get(`http://localhost:5000/products/${id}`)
      setproduct(res.data)

  }

  
  const isInCart=()=>{
        
    const res= data.cartProducts.find(item=>item.id===product.id)

    console.log('res:'+res)

    if (res)
    return true
    
    return false
 }

 const inCart=isInCart() 
  
 const cartHandler=()=>{


     if (inCart)
     {
        console.log("In cart") 
        const updatedCart=data.cartProducts.filter(item=>item.id!==product.id)
        setdata(prev=>({
            ...prev,
            cartProducts:updatedCart
        }))
        
     }
     else
     {
        console.log("Not in cart") 
        setdata(prev=>({
            ...prev,
            cartProducts:[...prev.cartProducts,product]
        })) 
     }

     console.log(data.cartProducts)       
 }
 
  
  


  return (
    <div className='single-product-wrapper'>
      <Link to='/store'><i class="fa-solid fa-arrow-left"></i></Link>
      <span> Your Design Space</span>
      <div className='single-product-container'>
        <div>
           <img className='single-product-main-img' src={product.src} alt='No Image' />
        </div> 

        <div className='single-product-flex-block'>
           <img className='single-product-img' src={product.src} alt='No Image' />
           <img className='single-product-img' src={product.src} alt='No Image' />
           <img className='single-product-img' src={product.src} alt='No Image' />
        </div>

        <div className='single-product-flex-block-1'> 
            
            <div className='single-product-block-30'>
              <h6 className='single-product-name'>{product.name}</h6>
              <br/>
              <div>
                <div className='stars-outer' >
                    <div className='stars-inner' style={{width:starRating}}></div>
                </div>
              </div>
              
              <span>80 Reviews</span>
              <br/> 
              <br/>
              <h6 className='single-product-price'>Rs {product.price}/-</h6>
              <p>Get an exclusive 20% off using HDFC bank credit card</p>
            </div>
               

            <div  className='single-product-block-70'>
              <div className='single-product-flex-row'>
                <h6 className='single-product-label-name'>Front</h6>
                <img className='single-product-checkbox' src={blackchess} alt='No image' />
                <div className='single-product-checkbox yellow'></div>
                <img className='single-product-checkbox' src={bluechess} alt='No image' />
                <div></div>
              
                <h6 className='single-product-label-name'>Middle</h6>
                <img className='single-product-checkbox' src={blackchess} alt='No image' />
                <div className='single-product-checkbox yellow'></div>
                <img className='single-product-checkbox' src={bluechess} alt='No image' />
                <div></div>
              
                <h6 className='single-product-label-name'>Back</h6>
                <img className='single-product-checkbox' src={blackchess} alt='No image' />
                <div className='single-product-checkbox yellow'></div>
                <img className='single-product-checkbox' src={bluechess} alt='No image' />
                <div></div>
              
                <h6 className='single-product-label-name'>Sole</h6>
                <img className='single-product-checkbox' src={blackchess} alt='No image' />
                <div className='single-product-checkbox yellow'></div>
                <img className='single-product-checkbox' src={bluechess} alt='No image' />
                <div></div>

                <h6 className='single-product-label-name'>Sole</h6>
                <button className='single-product-checkbox checkbox-btn'>7</button>
                <button className='single-product-checkbox checkbox-btn'>8</button>
                <button className='single-product-checkbox checkbox-btn'>9</button>
                <button className='single-product-checkbox checkbox-btn'>10</button>

              </div>
            </div>
                

        </div>
      </div>            
      
      <div className='single-product-rating-row'>
        <span>Rate Product </span>
        <div className='stars-outer' >
          <div className='stars-inner' style={{width:0}}></div>
        </div>
      </div>

      <div className='single-product-footer'> 
          
          <button >Share Design</button>
          <button style={{backgroundColor:'#000',color:'#fff'}} onClick={cartHandler}>{inCart?'Remove From Cart':'Add To Cart'}</button>

      </div>


    </div>
  )
}

export default SingleProduct