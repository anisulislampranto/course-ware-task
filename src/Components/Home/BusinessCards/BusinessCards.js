import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import './BusinessCards.css';
import one from '../../../images/one.jpg';
import two from '../../../images/two.jpg';
import three from '../../../images/three.jpg';
import four from '../../../images/four.jpg';
import five from '../../../images/five.jpg';
import six from '../../../images/six.jpg'



const cardsInfo = [
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: one,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English'

    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: two,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English'
    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: three,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English'
    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: four,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English'
    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: five,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English'
    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: six,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English'
    },
]

const BusinessCards = () => {
    return (
        <>
        <h2 style={{marginLeft: '100px', marginTop: '50px', color: '#583bab'}}>BUSINESS CASES AND SIMULATIONSVIEW</h2>
        <div className='info-cards'>
            {
                cardsInfo.map(cardInfo => <BusinessCard cardInfo={cardInfo}></BusinessCard>)
            }
        </div>
        <button className='see-more-btn'> <strong>See More</strong></button>
        </>
    );
};

export default BusinessCards;