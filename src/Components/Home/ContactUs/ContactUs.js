import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-card'>
            <h1>To Know more <br /> about CalibraX. <br /> Contact Us.</h1>
            <div>
                <input type="text" placeholder='example@gmail.com'/>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;