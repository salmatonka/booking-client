import React from 'react';
import './Booking.css';
const Booking = () => {
    return (
        <div className='py-20 px-40'>
            <h3 className='text-2xl font-bold pb-20 text-center'>Booking.com in numbers</h3>
            <div className='booking'>
                <div className='bookingItem'>
                    <h3>28M+</h3>
                    <p>Listings in 226 countries and territories across the globe</p>
                </div>
                <div className='bookingItem'>
                    <h3>6.2M+</h3>
                    <p>Homes, apartments, and other unique places to stay</p>
                </div>
                <div className='bookingItem'>
                    <h3>43+</h3>
                    <p>Languages and dialects available on our site</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;