import React from 'react';
import vacationSpots from "./vacationSpots";
import Card from "./Card";


function App(){
    const vacationComponents = vacationSpots.map(spot => <Card key = {spot.id} place = {spot.place} price = {spot.price} timeToGo = {spot.timeToGo}/>)
    return (
        <div className="card-list">
            {vacationComponents}
        </div>
    )
}


export default App