import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){
    return (
        <nav className="topnav">
            <Link to="./">Home</Link>
            <Link to="./about">About</Link>
            <Link to="./services">Services</Link>
        </nav>
    )
}

export default Header;