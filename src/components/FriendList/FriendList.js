import React from 'react';
import Friends from './Friends'

const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({name, avatar, isOnline, id}) => {
                return (
                        <Friends key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                            id={id}
                        />
                )
            })}
        </ul>
    )
}

export default FriendList;