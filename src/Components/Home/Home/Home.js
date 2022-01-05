import React from 'react';
import BusinessCards from '../BusinessCards/BusinessCards';
import ClientsLogo from '../ClientsLogo/ClientsLogo';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import GameZone from '../GameZone/GameZone';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessCards/>
            <GameZone/>
            <ContactUs/>
            <ClientsLogo/>
            <Footer/>
        </div>
    );
};

export default Home;