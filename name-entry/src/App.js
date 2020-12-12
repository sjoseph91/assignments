import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "",
      allNames: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    
  }

  handleChange(event){
    this.setState({name: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState(prev => {
      return {allNames: prev.allNames.concat(prev.name)}
    })
    
  
  }


  


  render(){
    return (
      <main>
        <form onSubmit = {this.handleSubmit}>
          <input 
            type="text" 
            name="name" 
            value={this.state.name} 
            placeholer="enter name"
            onChange = {this.handleChange}
          />
          <br>
          </br>
          <button type="submit">Submit</button>
        </form>
        <h1>Name: {this.state.name}</h1>
        <ol id="list">
          {this.state.allNames.map( name => (<li>{name}</li>) ) }

        </ol>
      </main>
    )
  }
}

export default App;
