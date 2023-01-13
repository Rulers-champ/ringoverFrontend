import axios from 'axios'

export const calculateFilter=async(data)=>{
     
    const {redColor,blueColor,whiteColor,greenColor,blackColor,priceAbove1500,priceAbove4000,priceAbove7000}=data

    //console(data)

    try{
        const response= await axios.get(`http://localhost:5000/products?redColor=${redColor}&blueColor=${blueColor}&whiteColor=${whiteColor}&greenColor=${greenColor}&blackColor=${blackColor}&priceAbove1500=${priceAbove1500}&priceAbove4000=${priceAbove4000}&priceAbove7000=${priceAbove7000}`)
        
        console (response.data)
        return response.data;
    }
    catch (error)
    {
        return []
    }
     
}   