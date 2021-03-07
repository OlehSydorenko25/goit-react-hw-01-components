import React from 'react';
import Profile from './components/Profile/Profile';
import statisticalData from './json/statistics-data.json';
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './json/user.json';
import Statistics from './components/Statistics/Statistics';
import friends from './json/friends.json'
import transaction from './json/transactions.json';

import './styles.css'

const App = () => (
        <div className='main'>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
        
            <Statistics
                title="Upload stats"
                stats={statisticalData}
            />
        
            <FriendList friends={friends} />
        
            <TransactionHistory transaction={transaction}/>
        </div>
    )

export default App;

