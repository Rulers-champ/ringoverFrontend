import React ,{useState,useEffect, useContext} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

import '../styling/Login.css'
import { useProducts } from '../Context'

export default function Login() {

  const {data,setdata}=useProducts()   
  const [info,setinfo] = useState({email:"",password:""})
  const [errorMsg,seterrorMsg]=useState(false)

  let history=useNavigate()
  let location = useLocation()
  const redirect ='/'
  console.log(redirect)

  const handleChange=(e)=>{
    const {name,value}=e.target

    setinfo(prev=>{
      return {...prev,[name]:value}
    })
  }

 
 
  const submitHandler=async()=>{
    
    try{
        const res=await axios.post('http://localhost:5000/user/login',{
           ...info
        })

        const {success,message}=res.data 
        console.log(success)
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
        seterrorMsg(error)
    }
   
    

    //console.log(errorMsg)
  }



  return (
    
      <div className='login-wrapper'>
        
        <div className='login-container'>
          <div className='login-form'>
              <h2>Welcome Back !</h2>

              {errorMsg.length!=0 && <span>{errorMsg}</span>}
              
              
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

              <button className='login-btn' onClick={submitHandler}>Sign in</button>
              
              <h6 className='register-link-text'>New Customer ?<Link to={`/register`}><span>Register</span></Link></h6>
          </div>
        </div>
         

         <div className='login-sidewallpaper'>
          
         </div>


      </div>

    
  )
}
