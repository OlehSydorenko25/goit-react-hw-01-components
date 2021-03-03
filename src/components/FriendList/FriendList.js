import React from 'react';
import Friends from './Friends'
import styles from'./FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({name, avatar, isOnline, id}) => {
                return (
                    <li key={id}  className={styles.friendItem}>
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