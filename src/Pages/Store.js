import React, { useState } from 'react';


import Filter from '../components/Filter';
import ProductCatalogue from '../components/ProductCatalogue';
import CartCatalogue from '../components/CartCatalogue';

import '../styling/Store.css';





function Store()
{
    
    return (
        <div className='store-wrapper'>
             
            <Filter />
            
            <ProductCatalogue />
            
            <CartCatalogue />

        </div>
    );
}

export default Store;