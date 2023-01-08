import React from 'react';
import './FeaturedProperties.css';
import { AiFillStar  } from 'react-icons/ai';
const FeaturedProperties = () => {
    return (
        <div className='fp pb-20'>
           
           <div className="fpItem">
              <img src="https://images.trvl-media.com/hotels/77000000/76790000/76783700/76783682/2cbcdd3c_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='fpImg'/>
              <span className="fpName">Grand Sylhet Hotel & Resort</span>
              <span className="fpCity">Madrid</span>
              <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              <span className="fpName">Starting from $120</span>
             <div className="fpRating">
               <button>8.9</button>
               <span>Excellent</span>
             </div>
           </div>
           <div className="fpItem">
              <img src="https://images.trvl-media.com/hotels/61000000/60610000/60601500/60601472/8003487e_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='fpImg'/>
              <span className="fpName">Grand Palace Hotel & Resort Sylhet</span>
              <span className="fpCity">Madrid</span>
              <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              <span className="fpName">Starting from $120</span>
             <div className="fpRating">
               <button>8.7</button>
              <span>Excellent</span>
             </div>
           </div>
           <div className="fpItem">
              <img src="https://images.trvl-media.com/hotels/18000000/17350000/17349200/17349184/4e87de5c_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='fpImg'/>
              <span className="fpName">Hotel Noorjahan Grand</span>
              <span className="fpCity">Madrid</span>
              <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              <span className="fpName">Starting from $120</span>
               <div className="fpRating">
                 <button>8.8</button>
                 <span>Excellent</span>
               </div>
           </div>
           <div className="fpItem">
              <img src="https://images.trvl-media.com/hotels/12000000/11570000/11568100/11568068/3c82581c_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='fpImg'/>
              <span className="fpName">Rose View Hotel</span>
              <span className="fpCity">Madrid</span>
              <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              <span className="fpName">Starting from $120</span>
               <div className="fpRating">
                 <button>5.8</button>
                 <span>Excellent</span>
               </div>
           </div>
           <div className="fpItem">
              <img src="https://images.trvl-media.com/hotels/38000000/37610000/37608600/37608582/3755ac3c_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='fpImg'/>
              <span className="fpName">Excelsior Sylhet Hotel & Resort</span>
              <span className="fpCity">Madrid</span>
              <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              <span className="fpName">Starting from $120</span>
               <div className="fpRating">
                 <button>2.9</button>
                 <span>Excellent</span>
               </div>
           </div>
    
           
        </div>
    );
};

export default FeaturedProperties;