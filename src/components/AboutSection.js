import React from 'react';
import ProjectsTitle from "./ProjectItem";
import styled from "styled-components";
import PText from "./PText";
import Button from "./Button";
import AboutImg from '../assets/img/photo_2022-02-26_14-26-32.jpg'
import SectionTitle from "./SectionTitle";

const AboutSectionStyles = styled.div`
  padding: 10rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }

    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }

    .aboutSection__right {
      margin-top: 3rem;
    }

    .section-title {
      text-align: center;
    }

    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }

    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;

      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function AboutSection(props) {
    return (
        <AboutSectionStyles>
            <div className='container'>
                <div className='aboutSection__left'>
                    <SectionTitle
                        subheading="Let me introduce myself"
                        heading="About Me"/>
                    <PText text={' I am working as a freelance front-end developer.'}/>
                    <div className="aboutSection__buttons">
                        <Button btnText="Works" btnLink="/projects"/>
                        <Button btnText="Read More" btnLink="/about" outline/>
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img className="AboutImg" src={AboutImg} alt="Img"/>
                </div>
            </div>
        </AboutSectionStyles>
    );
}

export default AboutSection;