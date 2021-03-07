import React from 'react';
import PropTypes from "prop-types";
import defaultAvatar from '../../images/default-avatar.png';
import styles from'./FriendList.module.css'



const Friends = ({ name, avatar, isOnline, id }) => {
    return (
        <li className={styles.friendItem}>
            {isOnline ? <span className={styles.online}></span> : <span className={styles.offline}></span>}
            <img src={avatar} alt='Аватар' />
            <p>{name}</p>
        </li>
    );
}

Friends.defaultProps = {
    avatar: defaultAvatar
}

Friends.protoTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired 
}
 
export default Friends;