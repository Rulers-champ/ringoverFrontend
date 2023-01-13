import React, { useState } from 'react'
import { useProducts } from '../Context';


const Filter = () => {

  const {data,setdata}=useProducts()
  const {blueColor,redColor,whiteColor,greenColor,blackColor,priceAbove1500,priceAbove4000,priceAbove7000,filteredProducts}=data




  return (
    <>
        <div className='store-block left-block'>
              <div className='block-topbar' >
                  <h2>FILTERS</h2>
                  <img src="/img/filter.png" className="store-icon" />
              </div>

              <h2 className='store-subheading'>Cost</h2>
              <input type="checkbox" id="price1" name="price1" value="" checked={priceAbove1500} onChange={()=>setdata(prev=>({...prev,priceAbove1500:(prev.priceAbove1500+1)%2}))} />
              <label>Rs 1500-4000</label>
              <br />
              <input type="checkbox" id="price2" name="price2" value="" checked={priceAbove4000} onChange={()=>setdata(prev=>({...prev,priceAbove4000:(prev.priceAbove4000+1)%2}))}/>
              <label>Rs 4001-7000</label>
              <br />
              <input type="checkbox" id="price3" name="price3" value="" checked={priceAbove7000} onChange={()=>setdata(prev=>({...prev,priceAbove7000:(prev.priceAbove7000+1)%2}))}/>
              <label>Rs 7000+</label>
              
              <h2 className='store-subheading'>Colour</h2>
              <button className='color-btn color-btn-1' name="blue" onClick={()=>setdata(prev=>({...prev,blueColor:(prev.blueColor+1)%2}))}>.{blueColor?<img src="/img/checkmark.png" />:<></> }</button>
              <button className='color-btn color-btn-2' name="red"  onClick={()=>setdata(prev=>({...prev,redColor:(prev.redColor+1)%2}))}>.{redColor?<img src="/img/checkmark.png" />:<></> }</button>
              <button className='color-btn color-btn-3' name="white" onClick={()=>setdata(prev=>({...prev,whiteColor:(prev.whiteColor+1)%2}))}>.{whiteColor?<img src="/img/checkmark.png" />:<></> }</button>
              <button className='color-btn color-btn-4' name="green" onClick={()=>setdata(prev=>({...prev,greenColor:(prev.greenColor+1)%2}))}>.{greenColor?<img src="/img/checkmark.png" />:<></> }</button>
              <button className='color-btn color-btn-5' name="black" onClick={()=>setdata(prev=>({...prev,blackColor:(prev.blackColor+1)%2}))}>.{blackColor?<img src="/img/checkmark.png" />:<></> }</button>
              
              <h2 className='store-subheading'>Design Templates</h2>
              <input type="checkbox" />
              <label >2</label>
              <br/>
              <input type="checkbox" />
              <label >3</label>
              <br/>
              <input type="checkbox" />
              <label >3+</label>
              

              <h2 className='store-subheading'>Type</h2>
              <input type="checkbox" />
              <label >Loafers</label>
              <br/>
              <input type="checkbox" />
              <label >Sneakers</label>
              
              <div className='block-footer'>
               <button className='store-btn' onClick={()=>setdata(prev=>({...prev,blueColor:0,redColor:0,whiteColor:0,greenColor:0,blackColor:0,priceAbove1500:0,priceAbove4000:0,priceAbove7000:0}))}> Clear Filter </button>
              </div>
        </div>
    </>
  )
}

export default Filter