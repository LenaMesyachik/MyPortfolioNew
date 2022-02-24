import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var (--dark-bg);

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li{
      display: inline-block;
      border-radius: 8px;
      transition: .3s ease background-color;
      & hover{
        background-color: var(--deep-black);
      };
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
`
export const NavMenu = () => {
    return (
        <NavMenuStyle>
            <ul>
                <li><Link to='/' exact >Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </NavMenuStyle>
    )
}