import React from 'react';
import HeroImg from '../assets/img/photo_2021-09-30_09-30-35.jpg'
import PText from "./PText";
import Button from "./Button";

function HeroSection(props) {
    return (
        <div>
            <div className='container'></div>
            <h1 className="hero__heading"></h1>
            <span>Hello! This is </span>
            <span>Lena Mesyachik</span>
            <div className="hero_img"></div>
            <img src={HeroImg} alt=''/>
            <PText text = {' I am working as a freelance front-end developer.'}/>
            <Button btnLink={'/projects'} btnText={ 'see my works'}/>
        </div>
    );
}

export default HeroSection;