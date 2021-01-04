import React from 'react';
import {ThemeConsumer} from './ThemeProvider';


function Footer(){
    return (
        <ThemeConsumer>
            {({theme}) => (
                <footer className={`footer ${theme}-theme`}>
                    <a href="http://www.google.com">Contact us</a>
                    <a href="http://www.google.com">More info</a>
                    We'd Love to here from you.
                </footer>
            )}
        </ThemeConsumer>
       
    )
}
export default Footer;