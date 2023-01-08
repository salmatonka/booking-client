import React from 'react';
import './Featured.css'
const Featured = () => {
    return (

        <div>
           {/* <h1 className="hTag">Top cities in Bangladesh</h1> */}
            <div className='featured'>
             <div className="featuredItem">
              <img src="https://mediaim.expedia.com/destination/1/75a9818bbf91e1b3d53cbace6a17a264.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh" alt="" />
              <div className="featuredTitles">
                <h1>Dhaka</h1>
                <p>Dhaka has lots of attraction such as Baridhara Park and Bangladesh Army Stadium.</p>
              </div>
            </div>  
           <div className="featuredItem">
              <img src="https://mediaim.expedia.com/destination/1/63efd72f00f0ae904144383f7aef5aae.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh" alt="" />
              <div className="featuredTitles">
                <h1>Sylhet</h1>
                <p>Sylhet has lots of attractions such as Shrine of Hazrat Shah Jalal and Shahi Eidgah.</p>
              </div>
            </div>  
           <div className="featuredItem">
              <img src="https://mediaim.expedia.com/destination/1/68dc4d3cdf5cf5ed486376ef85f4eba2.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh" alt="" />
              <div className="featuredTitles">
                <h1>Kamalganj</h1>
                <p>Kamalganj has a lot of attractions such as Lawachara National Park and tea Museum.</p>
              </div>
            </div>  
             
        </div>
        </div>
    );
};

export default Featured;