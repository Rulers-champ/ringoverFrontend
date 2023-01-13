import React ,{useState,useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useProducts } from '../Context'
import axios from 'axios'

import '../styling/Login.css'

export default function Register() {

  const {data,setdata}=useProducts()  
  const [info,setinfo] = useState({name:"",email:"",password:"",cpassword:""})
  //console.log(info)
  const [errorMsg,seterrorMsg]=useState('')
  

  let history=useNavigate()
  let location = useLocation()
  const redirect =location.search ? location.search.split('=')[1]:'/'
  console.log(redirect)







  const handleChange=(e)=>{
    const {name,value}=e.target

    setinfo(prev=>{
      return {...prev,[name]:value}
    })
  }

 
 
  const submitHandler=async()=>{

    const {name,email,password,cpassword}=info

    if (password!=cpassword)
    {
        seterrorMsg('Password fo not match')
        return
    }
 
    try{
        const res=await axios.post('http://localhost:5000/user/register',{
            name,
            email,
            password
        })

        const {success,message}=res.data

        if (success)
        {
            setdata(prev=>({...prev,userLoggedIn:message}))
            history('/')
        }
        else
        {
            seterrorMsg(message)
        }
        
    }
    catch(error)
    {
        console.log(error)
    }
     
     

  }



  return (
    
      <div className='login-wrapper' >
        
        <div className='login-container'>
          <div className='login-form' style={{marginTop:"100px"}}>
              <h2>Register </h2>
              
              
              {errorMsg.length!=0 && <span>{errorMsg}</span>}
             

              <div className='login-input-box'>
                <label>Name</label>
                <br/>
                <input type="text" name="name" placeholder='Enter Your Name' onChange={handleChange}/>
              </div>
              
              <div className='login-input-box'>
                <label>Email</label>
                <br/>
                <input type="email" name="email" placeholder='Enter Your Email' onChange={handleChange}/>
              </div>

              <div className='login-input-box'>
                <label>Password</label>
                <br/>
                <input type="text" name="password" placeholder='Enter Your Password' onChange={handleChange}/>
              </div>

              <div className='login-input-box'>
                <label>ConfirmPassword</label>
                <br/>
                <input type="text" name="cpassword" placeholder='Confirm Password' onChange={handleChange}/>
              </div>

             

              <button className='login-btn' onClick={submitHandler}>Register</button>
              
              
          </div>
        </div>
         

         <div className='login-sidewallpaper'>
          
         </div>


      </div>

    
  )
}
