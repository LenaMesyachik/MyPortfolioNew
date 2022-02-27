import React from 'react';
import ServiceSectionTitle from "./ServiceSectionTitle";
import styled from "styled-components";
import ServicesSectionItem from "./ServicesSectionItem";

import {SiJavascript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import { RiComputerFill} from "react-icons/ri";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
function ServiceSection(props) {
    return (
        <ServicesItemsStyles>
            <div className="container">
                <ServiceSectionTitle heading='my skills' subheading='my skills'/>
                <div className="services__allItems">
                    <ServicesSectionItem
                        icon={<FaReact />}
                        title="React"
                        desc="I do ui/ux design for the website that helps website to get a unique look."
                    />
                    <ServicesSectionItem
                        icon={<RiComputerFill />}
                        title="web dev"
                        desc="I also develop the websites. I create high performance website with blazing fast speed."
                    />
                    <ServicesSectionItem
                        icon={<SiJavascript />}
                        title="Javascript"
                        desc="I develop mobile application. I create mobile app with eye catching ui. "
                    />
                </div>
            </div>
        </ServicesItemsStyles>
    );
}

export default ServiceSection;