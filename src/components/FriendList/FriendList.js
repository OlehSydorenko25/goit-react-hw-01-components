import React from 'react';
import Friends from './Friends'

const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({name, avatar, isOnline, id}) => {
                return (
                    <li key={id}>
                        <Friends
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                            id={id}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList;