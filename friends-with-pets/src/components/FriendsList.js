import React from 'react';
import friends from "./friendsData";
import Friend from "./Friend";

function FriendsList(){

    const ListOfFriends = friends.map( person => {
    return <Friend 
        key = {person.key}
        name = {person.name} 
        age = {person.age} 
        pets = {person.pets}
    />
})
    return (
        <div className="friends-container">
            {ListOfFriends}
        </div>
    )
}

export default FriendsList;