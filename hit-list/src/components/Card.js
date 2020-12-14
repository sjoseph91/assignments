import React from 'react';



function Card(props){
    let deletedStyle = props.info.deleted ? {opacity: 0.1, textDecoration: "line-through"} : {};
    
    
    return(
        <div id={props.id} className="card" onClick = {props.handleClick}>
            <div  className="card-image">
                <img style={deletedStyle} src={props.info.image} alt="Hit List Member"
                    width="400px" height="300px"
                    ></img>
            </div>
            <div className="card-header">
                <p style={deletedStyle}>{props.info.name}</p>
            </div>
            

        </div>
    )

}


export default Card