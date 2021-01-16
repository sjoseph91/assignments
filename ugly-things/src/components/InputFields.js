import React from 'react'
import {UglyDataConsumer} from '../uglyDataContext';
class InputFields extends React.Component{
    state = {
        title: "",
        imgUrl: "",
        description: ""
    }
    handleChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    



    render(){
        return (
            <UglyDataConsumer>
                {({addUglyThing}) => (
                    <form name="ugly-things-form" className="form-container" onSubmit={(e) =>{
                        e.preventDefault();
                        addUglyThing({
                            title: this.state.title,
                            imgUrl: this.state.imgUrl,
                            description: this.state.description
                        })
                        this.setState({
                            title: "",
                            imgUrl: "",
                            description: ""
                        })
                    }}>
                        <div>
                            <label for="title">Title: </label>
                            <input 
                                type="text" 
                                required 
                                name="title" 
                                id="title" 
                                placeholder="Enter title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                >

                            </input>
                        </div>
                        <div>
                            <label for="imgUrl">ImgUrl: </label>
                            <input 
                                type="text" 
                                required 
                                name="imgUrl" 
                                id="imgUrl" 
                                placeholder="Enter Image URL"
                                value={this.state.imgUrl}
                                onChange={this.handleChange}
                                >

                            </input>
                        </div>
                        <div>
                            <label for="description">Description: </label>
                            <input 
                                type="text" 
                                required 
                                name="description" 
                                id="description"
                                placeholder="Enter Description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                >
                                    
                            </input>
                        </div>
                        <button id="submit-button" type="submit">Submit</button>
                    </form>
                )}
            </UglyDataConsumer>
            
    
           
        )
    }
    
}

export default InputFields;