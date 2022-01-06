import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './ServiceDetails.css';
import author from '../../../images/author.jpeg'

const ServiceDetails = () => {
    return (
        <div>
            <Navbar/>
            <div className='course-details'>
                <div className='course-info'>
                    <h1 style={{marginLeft:'4%'}}>Business Decision Making</h1>
                    <div className='option-btn'>
                        <button>Save</button>
                        <button>Share</button>
                    </div>
                    <div className='course-info-containers'>
                        <div className='course-info-container'>
                            <p>IE CODE:</p>
                            <h4>DF2-264-I</h4>
                        </div>
                        <div className='course-info-container'>
                            <p>LANGUAGE:</p>
                            <h4>English</h4>
                        </div>
                        <div className='course-info-container'>
                            <p>FORMAT</p>
                            <h4>PDF</h4>
                        </div>
                        <div className='course-info-container'>
                            <p>ACADEMIC AREA:</p>
                            <h4>Finance</h4>
                        </div>
                        <div className='course-info-container'>
                            <p>NR. OF PAGES:</p>
                            <h4>20</h4>
                        </div>
                        <div className='course-info-container'>
                            <p>TYPE OF PUBLICATION:</p>
                            <h4>Case Study</h4>
                        </div>
                    </div>
                    <button className='go-to-course-btn'>Go to Course</button>
                    <div className='course-description'>
                        <p>DESCRIPTION</p>
                        <p>This technical note explains what a financial restructuring of a company involves, differentiating it from other types of transactions which share similarities, such as operational restructurings or debt refinancings. It also explains the main financial tools generally used in financial restructuring deals, their advantages and main implementation principles.</p> 
                        <p> At the end of the note, the author includes a practical example of financial restructuring in a food processing company.</p>
                    </div>
                    <div className='article-preview-card'>
                        <img src="" alt="" />
                        <div>
                            <p><strong>Educator Copy</strong></p>
                            <p>Access a full preview copy of the article.</p>
                        </div>
                    </div>
                </div>

                <div className='author-and-price'>
                    <h2 className='price-card'><small>Price Per Unit:</small> <span style={{color:'goldenrod'}}>$5.00</span></h2>
                    <button className='buy-now-btn'>Buy Now</button>
                    <div className='author-info'>
                        <h4>THE AUTHORS</h4>
                        <img src={author} alt="" />
                        <h3>DANIEL PAREDERO <br /> DEL BOSQUE</h3>
                        <p>ACADEMIC AREA:</p>
                        <p><strong>Finance</strong></p>
                        <button>Read More</button>
                    </div>
                    <div className='additional-info-card'>
                        <h4 style={{textAlign:'center', borderBottom: '1px solid gainsboro', paddingBottom: '10px'}}>ADDITIONAL INFO</h4>
                        <p><small><strong>LAST UPDATED:</strong></small></p>
                        <p style={{borderBottom:'1px solid gainsboro', paddingBottom: '10px'}}>February 5, 2021</p>
                        <p><small><strong>PUBLISH DATE:</strong></small></p>
                        <p style={{borderBottom:'1px solid gainsboro', paddingBottom: '10px'}}>February 5, 2021</p>
                        <p><small><strong>SUBJECTS COVERED:</strong></small></p>
                        <p><small>Financial restructuring; restructuring; refinancing; debt for equity swap; debt capitalisation; debt for asset swap; deleverage; sustainable debt; amend and extend; amend and pretend; PIK interest; PIYC interest; profit sharing agreement; profit participa</small></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ServiceDetails;