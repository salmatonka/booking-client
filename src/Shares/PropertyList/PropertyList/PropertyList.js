import React from 'react';
import './PropertyList.css';
const PropertyList = () => {
    return (
        <div className='pList'>
            <div className="pListItem">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>apartments</h1>
                <h2>233 hotels</h2>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
               </div>
            </div>
            <div className="pListItem">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className='pListImg'/>
               <div className="pListTitle">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
               </div>
            </div>
        </div>
    );
};

export default PropertyList;