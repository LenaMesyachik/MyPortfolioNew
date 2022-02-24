import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top:0;
  left:0;
  width: 100%;
  padding: 1rem 0;
  background: var (--dark-bg);
`
export const NavMenu = () => {
    return (
       <NavMenuStyle>
           <ul>
               <li><Link to = '/'>Home</Link></li>
               <li> <Link to = '/about'>About</Link></li>
               <li><Link to = '/projects'>Projects</Link></li>
               <li><Link to = '/contact'>Contact</Link></li>
           </ul>
       </NavMenuStyle>
    )
}