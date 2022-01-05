import React from 'react';
import './ClientsLogo.css';
import footerLogo1 from '../../../images/logofooter1.png';
import footerLogo2 from '../../../images/logofooter2.png';
import footerLogo3 from '../../../images/logofooter3.png';
import footerLogo4 from '../../../images/logofooter4.png';
import footerLogo5 from '../../../images/logofooter5.png';
import footerLogo6 from '../../../images/logofooter6.png';

const ClientsLogo = () => {
    return (
    <div className='clients-logos'>
        <img src={footerLogo1} alt="" />
        <img src={footerLogo2} alt="" />
        <img src={footerLogo3} alt="" />
        <img src={footerLogo4} alt="" />
        <img src={footerLogo5} alt="" />
        <img src={footerLogo6} alt="" />
    </div>
    );
};

export default ClientsLogo;