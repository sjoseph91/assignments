
import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      backgroundColor: "white"
    };
  }

  componentDidMount(){
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res =>{
        let newColor = res.data.colors[0].hex;
        this.setState({backgroundColor: `#${newColor}`})
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div 
        className = "app-component"
        style={{backgroundColor: this.state.backgroundColor}}>
        hello
      </div>
    )
  }
}

export default App;