import React from 'react';
import { Link } from 'react-router-dom';
import './SearchItem.css';
const SearchItem = ({booking}) => {
    const {_id,title,img,distance,subTitle,features,taxOp,tax,rating,price} = booking;
    return (
       <div className="searchItem">
        
                <img src={img} alt="" className='siImg'/>
                <div className="siDesc">
                    <h1 className="siTitle">{title}</h1>
                    <span className="siDistance">{distance}</span>
                    <span className="siTaxOp">{taxOp}</span>
                    <span className="siSubTitle">{subTitle}</span>
                    <span className="siFeatures">{features}</span>
                    <span className="siCancelOp">Free cancellation</span>
                    <span className="siCancelOpSubTitle">You can cancel late, so lock in this great price today!</span>
                </div>
                <div className="siDetails">
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>{rating}</button>
                    </div>
                    <div className="siDetailTexts">
                        <span className="siPrice">${price}</span>
                        <span className="siTaxOp">{tax}</span>
                       <Link to={`/hotels/${_id}`}> <button className='siCheckButton'>See availability</button></Link>
                    </div>
                </div>
            </div>
    )
};

export default SearchItem;