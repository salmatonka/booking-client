import React from 'react';
import './WorldBanner.css';
const WorldBanner = () => {
    return (
        <div className='world'>
            <h1 className='homeTitle pt-6'>Get inspiration for your next trip</h1>
			<p className='text-xl py-4'>Pan Pacific Sonargaon Dhaka</p>
            <div>
			<div className=" dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 md:grid-cols-4">
		<img src="https://images.trvl-media.com/lodging/1000000/10000/500/476/446f0859.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.trvl-media.com/lodging/1000000/10000/500/476/00575940.jpg?impolicy=resizecrop&rw=1200&ra=fit" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.trvl-media.com/lodging/1000000/10000/500/476/6966c6f9.jpg?impolicy=resizecrop&rw=1200&ra=fit" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.trvl-media.com/lodging/1000000/10000/500/476/74ea0be8.jpg?impolicy=resizecrop&rw=1200&ra=fit" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.trvl-media.com/lodging/1000000/10000/500/476/9f2efbce.jpg?impolicy=resizecrop&rw=1200&ra=fit" />
		
	</div>
</div>
            </div>
        </div>
    );
};

export default WorldBanner;