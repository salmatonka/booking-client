import React from 'react';
import './Describes.css';
const Describes = () => {
    return (
        <div className='px-40 py-20'>
            
            <h1 className='text-2xl text-center font-bold pb-4'>Which best describes you?</h1>
            <p className='text-xl text-center pb-10'>Select one of the options to see customised information</p>
            
            <div className='describes'>
                <div className='describeItem'>
                    <h4 className='py-6'>I have a property that I rent out occasionally</h4>
                    <p>This property is where I keep my personal belongings</p>
                    <p>I have limited experience working in the hospitality industry</p>
                    <button className='py-6 my-4'>Learn More</button>
                </div>
                <div className='describeItem'>
                    <h4 className='py-6'>I have multiple properties that I rent out year-round</h4>
                    <p>These properties are primarily used for guests</p>
                    <p>I have experience working in the hospitality industry</p>
                    <button className='py-6 my-4'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Describes;