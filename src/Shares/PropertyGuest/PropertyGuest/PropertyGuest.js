import React from 'react';
import './PropertyGuest.css';
const PropertyGuest = () => {
    return (
        <div className='px-40 py-20'>
        <div className='proGuest'>
        <h1>Bring the right guests within reach</h1>
        <p>Connect with millions of people whose purpose, taste and budget make your property the <br /> perfect place to stay.</p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 '>
          <div>
                <div className="w-24 rounded py-4">
                  <img src="https://cdn.icon-icons.com/icons2/1866/PNG/512/airplaneshape_119680.png" alt=''/>
                </div>
                  <h2 className='proGuestTitle'>Access a world of travelers</h2>
                  <p>From long-range planners to last-minute bookers, bring travelers to your door from around the world.</p>
           </div>
           <div>
                <div className="w-24 rounded py-4">
                  <img src="https://img.favpng.com/1/2/20/family-father-icon-png-favpng-GDNbfFT8Q8xnVzBtmUD9SNpuk.jpg" alt=''/>
                </div>
                 <h2 className='proGuestTitle'>Attract your ideal guests</h2>
                 <p>Book your ideal guests—travelers who delight in what you provide and want to return again and again.</p>
            </div>
            <div>
                <div className="w-24 rounded py-4">
                  <img src="https://cdn.imgbin.com/14/24/18/process-icon-hand-feature-icon-settings-icon-JasSYdgi.jpg" alt=''/>
                </div>
                  <h2 className='proGuestTitle'>Grow your business</h2>
                  <p>Make decisions based on real-time data, be more competitive & help increase visibility and bookings.</p>
                </div>
            </div>
     </div>
    );
};

export default PropertyGuest;