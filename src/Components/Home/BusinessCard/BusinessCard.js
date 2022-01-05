import React from 'react';
import './BusinessCard.css';
import laptop from '../../../images/laptop.png'

const BusinessCard = (props) => {
    const {title, image, topic, format, language} = props.cardInfo
    return (
        <div className='info-card'>
            <img src={image} alt="" />
            <h2 className='card-title'>{title}</h2>
            <p><strong>{topic}</strong></p>
            <div className='card-info'>
                <img src={laptop} alt="" />
                <div style={{ textAlign: 'left'}}>
                    <ul className='card-footer'>
                        <li>Language: <strong>{language}</strong></li>
                        <li>Format: <strong>{format}</strong> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;