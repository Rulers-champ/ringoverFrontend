import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import products from './components/Shoes';


const ProductContext=createContext();

export const useProducts=()=>useContext(ProductContext)



const initial={

    products :[],
    filteredProducts:[],
    cartProducts:[],
    userLoggedIn:'',
    blueColor:0,
    redColor:0,
    whiteColor:0,
    greenColor:0,
    blackColor:0,
    priceAbove1500:0,
    priceAbove4000:0,
    priceAbove7000:0
}

export const Context = ({children}) => {
    
    const [data,setdata]=useState(initial) 

    useEffect(()=>{
      getAllProducts() 
    },[])
    
    const getAllProducts=async()=>{
       const res=await axios.get(`http://localhost:5000/products?redColor=0&blueColor=0&whiteColor=0&greenColor=0&blackColor=0&priceAbove1500=0&priceAbove4000=0&priceAbove7000=0`)
       const shoes=res.data
       
       

       setdata((prev)=>{
         return {
            ...prev,products:[...shoes],filteredProducts:[...shoes]
          } 
       })
    }



  return (
    <ProductContext.Provider value={{data,setdata}} >{children}</ProductContext.Provider>
  )
}

