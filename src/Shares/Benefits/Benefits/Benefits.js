import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    
    <div className='px-40 pb-20'>
        <div className='benefits '>
          <h2>Explore the benefits of working with us</h2>
          <p>For over 25 years, we’ve learned what travelers seek, what makes properties attractive, and how to <br/> bring the two together. Discover how this helps you</p>
        </div>
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-6'>
       
          <div className="benefitsTitles">
            <h3>Lodging</h3>
            <div className="w-24 rounded py-4">
           <img src="https://www.iconpacks.net/icons/1/free-building-icon-1062-thumb.png" alt=''/>
         </div>
            
            <p>Confidently fill your rooms so you can do more of what you love—creating wonderful guest experiences</p>
          </div>  
          
          <div className="benefitsTitles">
            <h3>Private residence</h3>
            <div className="w-24 rounded py-4">
             <img src="https://cdn.vectorstock.com/i/preview-1x/83/42/document-privacy-icon-simple-data-protect-vector-44278342.jpg" alt=''/>
           </div>
            <p>Rent your property your way. Set pricing, availability, rules, policies and more to fit your needs</p>
          </div>
        </div>
      </div>
   
   );
};

export default Benefits;