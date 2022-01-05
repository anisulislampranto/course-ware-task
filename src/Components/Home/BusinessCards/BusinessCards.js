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
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'


    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: two,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: three,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: four,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: five,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {
        title: "BASICS OF SALES MANAGEMENT",
        image: six,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'
    },
]

const BusinessCards = () => {
    return (
        <>
        <h2 className='business-cards-title' >BUSINESS CASES AND SIMULATIONS VIEW</h2>
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