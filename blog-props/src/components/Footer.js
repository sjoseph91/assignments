import React from 'react';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebook} from "react-icons/fa";
import {AiFillGithub} from 'react-icons/ai';

function Footer(){
    return (
        <div class="footer">
           <div>
            <a href="www.facebook.com"><i><AiFillTwitterCircle/></i></a>
            <a href="www.facebook.com"><i><FaFacebook/></i></a>
            <a href="www.github.com"><i><AiFillGithub/></i></a>
            </div>
           
           <p><small>Copyright My website 2020</small></p>
        </div>
    )
}

export default Footer;