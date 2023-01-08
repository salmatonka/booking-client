import React from 'react';
import './Instant.css';
import {Link} from 'react-router-dom';
const Instant = () => {
    return (
      <div>
      <h1 className='homeTitle'>instant</h1>
      <p className='text-xl pb-10 pt-4'>Promotions, deals and special offers for you</p>
       <div className='instant'>
          <div className="instantItem">
            <img src="https://mediaim.expedia.com/destination/1/75a9818bbf91e1b3d53cbace6a17a264.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh" alt="" />
              <div className="instantTitles">
               <h3>Get instant discounts</h3>
               <p  className='pb-4 '>Simply sign into your Booking.com account and look for the blue Genius logo to save</p>
               <Link to='/' className='pr-4 text-gray-50'><button>Register</button></Link>
               <Link to='/'  className=' text-gray-50'><button>Login</button></Link>
              </div>
          </div>  
        </div>
       
   </div>
    );
};

export default Instant;