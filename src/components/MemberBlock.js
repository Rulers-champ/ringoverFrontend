import React from 'react';
import '../styling/MemberBlock.css';


function MemberBlock(props)
{
    return <div className='member-block'>
         <img className='member-block-img' src={props.src} />
         <h3>{props.name}</h3>
         <h5>{props.role}</h5>
         
         <div className='footer-social'>
            <a href="#"><img className='social-img' src="/img/linkedin.png" /></a>
            <a href="#"><img className='social-img' src="/img/medium.png" /></a>
            <a href="#"><img className='social-img' src="/img/facebook.png" /></a>
         
        </div>
        
        
    </div>;
}

export default MemberBlock;