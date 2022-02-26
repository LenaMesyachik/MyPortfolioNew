import React from 'react';
import HeroImg from '../assets/img/photo_2021-09-30_09-30-35.jpg'

function HeroSection(props) {
    return (
        <div>
            <div className='container'></div>
            <h1 className="hero__heading"></h1>
            <span>Hello! This is</span>
            <span>Lena Mesyachik</span>
            <div className="hero_img"></div>
            <img src={HeroImg} alt=''/>
        </div>
    );
}

export default HeroSection;