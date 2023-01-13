import React from 'react';
import './Guest.css';
const Guest = () => {
    return (
        <div className='guest '>
          <h1 className="guTitle ">Guest reviews</h1> 
           <div className='py-6'>
             <div>8.7</div>
             <div>Fabulous</div>
             <div>298 Reviews</div>
           </div>
           <div>
            <h2 className="guTitle pb-6">Categories</h2>
            <div className= 'skill-menu'>
                  <div className='skill-bar'>
                     <div className='info'>
                      <p>Staff</p>
                      <p className='percent'>80%</p>
                      </div>
                       <div className='bar'>
                        <span className='staff'></span>
                       </div>
                    </div>

                    <div className='skill-bar'>
                     <div className='info'>
                      <p>Facilities</p>
                      <p className='percent'>75%</p>
                      </div>
                       <div className='bar'>
                        <span className='facilities'></span>
                       </div>
                    </div>

                  <div className='skill-bar'>
                     <div className='info'>
                      <p>Cleanliness</p>
                      <p className='percent'>85%</p>
                      </div>
                       <div className='bar'>
                        <span className='cleanliness'></span>
                       </div>
                    </div>

                    <div className='skill-bar'>
                     <div className='info'>
                      <p>Comfort</p>
                      <p className='percent'>85%</p>
                      </div>
                       <div className='bar'>
                        <span className='comfort'></span>
                       </div>

                    </div>
                  <div className='skill-bar'>
                     <div className='info'>
                      <p>Value for money</p>
                      <p className='percent'>70%</p>
                      </div>
                       <div className='bar'>
                        <span className='value '></span>
                       </div>
                    </div>

                  <div className='skill-bar'>
                     <div className='info'>
                      <p>Free WiFi</p>
                      <p className='percent'>90%</p>
                      </div>
                       <div className='bar'>
                        <span className='free'></span>
                       </div>
                    </div>
              </div>
           </div>
        </div>
    );
};

export default Guest;