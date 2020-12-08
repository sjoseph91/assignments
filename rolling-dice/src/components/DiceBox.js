import React from 'react';

class DiceBox extends React.Component{
    constructor(){
        super()
        this.state = {rolls: [1,2,3,4,5,6]};
        this.rollDice = this.rollDice.bind(this);
        
    }
    rollDice(){
        let newDice = [];
        for (let i = 0; i < 6; i++){
            newDice.push(Math.ceil(Math.random() * 6))
        }
        this.setState( {rolls:newDice} )
    }
    render(){
        return (
            <div>
                <div className="dice-container">
                    <div className = "dice">
                        <div>{this.state.rolls[0]}</div>
                    </div>
                    <div className = "dice">
                        <div>{this.state.rolls[1]}</div>
                    </div>
                    <div className = "dice">
                        <div> {this.state.rolls[2]}</div>
                    </div>
                    <div className = "dice">
                        <div> {this.state.rolls[3]}</div>
                    </div>
                    <div className = "dice">
                        <div> {this.state.rolls[4]}</div>
                    </div>
                </div>
                <button onClick = {this.rollDice}>Roll Dice</button>
            </div>
        )
    }
    
}

export default DiceBox