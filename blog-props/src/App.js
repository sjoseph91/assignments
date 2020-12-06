import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";

function App(){
    return (
        <div>
            <Header/>
            <BlogList/>
            <hr></hr>
            <Footer/>
        </div>
        
    )
}
export default App;