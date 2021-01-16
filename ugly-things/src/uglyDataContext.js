import React from 'react'
import axios from 'axios';
const {Provider, Consumer} = React.createContext();
const baseURL = "https://api.vschool.io/seanjoseph/thing/";

class UglyDataProvider extends React.Component{
    state = {
        uglyThings: []
    }

    componentDidMount(){
        this.getUglyThings();
    }
    getUglyThings = () =>{
        axios.get(baseURL)
        .then(res => {
            this.setState({uglyThings: res.data})

        })
        .catch(err => console.log(err))
    }
    deleteUglyThing = (id) =>{
        axios.delete(baseURL + id)
            .then(res => this.getUglyThings())
            .catch(err => console.log(err))
        
    }
    addUglyThing = (newUglyThingObj) =>{
        axios.post(baseURL, newUglyThingObj)
            .then( res => this.getUglyThings())
            .catch(err => console.log(err))
        
    }

    editUglyThing = (newObj, id) =>{
        axios.put(baseURL + id, newObj)
        .then(res =>this.getUglyThings())
        .catch(err => console.log(err))
    }
    render(){
        const uglyContextValue = {
            uglyThings: this.state.uglyThings,
            addUglyThing: this.addUglyThing,
            del: this.deleteUglyThing,
            edit: this.editUglyThing
        }
        return (
            <Provider value={uglyContextValue}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyDataProvider, Consumer as UglyDataConsumer};