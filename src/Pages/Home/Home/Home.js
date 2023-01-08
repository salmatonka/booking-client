import React from 'react';
import Featured from '../../../Shares/Featured/Featured/Featured';
import FeaturedProperties from '../../../Shares/FeaturedProperties/FeaturedProperties/FeaturedProperties';
import Footer from '../../../Shares/Footer/Footer/Footer';
import Header from '../../../Shares/Header/Header/Header';
import Instant from '../../../Shares/Instant/Instant/Instant';
import MailList from '../../../Shares/MailList/MailList/MailList';
import Navber from '../../../Shares/Navber/Navber/Navber';
import Offer from '../../../Shares/Offer/Offer/Offer';
import PropertyList from '../../../Shares/PropertyList/PropertyList/PropertyList';
import Quick from '../../../Shares/Quick/Quick/Quick';
import WorldBanner from '../../../Shares/WorldBanner/WorldBanner/WorldBanner';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Navber />
           <Header />
           <div className="homeContainer">
             <Offer />
             <WorldBanner />
             <h1 className="homeTitle">Top cities in Bangladesh</h1>
             <Featured />
              <h1 className='homeTitle'>Top hotels in Dhaka</h1>
             
             <PropertyList />
              <h1 className='homeTitle'>Top hotels in Cox's Bazar</h1>
             <FeaturedProperties />
             <Quick />
             <Instant />
             <MailList />
             <Footer />
           </div>
        </div>
    );
};

export default Home;