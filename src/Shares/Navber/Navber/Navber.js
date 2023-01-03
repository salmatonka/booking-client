import React from 'react';
import './Navber.css';
const Navber = () => {
    return (
        <div className='navber'>
           <div className='navContainer'>
             <span className='logo'>SuperShop</span>
              <div className='navItems'>
                <button className='navButton'>Register</button>
                 <button className='navButton'>SignIn</button>
              </div>
           </div>
        </div>
    );
};

export default Navber;