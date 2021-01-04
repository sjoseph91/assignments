import React from 'react';
import {ThemeConsumer} from './ThemeProvider'

function Navbar(props){
    return (
        <ThemeConsumer>
            {({theme, changeTheme}) => (
                <nav className={`topnav ${theme}-theme`}>
                    <a href="http://www.google.com">Link1</a>
                    <a href="http://www.google.com">Link2</a>
                    <a href="http://www.google.com">Link3</a>
                    <div style={{width: "200"}}>
                        <select name="theme" onChange={(e) =>changeTheme(e.target.value)}>
                            <option value="default">Select a theme</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="sepia">Sepia</option>
                        </select>

                    </div>
            
                </nav>
            )}
            
        </ThemeConsumer>
        
    )
}
export default Navbar;