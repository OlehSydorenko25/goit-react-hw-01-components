import React from 'react';
import Friends from './Friends';
import PropTypes from 'prop-types';


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

FriendList.propTypes = {
    id: PropTypes.number
}

export default FriendList;