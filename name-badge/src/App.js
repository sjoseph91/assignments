import React from 'react'
import './App.css';
import Badge from './Badge';

let idNumber = 1;
class App extends React.Component{
  constructor(){
    super()
    this.state= {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      about: "",
      badges: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    event.preventDefault();
    const {name, value} = event.target;
    this.setState(
      {[name]: value}
    )
  }
  
  handleSubmit(event){
    event.preventDefault();
    let newBadge = <Badge key={idNumber} info={this.state}/>
    idNumber++;
    this.setState(prev => {
      return {badges: [...prev.badges, newBadge] }
    })
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      about: ""
    })
  }



  render(){
    return (
      <main>
        <form name="bioForm" onSubmit = {this.handleSubmit}>
          <div className="form-top-part">
            <div>
              <label>First Name:
                <input
                type="text"
                name="firstName"
                minlength = "3"
                required
                placeholder="First Name"
                value={this.state.firstName}
                onChange = {this.handleChange} 
              />
              </label>
            </div>
            <div>
              <label>Last Name: 
                <input
                  type="text"
                  name="lastName"
                  minlength = "3"
                  required
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange = {this.handleChange} 
                />
              </label>
            </div>
            <div>
              <label>Email: 
                <input
                type="email"
                name="email"
                minlength = "3"
                required
                placeholder="Email"
                value={this.state.email}
                onChange = {this.handleChange} 
              />
              </label>
            </div>
            
            <div>
              <label>Place of Birth: 
                <input
                type="text"
                name="birthPlace"
                minlength = "3"
                required
                placeholder="Place of Birth"
                value={this.state.birthPlace}
                onChange = {this.handleChange} 
              />
              </label>
            </div>

            <div>
              <label>Phone: 
                <input
                type="number"
                name="phone"
                required
                placeholder="Phone"
                value={this.state.phone}
                onChange = {this.handleChange} 
              />
              </label>
            </div>
           

            <div>
              <label>Favorite Food: 
                <input
                type="text"
                name="favFood"
                minlength = "3"
                required
                placeholder="Favorite Food"
                value={this.state.favFood}
                onChange = {this.handleChange} 
              />
              </label>
            </div>
            

            
          </div>

          <div className="form-bottom-part">
            <textarea
              name="about"
              minlength = "3"
              value={this.state.about}
              required
              rows="8" cols="83"
              placeholder= "Tell us about yourself"
              onChange = {this.handleChange}

            />
          </div>
          <button type="submit" >Create Badge</button>
        </form>
        {this.state.badges}
      </main>
    )
  }
}

export default App;
