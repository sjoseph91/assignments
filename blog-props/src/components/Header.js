import React from 'react';
import Navbar from "./Navbar";

function Header(){
    return (
        <div className="header">
            <Navbar/>
            <h1>Clean Blog</h1>
            <h2>A Blog Theme by Start Bootstrap </h2>
        </div>
    )
}

export default Header;