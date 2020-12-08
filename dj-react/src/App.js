import React from 'react';
import Square from "./Square";

class App extends React.Component{
    constructor(){
        super()
        this.state = {colors: ["white", "white", "white", "white"]};
        this.handleSmallTimeClick = this.handleSmallTimeClick.bind(this);
        this.handlePartyClick = this.handlePartyClick.bind(this);
        this.handleBottomLeftClick = this.handleBottomLeftClick.bind(this);
        this.handleBottomRightClick = this.handleBottomRightClick.bind(this);
        this.partyTime = this.partyTime.bind(this);
        this.endPartyTime = this.endPartyTime.bind(this);
        
        
    }

    handleSmallTimeClick(){
        
        this.setState(prevState => {
            return (prevState.colors[0] ==="white")?
                    {colors: ["black", "black", "black", "black"]}
                    : {colors: ["white", "white", "white", "white"]}
        })
        
    }
    handlePartyClick(){
        this.setState(prevState =>{
            return (
                {colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]}
            )
        })
    }
    handleBottomLeftClick(){
        this.setState( prevState => {
            return (
                {colors: [ prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3] ] }
            )
        })
    }

    handleBottomRightClick(){
        this.setState(prevState =>{
            return (
                {colors: [prevState.colors[0], prevState.colors[1],prevState.colors[2], "blue"] }
            )
        })
    }

    partyTime(){
            
            const interval = setInterval( () =>{
                this.setState(prevState =>{
                    return (
                        {colors: [prevState.colors[3], prevState.colors[2], prevState.colors[0], prevState.colors[1] ]
                        ,intervalID: interval }
                    )
                }) 
            }

            , 500)

            
            
            
        
    }
    endPartyTime(){
        this.setState (prevState =>{
            clearInterval(prevState.intervalID);
            return {colors: ["red", "red", "red", "red"]}
        })
        
    }


    render(){
        let squareComponents = this.state.colors.map(sq => <Square color = {sq}/>)
        return (
            <div className="flex-container">
                <div className="square-container">
                    {squareComponents}
                    <button onClick = {this.handleSmallTimeClick}>Small time DJ</button>
                    <button onClick = {this.handlePartyClick}>Party DJ</button>
                    <button onClick = {this.handleBottomLeftClick}>Bottom Left</button>
                    <button onClick = {this.handleBottomRightClick}>Bottom Right</button>
                    <button onClick = {this.partyTime}>Click for Party Time!!!</button>
                    <button onClick = {this.endPartyTime}>Click to end the party</button>
                </div>
            </div>
        )
    }
}


export default App;