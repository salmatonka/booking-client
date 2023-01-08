import React from 'react';
import './PropertyBanner.css';
const PropertyBanner = () => {
    return (
        <div className="proBanner py-20 px-40">
		    
			 <h1 className="text-5xl font-bold ">Lists
              <br />
				<span className="dark:text-violet-400">
                anything</span> on Booking.com
			 </h1>
			 <p className="mt-6 mb-8 text-lg sm:mb-12">

                Registration is free and can take as little as 15 minutes to 
				<br className="hidden md:inline lg:hidden"/> complete – get started today
			 </p>
			</div>   
       
    );
};

export default PropertyBanner;