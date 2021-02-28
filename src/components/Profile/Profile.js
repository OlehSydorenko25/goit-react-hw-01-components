import React from 'react';
import defaultAvatar from '../../images/default-avatar.png';
import PropTypes from "prop-types";


const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
    return (
    <div>
        <div>
            <img
                src={avatar}
                alt="Аватар пользователя"
                width="200"
            />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span> {followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span> {views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span> {likes}</span>
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
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}

export default Profile;