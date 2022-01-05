import React from 'react';
import BusinessCards from '../BusinessCards/BusinessCards';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <HeaderBody/>
            <BusinessCards/>
        </div>
    );
};

export default Header;