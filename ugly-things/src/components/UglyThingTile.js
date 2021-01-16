//receivs data through props and returns a tile with the data formatted nicely.
//The buttons are receiving info through context bc they need access to the 
// edit and delete functions defined in uglyDataContext.js
/* on click edit, open box with three fields, have user fill in those fields, edit button turns into save, data is gotten from those fields
run a put request in axios. I need to get the edit function from context...
*/

import React from 'react'
import {UglyDataConsumer} from '../uglyDataContext';


export default class UglyThingTile extends React.Component{

    state = {
        editing: false
    }

    handleEdit = (e) =>{
        e.preventDefault();
        
        this.setState({editing: !this.state.editing})
    }
    handleSave = (e) =>{
        e.preventDefault();
        console.log("saved")
        const form = document.editForm;
        
        
        return ({
            title: form.title.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value
        })
        
    }
    render(){
        if (this.state.editing) {
            return (
                <UglyDataConsumer>
                            
                            {({edit}) => (
                                <div id="editBox" style={{border:"2px solid black"}}>
                                    <form 
                                        name="editForm"  
                                        onSubmit={(e) =>{
                                            edit(this.handleSave(e), this.props.data._id);
                                            this.setState({editing: !this.state.editing})
                                        }}
                                    >
                                        <input name="title" placeholder={this.props.data.title}></input>
                                        <input name="description" placeholder={this.props.data.description}></input>
                                        <input type="url" name="imgUrl" placeholder="imgUrl"></input>
                                        <button type="submit">Save Changes</button>
                                        <button onClick={() => this.setState({editing: !this.state.editing})}>Cancel</button>
                                    </form>
                                </div>
                            )}
                </UglyDataConsumer>
            )
        }
        else{
            return (
                <div className="tile">
                <div className="tile-image">
                    <img width="100%" max-width="100%" alt="sample" src={this.props.data.imgUrl}/>
                </div>
                <div className="tile-text">
                    <h2>{this.props.data.title}</h2>
                    <h3>{this.props.data.description}</h3>

                </div>
        
                <UglyDataConsumer>
                    
                    {({del}) => (
                        <div>
                            <button className="edit" onClick={this.handleEdit}>Edit</button>
                            <button 
                                onClick= {() => del(this.props.data._id)}
                                >
                                Delete
                            </button>
                        </div>
                    )}
                </UglyDataConsumer>
                
                
            </div>
            )
        }
        
    }
    
    
}


