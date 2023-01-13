import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useProducts } from '../Context';
import '../styling/Header.css';

function Header()
{
    const {data,setdata}=useProducts()
    const [user,setUser]=useState(data.userLoggedIn)
    let history=useNavigate()

    useEffect(()=>{
        setUser(data.userLoggedIn)
    
    },[data.userLoggedIn])


    const handleSignOut=()=>{
        setdata(prev=>({...prev,userLoggedIn:''}))
    }


    console.log("user "+user)
    
    return <div className='navbar'>

            <img className='main-logo-img' src="/img/websitelogo.png" />

            <div>
                <ul className='navbar-link' >
                    <Link to="/"><li>HOME</li></Link> 
                    <Link to="/journey"><li>THE JOURNEY</li></Link>
                    <Link to="/team"> <li>TEAM</li></Link>
                    <Link to="/store"><li>STORE</li></Link>
                    <Link to="/contacts"> <li>CONTACT</li></Link>                      
                    
                   
                    
                   
                </ul>
                
            </div>

            <div>
               { user.length==0?
                   <button class='signin-btn' onClick={()=>{history('/login')}}>Sign In</button>
                   :
                   <ul className='profile-link'>
                    <li><img  className='logo-img' src="/img/profile-user.png" /></li>
                    <li>{user}</li>
                    <button onClick={handleSignOut} className='signout-btn' style={{marginLeft:"50px"}}>Sign Out</button>
                   </ul>
               }
                
            </div>
             
           </div>;

}

export default Header;