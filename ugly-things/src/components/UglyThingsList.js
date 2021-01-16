import React from 'react';
import {UglyDataConsumer} from '../uglyDataContext';
import UglyThingsTile from './UglyThingTile'

function UglyThingsList(props){
    return (
        <div className="main-container">
            <ul>
                <UglyDataConsumer>
                    {(contextVal) =>{
                        
                        return (contextVal.uglyThings.map( thing => (
                            <li key={thing._id}>
                                <UglyThingsTile data={thing}/>
                            </li>
                            )
                        ))
                    }}
                </UglyDataConsumer>
            </ul>
        </div>
    )
}

export default UglyThingsList;