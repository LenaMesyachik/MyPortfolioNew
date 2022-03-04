import React from 'react';
import styled from 'styled-components';
import {MdEmail, MdLocalPhone} from 'react-icons/md';
import SectionTitle from "./SectionTitle";
import ContactInfoItem from "./ContactInfoItem.jsx";


const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  
  .left {
    width: 100%;
    max-width: 1000px;
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }

`;

export default function ContactSection() {
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTitle heading="contact" subheading="get in touch" />
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem icon={<MdLocalPhone />} text="+375(25)5208964" />
                        <ContactInfoItem icon={<MdEmail />} text="mesyachik96@inbox.ru" />
                        <ContactInfoItem text="Belarus, Minsk" />
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    );
}
