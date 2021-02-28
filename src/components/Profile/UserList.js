import React from 'react'
import Profile from './Profile'


const UserList = ({ users }) => {
    // console.log(users);
    return (
        <ul>
            {users.map(({ name, tag, location, avatar, stats}) => {
                return (
                    <li key = {tag}>
                        <Profile
                        name={name}
                        tag={tag}
                        location={location}
                        avatar={avatar}
                        followers={stats.followers}
                        views={stats.views}
                        likes={stats.likes}
                        />
                    </li>
                    )
                })}
            </ul>
    )
}


export default UserList;