import React from 'react';
import styled from "styled-components";
import PText from "./PText";
import {MdDesktopMac} from "react-icons/md";


const ItemStyles = styled.div`
  text-align: center;

  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }

  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }

  .para {
    margin-top: 2rem;
  }
`;

function ServicesSectionItem({
                                 icon = <MdDesktopMac/>,
                                 title = 'Web Design',
                                 text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
                             }) {
    return (
        <ItemStyles className="servicesItem">
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText text = 'text'/>
        </ItemStyles>
    );
}

export default ServicesSectionItem;