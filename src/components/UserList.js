import React from 'react'
import Profile from './Profile'


const UserList = ({users}) => (
        <ul>
            {users.map(({ name, tag, location, avatar, stats}) => {
                return (
                    <li key = {name}>
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


export default UserList;