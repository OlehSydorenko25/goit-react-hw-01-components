import React from 'react'
import Profile from './Profile'
import styles from './Profile.module.css'



const UserList = ({ users }) => {
    return (
        <ul className={styles.profile}>
            {users.map(({ name, tag, location, avatar, stats}) => {
                return (
                    <li key = {tag} className={styles.block}>
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