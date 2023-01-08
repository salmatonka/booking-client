import React from 'react';
import './Offer.css';
const Offer = () => {
    return (
     <div>
       <h1 className='homeTitle pb-6 pt-6'>Hotels.com makes it easy and rewarding. Always</h1>
      
      <div className='offer'>
          
           <div className="offerItem">
              <img src="https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg" alt="" />
              <div className="offerTitles">
                <h3>Reward yourself your way</h3>
                <p>You could get an extra 10% off with Member Prices</p>
                <button>Sign up, it's free </button>
              </div>
            </div>  
            
           <div className="offerItem">
              <img src="https://img.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg?w=2000" alt="" />
              <div className="offerTitles">
                <h3>Free cancellation</h3>
                <p>Flexible bookings on most hotels*</p>
                <button>Sign in</button>
              </div>
            </div>  
            
             
        </div>
     </div>
    );
};

export default Offer;