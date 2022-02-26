import React from 'react';
import {Link} from "react-router-dom";

function Button({btnText,btnLink,...props}) {
    console.log(props)
    return (
       <Link className ='button' to = {btnLink} >
           {btnText}
       </Link>
    );
}

export default Button;