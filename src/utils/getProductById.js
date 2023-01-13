import axios from 'axios'

export const getProductById=async(id)=>{
    
    try{
        const {product}=await axios.get(`http://localhost:5000/products/${id}`)

        if (product)
        return product 
        
    }
    catch(error)
    {
        console.log(error)
    }
   

    return {}
}