import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import AboutImg from '../assets/img/photo_2021-09-30_09-30-35.jpg';

import ContactBanner from '../components/ContactBanner';
import AboutInfoItem from "../components/AboutInfoItem";
import PText from "../components/PText";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .left {
    flex: 3;
  }

  .right {
    flex: 2;
  }

  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;

    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about__info {
    margin-bottom: 4rem;

    .para {
      max-width: 100%;
    }
  }

  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  .about__info__item {
    margin-bottom: 10rem;
  }

  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }

    .about__subheading {
      font-size: 1.8rem;
    }

    .about__heading {
      font-size: 2.8rem;
    }

    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <p className="about__subheading">
                                Hi, I am <span>Lena Mesyachik</span>
                            </p>
                            <h2 className="about__heading">A front-end developer</h2>
                            <div className="about__info">
                                <PText text='some text'/>
                                <PText text='some text'/>
                                <PText text='some text'/>
                            </div>
                            <Button btnText="Download CV" btnLink="#"/>
                        </div>
                        <div className="right">
                            <img src={AboutImg} alt="me"/>
                        </div>
                    </div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Education</h1>

                            <AboutInfoItem
                                title="School"
                                items={['middle school #122']}
                            />
                            <AboutInfoItem
                                title="University"
                                items={['BSEU']}
                            />
                            <AboutInfoItem
                                title="Cources"
                                items={['IT-Incubator']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">My Skills</h1>

                            <AboutInfoItem
                                title="FrontEnd"
                                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
                            />

                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiences</h1>

                            <AboutInfoItem
                                title="2021-2022"
                                items={['Front end developer ']}
                            />
                        </div>
                    </div>
                </div>
                <ContactBanner/>
            </AboutPageStyles>
        </>
    );
}
