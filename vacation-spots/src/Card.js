import React from 'react';

function Card(props){

    //background changes depending on time to Go attribute
    let background;
    switch(props.timeToGo){
        case ("Spring"):
            background = "yellow";
            break;
        case ("Summer"):
            background = "red";
            break;
        case ("Winter"):
            background = "white";
            break;
        default:
            background = "orange";
    }
    //Changing dollar signs depending on cost.
    let dollarSigns = (props.price < 500)? "$" : 
        props.price < 1000 ? "$$" : "$$$";

    return (
        <div className="card" style={{backgroundColor: background}}>
            <h1>Destination: {props.place}</h1>
            <h2>Price: {props.price}</h2>
            <h3>Best time to go: {props.timeToGo}</h3>
            <h4>{dollarSigns}</h4>

        </div>
    )

}

export default Card;