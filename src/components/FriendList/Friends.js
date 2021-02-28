import React from 'react';

const Friends = ({ name, avatar, isOnline, id }) => {
    return (
        <div key={id}>
            <span>{isOnline ? "Online" : "Offline"}</span>
            <img src={avatar} alt='Аватар' width='48' />
            <p>{name}</p>
        </div>
    );
}
 
export default Friends;