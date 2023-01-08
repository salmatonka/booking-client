import React from 'react';
import './Navber.css';
import {Link} from 'react-router-dom'
const Navber = () => {
    return (
        <div className='navber'>
           <div className='navContainer'>
             <span className='logo'>ST Booking.Com</span>
              <div className='navItems'>
                <Link to='/register'><button className='navButton'>Register</button></Link>
                <Link to='/logIn'><button className='navButton'>LogIn</button></Link>
              </div>
           </div>
        </div>
    );
};

export default Navber;