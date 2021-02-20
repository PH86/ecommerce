import React from 'react';
import './PageHeroSection.css';

function PageHeroSection(props) {
    return (
        <div>
            <div className='page-hero-container'>
            <img src={props.src} alt="hero Img" />
            <h1>{props.pageName}</h1>
    <p>{props.pageDesc}</p>
           
           
        </div>
        </div>
    );
}

export default PageHeroSection;
