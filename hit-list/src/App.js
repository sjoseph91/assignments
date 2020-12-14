import React from 'react';
import './App.css';
import Card from "./components/Card";

class App extends React.Component{
constructor(){
  super()
  this.state = {
    loading: false,
    characters: []
  };
  this.handleClick = this.handleClick.bind(this);
}

componentDidMount(){
  this.setState({loading: true});
  fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
    .then(response => response.json())
    .then(response => {
      this.setState({characters: response, loading: false})
    })
    .catch(error => console.log(error));
  
}
handleClick(event){
  const indexSelected = event.target.parentNode.parentNode.id;
  console.log(indexSelected)
  this.setState(prevState =>{
    let updatedCharacters = [...prevState.characters];
    updatedCharacters[+indexSelected].deleted = !prevState.characters[+indexSelected].deleted
    return updatedCharacters;
  })
  console.log(this.state.characters)
}

render(){
  let Cards = this.state.characters.map( (person, index) => {
    return <Card 
            info= {person}
           handleClick = {this.handleClick}
           key={index}
           id={index}
           />})
  return (
    <div>
        <h1>Hit List</h1>
      <div className="card-container">
        {Cards}
      </div>
    </div>
  )
}


}
export default App;
