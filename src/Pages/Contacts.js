import React from 'react';
import '../styling/Contacts.css';

function Contact()
{
    return <div className='contact-container'>
         
         <div className='contact-card'>
             <h2>REACH US AT</h2>
             

             <h3>support@kicksup.com</h3>
             <h5>for any technical support</h5>

             <h3>info@kicksup.com</h3>
             <h5>for more information</h5>

             <h3>feedback@kicksup.com</h3>
             <h5>to send your feedback</h5>

             <h3>jobs@kicksup.com</h3>
             <h5>to work with us</h5>

         </div>

         <footer>
             <h4>Stay In Touch</h4>
             <div className='footer-social'>
                 <a href="#"><img className='social-img' src='/img/linkedin.png' /></a>
                 <a href="#"><img className='social-img' src='/img/insta@3x.png' /></a>
                 <a href="#"><img className='social-img' src='/img/facebook@3x.png' /></a>
             </div>
         </footer>

    </div>;
}


export default Contact;