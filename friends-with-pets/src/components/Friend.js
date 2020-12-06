import React from 'react';
import Pet from "./Pet"

function Friend(props){
    const pets = props.pets;
    const PetComponents = pets.map(pet => <Pet name={pet.name} breed = {pet.breed}/>)
    return (
        <div className="friend">
                <h1 className="name">{props.name}</h1>
                <h2 className="age">Age: {props.age}</h2>
                {PetComponents}
        </div>
    )
}

export default Friend;