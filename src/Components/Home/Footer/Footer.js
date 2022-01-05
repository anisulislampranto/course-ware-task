import React from 'react';
import './Footer.css';
import logoFooter from '../../../images/logoFooter.png';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div>
                <img src={logoFooter} alt="" />
                <p style={{color: 'white'}}>Calibrax is Somethig . . .</p>
            </div>
            <div style={{color: 'white'}}>
                <p><strong>Course info</strong></p>
                <p>Course: GlobalChallenge TEST</p>
                <p>Universe & Code: Universe 1, c_l2e9xMWt</p>
                <p>Instructor: Calibratex Instructor</p>
            </div>
            <div style={{color: 'white'}}>
                <p><strong>Support and reading</strong></p>
                <p>Decision-making guide</p>
                <p>Case description</p>
                <p>Support</p>
            </div>
        </div>
    );
};

export default Footer;