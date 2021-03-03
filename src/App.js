import React from 'react';
import './styles.css'

import users from './json/users.json';
import UserList from './components/Profile/UserList';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './json/statistics-data.json';

import FriendList from "./components/FriendList/FriendList";
import friends from './json/friends.json'

import transaction from './json/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


const App = () => (
        <div className='main'>
            <UserList users={users} />
        
            <Statistics
                title="Upload stats"
                statisticalData={statisticalData} />
        
            <FriendList friends={friends} />
        
            <TransactionHistory transaction={transaction}/>
        </div>
    )

export default App;

