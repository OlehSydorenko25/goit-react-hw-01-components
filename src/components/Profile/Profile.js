import React from 'react';
import defaultAvatar from '../../images/default-avatar.png';
import PropTypes from "prop-types";
import styles from './Profile.module.css'


const Profile = ({ name, tag, location, avatar, stats}) => {
    return (
    <div className={styles.profileBlock}>
        <div>
            <img
                className={styles.avatar}
                src={avatar}
                alt="Аватар пользователя"
            />
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>@{tag}</p>
                <p className={styles.text}>{location}</p>
        </div>

        <ul className={styles.info}>
            <li>
                <span className={styles.text}>Followers</span>
                <span className={styles.numbers}> {stats.followers}</span>
            </li>
            <li>
                <span className={styles.text}>Views</span>
                <span className={styles.numbers}> {stats.views}</span>
            </li>
            <li>
                <span className={styles.text}>Likes</span>
                <span className={styles.numbers}> {stats.likes}</span>
            </li>
        </ul>
    </div>
    )
};
    
Profile.defaultProps = {
    avatar: defaultAvatar
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
}

export default Profile;