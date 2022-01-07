import React from "react";
import './Services.css'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import one from '../../../images/one.jpg';
import two from '../../../images/two.jpg';
import three from '../../../images/three.jpg';
import four from '../../../images/four.jpg';
import five from '../../../images/five.jpg';
import six from '../../../images/six.jpg';
import Service from "../Service/Service";



const servicesInfo = [
    {   
        id: 1,
        title: "BASICS OF SALES MANAGEMENT",
        image: one,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'


    },
    {
        id: 2,
        title: "BASICS OF SALES MANAGEMENT",
        image: two,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {
        id: 3,
        title: "BASICS OF SALES MANAGEMENT",
        image: three,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {
        id: 4,
        title: "BASICS OF SALES MANAGEMENT",
        image: four,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {   
        id: 5,
        title: "BASICS OF SALES MANAGEMENT",
        image: five,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'

    },
    {
        id: 6,
        title: "BASICS OF SALES MANAGEMENT",
        image: six,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'
    },
    {
        id: 7,
        title: "BASICS OF SALES MANAGEMENT",
        image: six,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'
    },
    {
        id: 8,
        title: "BASICS OF SALES MANAGEMENT",
        image: six,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'
    },
    {
        id: 9,
        title: "BASICS OF SALES MANAGEMENT",
        image: six,
        topic: 'Marketing & Communication',
        format: 'Multimedia & Interactive',
        language: 'English',
        description: 'This interactive tutorial introduces the student to the world of business management. The tutorial is divided into 4 sections: trade, trading activity, the complex sale and the personal sale process, where the student is introduced to the basic concepts of the commercial world up to how to put the seller ́s activity into'
    },
]

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-body">
        <div className="checkbox">
            <h2 style={{borderBottom:'1px solid gray', color: '#583bab'}}>Refine Your Search</h2>
            
            <label className="container">
                <input type="checkbox" checked="checked" />
                ECONOMIC ENVIRONMENT & PUBLIC AFFAIRS
            </label> <br />
            <label className="container">
                <input type="checkbox" />
                STRATEGY
            </label> <br />
            <label className="container"> <input type="checkbox" />
                ENTREPRENEURSHIP
            </label>  <br />
            <label className="container">
                <input type="checkbox" />
                DIGITAL TECHNOLOGIES & DATA SCIENCE
            </label> <br />
            <label className="container">
                <input type="checkbox" />
                MARKETING & COMMUNICATIONS
            </label> <br />
            <label className="container">
                <input type="checkbox" />
                FINANCE
            </label> <br />
            <label className="container">
                <input type="checkbox" />
                HUMAN RESOURCES
            </label> <br />
            <label className="container">
                <input type="checkbox" />
                ECONOMIC ENVIRONMENT & PUBLIC AFFAIRS
            </label> <br />
            <label className="container">
                <input type="checkbox" />
                STRATEGY
            </label> <br />
            <label className="container">
                <input type="checkbox" />
                ENTREPRENEURSHIP
            </label> <br />
            <label className="container">
                <input type="checkbox"/>
                DIGITAL TECHNOLOGIES & DATA SCIENCE
            </label> <br />
            <label className="container">
                <input type="checkbox"/>
                MARKETING & COMMUNICATIONS
            </label> <br />
            <label className="container">
                <input type="checkbox"/>
                FINANCE
            </label> <br />
            <label className="container">
                <input type="checkbox"/>
                HUMAN RESOURCES
            </label> <br />
            <label className="container">
                <input type="checkbox"/>
                FINANCE
            </label> <br />
            <label className="container">
                <input type="checkbox"/>
                HUMAN RESOURCES
            </label>
            
        </div>
        <div>
            <div className="service-search">
                <input type="text" placeholder="Search" />
                <button><strong>Search</strong></button>
            </div>
            <div className="service-cards">
                {
                    servicesInfo.map(serviceInfo=> <Service serviceInfo={serviceInfo} key={servicesInfo.id}></Service>)
                }
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
