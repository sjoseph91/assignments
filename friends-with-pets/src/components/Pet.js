import React from 'react';

function Pet(props){
    return (
        <div>
            <h3>Pet name: {props.name}</h3>
            <h4>Breed: {props.breed}</h4>
        </div>
    )
}

export default Pet;