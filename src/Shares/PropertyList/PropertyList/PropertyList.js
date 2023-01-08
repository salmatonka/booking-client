import React from 'react';
import './PropertyList.css';
import { AiFillStar } from 'react-icons/ai';
const PropertyList = () => {
    return (
        <div className='pList pb-20'>
            {/* <div className="pListItem">
               <img src="https://images.trvl-media.com/hotels/19000000/18250000/18241200/18241118/b150df65_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Nagar Valley Hotel</h1>
               
                <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
               
                <p>6.6/10 (39reviews)</p>
               
               </div>
            </div> */}
            <div className="pListItem">
               <img src="https://images.trvl-media.com/hotels/1000000/10000/500/476/5fbe63b2_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Pan Pacific Sonargaon Dhaka</h1>
                <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p>8/10 (286 reviews)</p>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://images.trvl-media.com/hotels/1000000/20000/18900/18818/ef83f40a_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>InterContinental Dhaka,an IHG Hotel</h1>
                <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p>9.8/10 (62 reviews)</p>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://images.trvl-media.com/hotels/48000000/47020000/47016600/47016536/df0e3f9c_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Holiday Inn Dhaka City Centre,an IHG Hotel</h1>
                <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p>8.4/10 (16 reviews)</p>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://images.trvl-media.com/hotels/11000000/10450000/10440100/10440069/85efd589_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Le Meridien Dhaka</h1>
                <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p>8.6/10 (96 reviews)</p>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://images.trvl-media.com/hotels/2000000/1460000/1450300/1450238/4621fa77_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Radisson Blu Dhaka Water Garden</h1>
                <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p>7.4/10 (130 reviews)</p>
               </div>
            </div>
        </div>
    );
};

export default PropertyList;