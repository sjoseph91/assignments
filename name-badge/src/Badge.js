import React from 'react';

function Badge(props){
   
    return (
        
        
            <div className="badge">
                <div className="badge-header">Badge:</div>
                <div className="badge-content">
                    <p>Name: {props.info.firstName} {props.info.lastName}</p>
                    <p>Phone: {props.info.phone}</p>
                    <p>Place of Birth: {props.info.birthPlace}</p>
                    <p>Favorite Food: {props.info.favFood}</p>
                    <p>Email: {props.info.email}</p>
                    <textarea value={props.info.about}></textarea>
                </div>
                
            </div>
        
    )
    
}

export default Badge