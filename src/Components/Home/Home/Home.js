import React from 'react';
import BusinessCards from '../BusinessCards/BusinessCards';
import ContactUs from '../ContactUs/ContactUs';
import GameZone from '../GameZone/GameZone';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessCards/>
            <GameZone/>
            <ContactUs/>
        </div>
    );
};

export default Home;