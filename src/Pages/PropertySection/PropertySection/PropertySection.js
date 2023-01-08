import React from 'react';
import Benefits from '../../../Shares/Benefits/Benefits/Benefits';
import Booking from '../../../Shares/Booking/Booking/Booking';
import Describes from '../../../Shares/Describes/Describes/Describes';
import Footer from '../../../Shares/Footer/Footer/Footer';
import Navber from '../../../Shares/Navber/Navber/Navber';
import PropertyBanner from '../../../Shares/PropertyBanner/PropertyBanner/PropertyBanner';
import PropertyGuest from '../../../Shares/PropertyGuest/PropertyGuest/PropertyGuest';
import PropertyMind from '../../../Shares/PropertyMind/PropertyMind/PropertyMind';
import Group from '../../../Shares/Group/Group/Group';
import MailList from '../../../Shares/MailList/MailList/MailList';
const PropertySection = () => {
    return (
        <div className=''>
            <Navber />
              <PropertyBanner />
              <PropertyGuest />
              <Group />
              {/* <PropertyMind /> */}
              <Benefits />
              <Describes /> 
             <Booking />
              <MailList />  
            <Footer />
        </div>
    );
};

export default PropertySection;