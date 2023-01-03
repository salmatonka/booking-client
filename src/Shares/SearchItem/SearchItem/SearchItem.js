import React from 'react';
import './SearchItem.css';
const SearchItem = () => {
    return (
       <div className="searchItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className='siImg'/>
                <div className="siDesc">
                    <h1 className="siTitle">Towe Street Apartments</h1>
                    <span className="siDistance">500m from center</span>
                    <span className="siTaxOp">Free airport taxi</span>
                    <span className="siSubTitle">Studio Apartment with Air conditioning</span>
                    <span className="siFeatures">Entrire Studio * 1 bathRoom * 21m2 1 full bed</span>
                    <span className="siCancelOp">Free cancellation</span>
                    <span className="siCancelOpSubTitle">You can cancel late, so lock in this great price today!</span>
                </div>
                <div className="siDetails">
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="siDetailTexts">
                        <span className="siPrice">$123</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <button className='siCheckButton'>See availability</button>
                    </div>
                </div>
            </div>
    )
};

export default SearchItem;