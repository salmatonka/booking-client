import React from 'react';
import Featured from '../../../Shares/Featured/Featured/Featured';
import FeaturedProperties from '../../../Shares/FeaturedProperties/FeaturedProperties/FeaturedProperties';
import Footer from '../../../Shares/Footer/Footer/Footer';
import Header from '../../../Shares/Header/Header/Header';
import MailList from '../../../Shares/MailList/MailList/MailList';
import Navber from '../../../Shares/Navber/Navber/Navber';
import PropertyList from '../../../Shares/PropertyList/PropertyList/PropertyList';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Navber />
           <Header />
           <div className="homeContainer">
            <Featured />
            <h1 className='homeTitle'>Browse by property type</h1>
            <PropertyList />
            <h1 className='homeTitle'>Homes guests love</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
           </div>
        </div>
    );
};

export default Home;