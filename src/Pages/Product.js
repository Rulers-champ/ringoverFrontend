import React from 'react'
import CartCatalogue from '../components/CartCatalogue'
import SingleProduct from '../components/SingleProduct'
import '../styling/Product.css'

const Product= () => {
  return (
    <div className='product-page-container'>
         <div class="product-page-block">
            <SingleProduct />
         </div>

         <div className='product-cart-block'>
            <CartCatalogue/>
         </div>
    </div>
  )
}

export default Product