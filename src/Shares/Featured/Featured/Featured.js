import React from 'react';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured'>
           <div className="featuredItem">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
              <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
              </div>
            </div>  
           <div className="featuredItem">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
              <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>523 properties</h2>
              </div>
            </div>  
           <div className="featuredItem">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
              <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
              </div>
            </div>  
             
        </div>
    );
};

export default Featured;