import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";


const ButtonStyle = styled.div`
  margin-top: 2rem;

  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
            (props.outline ? 'transparent' : 'var(--gray-1)')};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

function Button({btnText = 'Test', btnLink = 'test',outline = false, ...props}) {
    console.log(props)
    return (
        <ButtonStyle outline={outline}>
            <Link className='button' to={btnLink}>
                {btnText}
            </Link>
        </ButtonStyle>
    );
}

export default Button;