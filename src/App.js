import React from 'react'
import users from './json/users.json'
import UserList from "./components/UserList";


const App = () => (
        <div>
            <h1>Главный контейнер прилодения</h1>

        <UserList users={users} />

            
        </div>
    )

export default App;