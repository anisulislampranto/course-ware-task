import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import laptop from '../../../images/laptop.png';

const Service = (props) => {
    const {title, image, topic, format, language} = props.serviceInfo;
    return (
        <Link to={'/serviceDetails'} className='info-card'>
            <img src={image} alt="" />
            <h2 className='card-title'>{title}</h2>
            <h2 className="description"><strong>Description:</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione reprehenderit sint amet autem rerum blanditiis.</h2>
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
        </Link>
    );
};

export default Service;